import { weeks, days, resources } from './content.js';
import { markdown, escapeHtml as esc } from './markdown.js';
import { checkedBlocks, checkKey } from './state.js';

const names = ['Pahami polanya', 'Dengar & baca', 'Bicara & tulis', 'Ulangi & evaluasi'];
const types = ['Penjelasan & latihan', 'Listening & reading', 'Speaking & writing', 'Review & catatan'];

function dailyBlocks(week, day) {
  if (week.number === 1) return days.find(item => item.number === day).blocks;
  const rhythms = [
    ['Review frasa lama. Ambil satu bagian penjelasan yang diperlukan minggu ini, lalu buat lima contoh pribadi.', 'Pilih satu unit listening dan reading yang dekat dengan tema minggu ini. Cadangkan pasangan lain untuk evaluasi; jangan buka transkripnya.', 'Buat rekaman dan draft awal untuk tugas minggu ini. Mulai dari yang bisa kamu katakan, tanpa naskah lengkap.', 'Tirukan audio yang sudah dipahami, ceritakan ulang dari kata kunci, lalu baca ulang teks yang familier.'],
    ['Ingat kembali pola kemarin tanpa catatan, lalu periksa. Tambah maksimal lima frasa jika review tidak menumpuk.', 'Dengar dulu tanpa teks; cek transkrip setelahnya. Baca untuk inti, lalu detail. Jangan menghitung aktivitas yang sama dua kali.', 'Latih tanya-jawab dengan partner. Minta maksimal dua koreksi penting, lalu gunakan pada contoh baru.', 'Ulang pola benar pada situasi berbeda. Kejelasan pesan lebih penting daripada cepat.'],
    ['Latih bentuk yang paling mengganggu pesan. Tidak perlu video baru bila pola lama belum bisa digunakan.', 'Ulang bagian sulit, lalu gunakan satu teks/audio mudah lain dengan tema sejenis.', 'Ganti orang, waktu, atau situasi dari tugas sebelumnya. Bicara dari lima kata kunci; lanjutkan draft tulisan.', 'Ceritakan kembali input yang telah dipahami. Ucapkan jawaban sebelum membuka kartu.'],
    ['Tes ingatan dengan contoh baru tanpa catatan. Periksa dua kesalahan berulang dari error log.', 'Dengar lagi dengan teks tertutup. Bandingkan ringkasanmu dengan sumber sesudah selesai.', 'Minta feedback atas rekaman dan draft. Revisi dua masalah penting, lalu produksi contoh baru.', 'Rekam ulang tanpa membaca naskah. Perhatikan apakah maksud dan detail lebih mudah dipahami.'],
    ['Review frasa/pola minggu ini. Hindari menambahkan materi sebelum evaluasi.', 'Gunakan input familier untuk mempersiapkan tugas terpadu. Jangan membuka unit yang dicadangkan.', 'Kerjakan hasil mingguan dan percakapan dengan pertanyaan lanjutan. Simpan versi mandiri sebelum koreksi.', 'Latih kembali bagian yang menghambat komunikasi, dengan contoh berbeda.'],
    ['Tidak ada aturan baru. Cek frasa lama dan dua kesalahan prioritas.', 'Kerjakan listening dan reading baru tanpa teks/kamus, sesuai protokol evaluasi. Catat benar/total sebelum membuka bantuan.', 'Rekam respons spontan dan tulis draft baru. Minta penilai memberi feedback menggunakan rubrik, bukan label fluency.', 'Tinjau bukti, isi review mingguan, dan tentukan lanjut atau ulang. Kalender tidak menentukan level.'],
  ];
  return rhythms[day - 1];
}

function resourceLinks(week, day, step) {
  let codes;
  if (week.number === 1) {
    if (day === 6) codes = step === 1 ? ['L1a', 'R1b'] : [];
    else if (step === 0) codes = ['E01'];
    else if (step === 1) codes = day === 3 || day === 4 ? ['S1', 'R1a'] : ['V1', 'R1a'];
    else codes = [];
  } else {
    const candidates = [...new Set(week.materials.match(/\b(?:E\d{2}|L[1-4]|R[1-4]|G1|B1E)\b/g) || [])];
    codes = candidates.filter(code => step === 0 ? /^(E|G)/.test(code) : step === 1 ? /^(L|R|B)/.test(code) : false);
    if (step === 1 && !codes.length) codes = week.number >= 19 ? ['R3', 'L3'] : ['L2', 'R2'];
  }
  const links = codes.map(code => resources.find(item => item.code === code)).filter(Boolean);
  if (!links.length) return '';
  return `<section class="lesson-resources"><h2>Materi langkah ini</h2><div class="resource-list">${links.map(item => `<a class="resource-link" href="${esc(item.url)}" target="_blank" rel="noopener noreferrer"><span class="resource-title">${esc(item.title)}</span><span class="external-arrow" aria-hidden="true">↗</span><span class="sr-only"> (tab baru)</span></a>`).join('')}</div><p class="muted">Buka materi, lalu kembali ke sini untuk melanjutkan.${week.number === 1 && day < 6 ? ' L1a dan R1b disimpan untuk evaluasi hari 6.' : ' Pilih tingkat sesuai kesiapan; simpan materi baru untuk evaluasi.'}</p></section>`;
}

export function lesson(state, step, outlineOpen) {
  const week = weeks[state.week - 1];
  const rest = state.day === 7;
  const summary = step === 4 && !rest;
  const count = checkedBlocks(state);
  const title = rest ? 'Hari istirahat' : summary ? 'Ringkasan latihan hari ini' : names[step];
  const done = !rest && !summary && Boolean(state.checks[checkKey(state.week, state.day, step)]);
  const notes = `<details class="lesson-notes"><summary>Catatan hari ini</summary><label class="sr-only" for="session-note">Catatan hari ini</label><textarea id="session-note" rows="4" maxlength="5000" placeholder="Tulis frasa baru, kesalahan, atau hal yang perlu diulang."></textarea><small id="note-state">Disimpan di browser ini, tidak disinkronkan.</small></details>`;
  const advance = state.day < 7 ? `<button class="button primary" data-action="next-day">${state.day === 6 ? 'Ke hari istirahat' : 'Lanjut ke hari ' + (state.day + 1)} →</button>` : state.week < 26 ? `<a class="button primary" href="#/hari-ini/${state.week + 1}/1">Mulai minggu ${state.week + 1} →</a>` : '<a class="button primary" href="#/progres">Lihat progres akhir →</a>';
  let body;
  if (rest) body = `<div class="lesson-instruction prose"><p>Tidak ada latihan wajib hari ini. Gunakan waktu untuk beristirahat.</p><p>Sebelum pindah minggu, cek kembali hasil latihan dan evaluasi. Ulangi minggu ini jika masih diperlukan.</p></div><div class="lesson-actions"><button class="button secondary" data-day="6">Kembali ke hari 6</button>${advance}</div>`;
  else if (summary) body = `<div class="lesson-instruction prose"><p><strong>${count} dari 4 langkah</strong> sudah ditandai selesai. Ini catatan aktivitas, bukan nilai kemampuan bahasa.</p><p>${state.day === 6 ? 'Tinjau bukti listening, reading, rekaman, dan tulisan sebelum memutuskan lanjut atau ulang.' : 'Kamu bisa berhenti di sini dan melanjutkan hari berikutnya saat siap.'}</p><a href="#/panduan/evaluasi">Buka panduan evaluasi</a></div>${notes}<div class="lesson-actions"><button class="button secondary" data-step="0">Tinjau latihan</button>${advance}</div>`;
  else body = `<section class="lesson-instruction prose" aria-label="Instruksi latihan">${markdown(dailyBlocks(week, state.day)[step])}</section>${resourceLinks(week, state.day, step)}${state.week === 1 && step === 0 ? '<p class="lesson-help"><a href="#/panduan/kurikulum/glosarium-awal">Butuh contoh? Buka glosarium & contoh perkenalan →</a></p>' : ''}${notes}<label class="task-check"><input type="checkbox" data-block="${step}" ${done ? 'checked' : ''}> Tandai langkah ini selesai</label><div class="lesson-actions"><button class="button secondary" data-action="previous-step" ${step === 0 ? 'disabled' : ''}>← Sebelumnya</button><button class="button primary" data-action="complete-step">${done ? 'Lanjut' : 'Selesai & lanjut'} →</button></div>`;
  return `<div class="classroom"><details class="lesson-outline" ${outlineOpen ? 'open' : ''}><summary>Daftar langkah</summary><div class="outline-context"><label for="week-select">Minggu latihan</label><select id="week-select">${weeks.map(item => `<option value="${item.number}" ${item.number === state.week ? 'selected' : ''}>${item.number}. ${esc(item.title)}</option>`).join('')}</select><label for="day-select">Hari latihan</label><select id="day-select">${Array.from({length:7},(_,i)=>`<option value="${i+1}" ${state.day===i+1?'selected':''}>${i===6?'Hari 7 · Istirahat':'Hari '+(i+1)}</option>`).join('')}</select><small>${rest ? 'Hari tanpa tugas wajib' : count + ' dari 4 langkah selesai'}</small>${rest ? '' : `<progress value="${count}" max="4" aria-label="Langkah hari ini selesai"></progress>`}</div>${rest ? '' : `<nav class="step-list" aria-label="Langkah latihan">${names.map((name,index)=>`<button class="step-item" data-step="${index}" ${step===index?'aria-current="step"':''}><span class="step-indicator" aria-hidden="true">${state.checks[checkKey(state.week,state.day,index)]?'✓':index+1}</span><span class="step-label">${name}<small>${state.checks[checkKey(state.week,state.day,index)]?'Selesai · ':''}${state.minutes/4} menit</small></span></button>`).join('')}<button class="step-item" data-step="4" ${summary?'aria-current="step"':''}><span class="step-indicator" aria-hidden="true">≡</span><span class="step-label">Ringkasan harian</span></button></nav>`}<a class="outline-syllabus" href="#/kurikulum">Lihat seluruh silabus →</a></details><article class="lesson-content"><div class="lesson-context">Minggu ${state.week} <span aria-hidden="true">/</span> Hari ${state.day}</div><header class="lesson-header"><p class="lesson-kicker">${esc(week.title)}</p><h1>${title}</h1><p class="lesson-meta">${rest ? 'Istirahat' : summary ? 'Review harian' : `Langkah ${step+1} dari 4 · ${types[step]} · ${state.minutes/4} menit`}</p></header>${body}<details class="lesson-summary"><summary>Target & materi minggu ini</summary><div class="prose"><h2>Fokus</h2>${markdown(week.focus)}<h2>Petunjuk materi</h2>${markdown(week.materials)}<h2>Hasil latihan</h2>${markdown(week.outcome)}</div></details><details class="lesson-settings"><summary>Pengaturan waktu</summary><label for="minutes-select">Rencana waktu per hari</label><select id="minutes-select">${[60,120,180,240].map(n=>`<option value="${n}" ${state.minutes===n?'selected':''}>${n} menit · ${n/4} menit per langkah</option>`).join('')}</select><p class="muted">Durasi rencana, bukan pencatat waktu otomatis.</p></details></article></div>`;
}
