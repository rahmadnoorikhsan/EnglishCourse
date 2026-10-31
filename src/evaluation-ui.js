import { escapeHtml as esc } from './markdown.js';
import { routeHref } from './router.js';
import { weeklyRecommendation, recordAttempt } from './learning.js';

const levels = ['unknown', 'A1', 'A2', 'B1', 'B2', 'C1'];
const skillNames = { listening: 'Listening', reading: 'Reading', writing: 'Writing', speaking: 'Speaking', pattern: 'Pola bahasa' };
const statusNames = { collect: 'Kumpulkan bukti', repeat: 'Ulangi latihan terarah', focus: 'Fokus pada gap', advance: 'Siap mencoba tantangan berikut' };
const validWeek = week => Number.isInteger(week) && week >= 1 && week <= 26;
const levelLabel = level => level === 'unknown' ? 'Level materi belum diketahui' : `Materi ${level}`;
const dateLabel = value => new Date(value).toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' });

function sourceIdentity(source) {
  const normalized = source.normalize('NFKC').trim().replace(/\s+/g, ' ');
  try {
    const url = new URL(normalized);
    if (url.protocol === 'https:' || url.protocol === 'http:') {
      url.hash = '';
      url.searchParams.sort();
      return `external:${url.host}${url.pathname.replace(/\/+$/, '')}${url.search}`;
    }
  } catch {
    // A precise title and unit identifier is also a valid material identity.
  }
  return `external:${normalized.toLocaleLowerCase('en')}`;
}

function assessmentForm(week) {
  return `<section class="learning-panel" aria-labelledby="external-assessment-title">
    <h2 id="external-assessment-title">Catat cek listening / reading dari sumber lain</h2>
    <p>Gunakan dua unit baru yang berbeda untuk setiap skill, di luar paket latihan lokal. Kerjakan pada level materi yang sama; jangan menyamakan level materi dengan kemampuan CEFR diri sendiri.</p>
    <p id="external-protocol">Listening: tanpa transkrip/subtitle, kecepatan normal, maksimal dua pemutaran. Reading: tanpa kamus/penerjemah. Catat hasil sebelum membuka jawaban. Centang bantuan bila memakai teks, terjemahan, AI, atau bantuan jawaban. Self-check tetap laporan pribadi, bukan hasil terverifikasi.</p>
    <form data-evaluation-assessment data-evaluation-week="${week}" aria-describedby="external-protocol">
      <div class="learning-grid">
        <label class="field">Keterampilan<select name="kind" required><option value="listening">Listening</option><option value="reading">Reading</option></select></label>
        <label class="field">Level yang tertera pada materi<select name="level">${levels.map(level => `<option value="${level}">${esc(levelLabel(level))}</option>`).join('')}</select></label>
        <label class="field">Identitas sumber / unit materi<input name="source" type="text" required maxlength="500" placeholder="URL unit atau penerbit + judul + nomor unit" aria-describedby="source-identity-help"></label>
        <label class="field">Jawaban benar<input name="score" type="number" min="0" step="1" required inputmode="numeric"></label>
        <label class="field">Jumlah soal<input name="total" type="number" min="1" step="1" required inputmode="numeric"></label>
      </div>
      <p id="source-identity-help">Gunakan URL unit yang spesifik, bukan hanya beranda situs. Tanpa URL, tulis penerbit, judul, dan identitas unit yang tetap. Identitas materi dibuat otomatis dari isian ini; materi yang sama tidak menjadi bukti baru hanya karena diulang.</p>
      <label class="task-check"><input type="checkbox" name="fresh"> <span>Ini percobaan pertama; materi belum pernah saya baca/dengar sebelumnya.</span></label>
      <label class="task-check"><input type="checkbox" name="assisted"> <span>Saya memakai bantuan saat mengerjakan.</span></label>
      <p>Hasil dicatat manual dan tidak diverifikasi aplikasi. Jangan mengisi skor jika sumber tidak menyediakan soal atau penilaian yang dapat dipertanggungjawabkan.</p>
      <button class="button secondary" type="submit">Simpan hasil cek eksternal</button>
    </form>
  </section>`;
}

function attemptsView(learning, week) {
  const attempts = learning.attempts.filter(attempt => attempt.week === week).slice().reverse();
  return `<section class="learning-panel" aria-labelledby="evaluation-attempts-title"><h2 id="evaluation-attempts-title">Riwayat hasil minggu ${week}</h2>
    <p>Latihan lokal, pengulangan, dan hasil dengan bantuan tetap berguna untuk belajar, tetapi bukan bukti pemahaman mandiri atas dua materi baru. Sumber eksternal juga merupakan laporan pribadi yang belum diverifikasi aplikasi.</p>
    ${attempts.length ? `<ul class="evidence-list">${attempts.map(attempt => `<li>
      <strong>${esc(skillNames[attempt.kind] || attempt.kind)} · ${esc(attempt.score)} / ${esc(attempt.total)}</strong>
      <p>${esc(attempt.source || attempt.materialId)}</p>
      <p>${esc(levelLabel(attempt.level))} · ${attempt.mode === 'assessment' ? 'Cek pemahaman' : 'Latihan'} · ${attempt.fresh ? 'Percobaan pertama / materi baru' : 'Pengulangan / bukan materi baru'} · ${attempt.assisted ? 'Dengan bantuan' : 'Tanpa bantuan (dilaporkan sendiri)'}</p>
      <time datetime="${esc(attempt.createdAt)}">${esc(dateLabel(attempt.createdAt))}</time>
    </li>`).join('')}</ul>` : '<p>Belum ada hasil yang dicatat pada minggu ini. Kerjakan latihan atau catat cek materi eksternal di atas.</p>'}
  </section>`;
}

function reviewsView(learning, week) {
  const reviews = learning.reviews.filter(review => review.week === week).slice().reverse();
  return `<section class="learning-panel" aria-labelledby="weekly-review-title"><h2 id="weekly-review-title">Catatan dan rencana mingguan</h2>
    <form data-evaluation-review data-evaluation-week="${week}">
      <label class="field">Bukti yang sudah ada, gap, feedback manusia, dan tindakan minggu berikut<textarea name="notes" rows="5" required maxlength="10000" placeholder="Saya mampu … dengan bantuan …; bukti …; gap …; rencana …"></textarea></label>
      <p>Setiap penyimpanan menambah catatan bertanggal; riwayat lama tidak ditimpa. Hanya disimpan di browser ini. Jangan masukkan data sensitif.</p>
      <button class="button secondary" type="submit">Simpan catatan mingguan</button>
    </form>
    <h3>Riwayat catatan minggu ${week}</h3>
    ${reviews.length ? `<ul class="evidence-list">${reviews.map(review => `<li><time datetime="${esc(review.createdAt)}">${esc(dateLabel(review.createdAt))}</time><p>${esc(review.notes).replace(/\r?\n/g, '<br>')}</p></li>`).join('')}</ul>` : '<p>Belum ada catatan mingguan.</p>'}
  </section>`;
}

export function evaluationView(state, week = state.week) {
  const selectedWeek = validWeek(Number(week)) ? Number(week) : state.week;
  const recommendation = weeklyRecommendation(state.learning, selectedWeek);
  const lessonHref = routeHref(`hari-ini/${selectedWeek}/${state.day}`);
  const portfolioHref = routeHref(`hari-ini/${selectedWeek}/${Math.min(state.day, 6)}/3`);
  return `<header class="section-heading"><h2>Evaluasi mingguan</h2><p>Profil empat keterampilan berdasarkan bukti, bukan checklist atau klaim CEFR.</p></header>
    <label class="field">Minggu yang ditinjau<select data-evaluation-week-select>${Array.from({ length: 26 }, (_, index) => index + 1).map(number => `<option value="${number}" ${number === selectedWeek ? 'selected' : ''}>Minggu ${number}</option>`).join('')}</select></label>
    <section class="learning-panel" aria-labelledby="recommendation-title">
      <h2 id="recommendation-title">${esc(recommendation.title)}</h2>
      <p><strong>${esc(statusNames[recommendation.status])}</strong> · Saran belajar internal, bukan kelulusan otomatis atau sertifikasi.</p>
      <ul>${recommendation.reasons.map(reason => `<li>${esc(reason)}</li>`).join('')}</ul>
      <h3>Tindakan berikut</h3><ul>${recommendation.actions.map(action => `<li>${esc(action)}</li>`).join('')}</ul>
    </section>
    <section class="learning-panel" aria-labelledby="skill-profile-title"><h2 id="skill-profile-title">Bukti per keterampilan</h2>
      <p>Keputusan memakai bukti minggu ini dan minggu sebelumnya pada level materi yang sebanding. Listening/reading perlu masing-masing dua unit baru yang berbeda, tanpa bantuan, minimal 70%. Speaking/writing perlu masing-masing dua tugas mandiri berbeda, minimal 8/12 tanpa aspek 0, dengan penilaian manusia; speaking juga harus interaktif.</p>
      <div class="learning-grid">${recommendation.skills.map(item => `<article class="skill-summary"><h3>${esc(skillNames[item.skill])}</h3><p><strong>${esc(statusNames[item.status])}</strong></p><p>${esc(item.detail)}</p><a class="action-link" href="${item.skill === 'speaking' || item.skill === 'writing' ? portfolioHref : lessonHref}">${item.skill === 'speaking' || item.skill === 'writing' ? 'Buka tugas dan bukti output' : 'Buka latihan harian'}</a></article>`).join('')}</div>
      <p>Rubrik self-check dan AI bersifat sementara, belum diverifikasi manusia. Label penilai manusia adalah catatan pengguna, bukan pemeriksaan identitas oleh aplikasi. Skor internal dan level materi tidak menetapkan CEFR; tidak ada layanan tes atau penilaian otomatis di halaman ini.</p>
      <a class="action-link" href="${routeHref('panduan/evaluasi')}">Baca protokol evaluasi dan rubrik lengkap</a>
    </section>
    ${assessmentForm(selectedWeek)}${attemptsView(state.learning, selectedWeek)}${reviewsView(state.learning, selectedWeek)}`;
}

export function handleEvaluationEvent(event, ctx) {
  const { state, persist, announce, refresh } = ctx;
  if (event.type === 'change' && event.target.matches('[data-evaluation-week-select]')) {
    const week = Number(event.target.value);
    if (!validWeek(week)) { announce('Pilih minggu 1–26.'); return true; }
    state.week = week;
    state.day = 1;
    const saved = persist();
    refresh();
    announce(saved ? `Menampilkan evaluasi minggu ${week}.` : 'Minggu berubah, tetapi belum tersimpan di browser. Ekspor progres untuk arsip.');
    return true;
  }
  if (event.type !== 'submit') return false;
  const form = event.target.closest('[data-evaluation-assessment], [data-evaluation-review]');
  if (!form) return false;
  event.preventDefault();
  const week = Number(form.dataset.evaluationWeek);
  if (!validWeek(week)) { announce('Minggu evaluasi tidak valid.'); return true; }
  const data = new FormData(form);
  if (form.hasAttribute('data-evaluation-assessment')) {
    const kind = String(data.get('kind') || '');
    const source = String(data.get('source') || '').trim();
    const level = String(data.get('level') || '');
    const rawScore = String(data.get('score') || '').trim();
    const rawTotal = String(data.get('total') || '').trim();
    const score = Number(rawScore);
    const total = Number(rawTotal);
    if (!['listening', 'reading'].includes(kind) || !levels.includes(level) || !source || source.length > 500) {
      announce('Pilih skill dan level materi, lalu isi identitas sumber/unit secara lengkap (maksimal 500 karakter).');
      return true;
    }
    if (!/^\d+$/.test(rawScore) || !/^\d+$/.test(rawTotal) || !Number.isSafeInteger(score) || !Number.isSafeInteger(total) || total <= 0 || score < 0 || score > total) {
      announce('Isi skor dan total sebagai bilangan bulat: total harus positif, dan skor antara 0 dan total.');
      return true;
    }
    const attempt = recordAttempt(state.learning, {
      week, day: state.day, kind, materialId: sourceIdentity(source), source, level,
      score, total, choices: [], mode: 'assessment', fresh: data.has('fresh'), assisted: data.has('assisted'),
    });
    if (!attempt) { announce('Hasil belum dicatat. Periksa kembali identitas materi, skor, dan total.'); return true; }
    const saved = persist();
    refresh();
    announce(saved ? `Hasil cek dicatat.${data.has('fresh') && !attempt.fresh ? ' Materi ini pernah dicatat; hasil ditandai sebagai pengulangan.' : ''}` : 'Hasil ada dalam sesi ini, tetapi belum tersimpan di browser. Ekspor progres untuk arsip.');
    return true;
  }
  const notes = String(data.get('notes') || '').trim();
  if (!notes || notes.length > 10000) { announce('Isi catatan mingguan, maksimal 10.000 karakter.'); return true; }
  if (state.learning.reviews.length >= 5000) { announce('Riwayat review penuh (5.000 catatan). Ekspor arsip sebelum menghapus progres.'); return true; }
  state.learning.reviews.push({ id: crypto.randomUUID(), week, notes, createdAt: new Date().toISOString() });
  const saved = persist();
  refresh();
  announce(saved ? 'Catatan mingguan ditambahkan ke riwayat bertanggal.' : 'Catatan ada dalam sesi ini, tetapi belum tersimpan di browser. Ekspor progres untuk arsip.');
  return true;
}
