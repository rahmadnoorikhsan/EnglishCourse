import { dailyCourse, dailyLesson, dailyAudioName } from './daily-course.js';
import { videos, dailyVideo } from './videos.js';
import { markdown, escapeHtml as esc } from './markdown.js';
import { routeHref } from './router.js';

const dayInstructions = [
  'Mulai dari fokus hari ini. Coba dulu sebelum melihat contoh jawaban.',
  'Ingat pola kemarin, lalu pelajari keterampilan baru pada paket hari ini.',
  'Gabungkan keterampilan sebelumnya dengan kontras atau detail baru hari ini.',
  'Terapkan pola pada situasi baru dan perbaiki kesalahan dengan alasan.',
  'Gabungkan keterampilan minggu ini dengan bantuan minimal.',
  'Paket evaluasi baru. Catat jawaban pertama sebelum melihat pembahasan. Hasil latihan ini bukan skor CEFR.',
];

function questionSet(questions, id, title) {
  return `<form class="inline-quiz" data-quiz="${id}"><h3>${title}</h3>${questions.map((q,index)=>`<fieldset><legend>${index+1}. ${esc(q.prompt)}</legend>${q.options.map((option,choice)=>`<label class="quiz-choice"><input type="radio" name="q${index}" value="${choice}" required><span>${esc(option)}</span></label>`).join('')}<p class="quiz-feedback" data-feedback="${index}" hidden></p></fieldset>`).join('')}<button class="button secondary" type="submit">Periksa & simpan hasil</button><p class="quiz-result" role="status" aria-live="polite"></p><small>Riwayat menyimpan percobaan awal dan ulang secara terpisah. Hasil latihan bukan skor CEFR.</small></form>`;
}

function passage(value) {
  return `<section class="local-passage"><h3>${esc(value.title)}</h3><p lang="en">${esc(value.text)}</p></section>`;
}

function videoMaterial(week, day) {
  const video = dailyVideo(week.number, day);
  return `<section class="video-library" aria-label="Video pelajaran hari ini"><h2>${day === 6 ? 'Video pendalaman setelah evaluasi' : 'Video pembelajaran hari ini'}</h2><p><strong>Minggu ${week.number} · Hari ${day}</strong> · Video berbeda untuk setiap hari aktif.</p>${day === 6 ? '<p>Kerjakan evaluasi terlebih dahulu. Gunakan video ini untuk refleksi dan penerapan setelah menyimpan respons awal; menonton bukan bagian dari skor evaluasi.</p>' : ''}<section class="video-item"><div class="video-slot" data-video-slot="${video.code}"><button class="video-play" type="button" data-load-video="${video.code}" aria-label="Putar video: ${esc(video.title)}"><span class="video-episode">VIDEO LESSON <span aria-hidden="true">↗</span></span><span class="video-art" aria-hidden="true"><i></i><i></i><i></i></span><span class="video-caption"><span class="play-icon" aria-hidden="true">▶</span><span><strong>${esc(video.title)}</strong><small>Putar pelajaran</small></span></span></button></div><div class="video-links"><span>Video pembelajaran</span><span><a class="action-link" href="${esc(video.source)}" target="_blank" rel="noopener noreferrer">Sumber asli</a><a class="action-link" href="https://www.youtube.com/watch?v=${esc(video.id)}" target="_blank" rel="noopener noreferrer">YouTube</a></span></div></section><section class="prose"><h3>Fokus menonton</h3><p>${esc(video.focus)}</p><p>Tonton bagian yang sesuai fokus dalam potongan 2–5 menit. Jeda dan coba contoh sendiri; tidak perlu menamatkan video panjang sekaligus. Player menghubungi YouTube/Google hanya setelah diklik.</p><h3>Praktik setelah menonton</h3><p>${esc(video.task)}</p><p>Fokus dan tugas ini dibuat EnglishCourse sebagai pendamping, bukan kuis resmi penyedia video.</p></section></section>`;
}

export function material(week, day, step) {
  const item = dailyLesson(week.number, day);
  const assess = day === 6;
  let content;
  if (step === 0) {
    content = `${assess ? '<p class="muted">Video baru hari ini tersedia pada langkah Ulangi & evaluasi, setelah kamu mengerjakan evaluasi.</p>' : videoMaterial(week, day)}<section class="supplementary-material" aria-labelledby="lesson-notes-heading"><h2 id="lesson-notes-heading">${esc(item.title)}</h2><p><strong>Target hari ini:</strong> ${esc(item.objective)}</p><div class="lesson-study-grid"><div class="prose lesson-explanation">${markdown(item.explanation)}<h3>Contoh & arti</h3><ul class="example-list">${item.examples.map(example=>`<li><span lang="en">${esc(example.en)}</span><small>${esc(example.id)}</small></li>`).join('')}</ul></div><section class="lesson-vocabulary" aria-labelledby="vocabulary-heading"><h3 id="vocabulary-heading">Kosakata</h3><dl class="vocabulary-list">${item.vocabulary.map(word=>`<div><dt lang="en">${esc(word.en)}</dt><dd>${esc(word.id)}</dd></div>`).join('')}</dl></section></div>${questionSet(item.quizzes.pattern,'pattern','Cek pemahaman')}</section>`;
  } else if (step === 1) {
    const audioPath = `${import.meta.env.BASE_URL}audio/${dailyAudioName(week.number, day)}.mp3?v=daily-v1`;
    content = `<section class="listening-material"><h2>${assess?'Evaluasi':'Latihan'} mendengar</h2><p>Dengarkan dahulu tanpa transkrip. Jawab pertanyaan, baru buka teks untuk memeriksa.</p><h3>${esc(item.listening.title)}</h3><audio controls preload="none" src="${audioPath}">Browser tidak mendukung pemutar audio.</audio><p class="muted">Suara AI neural · American English · Kokoro. Pemeran dialog ditetapkan per naskah. Semua situasi fiktif untuk latihan, bukan rekaman manusia atau tes listening terstandar.</p><details class="transcript"><summary>Buka transkrip setelah mencoba</summary><p lang="en">${esc(item.listening.text)}</p></details>${questionSet(item.quizzes.listening,'listening','Pemahaman audio')}</section><section class="reading-material"><h2>${assess?'Evaluasi':'Latihan'} membaca</h2>${passage(item.reading)}${questionSet(item.quizzes.reading,'reading','Pemahaman bacaan')}</section>`;
  } else if (step === 2) {
    content = `<section class="prose"><h2>Latihan berbicara</h2><p>${esc(item.output.speaking)}</p><p>${day===1?'Rekam respons pertama sebelum meniru contoh.':'Ubah konteks atau contoh dari latihan sebelumnya; jangan hanya membaca naskah yang sama.'}</p><p>Gunakan panel Rekam & koreksi grammar di bawah untuk merekam lewat mikrofon, mendengarkan ulang, lalu mengirim dengan persetujuan. Koreksi AI berdasarkan transkrip, bukan penilaian pronunciation.</p><h2>Latihan menulis</h2><p>${esc(item.output.writing)}</p><p>Tulis draft di bawah. Simpan versi awal sebelum mengoreksi. Gunakan nama dan data fiktif untuk simulasi; jangan masukkan informasi sensitif.</p><h3>Periksa sendiri</h3><ul><li>Apakah maksud utama dan detailnya jelas?</li><li>Apakah pola bahasa minggu ini digunakan dengan tepat?</li><li>Apakah contoh dan klaim didukung oleh teks, atau sudah ditandai sebagai pendapat/simulasi?</li></ul><p>Feedback AI sementara dan dapat keliru. Minta feedback manusia untuk mengecek pengucapan, interaksi, atau keputusan tingkat kemampuan.</p></section>`;
  } else {
    content = `<section class="prose"><h2>Ulangi & perbaiki</h2><p>${esc(item.review)}</p><ol><li>Tutup contoh. Ucapkan kembali ide utama dari tiga sampai lima kata kunci.</li><li>Bandingkan draft awal dan revisi. Pilih dua kesalahan prioritas, lalu tulis contoh baru.</li><li>Catat hasil pertama kuis, bantuan yang dipakai, serta satu hal yang perlu diulang.</li></ol>${assess?`<p>Jika paket ini pernah dilihat, jangan mencatatnya sebagai evaluasi materi baru. Audio sintetis dan kuis singkat tidak menetapkan level bahasa. Gunakan rubrik empat keterampilan untuk keputusan lanjut/ulang.</p><a class="action-link" href="${routeHref('panduan/evaluasi')}">Rubrik evaluasi</a>`:''}<h3>Hasil minggu ini</h3>${markdown(week.outcome)}</section>`;
    if (assess) content += videoMaterial(week, day);
  }
  const progression = [...dailyCourse[week.number - 1].days, dailyLesson(week.number, 6)];
  return `<section class="lesson-material"><header class="daily-focus"><h2>Hari ${day} · ${esc(item.title)}</h2><p><strong>Target:</strong> ${esc(item.objective)}</p><details><summary>Alur belajar minggu ini</summary><ol>${progression.map((entry, index) => `<li${index + 1 === day ? ' aria-current="step"' : ''}><strong>Hari ${index + 1}${index + 1 === day ? ' · sekarang' : ''}:</strong> ${esc(entry.title)}</li>`).join('')}<li>Hari 7: istirahat dan review ringan opsional</li></ol></details></header><p class="day-instruction">${dayInstructions[day - 1]}</p>${content}<div class="material-credit"><a class="action-link" href="${routeHref('panduan/sumber')}">Sumber belajar</a></div></section>`;
}


// Fixed provider and catalog IDs only; no user-supplied iframe URLs.
// https://developers.google.com/youtube/player_parameters#Manual_IFrame_Embeds
export function loadVideo(code, slot) {
  const video = videos.find(item=>item.code===code);
  if (!video || !slot) return;
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube-nocookie.com/embed/${video.id}?playsinline=1&rel=0`;
  iframe.title = video.title;
  iframe.allow = 'encrypted-media; picture-in-picture; fullscreen';
  iframe.allowFullscreen = true;
  iframe.referrerPolicy = 'strict-origin-when-cross-origin';
  slot.replaceChildren(iframe);
  iframe.focus();
}
