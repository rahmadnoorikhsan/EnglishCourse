import './mastery.css';
import { escapeHtml as esc } from './markdown.js';
import { routeHref } from './router.js';
import { masteryTasks } from './mastery-content.js';
import { normalizeMastery, gradeUnderstanding, masteryStatus, masteryTaskId, normalizeAssessment } from './mastery.js';
import { putAudio, readAudio, deleteAudio } from './audio-store.js';

const DEFAULT_API = 'https://englishcourse.43-133-141-109.sslip.io';
const CONNECTION_KEY = 'englishcourse-mastery-connection';
const MAX_AUDIO = 10 * 1024 * 1024;
const AUDIO_TYPES = ['audio/mpeg', 'audio/mp3', 'audio/mp4', 'audio/m4a', 'audio/x-m4a', 'audio/wav', 'audio/x-wav', 'audio/webm', 'audio/ogg', 'audio/flac', 'audio/x-flac'];
const drafts = new Map();
const checkDrafts = new Map();
const busy = new Set();
const requests = new Set();
let generation = 0;
const labels = { not_started: 'Belum ada bukti', submitted: 'Kiriman tersimpan · menunggu penilaian', needs_revision: 'Perlu revisi', provisional_pass: 'Lulus sementara (AI)', human_verified: 'Review manusia dilaporkan' };
const aspects = {
  writing: ['Tugas dan akurasi pesan', 'Organisasi', 'Kendali bahasa', 'Kesesuaian pembaca dan sumber'],
  speaking: ['Tugas dan pesan', 'Keterpahaman', 'Kelancaran dan interaksi', 'Kendali bahasa'],
};
let activeAudioUrl = null;
const keyOf = (week, kind, stage) => `${week}-${stage}-${kind}`;
const taskFor = week => masteryTasks.find(task => task.week === Number(week));
const dateLabel = value => new Date(value).toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' });
const lines = value => esc(value ?? '').replace(/\r?\n/g, '<br>');
const newId = () => crypto.randomUUID();
const kindLabel = kind => kind === 'writing' ? 'Tulisan' : 'Rekaman berbicara';
const stageLabel = stage => stage === 'phase' ? 'Checkpoint fase' : 'Mingguan';

function connection() {
  try {
    const saved = JSON.parse(sessionStorage.getItem(CONNECTION_KEY) || 'null');
    return { api: typeof saved?.api === 'string' ? saved.api : DEFAULT_API, token: typeof saved?.token === 'string' ? saved.token : '' };
  } catch { return { api: DEFAULT_API, token: '' }; }
}

function apiUrl(raw) {
  let url;
  try { url = new URL(raw); } catch { throw new Error('Masukkan URL API HTTPS yang valid.'); }
  if (url.protocol !== 'https:' || url.username || url.password || url.search || url.hash || url.pathname.replace(/\/$/, '')) {
    throw new Error('URL API harus berupa origin HTTPS tanpa path, kredensial, query, atau fragmen.');
  }
  return url.origin;
}

function draftFor(week, kind, stage) {
  const key = keyOf(week, kind, stage);
  if (!drafts.has(key)) drafts.set(key, { text: '', parentId: '', sourceId: null, independent: false, consent: false, file: null, pending: null, message: '' });
  return drafts.get(key);
}

function statusView(summary) {
  return `<div class="mastery-status" role="group" aria-label="Status penguasaan minggu ${summary.week}">
    <p><strong>${esc(labels[summary.status] || labels.not_started)}</strong></p>
    <ul><li>Pemahaman: ${summary.understanding.passed ? 'memenuhi ambang 75%' : 'belum memenuhi ambang 75%'} (${summary.understanding.attempts} percobaan).</li>
    <li>Bukti mingguan: tulisan ${summary.weekly.writing ? esc(labels[summary.weekly.writing.assessment?.status] || labels.submitted) : 'belum dikirim'}; rekaman ${summary.weekly.speaking ? esc(labels[summary.weekly.speaking.assessment?.status] || labels.submitted) : 'belum dikirim'}.</li>
    ${summary.phase.required ? `<li>Checkpoint fase: ${summary.phase.passed ? 'memenuhi ambang sementara' : 'tulisan dan rekaman fase masih perlu dilengkapi / direvisi'}.</li>` : ''}</ul>
    <p>Materi dilihat dan checklist selesai bukan bukti lulus. Hasil AI bersifat sementara, bukan sertifikasi atau level CEFR. Revisi dengan feedback bukan bukti mandiri baru.</p>
    ${summary.humanVerified ? '<p>Review manusia: dilaporkan pengguna; identitas penilai tidak diverifikasi aplikasi.</p>' : '<p>Belum ada review manusia yang dilaporkan untuk checkpoint ini.</p>'}
  </div>`;
}

export function masterySummaryView(state) {
  const summary = masteryStatus(state, state.week);
  return `<section class="learning-panel mastery" aria-labelledby="mastery-summary-title"><h2 id="mastery-summary-title">Penguasaan minggu ${state.week}</h2>${statusView(summary)}
    <a class="action-link" href="${routeHref(`hari-ini/${state.week}/${Math.min(state.day, 6)}/4`)}#mastery-review">Buka tes, kirim karya, dan revisi</a></section>`;
}

function connectionView() {
  const saved = connection();
  return `<details class="mastery-connection"${saved.token ? '' : ' open'}><summary>Koneksi penilaian AI · ${saved.token ? 'token sesi tersedia' : 'belum terhubung'}</summary>
    <p>Gunakan token pelajar pribadi dari pengelola, bukan API key 9router atau kunci provider. URL dan token hanya disimpan dalam sessionStorage tab ini, tidak masuk ekspor progres.</p>
    <form data-mastery-connect><label class="field">URL backend penilaian<input name="api" type="url" required value="${esc(saved.api)}" autocomplete="off" spellcheck="false"></label>
    <label class="field">Token pelajar<input name="token" type="password" required maxlength="1000" value="${esc(saved.token)}" autocomplete="off" spellcheck="false"></label>
    <div class="button-row"><button type="submit" class="button secondary">Simpan koneksi sesi</button><button type="button" class="button secondary" data-mastery-action="clear-connection">Hapus token sesi</button></div>
    <p data-mastery-message role="status" aria-live="polite"></p></form></details>`;
}

function checkResult(check, task) {
  const result = gradeUnderstanding(task.week, check.answers);
  return `<p><strong>${check.score}/${check.total} · ${check.passed ? 'Lulus cek pemahaman' : 'Perlu latihan terarah'}</strong> · ${esc(dateLabel(check.createdAt))}</p>
    <ol class="mastery-feedback-list">${task.questions.map((question, index) => {
      const feedback = result.feedback[index];
      return `<li><strong>${esc(question.prompt)}</strong><p>Jawabanmu: ${esc(check.answers[index] || '(kosong)')} · ${feedback?.correct ? 'Benar' : 'Belum tepat'}</p><p>${lines(feedback?.explanation || question.explanation)}</p>${feedback?.correct ? '' : `<p>Contoh jawaban yang diterima: ${esc(feedback?.answer || question.accepted[0])}</p>`}</li>`;
    }).join('')}</ol>
    ${check.passed ? '<p>Pemahaman pola sudah memenuhi ambang. Lanjutkan tulisan dan rekaman; tes ini saja belum meluluskan minggu.</p>' : '<p>Remedial: pelajari kembali penjelasan pada soal yang belum tepat, buat dua contoh baru, lalu ulangi tes. Percobaan awal dan pengulangan tetap dibedakan; pengulangan bukan materi baru.</p>'}`;
}

function understandingView(mastery, task) {
  const checks = mastery.checks.filter(check => check.week === task.week);
  const latest = checks.at(-1);
  const answers = checkDrafts.get(task.week) || [];
  return `<section class="mastery-section" aria-labelledby="mastery-understanding-title"><h3 id="mastery-understanding-title">1. Cek pemahaman objektif</h3>
    <p>Empat soal baru untuk tujuan minggu ini. Jawab sebelum melihat feedback. Ambang kerja: minimal 3/4 (75%); bukan tes CEFR. Jawaban singkat dinilai dengan varian yang ditetapkan, bukan oleh AI.</p>
    <form data-mastery-understanding data-week="${task.week}"><fieldset><legend>Kerjakan sendiri tanpa membuka jawaban</legend>
    ${task.questions.map((question, index) => `<label class="field">${index + 1}. ${esc(question.prompt)}<input name="answer-${index}" required maxlength="1000" value="${esc(answers[index] || '')}" autocomplete="off"></label>`).join('')}</fieldset>
    <button class="button secondary" type="submit">${checks.length ? 'Nilai percobaan ulang' : 'Nilai jawaban'}</button><p data-mastery-message role="status" aria-live="polite"></p></form>
    ${latest ? `<div class="mastery-result" tabindex="-1" data-mastery-check-result><h4>Hasil terbaru dan langkah berikut</h4>${checkResult(latest, task)}</div>` : '<p>Belum ada percobaan. Penjelasan jawaban muncul setelah dinilai.</p>'}
    ${checks.length ? `<details><summary>Riwayat tes (${checks.length})</summary><ol class="evidence-list">${checks.slice().reverse().map((check, index) => `<li><details><summary>${esc(dateLabel(check.createdAt))} · ${check.score}/${check.total} · ${index === checks.length - 1 ? 'Percobaan pertama' : 'Pengulangan'}</summary>${checkResult(check, task)}<small>ID ${esc(check.id)}</small></details></li>`).join('')}</ol></details>` : ''}
  </section>`;
}

function submissionForm(mastery, task, kind, stage) {
  const key = keyOf(task.week, kind, stage);
  const draft = draftFor(task.week, kind, stage);
  const parents = mastery.submissions.filter(row => row.week === task.week && row.kind === kind && row.stage === stage);
  const prompt = stage === 'phase' ? task.phaseTask : task[`${kind}Task`];
  return `<form class="mastery-submission" data-mastery-submit data-week="${task.week}" data-kind="${kind}" data-stage="${stage}" aria-busy="${busy.has(key)}">
    <h4>${esc(kindLabel(kind))} · ${esc(stageLabel(stage))}</h4><div class="mastery-task">${lines(prompt)}</div>
    <fieldset${busy.has(key) || draft.pending ? ' disabled' : ''}><legend>${draft.parentId ? 'Revisi karya terdahulu' : 'Karya baru'}</legend>
    <label class="field">Hubungan dengan karya sebelumnya<select name="parentId"><option value="">Draft baru, bukan revisi</option>${parents.map(row => `<option value="${esc(row.id)}"${draft.parentId === row.id ? ' selected' : ''}>Revisi ${esc(dateLabel(row.createdAt))} · ${esc(row.id)}</option>`).join('')}</select></label>
    <p>Memilih revisi menyalin teks lama sebagai titik awal; rekaman revisi harus diunggah ulang. Kiriman lama dan feedback tidak akan ditimpa.</p>
    <label class="field">${kind === 'writing' ? 'Teks karya (wajib)' : 'Catatan rekaman / konteks interaksi (bukan pengganti audio)'}<textarea name="text" rows="${kind === 'writing' ? 8 : 4}" maxlength="20000"${kind === 'writing' ? ' required' : ''} placeholder="${kind === 'writing' ? 'Tulis dalam bahasa Inggris. Gunakan data fiktif.' : 'Catat konteks, pertanyaan lanjutan, dan siapa yang bertanya. Jangan klaim interaksi bila hanya monolog.'}">${esc(draft.text)}</textarea></label>
    ${kind === 'speaking' ? `<label class="field">File audio · maksimal 10 MiB<input name="audio" type="file" accept="${AUDIO_TYPES.join(',')}"></label><p data-mastery-file>${draft.file ? `File dipilih: ${esc(draft.file.name)} (${(draft.file.size / 1024 / 1024).toFixed(1)} MiB). Tetap tersedia selama sesi halaman ini.` : draft.sourceId ? 'Percobaan ulang memakai audio asli yang sudah disimpan di browser ini. Mengunggah file lain membuat kiriman baru.' : 'Unggah MP3, M4A, WAV, WebM, OGG, atau FLAC. Simpan file asli; audio lokal tidak ikut di dalam ekspor JSON.'}</p>` : ''}
    <label class="task-check"><input type="checkbox" name="independent"${draft.independent && !draft.parentId ? ' checked' : ''}${draft.parentId ? ' disabled' : ''}><span>Saya menyatakan draft baru ini dikerjakan mandiri tanpa AI/penerjemah atau contoh jawaban. Pernyataan ini bukan verifikasi aplikasi; revisi selalu ditandai berbantuan.</span></label>
    <label class="task-check"><input type="checkbox" name="consent" required${draft.consent ? ' checked' : ''}><span>Saya setuju teks${kind === 'speaking' ? ' dan audio' : ''} karya ini dikirim ke backend yang saya pilih, lalu ke layanan AI melalui 9router untuk penilaian. Saya tidak menyertakan data sensitif.</span></label></fieldset>
    <button class="button primary" type="submit"${busy.has(key) ? ' disabled' : ''}>${busy.has(key) ? 'Sudah dikirim · menunggu penilaian nyata…' : draft.pending ? 'Simpan kembali hasil yang sudah diterima' : draft.sourceId ? 'Coba nilai kiriman tersimpan' : draft.parentId ? 'Kirim revisi untuk dinilai AI' : 'Kirim karya untuk dinilai AI'}</button>
    <p data-mastery-message role="status" aria-live="polite">${esc(draft.message)}</p></form>`;
}

function assessmentView(row) {
  const assessment = row.assessment;
  if (!assessment) return '<p>Kiriman tersimpan, tetapi belum ada penilaian AI valid. Tidak dianggap lulus.</p>';
  const total = assessment.scores.every(score => Number.isInteger(score)) ? assessment.scores.reduce((sum, score) => sum + score, 0) : null;
  const list = (title, values) => values.length ? `<h5>${title}</h5><ul>${values.map(value => `<li>${lines(value)}</li>`).join('')}</ul>` : '';
  return `<p><strong>${esc(labels[assessment.status])}</strong> · ${total === null ? 'Skor belum lengkap' : `${total}/12`}</p>
    <dl class="mastery-scores">${aspects[row.kind].map((aspect, index) => `<div><dt>${esc(aspect)}</dt><dd>${assessment.scores[index] === null ? 'Tidak dapat dinilai' : `${assessment.scores[index]}/3`}</dd></div>`).join('')}</dl>
    <h5>Feedback AI</h5><p class="mastery-preserve">${lines(assessment.feedback)}</p>${list('Yang sudah kuat', assessment.strengths)}${list('Yang perlu diperbaiki', assessment.improvements)}
    <h5>Langkah berikut</h5><p>${lines(assessment.nextAction)}</p>${list('Batas penilaian', assessment.limitations)}
    ${assessment.transcript !== null ? `<details><summary>Transkrip dari layanan AI (dapat keliru)</summary><p class="mastery-preserve">${lines(assessment.transcript)}</p></details>` : ''}
    <small>Model: ${esc(assessment.model)} · Rubrik internal 04-EVALUASI.md. AI bukan verifikasi manusia.</small>`;
}

function historyView(mastery, week) {
  const rows = mastery.submissions.filter(row => row.week === week).slice().reverse();
  const reviews = mastery.humanReviews.filter(row => row.week === week);
  return `<section class="mastery-section" aria-labelledby="mastery-history-title"><h3 id="mastery-history-title">4. Riwayat karya, feedback, dan revisi</h3>
    <p>Setiap kiriman disimpan sebagai rekaman terpisah; teks asli, feedback, tanggal, dan tautan revisinya tidak diedit oleh form baru. Riwayat berada di browser ini. Cadangkan progres JSON serta file audio asli secara terpisah.</p>
    ${rows.length ? `<ol class="evidence-list">${rows.map(row => `<li id="mastery-record-${esc(row.id)}"><details${row.id === rows[0].id ? ' open' : ''}><summary>${esc(kindLabel(row.kind))} · ${esc(stageLabel(row.stage))} · ${esc(dateLabel(row.createdAt))} · ${esc(labels[row.assessment?.status] || labels.submitted)}</summary>
      <p>${row.parentId ? `Revisi berbantuan dari <a href="#mastery-record-${esc(row.parentId)}">${esc(row.parentId)}</a> · bukan bukti mandiri baru` : row.independent ? 'Draft mandiri menurut pernyataan pengguna, belum diverifikasi' : 'Kemandirian draft tidak dinyatakan'}</p>
      ${row.sourceId ? `<p>Feedback terkait kiriman <a href="#mastery-record-${esc(row.sourceId)}">${esc(row.sourceId)}</a>; bukan percobaan atau revisi baru.</p>` : ''}
      <h4>Teks kiriman asli</h4><p class="mastery-preserve">${row.text ? lines(row.text) : '(Hanya audio; tidak ada catatan teks.)'}</p>
      ${row.audioId ? `<button class="button secondary" type="button" data-mastery-action="play-audio" data-record-id="${esc(row.id)}">Putar audio asli</button><div data-mastery-audio-slot></div><button class="button secondary" type="button" data-mastery-action="download-audio" data-record-id="${esc(row.id)}">Unduh audio asli</button>` : ''}
      ${assessmentView(row)}<p><small>Tugas ${esc(row.taskId)} · ID ${esc(row.id)}</small></p>
      ${!row.assessment && !row.sourceId ? `<button class="button secondary" type="button" data-mastery-action="retry" data-record-id="${esc(row.id)}">Coba nilai kiriman yang sama</button>` : ''}
      <button class="button secondary" type="button" data-mastery-action="revise" data-record-id="${esc(row.id)}">Buat revisi dari kiriman ini</button><p data-mastery-message role="status" aria-live="polite"></p>
    </details></li>`).join('')}</ol>` : '<p>Belum ada kiriman tersimpan. Tulis atau unggah rekaman, setujui pengiriman, lalu tunggu respons AI yang sebenarnya.</p>'}
    ${reviews.length ? `<h4>Review manusia yang dilaporkan</h4><p>Catatan pengguna, bukan verifikasi identitas penilai oleh aplikasi.</p><ul class="evidence-list">${reviews.map(review => `<li><strong>${esc(review.reviewer)}</strong> · ${esc(dateLabel(review.createdAt))}<p>${esc(stageLabel(review.stage))} · <a href="#mastery-record-${esc(review.submissionId)}">Kiriman ${esc(review.submissionId)}</a></p><p>Skor dilaporkan: ${review.scores.map(score => `${score}/3`).join(' · ')}</p><p>${lines(review.feedback)}</p></li>`).join('')}</ul>` : ''}</section>`;
}

export function disposeMastery() {
  if (activeAudioUrl) URL.revokeObjectURL(activeAudioUrl);
  activeAudioUrl = null;
}

export function resetMasteryDrafts() {
  disposeMastery();
  generation += 1;
  for (const controller of requests) controller.abort();
  requests.clear();
  busy.clear();
  drafts.clear();
  checkDrafts.clear();
}

export function masteryView(state) {
  disposeMastery();
  const task = taskFor(state.week);
  if (!task) return '';
  const mastery = normalizeMastery(state.mastery);
  return `<section id="mastery-review" class="learning-panel mastery" aria-labelledby="mastery-title"><h2 id="mastery-title">Buktikan penguasaan · minggu ${task.week}</h2>
    <p><strong>${esc(task.title)}</strong> · ${esc(task.objective)}</p>${statusView(masteryStatus(state, task.week))}${connectionView()}${understandingView(mastery, task)}
    <section class="mastery-section" aria-labelledby="mastery-weekly-title"><h3 id="mastery-weekly-title">2. Karya mingguan → feedback AI → revisi</h3><p>Kirim karya asli sebelum melihat feedback. Nilai 8/12 tanpa aspek 0 dan tanpa keterbatasan penilaian hanya berarti lulus sementara. Aspek yang tidak dapat dinilai ditampilkan apa adanya, bukan diisi angka rekaan.</p>${submissionForm(mastery, task, 'writing', 'weekly')}${submissionForm(mastery, task, 'speaking', 'weekly')}</section>
    <section class="mastery-section" aria-labelledby="mastery-phase-title"><h3 id="mastery-phase-title">3. Checkpoint fase</h3>${task.phaseTask ? `<p>Minggu gate: lengkapi tugas integratif baru berikut. Checkpoint fase tidak digantikan checklist atau revisi tugas mingguan. Review manusia tetap terpisah; gunakan protokol listening/reading dan bukti interaksi pada panduan evaluasi.</p>${submissionForm(mastery, task, 'writing', 'phase')}${submissionForm(mastery, task, 'speaking', 'phase')}` : '<p>Checkpoint fase tersedia pada minggu 4, 8, 12, 16, 20, 24, dan 26. Minggu ini fokus pada tujuan dan karya mingguan.</p>'}<a class="action-link" href="${routeHref('panduan/evaluasi')}">Baca rubrik dan protokol evaluasi lengkap</a></section>
    ${historyView(mastery, task.week)}</section>`;
}

function message(element, ctx, text) {
  const output = element.querySelector('[data-mastery-message]');
  if (output) output.textContent = text;
  ctx.announce(text);
}

function capture(form) {
  const draft = draftFor(Number(form.dataset.week), form.dataset.kind, form.dataset.stage);
  if (draft.pending || busy.has(keyOf(Number(form.dataset.week), form.dataset.kind, form.dataset.stage))) return draft;
  draft.text = form.elements.namedItem('text').value;
  draft.parentId = form.elements.namedItem('parentId').value;
  draft.independent = !draft.parentId && form.elements.namedItem('independent').checked;
  draft.consent = form.elements.namedItem('consent').checked;
  const fileInput = form.elements.namedItem('audio');
  if (fileInput?.files?.[0]) draft.file = fileInput.files[0];
  return draft;
}

function fileBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(',')[1]);
    reader.onerror = () => reject(new Error('File audio tidak dapat dibaca. Pilih ulang file asli.'));
    reader.readAsDataURL(file);
  });
}

async function requestAssessment(payload, saved) {
  const controller = new AbortController();
  requests.add(controller);
  const timeout = setTimeout(() => controller.abort(), 240000);
  try {
    const response = await fetch(`${apiUrl(saved.api)}/api/assess`, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${saved.token}` }, body: JSON.stringify(payload), signal: controller.signal, credentials: 'omit', redirect: 'error' });
    let result;
    try { result = await response.json(); }
    catch {
      if (response.ok) throw new Error('Backend tidak mengembalikan JSON penilaian. Karya tidak dihapus; periksa URL API.');
    }
    if (!response.ok) {
      const errors = { 401: 'Token pelajar ditolak atau kedaluwarsa. Simpan token yang benar pada koneksi sesi.', 403: 'Akses penilaian ditolak. Periksa token dan URL backend.', 413: 'Karya atau audio terlalu besar untuk backend.', 429: 'Batas penilaian tercapai. Tunggu sebelum mencoba lagi.', 502: 'Layanan AI belum dapat menilai karya ini. Coba lagi nanti.', 503: 'Layanan penilaian belum tersedia. Coba lagi nanti.', 504: 'Layanan AI kehabisan waktu. Belum ada hasil yang diterima.' };
      throw new Error(errors[response.status] || (typeof result?.error?.message === 'string' ? result.error.message : typeof result?.error === 'string' ? result.error : `Penilaian gagal (HTTP ${response.status}).`));
    }
    const assessment = normalizeAssessment(result?.assessment);
    if (!assessment || typeof result.id !== 'string' || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(result.id) || typeof result.createdAt !== 'string' || !Number.isFinite(Date.parse(result.createdAt))) {
      throw new Error('Respons penilaian tidak valid; tidak ada status lulus yang dibuat. Isian tetap tersedia.');
    }
    return { id: result.id, createdAt: result.createdAt, assessment };
  } catch (error) {
    if (error.name === 'AbortError') throw new Error('Batas waktu habis; hasil AI belum diterima. Isian tetap ada. Mengirim lagi adalah permintaan penilaian baru.');
    if (error instanceof TypeError) throw new Error('Tidak dapat terhubung ke backend. Periksa internet, URL API, atau izin origin. Teks dan file tetap tersedia di sesi ini.');
    throw error;
  } finally { clearTimeout(timeout); requests.delete(controller); }
}

function storePending(draft, ctx) {
  const record = draft.pending;
  if (!ctx.state.mastery.submissions.some(row => row.id === record.id)) ctx.state.mastery.submissions.push(record);
  ctx.state.mastery = normalizeMastery(ctx.state.mastery);
  if (!ctx.state.mastery.submissions.some(row => row.id === record.id)) {
    draft.message = 'Feedback diterima tetapi metadata tidak dapat disimpan dengan aman. Bukti asli tetap ada; ekspor progres sebelum menutup tab.';
    return false;
  }
  if (ctx.persist() === false) {
    draft.message = 'Feedback sudah diterima dan ada di memori, tetapi belum tersimpan permanen. Jangan tutup tab. Ekspor progres atau tekan simpan kembali; tombol ini tidak mengirim ulang ke AI.';
    return false;
  }
  draft.pending = null;
  draft.text = '';
  draft.file = null;
  draft.parentId = '';
  draft.independent = false;
  draft.sourceId = null;
  draft.consent = false;
  draft.message = 'Karya dan feedback AI tersimpan sebagai riwayat baru. Baca feedback, lalu buat revisi bila diperlukan.';
  return true;
}

async function submitWork(form, ctx) {
  const week = Number(form.dataset.week);
  const kind = form.dataset.kind;
  const stage = form.dataset.stage;
  const key = keyOf(week, kind, stage);
  if (busy.has(key)) return;
  const task = taskFor(week);
  const draft = capture(form);
  const requestGeneration = generation;
  ctx.state.mastery = normalizeMastery(ctx.state.mastery);
  if (draft.pending) {
    storePending(draft, ctx);
    ctx.refresh();
    ctx.announce(draft.message);
    return;
  }
  busy.add(key);
  let audioId = null;
  try {
    if (!task || !['writing', 'speaking'].includes(kind) || !['weekly', 'phase'].includes(stage) || (stage === 'phase' && !task.phaseTask)) throw new Error('Tugas penilaian tidak valid.');
    if (!draft.consent) throw new Error('Persetujuan pengiriman wajib diberikan untuk karya ini.');
    if (draft.text.length > 20000 || (kind === 'writing' && !draft.text.trim())) throw new Error('Tulisan wajib diisi; teks maksimal 20.000 karakter.');
    if (draft.parentId && !ctx.state.mastery.submissions.some(row => row.id === draft.parentId && row.week === week && row.kind === kind && row.stage === stage)) throw new Error('Kiriman induk revisi tidak ditemukan untuk tugas ini.');
    const saved = connection();
    if (!saved.token.trim()) throw new Error('Simpan token pelajar pada Koneksi penilaian AI terlebih dahulu.');
    apiUrl(saved.api);
    let source = ctx.state.mastery.submissions.find(row => row.id === draft.sourceId && !row.sourceId);
    if (source && (source.text !== draft.text || (source.parentId || '') !== draft.parentId)) source = null;
    let file = draft.file;
    if (source?.audioId && !file) {
      const stored = await readAudio(source.audioId);
      if (requestGeneration !== generation) return;
      if (stored?.blob) file = new File([stored.blob], stored.name || 'rekaman', { type: stored.blob.type });
    }
    if (kind === 'speaking' && (!file || !file.size || file.size > MAX_AUDIO || !AUDIO_TYPES.includes(file.type.split(';')[0]))) throw new Error('Unggah audio yang didukung, tidak kosong, maksimal 10 MiB. Catatan teks tidak menggantikan rekaman.');
    draft.message = 'Menyimpan bukti kiriman sebelum meminta penilaian AI…';
    form.setAttribute('aria-busy', 'true');
    form.querySelector('fieldset').disabled = true;
    form.querySelector('button[type="submit"]').disabled = true;
    message(form, ctx, draft.message);
    if (!source) {
      if (ctx.state.mastery.submissions.length >= 4999) throw new Error('Batas riwayat penilaian tercapai. Cadangkan progres; kiriman baru belum dikirim ke AI.');
      if (kind === 'speaking') {
        audioId = newId();
        await putAudio(audioId, file, file.name);
        if (requestGeneration !== generation) { await deleteAudio(audioId); return; }
      }
      source = Object.freeze({ id: newId(), createdAt: new Date().toISOString(), week, kind, stage, parentId: draft.parentId || null, sourceId: null, text: draft.text, audioId, taskId: masteryTaskId(week, kind, stage), independent: !draft.parentId && draft.independent, assessment: null });
      ctx.state.mastery.submissions.push(source);
      draft.sourceId = source.id;
    }
    if (ctx.persist() === false) throw new Error('Bukti kiriman ada di memori tetapi belum tersimpan permanen. AI belum dihubungi. Cadangkan progres atau coba simpan lagi.');
    const payload = { week, kind, stage, parentId: source.parentId, text: source.text };
    if (kind === 'speaking') payload.audio = { base64: await fileBase64(file), mime: file.type.split(';')[0], name: file.name };
    if (requestGeneration !== generation) return;
    draft.message = 'Kiriman tersimpan · menunggu respons penilaian AI yang sebenarnya. Jangan tutup tab.';
    message(form, ctx, draft.message);
    const result = await requestAssessment(payload, saved);
    if (requestGeneration !== generation) return;
    if (ctx.state.mastery.submissions.some(row => row.id === result.id)) throw new Error('Backend mengembalikan ID kiriman yang sudah ada. Riwayat lama tidak ditimpa.');
    draft.pending = Object.freeze({ ...source, ...result, sourceId: source.id });
    storePending(draft, ctx);
  } catch (error) {
    if (requestGeneration !== generation) return;
    if (audioId && !ctx.state.mastery.submissions.some(row => row.audioId === audioId)) {
      try { await deleteAudio(audioId); } catch { /* The original file remains available in the form buffer. */ }
    }
    draft.message = `${error.message} Tidak ada kelulusan otomatis; teks dan bukti kiriman yang sudah tersimpan tetap dipertahankan.`;
  } finally {
    if (requestGeneration === generation) {
      busy.delete(key);
      ctx.refresh();
      ctx.announce(draft.message);
    }
  }
}

async function audioAction(button, record, ctx) {
  try {
    if (!record?.audioId) throw new Error('Referensi audio tidak ditemukan.');
    const stored = await readAudio(record.audioId);
    if (!stored?.blob) throw new Error('Audio tidak ada di browser ini. Impor JSON tidak memuat file audio; gunakan file asli cadangan.');
    if (button.dataset.masteryAction === 'download-audio') {
      const url = URL.createObjectURL(stored.blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = stored.name || `${record.id}.audio`;
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } else {
      disposeMastery();
      activeAudioUrl = URL.createObjectURL(stored.blob);
      const audio = document.createElement('audio');
      audio.controls = true;
      audio.preload = 'metadata';
      audio.src = activeAudioUrl;
      audio.setAttribute('aria-label', `Audio asli ${kindLabel(record.kind)} ${dateLabel(record.createdAt)}`);
      button.closest('details').querySelector('[data-mastery-audio-slot]').replaceChildren(audio);
      audio.focus();
    }
  } catch (error) { message(button.closest('details'), ctx, error.message); }
}

export async function handleMasteryEvent(event, ctx) {
  const target = event.target;
  if (!(target instanceof Element)) return false;
  const form = target.closest('[data-mastery-submit]');
  if ((event.type === 'input' || event.type === 'change') && form) {
    const week = Number(form.dataset.week);
    const key = keyOf(week, form.dataset.kind, form.dataset.stage);
    if (busy.has(key)) return true;
    const draft = capture(form);
    if (event.type === 'change' && target.name === 'parentId') {
      const parent = ctx.state.mastery?.submissions.find(row => row.id === draft.parentId);
      draft.text = parent?.text || '';
      draft.file = null;
      draft.independent = false;
      draft.sourceId = null;
      draft.consent = false;
      ctx.refresh();
    } else if (event.type === 'change' && target.name === 'audio') {
      draft.file = target.files?.[0] || null;
      draft.sourceId = null;
      form.querySelector('[data-mastery-file]').textContent = draft.file ? `File dipilih: ${draft.file.name} (${(draft.file.size / 1024 / 1024).toFixed(1)} MiB).` : 'Belum ada file audio dipilih.';
    }
    return true;
  }
  const checkForm = target.closest('[data-mastery-understanding]');
  if ((event.type === 'input' || event.type === 'change') && checkForm) {
    checkDrafts.set(Number(checkForm.dataset.week), Array.from(checkForm.querySelectorAll('input')).map(input => input.value));
    return true;
  }
  if (event.type === 'click') {
    const button = target.closest('[data-mastery-action]');
    if (!button) return false;
    event.preventDefault();
    const action = button.dataset.masteryAction;
    if (action === 'clear-connection') {
      try { sessionStorage.removeItem(CONNECTION_KEY); } catch { /* Inputs are cleared even if session storage is unavailable. */ }
      const tokenInput = button.closest('form').elements.namedItem('token');
      tokenInput.value = '';
      message(button.closest('form'), ctx, 'Token sesi dihapus. Karya dan progres tidak diubah.');
      return true;
    }
    const record = ctx.state.mastery?.submissions.find(row => row.id === button.dataset.recordId);
    if (action === 'play-audio' || action === 'download-audio') await audioAction(button, record, ctx);
    if ((action === 'revise' || action === 'retry') && record) {
      const key = keyOf(record.week, record.kind, record.stage);
      const draft = draftFor(record.week, record.kind, record.stage);
      if (busy.has(key) || draft.pending) { message(button.closest('details'), ctx, 'Selesaikan penilaian / penyimpanan yang sedang berjalan sebelum membuat revisi.'); return true; }
      Object.assign(draft, { parentId: action === 'retry' ? record.parentId || '' : record.id, sourceId: action === 'retry' ? record.id : null, text: record.text, file: null, independent: action === 'retry' && record.independent, consent: false, message: action === 'retry' ? 'Kiriman asli yang sama siap dinilai ulang. Setujui pengiriman lagi; teks dan audio asli dari penyimpanan lokal akan digunakan. Mengubah teks/audio membuat kiriman baru.' : 'Teks lama disalin. Perbaiki berdasarkan feedback; untuk speaking unggah rekaman baru.' });
      ctx.refresh();
      document.querySelector(`[data-mastery-submit][data-week="${record.week}"][data-kind="${record.kind}"][data-stage="${record.stage}"] textarea`)?.focus();
    }
    return true;
  }
  if (event.type !== 'submit') return false;
  if (target.matches('[data-mastery-connect]')) {
    event.preventDefault();
    try {
      const api = apiUrl(target.elements.namedItem('api').value.trim());
      const token = target.elements.namedItem('token').value.trim();
      if (!token || token.length > 1000 || /\s/.test(token)) throw new Error('Isi token pelajar yang valid tanpa spasi.');
      sessionStorage.setItem(CONNECTION_KEY, JSON.stringify({ api, token }));
      message(target, ctx, 'Koneksi disimpan untuk tab ini. Belum ada karya yang dikirim.');
    } catch (error) { message(target, ctx, error.message || 'SessionStorage tidak tersedia. Izinkan penyimpanan sesi browser sebelum mengirim karya.'); }
    return true;
  }
  if (checkForm) {
    event.preventDefault();
    const week = Number(checkForm.dataset.week);
    const answers = Array.from(checkForm.querySelectorAll('input')).map(input => input.value);
    const task = taskFor(week);
    if (!task || answers.length !== task.questions.length || answers.some(answer => !answer.trim() || answer.length > 1000)) { message(checkForm, ctx, 'Jawab keempat soal; maksimal 1.000 karakter per jawaban.'); return true; }
    const grade = gradeUnderstanding(week, answers);
    ctx.state.mastery = normalizeMastery(ctx.state.mastery);
    if (ctx.state.mastery.checks.length >= 5000) { message(checkForm, ctx, 'Batas riwayat tes tercapai. Cadangkan progres sebelum menambah bukti.'); return true; }
    ctx.state.mastery.checks.push(Object.freeze({ id: newId(), week, answers: Object.freeze(answers), score: grade.score, total: grade.total, passed: grade.passed, createdAt: new Date().toISOString() }));
    checkDrafts.set(week, answers);
    const saved = ctx.persist();
    ctx.refresh();
    document.querySelector('[data-mastery-check-result]')?.focus();
    ctx.announce(saved === false ? 'Hasil ada di memori, tetapi penyimpanan browser gagal. Ekspor progres sebelum menutup tab.' : `Hasil ${grade.score}/${grade.total}. ${grade.passed ? 'Lanjutkan karya mingguan.' : 'Baca remedial sebelum mengulang.'}`);
    return true;
  }
  if (form) { event.preventDefault(); await submitWork(form, ctx); return true; }
  return false;
}
