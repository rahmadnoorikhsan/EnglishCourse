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
