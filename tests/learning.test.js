import test from 'node:test';
import assert from 'node:assert/strict';
import { emptyLearning, normalizeLearning, recordAttempt, skillSummary, weeklyRecommendation } from '../src/learning.js';

let sequence = 0;
const id = () => `00000000-0000-4000-8000-${String(++sequence).padStart(12, '0')}`;
const stamp = n => `2026-10-${String(n).padStart(2, '0')}T10:00:00.000Z`;
function attempt(learning, kind, materialId, overrides = {}) {
  return recordAttempt(learning, {
    week: 4, day: 6, kind, materialId, score: 7, total: 10, choices: [],
    mode: 'assessment', fresh: true, assisted: false, level: 'A2', source: 'External material',
    createdAt: stamp(20), ...overrides,
  });
}
function writing(learning, task, overrides = {}) {
  const { week = 4, day = 6, ...fields } = overrides;
  const key = `w${week}-d${day}`;
  learning.writing[key] ||= { draft: '', feedback: '', revision: '', reviewer: 'self', updatedAt: stamp(20), submissions: [] };
  learning.writing[key].submissions.push({
    id: id(), draft: 'Independent response', feedback: 'Human feedback', revision: '', reviewer: 'human',
    scores: [2, 2, 2, 2], level: 'A2', task, independent: true, createdAt: stamp(20), ...fields,
  });
}
function speaking(learning, task, overrides = {}) {
  learning.speaking.push({
    id: id(), week: 4, day: 6, task, level: 'A2', evidence: 'Transcript of conversation', audioId: null,
    scores: [2, 2, 2, 2], reviewer: 'human', independent: true, interactive: true, notes: '',
    createdAt: stamp(20), ...overrides,
  });
}
function ready() {
  const learning = emptyLearning();
  for (const n of [1, 2]) {
    attempt(learning, 'listening', `listen-${n}`);
    attempt(learning, 'reading', `read-${n}`);
    writing(learning, `writing-${n}`);
    speaking(learning, `speaking-${n}`);
  }
  return learning;
}
const skill = (recommendation, name) => recommendation.skills.find(row => row.skill === name);

test('empty learning containers are isolated and insufficient evidence collects rather than advances', () => {
  const first = emptyLearning();
  first.attempts.push({});
  assert.deepEqual(emptyLearning(), { attempts: [], time: [], writing: {}, speaking: [], reviews: [] });
  const result = weeklyRecommendation(emptyLearning(), 4);
  assert.equal(result.status, 'collect');
  assert.equal(result.skills.length, 4);
  assert.ok(result.skills.every(row => row.status === 'collect'));
  assert.ok(result.reasons.length && result.actions.length);
});

test('writing buffers preserve their task across reload without relabelling legacy drafts', () => {
  const learning = emptyLearning();
  learning.writing['w1-d2'] = { task: 'Describe the old photograph.', draft: 'Original response.', feedback: 'Keep the source.', revision: '', reviewer: 'self', updatedAt: stamp(20), submissions: [] };
  learning.writing['w1-d3'] = { draft: 'Legacy response without a stored task.', feedback: '', revision: '', reviewer: 'self', submissions: [] };
  const restored = normalizeLearning(JSON.parse(JSON.stringify(learning)));
  assert.equal(restored.writing['w1-d2'].task, 'Describe the old photograph.');
  assert.equal(restored.writing['w1-d2'].draft, 'Original response.');
  assert.equal(restored.writing['w1-d3'].task, '');
  assert.equal(restored.writing['w1-d3'].draft, learning.writing['w1-d3'].draft);
});

test('recordAttempt appends UUID evidence and repeats across weeks cannot claim freshness', () => {
  const learning = emptyLearning();
  const original = attempt(learning, 'reading', 'same', { week: 1, score: 2 });
  const repeat = attempt(learning, 'reading', 'same', { fresh: true, score: 10 });
  assert.match(original.id, /^[0-9a-f-]{36}$/i);
  assert.equal(repeat.fresh, false);
  assert.equal(learning.attempts.at(-1), repeat);
  assert.equal(attempt(learning, 'listening', 'same').fresh, true);
  assert.equal(recordAttempt(learning, { kind: 'reading' }), null);
});

test('passing repeat does not replace failed first assessment', () => {
  const learning = ready();
  learning.attempts = learning.attempts.filter(row => row.kind !== 'reading');
  attempt(learning, 'reading', 'failed', { score: 6, createdAt: stamp(18) });
  attempt(learning, 'reading', 'other', { createdAt: stamp(19) });
  attempt(learning, 'reading', 'failed', { score: 10, createdAt: stamp(21) });
  const result = weeklyRecommendation(learning, 4);
  assert.equal(skill(result, 'reading').status, 'repeat');
  assert.equal(result.status, 'focus');
});

test('practice, assisted, not-fresh, and unknown-level attempts do not supply assessment evidence', () => {
  for (const overrides of [{ mode: 'practice' }, { assisted: true }, { fresh: false }, { level: 'unknown' }]) {
    const learning = ready();
    learning.attempts = learning.attempts.filter(row => row.kind !== 'reading');
    attempt(learning, 'reading', 'one', overrides);
    attempt(learning, 'reading', 'two', overrides);
    assert.equal(skill(weeklyRecommendation(learning, 4), 'reading').status, 'collect');
  }
});

test('a previously practiced material is not new assessment evidence even when imported with fresh true', () => {
  const learning = ready();
  learning.attempts = learning.attempts.filter(row => row.kind !== 'reading');
  attempt(learning, 'reading', 'used', { week: 1, mode: 'practice' });
  attempt(learning, 'reading', 'used', { fresh: true });
  attempt(learning, 'reading', 'new');
  learning.attempts.at(-2).fresh = true;
  assert.equal(skill(weeklyRecommendation(learning, 4), 'reading').status, 'collect');
});

test('70 percent and eight rubric points without zero meet the inclusive thresholds', () => {
  const result = weeklyRecommendation(ready(), 4);
  assert.equal(result.status, 'advance');
  assert.ok(result.skills.every(row => row.status === 'advance'));
  assert.match(result.reasons.join(' '), /bukan|tidak/i);
});

test('below-threshold first assessments and zero rubric dimensions require targeted practice', () => {
  const learning = ready();
  learning.attempts[0].score = 6;
  learning.writing['w4-d6'].submissions[0].scores = [0, 3, 3, 3];
  learning.speaking[0].scores = [1, 2, 2, 2];
  const result = weeklyRecommendation(learning, 4);
  assert.equal(result.status, 'repeat');
  for (const name of ['listening', 'writing', 'speaking']) assert.equal(skill(result, name).status, 'repeat');
});

test('two distinct independent human-rated productive tasks are necessary and speaking must be interactive', () => {
  for (const field of [{ reviewer: 'self' }, { reviewer: 'ai' }, { independent: false }]) {
    const learning = ready();
    for (const row of learning.writing['w4-d6'].submissions) Object.assign(row, field);
    for (const row of learning.speaking) Object.assign(row, field);
    const result = weeklyRecommendation(learning, 4);
    assert.equal(skill(result, 'writing').status, 'collect');
    assert.equal(skill(result, 'speaking').status, 'collect');
  }
  const learning = ready();
  learning.writing['w4-d6'].submissions[1].task = 'writing-1';
  learning.speaking[1].interactive = false;
  assert.equal(skill(weeklyRecommendation(learning, 4), 'writing').status, 'collect');
  assert.equal(skill(weeklyRecommendation(learning, 4), 'speaking').status, 'collect');
});

test('new-level evidence cannot borrow a second result from an older level', () => {
  const learning = ready();
  attempt(learning, 'reading', 'b1-new', { level: 'B1', createdAt: stamp(21) });
  assert.equal(skill(weeklyRecommendation(learning, 4), 'reading').status, 'collect');
  attempt(learning, 'reading', 'b1-second', { level: 'B1', createdAt: stamp(22) });
  const result = weeklyRecommendation(learning, 4);
  assert.equal(skill(result, 'reading').status, 'advance');
  assert.equal(result.status, 'focus');
});

test('only the current and previous week contribute to recommendations', () => {
  const learning = ready();
  for (const row of learning.attempts) row.week = 2;
  for (const row of learning.speaking) row.week = 5;
  learning.writing['w2-d6'] = learning.writing['w4-d6'];
  delete learning.writing['w4-d6'];
  assert.equal(weeklyRecommendation(learning, 4).status, 'collect');
  for (const row of learning.attempts) row.week = 3;
  for (const row of learning.speaking) row.week = 3;
  learning.writing['w3-d6'] = learning.writing['w2-d6'];
  delete learning.writing['w2-d6'];
  assert.equal(weeklyRecommendation(learning, 4).status, 'advance');
});

test('all four weak skill results request repeat rather than advancement', () => {
  const learning = ready();
  for (const row of learning.attempts) row.score = 5;
  for (const row of learning.writing['w4-d6'].submissions) row.scores = [1, 1, 1, 1];
  for (const row of learning.speaking) row.scores = [1, 1, 1, 1];
  assert.equal(weeklyRecommendation(learning, 4).status, 'repeat');
});

test('summary totals recorded time and compares only attempts at the latest explicit skill level', () => {
  const learning = emptyLearning();
  attempt(learning, 'reading', 'a1', { level: 'A1', score: 10, createdAt: stamp(17) });
  attempt(learning, 'reading', 'a2-first', { score: 5, createdAt: stamp(18) });
  attempt(learning, 'reading', 'a2-last', { score: 8, createdAt: stamp(19) });
  attempt(learning, 'reading', 'unknown', { level: 'unknown', score: 1, createdAt: stamp(20) });
  attempt(learning, 'pattern', 'grammar', { week: 3 });
  learning.time.push(
    { id: id(), week: 4, day: 1, skill: 'reading', seconds: 90, createdAt: stamp(18) },
    { id: id(), week: 3, day: 1, skill: 'reading', seconds: 60, createdAt: stamp(17) },
    { id: id(), week: 4, day: 1, skill: 'review', seconds: 30, createdAt: stamp(18) },
  );
  assert.deepEqual(skillSummary(learning, 4).reading, { seconds: 90, attempts: 4, firstPercent: 50, latestPercent: 80, level: 'A2' });
  assert.equal(skillSummary(learning).reading.seconds, 150);
  assert.equal(skillSummary(learning).language.attempts, 1);
  assert.equal(skillSummary(learning, 4).review.seconds, 30);
});

test('normalization allowlists data, ignores malformed evidence, and conservatively defaults missing flags', () => {
  const learning = ready();
  learning.secret = 'discard';
  learning.attempts[0].extra = 'discard';
  delete learning.attempts[0].assisted;
  delete learning.attempts[0].fresh;
  learning.attempts.push(null, { ...learning.attempts[1], id: id(), score: Infinity }, { ...learning.attempts[1], id: id(), day: 8 });
  learning.time.push(
    { id: id(), week: 4, day: 1, skill: 'reading', seconds: 120, createdAt: stamp(18), extra: true },
    { id: id(), week: 4, day: 1, skill: 'reading', seconds: -1, createdAt: stamp(18) },
  );
  learning.writing.__proto__ = { poisoned: true };
  learning.writing['bad-key'] = { draft: 'discard' };
  learning.writing['w4-d6'].draft = 'kept';
  learning.writing['w4-d6'].submissions.push({ ...learning.writing['w4-d6'].submissions[0], id: id(), scores: [3, 3] });
  const result = normalizeLearning(learning);
  assert.equal(result.attempts.length, 4);
  assert.equal(result.attempts[0].fresh, false);
  assert.equal(result.attempts[0].assisted, true);
  assert.equal(result.attempts[0].extra, undefined);
  assert.equal(result.secret, undefined);
  assert.equal(result.time.length, 1);
  assert.equal(result.time[0].extra, undefined);
  assert.equal(result.writing['bad-key'], undefined);
  assert.equal(result.writing['w4-d6'].draft, 'kept');
  assert.equal(result.writing['w4-d6'].submissions.length, 2);
  assert.equal(result.speaking[0].audioId, null);
  assert.equal(result.speaking[0].evidence, 'Transcript of conversation');
  assert.deepEqual(normalizeLearning(null), emptyLearning());
  assert.deepEqual(normalizeLearning([]), emptyLearning());
  assert.deepEqual(normalizeLearning(result), result);
});

test('normalization bounds stored text and arrays without mutating the source', () => {
  const learning = ready();
  learning.writing['w4-d6'].draft = 'x'.repeat(100000);
  learning.reviews = Array.from({ length: 6000 }, () => ({ id: id(), week: 4, notes: 'review', createdAt: stamp(20) }));
  const result = normalizeLearning(learning);
  assert.ok(result.writing['w4-d6'].draft.length <= 20000);
  assert.ok(result.reviews.length <= 5000);
  assert.equal(learning.writing['w4-d6'].draft.length, 100000);
});

test('low evidence is actionable even before the second task is collected', () => {
  const learning = emptyLearning();
  attempt(learning, 'reading', 'first', { score: 5 });
  writing(learning, 'first-writing', { scores: [1, 1, 1, 1] });
  const result = weeklyRecommendation(learning, 4);
  assert.equal(result.status, 'repeat');
  assert.equal(skill(result, 'reading').status, 'repeat');
  assert.equal(skill(result, 'writing').status, 'repeat');
  assert.equal(skill(result, 'listening').status, 'collect');
});

test('task spelling variations do not manufacture distinct productive tasks', () => {
  const learning = ready();
  learning.writing['w4-d6'].submissions[1].task = '  WRITING-1  ';
  learning.speaking[1].task = 'ＳＰＥＡＫＩＮＧ-1';
  const result = weeklyRecommendation(learning, 4);
  assert.equal(skill(result, 'writing').status, 'collect');
  assert.equal(skill(result, 'speaking').status, 'collect');
});

test('time imports require a valid skill, calendar date and 1..86400 integer seconds', () => {
  const time = seconds => ({ id: id(), week: 4, day: 1, skill: 'writing', seconds, createdAt: stamp(20) });
  const data = emptyLearning();
  data.time = [time(1), time(86400), time(0), time(86401), time(0.5), time(NaN),
    { ...time(60), skill: 'other' }, { ...time(60), createdAt: '2026-02-30T10:00:00.000Z' }];
  const normalized = normalizeLearning(data);
  assert.equal(normalized.time.length, 2);
  assert.equal(skillSummary(normalized, 4).writing.seconds, 86401);
});

test('invalid UUIDs, duplicate IDs and sparse rubric arrays cannot become evidence', () => {
  const data = ready();
  data.attempts.push({ ...data.attempts[0] });
  data.attempts.push({ ...data.attempts[0], id: 'not-a-uuid' });
  data.speaking.push({ ...data.speaking[0], id: id(), scores: Array(4) });
  data.writing['w4-d6'].submissions.push({ ...data.writing['w4-d6'].submissions[0], id: id(), scores: [3, 3, 3, 4] });
  const normalized = normalizeLearning(data);
  assert.equal(normalized.attempts.length, 4);
  assert.equal(normalized.speaking.length, 2);
  assert.equal(normalized.writing['w4-d6'].submissions.length, 2);
});

test('new independent materials can demonstrate improvement without rewriting old failed evidence', () => {
  const data = ready();
  data.attempts[0].score = 2;
  attempt(data, 'listening', 'new-one', { createdAt: stamp(21) });
  attempt(data, 'listening', 'new-two', { createdAt: stamp(22) });
  assert.equal(weeklyRecommendation(data, 4).status, 'advance');
  assert.equal(data.attempts[0].score, 2);
});

test('recommendations determine latest level by timestamp rather than imported array position', () => {
  const data = ready();
  attempt(data, 'reading', 'new-b1', { level: 'B1', createdAt: stamp(22) });
  data.attempts.reverse();
  assert.equal(skill(weeklyRecommendation(data, 4), 'reading').status, 'collect');
  assert.equal(skillSummary(data, 4).reading.level, 'B1');
});

test('recordAttempt supplies a current ISO timestamp when the caller omits metadata', () => {
  const data = emptyLearning();
  const row = attempt(data, 'listening', 'generated', { createdAt: undefined });
  assert.match(row.id, /^[0-9a-f-]{36}$/i);
  assert.equal(new Date(row.createdAt).toISOString(), row.createdAt);
});

test('exactly two weak skills recommend repeat, while one weak skill recommends focus', () => {
  const data = ready();
  data.attempts.find(row => row.kind === 'listening').score = 6;
  assert.equal(weeklyRecommendation(data, 4).status, 'focus');
  data.attempts.find(row => row.kind === 'reading').score = 6;
  assert.equal(weeklyRecommendation(data, 4).status, 'repeat');
});
