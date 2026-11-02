import { escapeHtml as esc } from './markdown.js';
import { recordAttempt } from './learning.js';
import { materialIdentity } from './quiz.js';


export function mountQuizTracking(state, root) {
  for (const form of root.querySelectorAll('[data-quiz]')) {
    const kind = form.dataset.quiz;
    const materialId = materialIdentity(state.week, state.day, kind);
    const attempts = state.learning.attempts.filter(row => row.materialId === materialId && row.kind === kind);
    const settings = document.createElement('div');
    settings.className = 'quiz-evidence-settings';
    settings.innerHTML = `<label class="task-check"><input type="checkbox" name="evidence-fresh" ${attempts.length ? 'disabled' : 'checked'}> Materi ini belum pernah saya lihat/dengar, termasuk di luar website</label><label class="task-check"><input type="checkbox" name="evidence-assisted"> Saya memakai transkrip, kamus, petunjuk jawaban, atau bantuan saat menjawab</label><p class="muted">${attempts.length ? 'Materi sudah pernah dikerjakan. Percobaan berikutnya tercatat sebagai latihan ulang.' : 'Paket lokal berlevel belum terverifikasi. Gunakan evaluasi sumber baru di Progres untuk bukti level yang jelas.'}</p>`;
    form.querySelector('button[type="submit"]').before(settings);
    const history = document.createElement('section');
    history.className = 'attempt-history';
    history.dataset.attemptHistory = kind;
    history.innerHTML = attemptHistory(attempts);
    form.after(history);
  }
}

function attemptHistory(rows) {
  return `<h4>Riwayat percobaan (${rows.length})</h4>${rows.length ? `<ol class="evidence-list">${rows.map((row, index) => `<li><div><strong>Percobaan ${index + 1}: ${row.score}/${row.total}</strong><small>${esc(new Date(row.createdAt).toLocaleString('id-ID'))} · ${row.fresh ? 'Percobaan awal, materi baru' : 'Latihan ulang / materi familier'}${row.assisted ? ' · Dengan bantuan' : ' · Tanpa bantuan'}</small></div></li>`).join('')}</ol>` : '<p class="muted">Hasil akan tersimpan setelah jawaban diperiksa.</p>'}`;
}

export function saveQuizAttempt(state, form, choices, results) {
  const kind = form.dataset.quiz;
  const row = recordAttempt(state.learning, {
    id: crypto.randomUUID(), week: state.week, day: state.day, kind,
    materialId: materialIdentity(state.week, state.day, kind), choices,
    score: results.filter(result => result.correct).length, total: results.length,
    createdAt: new Date().toISOString(), mode: state.day === 6 && kind !== 'pattern' ? 'assessment' : 'practice',
    fresh: Boolean(form.elements.namedItem('evidence-fresh')?.checked), assisted: Boolean(form.elements.namedItem('evidence-assisted')?.checked),
    level: 'unknown', source: `Paket harian minggu ${state.week} · hari ${state.day} · ${state.day === 6 && kind !== 'pattern' ? 'evaluasi' : 'latihan'} · ${kind}`,
  });
  if (!row) return false;
  const checkbox = form.elements.namedItem('evidence-fresh');
  if (checkbox) { checkbox.checked = false; checkbox.disabled = true; }
  form.parentElement.querySelector(`[data-attempt-history="${kind}"]`).innerHTML = attemptHistory(state.learning.attempts.filter(attempt => attempt.materialId === row.materialId && attempt.kind === kind));
  return true;
}
