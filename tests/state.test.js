import test from 'node:test';
import assert from 'node:assert/strict';
import { loadState, saveState } from '../src/state.js';

const key = 'englishcourse-progress-v1';
test('old notes and checklists survive upgrade and subsequent save', () => {
  const values = new Map([[key, JSON.stringify({ version: 1, week: 8, day: 4, minutes: 120, checks: { 'w8-d4-b2': true }, notes: { 'w8-d4': 'Draft lama saya' }, completed: [1, 2] })]]);
  globalThis.localStorage = { getItem: name => values.get(name), setItem: (name, value) => values.set(name, value) };
  const migrated = loadState();
  assert.equal(migrated.version, 2);
  assert.equal(migrated.notes['w8-d4'], 'Draft lama saya');
  assert.equal(migrated.checks['w8-d4-b2'], true);
  assert.deepEqual(migrated.completed, [1, 2]);
  assert.equal(migrated.week, 8);
  assert.equal(migrated.day, 4);
  migrated.learning.time.push({ id: 'ac23a2ac-cc95-4fc8-ab33-2530ba3e6ba7', week: 8, day: 4, skill: 'writing', seconds: 600, createdAt: '2026-10-31T10:00:00.000Z' });
  assert.equal(saveState(migrated), true);
  const reloaded = loadState();
  assert.equal(reloaded.learning.time[0].seconds, 600);
  assert.equal(reloaded.notes['w8-d4'], 'Draft lama saya');
});
