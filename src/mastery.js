import { masteryTasks } from './mastery-content.js';

const PHASE_WEEKS = new Set([4, 8, 12, 16, 20, 24, 26]);
const MAX_ROWS = 5000;
const MAX_TEXT = 20000;
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const object = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const integer = (value, min, max) => Number.isSafeInteger(value) && value >= min && value <= max;
const weekValid = value => integer(value, 1, 26);
const textValid = (value, max = MAX_TEXT) => typeof value === 'string' && value.length <= max;
const nonempty = (value, max = MAX_TEXT) => textValid(value, max) && value.trim().length > 0;
const scoresValid = value => Array.isArray(value) && value.length === 4 && Array.from(value).every(score => integer(score, 0, 3));
const rubricPassed = scores => scoresValid(scores) && scores.every(score => score > 0) && scores.reduce((sum, score) => sum + score, 0) >= 8;
const chronological = rows => [...rows].sort((a, b) => a.createdAt.localeCompare(b.createdAt));
const taskFor = week => weekValid(week) ? masteryTasks.find(task => task.week === week) : null;

function timestamp(value) {
  if (typeof value !== 'string' || value.length > 40 || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/.test(value)) return null;
  const date = value.slice(0, 10);
  const calendar = Date.parse(`${date}T00:00:00.000Z`);
  if (!Number.isFinite(calendar) || new Date(calendar).toISOString().slice(0, 10) !== date) return null;
  const time = Date.parse(value);
  return Number.isFinite(time) ? new Date(time).toISOString() : null;
}

function identity(row) {
  const createdAt = timestamp(row.createdAt);
  return typeof row.id === 'string' && UUID.test(row.id) && createdAt ? { id: row.id, createdAt } : null;
}

function strings(value) {
  if (!Array.isArray(value) || value.length > 100 || !Array.from(value).every(item => nonempty(item))) return null;
  return Object.freeze([...value]);
}

/** Validate upstream AI output without inventing a score for an unassessable aspect. */
export function normalizeAssessment(input) {
  if (!object(input) || !['needs_revision', 'provisional_pass'].includes(input.status)) return null;
  if (!Array.isArray(input.scores) || input.scores.length !== 4 || !Array.from(input.scores).every(score => score === null || integer(score, 0, 3))) return null;
  if (!nonempty(input.feedback) || !nonempty(input.nextAction) || !nonempty(input.model, 1000)) return null;
  if (input.transcript !== null && !textValid(input.transcript)) return null;
  const strengths = strings(input.strengths);
  const improvements = strings(input.improvements);
  const limitations = strings(input.limitations);
  if (!strengths || !improvements || !limitations) return null;
  if (input.scores.includes(null) && limitations.length === 0) return null;
  if (input.status === 'provisional_pass' && (!rubricPassed(input.scores) || limitations.length > 0)) return null;
  return Object.freeze({
    status: input.status, scores: Object.freeze([...input.scores]), feedback: input.feedback,
    strengths, improvements, nextAction: input.nextAction, transcript: input.transcript,
    limitations, model: input.model,
  });
}

/** Practice is day-specific and cannot satisfy weekly or phase checkpoints. */
export function masteryTaskId(week, kind, stage = 'weekly', day) {
  if (!weekValid(week) || !['writing', 'speaking'].includes(kind) || !['weekly', 'phase', 'practice'].includes(stage)) return null;
  if (stage === 'practice') return kind === 'speaking' && integer(day, 1, 6) ? `w${week}-d${day}-practice-speaking` : null;
  if (stage === 'phase' && !PHASE_WEEKS.has(week)) return null;
  return `w${week}-${stage}-${kind}`;
}

function normalizedAnswer(value) {
  return typeof value === 'string'
    ? value.normalize('NFKC').toLowerCase().replace(/[\p{P}\p{S}]/gu, ' ').replace(/\s+/g, ' ').trim()
    : '';
}

/** Finite canonical answers only; no length-based, self-rated, or model-invented pass. */
export function gradeUnderstanding(week, answers) {
  const task = taskFor(week);
  const supplied = Array.isArray(answers) ? answers : [];
  const feedback = (task?.questions ?? []).map((question, index) => {
    const response = textValid(supplied[index]) ? supplied[index] : '';
    const value = normalizedAnswer(response);
    const correct = value.length > 0 && question.accepted.some(answer => normalizedAnswer(answer) === value);
    return { correct, explanation: question.explanation, answer: question.accepted[0], response };
  });
  const score = feedback.reduce((sum, row) => sum + Number(row.correct), 0);
  const total = feedback.length;
  return { score, total, passed: total > 0 && score / total >= 0.75, feedback };
}

function normalizeCheck(input) {
  if (!object(input) || !taskFor(input.week) || !Array.isArray(input.answers) || input.answers.length > 4 || !Array.from(input.answers).every(value => textValid(value))) return null;
  const meta = identity(input);
  if (!meta) return null;
  const answers = Object.freeze([...input.answers]);
  const { score, total, passed } = gradeUnderstanding(input.week, answers);
  return { ...meta, week: input.week, answers, score, total, passed, fresh: false };
}

function normalizeSubmission(input) {
  if (!object(input)) return null;
  const meta = identity(input);
  const taskId = masteryTaskId(input.week, input.kind, input.stage, input.day);
  if (!meta || !taskId || input.taskId !== taskId || !textValid(input.text)) return null;
  if (input.parentId !== null && (typeof input.parentId !== 'string' || !UUID.test(input.parentId))) return null;
  if (input.audioId !== null && (typeof input.audioId !== 'string' || !UUID.test(input.audioId))) return null;
  const sourceId = input.sourceId ?? null;
  if (sourceId !== null && (typeof sourceId !== 'string' || !UUID.test(sourceId))) return null;
  if (input.kind === 'writing' && !input.text.trim()) return null;
  if (input.kind === 'speaking' && !input.audioId && !input.text.trim()) return null;
  return {
    ...meta, week: input.week, kind: input.kind, stage: input.stage, taskId,
    ...(input.stage === 'practice' ? { day: input.day, taskPrompt: textValid(input.taskPrompt) ? input.taskPrompt : '' } : {}),
    parentId: input.parentId, sourceId, text: input.text, audioId: input.audioId,
    assessment: normalizeAssessment(input.assessment), independent: input.independent === true && input.parentId === null,
  };
}

function normalizeHumanReview(input) {
  if (!object(input) || !weekValid(input.week) || !['weekly', 'phase'].includes(input.stage)) return null;
  if (input.stage === 'phase' && !PHASE_WEEKS.has(input.week)) return null;
  const meta = identity(input);
  if (!meta || typeof input.submissionId !== 'string' || !UUID.test(input.submissionId)) return null;
  if (!nonempty(input.reviewer, 1000) || !nonempty(input.feedback) || !scoresValid(input.scores)) return null;
  // These labels assert a category or self-rating, not a reported human identity.
  if (['self', 'ai', 'human', 'saya', 'diri sendiri', 'manusia', 'chatgpt'].includes(input.reviewer.trim().toLowerCase())) return null;
  return Object.freeze({
    ...meta, week: input.week, stage: input.stage, submissionId: input.submissionId,
    reviewer: input.reviewer, feedback: input.feedback, scores: Object.freeze([...input.scores]),
    independent: input.independent === true,
  });
}

function rows(input, normalize) {
  if (!Array.isArray(input)) return [];
  const result = [];
  const ids = new Set();
  for (const value of input.slice(0, MAX_ROWS)) {
    const row = normalize(value);
    if (!row || ids.has(row.id)) continue;
    ids.add(row.id);
    result.push(row);
  }
  return result;
}

function attachmentSource(row, accepted) {
  const source = accepted.get(row.sourceId);
  if (!source || source.sourceId !== null || source.assessment !== null) return null;
  return source.taskId === row.taskId && source.taskPrompt === row.taskPrompt && source.parentId === row.parentId && source.text === row.text && source.audioId === row.audioId ? source : null;
}

/** Separate evidence store: never promotes legacy checklists, notes or self-ratings. */
export function emptyMastery() {
  return { checks: [], submissions: [], humanReviews: [] };
}

/**
 * Copy imported evidence into immutable records; containers remain appendable.
 * All valid attempts survive. Recomputed grades and ancestry prevent a malformed
 * import, repeat or assisted revision from becoming independent evidence.
 */
export function normalizeMastery(input) {
  const result = emptyMastery();
  if (!object(input)) return result;
  const checks = rows(input.checks, normalizeCheck);
  const checkedWeeks = new Set();
  for (const row of chronological(checks)) {
    row.fresh = !checkedWeeks.has(row.week);
    checkedWeeks.add(row.week);
    Object.freeze(row);
  }
  result.checks = checks;
  const submissions = rows(input.submissions, normalizeSubmission);
  const accepted = new Map();
  const attemptedTasks = new Set();
  const byId = new Map(submissions.map(row => [row.id, row]));
  for (const row of chronological(submissions.filter(item => item.sourceId === null))) {
    if (row.parentId !== null) {
      const parentEvent = byId.get(row.parentId);
      const parent = parentEvent && parentEvent.sourceId !== null ? attachmentSource(parentEvent, accepted) : accepted.get(row.parentId);
      if (!parent || parent.taskId !== row.taskId || parent.taskPrompt !== row.taskPrompt || parent.createdAt > row.createdAt) continue;
    }
    // A repeat can show learning, but is not a new unassisted first attempt.
    const attemptKey = row.stage === 'practice' ? `${row.taskId}:${row.taskPrompt}` : row.taskId;
    if (attemptedTasks.has(attemptKey)) row.independent = false;
    attemptedTasks.add(attemptKey);
    accepted.set(row.id, Object.freeze(row));
  }
  for (const row of submissions) {
    if (row.sourceId === null) continue;
    const source = attachmentSource(row, accepted);
    if (!source) continue;
    row.independent = source.independent;
    accepted.set(row.id, Object.freeze(row));
  }
  result.submissions = submissions.filter(row => accepted.has(row.id));
  result.humanReviews = rows(input.humanReviews, normalizeHumanReview).filter(row => {
    const submission = accepted.get(row.submissionId);
    return submission && row.week === submission.week && row.stage === submission.stage && row.createdAt >= submission.createdAt;
  });
  return result;
}

function latest(rows) {
  let found = null;
  for (const row of rows) if (!found || row.createdAt >= found.createdAt) found = row;
  return found;
}

function stageSummary(submissions, stage, required) {
  const current = kind => {
    const drafts = submissions.filter(row => row.stage === stage && row.kind === kind && row.sourceId === null);
    const draft = latest(drafts);
    if (!draft) return null;
    // API and browser timestamps may differ. Append order determines retries;
    // feedback for an older source never supersedes the newest learner draft.
    return submissions.filter(row => row.sourceId === draft.id).at(-1) ?? draft;
  };
  const writing = current('writing');
  const speaking = current('speaking');
  const passed = [writing, speaking].every(row => row?.assessment?.status === 'provisional_pass');
  return { required, writing, speaking, passed };
}

/**
 * UI contract: status describes learning evidence only, never a CEFR certification.
 * humanVerified means a user-reported named-human review, not identity verification.
 * Revisions may pass provisionally but cannot satisfy independent human evidence.
 */
export function masteryStatus(state, week) {
  const evidence = normalizeMastery(state?.mastery);
  const checks = evidence.checks.filter(row => row.week === week);
  const submissions = evidence.submissions.filter(row => row.week === week && row.stage !== 'practice');
  const currentCheck = latest(checks);
  const weekly = stageSummary(submissions, 'weekly', true);
  const phase = stageSummary(submissions, 'phase', PHASE_WEEKS.has(week));
  const relevant = [weekly.writing, weekly.speaking, ...(phase.required ? [phase.writing, phase.speaking] : [])];
  const provisionalPass = Boolean(currentCheck?.passed && weekly.passed && (!phase.required || phase.passed));
  const reviewsBySubmission = new Map();
  for (const row of evidence.humanReviews) {
    const previous = reviewsBySubmission.get(row.submissionId);
    if (!previous || previous.createdAt <= row.createdAt) reviewsBySubmission.set(row.submissionId, row);
  }
  const humanVerified = provisionalPass && relevant.every(row => {
    if (!row?.independent || row.parentId !== null) return false;
    const review = reviewsBySubmission.get(row.sourceId ?? row.id) ?? reviewsBySubmission.get(row.id);
    return review?.independent === true && rubricPassed(review.scores);
  });
  const needsRevision = relevant.some(row => row?.assessment?.status === 'needs_revision');
  const status = humanVerified ? 'human_verified' : provisionalPass ? 'provisional_pass' : needsRevision ? 'needs_revision'
    : checks.length || submissions.length ? 'submitted' : 'not_started';
  return {
    week, status,
    understanding: { passed: currentCheck?.passed === true, score: currentCheck?.score ?? 0, total: currentCheck?.total ?? taskFor(week)?.questions.length ?? 0, attempts: checks.length, latest: currentCheck },
    weekly, phase, provisionalPass, humanVerified,
    humanVerificationNote: 'Dilaporkan pengguna; identitas penilai tidak diverifikasi aplikasi.',
    submissionCount: submissions.filter(row => row.sourceId === null).length,
    revisionCount: submissions.filter(row => row.sourceId === null && row.parentId !== null).length,
    independentSubmissionCount: submissions.filter(row => row.sourceId === null && row.independent).length,
  };
}
