import { documents, weeks, phases } from './content.js';
import { markdown, toc, escapeHtml as esc, csvDownloads } from './markdown.js';
import { checkedBlocks } from './state.js';
import { routeHref } from './router.js';

const heading = (title, lead) => `<header class="page-heading"><h1>${esc(title)}</h1><p class="lead">${esc(lead)}</p></header>`;
const buttons = `<div class="button-row"><button class="button secondary" data-action="export">Ekspor progres</button><a class="button secondary" href="${csvDownloads.daily}" download="tracker-harian.csv">Tracker harian CSV</a><a class="button secondary" href="${csvDownloads.weekly}" download="tracker-mingguan.csv">Tracker mingguan CSV</a></div>`;


export function curriculum(state) {
  const currentPhase = weeks[state.week - 1].phase;
  return heading('Silabus', '26 minggu dalam enam fase. Ulangi latihan bila fondasi belum siap; perpindahan fase mengikuti hasil evaluasi, bukan kalender.') +
    `<div class="page-actions"><a class="button primary" href="${routeHref(`hari-ini/${state.week}`)}">Lanjutkan minggu ${state.week}</a><a href="${routeHref('panduan/kurikulum')}">Kurikulum lengkap</a></div>` +
    phases.map(phase => `<details class="phase-group" ${phase.number === currentPhase ? 'open' : ''}>
      <summary class="phase-heading"><span class="session-number">${String(phase.number).padStart(2, '0')}</span><div><span class="eyebrow">Fase ${phase.number} · Minggu ${phase.start}–${phase.end}</span><h2>${esc(phase.title)}</h2></div></summary>
      <div class="week-grid">${weeks.filter(week => week.phase === phase.number).map(week => {
        const checks = Array.from({ length: 6 }, (_, day) => checkedBlocks(state, week.number, day + 1)).reduce((total, count) => total + count, 0);
        const manual = state.completed.includes(week.number);
        return `<a class="week-card ${checks === 24 ? 'is-complete' : ''}" href="${routeHref(`hari-ini/${week.number}`)}" ${week.number === state.week ? 'aria-current="true"' : ''}><span class="week-number">Minggu ${String(week.number).padStart(2, '0')}</span><h3 class="week-title">${esc(week.title)}</h3><span class="week-status">${checks} / 24 blok selesai</span>${manual ? '<span class="manual-marker">Ditandai manual</span>' : ''}</a>`;
      }).join('')}</div>
    </details>`).join('') +
    `<p class="notice">Jumlah blok mengikuti checklist harian. Penanda manual di Progres belajar terpisah dari jumlah blok dan tidak berarti lolos gate atau naik CEFR. <a href="${routeHref('panduan/evaluasi')}">Baca evaluasi & gate.</a></p>`;
}

export function guides() {
  return heading('Referensi', 'Riset, panduan belajar, sumber materi, dan template pencatatan.') +
    '<label class="search-label" for="guide-search">Cari referensi</label><input id="guide-search" type="search" placeholder="Cari topik, misalnya pronunciation atau feedback" /><div id="search-results" class="doc-grid">' +
    documents.map(doc => `<a class="doc-card" href="${esc(routeHref(`panduan/${doc.id}`))}"><span class="eyebrow">${esc(doc.file.slice(0, 2))} / Panduan</span><h2>${esc(doc.title)}</h2><p>${esc(doc.description)}</p><span>Baca panduan →</span></a>`).join('') + '</div>';
}

export function reader(id) {
  const doc = documents.find(item => item.id === id);
  if (!doc) return heading('Referensi tidak ditemukan', 'Pilih dokumen dari daftar referensi.') + `<a class="button primary" href="${routeHref('panduan')}">Kembali ke referensi</a>`;
  return `<div class="doc-toolbar"><a href="${routeHref('panduan')}">← Semua panduan</a><span>Riset · 31 Oktober 2026</span></div><div class="reader-layout"><article class="prose">${markdown(doc.markdown, id)}</article><aside class="toc"><span class="eyebrow">DALAM PANDUAN INI</span><nav aria-label="Daftar isi">${toc(doc.markdown, id)}</nav><button class="button secondary" data-action="print">Cetak / simpan PDF</button></aside></div>`;
}

export function progress(state) {
  const complete = state.completed.length;
  const totalChecks = Object.values(state.checks).filter(Boolean).length;
  const notes = Object.values(state.notes).filter(note => note.trim()).length;
  return heading('Progres belajar', 'Catatan aktivitas belajar. Checklist dan penanda mingguan bukan penilaian kemampuan atau level CEFR.') +
    `<div class="stats-grid">
      <div class="stat"><span class="stat-label">Minggu ditandai manual</span><span class="stat-value">${complete}<small> / 26</small></span><progress value="${complete}" max="26" aria-label="Minggu ditandai selesai secara manual"></progress></div>
      <div class="stat"><span class="stat-label">Blok latihan selesai</span><span class="stat-value">${totalChecks}<small> / 624</small></span><span class="stat-detail">Berdasarkan checklist, bukan durasi atau CEFR</span></div>
      <div class="stat"><span class="stat-label">Catatan harian</span><span class="stat-value">${notes}</span><span class="stat-detail">Hanya tersimpan di browser ini</span></div>
    </div>
    <section class="settings-panel"><h2>Penanda mingguan manual</h2><p>Tandai setelah latihan minggu tersebut dijalankan. Penanda ini tidak mengubah checklist harian dan tidak menyatakan kelulusan fase.</p><div class="week-grid">${weeks.map(week => `<label class="task-check"><input type="checkbox" data-week-complete="${week.number}" ${state.completed.includes(week.number) ? 'checked' : ''} /> <span>Minggu ${week.number}: ${esc(week.title)}</span></label>`).join('')}</div><a href="${routeHref('panduan/evaluasi')}">Buka rubrik evaluasi & gate →</a></section>
    <section class="settings-panel"><h2>Penyimpanan & ekspor</h2><p>Tidak ada akun, sinkronisasi, atau pengiriman catatan ke server. Progres dan catatan hanya tersimpan di browser ini, bukan lintas perangkat. Data dapat hilang saat penyimpanan browser dibersihkan; ekspor salinan JSON untuk arsip. Jangan masukkan data sensitif.</p><p>File CSV adalah template pencatatan manual, bukan ekspor progres atau nilai otomatis.</p>${buttons}<div class="button-row"><button class="button danger" data-action="reset">Hapus progres di browser ini</button></div></section>`;
}
