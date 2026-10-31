import test from 'node:test';
import assert from 'node:assert/strict';
import { planSpeech } from '../scripts/audio-plan.mjs';

test('dialogue switches voices at turns without speaking role labels', () => {
  const turns = planSpeech('Dina: Are you Rio? Rio: No, I am Riko. Dina: Hello, Riko. Riko: Hello.', {
    Dina: 'af_heart', Rio: 'am_michael', Riko: 'am_michael',
  });
  assert.deepEqual(turns, [
    { voice: 'af_heart', text: 'Are you Rio?' },
    { voice: 'am_michael', text: 'No, I am Riko.' },
    { voice: 'af_heart', text: 'Hello, Riko.' },
    { voice: 'am_michael', text: 'Hello.' },
  ]);
});

test('multi-word roles and multiline turns preserve all spoken content', () => {
  assert.deepEqual(planSpeech('Presenter: A proposal: try it.\nKeep the limit.\nAudience member: Why?', {
    Presenter: 'am_puck', 'Audience member': 'af_bella',
  }), [
    { voice: 'am_puck', text: 'A proposal: try it.\nKeep the limit.' },
    { voice: 'af_bella', text: 'Why?' },
  ]);
});

test('unmapped speakers and missing dialogue fail rather than use the wrong voice', () => {
  assert.throws(() => planSpeech('Dina: Hello. Unknown: Hi.', { Dina: 'af_heart' }), /Unknown/);
  assert.throws(() => planSpeech('No dialogue labels.', { Dina: 'af_heart' }), /dialogue/i);
  assert.throws(() => planSpeech('Intro. Dina: Hello.', { Dina: 'af_heart' }), /unassigned/i);
  assert.throws(() => planSpeech('Dina:', { Dina: 'af_heart' }), /empty/i);
});

test('a monologue keeps punctuation and paragraphs with its assigned narrator', () => {
  const text = 'First: a proposal.\n\nNext, a limitation.';
  assert.deepEqual(planSpeech(text, {}, 'am_michael'), [{ voice: 'am_michael', text }]);
});
