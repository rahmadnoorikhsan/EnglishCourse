import test from 'node:test';
import assert from 'node:assert/strict';
import { dailyVideo } from '../src/videos.js';

test('every active day through the final assessment introduces a distinct video', () => {
  const seen = new Set();
  for (let week = 1; week <= 26; week++) {
    for (let day = 1; day <= 6; day++) {
      const video = dailyVideo(week, day);
      assert.ok(video, `missing week ${week} day ${day}`);
      assert.ok(!seen.has(video.id), `repeated video on week ${week} day ${day}`);
      seen.add(video.id);
    }
  }
});

test('rest days and invalid dates never fall back to a different lesson', () => {
  for (const [week, day] of [[1, 7], [26, 7], [0, 1], [27, 1], [1, 0], [1, 8], [1.5, 1], [1, 1.5], ['1', 1], [1, '2'], [NaN, 1], [1, undefined]]) {
    assert.equal(dailyVideo(week, day), null, `week ${week} day ${day}`);
  }
});
