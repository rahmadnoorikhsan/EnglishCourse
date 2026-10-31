import test from 'node:test';
import assert from 'node:assert/strict';
import { gradeQuiz } from '../src/quiz.js';

// These concrete answers differ from the reserved evaluation package.
// Keep practice answers from accidentally grading against unseen day-six material.
test('practice answers do not silently pass the reserved reading assessment', () => {
  assert.deepEqual(gradeQuiz(1, 1, 'reading', [0, 1]).map(item => item.correct), [true, true]);
  assert.deepEqual(gradeQuiz(1, 6, 'reading', [0, 1]).map(item => item.correct), [false, true]);
  assert.deepEqual(gradeQuiz(1, 6, 'reading', [2, 1]).map(item => item.correct), [true, true]);
  assert.match(gradeQuiz(1, 6, 'reading', [0, 1])[0].explanation, /nurse/);
});

test('listening feedback uses its own passage rather than reading answers', () => {
  assert.deepEqual(gradeQuiz(1, 1, 'listening', [2, 0]).map(item => item.correct), [true, true]);
  assert.deepEqual(gradeQuiz(1, 6, 'listening', [0, 2]).map(item => item.correct), [true, true]);
  assert.deepEqual(gradeQuiz(1, 6, 'listening', [2, 0]).map(item => item.correct), [false, false]);
});

test('unanswered or invalid quiz submissions cannot receive a score', () => {
  assert.equal(gradeQuiz(1, 1, 'reading', []), null);
  assert.equal(gradeQuiz(1, 1, 'reading', [-1, 0]), null);
  assert.equal(gradeQuiz(1, 1, 'reading', [0, 9]), null);
  assert.equal(gradeQuiz(0, 1, 'reading', [0, 0]), null);
  assert.equal(gradeQuiz(1, 1, 'unknown', [0, 0]), null);
});
