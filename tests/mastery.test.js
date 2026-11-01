import test from 'node:test';
import assert from 'node:assert/strict';
import { masteryTasks } from '../src/mastery-content.js';
import { emptyMastery, normalizeMastery, normalizeAssessment, gradeUnderstanding, masteryTaskId, masteryStatus } from '../src/mastery.js';

const id = n => `00000000-0000-4000-8000-${String(n).padStart(12, '0')}`;
const date = n => `2026-10-31T10:${String(n).padStart(2, '0')}:00.000Z`;
const answersFor = week => masteryTasks.find(task => task.week === week).questions.map(question => question.accepted[0]);
const assessment = overrides => ({
  status: 'provisional_pass', scores: [2, 2, 2, 2], feedback: 'Tujuan tercapai; detail waktu jelas.',
  strengths: ['Urutan tindakan jelas.'], improvements: ['Variasikan penghubung.'], nextAction: 'Coba skenario baru.',
  transcript: null, limitations: [], model: 'actual-provider-model', ...overrides,
});
const check = (week = 1, n = 1, overrides = {}) => ({ id: id(n), week, answers: answersFor(week), createdAt: date(n), ...overrides });
const submission = (week = 1, kind = 'writing', stage = 'weekly', n = 2, overrides = {}) => ({
  id: id(n), week, kind, stage, parentId: null, text: kind === 'writing' ? 'My original draft.\nThe source remains unchanged.' : '',
  audioId: kind === 'speaking' ? id(900 + n) : null, createdAt: date(n), assessment: assessment(),
  taskId: masteryTaskId(week, kind, stage), independent: true, ...overrides,
});
const review = (row, n, overrides = {}) => ({
  id: id(n), week: row.week, stage: row.stage, submissionId: row.id, reviewer: 'Pendamping bernama Rina',
  createdAt: date(n), scores: [2, 2, 2, 2], feedback: 'Contoh pesan dan ujaran dicatat penilai.', independent: true, ...overrides,
});
const ready = week => ({ checks: [check(week)], submissions: [submission(week), submission(week, 'speaking', 'weekly', 3)], humanReviews: [] });

test('empty and legacy state cannot manufacture mastery or mutate old progress', () => {
  const first = emptyMastery();
  first.checks.push('local');
  assert.deepEqual(emptyMastery(), { checks: [], submissions: [], humanReviews: [] });
  for (const input of [undefined, null, [], 7, { checks: {}, submissions: true, humanReviews: 'x' }]) {
    assert.deepEqual(normalizeMastery(input), emptyMastery());
  }
  const old = { week: 1, checks: { 'w1-d1-b0': true }, completed: [1], notes: { 'w1-d1': 'Catatan lama' }, learning: { writing: { draft: 'Lama' } } };
  const snapshot = structuredClone(old);
  assert.equal(masteryStatus(old, 1).status, 'not_started');
  assert.deepEqual(old, snapshot);
});

test('every week grades canonical answers and meaningful 75 percent boundary', () => {
  assert.equal(masteryTasks.length, 26);
  for (const task of masteryTasks) {
    const answers = answersFor(task.week);
    const full = gradeUnderstanding(task.week, answers);
    assert.equal(full.score, 4);
    assert.equal(full.total, 4);
    assert.equal(full.passed, true);
    assert.equal(full.feedback.length, 4);
    assert.equal(gradeUnderstanding(task.week, ['not an accepted answer', ...answers.slice(1)]).passed, true);
    assert.equal(gradeUnderstanding(task.week, ['wrong answer', 'wrong answer', ...answers.slice(2)]).passed, false);
    assert.equal(gradeUnderstanding(task.week, []).passed, false);
  }
  const answers = answersFor(1).map(value => `  ${value.toUpperCase().replace(/\s+/g, '   ')} !!! `);
  assert.equal(gradeUnderstanding(1, answers).passed, true);
  for (const week of [0, 27, '1', null]) assert.equal(gradeUnderstanding(week, answers).passed, false);
  assert.equal(gradeUnderstanding(1, null).score, 0);
  assert.equal(gradeUnderstanding(1, [null, {}, 42, true]).score, 0);
});

test('all objective attempts persist, scores are recomputed, and repeats never become fresh', () => {
  const input = { checks: [check(1, 4), check(1, 1, { answers: [], score: 4, total: 4, passed: true }), check(2, 5)] };
  const normalized = normalizeMastery(input);
  assert.equal(normalized.checks.length, 3);
  assert.equal(normalized.checks.find(row => row.id === id(1)).passed, false);
  assert.equal(normalized.checks.find(row => row.id === id(1)).fresh, true);
  assert.equal(normalized.checks.find(row => row.id === id(4)).fresh, false);
  assert.equal(normalized.checks.find(row => row.week === 2).fresh, true);
  assert.equal(masteryStatus({ mastery: normalized }, 1).understanding.passed, true);
  assert.deepEqual(normalizeMastery(JSON.parse(JSON.stringify(normalized))), normalized);
  assert.equal(input.checks[0].fresh, undefined);
});

test('original, repeat and revision retain exact evidence and immutable feedback across reloads', () => {
  const original = submission(1, 'writing', 'weekly', 2, { assessment: assessment({ status: 'needs_revision', feedback: 'Asli: tambahkan tindakan.\nJangan ubah draft.' }) });
  const revision = submission(1, 'writing', 'weekly', 4, { parentId: original.id, text: 'A revised draft.', independent: true });
  const repeat = submission(1, 'writing', 'weekly', 5);
  const normalized = normalizeMastery({ submissions: [revision, original, repeat] });
  assert.equal(normalized.submissions.length, 3);
  const storedOriginal = normalized.submissions.find(row => row.id === original.id);
  const storedRevision = normalized.submissions.find(row => row.id === revision.id);
  assert.equal(storedOriginal.text, original.text);
  assert.equal(storedOriginal.assessment.feedback, original.assessment.feedback);
  assert.equal(storedOriginal.independent, true);
  assert.equal(storedRevision.independent, false);
  assert.equal(storedRevision.parentId, original.id);
  assert.equal(normalized.submissions.find(row => row.id === repeat.id).independent, false);
  assert.throws(() => { storedOriginal.text = 'replacement'; }, TypeError);
  assert.throws(() => { storedOriginal.assessment.scores[0] = 3; }, TypeError);
  assert.throws(() => { storedOriginal.assessment.strengths.push('replacement'); }, TypeError);
  assert.notEqual(storedOriginal.assessment, original.assessment);
  assert.deepEqual(normalizeMastery(JSON.parse(JSON.stringify(normalized))), normalized);
  assert.equal(masteryStatus({ mastery: normalized }, 1).revisionCount, 1);
});

test('revision ancestry must match the same task and an earlier existing submission', () => {
  const source = submission();
  const rows = [source,
    submission(1, 'speaking', 'weekly', 3, { parentId: source.id }),
    submission(1, 'writing', 'weekly', 4, { parentId: id(999) }),
    submission(1, 'writing', 'weekly', 5, { parentId: id(6) }),
    submission(1, 'writing', 'weekly', 6, { parentId: id(5) }),
  ];
  const normalized = normalizeMastery({ submissions: rows });
  assert.deepEqual(normalized.submissions.map(row => row.id), [source.id]);
});

test('malformed or unscorable AI assessments never create a pass and source text survives', () => {
  const malformed = [null, {}, assessment({ status: 'human_verified' }), assessment({ scores: [3, 3, 3] }),
    assessment({ scores: ['3', 3, 3, 3] }), assessment({ scores: [4, 3, 3, 3] }),
    assessment({ scores: [0, 3, 3, 3] }), assessment({ scores: [1, 1, 1, 1] }),
    assessment({ feedback: '' }), assessment({ model: '' }), assessment({ limitations: ['Audio tidak dapat didengar.'] }),
    assessment({ scores: [2, null, null, 2] }), assessment({ strengths: [42] }),
    assessment({ improvements: null }), assessment({ transcript: 42 }), assessment({ nextAction: '' })];
  for (const value of malformed) {
    assert.equal(normalizeAssessment(value), null);
    const state = ready(1);
    state.submissions[1].assessment = value;
    const normalized = normalizeMastery(state);
    assert.equal(normalized.submissions.length, 2);
    assert.equal(normalized.submissions[1].assessment, null);
    assert.equal(masteryStatus({ mastery: normalized }, 1).provisionalPass, false);
    assert.equal(normalized.submissions[0].text, state.submissions[0].text);
  }
  const unable = assessment({ status: 'needs_revision', scores: [2, null, null, 2], limitations: ['Audio tidak tersedia; kelancaran dan keterpahaman tidak dinilai.'] });
  assert.deepEqual(normalizeAssessment(unable), unable);
  assert.equal(normalizeAssessment({ ...unable, limitations: [] }), null);
});

test('latest attempt controls progress while older needs-revision feedback remains inspectable', () => {
  const state = ready(1);
  state.submissions[0].assessment.status = 'needs_revision';
  assert.equal(masteryStatus({ mastery: state }, 1).status, 'needs_revision');
  state.submissions.push(submission(1, 'writing', 'weekly', 4, { parentId: state.submissions[0].id }));
  assert.equal(masteryStatus({ mastery: state }, 1).status, 'provisional_pass');
  state.submissions.push(submission(1, 'writing', 'weekly', 5, { assessment: null }));
  assert.equal(masteryStatus({ mastery: state }, 1).status, 'submitted');
  state.checks.push(check(1, 6, { answers: [] }));
  assert.equal(masteryStatus({ mastery: state }, 1).understanding.passed, false);
  assert.equal(masteryStatus({ mastery: state }, 1).submissionCount, 4);
});

test('provisional AI result is never human verification and self or assisted reviews cannot promote it', () => {
  const state = ready(1);
  assert.equal(masteryStatus({ mastery: state }, 1).status, 'provisional_pass');
  assert.equal(masteryStatus({ mastery: state }, 1).humanVerified, false);
  state.humanReviews = state.submissions.map((row, index) => review(row, 10 + index));
  assert.equal(masteryStatus({ mastery: state }, 1).status, 'human_verified');
  assert.match(masteryStatus({ mastery: state }, 1).humanVerificationNote, /identitas.*tidak diverifikasi/i);
  for (const reviewer of ['self', 'ai', 'human', 'saya']) {
    state.humanReviews[0].reviewer = reviewer;
    assert.equal(masteryStatus({ mastery: state }, 1).humanVerified, false);
  }
  state.humanReviews[0].reviewer = 'Rina';
  state.humanReviews[0].independent = false;
  assert.equal(masteryStatus({ mastery: state }, 1).humanVerified, false);
  state.humanReviews[0].independent = true;
  state.submissions[0].independent = false;
  assert.equal(masteryStatus({ mastery: state }, 1).humanVerified, false);
});

test('a passing revision is progress but never independent human checkpoint evidence', () => {
  const state = ready(1);
  state.submissions[0].assessment = assessment({ status: 'needs_revision' });
  const revised = submission(1, 'writing', 'weekly', 4, { parentId: state.submissions[0].id });
  state.submissions.push(revised);
  state.humanReviews = [review(revised, 10), review(state.submissions[1], 11)];
  const status = masteryStatus({ mastery: state }, 1);
  assert.equal(status.provisionalPass, true);
  assert.equal(status.humanVerified, false);
  assert.equal(status.independentSubmissionCount, 2);
});

test('each phase gate requires its own writing and speaking, never weekly or another week evidence', () => {
  for (const week of [4, 8, 12, 16, 20, 24, 26]) {
    const state = ready(week);
    assert.equal(masteryStatus({ mastery: state }, week).phase.required, true);
    assert.equal(masteryStatus({ mastery: state }, week).weekly.passed, true);
    assert.equal(masteryStatus({ mastery: state }, week).provisionalPass, false);
    state.submissions.push(submission(week, 'writing', 'phase', 4));
    assert.equal(masteryStatus({ mastery: state }, week).provisionalPass, false);
    state.submissions.push(submission(week, 'speaking', 'phase', 5));
    assert.equal(masteryStatus({ mastery: state }, week).provisionalPass, true);
    state.humanReviews = state.submissions.slice(0, 2).map((row, index) => review(row, 10 + index));
    assert.equal(masteryStatus({ mastery: state }, week).humanVerified, false);
    state.humanReviews.push(...state.submissions.slice(2).map((row, index) => review(row, 12 + index)));
    assert.equal(masteryStatus({ mastery: state }, week).humanVerified, true);
    state.submissions[3].week = week === 26 ? 24 : 26;
    assert.equal(masteryStatus({ mastery: state }, week).provisionalPass, false);
  }
  const nonGate = ready(3);
  nonGate.submissions.push(submission(3, 'writing', 'phase', 4));
  assert.equal(normalizeMastery(nonGate).submissions.length, 2);
  assert.equal(masteryStatus({ mastery: nonGate }, 3).phase.required, false);
});

test('normalization rejects duplicate IDs, invalid task identities and impossible timestamps safely', () => {
  const original = submission();
  const input = { submissions: [original, { ...original, text: 'Overwrite attempt' },
    submission(1, 'writing', 'weekly', 5, { taskId: 'w26-phase-writing' }),
    submission(1, 'writing', 'weekly', 6, { createdAt: '2026-02-30T10:00:00Z' }),
    submission(1, 'writing', 'weekly', 7, { id: '__proto__' }),
    submission(1, 'speaking', 'weekly', 8, { audioId: null, text: '' })] };
  const normalized = normalizeMastery(input);
  assert.equal(normalized.submissions.length, 1);
  assert.equal(normalized.submissions[0].text, original.text);
  assert.equal(masteryTaskId(27, 'writing'), null);
  assert.equal(masteryTaskId(1, 'writing', 'phase'), null);
  assert.equal(masteryStatus({ mastery: normalized }, 27).status, 'not_started');
});

test('pending submission and AI assessment events preserve one independent draft through failure and retry', () => {
  const pending = submission(1, 'writing', 'weekly', 2, { assessment: null });
  const firstFeedback = { ...pending, id: id(4), createdAt: date(4), sourceId: pending.id,
    assessment: assessment({ status: 'needs_revision', feedback: 'Feedback pertama tetap tersimpan.' }) };
  const retryFeedback = { ...pending, id: id(5), createdAt: date(5), sourceId: pending.id, assessment: assessment() };
  const state = ready(1);
  state.submissions = [pending, state.submissions[1]];
  assert.equal(masteryStatus({ mastery: state }, 1).status, 'submitted');
  state.submissions.push(firstFeedback);
  assert.equal(masteryStatus({ mastery: state }, 1).status, 'needs_revision');
  state.submissions.push(retryFeedback);
  const normalized = normalizeMastery(state);
  assert.equal(normalized.submissions.length, 4);
  assert.equal(normalized.submissions[0].assessment, null);
  assert.equal(normalized.submissions[2].assessment.feedback, firstFeedback.assessment.feedback);
  assert.equal(normalized.submissions[3].independent, true);
  const status = masteryStatus({ mastery: normalized }, 1);
  assert.equal(status.status, 'provisional_pass');
  assert.equal(status.submissionCount, 2);
  assert.equal(status.revisionCount, 0);
  assert.equal(status.independentSubmissionCount, 2);
  normalized.humanReviews.push(review(pending, 10), review(state.submissions[1], 11));
  assert.equal(masteryStatus({ mastery: normalized }, 1).humanVerified, true);
  assert.deepEqual(normalizeMastery(JSON.parse(JSON.stringify(normalized))), normalized);
});

test('assessment attachment cannot alter source evidence or hide a newer unassessed draft', () => {
  const pending = submission(1, 'writing', 'weekly', 2, { assessment: null });
  const attached = { ...pending, id: id(5), createdAt: date(5), sourceId: pending.id, assessment: assessment() };
  for (const overrides of [{ text: 'Altered draft' }, { audioId: id(100) }, { parentId: pending.id }, { sourceId: id(999) }]) {
    const normalized = normalizeMastery({ submissions: [pending, { ...attached, ...overrides }] });
    assert.equal(normalized.submissions.length, 1);
  }
  const state = ready(1);
  state.submissions = [pending, state.submissions[1], submission(1, 'writing', 'weekly', 4, { assessment: null }), attached];
  const status = masteryStatus({ mastery: state }, 1);
  assert.equal(status.weekly.writing.id, id(4));
  assert.equal(status.provisionalPass, false);
  assert.equal(status.submissionCount, 3);
});

test('AI timestamps may precede browser drafts without losing assessment or revision ancestry', () => {
  const pending = submission(1, 'writing', 'weekly', 4, { assessment: null });
  const feedback = { ...pending, id: id(5), sourceId: pending.id, createdAt: date(1), assessment: assessment() };
  const revision = submission(1, 'writing', 'weekly', 6, { parentId: feedback.id, assessment: null });
  const revisedFeedback = { ...revision, id: id(7), sourceId: revision.id, createdAt: date(2), assessment: assessment() };
  const normalized = normalizeMastery({ submissions: [pending, feedback, revision, revisedFeedback] });
  assert.equal(normalized.submissions.length, 4);
  assert.equal(normalized.submissions[1].createdAt, date(1));
  assert.equal(normalized.submissions[1].independent, true);
  assert.equal(normalized.submissions[3].independent, false);
  const status = masteryStatus({ mastery: normalized }, 1);
  assert.equal(status.weekly.writing.id, revisedFeedback.id);
  assert.equal(status.submissionCount, 2);
  assert.equal(status.revisionCount, 1);
  assert.deepEqual(normalizeMastery(JSON.parse(JSON.stringify(normalized))), normalized);
});

const practice = (week = 1, day = 1, n = 2, overrides = {}) => submission(week, 'speaking', 'practice', n, {
  day, taskId: masteryTaskId(week, 'speaking', 'practice', day), ...overrides,
});

test('practice identities require speaking and an integer day from 1 through 6', () => {
  for (let week = 1; week <= 26; week++) {
    for (let day = 1; day <= 6; day++) {
      assert.equal(masteryTaskId(week, 'speaking', 'practice', day), `w${week}-d${day}-practice-speaking`);
      const row = practice(week, day);
      assert.equal(normalizeMastery({ submissions: [row] }).submissions[0].day, day);
    }
  }
  for (const day of [undefined, null, 0, 7, -1, 1.5, '1', true, NaN, Infinity]) {
    assert.equal(masteryTaskId(1, 'speaking', 'practice', day), null);
    assert.equal(normalizeMastery({ submissions: [practice(1, 1, 2, { day })] }).submissions.length, 0);
  }
  for (const week of [0, 27, '1']) assert.equal(masteryTaskId(week, 'speaking', 'practice', 1), null);
  assert.equal(masteryTaskId(1, 'writing', 'practice', 1), null);
  assert.equal(masteryTaskId(1, 'speaking', 'weekly'), 'w1-weekly-speaking');
  assert.equal(masteryTaskId(4, 'speaking', 'phase'), 'w4-phase-speaking');
  for (const overrides of [{ kind: 'writing', text: 'Writing cannot become practice.' }, { taskId: 'w1-practice-speaking' }, { taskId: 'w1-d2-practice-speaking' }]) {
    assert.equal(normalizeMastery({ submissions: [practice(1, 1, 2, overrides)] }).submissions.length, 0);
  }
});

test('practice day and immutable source survive assessment retries, revisions and JSON roundtrips', () => {
  const pending = practice(1, 3, 2, { text: 'My original note.\nDo not replace it.', assessment: null });
  const feedback = { ...pending, id: id(3), createdAt: date(3), sourceId: pending.id, assessment: assessment({ status: 'needs_revision' }) };
  const retry = { ...feedback, id: id(4), createdAt: date(4), assessment: assessment() };
  const revision = practice(1, 3, 5, { parentId: retry.id, assessment: null });
  const anotherDay = practice(1, 4, 6);
  const normalized = normalizeMastery({ submissions: [pending, feedback, retry, revision, anotherDay] });
  assert.deepEqual(normalized.submissions.map(row => row.day), [3, 3, 3, 3, 4]);
  assert.deepEqual(normalized.submissions.map(row => row.independent), [true, true, true, false, true]);
  assert.equal(normalized.submissions[0].text, pending.text);
  assert.equal(normalized.submissions[0].assessment, null);
  assert.equal(normalized.submissions[1].assessment.feedback, feedback.assessment.feedback);
  assert.equal(normalized.submissions[2].sourceId, pending.id);
  assert.equal(normalized.submissions[3].parentId, retry.id);
  assert.throws(() => { normalized.submissions[0].day = 4; }, TypeError);
  assert.deepEqual(normalizeMastery(JSON.parse(JSON.stringify(normalized))), normalized);
  for (const changed of [
    { ...feedback, day: 4, taskId: masteryTaskId(1, 'speaking', 'practice', 4) },
    { ...feedback, stage: 'weekly', taskId: masteryTaskId(1, 'speaking', 'weekly') },
    { ...revision, day: 4, taskId: masteryTaskId(1, 'speaking', 'practice', 4) },
    { ...revision, stage: 'weekly', taskId: masteryTaskId(1, 'speaking', 'weekly') },
  ]) {
    assert.deepEqual(normalizeMastery({ submissions: [pending, feedback, retry, { ...changed, id: id(8) }] }).submissions.map(row => row.id), [pending.id, feedback.id, retry.id]);
  }
});

test('practice never satisfies weekly, phase or reported-human mastery gates', () => {
  for (const week of [1, 4, 8, 12, 16, 20, 24, 26]) {
    const rows = Array.from({ length: 6 }, (_, index) => practice(week, index + 1, index + 4));
    const onlyPractice = { submissions: rows, humanReviews: rows.map((row, index) => review(row, index + 20)) };
    const normalized = normalizeMastery(onlyPractice);
    assert.equal(normalized.submissions.length, 6);
    assert.equal(normalized.humanReviews.length, 0);
    assert.equal(masteryStatus({ mastery: normalized }, week).status, 'not_started');
    const state = ready(week);
    state.submissions = [state.submissions[0], ...rows];
    state.humanReviews = rows.flatMap((row, index) => [review(row, index + 20, { stage: 'weekly' }), review(row, index + 30, { stage: 'phase' })]);
    let status = masteryStatus({ mastery: state }, week);
    assert.equal(status.weekly.speaking, null);
    assert.equal(status.weekly.passed, false);
    assert.equal(status.phase.speaking, null);
    assert.equal(status.provisionalPass, false);
    assert.equal(status.humanVerified, false);
    assert.equal(status.submissionCount, 1);
    assert.equal(status.independentSubmissionCount, 1);
    state.submissions.push(submission(week, 'speaking', 'weekly', 10));
    if (status.phase.required) state.submissions.push(submission(week, 'writing', 'phase', 11), submission(week, 'speaking', 'phase', 12));
    status = masteryStatus({ mastery: state }, week);
    assert.equal(status.provisionalPass, true);
    assert.equal(status.humanVerified, false);
    assert.equal(normalizeMastery(state).humanReviews.length, 0);
    state.humanReviews = state.submissions.filter(row => row.stage !== 'practice').map((row, index) => review(row, index + 40));
    assert.equal(masteryStatus({ mastery: state }, week).humanVerified, true);
    state.submissions.push(practice(week, 6, 15, { assessment: assessment({ status: 'needs_revision' }) }));
    assert.equal(masteryStatus({ mastery: state }, week).status, 'human_verified');
  }
});
