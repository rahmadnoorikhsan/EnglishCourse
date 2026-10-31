# Portal belajar EnglishCourse

## Tujuan dan keputusan
Website statis berbahasa Indonesia: dashboard latihan harian, kurikulum 26 minggu, pembaca semua enam dokumen riset/panduan, progres latihan lokal. User menyetujui repository publik baru dan deploy GitHub Pages pada percakapan ini.

Stack: Vite + JavaScript modul, marked untuk Markdown dan DOMPurify untuk HTML aman. Markdown asli tetap sumber konten, bukan halaman mentah yang harus dibuka pengguna. Hash routing memastikan refresh/deep link bekerja di Pages subpath. Tidak ada backend, login, analytics, upload rekaman, atau API AI. Catatan/checklist disimpan localStorage, tidak dikirim ke GitHub. UI menjelaskan tidak ada sinkronisasi dan progres bukan sertifikasi CEFR.

## Penerimaan
- Halaman hari ini memiliki pemilih minggu/hari/durasi, empat blok latihan yang dapat dicentang, materi relevan, hasil mingguan, dan catatan tersimpan setelah reload.
- Minggu pertama menampilkan instruksi asli; minggu berikut memakai ritme harian dan tujuan minggu asli, tanpa mengarang materi/hasil.
- Semua 26 minggu dapat dijelajahi; menandai latihan minggu selesai adalah tindakan manual, bukan naik CEFR otomatis.
- Seluruh dokumen tampil sebagai HTML dengan navigasi bagian, tabel dapat digulir pada mobile, tautan dokumen internal tetap di website, CSV dapat diunduh.
- GitHub Actions menjalankan frozen install, audit, build pada PR/push; deployment hanya main/manual. Artifact dist dengan base relatif, izin minimal Pages/OIDC, environment github-pages.
- Browser nyata: checklist/catatan bertahan reload, internal links/deep links, seluruh minggu, viewport 320/768/1024/1440, tanpa error runtime. Build lokal dan run Actions diperiksa; URL publik dibuka setelah deploy.

## Urutan dan kepemilikan
1. Main: shell, dependencies, router, state, dashboard, reader, integrasi.
2. Independent content slice: src/content.js membaca Markdown, mengekspor dokumen/weeks/days/resources; tidak mengubah Markdown.
3. Independent visual slice: src/styles.css mengikuti kelas/struktur yang dikontrakkan; desain editorial cream/forest green dengan sidebar, fokus konten dan aksesibilitas.
4. Main: CI dan repository/Pages, smoke browser, review, docs dan publish.

## Command
- npm install --ignore-scripts (bootstrap), npm ci --ignore-scripts (CI)
- npm run dev -- --host 127.0.0.1
- npm run build
- npm run preview -- --host 127.0.0.1
- npm audit --audit-level=high

Risiko: data localStorage bisa hilang saat browser dibersihkan; ada ekspor JSON dan hapus melalui konfirmasi. Markdown disanitasi; catatan pengguna tidak masuk innerHTML. Tidak commit node_modules/dist, token, atau data latihan. Batas resmi: https://vite.dev/guide/static-deploy.html dan https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages .

## Hasil verifikasi
- `npm ci --ignore-scripts`, `npm run check`, `npm audit --audit-level=high`, dan `npm run build` berhasil; audit melaporkan 0 vulnerability. Build produksi dijalankan melalui Vite preview dan browser Chromium.
- Semua enam panduan terbaca sebagai HTML; tautan internal Markdown menjadi rute website. Deep link glosarium bertahan setelah reload. Checklist, catatan, durasi, dan penanda minggu bertahan setelah reload.
- Viewport 320, 768, 1024, dan 1440 px tidak menyebabkan overflow horizontal halaman hari ini. Tabel kurikulum berada dalam area gulir pada mobile. Screenshot lokal dan alamat publik diperiksa.
- Audit axe pada halaman hari ini, kurikulum, dan progres menghasilkan 0 pelanggaran setelah penamaan landmark/tabel diperbaiki. Audit bukan jaminan aksesibilitas menyeluruh.
- Deployment pertama berhasil: https://github.com/rahmadnoorikhsan/EnglishCourse/actions/runs/41135343522 . Website publik dibuka di https://rahmadnoorikhsan.github.io/EnglishCourse/ ; checklist, catatan, dan durasi bertahan setelah reload di origin publik. Tidak ada error JavaScript yang tertangkap pada skenario tersebut.
- Ekspor publik menghasilkan unduhan `englishcourse-progres.json`; isi JSON diperiksa. Konfirmasi hapus mengosongkan catatan/checklist dan mengembalikan 0/26 minggu. Data simulasi dihapus dari browser pengujian.
- Peringatan runtime Node 20 pada Actions pertama ditangani dengan rilis Actions terkini yang dipin ke commit SHA; aplikasi tetap dibangun memakai Node 22.
- Workflow dengan Actions terbaru juga berhasil build dan deploy: https://github.com/rahmadnoorikhsan/EnglishCourse/actions/runs/41138023654 . Peringatan runtime Node 20 tidak muncul pada run ini; hanya pemberitahuan migrasi image `ubuntu-latest`.
- Batas: belum menguji efektivitas belajar enam bulan, seluruh browser/perangkat, atau semua tautan sumber eksternal. Progres tetap lokal tanpa sinkronisasi atau impor JSON.

## Redesign UX kelas

Pengguna meminta UX profesional, clean, modern, dan bertahap seperti Coursera/Dicoding. Halaman modul publik Coursera dan learning path Dicoding ditinjau; classroom berbayar/login tidak diakses. Hero, slogan, ringkasan besar sebelum tugas, dan grid minggu diganti dengan navigasi ringkas, satu langkah aktif, outline, serta silabus accordion. `src/lesson.js` memiliki tampilan tugas; rute `#/hari-ini/minggu/hari/langkah` dapat dibuka ulang. Catatan dan checklist tetap memakai format localStorage v1 tanpa migrasi/destruksi data.

Verifikasi redesign pada Vite preview build produksi:
- `npm run check` dan `npm run build` berhasil.
- Smoke Node dengan data v1 lama mempertahankan minggu, hari, durasi, dua checklist, catatan, dan penanda minggu setelah load/save.
- Browser: empat tombol Selesai & lanjut menghasilkan ringkasan 4/4; reload tetap pada ringkasan; lanjut hari berikutnya membuka langkah pertama. Catatan bertahan pindah langkah dan reload. Durasi 60 menit menampilkan 15 menit per langkah.
- Hari 6 → ringkasan → hari istirahat tanpa tugas → minggu berikutnya. Minggu 26/hari 7 berakhir pada tautan progres, bukan minggu 27. Semua 26 minggu dan enam fase tersedia.
- Daftar langkah terlipat pada mobile; memilih langkah menutupnya. Halaman belajar, silabus, referensi, dan progres tidak overflow horizontal pada 320/768/1024/1440 px. Screenshot desktop/mobile diperiksa.
- Pencarian hasil kosong dan hasil cocok, deep link glosarium, penanda manual setelah reload, serta reset ke minggu 1/hari 1 diuji. Data simulasi dihapus.
- Axe menghasilkan 0 pelanggaran pada belajar, silabus, pembaca kurikulum, dan progres. Fokus keyboard pada daftar langkah terlihat; tidak ada error JavaScript tertangkap pada skenario smoke. Ini bukan audit aksesibilitas menyeluruh.

## Materi kelas terpadu

Kelas kini memakai materi asli lokal untuk seluruh 26 minggu: penjelasan Indonesia, contoh bilingual, kosakata, bacaan, MP3 sintetis, kuis berjawaban/pembahasan, serta tugas speaking/writing dan review. Hari 1–5 memakai paket latihan; hari 6 memakai bacaan/audio berbeda. Sumber eksternal tetap pengayaan, bukan prasyarat. Video engVid memakai embed resmi yang dimuat hanya setelah klik; tidak ada unduhan ulang atau penyalinan massal latihan pihak ketiga. Tulisan/rekaman dan level CEFR tidak dinilai otomatis.

Verifikasi lokal pada build produksi:
- `npm run check`, `npm test` (3 tes), `node scripts/check-course.mjs`, dan `npm run build` berhasil. Validator memeriksa 26 paket dan 52 MP3. `npm audit --audit-level=high`: 0 vulnerabilities.
- Browser menampilkan paket reading/listening di semua 26 minggu. Audio minggu 1 latihan dan minggu 26 evaluasi berhasil diputar (`readyState: 4`, waktu bergerak, durasi sekitar 27 dan 64 detik).
- Kuis pola: jawaban kosong ditolak validasi form; jawaban salah memberi koreksi/pembahasan dan 0/2; jawaban benar 2/2. Dua kuis input minggu 1, termasuk paket hari 6 berbeda, memberi 2/2 untuk kunci masing-masing. Checklist tidak menghapus hasil kuis yang masih terbuka.
- Draft bertahan setelah reload. Fixture progres v1 mempertahankan minggu 8/hari 3, 120 menit, dua checklist, catatan lama, dan penanda minggu 1–2. Empat langkah menghasilkan ringkasan 4/4; reload mempertahankan ringkasan; tombol lanjut membuka hari berikutnya. Minggu 26/hari 7 berakhir pada progres akhir.
- Tidak ada overflow horizontal pada 320/768/1024/1440 px di materi pola, input evaluasi, output, silabus, dan progres. Screenshot desktop/mobile diperiksa. Tidak ada error JavaScript aplikasi pada skenario smoke.
- Semua 52 URL MP3 pada preview merespons HTTP 200 dengan tipe audio. Axe pada halaman input/kuis terintegrasi minggu 1 menghasilkan 0 pelanggaran (42 pemeriksaan lulus); ini bukan audit aksesibilitas menyeluruh.
- Review terpisah materi/integrasi selesai. Dua temuan interaksi direproduksi lalu diperbaiki: label tombol utama kini mengikuti toggle checklist, dan fokus keyboard berpindah ke iframe setelah tombol muat video diganti. Browser mengonfirmasi label dua arah dan `activeElement: IFRAME`; check, tes, dan build setelah perbaikan berhasil.
- Sebelum klik, iframe video tidak ada. Sesudah klik, iframe YouTube resmi dimuat; E01 menampilkan “This video is unavailable” di browser verifikasi. ID cocok dengan halaman resmi engVid. Keberhasilan playback video tidak diklaim; teks, audio lokal, dan kuis tetap dapat digunakan tanpa player.

Catatan keterbatasan: paket hari 6 yang pernah dibuka bukan input baru saat pengulangan; nilai kuis tidak disimpan setelah navigasi, hanya draft/checklist/catatan. Audio dibuat dengan eSpeak NG, bukan penutur asli atau asesmen terstandar. Rollback tetap revert commit dan deploy ulang; format localStorage tidak berubah.

## Koreksi: video sumber didahulukan

Pengguna mengoreksi bahwa materi buatan asisten tidak boleh menggantikan video sumber. Langkah pertama kini bernama **Tonton video asli**: judul dan tombol player engVid tampil sebelum latihan apa pun, tanpa disclosure yang menyembunyikan video. Penjelasan dan kuis EnglishCourse dipindahkan ke bagian tambahan terlipat dengan label bukan materi/kuis resmi engVid. Langkah lain juga dilabeli sebagai latihan pendamping. Minggu tanpa video baru menampilkan pustaka review 12 video, dengan penjelasan bahwa itu bukan video baru khusus minggu tersebut. Kuis resmi tetap ditautkan ke sumber; tidak disalin atau diberi label seolah kuis lokal resmi.

Koreksi bukti pemutar: E01 berhasil diputar pada domain Pages publik; video Ronnie berdurasi 10:12, `paused: false`, waktu bergerak. Kegagalan sebelumnya pada preview localhost tidak membuktikan video sumber tidak tersedia. Preview lokal pada pemeriksaan koreksi masih menunjukkan unavailable; player publik yang dijalankan berhasil. Tidak ada klaim semua 12 video sudah ditonton atau diuji playback-nya.

Check JavaScript, 3 tes kuis, dan build berhasil. Screenshot desktop/mobile diperiksa; pada 375 px tidak overflow, video terlihat dan tambahan terlipat. Pustaka minggu 9 memuat 12 pilihan; kuis tambahan minggu 1 tetap memberi 2/2 untuk jawaban benar. Tidak ada error JavaScript aplikasi pada skenario koreksi.

## Navigasi URL bersih

Keluhan Back/direct URL ditangani dengan History API, bukan mengganti kosmetik tombol. Perpindahan langkah/halaman memakai pushState, popstate memulihkan tampilan, dan checklist tidak membuat entri riwayat. Semua tautan internal dipindahkan dari hash ke `/belajar/{minggu}/{hari}/{video|input|output|review|ringkasan}/`, `/silabus/`, `/referensi/`, dan `/progres/`. Anchor panduan memakai hash biasa hanya untuk bagian dokumen. Format progres v1 tetap sama.

GitHub Pages tidak menyediakan SPA rewrite. Build karena itu menghasilkan 1.128 direktori rute dengan index HTML nyata, ditambah root; bukan 404 redirect atau query-string workaround. Base produksi `/EnglishCourse/`, dev `/`. Semua aset memakai base produksi sehingga direct deep link tidak mencari JS/audio/favicon pada direktori langkah.

Verifikasi produksi lokal pada port 4174: 1.129 URL HTML hasil build merespons HTTP 200. Tujuh tes (kuis dan routing) lulus; build berhasil. Browser: complete → Back → Forward → reload mempertahankan langkah yang tepat; silabus → Back kembali ke input; perpindahan minggu bisa dibalik/diulang; checklist tidak menambah history. Direct minggu 26/hari 6/output mempertahankan draft setelah ke Progres, Back, dan reload. Anchor panduan bertahan reload dan Back kembali ke dokumen. Hari istirahat akhir tetap menuju progres akhir. Mobile 375 px tidak overflow; tidak ada error JavaScript aplikasi; axe halaman referensi 0 pelanggaran (34 pemeriksaan lulus).
