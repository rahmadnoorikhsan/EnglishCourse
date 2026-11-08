import assert from 'node:assert/strict';
import { stat, readFile } from 'node:fs/promises';
import { dailyCourse, dailyLesson, dailyAudioName } from '../src/daily-course.js';
import { videos, dailyVideo } from '../src/videos.js';
import { planSpeech } from './audio-plan.mjs';

const casts = JSON.parse(await readFile(new URL('./audio-cast.json', import.meta.url), 'utf8'));
assert.deepEqual(dailyCourse.map(item => item.week), Array.from({ length: 26 }, (_, index) => index + 1));
assert.equal(videos.length, 156, 'one video for every active day');
for (const field of ['code', 'id', 'source']) assert.equal(new Set(videos.map(video => video[field])).size, 156, `daily video ${field} must be globally unique`);
const passages = new Set();
const scripts = new Set();
for (const unit of dailyCourse) {
  assert.equal(unit.days.length, 5, `week ${unit.week}: five practice days`);
  const titles = new Set();
  const speaking = new Set();
  const writing = new Set();
  for (let day = 1; day <= 6; day++) {
    const item = dailyLesson(unit.week, day);
    const label = `week ${unit.week} day ${day}`;
    const video = dailyVideo(unit.week, day);
    assert.ok(video, `${label}: daily video`);
    assert.equal(video.code, `W${String(unit.week).padStart(2, '0')}D${day}`, `${label}: video date`);
    assert.match(video.id, /^[A-Za-z0-9_-]{11}$/, `${label}: YouTube ID`);
    assert.equal(new URL(video.source).protocol, 'https:', `${label}: official source HTTPS`);
    for (const field of ['title', 'focus', 'task']) assert.ok(video[field]?.trim(), `${label}: video ${field}`);
    for (const field of ['title', 'objective', 'explanation', 'review']) assert.ok(item[field]?.trim(), `${label}: ${field}`);
    assert.ok(!titles.has(item.title), `${label}: repeated focus`);
    titles.add(item.title);
    for (const [field, minimum] of [['examples', 2], ['vocabulary', 3]]) {
      const pairs = item[field];
      assert.ok(pairs.length >= minimum, `${label}: ${field}`);
      for (const pair of pairs) assert.ok(pair.en.trim() && pair.id.trim(), label);
    }
    assert.ok(item.reading.title && item.listening.title, label);
    assert.ok(item.reading.text.trim() && item.listening.text.trim(), label);
    assert.ok(!passages.has(item.reading.text), `${label}: reused reading`);
    assert.ok(!scripts.has(item.listening.text), `${label}: reused listening`);
    passages.add(item.reading.text);
    scripts.add(item.listening.text);
    for (const kind of ['pattern', 'reading', 'listening']) {
      const questions = item.quizzes[kind];
      assert.ok(questions.length >= 2, `${label}: questions`);
      for (const q of questions) {
        assert.equal(q.options.length, 3, `${label}: three answer choices`);
        assert.equal(new Set(q.options).size, q.options.length, `${label}: duplicate options`);
        assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length, `${label}: answer`);
        assert.ok(q.prompt.trim() && q.explanation.trim(), `${label}: question feedback`);
      }
    }
    assert.ok(item.output.speaking.trim() && item.output.writing.trim(), `${label}: outputs`);
    assert.ok(!speaking.has(item.output.speaking) && !writing.has(item.output.writing), `${label}: repeated output`);
    speaking.add(item.output.speaking);
    writing.add(item.output.writing);
    const name = dailyAudioName(unit.week, day);
    const cast = day === 6 ? casts[name] : item.cast;
    assert.ok(cast, `${label}: missing cast ${name}`);
    planSpeech(item.listening.text, cast);
    const file = `public/audio/${name}.mp3`;
    assert.ok((await stat(file)).size > 0, file);
  }
}
console.log('156 complete daily packages (130 practice + 26 evaluation), 156 distinct daily videos, and 156 audio assets validated.');
