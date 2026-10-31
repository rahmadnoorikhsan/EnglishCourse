import test from 'node:test';
import assert from 'node:assert/strict';
import { validateSubmission, validateAssessment, createAssessmentServer, assessSubmission } from '../server/assessment.mjs';

const valid = { status: 'provisional_pass', scores: [2, 2, 2, 2], feedback: 'Tujuan tersampaikan.', strengths: ['Identitas jelas.'], improvements: [], nextAction: 'Coba topik baru.', limitations: [] };
test('unassessable audio aspects and limitations cannot become a pass', () => {
  const result = validateAssessment(valid, 'test-model', 'I am Lia.', true);
  assert.equal(result.status, 'needs_revision');
  assert.deepEqual(result.scores, [2, null, null, 2]);
  assert.equal(validateAssessment({ ...valid, limitations: ['Tidak ada bukti interaksi.'] }, 'test-model').status, 'needs_revision');
  assert.equal(validateAssessment({ ...valid, scores: [3, 3, 3, 0] }, 'test-model').status, 'needs_revision');
  assert.throws(() => validateAssessment({ ...valid, scores: [3, 3, 3, 9] }, 'test-model'));
});
test('speaking requires audio and a phase task must match its gate', () => {
  assert.throws(() => validateSubmission({ week: 1, kind: 'speaking', stage: 'weekly', text: 'A written script only.' }));
  assert.throws(() => validateSubmission({ week: 1, kind: 'writing', stage: 'phase', text: 'A phase response.' }));
  const result = validateSubmission({ week: 1, kind: 'speaking', stage: 'weekly', audio: { mime: 'audio/webm;codecs=opus', base64: 'UklGRg==' } });
  assert.equal(result.audio.mime, 'audio/webm');
});
test('HTTP authentication and CORS reject requests before any provider call', async () => {
  const server = createAssessmentServer({ learnerToken: 'a'.repeat(48), routerURL: 'http://127.0.0.1:1/v1', textModel: 'test', origins: ['https://learner.example'] });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = `http://127.0.0.1:${server.address().port}`;
  try {
    const unauthorized = await fetch(`${base}/api/assess`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{}' });
    assert.equal(unauthorized.status, 401);
    const wrongOrigin = await fetch(`${base}/api/assess`, { method: 'POST', headers: { Origin: 'https://evil.example', Authorization: `Bearer ${'a'.repeat(48)}`, 'Content-Type': 'application/json' }, body: '{}' });
    assert.equal(wrongOrigin.status, 403);
    assert.equal(wrongOrigin.headers.get('access-control-allow-origin'), null);
    const invalid = await fetch(`${base}/api/assess`, { method: 'POST', headers: { Origin: 'https://learner.example', Authorization: `Bearer ${'a'.repeat(48)}`, 'Content-Type': 'application/json' }, body: '{}' });
    assert.equal(invalid.status, 400);
    assert.equal(invalid.headers.get('access-control-allow-origin'), 'https://learner.example');
  } finally { await new Promise(resolve => server.close(resolve)); }
});
test('malformed provider response cannot disclose its raw contents', async () => {
  const input = validateSubmission({ week: 1, kind: 'writing', stage: 'weekly', text: 'A learner response.' });
  await assert.rejects(assessSubmission(input, { routerURL: 'https://router.example/v1', textModel: 'test' }, async () => new Response('PRIVATE_PROVIDER_DEBUG_DATA', { status: 200 })), error => {
    assert.equal(error.message.includes('PRIVATE_PROVIDER_DEBUG_DATA'), false);
    return true;
  });
});
