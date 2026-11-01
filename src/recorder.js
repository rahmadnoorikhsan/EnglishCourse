const MAX_BYTES = 10 * 1024 * 1024;
const MAX_DURATION = 5 * 60 * 1000;
const FORMATS = ['audio/webm;codecs=opus', 'audio/ogg;codecs=opus', 'audio/mp4'];
const EXTENSIONS = { 'audio/webm': 'webm', 'audio/ogg': 'ogg', 'audio/mp4': 'mp4' };

export function recorderView() {
  return `<div class="field" data-recorder role="group" aria-label="Rekam latihan bicara">
    <span>Rekam suara langsung</span>
    <p class="muted">Mikrofon hanya aktif setelah kamu memilih Mulai rekam dan memberi izin. Maksimal 5 menit / 10 MiB. Rekaman tidak dikirim otomatis.</p>
    <div class="button-row">
      <button type="button" class="button secondary" data-recorder-start>Mulai rekam</button>
      <button type="button" class="button secondary" data-recorder-stop disabled>Hentikan rekaman</button>
      <output data-recorder-elapsed aria-label="Durasi rekaman" aria-live="off">00:00 / 05:00</output>
    </div>
    <p class="muted" data-recorder-status role="status" aria-live="polite">Siap merekam.</p>
    <div data-recorder-preview hidden>
      <audio data-recorder-audio controls preload="metadata" aria-label="Dengarkan rekaman latihan bicara"></audio>
      <div class="button-row"><a class="button secondary" data-recorder-download>Unduh rekaman</a></div>
    </div>
  </div>`;
}

function stopTracks(stream) {
  for (const track of stream?.getTracks() || []) {
    try { track.stop(); } catch { /* Continue releasing the other tracks. */ }
  }
}

function microphoneError(error) {
  if (error?.name === 'NotAllowedError' || error?.name === 'SecurityError') return 'Izin mikrofon ditolak. Izinkan mikrofon di pengaturan browser, lalu coba lagi.';
  if (error?.name === 'NotFoundError') return 'Mikrofon tidak ditemukan. Hubungkan mikrofon atau unggah berkas audio.';
  if (error?.name === 'NotReadableError') return 'Mikrofon tidak dapat digunakan. Tutup aplikasi lain yang memakai mikrofon, lalu coba lagi.';
  return 'Rekaman gagal. Coba lagi atau unggah berkas audio. Rekaman sebelumnya tetap tersedia.';
}

/**
 * Mount on [data-recorder]. onFile receives a finalized File; onError receives
 * Indonesian text. onState is true while requesting/recording/finalizing.
 * Dispose before replacing task DOM; disposal emits no callbacks.
 */
export function mountRecorder(root, { file, onFile = () => {}, onError = () => {}, onState = () => {} } = {}) {
  const host = root?.matches('[data-recorder]') ? root : root?.querySelector('[data-recorder]');
  if (!host) return () => {};
  const start = host.querySelector('[data-recorder-start]');
  const stop = host.querySelector('[data-recorder-stop]');
  const elapsed = host.querySelector('[data-recorder-elapsed]');
  const status = host.querySelector('[data-recorder-status]');
  const preview = host.querySelector('[data-recorder-preview]');
  const audio = host.querySelector('[data-recorder-audio]');
  const download = host.querySelector('[data-recorder-download]');
  let disposed = false;
  let capture = null;
  let previewUrl = null;
  let savedFile = file;

  function showFile(nextFile) {
    const nextUrl = URL.createObjectURL(nextFile);
    audio.pause();
    audio.src = nextUrl;
    download.href = nextUrl;
    download.download = nextFile.name;
    preview.hidden = false;
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    previewUrl = nextUrl;
  }

  function idle(message) {
    start.disabled = false;
    start.textContent = savedFile ? 'Rekam ulang' : 'Mulai rekam';
    stop.disabled = true;
    stop.textContent = 'Hentikan rekaman';
    status.textContent = message;
  }

  function release(session) {
    clearTimeout(session.deadline);
    clearInterval(session.ticker);
    if (session.recorder) {
      session.recorder.ondataavailable = null;
      session.recorder.onstop = null;
      session.recorder.onerror = null;
      try {
        if (session.recorder.state !== 'inactive') session.recorder.stop();
      } catch { /* Tracks must still be released if the recorder has already failed. */ }
    }
    stopTracks(session.stream);
    session.stream = null;
    session.chunks.length = 0;
  }

  function fail(session, message) {
    if (disposed || capture !== session) return;
    capture = null;
    release(session);
    idle(message);
    onState(false);
    if (disposed) return;
    onError(message);
  }

  function updateElapsed(session) {
    const seconds = Math.min(300, Math.floor((performance.now() - session.started) / 1000));
    elapsed.textContent = `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')} / 05:00`;
  }

  function finish(session) {
    if (disposed || capture !== session) return;
    updateElapsed(session);
    const mime = (session.recorder.mimeType || session.chunks[0]?.type || session.mime).split(';')[0].trim().toLowerCase();
    if (session.bytes > MAX_BYTES) {
      fail(session, 'Rekaman melebihi 10 MiB. Rekam ulang dengan durasi lebih pendek.');
      return;
    }
    if (!session.bytes || !EXTENSIONS[mime]) {
      fail(session, 'Rekaman kosong atau formatnya tidak didukung. Coba lagi atau unggah berkas audio.');
      return;
    }
    let recorded;
    try {
      recorded = new File(session.chunks, `latihan-bicara-${Date.now()}.${EXTENSIONS[mime]}`, { type: mime });
      showFile(recorded);
    } catch {
      fail(session, 'Rekaman tidak dapat disiapkan. Coba lagi. Rekaman sebelumnya tetap tersedia.');
      return;
    }
    capture = null;
    release(session);
    savedFile = recorded;
    idle(session.limit ? `${session.limit} Rekaman siap didengarkan dan dikirim saat kamu memilih kirim.` : 'Rekaman siap didengarkan dan dikirim saat kamu memilih kirim.');
    onState(false);
    if (disposed) return;
    onFile(recorded);
  }

  function stopRecording(session, limit) {
    if (disposed || capture !== session || session.stopping) return;
    session.stopping = true;
    session.limit = limit;
    clearTimeout(session.deadline);
    clearInterval(session.ticker);
    updateElapsed(session);
    stop.disabled = true;
    status.textContent = 'Menyiapkan rekaman…';
    try {
      // stop queues the final dataavailable event before stop; do not finalize early.
      // https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/stop
      if (session.recorder.state !== 'inactive') session.recorder.stop();
    } catch (error) {
      fail(session, microphoneError(error));
    } finally {
      stopTracks(session.stream);
      session.stream = null;
    }
  }

  async function begin() {
    if (disposed || capture) return;
    const session = { chunks: [], bytes: 0, stream: null, recorder: null, stopping: false };
    capture = session;
    start.disabled = true;
    stop.disabled = false;
    stop.textContent = 'Batalkan permintaan';
    elapsed.textContent = '00:00 / 05:00';
    status.textContent = 'Menunggu izin mikrofon…';
    try {
      onState(true);
      if (disposed || capture !== session) return;
      if (!globalThis.isSecureContext) {
        fail(session, 'Mikrofon memerlukan koneksi HTTPS (atau localhost). Gunakan halaman aman atau unggah berkas audio.');
        return;
      }
      if (!globalThis.navigator?.mediaDevices?.getUserMedia || typeof globalThis.MediaRecorder?.isTypeSupported !== 'function') {
        fail(session, 'Browser ini belum mendukung rekaman mikrofon. Gunakan browser terbaru atau unggah berkas audio.');
        return;
      }
      session.mime = FORMATS.find(type => MediaRecorder.isTypeSupported(type));
      if (!session.mime) {
        fail(session, 'Browser ini tidak mendukung format rekaman WebM, Ogg, atau MP4. Unggah berkas audio sebagai gantinya.');
        return;
      }
      audio.pause();
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
      // Permission can resolve after navigating away or cancelling the request.
      if (disposed || capture !== session) {
        stopTracks(stream);
        return;
      }
      session.stream = stream;
      session.recorder = new MediaRecorder(stream, { mimeType: session.mime });
      session.recorder.ondataavailable = event => {
        if (disposed || capture !== session || !event.data?.size) return;
        session.bytes += event.data.size;
        if (session.bytes > MAX_BYTES) {
          fail(session, 'Rekaman melebihi 10 MiB. Rekam ulang dengan durasi lebih pendek.');
          return;
        }
        session.chunks.push(event.data);
        if (session.bytes === MAX_BYTES) stopRecording(session, 'Batas 10 MiB tercapai.');
      };
      session.recorder.onerror = event => fail(session, microphoneError(event.error));
      session.recorder.onstop = () => finish(session);
      session.started = performance.now();
      session.recorder.start(1000);
      if (disposed || capture !== session) return;
      stop.textContent = 'Hentikan rekaman';
      status.textContent = 'Sedang merekam. Pilih Hentikan rekaman jika sudah selesai.';
      session.ticker = setInterval(() => {
        if (disposed || capture !== session) return;
        updateElapsed(session);
        if (performance.now() - session.started >= MAX_DURATION) stopRecording(session, 'Batas 5 menit tercapai.');
      }, 1000);
      session.deadline = setTimeout(() => stopRecording(session, 'Batas 5 menit tercapai.'), MAX_DURATION);
    } catch (error) {
      fail(session, microphoneError(error));
    }
  }

  function stopOrCancel() {
    if (!capture || disposed) return;
    if (capture.recorder) {
      stopRecording(capture);
      return;
    }
    const session = capture;
    capture = null;
    release(session);
    idle('Permintaan rekaman dibatalkan.');
    onState(false);
  }

  if (file) {
    showFile(file);
    idle('Rekaman sebelumnya siap didengarkan.');
  }
  start.addEventListener('click', begin);
  stop.addEventListener('click', stopOrCancel);
  return () => {
    if (disposed) return;
    disposed = true;
    start.removeEventListener('click', begin);
    stop.removeEventListener('click', stopOrCancel);
    if (capture) release(capture);
    capture = null;
    audio.pause();
    audio.removeAttribute('src');
    audio.load();
    download.removeAttribute('href');
    preview.hidden = true;
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    previewUrl = null;
  };
}
