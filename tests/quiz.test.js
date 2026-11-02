import test from 'node:test';
import assert from 'node:assert/strict';
import { gradeQuiz, materialIdentity } from '../src/quiz.js';
import { emptyLearning, recordAttempt } from '../src/learning.js';

test('day two and evaluation cannot be graded with the first-day answer key', () => {
  // W1 D1 asks Nita's name and role; D2 asks Aldi's city and Mira's role.
  assert.deepEqual(gradeQuiz(1, 1, 'reading', [0, 1]).map(row => row.correct), [true, true]);
  assert.deepEqual(gradeQuiz(1, 2, 'reading', [0, 1]).map(row => row.correct), [false, false]);
  assert.deepEqual(gradeQuiz(1, 2, 'reading', [2, 0]).map(row => row.correct), [true, true]);
  // The reserved card asks Nisa's occupation and Sari's city.
  assert.deepEqual(gradeQuiz(1, 6, 'reading', [2, 1]).map(row => row.correct), [true, true]);
  assert.deepEqual(gradeQuiz(1, 6, 'reading', [2, 0]).map(row => row.correct), [true, false]);
});

test('repeating a daily package is familiar, but another day is new evidence', () => {
  const learning = emptyLearning();
  const add = (id, day) => recordAttempt(learning, { id, week: 1, day, kind: 'reading', materialId: materialIdentity(1, day, 'reading'), choices: [0, 1], score: 1, total: 2, createdAt: '2026-11-02T01:00:00.000Z', mode: 'practice', fresh: true, assisted: false, level: 'unknown', source: 'Daily lesson' });
  const first = add('60000000-0000-4000-8000-000000000001', 1);
  const next = add('60000000-0000-4000-8000-000000000002', 2);
  const repeat = add('60000000-0000-4000-8000-000000000003', 1);
  assert.equal(first.fresh, true);
  assert.equal(next.fresh, true);
  assert.equal(repeat.fresh, false);
  // Existing day-six passages are unchanged: preserve their prior exposure.
  assert.equal(materialIdentity(1, 6, 'reading'), 'local:w1:assessment:reading');
  assert.notEqual(materialIdentity(1, 1, 'reading'), 'local:w1:practice:reading');
});

test('unanswered or invalid date/choice submissions cannot receive a score', () => {
  for (const choices of [[], [-1, 0], [0, 9], [0.5, 0], '00']) assert.equal(gradeQuiz(1, 1, 'reading', choices), null);
  for (const [week, day] of [[0, 1], [27, 1], [1, 0], [1, 7], [1, 1.5], [1, '1']]) assert.equal(gradeQuiz(week, day, 'reading', [0, 0]), null);
  assert.equal(gradeQuiz(1, 1, 'unknown', [0, 0]), null);
});
