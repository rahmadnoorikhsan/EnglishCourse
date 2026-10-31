import test from 'node:test';
import assert from 'node:assert/strict';
import { routeHref, readRoute } from '../src/router.js';

const url = path => new URL(path, 'https://example.test');

test('shared lesson URLs restore exact week, day, and step', () => {
  assert.equal(routeHref('hari-ini/12/6/2'), '/belajar/12/6/input/');
  assert.deepEqual(readRoute(url('/belajar/12/6/input/')), { parts: ['hari-ini', '12', '6', '2'], anchor: '' });
  assert.deepEqual(readRoute(url('/belajar/26/7/ringkasan/')), { parts: ['hari-ini', '26', '7', '5'], anchor: '' });
});

test('document anchors round-trip without becoming route segments', () => {
  const href = routeHref('panduan/sistem/belajar%20mandiri');
  assert.equal(href, '/referensi/sistem/#belajar%20mandiri');
  assert.deepEqual(readRoute(url(href)), { parts: ['panduan', 'sistem'], anchor: 'belajar mandiri' });
});

test('invalid lesson boundaries and unknown route shapes are not lessons', () => {
  for (const path of ['/belajar/0/1/video/', '/belajar/27/1/video/', '/belajar/1/8/video/', '/belajar/1/1/fake/', '/progres/extra/', '/missing/']) assert.equal(readRoute(url(path)), null, path);
});

test('root resumes learning and other sections resolve independently', () => {
  assert.deepEqual(readRoute(url('/')), { parts: ['hari-ini'], anchor: '' });
  assert.deepEqual(readRoute(url('/silabus/')), { parts: ['kurikulum'], anchor: '' });
  assert.deepEqual(readRoute(url('/progres/')), { parts: ['progres'], anchor: '' });
});
