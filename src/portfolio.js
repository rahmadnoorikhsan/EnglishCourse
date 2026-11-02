import { escapeHtml as esc } from './markdown.js';
import { dailyLesson } from './daily-course.js';
import { MAX_AUDIO_BYTES, putAudio, readAudio, deleteAudio, clearAudio } from './audio-store.js';

const levels = ['unknown', 'A1', 'A2', 'B1', 'B2', 'C1'];
const reviewers = { self: 'Diri sendiri', human: 'Manusia (guru/teman)', ai: 'AI (feedback ditempel manual)' };
const rubric = {
  writing: ['Tugas dan akurasi pesan', 'Organisasi', 'Kendali bahasa', 'Kesesuaian pembaca dan sumber'],
  speaking: ['Tugas dan pesan', 'Keterpahaman', 'Kelancaran dan interaksi', 'Kendali bahasa'],
};
const rubricDescriptions = {
  writing: [
    ['Tujuan/fakta utama salah atau hilang', 'Sebagian tujuan, informasi penting kurang', 'Tujuan utama jelas, sedikit kekurangan', 'Tujuan, detail, dan fakta penting akurat'],
    ['Hubungan ide tidak terbaca', 'Daftar kalimat dengan hubungan lemah', 'Urutan dan paragraf cukup jelas', 'Alur efektif dengan dukungan relevan'],
    ['Error sering mengubah/menghilangkan makna', 'Pembaca sering menebak', 'Umumnya jelas meskipun masih ada error', 'Bentuk/kata sesuai tujuan; kesalahan tidak mengganggu'],
    ['Tidak sesuai konteks; sumber diperlukan tetapi disalahgunakan', 'Register tidak stabil; rujukan/batas klaim kurang', 'Cukup sesuai pembaca; sumber dapat ditelusuri bila dibutuhkan', 'Register tepat; membedakan ide sendiri/sumber, klaim proporsional'],
  ],
  speaking: [
    ['Pesan utama belum tersampaikan', 'Sebagian pesan, banyak bantuan', 'Tujuan utama tercapai dengan beberapa klarifikasi', 'Tujuan dan detail penting tersampaikan jelas'],
    ['Sering tidak dapat dipahami', 'Pengulangan sering diperlukan', 'Umumnya dipahami; gangguan sesekali', 'Mudah dipahami; aksen boleh tetap Indonesia'],
    ['Belum dapat merespons', 'Banyak diam/naskah; sulit menjawab lanjutan', 'Respons cukup tersambung; dapat meminta klarifikasi', 'Menjaga giliran, memberi respons dan alasan spontan sesuai fase'],
    ['Bentuk bahasa menghalangi makna', 'Makna kadang salah/ambigu', 'Pola dasar cukup terkendali; error tidak dominan mengubah pesan', 'Pilihan bentuk/kata sesuai tugas, mampu memperbaiki kesalahan penting'],
  ],
};
const formBuffers = new Map();
const audioUrls = new Map();
let audioGeneration = 0;

const keyOf = state => `w${state.week}-d${state.day}`;
const newId = () => crypto.randomUUID();
const levelLabel = level => level === 'unknown' ? 'Belum ditentukan' : level;
const dateLabel = value => new Date(value).toLocaleString('id-ID');

function buffer(kind, key, defaults) {
  const id = `${kind}:${key}`;
  if (!formBuffers.has(id)) formBuffers.set(id, { ...defaults });
  return formBuffers.get(id);
}

function selectField(name, label, options, value) {
  return `<label class="field">${label}<select name="${name}">${options.map(([key, text]) => `<option value="${esc(key)}"${key === value ? ' selected' : ''}>${esc(text)}</option>`).join('')}</select></label>`;
}

function provenanceFields(kind, values) {
  return `<div class="learning-grid">${selectField('level', 'Level target tugas (bukan hasil tes)', levels.map(level => [level, levelLabel(level)]), values.level)}${selectField('reviewer', 'Asal penilaian / feedback', Object.entries(reviewers), values.reviewer)}</div>
    <fieldset><legend>Rubrik ${kind === 'writing' ? 'menulis' : 'berbicara'} · empat skor wajib untuk snapshot</legend><p>Gunakan deskripsi skor 0–3 dari panduan evaluasi sesuai tuntutan tugas dan level target. Catat contoh yang mendasari skor pada feedback atau catatan. Skor manual, bukan penetapan CEFR.${kind === 'writing' ? ' Draft awal otomatis tersimpan tanpa skor; snapshot bertanggal memerlukan empat skor yang kamu isi sendiri, tetapi tidak memerlukan feedback atau revisi. Pada tugas awal tanpa sumber, aspek pembaca dan sumber menilai kesesuaian pembaca/tujuan saja.' : ''}</p><div class="learning-grid">${rubric[kind].map((label, index) => selectField(`score${index}`, label, [['', 'Pilih skor'], ...rubricDescriptions[kind][index].map((description, score) => [String(score), `${score} — ${description}`])], values[`score${index}`] ?? '')).join('')}</div></fieldset>
    <label class="quiz-choice"><input name="independent" type="checkbox"${values.independent ? ' checked' : ''}><span>Dikerjakan mandiri tanpa contoh, koreksi langsung, atau bantuan AI</span></label>`;
}

function textHistory(label, value) {
  return `<div class="portfolio-text"><strong>${label}</strong><p>${value ? esc(value).replace(/\n/g, '<br>') : '—'}</p></div>`;
}

function historyMetadata(record, kind) {
  return `<p><time datetime="${esc(record.createdAt)}">${esc(dateLabel(record.createdAt))}</time> · Minggu ${record.week}, hari ${record.day}</p><p>Target: ${esc(levelLabel(record.level))} · Penilai: ${esc(reviewers[record.reviewer] || record.reviewer)} · ${record.independent ? 'Mandiri (dilaporkan pengguna)' : 'Berbantuan / tidak dinyatakan mandiri'}${kind === 'speaking' ? ` · ${record.interactive ? 'Interaktif (dilaporkan pengguna)' : 'Monolog / tidak dinyatakan interaktif'}` : ''}</p><dl class="skill-summary">${rubric[kind].map((label, index) => `<div><dt>${label}</dt><dd>${esc(record.scores[index])}/3</dd></div>`).join('')}</dl>`;
}

function writingHistory(writing) {
  const submissions = Object.entries(writing).flatMap(([key, value]) => value.submissions.map(record => ({ ...record, key }))).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  return submissions.length ? `<ol class="evidence-list">${submissions.map(record => {
    const [, week, day] = record.key.match(/^w(\d+)-d(\d+)$/);
    return `<li><details><summary>${esc(dateLabel(record.createdAt))} · M${week}/H${day} · ${esc(record.task)}</summary>${historyMetadata({ ...record, week, day }, 'writing')}${textHistory('Tugas', record.task)}${textHistory('Draft asli', record.draft)}${textHistory('Feedback', record.feedback)}${textHistory('Revisi', record.revision)}<p>Snapshot bertanggal tidak berubah saat buffer diedit. ID: ${esc(record.id)}</p><button type="button" class="button secondary" data-portfolio-action="delete-writing" data-key="${esc(record.key)}" data-id="${esc(record.id)}">Hapus snapshot menulis</button></details></li>`;
  }).join('')}</ol>` : '<p>Belum ada snapshot menulis. Draft awal tanpa feedback atau revisi sudah boleh disimpan.</p>';
}

function speakingHistory(records) {
  return records.length ? `<ol class="evidence-list">${[...records].sort((a, b) => b.createdAt.localeCompare(a.createdAt)).map(record => `<li data-speaking-record="${esc(record.id)}"><details><summary>${esc(dateLabel(record.createdAt))} · M${record.week}/H${record.day} · ${esc(record.task)}</summary>${historyMetadata(record, 'speaking')}${textHistory('Tugas', record.task)}${textHistory('Referensi / bukti teks', record.evidence)}${textHistory('Catatan', record.notes)}${record.audioId ? `<p>Referensi audio lokal: ${esc(record.audioId)}</p><div data-portfolio-player></div><button class="button secondary" type="button" data-portfolio-action="play-audio" data-id="${esc(record.id)}">Putar audio</button> <button class="button secondary" type="button" data-portfolio-action="download-audio" data-id="${esc(record.id)}">Unduh audio terpisah</button>` : '<p>Tidak ada file audio lokal pada bukti ini.</p>'}<p>ID bukti: ${esc(record.id)}</p><button class="button secondary" type="button" data-portfolio-action="delete-speaking" data-id="${esc(record.id)}">Hapus bukti${record.audioId ? ' dan audio lokal' : ''}</button></details></li>`).join('')}</ol>` : '<p>Belum ada bukti berbicara.</p>';
}

export function portfolioView(state) {
  const key = keyOf(state);
  const writing = state.learning.writing[key] || { draft: '', feedback: '', revision: '', reviewer: 'self', submissions: [] };
  const output = dailyLesson(state.week, state.day).output;
  const legacyBuffer = !writing.task && [writing.draft, writing.feedback, writing.revision].some(value => value.trim());
  const writingForm = buffer('writing', key, { task: writing.task || (legacyBuffer ? '' : output.writing), level: 'unknown', reviewer: writing.reviewer, independent: false });
  const speakingForm = buffer('speaking', key, { task: output.speaking, level: 'unknown', reviewer: 'self', evidence: '', notes: '', independent: false, interactive: false });
  return `<section class="learning-panel" data-portfolio><h2>Portofolio menulis & berbicara</h2><p>Minggu ${state.week}, hari ${state.day}. Gunakan data fiktif; jangan masukkan informasi sensitif. Bagian ini untuk arsip dan rubrik manual; rekaman mikrofon dan koreksi AI tersedia pada panel Rekam & koreksi grammar di atas.</p>${legacyBuffer ? '<p role="status">Buffer tulisan lama dipertahankan. Tugas asalnya belum tersimpan; isi tugas yang benar sebelum membuat snapshot. Jangan menganggap tulisan lama sebagai jawaban tugas harian baru.</p>' : ''}
    <section aria-labelledby="portfolio-writing-heading"><h3 id="portfolio-writing-heading">Menulis: draft → feedback → revisi</h3><form data-portfolio-form="writing" data-key="${key}" data-week="${state.week}" data-day="${state.day}"><label class="field">Tugas menulis (maksimal 1.000 karakter)<textarea name="task" maxlength="1000" required rows="3">${esc(writingForm.task)}</textarea></label><label class="field">Draft asli (wajib, maksimal 20.000 karakter)<textarea name="draft" maxlength="20000" required rows="7">${esc(writing.draft)}</textarea></label><label class="field">Feedback (opsional; maksimal 20.000 karakter)<textarea name="feedback" maxlength="20000" rows="4">${esc(writing.feedback)}</textarea></label><label class="field">Revisi (opsional; maksimal 20.000 karakter)<textarea name="revision" maxlength="20000" rows="7">${esc(writing.revision)}</textarea></label>${provenanceFields('writing', { ...writingForm, reviewer: writing.reviewer })}<p data-portfolio-save-status role="status">Tugas, draft, feedback, revisi, dan asal penilai disimpan otomatis di browser ini saat diedit. Rubrik dan pernyataan kemandirian masuk ke snapshot saat disimpan. Maksimal 100 snapshot per sesi.</p><button class="button secondary" type="submit">Simpan snapshot menulis bertanggal</button><p data-portfolio-message role="status" aria-live="polite"></p></form></section>
    <section aria-labelledby="portfolio-speaking-heading"><h3 id="portfolio-speaking-heading">Berbicara: bukti & rubrik</h3><form data-portfolio-form="speaking" data-key="${key}" data-week="${state.week}" data-day="${state.day}"><label class="field">Tugas berbicara (maksimal 1.000 karakter)<textarea name="task" maxlength="1000" required rows="3">${esc(speakingForm.task)}</textarea></label><label class="field">Referensi bukti (teks biasa; misalnya nama file, lokasi rekaman, atau catatan penilai; maksimal 20.000 karakter)<textarea name="evidence" maxlength="20000" rows="3">${esc(speakingForm.evidence)}</textarea></label><label class="field">File audio lokal opsional (maksimal 15 MiB)<input name="audio" type="file" accept="audio/*"></label><p data-portfolio-file-status>${speakingForm.file ? `Pilihan sesi ini: ${esc(speakingForm.file.name)}. Pilih file lain untuk mengganti.` : 'Gunakan file audio yang bisa diputar browser ini. Tidak ada perekaman mikrofon atau unggahan ke server.'}</p>${provenanceFields('speaking', speakingForm)}<label class="quiz-choice"><input type="checkbox" name="interactive"${speakingForm.interactive ? ' checked' : ''}><span>Bukti mencakup interaksi dua arah, bukan hanya monolog</span></label><label class="field">Catatan (misalnya bantuan, konteks, dan identitas/peran penilai; maksimal 20.000 karakter)<textarea name="notes" maxlength="20000" rows="3">${esc(speakingForm.notes)}</textarea></label><p>Isi referensi bukti atau pilih file audio. File disimpan sebagai Blob di IndexedDB browser ini; JSON ekspor hanya menyimpan audioId, bukan file audionya. Unduh setiap audio secara terpisah untuk cadangan. Menghapus data browser dapat menghilangkan audio. Maksimal 5.000 bukti berbicara.</p><button class="button secondary" type="submit">Simpan bukti berbicara bertanggal</button><p data-portfolio-message role="status" aria-live="polite"></p></form></section>
    <section><h3>Riwayat snapshot menulis</h3>${writingHistory(state.learning.writing)}</section><section><h3>Riwayat bukti berbicara</h3>${speakingHistory(state.learning.speaking)}</section></section>`;
}

function message(form, ctx, text) {
  const status = form?.querySelector('[data-portfolio-message]');
  if (status) status.textContent = text;
  ctx.announce(text);
}

function capture(form) {
  const kind = form.dataset.portfolioForm;
  const values = buffer(kind, form.dataset.key, {});
  for (const field of form.elements) {
    if (!field.name || field.type === 'submit' || field.type === 'file') continue;
    values[field.name] = field.type === 'checkbox' ? field.checked : field.value;
  }
  return values;
}

function saveWritingBuffer(form, ctx) {
  const values = capture(form);
  if (values.task.length > 1000) {
    form.querySelector('[data-portfolio-save-status]').textContent = 'Tugas maksimal 1.000 karakter. Buffer belum disimpan; isian tetap tersedia.';
    return null;
  }
  if (['draft', 'feedback', 'revision'].some(name => values[name].length > 20000)) {
    form.querySelector('[data-portfolio-save-status]').textContent = 'Buffer belum disimpan: setiap kolom teks maksimal 20.000 karakter. Isian tetap ada; salin teks sebelum mengurangi panjangnya.';
    return null;
  }
  const previous = ctx.state.learning.writing[form.dataset.key];
  const writing = previous || { draft: '', feedback: '', revision: '', reviewer: 'self', submissions: [] };
  Object.assign(writing, { task: values.task, draft: values.draft, feedback: values.feedback, revision: values.revision, reviewer: values.reviewer, updatedAt: new Date().toISOString() });
  ctx.state.learning.writing[form.dataset.key] = writing;
  const saved = ctx.persist();
  form.querySelector('[data-portfolio-save-status]').textContent = saved ? 'Buffer tersimpan di browser ini; snapshot lama tidak berubah.' : 'Buffer belum tersimpan permanen. Teks tetap ada di sesi ini; salin teks atau ekspor JSON sebelum menutup halaman.';
  return writing;
}

function readScores(values) {
  return rubric.writing.map((_, index) => values[`score${index}`]).map(value => value === '' || value == null ? NaN : Number(value));
}

function validateSnapshot(values, scores) {
  if (!values.task?.trim()) return 'Tugas wajib diisi.';
  if (values.task.length > 1000) return 'Tugas maksimal 1.000 karakter. Isian dipertahankan.';
  if (['draft', 'feedback', 'revision', 'evidence', 'notes'].some(name => typeof values[name] === 'string' && values[name].length > 20000)) return 'Setiap kolom teks maksimal 20.000 karakter. Isian dipertahankan.';
  if (!levels.includes(values.level) || !Object.hasOwn(reviewers, values.reviewer)) return 'Pilih level target dan asal penilaian yang tersedia.';
  if (scores.some(score => !Number.isInteger(score) || score < 0 || score > 3)) return 'Isi keempat skor rubrik, masing-masing 0 sampai 3.';
  return '';
}

function setBusy(form, busy) {
  for (const field of form.elements) field.disabled = busy;
  form.dataset.busy = busy ? 'true' : '';
}

async function saveSnapshot(form, ctx) {
  if (form.dataset.busy === 'true') return;
  const kind = form.dataset.portfolioForm;
  const values = { ...capture(form) };
  const scores = readScores(values);
  const invalid = validateSnapshot(values, scores);
  if (invalid) { message(form, ctx, invalid); return; }
  if (kind === 'writing') {
    if (!values.draft?.trim()) { message(form, ctx, 'Draft asli wajib diisi; feedback dan revisi boleh kosong.'); return; }
    const writing = saveWritingBuffer(form, ctx);
    if (!writing) return;
    if (writing.submissions.length >= 100) { message(form, ctx, 'Batas 100 snapshot per sesi tercapai. Cadangkan JSON lalu hapus snapshot yang tidak diperlukan sebelum menyimpan lagi. Buffer tetap tersedia.'); return; }
    const record = { id: newId(), draft: values.draft, feedback: values.feedback, revision: values.revision, reviewer: values.reviewer, scores, level: values.level, task: values.task, independent: values.independent, createdAt: new Date().toISOString() };
    writing.submissions.push(record);
    if (!ctx.persist()) {
      writing.submissions.pop();
      message(form, ctx, 'Snapshot belum tersimpan karena penyimpanan browser gagal. Semua isian dipertahankan; salin teks atau coba simpan lagi.');
      return;
    }
    ctx.refresh();
    ctx.announce('Snapshot menulis tersimpan. Mengedit buffer tidak mengubah riwayat ini.');
    return;
  }
  if (ctx.state.learning.speaking.length >= 5000) { message(form, ctx, 'Batas 5.000 bukti berbicara tercapai. Cadangkan JSON dan audio, lalu hapus bukti yang tidak diperlukan sebelum menyimpan lagi. Isian dipertahankan.'); return; }
  const file = form.elements.namedItem('audio').files[0] || values.file;
  if (!values.evidence?.trim() && !file) { message(form, ctx, 'Isi referensi bukti teks atau pilih file audio.'); return; }
  if (file) {
    const supported = file.type.startsWith('audio/') && document.createElement('audio').canPlayType(file.type);
    if (!file.size || file.size > MAX_AUDIO_BYTES || !supported) {
      message(form, ctx, 'File harus audio yang didukung browser, tidak kosong, dan maksimal 15 MiB. Isian tetap dipertahankan.');
      return;
    }
  }
  setBusy(form, true);
  let audioId = null;
  try {
    if (file) {
      audioId = newId();
      await putAudio(audioId, file, file.name);
    }
    const record = { id: newId(), week: Number(form.dataset.week), day: Number(form.dataset.day), task: values.task, level: values.level, evidence: values.evidence, audioId, scores, reviewer: values.reviewer, independent: values.independent, interactive: values.interactive, notes: values.notes, createdAt: new Date().toISOString() };
    ctx.state.learning.speaking.push(record);
    if (!ctx.persist()) {
      ctx.state.learning.speaking.pop();
      let cleanup = '';
      if (audioId) {
        try { await deleteAudio(audioId); } catch { cleanup = ' Salinan audio tanpa referensi mungkin masih tersisa di browser.'; }
      }
      message(form, ctx, `Bukti belum tersimpan karena penyimpanan JSON gagal. Semua isian dan file pilihan dipertahankan; coba lagi.${cleanup}`);
      return;
    }
    formBuffers.delete(`speaking:${form.dataset.key}`);
    ctx.refresh();
    ctx.announce('Bukti berbicara tersimpan. Cadangkan audio melalui tombol unduh terpisah.');
  } catch (error) {
    message(form, ctx, `${error.message} Bukti belum disimpan; isian dan file pilihan tetap tersedia.`);
  } finally {
    setBusy(form, false);
  }
}

async function audioAction(button, ctx) {
  const record = ctx.state.learning.speaking.find(item => item.id === button.dataset.id);
  if (!record?.audioId) return;
  const generation = audioGeneration;
  button.disabled = true;
  try {
    let stored = audioUrls.get(record.audioId);
    if (!stored) {
      const audio = await readAudio(record.audioId);
      if (!audio?.blob) throw new Error('File audio tidak ditemukan di browser ini. JSON hanya memuat referensi; gunakan cadangan audio terpisah.');
      if (generation !== audioGeneration || !button.isConnected) return;
      stored = { url: URL.createObjectURL(audio.blob), name: audio.name || `audio-${record.audioId}` };
      audioUrls.set(record.audioId, stored);
    }
    if (generation !== audioGeneration || !button.isConnected) return;
    if (button.dataset.portfolioAction === 'download-audio') {
      const link = document.createElement('a');
      link.href = stored.url;
      link.download = `${record.audioId}-${stored.name}`;
      link.click();
      ctx.announce('Unduhan audio diminta. Simpan bersama JSON ekspor yang memuat audioId-nya.');
    } else {
      const slot = button.closest('[data-speaking-record]').querySelector('[data-portfolio-player]');
      let player = slot.querySelector('audio');
      if (!player) {
        player = document.createElement('audio');
        player.controls = true;
        player.preload = 'none';
        player.src = stored.url;
        player.setAttribute('aria-label', `Bukti berbicara: ${record.task}`);
        slot.replaceChildren(player);
      }
      try { await player.play(); } catch { ctx.announce('Audio belum diputar. Gunakan kontrol pemutar; jika format tidak didukung, unduh file dan buka di pemutar lain.'); }
    }
  } catch (error) {
    ctx.announce(error.message);
  } finally {
    button.disabled = false;
  }
}

async function deleteEvidence(button, ctx) {
  const { id, key, portfolioAction: action } = button.dataset;
  if (action === 'delete-writing') {
    const writing = ctx.state.learning.writing[key];
    const index = writing?.submissions.findIndex(record => record.id === id) ?? -1;
    if (index < 0 || !globalThis.confirm('Hapus snapshot menulis ini secara permanen? Buffer draft, feedback, dan revisi tetap ada.')) return;
    const [record] = writing.submissions.splice(index, 1);
    if (!ctx.persist()) {
      writing.submissions.splice(index, 0, record);
      ctx.announce('Snapshot tidak dihapus karena penyimpanan gagal.');
      return;
    }
    ctx.refresh();
    ctx.announce('Snapshot menulis dihapus; buffer tidak berubah.');
    return;
  }
  const records = ctx.state.learning.speaking;
  const index = records.findIndex(record => record.id === id);
  if (index < 0 || !globalThis.confirm('Hapus bukti berbicara ini dan file audio lokal terkait secara permanen? Cadangan yang sudah diunduh tidak ikut dihapus.')) return;
  button.disabled = true;
  const [record] = records.splice(index, 1);
  if (!ctx.persist()) {
    records.splice(index, 0, record);
    button.disabled = false;
    ctx.announce('Bukti dan audio tidak dihapus karena penyimpanan JSON gagal.');
    return;
  }
  try {
    if (record.audioId) await deleteAudio(record.audioId);
    const cached = audioUrls.get(record.audioId);
    if (cached) { URL.revokeObjectURL(cached.url); audioUrls.delete(record.audioId); }
    ctx.refresh();
    ctx.announce('Bukti berbicara dan audio lokal terkait dihapus.');
  } catch (error) {
    records.splice(index, 0, record);
    const restored = ctx.persist();
    button.disabled = false;
    ctx.announce(`${error.message} Bukti dipertahankan di sesi ini.${restored ? ' Referensi JSON telah dipulihkan.' : ' Pemulihan referensi JSON belum tersimpan; ekspor progres sebelum menutup halaman.'}`);
  }
}

export async function handlePortfolioEvent(event, ctx) {
  const target = event.target;
  const form = target.closest?.('[data-portfolio-form]');
  if (form && (event.type === 'input' || event.type === 'change')) {
    const values = capture(form);
    if (target.name === 'audio') {
      values.file = target.files[0] || null;
      form.querySelector('[data-portfolio-file-status]').textContent = values.file ? `Pilihan sesi ini: ${values.file.name}. Belum disimpan sampai bukti dikirim.` : 'Tidak ada file audio dipilih.';
    }
    if (form.dataset.portfolioForm === 'writing' && ['draft', 'feedback', 'revision', 'reviewer'].includes(target.name)) saveWritingBuffer(form, ctx);
    return true;
  }
  if (form && event.type === 'submit') {
    event.preventDefault();
    await saveSnapshot(form, ctx);
    return true;
  }
  const button = target.closest?.('[data-portfolio-action]');
  if (event.type !== 'click' || !button) return false;
  event.preventDefault();
  const action = button.dataset.portfolioAction;
  if (action === 'play-audio' || action === 'download-audio') await audioAction(button, ctx);
  else if (action === 'delete-writing' || action === 'delete-speaking') await deleteEvidence(button, ctx);
  else return false;
  return true;
}

export function disposePortfolio() {
  audioGeneration += 1;
  for (const player of document.querySelectorAll('[data-portfolio-player] audio')) { player.pause(); player.removeAttribute('src'); player.load(); }
  for (const { url } of audioUrls.values()) URL.revokeObjectURL(url);
  audioUrls.clear();
}

export async function resetPortfolioAudio() {
  await clearAudio();
  disposePortfolio();
  formBuffers.clear();
}
