import { mkdir, mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { course } from '../src/course.js';

// Rebuild only when original listening scripts change. Requires espeak-ng + ffmpeg.
// eSpeak NG generates synthetic speech, not recordings of a human speaker.
await mkdir('public/audio', { recursive: true });
const temp = await mkdtemp(join(tmpdir(), 'englishcourse-audio-'));
function run(binary, args, input) {
  const result = spawnSync(binary, args, { input, encoding: 'utf8' });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`${binary}: ${result.stderr}`);
}
try {
  for (const item of course) {
    for (const [kind, text] of [['practice', item.listening.text], ['assessment', item.assessment.listening.text]]) {
      const name = `w${String(item.week).padStart(2, '0')}-${kind}`;
      const wav = join(temp, `${name}.wav`);
      run('espeak-ng', ['-v', 'en-us', '-s', item.week < 5 ? '125' : item.week < 14 ? '145' : '160', '-w', wav, '--stdin'], text);
      run('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', '-i', wav, '-codec:a', 'libmp3lame', '-b:a', '48k', `public/audio/${name}.mp3`]);
      console.log(name);
    }
  }
} finally {
  await rm(temp, { recursive: true, force: true });
}
