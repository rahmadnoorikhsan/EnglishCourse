import { escapeHtml as esc } from './markdown.js';
import { skillSummary } from './learning.js';

const labels = { listening: 'Listening', reading: 'Reading', speaking: 'Speaking', writing: 'Writing', language: 'Grammar & kosakata', review: 'Review' };
let running = null;
let tick;
const duration = seconds => `${Math.floor(seconds / 60)}m ${Math.floor(seconds % 60)}d`;
const options = selected => Object.entries(labels).map(([key, label]) => `<option value="${key}" ${key === selected ? 'selected' : ''}>${label}</option>`).join('');

export function timeView(state, step) {
  const skill = running?.skill || ['language', 'listening', 'writing', 'review', 'review'][step];
  const seconds = state.learning.time.filter(row => row.week === state.week && row.day === state.day).reduce((sum, row) => sum + row.seconds, 0);
  const elapsed = running ? Math.floor((performance.now() - running.started) / 1000) : 0;
  const clock = `${String(Math.floor(elapsed / 60)).padStart(2, '0')}:${String(elapsed % 60).padStart(2, '0')}`;
  return `<section class="learning-panel study-clock" aria-labelledby="study-clock-title"><div class="clock-controls"><div><h2 id="study-clock-title">Waktu fokus</h2><p class="muted" data-time-today>Hari ini ${duration(seconds)} tercatat</p></div><label class="field">Keterampilan<select data-clock-skill ${running ? 'disabled' : ''}>${options(skill)}</select></label><output data-clock-display aria-live="off">${clock}</output><div class="button-row"><button type="button" class="button secondary" data-clock="start" ${running ? 'disabled' : ''}>Mulai</button><button type="button" class="button secondary" data-clock="pause" ${running ? '' : 'disabled'}>Jeda & simpan</button></div></div><details><summary>Catat waktu manual & cara kerja timer</summary><p class="muted">Timer mencatat waktu saat dijeda, pindah halaman, tab disembunyikan, atau halaman ditutup. Tab latar tidak dihitung. Jangan mencatat ulang waktu yang sudah masuk timer.</p><form data-time-manual class="learning-grid"><label class="field">Keterampilan<select name="skill">${options(skill)}</select></label><label class="field">Menit yang benar-benar dipakai<input name="minutes" type="number" min="1" max="480" step="1" required></label><button class="button secondary" type="submit">Catat waktu manual</button></form></details></section>`;
}

function updateClock() {
  if (!running) return;
  const elapsed = Math.floor((performance.now() - running.started) / 1000);
  const output = document.querySelector('[data-clock-display]');
  if (output) output.textContent = `${String(Math.floor(elapsed / 60)).padStart(2, '0')}:${String(elapsed % 60).padStart(2, '0')}`;
}

export function stopStudyClock(ctx) {
  if (!running) return false;
  const seconds = Math.min(86400, Math.floor((performance.now() - running.started) / 1000));
  const { week, day, skill } = running;
  running = null;
  clearInterval(tick);
  const start = document.querySelector('[data-clock="start"]');
  const pause = document.querySelector('[data-clock="pause"]');
  const select = document.querySelector('[data-clock-skill]');
  if (start) start.disabled = false;
  if (pause) pause.disabled = true;
  if (select) select.disabled = false;
  const output = document.querySelector('[data-clock-display]');
  if (output) output.textContent = '00:00';
  if (seconds > 0 && ctx.state.learning.time.length < 5000) {
    ctx.state.learning.time.push({ id: crypto.randomUUID(), week, day, skill, seconds, createdAt: new Date().toISOString() });
    ctx.persist();
  }
  else if (seconds > 0) ctx.announce('Riwayat waktu penuh (5.000 catatan). Ekspor arsip dan hapus catatan lama sebelum mencatat lagi.');
  const today = document.querySelector('[data-time-today]');
  if (today) today.textContent = `Hari ini ${duration(ctx.state.learning.time.filter(row => row.week === ctx.state.week && row.day === ctx.state.day).reduce((sum, row) => sum + row.seconds, 0))} tercatat`;
  return true;
}

export function handleTimeEvent(event, ctx) {
  const form = event.target.closest('[data-time-manual]');
  if (event.type === 'submit' && form) {
    event.preventDefault();
    const data = new FormData(form);
    const minutes = Number(data.get('minutes'));
    const skill = data.get('skill');
    if (!Number.isInteger(minutes) || minutes < 1 || minutes > 480 || !labels[skill]) return true;
    if (ctx.state.learning.time.length >= 5000) { ctx.announce('Riwayat waktu penuh. Ekspor arsip dan hapus catatan lama sebelum mencatat lagi.'); return true; }
    ctx.state.learning.time.push({ id: crypto.randomUUID(), week: ctx.state.week, day: ctx.state.day, skill, seconds: minutes * 60, createdAt: new Date().toISOString() });
    const saved = ctx.persist();
    ctx.refresh();
    ctx.announce(saved ? 'Waktu belajar dicatat.' : 'Waktu belum tersimpan di browser. Ekspor progres.');
    return true;
  }
  if (event.type !== 'click') return false;
  const action = event.target.closest('[data-clock]')?.dataset.clock;
  if (action === 'start') {
    if (running) return true;
    const skill = document.querySelector('[data-clock-skill]').value;
    running = { week: ctx.state.week, day: ctx.state.day, skill, started: performance.now() };
    document.querySelector('[data-clock="start"]').disabled = true;
    document.querySelector('[data-clock="pause"]').disabled = false;
    document.querySelector('[data-clock-skill]').disabled = true;
    tick = setInterval(updateClock, 1000);
    ctx.announce('Timer fokus dimulai.');
    return true;
  }
  if (action === 'pause') {
    stopStudyClock(ctx); ctx.announce('Timer dijeda; waktu fokus dicatat.'); return true;
  }
  const remove = event.target.closest('[data-time-delete]')?.dataset.timeDelete;
  if (remove && window.confirm('Hapus catatan waktu ini?')) {
    ctx.state.learning.time = ctx.state.learning.time.filter(row => row.id !== remove);
    ctx.persist(); ctx.refresh(); return true;
  }
  return Boolean(remove);
}

export function timeSummaryView(state) {
  const summary = skillSummary(state.learning);
  const rows = Object.keys(labels).map(skill => {
    const seconds = state.learning.time.filter(row => row.skill === skill).reduce((sum, row) => sum + row.seconds, 0);
    const data = summary[skill] || {};
    return `<div class="skill-summary"><h3>${labels[skill]}</h3><strong>${duration(seconds)}</strong>${data.attempts ? `<p>${data.attempts} bukti / percobaan</p>${data.firstPercent == null ? '<p>Belum ada nilai pada level materi yang diketahui.</p>' : `<p>Awal ${Math.round(data.firstPercent)}% → terbaru ${Math.round(data.latestPercent)}% · ${esc(data.level)}</p><p>Ringkasan latihan selevel, bukan ukuran CEFR atau bukti materi baru.</p>`}` : '<p>Belum ada bukti bernilai.</p>'}</div>`;
  }).join('');
  const history = state.learning.time.slice().reverse().map(row => `<li><div><strong>${labels[row.skill]}</strong> · ${duration(row.seconds)}<small>Minggu ${row.week}, hari ${row.day} · ${esc(new Date(row.createdAt).toLocaleString('id-ID'))}</small></div><button class="button secondary" data-time-delete="${esc(row.id)}" aria-label="Hapus waktu ${labels[row.skill]} ${duration(row.seconds)}">Hapus</button></li>`).join('');
  return `<section class="learning-panel"><h2>Waktu nyata per keterampilan</h2><p>Timer dan catatan manual, bukan durasi rencana atau ukuran CEFR.</p><div class="learning-grid">${rows}</div><details><summary>Riwayat waktu (${state.learning.time.length})</summary><ul class="evidence-list">${history || '<li>Belum ada waktu tercatat.</li>'}</ul></details></section>`;
}
