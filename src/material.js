import { course } from './course.js';
import { videos } from './videos.js';
import { markdown, escapeHtml as esc } from './markdown.js';
import { routeHref } from './router.js';

const dayInstructions = [
  'Pelajari penjelasan dan contoh. Simpan percobaan awal sebelum membuka bantuan.',
  'Ingat kembali contoh kemarin, lalu ganti nama, waktu, atau situasinya.',
  'Gunakan pola yang sama untuk contoh berbeda. Tutup teks sebelum menceritakan ulang.',
  'Periksa dua kesalahan yang sering muncul, lalu revisi jawabanmu.',
  'Kerjakan tugas mingguan dengan bantuan minimal. Jangan membuka paket evaluasi hari 6.',
  'Paket evaluasi baru. Catat jawaban pertama sebelum melihat pembahasan. Hasil latihan ini bukan skor CEFR.',
];

function questionSet(questions, id, title) {
  return `<form class="inline-quiz" data-quiz="${id}"><h3>${title}</h3>${questions.map((q,index)=>`<fieldset><legend>${index+1}. ${esc(q.prompt)}</legend>${q.options.map((option,choice)=>`<label class="quiz-choice"><input type="radio" name="q${index}" value="${choice}" required><span>${esc(option)}</span></label>`).join('')}<p class="quiz-feedback" data-feedback="${index}" hidden></p></fieldset>`).join('')}<button class="button secondary" type="submit">Periksa jawaban</button><p class="quiz-result" role="status" aria-live="polite"></p><small>Nilai sesi ini tidak disimpan setelah pindah langkah. Catat hasil pertama di catatan harian.</small></form>`;
}

function passage(value) {
  return `<section class="local-passage"><h3>${esc(value.title)}</h3><p lang="en">${esc(value.text)}</p></section>`;
}

function videoMaterial(week) {
  const codes = [...new Set(week.materials.match(/\bE\d{2}\b/g) || [])];
  const available = codes.map(code=>videos.find(item=>item.code===code)).filter(Boolean);
  const selected = available.length ? available : videos;
  return `<section class="video-library" aria-label="Video pelajaran">${available.length ? '' : '<p class="muted">Minggu ini: ulangi video yang ingin kamu kuasai.</p><details><summary>Pilih video review</summary>'}${selected.map(video=>`<section class="video-item"><div class="video-slot" data-video-slot="${video.code}"><button class="video-play" type="button" data-load-video="${video.code}" aria-label="Putar video: ${esc(video.title)}"><span class="video-episode">VIDEO LESSON <span aria-hidden="true">↗</span></span><span class="video-art" aria-hidden="true"><i></i><i></i><i></i></span><span class="video-caption"><span class="play-icon" aria-hidden="true">▶</span><span><strong>${esc(video.title)}</strong><small>Putar pelajaran</small></span></span></button></div><div class="video-links"><span>Video pembelajaran</span><span><a class="action-link" href="${esc(video.source)}" target="_blank" rel="noopener noreferrer">Sumber & kuis</a><a class="action-link" href="https://www.youtube.com/watch?v=${video.id}" target="_blank" rel="noopener noreferrer">YouTube</a></span></div></section>`).join('')}${available.length ? '' : '</details>'}</section>`;
}

export function material(week, day, step) {
  const item = course[week.number - 1];
  const assess = day === 6;
  let content;
  if (step === 0) {
    content = `${assess ? '<p>Ingat kembali isi video sebelum menontonnya ulang.</p>' : ''}${videoMaterial(week)}<details class="supplementary-material"><summary>Catatan pelajaran & latihan</summary><div class="prose">${markdown(item.explanation)}<h2>Contoh & arti</h2><ul class="example-list">${item.examples.map(example=>`<li><span lang="en">${esc(example.en)}</span><small>${esc(example.id)}</small></li>`).join('')}</ul><details><summary>Kosakata</summary><dl class="vocabulary-list">${item.vocabulary.map(word=>`<div><dt lang="en">${esc(word.en)}</dt><dd>${esc(word.id)}</dd></div>`).join('')}</dl></details></div>${questionSet(item.quizzes.pattern,'pattern','Cek pemahaman')}</details>`;
  } else if (step === 1) {
    const pack = assess ? item.assessment : item;
    const audioPath = `${import.meta.env.BASE_URL}audio/w${String(week.number).padStart(2,'0')}-${assess?'assessment':'practice'}.mp3`;
    content = `<section class="listening-material"><h2>${assess?'Evaluasi':'Latihan'} mendengar</h2><p>Dengarkan dahulu tanpa transkrip. Jawab pertanyaan, baru buka teks untuk memeriksa.</p><h3>${esc(pack.listening.title)}</h3><audio controls preload="none" src="${audioPath}">Browser tidak mendukung pemutar audio.</audio><p class="muted">Audio sintetis bahasa Inggris, dibuat untuk latihan. Bukan suara penutur asli atau tes listening terstandar.</p><details class="transcript"><summary>Buka transkrip setelah mencoba</summary><p lang="en">${esc(pack.listening.text)}</p></details>${questionSet(assess?pack.listeningQuiz:item.quizzes.listening,'listening','Pemahaman audio')}</section><section class="reading-material"><h2>${assess?'Evaluasi':'Latihan'} membaca</h2>${passage(pack.reading)}${questionSet(assess?pack.readingQuiz:item.quizzes.reading,'reading','Pemahaman bacaan')}</section>`;
  } else if (step === 2) {
    content = `<section class="prose"><h2>Latihan berbicara</h2><p>${esc(item.output.speaking)}</p><p>${day===1?'Rekam respons pertama sebelum meniru contoh.':'Ubah konteks atau contoh dari latihan sebelumnya; jangan hanya membaca naskah yang sama.'}</p><h2>Latihan menulis</h2><p>${esc(item.output.writing)}</p><p>Tulis draft di bawah. Simpan versi awal sebelum mengoreksi. Gunakan nama dan data fiktif untuk simulasi; jangan masukkan informasi sensitif.</p><h3>Periksa sendiri</h3><ul><li>Apakah maksud utama dan detailnya jelas?</li><li>Apakah pola bahasa minggu ini digunakan dengan tepat?</li><li>Apakah contoh dan klaim didukung oleh teks, atau sudah ditandai sebagai pendapat/simulasi?</li></ul><p>Jawaban terbuka tidak dinilai otomatis. Minta feedback manusia bila tersedia. Rekaman dikelola sendiri dengan alat rekam perangkat; website tidak mengunggah rekaman.</p></section>`;
  } else {
    content = `<section class="prose"><h2>Ulangi & perbaiki</h2><p>${esc(item.review)}</p><ol><li>Tutup contoh. Ucapkan kembali ide utama dari tiga sampai lima kata kunci.</li><li>Bandingkan draft awal dan revisi. Pilih dua kesalahan prioritas, lalu tulis contoh baru.</li><li>Catat hasil pertama kuis, bantuan yang dipakai, serta satu hal yang perlu diulang.</li></ol>${assess?`<p>Jika paket ini pernah dilihat, jangan mencatatnya sebagai evaluasi materi baru. Audio sintetis dan kuis singkat tidak menetapkan level bahasa. Gunakan rubrik empat keterampilan untuk keputusan lanjut/ulang.</p><a class="action-link" href="${routeHref('panduan/evaluasi')}">Rubrik evaluasi</a>`:''}<h3>Hasil minggu ini</h3>${markdown(week.outcome)}</section>`;
  }
  return `<section class="lesson-material">${step === 0 ? '' : `<p class="day-instruction">${dayInstructions[day-1]}</p>`}${content}<div class="material-credit"><a class="action-link" href="${routeHref('panduan/sumber')}">Sumber belajar</a></div></section>`;
}


// Fixed provider and catalog IDs only; no user-supplied iframe URLs.
// https://developers.google.com/youtube/player_parameters#Manual_IFrame_Embeds
export function loadVideo(code, slot) {
  const video = videos.find(item=>item.code===code);
  if (!video || !slot) return;
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube-nocookie.com/embed/${video.id}?playsinline=1&rel=0`;
  iframe.title = `${video.title} — engVid`;
  iframe.allow = 'encrypted-media; picture-in-picture; fullscreen';
  iframe.allowFullscreen = true;
  iframe.referrerPolicy = 'strict-origin-when-cross-origin';
  slot.replaceChildren(iframe);
  iframe.focus();
}
