import test from 'node:test';
import assert from 'node:assert/strict';
import { File } from 'node:buffer';
import { mountRecorder } from '../src/recorder.js';

const MAX_BYTES = 10 * 1024 * 1024;
const MAX_DURATION = 300000;

class Element extends EventTarget {
  constructor() {
    super();
    this.disabled = false;
    this.hidden = true;
    this.textContent = '';
    this.pauses = 0;
  }
  pause() { this.pauses++; }
  load() {}
  removeAttribute(name) { delete this[name]; }
  click() { if (!this.disabled) this.dispatchEvent(new Event('click')); }
}

function setup(t, { supported = ['audio/webm;codecs=opus'], secure = true, file } = {}) {
  const restore = [];
  function replace(object, key, value) {
    const descriptor = Object.getOwnPropertyDescriptor(object, key);
    Object.defineProperty(object, key, { configurable: true, writable: true, value });
    restore.push(() => descriptor ? Object.defineProperty(object, key, descriptor) : delete object[key]);
  }
  const elements = Object.fromEntries(['start', 'stop', 'elapsed', 'status', 'preview', 'audio', 'download'].map(key => [key, new Element()]));
  elements.stop.disabled = true;
  const host = {
    matches: selector => selector === '[data-recorder]',
    querySelector: selector => elements[selector.slice('[data-recorder-'.length, -1)],
  };
  let now = 0;
  let nextTimer = 0;
  const timers = new Map();
  const requests = [];
  const recorders = [];
  const pending = [];
  const urls = [];
  const revoked = [];
  const files = [];
  const errors = [];
  const states = [];
  const checkedFormats = [];
  let constructorError;
  let startError;

  class Recorder {
    static isTypeSupported(type) {
      checkedFormats.push(type);
      return supported.includes(type);
    }
    constructor(stream, options) {
      if (constructorError) throw constructorError;
      this.stream = stream;
      this.mimeType = options.mimeType;
      this.state = 'inactive';
      recorders.push(this);
    }
    start(timeslice) {
      if (startError) throw startError;
      this.timeslice = timeslice;
      this.state = 'recording';
    }
    stop() {
      this.state = 'inactive';
      pending.push(() => {
        if (this.tail) this.ondataavailable?.({ data: this.tail });
        this.onstop?.();
      });
    }
    chunk(data = new Blob(['voice'], { type: this.mimeType })) { this.ondataavailable?.({ data }); }
    error(error = new Error('encoder failed')) { this.onerror?.({ error }); }
  }

  replace(globalThis, 'File', File);
  replace(globalThis, 'isSecureContext', secure);
  replace(globalThis, 'MediaRecorder', Recorder);
  replace(globalThis, 'navigator', { mediaDevices: { getUserMedia: constraints => new Promise((resolve, reject) => requests.push({ constraints, resolve, reject })) } });
  replace(performance, 'now', () => now);
  replace(globalThis, 'setTimeout', (callback, delay) => { const id = ++nextTimer; timers.set(id, { callback, delay, interval: false }); return id; });
  replace(globalThis, 'setInterval', (callback, delay) => { const id = ++nextTimer; timers.set(id, { callback, delay, interval: true }); return id; });
  replace(globalThis, 'clearTimeout', id => timers.delete(id));
  replace(globalThis, 'clearInterval', id => timers.delete(id));
  replace(URL, 'createObjectURL', blob => { const url = `blob:recording-${urls.length}`; urls.push({ url, blob }); return url; });
  replace(URL, 'revokeObjectURL', url => revoked.push(url));

  const dispose = mountRecorder(host, { file, onFile: value => files.push(value), onError: value => errors.push(value), onState: value => states.push(value) });
  t.after(() => { dispose(); for (const undo of restore.reverse()) undo(); });
  return {
    elements, host, dispose, requests, recorders, files, errors, states, timers, urls, revoked, checkedFormats,
    constructorFails() { constructorError = new Error('constructor failed'); },
    startFails() { startError = new Error('start failed'); },
    async grant(index = requests.length - 1) {
      const tracks = [{ stopped: 0, stop() { this.stopped++; } }, { stopped: 0, stop() { this.stopped++; } }];
      const stream = { getTracks: () => tracks };
      requests[index].resolve(stream);
      await Promise.resolve();
      return tracks;
    },
    async deny(name = 'NotAllowedError') {
      requests.at(-1).reject(Object.assign(new Error(name), { name }));
      await Promise.resolve();
    },
    flush() { while (pending.length) pending.shift()(); },
    advance(ms) { now += ms; },
    deadline() { const timer = [...timers.values()].find(value => value.delay === MAX_DURATION); assert.ok(timer); timer.callback(); },
  };
}

const previousFile = () => new File(['previous take'], 'ancienne.webm', { type: 'audio/webm' });

test('permission is requested only on click, audio only, and valid stop includes its final chunk', async t => {
  const h = setup(t);
  assert.equal(h.requests.length, 0);
  h.elements.start.click();
  assert.deepEqual(h.requests[0].constraints, { audio: true, video: false });
  assert.deepEqual(h.states, [true]);
  h.elements.start.click();
  assert.equal(h.requests.length, 1);
  const tracks = await h.grant();
  const recorder = h.recorders[0];
  assert.equal(recorder.timeslice, 1000);
  recorder.chunk(new Blob(['first'], { type: recorder.mimeType }));
  recorder.tail = new Blob(['last'], { type: recorder.mimeType });
  h.advance(65000);
  h.elements.stop.click();
  assert.equal(h.files.length, 0);
  assert.ok(tracks.every(track => track.stopped === 1));
  assert.equal(h.elements.elapsed.textContent, '01:05 / 05:00');
  h.flush();
  assert.equal(await h.files[0].text(), 'firstlast');
  assert.equal(h.files[0].type, 'audio/webm');
  assert.match(h.files[0].name, /\.webm$/);
  assert.equal(h.elements.download.download, h.files[0].name);
  assert.equal(h.elements.download.href, h.elements.audio.src);
  assert.equal(h.elements.preview.hidden, false);
  assert.deepEqual(h.states, [true, false]);
  assert.equal(h.timers.size, 0);
});

for (const [format, mime, extension] of [
  ['audio/ogg;codecs=opus', 'audio/ogg', 'ogg'],
  ['audio/mp4', 'audio/mp4', 'mp4'],
]) {
  test(`negotiates ${format} and returns a base-MIME File`, async t => {
    const h = setup(t, { supported: [format] });
    h.elements.start.click();
    await h.grant();
    const recorder = h.recorders[0];
    assert.equal(recorder.mimeType, format);
    recorder.chunk();
    h.elements.stop.click();
    h.flush();
    assert.equal(h.files[0].type, mime);
    assert.ok(h.files[0].name.endsWith(`.${extension}`));
    assert.equal(h.checkedFormats[0], 'audio/webm;codecs=opus');
  });
}

test('insecure and unsupported environments do not request a microphone', async t => {
  for (const options of [{ secure: false }, { supported: [] }]) {
    await t.test(JSON.stringify(options), sub => {
      const h = setup(sub, options);
      h.elements.start.click();
      assert.equal(h.requests.length, 0);
      assert.equal(h.errors.length, 1);
      assert.deepEqual(h.states, [true, false]);
      assert.equal(h.elements.start.disabled, false);
    });
  }
});

test('permission rejection preserves the previous file and permits retry', async t => {
  const old = previousFile();
  const h = setup(t, { file: old });
  const url = h.elements.audio.src;
  assert.equal(h.urls[0].blob, old);
  h.elements.start.click();
  await h.deny();
  assert.match(h.errors[0], /Izin mikrofon ditolak/);
  assert.equal(h.elements.audio.src, url);
  assert.equal(h.elements.download.download, old.name);
  assert.equal(h.revoked.length, 0);
  assert.equal(h.files.length, 0);
  assert.deepEqual(h.states, [true, false]);
  h.elements.start.click();
  assert.equal(h.requests.length, 2);
});

test('cancelling a permission request releases a late grant without replacing a newer take', async t => {
  const h = setup(t);
  h.elements.start.click();
  h.elements.stop.click();
  h.elements.start.click();
  const activeTracks = await h.grant(1);
  const lateTracks = await h.grant(0);
  assert.ok(lateTracks.every(track => track.stopped === 1));
  assert.ok(activeTracks.every(track => track.stopped === 0));
  assert.equal(h.recorders.length, 1);
  h.recorders[0].chunk();
  h.elements.stop.click();
  h.flush();
  assert.equal(h.files.length, 1);
  assert.equal(h.errors.length, 0);
  assert.deepEqual(h.states, [true, false, true, false]);
});

test('dispose releases a late permission grant and cannot invoke callbacks', async t => {
  const h = setup(t, { file: previousFile() });
  h.elements.start.click();
  h.dispose();
  const tracks = await h.grant();
  assert.ok(tracks.every(track => track.stopped === 1));
  assert.equal(h.recorders.length, 0);
  assert.equal(h.files.length, 0);
  assert.equal(h.errors.length, 0);
  assert.deepEqual(h.states, [true]);
  assert.deepEqual(h.revoked, [h.urls[0].url]);
  h.elements.start.click();
  assert.equal(h.requests.length, 1);
});

test('dispose invalidates even captured stale handlers and a queued final stop', async t => {
  const h = setup(t);
  h.elements.start.click();
  const tracks = await h.grant();
  const recorder = h.recorders[0];
  recorder.chunk();
  const staleData = recorder.ondataavailable;
  const staleStop = recorder.onstop;
  const staleError = recorder.onerror;
  h.elements.stop.click();
  h.dispose();
  staleData({ data: new Blob(['late']) });
  staleStop();
  staleError({ error: new Error('late') });
  h.flush();
  assert.ok(tracks.every(track => track.stopped === 1));
  assert.equal(h.timers.size, 0);
  assert.equal(h.files.length, 0);
  assert.equal(h.errors.length, 0);
  assert.deepEqual(h.states, [true]);
});

for (const failure of ['constructor', 'start', 'encoder', 'empty']) {
  test(`${failure} failure releases all tracks and retains the old preview`, async t => {
    const h = setup(t, { file: previousFile() });
    const oldUrl = h.elements.audio.src;
    if (failure === 'constructor') h.constructorFails();
    if (failure === 'start') h.startFails();
    h.elements.start.click();
    const tracks = await h.grant();
    if (failure === 'encoder') h.recorders[0].error();
    if (failure === 'empty') h.elements.stop.click();
    h.flush();
    assert.ok(tracks.every(track => track.stopped === 1));
    assert.equal(h.errors.length, 1);
    assert.equal(h.files.length, 0);
    assert.equal(h.elements.audio.src, oldUrl);
    assert.equal(h.revoked.length, 0);
    assert.equal(h.timers.size, 0);
    assert.deepEqual(h.states, [true, false]);
  });
}

test('five-minute deadline stops recording and releases tracks before finalization', async t => {
  const h = setup(t);
  h.elements.start.click();
  const tracks = await h.grant();
  h.recorders[0].chunk();
  h.advance(MAX_DURATION);
  h.deadline();
  assert.ok(tracks.every(track => track.stopped === 1));
  assert.equal(h.elements.elapsed.textContent, '05:00 / 05:00');
  h.flush();
  assert.equal(h.files.length, 1);
  assert.match(h.elements.status.textContent, /Batas 5 menit/);
  assert.equal(h.timers.size, 0);
});

test('ten-MiB boundary auto-stops and accepts an exactly-sized file', async t => {
  const h = setup(t);
  h.elements.start.click();
  const tracks = await h.grant();
  h.recorders[0].chunk(new Blob([new Uint8Array(MAX_BYTES)]));
  assert.equal(h.recorders[0].state, 'inactive');
  assert.ok(tracks.every(track => track.stopped === 1));
  h.flush();
  assert.equal(h.files[0].size, MAX_BYTES);
  assert.match(h.elements.status.textContent, /Batas 10 MiB/);
});

test('oversized streaming data and final tails are rejected without replacing an old take', async t => {
  for (const finalTail of [false, true]) {
    await t.test(finalTail ? 'final chunk' : 'streaming chunk', async sub => {
      const h = setup(sub, { file: previousFile() });
      const oldUrl = h.elements.audio.src;
      h.elements.start.click();
      const tracks = await h.grant();
      const recorder = h.recorders[0];
      if (finalTail) {
        recorder.chunk(new Blob([new Uint8Array(MAX_BYTES)]));
        recorder.tail = new Blob(['overflow']);
      } else {
        recorder.chunk({ size: MAX_BYTES + 1, type: 'audio/webm' });
      }
      h.flush();
      assert.ok(tracks.every(track => track.stopped === 1));
      assert.equal(h.files.length, 0);
      assert.match(h.errors[0], /melebihi 10 MiB/);
      assert.equal(h.elements.audio.src, oldUrl);
      assert.equal(h.timers.size, 0);
    });
  }
});

test('successful re-record revokes only the old preview and dispose revokes the replacement', async t => {
  const h = setup(t, { file: previousFile() });
  const oldUrl = h.elements.audio.src;
  h.elements.start.click();
  await h.grant();
  h.recorders[0].chunk();
  h.elements.stop.click();
  h.flush();
  const nextUrl = h.elements.audio.src;
  assert.notEqual(nextUrl, oldUrl);
  assert.deepEqual(h.revoked, [oldUrl]);
  h.dispose();
  h.dispose();
  assert.deepEqual(h.revoked, [oldUrl, nextUrl]);
});

test('dispose during active capture stops the recorder, all tracks, and timers without publishing', async t => {
  const h = setup(t);
  h.elements.start.click();
  const tracks = await h.grant();
  const recorder = h.recorders[0];
  recorder.chunk();
  h.dispose();
  assert.equal(recorder.state, 'inactive');
  assert.ok(tracks.every(track => track.stopped === 1));
  assert.equal(h.timers.size, 0);
  h.flush();
  assert.equal(h.files.length, 0);
  assert.equal(h.errors.length, 0);
});

test('a task disposed by the state callback cannot receive a finalized file', async t => {
  const h = setup(t);
  h.dispose();
  let dispose;
  const files = [];
  const states = [];
  dispose = mountRecorder(h.host, {
    onFile: file => files.push(file),
    onState: active => {
      states.push(active);
      if (!active) dispose();
    },
  });
  t.after(() => dispose());
  h.elements.start.click();
  await h.grant();
  h.recorders[0].chunk();
  h.elements.stop.click();
  h.flush();
  assert.deepEqual(states, [true, false]);
  assert.equal(files.length, 0);
});
