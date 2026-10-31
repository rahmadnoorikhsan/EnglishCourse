import './styles.css';
import { documents } from './content.js';
import { curriculum, guides, reader, progress } from './views.js';
import { lesson } from './lesson.js';
import { escapeHtml } from './markdown.js';
import { loadState, saveState, emptyState, getStorageWarning, sessionKey, checkKey, checkedBlocks, downloadProgress } from './state.js';
import { loadVideo } from './material.js';
import { gradeQuiz } from './quiz.js';
import { routeHref, readRoute } from './router.js';

let state = loadState();
let step = firstUnfinished();
const main = document.querySelector('#main');
let statusTimer;
function firstUnfinished() {
  const index = [0, 1, 2, 3].find(index => !state.checks[checkKey(state.week, state.day, index)]);
  return index ?? 4;
}
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
function lessonUrl() { return routeHref(`hari-ini/${state.week}/${state.day}/${step + 1}`); }
function navigate(url) {
  if (url === location.pathname + location.hash) return;
  history.replaceState({ ...history.state, scrollY: window.scrollY }, '', location.href);
  history.pushState({ scrollY: 0 }, '', url);
  render();
}
function navigateStep(nextStep) {
  step = nextStep;
  navigate(lessonUrl());
  if (!window.matchMedia('(min-width: 1024px)').matches) {
    const outline = main.querySelector('.lesson-outline');
    if (outline) outline.open = false;
  }
}
function render(focus = true) {
  const match = readRoute(new URL(location.href));
  const parts = match?.parts || ['not-found'];
  const route = parts[0];
  if (route === 'hari-ini') {
    const week = Number(parts[1]);
    const day = Number(parts[2]);
    const requestedStep = Number(parts[3]);
    if (Number.isInteger(week) && week >= 1 && week <= 26 && week !== state.week) {
      state.week = week; state.day = 1;
    }
    if (Number.isInteger(day) && day >= 1 && day <= 7) state.day = day;
    step = Number.isInteger(requestedStep) && requestedStep >= 1 && requestedStep <= 5 ? requestedStep - 1 : firstUnfinished();
    persist();
    if (location.pathname !== lessonUrl()) history.replaceState(history.state, '', lessonUrl());
  }
  const titles = { 'hari-ini': 'Belajar', kurikulum: 'Silabus', panduan: 'Referensi', progres: 'Progres' };
  const outlineOpen = main.querySelector('.lesson-outline')?.open ?? window.matchMedia('(min-width: 1024px)').matches;
  if (route === 'hari-ini') main.innerHTML = lesson(state, step, outlineOpen);
  else if (route === 'kurikulum') main.innerHTML = curriculum(state);
  else if (route === 'panduan') main.innerHTML = parts[1] ? reader(parts[1]) : guides();
  else if (route === 'progres') main.innerHTML = progress(state);
  else main.innerHTML = `<div class="empty-state"><h1>Halaman tidak ditemukan</h1><a class="button primary" href="${routeHref('hari-ini')}">Kembali belajar</a></div>`;
  main.classList.toggle('is-classroom', route === 'hari-ini');
  for (const aside of main.querySelectorAll('aside')) aside.setAttribute('aria-label', 'Navigasi dokumen');
  document.title = `${route === 'hari-ini' ? `Minggu ${state.week} · Hari ${state.day}` : titles[route] || 'Halaman tidak ditemukan'} — EnglishCourse`;
  document.querySelector('#page-label').textContent = titles[route] || 'Halaman';
  for (const link of document.querySelectorAll('[data-nav]')) {
    const active = link.dataset.nav === route;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current');
  }
  const note = document.querySelector('#session-note');
  if (note) note.value = state.notes[sessionKey(state.week, state.day)] || '';
  showStorageWarning();
  if (focus) { main.focus({ preventScroll: true }); window.scrollTo(0, 0); }
  if (route === 'panduan' && match.anchor) {
    document.getElementById(match.anchor)?.scrollIntoView();
  }
}

main.addEventListener('change', event => {
  const target = event.target;
  if (target.id === 'week-select' || target.id === 'day-select') {
    if (target.id === 'week-select') { state.week = Number(target.value); state.day = 1; }
    else state.day = Number(target.value);
    persist(); navigateStep(firstUnfinished());
  } else if (target.id === 'minutes-select') {
    state.minutes = Number(target.value); persist();
    render(false);
    const settings = document.querySelector('.lesson-settings');
    settings.open = true; document.querySelector('#minutes-select').focus();
  } else if (target.matches('[data-block]')) {
    const key = checkKey(state.week, state.day, Number(target.dataset.block));
    if (target.checked) state.checks[key] = true; else delete state.checks[key];
    persist();
    const count = checkedBlocks(state);
    main.querySelector('.outline-context progress').value = count;
    main.querySelector('.outline-context small').textContent = `${count} dari 4 langkah selesai`;
    const item = main.querySelector(`[data-step="${target.dataset.block}"]`);
    item.querySelector('.step-indicator').textContent = target.checked ? '✓' : Number(target.dataset.block) + 1;
    item.querySelector('small').textContent = `${target.checked ? 'Selesai · ' : ''}${state.minutes / 4} menit`;
    main.querySelector('[data-action="complete-step"]').textContent = `${target.checked ? 'Lanjut' : 'Selesai & lanjut'} →`;
    announce('Progres langkah diperbarui.');
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
    document.querySelector('#note-state').textContent = saved ? 'Disimpan di browser ini, tidak disinkronkan.' : 'Belum tersimpan. Ekspor progres dari halaman Progres.';
  }
  if (event.target.id === 'guide-search') {
    const query = event.target.value.trim().toLocaleLowerCase('id');
    const found = documents.filter(doc => (doc.title + doc.markdown).toLocaleLowerCase('id').includes(query));
    document.querySelector('#search-results').innerHTML = found.length ? found.map(doc => `<a class="doc-card" href="${routeHref('panduan/' + doc.id)}"><h2>${escapeHtml(doc.title)}</h2><p>${escapeHtml(doc.description)}</p><span>Buka panduan</span></a>`).join('') : '<p class="empty-state" role="status">Tidak ada panduan yang cocok. Coba kata lain.</p>';
  }
});
main.addEventListener('submit', event => {
  const form = event.target.closest('[data-quiz]');
  if (!form) return;
  event.preventDefault();
  const fields = [...form.querySelectorAll('fieldset')];
  const choices = fields.map(field => Number(field.querySelector('input:checked')?.value ?? -1));
  const results = gradeQuiz(state.week, state.day, form.dataset.quiz, choices);
  if (!results) return;
  results.forEach((result, index) => {
    const feedback = fields[index].querySelector('[data-feedback]');
    feedback.hidden = false;
    feedback.textContent = `${result.correct ? 'Benar.' : 'Belum tepat.'} Jawaban: ${result.answer}. ${result.explanation}`;
    feedback.classList.toggle('is-correct', result.correct);
  });
  const score = results.filter(result => result.correct).length;
  form.querySelector('.quiz-result').textContent = `${score} dari ${results.length} benar. Ini hasil latihan, bukan level CEFR.`;
});
main.addEventListener('click', event => {
  const video = event.target.closest('[data-load-video]');
  if (video) loadVideo(video.dataset.loadVideo, video.closest('[data-video-slot]'));
  const selected = event.target.closest('[data-step]');
  if (selected) navigateStep(Number(selected.dataset.step));
  const day = event.target.closest('[data-day]');
  if (day) { state.day = Number(day.dataset.day); persist(); navigateStep(firstUnfinished()); }
  const action = event.target.closest('[data-action]')?.dataset.action;
  if (action === 'previous-step' && step > 0) navigateStep(step - 1);
  if (action === 'complete-step' && state.day < 7 && step < 4) {
    state.checks[checkKey(state.week, state.day, step)] = true;
    persist(); navigateStep(step + 1); announce('Langkah ditandai selesai.');
  }
  if (action === 'next-day' && state.day < 7) {
    state.day += 1; persist(); navigateStep(firstUnfinished());
  }
  if (action === 'export') { downloadProgress(state); announce('Salinan JSON progres diunduh untuk arsip.'); }
  if (action === 'print') window.print();
  if (action === 'reset' && window.confirm('Hapus semua checklist dan catatan EnglishCourse di browser ini? Ekspor dahulu jika ingin menyimpan arsip.')) {
    state = emptyState(); step = 0; persist(); render(false); announce('Progres di browser ini dihapus.');
  }
});
document.addEventListener('click', event => {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const link = event.target.closest('a[href]');
  if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self') || link.getAttribute('href').startsWith('#')) return;
  const url = new URL(link.href);
  if (url.origin !== location.origin || !readRoute(url)) return;
  event.preventDefault();
  navigate(url.pathname + url.hash);
});
window.addEventListener('popstate', () => {
  render();
  if (!location.hash) window.scrollTo(0, history.state?.scrollY || 0);
});
history.scrollRestoration = 'manual';
render(false);
