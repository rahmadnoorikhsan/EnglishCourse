import './styles.css';
import { documents } from './content.js';
import { today, curriculum, guides, reader, progress } from './views.js';
import { escapeHtml } from './markdown.js';
import { loadState, saveState, emptyState, getStorageWarning, sessionKey, checkKey, downloadProgress } from './state.js';

let state = loadState();
const main = document.querySelector('#main');
let statusTimer;
function announce(text) {
  document.querySelector('#status').textContent = text;
  clearTimeout(statusTimer);
  statusTimer = setTimeout(() => { document.querySelector('#status').textContent = ''; }, 4000);
}
function persist() {
  const saved = saveState(state);
  showStorageWarning();
  return saved;
}
function showStorageWarning() {
  const element = document.querySelector('#storage-alert');
  element.textContent = getStorageWarning();
  element.hidden = !getStorageWarning();
}
function render(focus = true) {
  const parts = location.hash.slice(2).split('/');
  const route = parts[0] || 'hari-ini';
  if (route === 'hari-ini' && /^\d+$/.test(parts[1] || '')) {
    const week = Number(parts[1]);
    if (week >= 1 && week <= 26 && week !== state.week) { state.week = week; state.day = 1; persist(); }
  }
  const titles = { 'hari-ini': 'Hari ini', kurikulum: 'Perjalanan 26 minggu', panduan: 'Panduan & sumber', progres: 'Progres saya' };
  if (route === 'hari-ini') main.innerHTML = today(state);
  else if (route === 'kurikulum') main.innerHTML = curriculum(state);
  else if (route === 'panduan') main.innerHTML = parts[1] ? reader(parts[1]) : guides();
  else if (route === 'progres') main.innerHTML = progress(state);
  else main.innerHTML = '<div class="empty-state"><h1>Halaman tidak ditemukan.</h1><a class="button primary" href="#/hari-ini">Kembali belajar</a></div>';
  const asideLabels = { 'goal-note': 'Arah belajar', 'study-aside': 'Materi dan catatan sesi', toc: 'Navigasi dokumen' };
  for (const aside of main.querySelectorAll('aside')) {
    aside.setAttribute('aria-label', asideLabels[aside.className] || 'Informasi tambahan');
  }
  document.title = `${titles[route] || 'Halaman tidak ditemukan'} — EnglishCourse`;
  document.querySelector('#page-label').textContent = (titles[route] || 'Halaman').toUpperCase();
  for (const link of document.querySelectorAll('[data-nav]')) {
    const active = link.dataset.nav === route;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current');
  }
  const note = document.querySelector('#session-note');
  if (note) note.value = state.notes[sessionKey(state.week, state.day)] || '';
  showStorageWarning();
  if (focus) { main.focus({ preventScroll: true }); window.scrollTo(0, 0); }
  if (route === 'panduan' && parts[2]) {
    let anchor;
    try { anchor = decodeURIComponent(parts.slice(2).join('/')); } catch { return; }
    document.getElementById(anchor)?.scrollIntoView();
  }
}

main.addEventListener('change', event => {
  const target = event.target;
  if (target.id === 'week-select') {
    state.week = Number(target.value); state.day = 1; persist();
    // Keep a deep-linked week from overriding the newly selected week.
    history.replaceState(null, '', '#/hari-ini');
    render(false); document.querySelector('#week-select').focus();
  } else if (target.id === 'minutes-select') {
    state.minutes = Number(target.value); persist(); render(false); document.querySelector('#minutes-select').focus();
  } else if (target.matches('[data-block]')) {
    const key = checkKey(state.week, state.day, Number(target.dataset.block));
    if (target.checked) state.checks[key] = true; else delete state.checks[key];
    persist(); const block = target.dataset.block; render(false);
    document.querySelector(`[data-block="${block}"]`).focus(); announce('Checklist latihan diperbarui.');
  } else if (target.matches('[data-week-complete]')) {
    const week = Number(target.dataset.weekComplete);
    state.completed = target.checked ? [...new Set([...state.completed, week])] : state.completed.filter(n => n !== week);
    persist(); render(false); document.querySelector(`[data-week-complete="${week}"]`).focus();
    announce('Penanda minggu diperbarui, bukan penilaian CEFR.');
  }
});
main.addEventListener('input', event => {
  if (event.target.id === 'session-note') {
    state.notes[sessionKey(state.week, state.day)] = event.target.value;
    const saved = persist();
    document.querySelector('#note-state').textContent = saved ? 'Tersimpan di browser ini. Tidak disinkronkan ke perangkat lain.' : 'Belum tersimpan. Ekspor progres dari halaman Progres saya.';
  }
  if (event.target.id === 'guide-search') {
    const query = event.target.value.trim().toLocaleLowerCase('id');
    const found = documents.filter(doc => (doc.title + doc.markdown).toLocaleLowerCase('id').includes(query));
    document.querySelector('#search-results').innerHTML = found.length ? found.map(doc => `<a class="doc-card" href="#/panduan/${doc.id}"><span class="eyebrow">PANDUAN</span><h2>${escapeHtml(doc.title)}</h2><p>${escapeHtml(doc.description)}</p><span>Baca panduan →</span></a>`).join('') : '<p class="empty-state" role="status">Tidak ada panduan yang cocok. Coba kata lain.</p>';
  }
});
main.addEventListener('click', event => {
  const day = event.target.closest('[data-day]');
  if (day) { state.day = Number(day.dataset.day); persist(); render(false); document.querySelector(`[data-day="${state.day}"]`).focus(); }
  const action = event.target.closest('[data-action]')?.dataset.action;
  if (action === 'export') { downloadProgress(state); announce('Salinan JSON progres diunduh untuk arsip.'); }
  if (action === 'print') window.print();
  if (action === 'reset' && window.confirm('Hapus semua checklist dan catatan EnglishCourse di browser ini? Ekspor dahulu jika ingin menyimpan arsip.')) {
    state = emptyState(); persist(); render(false); announce('Progres di browser ini dihapus.');
  }
});
window.addEventListener('hashchange', () => render());
render(false);
