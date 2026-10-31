import { weeks, phases } from './content.js';
import { markdown, escapeHtml as esc } from './markdown.js';
import { checkedBlocks, checkKey } from './state.js';
import { material } from './material.js';
import { routeHref } from './router.js';

const names = ['Tonton pelajaran', 'Dengar & baca', 'Bicara & tulis', 'Ulangi & evaluasi'];
const types = ['Video pelajaran', 'Listening & reading', 'Speaking & writing', 'Review & catatan'];

function weekNavigation(state) {
  const week = weeks[state.week - 1];
  const adjacent = (number, label, arrow) => number < 1 || number > 26
    ? `<span class="week-arrow is-disabled" aria-hidden="true">${arrow}</span>`
    : `<a class="week-arrow" href="${routeHref(`hari-ini/${number}/1`)}" aria-label="${label}">${arrow}</a>`;
  return `<div class="week-navigation"><div class="week-position"><span>Minggu ${state.week} <span class="muted">/ 26</span></span><div>${adjacent(state.week - 1, 'Minggu sebelumnya', '←')}${adjacent(state.week + 1, 'Minggu berikutnya', '→')}</div></div><strong class="current-week-title">${esc(week.title)}</strong><button type="button" class="week-picker-trigger" data-action="choose-week" aria-haspopup="dialog">Ganti minggu <span aria-hidden="true">↗</span></button></div>
    <nav class="day-navigation" aria-label="Hari latihan"><span class="day-caption">Hari latihan</span><div class="day-buttons">${Array.from({ length: 7 }, (_, index) => {
      const day = index + 1;
      const done = day < 7 && checkedBlocks(state, state.week, day) === 4;
      return `<a href="${routeHref(`hari-ini/${state.week}/${day}`)}" ${state.day === day ? 'aria-current="date"' : ''} aria-label="Hari ${day}${day === 7 ? ', istirahat' : done ? ', 4 langkah selesai' : ''}" class="${done ? 'is-done' : ''}">${day}${done ? '<span class="day-dot" aria-hidden="true"></span>' : ''}</a>`;
    }).join('')}</div><small>Hari 7 · Istirahat</small></nav>`;
}

function weekPicker(state) {
  return `<dialog id="week-picker" class="week-picker" aria-labelledby="week-picker-title"><header class="week-picker-header"><div><h2 id="week-picker-title">Pilih minggu belajar</h2><p>26 minggu · Pilih topik, lanjutkan langkahmu.</p></div><form method="dialog"><button class="week-arrow" aria-label="Tutup pilihan minggu">×</button></form></header><div class="week-picker-list">${phases.map(phase => `<section><h3>Fase ${phase.number} · ${esc(phase.title)}</h3>${weeks.filter(item => item.phase === phase.number).map(item => {
    const blocks = Array.from({ length: 6 }, (_, index) => checkedBlocks(state, item.number, index + 1)).reduce((sum, n) => sum + n, 0);
    return `<a class="week-option" href="${routeHref(`hari-ini/${item.number}/1`)}" ${item.number === state.week ? 'aria-current="true" autofocus' : ''}><span class="week-option-number">${String(item.number).padStart(2, '0')}</span><span><strong>${esc(item.title)}</strong><small>${item.number === state.week ? 'Sedang dibuka · ' : ''}${blocks}/24 langkah ditandai</small></span><span aria-hidden="true">${item.number === state.week ? '●' : '→'}</span></a>`;
  }).join('')}</section>`).join('')}</div><p class="week-picker-footnote">Penanda aktivitas, bukan nilai atau kelulusan. Semua minggu dapat dibuka.</p></dialog>`;
}


export function lesson(state, step, outlineOpen) {
  const week = weeks[state.week - 1];
  const rest = state.day === 7;
  const summary = step === 4 && !rest;
  const count = checkedBlocks(state);
  const title = rest ? 'Hari istirahat' : summary ? 'Ringkasan latihan hari ini' : names[step];
  const done = !rest && !summary && Boolean(state.checks[checkKey(state.week, state.day, step)]);
  const notes = `<details class="lesson-notes"><summary>Catatan hari ini</summary><label class="sr-only" for="session-note">Catatan harian</label><textarea id="session-note" rows="4" maxlength="5000" placeholder="Catatan bebas dan hasil latihan. Draft lama tetap ada di sini; portofolio writing tersedia terpisah pada langkah Bicara & tulis."></textarea><small id="note-state">Disimpan di browser ini, tidak disinkronkan. Maksimal 5.000 karakter per hari.</small></details>`;
  const advance = state.day < 7 ? `<button class="button primary" data-action="next-day">${state.day === 6 ? 'Ke hari istirahat' : 'Lanjut ke hari ' + (state.day + 1)} →</button>` : state.week < 26 ? `<a class="button primary" href="${routeHref(`hari-ini/${state.week + 1}/1`)}">Mulai minggu ${state.week + 1} →</a>` : `<a class="button primary" href="${routeHref('progres')}">Lihat progres akhir →</a>`;
  let body;
  if (rest) body = `<div class="lesson-instruction prose"><p>Tidak ada latihan wajib hari ini. Gunakan waktu untuk beristirahat.</p><p>Sebelum pindah minggu, cek kembali hasil latihan dan evaluasi. Ulangi minggu ini jika masih diperlukan.</p></div><div class="lesson-actions"><button class="button secondary" data-day="6">Kembali ke hari 6</button>${advance}</div>`;
  else if (summary) body = `<div class="lesson-instruction prose"><p><strong>${count} dari 4 langkah</strong> sudah ditandai selesai. Ini catatan aktivitas, bukan nilai kemampuan bahasa.</p><p>${state.day === 6 ? 'Tinjau bukti listening, reading, rekaman, dan tulisan sebelum memutuskan lanjut atau ulang.' : 'Kamu bisa berhenti di sini dan melanjutkan hari berikutnya saat siap.'}</p><a class="action-link" href="${routeHref('panduan/evaluasi')}">Buka panduan evaluasi</a></div>${notes}<div class="lesson-actions"><button class="button secondary" data-step="0">Tinjau latihan</button>${advance}</div>`;
  else body = `${material(week, state.day, step)}${notes}<label class="task-check"><input type="checkbox" data-block="${step}" ${done ? 'checked' : ''}> Tandai langkah ini selesai</label><div class="lesson-actions"><button class="button secondary" data-action="previous-step" ${step === 0 ? 'disabled' : ''}>← Sebelumnya</button><button class="button primary" data-action="complete-step">${done ? 'Lanjut' : 'Selesai & lanjut'} →</button></div>`;
  return `<div class="classroom"><details class="lesson-outline" ${outlineOpen ? 'open' : ''}><summary>Daftar langkah</summary><div class="outline-context">${weekNavigation(state)}<small>${rest ? 'Hari tanpa tugas wajib' : count + ' dari 4 langkah selesai'}</small>${rest ? '' : `<progress value="${count}" max="4" aria-label="Langkah hari ini selesai"></progress>`}</div>${rest ? '' : `<nav class="step-list" aria-label="Langkah latihan">${names.map((name,index)=>`<button class="step-item" data-step="${index}" ${step===index?'aria-current="step"':''}><span class="step-indicator" aria-hidden="true">${state.checks[checkKey(state.week,state.day,index)]?'✓':index+1}</span><span class="step-label">${name}<small>${state.checks[checkKey(state.week,state.day,index)]?'Selesai · ':''}${state.minutes/4} menit</small></span></button>`).join('')}<button class="step-item" data-step="4" ${summary?'aria-current="step"':''}><span class="step-indicator" aria-hidden="true">≡</span><span class="step-label">Ringkasan harian</span></button></nav>`}<a class="action-link outline-syllabus" href="${routeHref('kurikulum')}"><span><strong>Silabus</strong><small>Jelajahi 26 minggu</small></span></a></details><article class="lesson-content"><div class="lesson-context">Minggu ${state.week} <span aria-hidden="true">/</span> Hari ${state.day}</div><header class="lesson-header"><p class="lesson-kicker">${esc(week.title)}</p><h1>${title}</h1><p class="lesson-meta">${rest ? 'Istirahat' : summary ? 'Review harian' : `Langkah ${step+1} dari 4 · ${types[step]} · ${state.minutes/4} menit`}</p></header>${body}<details class="lesson-summary"><summary>Target & materi minggu ini</summary><div class="prose"><h2>Fokus</h2>${markdown(week.focus)}<h2>Petunjuk materi</h2>${markdown(week.materials)}<h2>Hasil latihan</h2>${markdown(week.outcome)}</div></details><details class="lesson-settings"><summary>Pengaturan waktu</summary><label for="minutes-select">Rencana waktu per hari</label><select id="minutes-select">${[60,120,180,240].map(n=>`<option value="${n}" ${state.minutes===n?'selected':''}>${n} menit · ${n/4} menit per langkah</option>`).join('')}</select><p class="muted">Durasi rencana, bukan pencatat waktu otomatis.</p></details></article></div>${weekPicker(state)}`;
}
