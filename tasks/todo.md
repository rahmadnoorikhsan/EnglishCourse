# Checklist pengerjaan

- [x] Bukti kelayakan target dan metode diteliti; keterbatasan dicatat.
- [x] engVid dan sumber pelengkap dikurasi dari halaman yang diperiksa.
- [x] Sistem harian, kurikulum 26 minggu, milestone, serta aturan adaptasi selesai.
- [x] Panduan, daftar sumber, dan template pelaksanaan tersimpan.
- [x] Cakupan minggu, aritmetika, tautan lokal, CSV, dan skenario penggunaan diperiksa.

Checklist ini untuk pengerjaan dokumen, bukan daftar tugas belajar harian.

## Bukti pemeriksaan — 31 Oktober 2026
- Pemeriksaan Python in-memory: 21 tautan lokal, tidak ada target hilang; anchor README menuju minggu pertama ditemukan.
- Tabel kurikulum fase memuat minggu 1–26 tepat satu kali. Pemeriksa awal sempat turut menghitung tabel hari 1–7; batas parser diperbaiki ke bagian fase, bukan mengubah kurikulum.
- CSV harian: 12 kolom dan satu baris input kosong. CSV mingguan: 21 kolom, 26 baris rencana, semua kolom hasil masih kosong.
- Aritmetika diverifikasi: 4 × 45 = 180 menit; 156/312/468/624 jam untuk 1/2/3/4 jam × 6 hari × 26 minggu; 26 minggu = 182 hari; contoh hari tes 1/91/181 berjarak 90 hari.
- Simulasi pemakaian tracker harian: tulis/baca CSV di memori berhasil; empat blok menjumlah 180 menit. Tidak menyimpan hasil simulasi sebagai hasil pengguna.
- Walkthrough dokumen: hari 1 memiliki materi langsung dan fallback; L1a/R1b dicadangkan sebagai materi baru hari 6; hasil self-check dibedakan dari verifikasi manusia; tes mengikuti tanggal aktual dan batas 90 hari.
- Halaman sumber penentu dibaca: Cambridge jam kumulatif, Council of Europe global scale, EF SET FAQ; kurasi pelajaran engVid dan unit awal VOA/British Council. Riset metode/sumber lain juga ditelaah melalui dua agen riset; batas akses dicatat dalam panduan.
- Batas verifikasi: tidak menamatkan semua video, menjalankan kuis interaktif, memutar semua audio, membuka CSV dalam GUI spreadsheet, membuat akun, atau menjalani tes sertifikasi. Tidak mengklaim efektivitas enam bulan telah diuji pada pengguna.

## Perbaikan layout kelas — 31 Oktober 2026

- [x] Timer memakai grid rata kiri, bukan flex dengan ruang kosong di antara judul dan kontrol; tombol tetap berdampingan di mobile saat cukup ruang.
- [x] Hierarki judul kelas dipadatkan; kartu video pembuka dibatasi tinggi 260–320 px dan lebar 960 px. Tautan video mengikuti lebar kartu; iframe tetap 16:9.
- [x] Browser desktop diperiksa pada ukuran screenshot pengguna 1905×978; breakpoint 320, 390, 768, 1024, 1280, dan 1568 px tidak overflow horizontal dan seluruh kontrol timer berada di dalam panel.
- [x] Timer mulai → 00:02 → jeda menyimpan dua detik; form manual terbuka dan iframe video termuat. Halaman input/output/review/progres diperiksa pada 390 dan 1024 px tanpa overflow; tidak ada error JavaScript aplikasi yang tertangkap.
- [x] Build produksi berhasil; peringatan bundle JS >500 kB tetap ada. Perubahan hanya CSS, tidak mengubah penyimpanan progres, penilaian, atau backend.

## Penggantian suara latihan — 31 Oktober 2026

- [x] Seluruh 52 MP3 diganti dari eSpeak NG ke Kokoro v1.0, suara American English `af_heart`; naskah, soal, dan tugas tidak diubah. Kecepatan 0,85× minggu 1–4, 0,93× minggu 5–13, dan 1× minggu 14–26.
- [x] Hash 52 file berubah; seluruh MP3 lolos dekode penuh ffmpeg tanpa error, mono 24 kHz, durasi 19,94–59,77 detik. SHA256 model dan voices cocok dengan rilis resmi. Uji model tidak ditemukan gagal dengan jelas dan mempertahankan hash seluruh 52 audio lama.
- [x] Browser halaman input minggu 1 memutar MP3 baru: durasi 21,43 detik, waktu melewati satu detik, `paused: false`, transkrip tetap tertutup. Label menjelaskan suara AI neural, bukan rekaman manusia atau asesmen terstandar. URL versi baru mencegah pemakaian cache audio lama.
- [x] `npm run check`, 50 tes, validator 26 paket/52 audio, dan build produksi lulus; audit npm menemukan 0 vulnerabilities. Peringatan bundle JS >500 kB tetap ada. Pemeriksaan dekode/playback bukan penilaian manusia atas naturalness atau ketepatan setiap pelafalan.
