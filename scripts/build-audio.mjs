import assert from 'node:assert/strict';
import { mkdir, mkdtemp, copyFile, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { dailyCourse, dailyLesson, dailyAudioName } from '../src/daily-course.js';
import { planSpeech } from './audio-plan.mjs';

// Neural speech is prebuilt: the website never loads a model or calls a TTS API.
if (!process.env.KOKORO_MODEL_DIR) throw new Error('Set KOKORO_MODEL_DIR to the directory containing kokoro-v1.0.onnx and voices-v1.0.bin.');
assert.deepEqual(dailyCourse.map(item => item.week), Array.from({ length: 26 }, (_, index) => index + 1), 'Audio requires all 26 weeks in order.');
assert.ok(dailyCourse.every(item => item.days.length === 5), 'Audio requires five practice days per week.');
const casts = JSON.parse(await readFile(new URL('./audio-cast.json', import.meta.url), 'utf8'));
const jobs = dailyCourse.flatMap(item => Array.from({ length: 6 }, (_, index) => {
  const day = index + 1;
  const name = dailyAudioName(item.week, day);
  const lesson = dailyLesson(item.week, day);
  const cast = day === 6 ? casts[name] : lesson.cast;
  if (!cast) throw new Error(`Missing cast: ${name}`);
  return { week: item.week, name, segments: planSpeech(lesson.listening.text, cast, day === 6 ? 'af_heart' : 'am_michael') };
}));
const temp = await mkdtemp(join(tmpdir(), 'englishcourse-audio-'));
try {
  const result = spawnSync('uv', ['run', '--no-project', '--python', '3.12', '--with', 'kokoro-onnx==0.6.1', '--with', 'soundfile==0.13.1', 'scripts/synthesize-audio.py', temp], { input: JSON.stringify(jobs), encoding: 'utf8', stdio: ['pipe', 'inherit', 'inherit'] });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error('Neural audio generation failed; existing audio was not replaced.');
  await mkdir('public/audio', { recursive: true });
  for (const job of jobs) await copyFile(join(temp, `${job.name}.mp3`), `public/audio/${job.name}.mp3`);
} finally {
  await rm(temp, { recursive: true, force: true });
}
