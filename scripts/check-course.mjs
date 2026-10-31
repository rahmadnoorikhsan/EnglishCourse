import assert from 'node:assert/strict';
import { stat } from 'node:fs/promises';
import { course } from '../src/course.js';

assert.deepEqual(course.map(item => item.week), Array.from({ length: 26 }, (_, index) => index + 1));
for (const item of course) {
  assert.ok(item.explanation.trim().length > 0, `week ${item.week}: explanation`);
  for (const pairs of [item.examples, item.vocabulary]) {
    for (const pair of pairs) assert.ok(pair.en.trim() && pair.id.trim());
  }
  for (const pack of [item, item.assessment]) {
    assert.ok(pack.reading.text.trim() && pack.listening.text.trim());
  }
  assert.notEqual(item.reading.text, item.assessment.reading.text);
  assert.notEqual(item.listening.text, item.assessment.listening.text);
  for (const questions of [...Object.values(item.quizzes), item.assessment.readingQuiz, item.assessment.listeningQuiz]) {
    assert.ok(questions.length >= 2);
    for (const q of questions) {
      assert.equal(new Set(q.options).size, q.options.length, `week ${item.week}: duplicate options`);
      assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length);
      assert.ok(q.prompt.trim() && q.explanation.trim());
    }
  }
  assert.ok(item.output.speaking && item.output.writing && item.review);
  for (const kind of ['practice', 'assessment']) {
    const file = `public/audio/w${String(item.week).padStart(2, '0')}-${kind}.mp3`;
    assert.ok((await stat(file)).size > 0, file);
  }
}
console.log('26 complete lesson packages and 52 audio assets validated.');
