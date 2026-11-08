# Rencana penyusunan sistem belajar

Tujuan: panduan bahasa Indonesia untuk pemula, horizon 26 minggu, engVid sebagai bank penjelasan, dengan target profesional/akademik yang dinilai melalui kemampuan nyata.

## Urutan dan penerimaan
1. Riset target dan sumber primer. Diterima bila klaim CEFR/jam belajar memiliki sumber dan keterbatasan; URL engVid serta pelengkap dibaca. Dua lingkup riset web berjalan mandiri: bukti pembelajaran dan sumber pelengkap. Kurasi engVid dikerjakan langsung.
2. Susun sistem harian dan kurikulum 26 minggu. Bergantung pada riset. Diterima bila ada jalur intensitas, urutan prasyarat, keluaran mingguan, gate evaluasi, dan aturan ketika tertinggal.
3. Simpan panduan dan alat pelaksanaan. Bergantung pada rancangan sistem. Diterima bila README menunjuk semua dokumen, minggu pertama dapat dijalankan tanpa memilih materi sendiri, dan tracker bisa dipakai di spreadsheet.
4. Verifikasi. Periksa aritmetika waktu, cakupan 26 minggu, tautan lokal, struktur CSV, serta telusuri skenario hari pertama dan keputusan evaluasi. Ini deliverable dokumen, bukan aplikasi: tidak memerlukan build atau pengujian kode.

## Keputusan
- Default biaya rendah; tidak menganggap tersedia tutor, sertifikat, atau akses berbayar.
- Asumsi umum 3 jam fokus/hari, 6 hari/minggu; sertakan penyesuaian waktu.
- Bidang profesional/akademik belum diketahui: tugas generik dahulu, pemilihan satu bidang di pertengahan program.
- C1 bukan janji enam bulan; bedakan tujuan akhir, milestone latihan, dan asesmen eksternal.

## Risiko
- Nol adalah laporan pengguna, belum tes penempatan: baseline tidak boleh menjadi hambatan mulai.
- Jam mandiri tidak sama dengan guided learning hours.
- Label beginner/intermediate/advanced engVid bukan sertifikasi CEFR.
- Ketersediaan situs berubah; cantumkan tanggal riset dan jalur alternatif yang sudah diperiksa.

## Video harian — 8 November 2026
- Tujuan: setiap hari aktif pada 26 minggu mempunyai satu video pembelajaran berbeda (156 ID YouTube unik), selaras dengan fokus harian yang sudah ada, beserta fokus menonton dan tugas penerapan berbahasa Indonesia. Hari 7 tetap istirahat/review opsional.
- Katalog dibagi menjadi fondasi (minggu 1–8), kerja (9–17), dan akademik/audit (18–26). Setiap entri menyimpan kode tanggal, ID player asli, judul dan URL sumber resmi, fokus, serta tugas. Kurasi ketiga rentang dapat berjalan mandiri; integrasi dan pemeriksaan keunikan global dimiliki pengintegrasi.
- Ganti pemilihan video mingguan dengan lookup minggu/hari yang eksplisit tanpa fallback. Hari 1–5 menampilkan video pada langkah Pola & contoh. Hari 6 menampilkan video pendalaman pada Review setelah tugas evaluasi; bacaan/audio asesmen tidak diubah.
- Player tetap click-to-load, domain youtube-nocookie, dan menyediakan tautan sumber serta YouTube. Tidak mengunduh video atau mengubah penyimpanan progres, audio lokal, kuis, dan penilaian.
- Penerimaan: semua 156 tanggal tercakup tepat satu kali; semua ID/sumber unik dan diperiksa melalui metadata/player halaman resmi; Day 2 menampilkan video pronoun Ronnie, berbeda dari Day 1; minggu terakhir memiliki enam video; konteks dan tugas pendalaman terlihat pada hari terkait.
- Verifikasi: `npm test`, `npm run check`, `npm run check:course`, `npm run build`; smoke browser pada hari pertama/kedua, pertengahan, minggu terakhir, dan penempatan video evaluasi; klik player dan cek URL iframe serta tautan sumber. Pemeriksaan metadata bukan bukti menamatkan video atau menjamin pemutaran semua video di semua wilayah.
- Struktur dan gaya mengikuti modul ESM `src/`, `node:test` di `tests/`, dan pemeriksa konten di `scripts/check-course.mjs`. Tidak menambah dependensi, mengubah kontrak asesmen, atau mengklaim level CEFR dari video.
