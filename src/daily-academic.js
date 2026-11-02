const pair = (en, id) => ({ en, id });
const question = (prompt, options, answer, explanation) => ({ prompt, options, answer, explanation });
const day = (content) => ({ ...content, cast: { Tutor: 'af_heart', Learner: 'am_michael' } });

export const dailyAcademic = [
  {
    week: 19,
    days: [
      day({
        title: 'D1 — Menemukan masalah dan gagasan utama',
        objective: 'Mengidentifikasi masalah, usulan, dan detail pendukung tanpa memasukkan pendapat sendiri.',
        explanation: `Ringkasan dimulai dengan memilih, bukan memendekkan setiap kalimat. Tanyakan dua hal: masalah apa yang dibahas dan apa yang disarankan penulis? Detail tempat atau contoh dapat membantu memahami masalah, tetapi belum tentu menjadi gagasan utama. Gunakan pola **The note describes…** untuk topik dan **The writer suggests…** untuk usulan.

Baca sampai selesai sebelum memilih inti. Pada latihan ini, tandai satu masalah dan satu tindakan yang diusulkan. Jangan mengubah rencana menjadi kejadian yang sudah berlangsung. Semua bacaan adalah sumber fiktif asli untuk latihan; ringkasan tidak boleh menjadikannya laporan penelitian nyata.`,
        examples: [pair('The note describes a crowded entrance.', 'Catatan itu membahas pintu masuk yang sesak.'), pair('The writer suggests moving the information table.', 'Penulis menyarankan memindahkan meja informasi.')],
        vocabulary: [pair('main idea', 'gagasan utama'), pair('proposal', 'usulan'), pair('supporting detail', 'detail pendukung')],
        reading: { title: 'A Clear Entrance — Rena (original fictional note)', text: `Rena writes this fictional note for a neighbourhood craft fair. Visitors often stop at the entrance to ask where activities are happening. People behind them then have little space to enter. Rena suggests moving the information table beside the inside wall, where visitors could ask questions without standing in the doorway. A large arrow at the entrance would point towards the table. The note mentions blue tablecloths because the club already owns them, but their colour is not the reason for the change. Rena asks the organisers to discuss the arrangement before the next fair. Nothing has been moved yet.` },
        listening: { title: 'Discussing the central proposal', text: `Tutor: What is your fictional club note about?
Learner: It describes a music room where instrument cases cover the chairs. The writer mentions six red chairs.
Tutor: Is the number of chairs the main point?
Learner: No. Players cannot sit down because the cases are in the way.
Tutor: And what does the writer propose?
Learner: Putting a low storage rack beside the door. Players could leave cases there before finding a seat.
Tutor: Has the club bought the rack?
Learner: Not yet. The writer asks the committee to consider it. My summary should describe a proposal, not a completed purchase.` },
        quizzes: {
          pattern: [question('Mana yang menyatakan usulan, bukan hasil?', ['The table has already moved.', 'The writer suggests moving the table.', 'The table solved every problem.'], 1, 'Suggests menyatakan saran; dua pilihan lain menyatakan hasil yang sudah terjadi.'), question('Apa yang dipilih pertama untuk ringkasan?', ['Semua kata sifat.', 'Warna setiap benda.', 'Masalah dan usulan utama.'], 2, 'Masalah dan usulan menjaga arah teks, sedangkan detail dipilih berdasarkan relevansinya.')],
          reading: [question('Apa masalah yang mendorong usulan Rena?', ['Pengunjung berhenti bertanya di pintu dan menghalangi jalan masuk.', 'Klub tidak memiliki taplak.', 'Semua aktivitas telah dibatalkan.'], 0, 'Pertanyaan pengunjung di pintu menyisakan sedikit ruang bagi orang di belakang.'), question('Detail mana yang bukan alasan pemindahan meja?', ['Ruang pintu sempit saat orang berhenti.', 'Warna biru taplak.', 'Orang perlu tempat bertanya.'], 1, 'Biru disebut karena taplak sudah dimiliki, bukan sebagai alasan perubahan.')],
          listening: [question('Apa usulan catatan ruang musik?', ['Membeli enam kursi merah.', 'Menutup ruang musik.', 'Menyediakan rak rendah untuk kotak alat musik.'], 2, 'Kotak akan diletakkan di rak agar kursi dapat dipakai.'), question('Bagaimana status pembelian rak?', ['Belum dibeli; komite diminta mempertimbangkannya.', 'Sudah dipasang kemarin.', 'Sudah ditolak semua pemain.'], 0, 'Learner menjelaskan not yet dan permintaan kepada komite.')]
        },
        output: { speaking: 'Jelaskan inti catatan Rena dalam 45–60 detik: topik, masalah, dan usulan. Jangan menyebut pendapat pribadi atau menyatakan meja sudah dipindah.', writing: 'Tulis 45–60 kata tentang “A Clear Entrance”. Pertahankan masalah dan usulan; di bawahnya sebut satu detail yang Anda tinggalkan beserta alasan dalam bahasa Indonesia.' },
        review: 'Cocokkan kata kerja dalam ringkasan dengan sumber: apakah saran masih berupa saran? Lingkari detail yang tidak diperlukan untuk memahami inti.'
      }),
      day({
        title: 'D2 — Menandai asal gagasan',
        objective: 'Menulis ringkasan singkat dengan judul dan penulis fiktif yang dapat ditelusuri.',
        explanation: `Pembaca ringkasan perlu mengetahui siapa yang memiliki gagasan. Awali dengan **In “judul,” penulis suggests…** atau **According to penulis,…**. Judul dan nama cukup untuk sumber lokal latihan ini; jangan menambahkan tahun, penerbit, atau tautan yang tidak diberikan. Setelah sumber jelas, **the note** dapat merujuk pada teks yang sama.

Atribusi tidak membuat suatu klaim otomatis benar. Ia hanya menjelaskan asalnya. Bedakan penulis catatan dari orang yang disebut sebagai contoh. Jika penulis membahas seorang relawan, jangan menjadikan relawan itu penulis. Periksa identitas sumber sebelum memperbaiki kosakata ringkasan.`,
        examples: [pair('In “An Earlier Notice,” Sari proposes a weekly update.', 'Dalam “An Earlier Notice”, Sari mengusulkan pembaruan mingguan.'), pair('According to Sari, the notice would help members plan.', 'Menurut Sari, pengumuman itu akan membantu anggota merencanakan kegiatan.')],
        vocabulary: [pair('attribution', 'penyebutan asal gagasan'), pair('author', 'penulis'), pair('according to', 'menurut')],
        reading: { title: 'An Earlier Notice — Sari (original fictional letter)', text: `In this fictional letter, Sari proposes posting the sewing club's supply list three days before each meeting. At present, members discover what they need only when they arrive. The letter describes Tono, a new member who brought cloth but no thread to an imagined session. His story illustrates the problem; he is not the author of the letter. Sari suggests placing the list on the club's message board and keeping a paper copy at the entrance. She has not checked whether every member uses the board. She asks the coordinator to discuss another contact method for members who cannot visit before a meeting.` },
        listening: { title: 'Identifying the author in a discussion', text: `Tutor: Whose idea are you summarising?
Learner: In “A Place for Wet Coats,” fictional writer Damar suggests a covered rail outside the classroom.
Tutor: Your first draft called it Lina's proposal. Why?
Learner: Lina is the visitor in Damar's example. She carries a wet coat into class, but she did not write the note.
Tutor: What does Damar actually propose?
Learner: A covered rail with numbered hooks. He also asks whether visitors would feel comfortable leaving coats outside.
Tutor: Does naming Damar prove the rail is effective?
Learner: No. It identifies the source. The note has no trial results, and my summary must keep that distinction.` },
        quizzes: {
          pattern: [question('Atribusi yang tidak menciptakan informasi adalah…', ['Sari proved this in a famous journal in 2020.', 'In “An Earlier Notice,” Sari proposes an earlier list.', 'A real university confirmed Sari’s findings.'], 1, 'Hanya judul, nama, dan usulan yang tersedia; penerbit atau penelitian tidak diberikan.'), question('Untuk apa “According to Sari” digunakan?', ['Menandai asal gagasan.', 'Menjamin semua gagasan benar.', 'Menandai pendapat pembaca sendiri.'], 0, 'According to mengatribusikan gagasan kepada sumber, bukan memberi jaminan kebenaran.')],
          reading: [question('Siapa penulis surat?', ['Tono.', 'Koordinator tanpa nama.', 'Sari.'], 2, 'Judul dan kalimat pembuka mengidentifikasi Sari sebagai penulis.'), question('Apa yang belum diperiksa Sari?', ['Apakah klub membutuhkan benang dalam contoh.', 'Apakah setiap anggota menggunakan papan pesan.', 'Apakah daftar boleh memuat bahan.'], 1, 'Teks menyatakan she has not checked whether every member uses the board.')],
          listening: [question('Apa peran Lina dalam sumber?', ['Pengunjung dalam contoh Damar.', 'Penulis penelitian tentang mantel.', 'Koordinator yang menyetujui rel.'], 0, 'Lina hanyalah pengunjung dalam contoh; Damar menulis catatan.'), question('Apa pertanyaan yang masih diajukan Damar?', ['Apakah kelas harus ditutup.', 'Apakah semua mantel sudah hilang.', 'Apakah pengunjung nyaman meninggalkan mantel di luar.'], 2, 'Damar meminta pertimbangan kenyamanan meninggalkan mantel di luar.')]
        },
        output: { speaking: 'Ringkas surat Sari selama satu menit. Sebut judul dan penulis pada awal, lalu jelaskan peran Tono tanpa menjadikannya penulis.', writing: 'Tulis 60–75 kata dengan satu atribusi lengkap dan satu rujukan “the letter”. Sertakan usulan utama serta hal yang belum diperiksa. Jangan menciptakan tahun publikasi.' },
        review: 'Tandai setiap nama dan kata yang merujuk sumber. Pastikan pembaca dapat membedakan penulis, tokoh contoh, dan penerima usulan.'
      }),
      day({
        title: 'D3 — Paraphrase yang mengubah susunan, bukan makna',
        objective: 'Menyatakan kembali dua gagasan dengan struktur sendiri sambil menjaga pelaku dan hubungan alasan.',
        explanation: `Paraphrase menyatakan kembali bagian tertentu, bukan seluruh isi sumber. Pahami dahulu siapa melakukan apa dan mengapa. Tutup teks, catat kata kunci, lalu ubah susunan informasi: misalnya kalimat tujuan menjadi kalimat yang diawali masalah. Mengganti satu kata dengan sinonim sementara susunan lain tetap sama belum menunjukkan pemahaman yang kuat.

Sesudah menulis, buka sumber untuk memeriksa pelaku, tindakan, dan hubungan logis. **Because** menjelaskan alasan; **so that** menjelaskan tujuan. Jangan menukar tujuan yang diharapkan dengan hasil yang sudah terbukti. Paraphrase tetap memerlukan atribusi, sekalipun tidak menyalin satu kalimat pun.`,
        examples: [pair('The club labels drawers so that visitors can find small tools.', 'Klub memberi label laci agar pengunjung dapat menemukan alat kecil.'), pair('To make small tools easier to locate, the club proposes drawer labels.', 'Untuk mempermudah pencarian alat kecil, klub mengusulkan label laci.')],
        vocabulary: [pair('restate', 'menyatakan kembali'), pair('purpose', 'tujuan'), pair('meaning', 'makna')],
        reading: { title: 'Labels Before Lessons — Hesti (original fictional proposal)', text: `Hesti's fictional proposal concerns a drawing club with a shared materials cupboard. New members often ask experienced members to find pencils, clips, and erasers. Hesti proposes labels on the drawers so that newcomers can choose materials without interrupting an explanation. She does not suggest locking the cupboard or giving each learner a separate set. In her imagined example, a learner reads the drawer label before asking for help. The proposal still allows questions when a label is unclear. Hesti asks two volunteers to check the wording with new members before printing permanent labels. No test has yet shown that the labels reduce interruptions.` },
        listening: { title: 'Repairing a paraphrase about a route', text: `Tutor: Read your paraphrase of the fictional walking-club note.
Learner: The leader shortened the route because all members were tired.
Tutor: The source says the leader proposes an optional shorter route so newcomers can return before dark. What changed in your version?
Learner: I made a proposal sound completed. I also invented tiredness and included all members.
Tutor: Try again without copying the whole sentence.
Learner: In “Before Sunset,” fictional writer Jati recommends offering newcomers a shorter walk that would let them finish while it is still light.
Tutor: Better. Is the longer route removed?
Learner: No. Experienced walkers could still choose it. I need to preserve that choice.` },
        quizzes: {
          pattern: [question('Paraphrase mana menjaga tujuan “so newcomers can find tools”?', ['Newcomers have already found every tool.', 'The tools caused every newcomer to leave.', 'The aim is to help new members locate tools.'], 2, 'The aim is menjaga status tujuan, bukan menyatakan keberhasilan.'), question('Apa yang tetap diperlukan setelah susunan kalimat diubah?', ['Atribusi kepada sumber.', 'Angka hasil baru.', 'Nama jurnal rekaan.'], 0, 'Mengubah susunan tidak menghilangkan kepemilikan gagasan sumber.')],
          reading: [question('Apa tujuan label menurut Hesti?', ['Mengunci semua bahan.', 'Membantu anggota baru mencari bahan tanpa menyela penjelasan.', 'Mengganti seluruh pelajaran dengan label.'], 1, 'Usulan menghubungkan pencarian mandiri dengan pengurangan interupsi yang diharapkan.'), question('Apa yang dilakukan sebelum label permanen dicetak?', ['Membuang semua laci.', 'Membagikan alat pribadi ke semua anggota.', 'Dua relawan memeriksa tulisan dengan anggota baru.'], 2, 'Hesti meminta dua relawan memeriksa wording bersama new members.')],
          listening: [question('Informasi apa yang diciptakan draf awal Learner?', ['Semua anggota lelah.', 'Rute pendek bersifat pilihan.', 'Penulisnya Jati.'], 0, 'Tiredness tidak ada dalam sumber dan diakui sebagai tambahan yang keliru.'), question('Apa yang tetap tersedia bagi pejalan berpengalaman?', ['Hanya rute pendek wajib.', 'Pilihan rute yang lebih panjang.', 'Larangan berjalan sebelum gelap.'], 1, 'Dialog menegaskan experienced walkers could still choose the longer route.')]
        },
        output: { speaking: 'Tutup “Labels Before Lessons” dan jelaskan tujuan label dengan dua susunan kalimat berbeda selama 60–90 detik. Sebut Hesti sebagai sumber.', writing: 'Pilih dua gagasan dari bacaan dan buat paraphrase 70–90 kata secara keseluruhan. Ubah susunan, pertahankan tujuan dan status usulan, lalu beri catatan satu perubahan makna yang Anda hindari.' },
        review: 'Bandingkan subjek, tindakan, tujuan, dan status waktu pada kedua versi. Hapus alasan yang Anda tambahkan sendiri tanpa penanda.'
      }),
      day({
        title: 'D4 — Mempertahankan cakupan dan pengecualian',
        objective: 'Mempertahankan some, may, dan except dalam ringkasan usulan yang terbatas.',
        explanation: `Kata kecil dapat menentukan besar klaim. **Some members** tidak sama dengan semua anggota; **may help** tidak sama dengan pasti membantu. Pengecualian setelah **except** atau **however** sering sama pentingnya dengan usulan utama. Ringkasan singkat tetap harus mempertahankan batasan yang mengubah siapa mendapat manfaat atau kapan aturan berlaku.

Buat pasangan catatan: usulan di kiri, batasan di kanan. Gabungkan dengan **but** atau **although** tanpa membalik makna. Jika ruang terbatas, hapus detail warna atau contoh dahulu, bukan pembatas klaim. Jangan memakai bahasa pasti hanya agar tulisan terasa lebih meyakinkan daripada sumbernya.`,
        examples: [pair('The change may help some evening visitors.', 'Perubahan itu mungkin membantu sebagian pengunjung malam.'), pair('Most returns would use the box, except fragile items.', 'Sebagian besar pengembalian akan memakai kotak, kecuali barang rapuh.')],
        vocabulary: [pair('scope', 'cakupan'), pair('exception', 'pengecualian'), pair('uncertainty', 'ketidakpastian')],
        reading: { title: 'A Return Box with Limits — Fikri (original fictional memo)', text: `Fikri's fictional memo proposes a return box for a puzzle library. Some members finish work after the desk closes and cannot return puzzles on weekday afternoons. A locked box beside the covered entrance may help these members return ordinary puzzle sets in the evening. However, large wooden puzzles and fragile display models would still need a handover at the desk. A volunteer would empty the box each morning, not after every return. Fikri has not measured whether the box would reduce late returns. He asks the club to check the entrance lighting before trying the idea, because the current note says nothing about visibility after dark.` },
        listening: { title: 'Keeping an exception in a short summary', text: `Tutor: Summarise the fictional room-booking note in one sentence.
Learner: Every group can use the room without booking.
Tutor: Listen to the limit: small groups may use an empty room without booking, except when a children's session is scheduled.
Learner: Then my sentence removed the group size, the empty-room condition, and the exception.
Tutor: Can you keep those without repeating every word?
Learner: The note permits small groups to enter an available room, but scheduled children's sessions take priority.
Tutor: Does it guarantee a room will be free?
Learner: No. It explains permission under certain conditions, not guaranteed availability. I should not promise visitors a space.` },
        quizzes: {
          pattern: [question('Padanan “may help some members” yang setia adalah…', ['could assist certain members', 'will help every person', 'has solved every problem'], 0, 'Could dan certain mempertahankan ketidakpastian serta cakupan terbatas.'), question('Apa yang sebaiknya dipertahankan saat ringkasan dipendekkan?', ['Semua warna benda.', 'Pengecualian yang mengubah aturan.', 'Pendapat baru yang terdengar menarik.'], 1, 'Pengecualian menentukan kapan atau kepada siapa aturan berlaku.')],
          reading: [question('Barang apa yang tetap harus diserahkan di meja?', ['Semua puzzle biasa.', 'Semua amplop kosong.', 'Puzzle kayu besar dan model pajangan rapuh.'], 2, 'Keduanya disebut sebagai pengecualian dari kotak pengembalian.'), question('Apa yang perlu diperiksa sebelum percobaan?', ['Penerangan pintu masuk.', 'Hasil penelitian nasional.', 'Harga semua puzzle tahun depan.'], 0, 'Memo meminta pemeriksaan lighting karena visibility setelah gelap belum dijelaskan.')],
          listening: [question('Kapan kelompok kecil tidak dapat mengandalkan izin masuk itu?', ['Saat ruang kosong tanpa kegiatan.', 'Saat sesi anak terjadwal.', 'Saat mereka hanya berjumlah sedikit.'], 1, 'Sesi anak yang terjadwal mendapat prioritas sebagai pengecualian.'), question('Apa yang tidak dijamin catatan?', ['Ada ketentuan ukuran kelompok.', 'Ada jadwal sesi anak.', 'Ruang pasti tersedia bagi setiap pengunjung.'], 2, 'Izin bersyarat bukan jaminan ketersediaan ruang.')]
        },
        output: { speaking: 'Berikan penjelasan 90 detik kepada peminjam fiktif: siapa yang mungkin terbantu, barang yang dikecualikan, dan pemeriksaan yang belum dilakukan.', writing: 'Tulis ringkasan 80–100 kata dari memo Fikri dengan may, some, dan satu pengecualian. Setelah itu buat satu contoh ringkasan yang terlalu pasti dan jelaskan kesalahannya dalam bahasa Indonesia.' },
        review: 'Kotaki penanda cakupan dan kepastian pada sumber serta tulisan Anda. Pastikan tidak ada may berubah menjadi hasil pasti.'
      }),
      day({
        title: 'D5 — Ringkasan mandiri dan pendapat terpisah',
        objective: 'Menghasilkan ringkasan beratribusi dari catatan sendiri dan menambahkan evaluasi yang jelas terpisah.',
        explanation: `Sekarang gabungkan pemilihan inti, atribusi, paraphrase, dan batasan. Baca sumber, catat masalah–usulan–batasan, lalu tutup teks saat menyusun ringkasan. Gunakan satu atribusi yang jelas pada awal. Periksa kembali setelah draf selesai, khususnya kata yang menunjukkan rencana, jumlah, dan pengecualian.

Pendapat pribadi boleh menyusul, tetapi beri penanda **In my view** dan jangan menyelipkannya sebagai ide penulis. Evaluasi yang berguna menyebut alasan atau pertanyaan yang belum terjawab. Pendapat tidak perlu menyatakan usulan baik atau buruk secara mutlak. Simpan draf pertama agar Anda dapat menjelaskan perbaikan makna, bukan hanya memperlihatkan versi rapi.`,
        examples: [pair('In “One Card, One Question,” Nadia proposes a question card for new members.', 'Dalam “One Card, One Question”, Nadia mengusulkan kartu pertanyaan bagi anggota baru.'), pair('In my view, the club should also check whether the print is readable.', 'Menurut saya, klub juga perlu memeriksa apakah tulisan mudah dibaca.')],
        vocabulary: [pair('faithful summary', 'ringkasan yang setia pada sumber'), pair('personal response', 'tanggapan pribadi'), pair('revision', 'perbaikan draf')],
        reading: { title: 'One Card, One Question — Nadia (original fictional proposal)', text: `Nadia writes this fictional proposal for a local history club. New visitors sometimes leave without asking about a photograph because discussion moves quickly. Nadia suggests giving new visitors a card on which they can write one question during the opening talk. The host would collect the cards and choose related questions for a short discussion at the end. Visitors who prefer speaking could still ask aloud. The proposal does not promise that every question would receive an answer that evening. Nadia suggests saving unanswered questions for a later notice. No trial has occurred, and the club has not checked how many visitors would need help writing a question.` },
        listening: { title: 'Separating a summary from a response', text: `Tutor: What does your fictional source recommend?
Learner: In “A Pause Between Activities,” Eko suggests a five-minute pause before the second workshop task. Participants could check materials and ask about the next step.
Tutor: Does the note recommend serving drinks?
Learner: No. I suggested that in my first draft without marking it as my idea.
Tutor: How will you separate it now?
Learner: First I will summarise Eko's pause and mention that its effect has not been checked. Then I will say, “In my view, water should also be available nearby.”
Tutor: Good. Your response can add an idea without pretending that Eko wrote it.` },
        quizzes: {
          pattern: [question('Kalimat mana jelas merupakan pendapat penulis ringkasan?', ['Nadia proposes collecting cards.', 'The note says some questions may remain.', 'In my view, larger print would be useful.'], 2, 'In my view menandai ide pembelajar, bukan pernyataan Nadia.'), question('Urutan kerja mana mendukung ringkasan mandiri?', ['Baca, catat inti, tutup sumber, tulis, lalu cek.', 'Salin semua kalimat dan ganti nama.', 'Tulis hasil penelitian yang tidak ada.'], 0, 'Urutan ini mendorong pemahaman sambil tetap menyediakan pemeriksaan makna.')],
          reading: [question('Apa yang tidak dijanjikan Nadia?', ['Pengunjung boleh bertanya secara lisan.', 'Setiap pertanyaan terjawab malam itu.', 'Host mengumpulkan kartu.'], 1, 'Sumber secara eksplisit membatasi janji jawaban pada malam yang sama.'), question('Apa kebutuhan yang belum diperiksa klub?', ['Warna semua foto.', 'Jumlah anggota nasional.', 'Berapa pengunjung memerlukan bantuan menulis pertanyaan.'], 2, 'Kalimat terakhir menyebut kebutuhan bantuan menulis yang belum diperiksa.')],
          listening: [question('Ide minuman berasal dari siapa?', ['Learner, bukan Eko.', 'Eko dalam sumber asli.', 'Hasil percobaan workshop.'], 0, 'Learner mengakui drinks adalah tambahan sendiri yang belum diberi penanda.'), question('Apa yang akan dikatakan Learner tentang efek jeda?', ['Sudah terbukti pada semua workshop.', 'Belum diperiksa.', 'Pasti menghilangkan semua pertanyaan.'], 1, 'Ringkasan yang diperbaiki mempertahankan effect has not been checked.')]
        },
        output: { speaking: 'Dengan tiga poin catatan saja, ringkas Nadia selama dua menit. Sesudah jeda singkat, beri pendapat sendiri selama 30 detik dan tandai batas sumber.', writing: 'Tulis ringkasan 100–130 kata dengan sumber tertutup, lalu paragraf pendapat 30–40 kata terpisah. Cek teks dan simpan satu revisi yang mempertahankan pengecualian atau ketidakpastian.' },
        review: 'Gunakan empat cek: sumber jelas, inti tepat, batasan utuh, pendapat terpisah. Catat satu perubahan isi dan alasan, bukan hanya jumlah kata.'
      })
    ],
    assessment: {
      title: 'D6 — Transfer ringkasan ke sumber baru',
      objective: 'Merangkum sumber assessment baru secara beratribusi tanpa memindahkan asumsi dari latihan sebelumnya.',
      explanation: `Gunakan paket hari keenam sebagai sumber baru, bukan bahan untuk mengulang ringkasan kemarin. Baca seluruh teks sebelum membuat tiga catatan: masalah, usulan, dan batasan. Tulis dengan teks tertutup, lalu periksa apakah cakupan dan kepastian masih sama. Sebut identitas sumber yang benar-benar tersedia.

Untuk naskah suara, dengarkan dahulu bila audio tersedia dan catat kondisi pengulangan. Jika hanya membaca, sebut kegiatan itu latihan membaca. Pisahkan ringkasan dari pendapat. Nilai ketepatan makna lebih dahulu sebelum merapikan grammar; jangan menambahkan hasil atau persetujuan yang tidak dinyatakan.`,
      examples: [pair('The writer proposes a change but does not report results.', 'Penulis mengusulkan perubahan tetapi tidak melaporkan hasil.'), pair('In my view, one further question needs discussion.', 'Menurut saya, satu pertanyaan tambahan perlu dibahas.')],
      vocabulary: [pair('transfer task', 'tugas penerapan pada konteks baru'), pair('source identity', 'identitas sumber'), pair('qualification', 'pembatas klaim')],
      quizzes: { pattern: [question('Apa yang harus dibawa dari latihan sebelumnya ke tugas baru?', ['Jawaban bacaan kemarin.', 'Proses memilih inti dan memeriksa batasan.', 'Nama penulis lama untuk semua sumber.'], 1, 'Yang ditransfer adalah keterampilan, bukan isi atau identitas sumber sebelumnya.'), question('Sumber hanya memberi usulan. Mana yang aman?', ['The change has proved successful.', 'Everyone accepted the change.', 'The source recommends a possible change.'], 2, 'Recommends a possible change menjaga status usulan tanpa menambahkan hasil.')] },
      output: { speaking: 'Ringkas sumber baru 2–3 menit dari catatan; sebut inti, dua batasan, dan satu pendapat terpisah. Koreksi satu pergeseran makna bila ditemukan.', writing: 'Buat ringkasan 120–150 kata dan tanggapan terpisah 40 kata. Simpan draf pertama dan versi setelah pengecekan sumber, dengan alasan untuk dua revisi.' },
      review: 'Periksa cakupan, kepastian, dan atribusi pada paket baru. Jangan menilai akurasi hanya dari kemiripan kata dengan sumber.'
    }
  },
  {
    week: 20,
    days: [
      day({
        title: 'D1 — Mendengar peta pembicaraan',
        objective: 'Mencatat topik dan urutan dua poin dari penanda arah pembicara.',
        explanation: `Catatan kuliah bukan transkrip. Pada putaran pertama, cari topik dan arah pembicaraan lewat **today**, **first**, **next**, dan **to conclude**. Penanda itu membantu membagi informasi menjadi bagian yang dapat diingat. Jangan berhenti terlalu lama untuk menyalin satu kalimat sehingga kehilangan bagian berikutnya.

Buat kerangka dua poin sebelum menambahkan detail. Tulis kata kunci, bukan kalimat sempurna. Setelah mendengar, jelaskan hubungan antarbagian dengan bahasa sendiri. Jika menggunakan bacaan karena audio tidak tersedia, tandai kondisi tersebut; latihan mengenali struktur tetap berguna, tetapi tidak menjadi bukti bahwa Anda menangkap bunyi tanpa transkrip.`,
        examples: [pair('First, I will explain the problem; next, I will describe a possible response.', 'Pertama saya akan menjelaskan masalah; berikutnya saya akan menguraikan kemungkinan tanggapan.'), pair('To conclude, the plan needs a clear review point.', 'Sebagai simpulan, rencana memerlukan waktu peninjauan yang jelas.')],
        vocabulary: [pair('signpost', 'penanda arah pembicaraan'), pair('outline', 'kerangka'), pair('key word', 'kata kunci')],
        reading: { title: 'Listen for the Map — Ratri (original fictional study note)', text: `Ratri's fictional study note describes how she prepares for a short talk about a reading event. She writes the topic at the top of the page and leaves two numbered spaces below it. When the speaker says “first,” she records the problem of visitors arriving during an explanation. When he says “next,” she records a proposed welcome point near the door. She does not write every sentence about chairs and coats. At the end, she checks whether the conclusion connects the welcome point to the arrival problem. Her notes are an outline of the talk, not evidence that the proposed welcome point has worked.` },
        listening: { title: 'A briefing with two clear sections', text: `Tutor: Today I will explain a fictional neighbourhood reading event. First, consider the arrival problem. Visitors come at different times, and a host sometimes repeats the opening instructions while another person is already reading. This can interrupt both activities.
Learner: So the first section describes the problem, not a result.
Tutor: Exactly. Next, consider a possible welcome point. A volunteer near the entrance could explain the next available activity before visitors enter the reading area. To conclude, this proposal separates arrival information from the reading itself. It has not been tried, and we still need to decide who could welcome late visitors.` },
        quizzes: {
          pattern: [question('Apa fungsi “Next” dalam briefing?', ['Menjamin keberhasilan.', 'Menunjukkan perpindahan ke bagian berikutnya.', 'Menyatakan semua fakta salah.'], 1, 'Next memberi petunjuk urutan, bukan penilaian kebenaran atau hasil.'), question('Catatan putaran pertama sebaiknya berisi…', ['Topik dan kerangka poin.', 'Semua kata tanpa urutan.', 'Jawaban yang ditebak sebelum mendengar.'], 0, 'Kerangka membantu menangkap arah sebelum menambahkan detail.')],
          reading: [question('Apa isi ruang bernomor pertama Ratri?', ['Warna mantel.', 'Hasil keberhasilan welcome point.', 'Masalah pengunjung datang saat penjelasan.'], 2, 'Ia menempatkan masalah kedatangan pada bagian first.'), question('Apa status catatan Ratri?', ['Laporan hasil eksperimen.', 'Kerangka pembicaraan.', 'Daftar semua kalimat pembicara.'], 1, 'Kalimat terakhir menegaskan outline, bukan bukti keberhasilan.')],
          listening: [question('Apa yang dibahas setelah masalah kedatangan?', ['Kemungkinan welcome point dekat pintu.', 'Hasil tes nasional.', 'Pembatalan pembacaan.'], 0, 'Next memperkenalkan welcome point sebagai tanggapan yang diusulkan.'), question('Apa yang belum diputuskan?', ['Apakah ada bagian pertama.', 'Apakah pengunjung dapat datang berbeda waktu.', 'Siapa yang menyambut pengunjung terlambat.'], 2, 'Penutup menyatakan penanggung jawab late visitors masih perlu ditentukan.')]
        },
        output: { speaking: 'Dengarkan atau baca sekali, tutup teks, lalu jelaskan topik dan urutan dua poin dalam 60–90 detik. Sebut kondisi latihan yang dipakai.', writing: 'Buat kerangka maksimal 35 kata untuk naskah suara: topik, poin pertama, poin kedua, dan penutup. Kembangkan menjadi penjelasan 60 kata tanpa menambah hasil.' },
        review: 'Cek apakah urutan poin tetap sama. Tandai detail yang mengganggu perhatian Anda sebelum inti pembicaraan tercatat.'
      }),
      day({
        title: 'D2 — Angka harus membawa label',
        objective: 'Mencatat jumlah orang, kegiatan, dan durasi tanpa menukar satuannya.',
        explanation: `Angka tanpa label mudah disalahartikan. Tulis **8 people**, **2 groups**, atau **15 minutes**, bukan hanya 8–2–15. Jumlah peserta berbeda dari jumlah sesi; durasi satu sesi berbeda dari total waktu beberapa sesi. Gunakan singkatan yang masih jelas ketika dibaca kembali, misalnya **min** untuk menit.

Dengarkan hubungan angka dengan benda terdekat, lalu konfirmasi dengan konteks. Bila detail terlewat, tulis tanda tanya. Jangan mengisi angka karena terdengar masuk akal. Pada putaran kedua, perbaiki hanya bagian yang belum tertangkap dan simpan catatan awal agar kondisi pemahaman Anda dapat dilihat dengan jujur.`,
        examples: [pair('There are eight participants in two groups.', 'Ada delapan peserta dalam dua kelompok.'), pair('Each activity lasts fifteen minutes.', 'Setiap kegiatan berlangsung lima belas menit.')],
        vocabulary: [pair('duration', 'durasi'), pair('unit', 'satuan'), pair('participant', 'peserta')],
        reading: { title: 'Numbers with Names — Beni (original fictional notebook)', text: `Beni's fictional notebook records an imagined pottery introduction. Ten learners work at five tables. Each table has two learners, but that does not mean there are five separate classes. The introduction lasts twelve minutes, followed by an eighteen-minute practice period. Beni first writes “10, 5, 12, 18” and later cannot explain the list. He revises it to show people, tables, introduction time, and practice time. The note says nothing about how many pots are completed. Beni leaves that detail blank instead of using the number of learners as a guessed production total. The scenario illustrates note-taking, not measured teaching effectiveness.` },
        listening: { title: 'Checking a repair-workshop record', text: `Tutor: Here are details from an invented repair lesson. Eight learners sit in two groups. They spend fifteen minutes checking a sample object, then ten minutes discussing what they noticed.
Learner: I wrote fifteen groups and eight minutes. I attached the numbers to the wrong labels.
Tutor: Correct them now. How long is the discussion?
Learner: Ten minutes. The checking period is fifteen minutes, and there are eight learners altogether.
Tutor: Do we know how many objects were repaired?
Learner: No. Checking a sample is not the same as completing a repair. I will write “repairs completed: not given” rather than invent a total.` },
        quizzes: {
          pattern: [question('Catatan mana paling jelas?', ['8 / 2 / 15', '8 participants; 2 groups; 15 minutes', '15 people probably; 8 rooms maybe'], 1, 'Setiap angka memiliki objek atau satuan sehingga dapat ditafsirkan kembali.'), question('Jumlah objek selesai tidak terdengar. Apa tindakan yang jujur?', ['Gunakan jumlah peserta sebagai hasil.', 'Tulis angka besar agar catatan lengkap.', 'Tulis “not given” atau tanda tanya sesuai situasi.'], 2, 'Catatan harus menunjukkan informasi belum tersedia atau belum tertangkap, bukan tebakan.')],
          reading: [question('Apa arti angka lima dalam notebook Beni?', ['Jumlah meja.', 'Menit praktik.', 'Jumlah kelas terpisah.'], 0, 'Ada lima meja, masing-masing dipakai dua dari sepuluh peserta.'), question('Informasi apa yang tidak diberikan?', ['Lama pengantar.', 'Jumlah pot yang selesai.', 'Jumlah peserta.'], 1, 'Teks tidak menyebut berapa pot yang dibuat sampai selesai.')],
          listening: [question('Berapa lama diskusi berlangsung?', ['Lima belas menit.', 'Delapan menit.', 'Sepuluh menit.'], 2, 'Checking berlangsung lima belas menit; discussion sepuluh menit.'), question('Berapa orang ikut dalam keseluruhan skenario?', ['Delapan peserta.', 'Lima belas peserta.', 'Dua peserta.'], 0, 'Naskah menyebut eight learners, bukan delapan menit.')]
        },
        output: { speaking: 'Dari catatan saja, laporkan tiga pasangan angka–label dalam satu menit, kemudian katakan satu informasi yang tidak diberikan.', writing: 'Buat tabel angka/label dari bacaan dan naskah suara secara terpisah. Tulis penjelasan 70–90 kata yang membedakan peserta, kelompok, dan menit tanpa mengklaim jumlah benda selesai.' },
        review: 'Beri garis pada label setiap angka. Bandingkan catatan pertama dan kedua; jangan menyembunyikan angka yang baru diketahui sesudah membuka teks.'
      }),
      day({
        title: 'D3 — Pisahkan claim, example, dan limit',
        objective: 'Mengelompokkan catatan menurut fungsi informasi, bukan sekadar urutan kalimat.',
        explanation: `Sesudah topik dan angka jelas, tanyakan fungsi setiap bagian. **Claim** ialah gagasan yang ingin diterima pembicara. **Example** membuat gagasan lebih konkret, tetapi contoh fiktif bukan bukti eksperimen. **Limit** menjelaskan apa yang belum diketahui atau tidak diselesaikan gagasan tersebut.

Buat tiga kolom dan isi dengan kata kunci. Satu contoh kecil tidak boleh berubah menjadi kesimpulan tentang semua orang. Gunakan **The speaker illustrates…** untuk contoh dan **However, the talk does not show…** untuk batasan. Ketika menceritakan kembali, hubungkan ketiganya sehingga pendengar memahami alasan sekaligus keterbatasan pembicara.`,
        examples: [pair('The speaker suggests a visible closing checklist.', 'Pembicara menyarankan daftar penutup yang terlihat.'), pair('The invented example illustrates the idea; it does not prove faster work.', 'Contoh rekaan memperjelas gagasan; contoh itu tidak membuktikan pekerjaan lebih cepat.')],
        vocabulary: [pair('claim', 'gagasan yang dikemukakan'), pair('illustration', 'contoh penjelas'), pair('limit', 'batasan')],
        reading: { title: 'Three Kinds of Note — Mita (original fictional guide)', text: `Mita's fictional guide uses a talk about a community kitchen. The speaker claims that a visible closing checklist could make remaining tasks easier to identify. To illustrate this, he imagines a helper noticing that a clean bowl still needs to return to its shelf. He then explains a limit: a checklist cannot create storage space when every shelf is full. Mita puts these points in separate columns. She does not write that the bowl example proves the kitchen will close earlier. The talk includes no comparison of closing times. Her finished notes preserve a possible benefit, an invented illustration, and a practical constraint.` },
        listening: { title: 'A mini-lecture on a clear finishing step', text: `Tutor: My suggestion is to define a visible finish for a shared task. Here is an invented illustration from a map-making class. A pair writes “mark the entrance and add a north arrow” instead of simply writing “improve the map.” That gives them something specific to check.
Learner: Is that your claim, or your example?
Tutor: The visible finish is my general suggestion; the map pair illustrates it. However, we have not compared map quality, and a clear finish cannot provide missing information about a route.
Learner: So my notes need three parts: the suggestion, the invented pair, and the limits on what the suggestion establishes.` },
        quizzes: {
          pattern: [question('Contoh rekaan sebaiknya diperkenalkan dengan…', ['This invented illustration shows what the idea means.', 'This experiment proves every learner succeeds.', 'These measured national results are final.'], 0, 'Illustration menjelaskan gagasan tanpa menyulap contoh menjadi data nyata.'), question('Mana yang merupakan limit?', ['The speaker gives a map example.', 'The plan cannot supply missing route information.', 'The topic is finishing steps.'], 1, 'Tidak dapat menyediakan informasi rute menyatakan batas kemampuan rencana.')],
          reading: [question('Apa keterbatasan checklist dapur?', ['Tidak dapat menuliskan tugas.', 'Tidak dapat menyebut mangkuk.', 'Tidak dapat menciptakan ruang simpan saat rak penuh.'], 2, 'Guide mempertahankan constraint ruang yang tidak diselesaikan checklist.'), question('Mengapa Mita tidak menyatakan dapur tutup lebih cepat?', ['Tidak ada perbandingan waktu penutupan.', 'Ia mengetahui semua jam rusak.', 'Semua mangkuk telah dibuang.'], 0, 'Sumber secara eksplisit tidak memuat comparison of closing times.')],
          listening: [question('Apa tugas konkret pasangan pembuat peta?', ['Membuat semua rute baru.', 'Menandai pintu masuk dan menambah panah utara.', 'Mengukur nilai seluruh kelas.'], 1, 'Dua tindakan itu menggantikan sasaran kabur improve the map.'), question('Apa yang belum dibandingkan?', ['Apakah contoh bersifat rekaan.', 'Apakah ada dua orang dalam pasangan.', 'Kualitas peta.'], 2, 'Tutor menyatakan we have not compared map quality.')]
        },
        output: { speaking: 'Jelaskan naskah suara selama dua menit dari tabel claim/example/limit. Nyatakan bahwa pasangan pembuat peta adalah contoh rekaan.', writing: 'Isi tiga kolom untuk kedua sumber, lalu tulis ringkasan 90–110 kata dari salah satunya. Gunakan satu kalimat yang menjelaskan mengapa contoh tidak membuktikan hasil.' },
        review: 'Tandai jika satu detail muncul di kolom yang salah. Periksa bahwa limit tetap terdengar ketika Anda menjelaskan dari catatan.'
      }),
      day({
        title: 'D4 — Menandai bagian hilang dan meminta klarifikasi',
        objective: 'Membedakan informasi tidak tertangkap dari informasi tidak tersedia serta mengajukan pertanyaan tepat.',
        explanation: `Ada dua jenis kekosongan catatan. **Missed** berarti pembicara menyampaikan detail tetapi Anda tidak menangkapnya; **not provided** berarti sumber memang tidak menyediakannya. Keduanya memerlukan respons berbeda. Ulangi atau cek transkrip untuk detail yang terlewat. Untuk informasi yang tidak ada, ajukan pertanyaan, bukan menebak jawabannya.

Gunakan **Did you say…?** untuk memastikan bunyi atau angka dan **How would…?** untuk meminta penjelasan baru. Setelah klarifikasi, revisi catatan dengan penanda yang membedakan versi awal. Pertanyaan seminar yang baik berangkat dari batasan isi, bukan mengulang fakta yang sudah jelas di awal pembicaraan.`,
        examples: [pair('Did you say three sessions or three groups?', 'Apakah Anda mengatakan tiga sesi atau tiga kelompok?'), pair('How would the plan work when the room is unavailable?', 'Bagaimana rencana itu berjalan ketika ruangan tidak tersedia?')],
        vocabulary: [pair('missed detail', 'detail yang tidak tertangkap'), pair('not provided', 'tidak disediakan sumber'), pair('clarify', 'memperjelas')],
        reading: { title: 'A Question Mark Is Useful — Reza (original fictional reflection)', text: `Reza describes a fictional talk about a shared art cupboard. On his first attempt, he misses the number of keys and writes “keys: ?”. After checking the transcript, he learns that the speaker mentioned three keys. However, the talk never says who would replace a lost key. Reza marks that second gap as “not provided,” not as a listening error. He prepares a question about responsibility for replacements. He also deletes his guessed note that the caretaker would pay. The talk named a caretaker as a possible key holder, but that role did not establish responsibility for payment. Reza keeps both versions of his notes.` },
        listening: { title: 'Clarifying a detail without inventing a policy', text: `Tutor: In this fictional briefing, three groups would share the display board for two weeks each. The coordinator would maintain the booking list.
Learner: Did you say three weeks or three groups?
Tutor: Three groups. Each group would have two weeks.
Learner: Thank you. I missed that distinction. What would happen if a group needed extra time?
Tutor: The briefing does not give an extension policy. That would need discussion before bookings begin.
Learner: Then I will record the number as clarified, but mark extensions as not provided. I should not assume that the coordinator can automatically grant another week.` },
        quizzes: {
          pattern: [question('Anda tidak menangkap angka yang disebut. Label yang sesuai adalah…', ['missed — check the recording', 'not provided, without checking anything', 'definitely fifty'], 0, 'Detail yang disampaikan tetapi tidak tertangkap perlu dicek, bukan dinyatakan pasti tidak tersedia.'), question('Pertanyaan mana meminta kebijakan yang belum diberikan?', ['Did you pronounce three?', 'What happens if a booking needs an extension?', 'Is the topic a display board?'], 1, 'Pertanyaan extension meminta informasi baru tentang batasan kebijakan.')],
          reading: [question('Apa yang diketahui setelah Reza memeriksa transkrip?', ['Penjaga pasti membayar.', 'Ada lima lemari.', 'Ada tiga kunci.'], 2, 'Jumlah kunci adalah detail yang terlewat lalu ditemukan kembali.'), question('Apa yang tetap tidak disediakan sumber?', ['Penanggung jawab penggantian kunci hilang.', 'Adanya pembicaraan tentang lemari.', 'Jumlah kunci setelah pengecekan.'], 0, 'Teks tidak menetapkan siapa mengganti kunci hilang atau membayar.')],
          listening: [question('Pasangan angka mana yang benar?', ['Dua kelompok; tiga minggu masing-masing.', 'Tiga kelompok; dua minggu masing-masing.', 'Tiga minggu; dua koordinator.'], 1, 'Tutor mengklarifikasi three groups dengan two weeks untuk tiap kelompok.'), question('Bagaimana status aturan perpanjangan?', ['Otomatis seminggu tambahan.', 'Sudah disetujui koordinator.', 'Belum diberikan dan perlu diskusi.'], 2, 'Briefing tidak memuat extension policy.')]
        },
        output: { speaking: 'Simulasikan klarifikasi 90 detik: satu pertanyaan untuk detail yang terlewat dan satu untuk kebijakan yang belum tersedia. Jangan menjawab pertanyaan kedua dengan aturan rekaan.', writing: 'Buat daftar missed/not provided dari naskah, lalu ringkasan 90–110 kata. Tuliskan satu pertanyaan lanjutan yang tidak dijawab sumber serta informasi yang ingin Anda peroleh.' },
        review: 'Bandingkan dua jenis tanda kosong. Pastikan koreksi setelah transkrip tidak dihitung sebagai detail yang ditangkap pada percobaan pertama.'
      }),
      day({
        title: 'D5 — Catatan menjadi penjelasan seminar',
        objective: 'Menyampaikan struktur, angka berlabel, batasan, dan pertanyaan dari catatan singkat.',
        explanation: `Catatan berguna jika dapat dipakai menjelaskan kembali isi, bukan hanya terlihat lengkap. Gabungkan kerangka arah dengan kolom claim–support–limit. Simpan angka beserta label dan tandai detail yang belum pasti. Setelah putaran pertama, gunakan catatan itu untuk berbicara sebelum memeriksa sumber lagi.

Mulai dari **The speaker’s main point is…**, beri contoh terbatas, lalu sebut apa yang belum ditunjukkan. Akhiri dengan satu pertanyaan seminar yang menanggapi celah isi. Nilai ketepatan isi terpisah dari kelancaran. Penjelasan yang lancar tetapi mengubah contoh rekaan menjadi bukti penelitian tetap perlu diperbaiki.`,
        examples: [pair('The speaker uses an invented example of four helpers.', 'Pembicara menggunakan contoh rekaan tentang empat pembantu.'), pair('The talk leaves open the question of access outside opening hours.', 'Pembicaraan belum menjawab pertanyaan akses di luar jam buka.')],
        vocabulary: [pair('seminar question', 'pertanyaan diskusi seminar'), pair('reconstruct', 'menjelaskan kembali dari catatan'), pair('accuracy', 'ketepatan isi')],
        reading: { title: 'From Notes to Explanation — Ayu (original fictional learning log)', text: `Ayu's fictional learning log describes a talk about a seed-sharing table. Her outline lists a claim, an illustration, and a limit. The claim is that separating seeds by growing season could make the table easier to browse. The invented illustration involves four helpers preparing labels during a twenty-minute session. The limit is that labels cannot tell visitors whether old seeds will grow. Ayu first describes the example as a successful experiment, then corrects herself because no growth tests occurred. Her seminar question asks how visitors without gardening experience would understand the seasonal labels. She keeps that question separate from the speaker's suggestions.` },
        listening: { title: 'A final short lecture and note check', text: `Tutor: Today I suggest giving each community exhibition task a clear handoff point. In an invented example, six helpers work in three pairs for thirty minutes. Each pair leaves its unfinished display beside a card naming the next step. This could make it easier for the next pair to begin. However, the example does not measure display quality or total preparation time.
Learner: My notes say six helpers, three pairs, thirty minutes, then a card for the next step.
Tutor: What question remains?
Learner: How would the handoff work if the next pair cannot read the card? The talk has not explained an alternative, so I will ask rather than invent one.` },
        quizzes: {
          pattern: [question('Penjelasan seminar yang setia harus menyebut…', ['Hanya pendapat pribadi.', 'Klaim, contoh berstatus benar, dan batasan.', 'Hasil penelitian tambahan agar lengkap.'], 1, 'Penjelasan harus mempertahankan jenis dukungan dan batas klaim.'), question('Kalimat mana membedakan contoh dari bukti?', ['The imagined example proves every event is faster.', 'The figures are real research because they are precise.', 'The illustration is invented and does not measure outcomes.'], 2, 'Angka tepat dalam simulasi tidak mengubahnya menjadi hasil penelitian.')],
          reading: [question('Apa yang tidak dapat diketahui dari label musim?', ['Apakah benih lama akan tumbuh.', 'Musim yang ditulis pada label.', 'Adanya meja berbagi benih.'], 0, 'Limit menyatakan labels tidak menunjukkan apakah old seeds will grow.'), question('Apa pertanyaan Ayu?', ['Apakah sudah ada tes tumbuh.', 'Bagaimana pemula memahami label musim.', 'Mengapa empat helpers pasti ilmuwan.'], 1, 'Pertanyaan menanggapi akses makna bagi pengunjung tanpa pengalaman berkebun.')],
          listening: [question('Angka mana cocok dengan naskah?', ['Tiga helpers; enam pasangan; tiga belas menit.', 'Enam sesi; tiga menit; tiga puluh pasangan.', 'Enam helpers; tiga pasangan; tiga puluh menit.'], 2, 'Ketiga label tersebut disebut jelas pada ilustrasi.'), question('Apa alternatif yang belum dijelaskan?', ['Cara serah-terima bagi pasangan yang tidak dapat membaca kartu.', 'Cara menghitung tiga pasangan.', 'Nama jumlah helpers.'], 0, 'Learner menanyakan akses kartu dan tidak mengarang alternatifnya.')]
        },
        output: { speaking: 'Jelaskan naskah selama 2–3 menit dari catatan maksimal 45 kata. Sertakan angka berlabel, satu batasan, dan pertanyaan seminar. Catat apakah memakai audio atau membaca.', writing: 'Buat catatan terstruktur lalu ringkasan 120–140 kata. Di bawahnya tulis apa yang tertangkap pertama kali, setelah pengulangan, dan setelah membuka transkrip.' },
        review: 'Simpan catatan sebelum dan sesudah cek. Koreksi klaim yang paling mengubah makna sebelum memperhalus jeda atau pengucapan.'
      })
    ],
    assessment: {
      title: 'D6 — Transfer catatan kuliah pada briefing baru',
      objective: 'Membuat catatan dan penjelasan akurat dari paket baru dengan kondisi bantuan yang tercatat.',
      explanation: `Siapkan halaman kosong dengan ruang untuk topik, claim, support, dan limit. Dengarkan paket baru bila audio tersedia; jangan membaca transkrip terlebih dahulu. Catat angka bersama label dan biarkan tanda tanya untuk detail yang terlewat. Setelah percobaan pertama, jelaskan inti sebelum mengulang.

Gunakan pengulangan untuk memperbaiki catatan, lalu periksa dengan transkrip. Pisahkan informasi yang baru Anda temukan dari yang terdengar pertama kali. Buat satu pertanyaan tentang hal yang belum dijelaskan, bukan pertanyaan yang jawabannya sudah ada. Hasil ini diagnosis tugas lokal, bukan sertifikasi listening atau ukuran resmi kemampuan umum.`,
      examples: [pair('My first notes captured the claim but missed one duration.', 'Catatan pertama saya menangkap klaim tetapi melewatkan satu durasi.'), pair('The speaker does not establish that the plan works in every setting.', 'Pembicara tidak membuktikan rencana berhasil di setiap situasi.')],
      vocabulary: [pair('first playback', 'pemutaran pertama'), pair('labelled figure', 'angka dengan label'), pair('follow-up question', 'pertanyaan lanjutan')],
      quizzes: { pattern: [question('Jika hanya membaca transkrip, laporan yang benar adalah…', ['I proved independent listening.', 'I practised reading and structured notes.', 'I heard every detail once.'], 1, 'Membaca transkrip memberi bukti membaca/catatan, bukan menangkap audio mandiri.'), question('Apa tindakan tepat terhadap angka yang tidak tertangkap?', ['Mengisi angka yang sama dengan tugas kemarin.', 'Menghilangkan semua batasan sumber.', 'Menandai celah lalu memeriksa pada tahap berikutnya.'], 2, 'Catatan menunjukkan ketidakpastian sebelum informasi diklarifikasi.')] },
      output: { speaking: 'Dari catatan saja, jelaskan briefing baru 3–4 menit: inti, contoh, angka berlabel, dua batasan, dan satu pertanyaan seminar. Simpan rekaman pertama.', writing: 'Tulis catatan tiga kolom dan ringkasan 120–160 kata. Lampirkan perbedaan catatan sebelum/sesudah pengulangan dan label bantuan; jangan menyebut ilustrasi sebagai eksperimen.' },
      review: 'Bandingkan ketepatan isi dan kelancaran secara terpisah. Bila tidak ada audio, tulis bahwa bukti listening belum diperoleh pada tugas ini.'
    }
  },
  {
    week: 21,
    days: [
      day({
        title: 'D1 — Satu pertanyaan untuk dua sumber',
        objective: 'Menentukan pertanyaan bersama dan mencatat jawaban tiap sumber secara terpisah.',
        explanation: `Perbandingan dimulai dengan pertanyaan yang dapat dijawab kedua sumber. Dua teks dapat membahas tempat yang sama tetapi menjawab masalah berbeda. Pilih fokus yang cukup khusus, misalnya bagaimana menyampaikan perubahan jadwal, bukan sekadar apakah komunikasi penting. Catat jawaban sumber A dan B sebelum memutuskan mana yang Anda sukai.

Gunakan **Both sources discuss…** untuk topik bersama, tetapi jangan langsung menyatakan mereka sepakat pada cara. Tulis nama dan judul pada setiap kolom catatan. Dengan demikian, saat dua gagasan digabungkan nanti, asalnya tetap terlihat dan pendapat salah satu penulis tidak berpindah ke penulis lain.`,
        examples: [pair('Both sources discuss how to announce timetable changes.', 'Kedua sumber membahas cara mengumumkan perubahan jadwal.'), pair('A proposes a wall calendar; B proposes a daily message.', 'A mengusulkan kalender dinding; B mengusulkan pesan harian.')],
        vocabulary: [pair('shared question', 'pertanyaan bersama'), pair('source column', 'kolom sumber'), pair('approach', 'pendekatan')],
        reading: { title: 'Announcing Changes — original fictional sources by Lila and Surya', text: `Source A, “One Visible Calendar” by Lila, proposes a wall calendar for a fictional dance studio. Teachers would mark room changes there before classes begin. Lila's example concerns members who pass the entrance daily; visitors arriving from another building may not see it. Source B, “A Morning Message” by Surya, proposes sending one daily update to registered members. His example concerns people who travel directly from work and want to check the room before leaving. He recognises that members without message access would need another method. Neither writer reports a trial. Both address how members learn about changed rooms, not how teachers decide which class gets a room.` },
        listening: { title: 'Finding the comparison question', text: `Tutor: These fictional notes concern a community choir. The first proposes a short spoken announcement after rehearsal. The second proposes a printed sheet near the exit. What question can both answer?
Learner: How should the choir share next week's rehearsal information?
Tutor: Good. Could you compare them on how well singers improve their breathing?
Learner: No. Neither note discusses that. The spoken announcement allows immediate questions; the sheet can be taken home.
Tutor: Are those already results from a test?
Learner: No. They are reasons in proposals. I will keep each reason in its own source column before comparing them.` },
        quizzes: {
          pattern: [question('Pertanyaan bersama harus…', ['Dapat dijawab kedua sumber.', 'Hanya sesuai pendapat Anda.', 'Memerlukan hasil penelitian rekaan.'], 0, 'Sintesis membutuhkan fokus yang benar-benar dibahas kedua teks.'), question('“Both discuss room updates” berarti…', ['Keduanya memilih cara yang sama.', 'Keduanya membahas topik itu.', 'Keduanya sudah terbukti berhasil.'], 1, 'Kesamaan topik tidak sama dengan kesamaan cara atau hasil.')],
          reading: [question('Pertanyaan apa yang dijawab kedua sumber?', ['Siapa guru terbaik.', 'Bagaimana kelas mendapat ruangan.', 'Bagaimana anggota mengetahui perubahan ruangan.'], 2, 'Kedua usulan mengatur penyampaian informasi perubahan ruangan.'), question('Siapa mungkin tidak melihat kalender Lila?', ['Pengunjung yang datang dari gedung lain.', 'Anggota yang melewati pintu setiap hari.', 'Guru yang menandai kalender.'], 0, 'Konteks tersebut disebut sebagai batas kalender di pintu masuk.')],
          listening: [question('Apa kelebihan yang disebut untuk lembar cetak?', ['Menjamin teknik bernyanyi membaik.', 'Dapat dibawa pulang.', 'Tidak pernah perlu diperbarui.'], 1, 'Learner menyebut sheet can be taken home.'), question('Mengapa teknik pernapasan bukan fokus yang tepat?', ['Semua anggota sudah ahli.', 'Kertas tidak dapat disentuh.', 'Kedua catatan tidak membahasnya.'], 2, 'Pertanyaan sintesis harus sesuai cakupan sumber.')]
        },
        output: { speaking: 'Jelaskan pertanyaan bersama bacaan dalam satu menit, lalu jawaban Lila dan Surya masing-masing tanpa memilih pemenang.', writing: 'Buat dua kolom judul/penulis/usulan/konteks, lalu tulis 80–100 kata yang menjawab satu pertanyaan bersama. Jangan menambah hasil.' },
        review: 'Cek setiap catatan terhadap kolom sumbernya. Jika suatu gagasan hanya ada di A, jangan menuliskannya sebagai kesepakatan A dan B.'
      }),
      day({
        title: 'D2 — Kesamaan yang benar-benar didukung',
        objective: 'Membedakan shared aim dari shared method dengan both dan neither.',
        explanation: `Dua sumber mungkin memiliki tujuan sama tetapi menawarkan cara berbeda. **Both writers aim to…** menyatakan tujuan bersama; kalimat itu tidak berarti keduanya mendukung tindakan identik. Buat baris terpisah untuk tujuan, cara, dan bukti. Hanya gunakan **both** jika kedua kolom mendukung pernyataan tersebut.

Gunakan **Neither source provides…** untuk ketiadaan informasi pada dua sumber. Bentuk **neither source** diperlakukan tunggal: **provides**, bukan **provide**. Ketiadaan bukti bukan bukti bahwa usulan pasti gagal. Ia membatasi simpulan yang boleh dibuat dan dapat menjadi alasan meminta pemeriksaan lebih lanjut.`,
        examples: [pair('Both writers want newcomers to find help easily.', 'Kedua penulis ingin pendatang baru mudah menemukan bantuan.'), pair('Neither source provides attendance figures.', 'Tidak satu pun sumber menyediakan angka kehadiran.')],
        vocabulary: [pair('shared aim', 'tujuan bersama'), pair('neither', 'tidak satu pun dari dua'), pair('method', 'cara')],
        reading: { title: 'Finding Help — original fictional sources by Hana and Iqbal', text: `In “A Named Contact,” fictional writer Hana proposes naming one contact person on each sports-club notice. New members would know whom to ask before attending. She recognises that one person may be unavailable and suggests naming a substitute. In “A Welcome Pair,” fictional writer Iqbal proposes two experienced members greeting newcomers at each session. Visitors could ask questions when they arrive, although the pair would need to attend reliably. Both want newcomers to find help, but only Hana proposes a contact on the notice. Neither has collected attendance figures or measured whether newcomers stay in the club. These are original practice proposals, not consultation results.` },
        listening: { title: 'Checking a statement with both', text: `Tutor: Compare the two fictional transport notices.
Learner: Both writers want every passenger to use an app.
Tutor: Check that. Note A proposes an app for route changes, but Note B proposes a telephone message line.
Learner: Their shared aim is helping passengers check changes before travelling, not making everyone use an app.
Tutor: What information do neither of them provide?
Learner: Neither source provides running costs. I cannot call one cheaper.
Tutor: Does missing cost information mean both ideas will fail?
Learner: No. It means a cost conclusion is not supported yet. The access methods still differ, and I should compare those separately.` },
        quizzes: {
          pattern: [question('Mana bentuk yang tepat?', ['Neither source provides costs.', 'Neither source provide costs.', 'Neither sources provides costs.'], 0, 'Neither source adalah frasa tunggal sehingga memakai provides.'), question('Tujuan sama membuktikan apa?', ['Metodenya pasti identik.', 'Semua hasil sudah sama.', 'Kedua penulis mengarah pada tujuan itu, bukan otomatis cara sama.'], 2, 'Tujuan dan metode harus dibandingkan secara terpisah.')],
          reading: [question('Kesamaan apa yang didukung?', ['Keduanya memasang nama pada pengumuman.', 'Keduanya ingin pendatang baru mudah mendapat bantuan.', 'Keduanya mengukur retensi anggota.'], 1, 'Tujuan bersama dinyatakan eksplisit, sementara cara berbeda.'), question('Apa yang hanya diusulkan Hana?', ['Kontak bernama pada pengumuman.', 'Dua penyambut di setiap sesi.', 'Hasil peningkatan kehadiran.'], 0, 'Named contact pada notice merupakan metode Hana.')],
          listening: [question('Apa yang diusulkan Note B?', ['Aplikasi wajib.', 'Rute baru permanen.', 'Layanan pesan telepon.'], 2, 'Tutor mengoreksi bahwa B menawarkan telephone message line.'), question('Mengapa belum dapat menyebut salah satu lebih murah?', ['Kedua usulan sudah gagal.', 'Biaya operasional tidak disediakan kedua sumber.', 'Semua penumpang menolak telepon.'], 1, 'Neither source provides running costs membatasi perbandingan biaya.')]
        },
        output: { speaking: 'Dalam 90 detik, sampaikan dua kesamaan yang terdukung dan satu perbedaan Hana/Iqbal. Jelaskan apa yang tidak dapat disimpulkan tentang kehadiran.', writing: 'Tulis 100–120 kata dengan satu Both dan satu Neither. Sertakan baris tujuan dan metode yang terpisah pada matriks Anda.' },
        review: 'Uji setiap Both dan Neither pada kedua kolom. Bedakan tidak ada bukti hasil dari bukti bahwa hasil buruk.'
      }),
      day({
        title: 'D3 — Kontras menurut kondisi',
        objective: 'Menggunakan whereas untuk membandingkan dua cara pada satu dimensi yang sama.',
        explanation: `Kontras yang adil membandingkan hal sejenis. Jika A dibahas dari sisi waktu, bahas B dari sisi waktu juga; jangan memuji kelebihan A lalu hanya menyebut nama penulis B. Buat satu baris matriks untuk setiap dimensi, misalnya akses, pembaruan, atau kebutuhan relawan.

**Whereas A…, B…** dapat menghubungkan dua posisi berbeda. Tambahkan konteks agar perbedaan masuk akal: sebuah metode mungkin cocok bagi jadwal tetap dan metode lain bagi jadwal berubah. Kontras bukan pertandingan dengan pemenang otomatis. Jangan menyatakan suatu pendekatan lebih efektif jika sumber hanya memberikan alasan, bukan pengukuran hasil.`,
        examples: [pair('Whereas A uses a fixed slot, B allows a movable appointment.', 'Sementara A memakai waktu tetap, B mengizinkan janji yang dapat dipindah.'), pair('The difference matters when work schedules change.', 'Perbedaan itu penting ketika jadwal kerja berubah.')],
        vocabulary: [pair('whereas', 'sedangkan'), pair('dimension', 'aspek perbandingan'), pair('condition', 'kondisi atau syarat')],
        reading: { title: 'When to Offer Advice — original fictional sources by Citra and Malik', text: `Citra's fictional note, “One Regular Advice Hour,” proposes a fixed Thursday session for a community writing desk. Her example concerns visitors with predictable afternoons. A regular slot would be easy to remember, but it would exclude someone working every Thursday. Malik's fictional note, “Appointments by Request,” proposes arranging short appointments after visitors send available times. His example concerns people whose shifts change weekly. Flexible appointments might fit them better, although a coordinator would spend time matching schedules. Neither note measures attendance or staff workload. The sources differ on scheduling, while both assume that someone is available to give advice. They do not compare the quality of the advice itself.` },
        listening: { title: 'Comparing the same dimension', text: `Tutor: You say a printed club guide has clear pictures, whereas a recorded guide was proposed by a musician. Is that a useful contrast?
Learner: Not really. I am comparing format in one source with the author's occupation in the other.
Tutor: Try the fictional sources on the same dimension: changing information.
Learner: The printed guide would require new copies after a route change, whereas a recording would require a new audio file.
Tutor: Can you claim one update is quicker?
Learner: No. The notes do not give preparation times. I can identify different update tasks without inventing a speed comparison.` },
        quizzes: {
          pattern: [question('Kontras mana membandingkan dimensi sama?', ['A opens on Thursday, whereas B arranges appointments.', 'A has a timetable, whereas B was written by a tall person.', 'A concerns access, whereas B has a short title.'], 0, 'Kedua bagian membandingkan penjadwalan.'), question('Kata whereas terutama menandai…', ['Hasil pengukuran.', 'Perbedaan antara dua posisi.', 'Identitas penulis yang tidak diketahui.'], 1, 'Whereas menghubungkan kontras, bukan membuktikan hasil.')],
          reading: [question('Konteks apa yang mendukung usulan Malik?', ['Semua pengunjung bebas Kamis.', 'Tidak ada pemberi saran.', 'Giliran kerja pengunjung berubah tiap minggu.'], 2, 'Fleksibilitas ditawarkan untuk orang dengan shifts berubah.'), question('Apa trade-off appointment fleksibel?', ['Koordinator perlu mencocokkan jadwal.', 'Semua saran pasti buruk.', 'Tidak ada permintaan waktu.'], 0, 'Malik mengakui kebutuhan kerja koordinasi.')],
          listening: [question('Apa yang harus diperbarui pada panduan rekaman?', ['Jabatan penulis.', 'Berkas audio.', 'Warna semua kursi.'], 1, 'Rekaman memerlukan file audio baru setelah perubahan rute.'), question('Apa yang belum dapat dibandingkan?', ['Jenis tugas pembaruan.', 'Adanya panduan cetak.', 'Kecepatan memperbarui kedua format.'], 2, 'Sumber tidak memberi preparation times sehingga klaim kecepatan tidak didukung.')]
        },
        output: { speaking: 'Bandingkan penjadwalan Citra/Malik selama dua menit. Jelaskan siapa mungkin cocok dengan tiap cara serta satu trade-off.', writing: 'Tulis 120–140 kata dengan dua perbandingan pada aspek sama. Gunakan whereas sekali dan simpulan bersyarat, bukan pemenang universal.' },
        review: 'Hubungkan dua sisi setiap kalimat kontras dengan nama dimensi. Bila tidak dapat memberi nama dimensi yang sama, susun ulang perbandingan.'
      }),
      day({
        title: 'D4 — Matriks dukungan dan celah',
        objective: 'Menyusun matriks claim/support/limit dan memperbaiki simpulan yang melebihi sumber.',
        explanation: `Sintesis membutuhkan lebih dari daftar pilihan. Pada setiap sumber, pisahkan klaim, alasan atau contoh pendukung, dan batasan. Dukungan berupa penalaran tetap dapat dibahas, tetapi sebut jenisnya dengan tepat. Contoh rekaan tidak boleh diberi label studi, dan informasi yang tidak diberikan harus tetap kosong atau ditandai.

Sesudah mengisi matriks, uji simpulan Anda: baris mana mendukungnya? **The sources suggest…** dapat merangkum arah gagasan, tetapi bukan izin membuat klaim baru. Jika kedua sumber tidak membahas biaya, hapus simpulan tentang pilihan termurah. Ganti dengan pertanyaan tentang biaya yang perlu diperoleh sebelum keputusan dibuat.`,
        examples: [pair('A offers a practical reason, not measured results.', 'A memberi alasan praktis, bukan hasil pengukuran.'), pair('The sources leave staffing costs unresolved.', 'Sumber-sumber belum menjawab biaya tenaga kerja.')],
        vocabulary: [pair('comparison matrix', 'matriks perbandingan'), pair('support', 'dukungan'), pair('unsupported conclusion', 'simpulan tanpa dukungan')],
        reading: { title: 'Two Ways to Share Equipment — original fictional sources by Putri and Riko', text: `In the fictional memo “Boxes by Activity,” Putri recommends keeping each craft activity's tools in a separate box. Her invented example shows a painting group carrying one box to its table. She argues this would make preparation clearer, but recognises that the same scissors might be needed in several boxes. In “One Shared Tool Wall,” Riko recommends hanging common tools together. His invented example shows groups collecting only the items needed that day. He argues this avoids assigning shared items to one activity, but recognises possible queues at the wall. Neither memo records preparation times, replacement costs, or actual queues. Their reasons concern organisation, not proven savings.` },
        listening: { title: 'Removing an unsupported comparison', text: `Tutor: Your draft says the fictional tool wall is cheaper than the activity boxes. Which source supports that?
Learner: Neither gives costs. I assumed fewer boxes would mean a cheaper system.
Tutor: Can that remain as a source finding?
Learner: No. I will remove it. Putri's box idea supports a clear activity set; Riko's wall idea supports shared access. Both mention practical difficulties.
Tutor: What could you ask next?
Learner: What storage materials would each option require, and what would they cost locally? That is missing information, not a result I already know.
Tutor: Now your matrix can guide a limited comparison instead of hiding a guess.` },
        quizzes: {
          pattern: [question('Apa label tepat untuk contoh yang dibuat penulis?', ['Measured outcome.', 'Invented illustration.', 'Independent scientific proof.'], 1, 'Contoh rekaan menjelaskan alasan tanpa menjadi data penelitian.'), question('Biaya tidak tersedia pada A dan B. Simpulan tepat adalah…', ['A pasti setengah harga B.', 'Keduanya gratis.', 'Perbandingan biaya memerlukan informasi tambahan.'], 2, 'Ketiadaan biaya membatasi simpulan, bukan memberi angka pengganti.')],
          reading: [question('Keterbatasan kotak per aktivitas adalah…', ['Gunting yang sama mungkin dibutuhkan beberapa kotak.', 'Kotak tidak boleh dibawa ke meja.', 'Semua biaya telah dicatat.'], 0, 'Putri mengakui tumpang tindih kebutuhan alat bersama.'), question('Apa risiko wall menurut Riko?', ['Tidak ada alat boleh dibagi.', 'Antrean saat mengambil alat.', 'Semua lukisan wajib sama.'], 1, 'Riko mengenali possible queues at the wall.')],
          listening: [question('Apa yang dihapus Learner?', ['Semua atribusi.', 'Pertanyaan kebutuhan bahan.', 'Klaim wall lebih murah.'], 2, 'Klaim biaya hanya asumsi, bukan informasi sumber.'), question('Apa pertanyaan lanjutan yang relevan?', ['Bahan penyimpanan apa diperlukan dan berapa biaya lokalnya.', 'Berapa hasil eksperimen yang sebenarnya tidak ada.', 'Siapa pasti menyetujui semua rencana.'], 0, 'Pertanyaan ini meminta informasi biaya yang belum disediakan.')]
        },
        output: { speaking: 'Jelaskan dua opsi selama dua menit dari matriks. Setelah itu bantah klaim “the wall is certainly cheaper” dengan alasan berbasis sumber.', writing: 'Buat matriks empat baris: klaim, dukungan, konteks, limit. Tulis sintesis 140–160 kata dan satu pertanyaan keputusan yang belum dapat dijawab.' },
        review: 'Setiap kalimat biaya, kecepatan, atau keberhasilan harus memiliki dukungan yang dapat ditunjuk. Hapus atau ubah menjadi pertanyaan bila dukungan tidak ada.'
      }),
      day({
        title: 'D5 — Sintesis menurut isu, bukan tempelan ringkasan',
        objective: 'Menulis sintesis terorganisasi menurut isu dengan rekomendasi bersyarat dan atribusi dua sumber.',
        explanation: `Sintesis menghubungkan gagasan pada satu isu. Daripada menulis semua tentang A lalu semua tentang B, buat bagian tujuan bersama, perbedaan cara, dan konsekuensi kondisi. Gunakan nama penulis ketika berpindah asal gagasan. **Both**, **whereas**, dan **neither** membantu jika hubungan itu benar-benar didukung matriks.

Akhiri dengan simpulan bersyarat: pilihan mungkin cocok bila kondisi tertentu tersedia. Jika Anda menggabungkan usulan, tandai sebagai rekomendasi sendiri, bukan rencana yang sudah ada dalam dua sumber. Jangan melupakan keterbatasan hanya karena tulisan harus memiliki penutup. Sintesis yang baik dapat menyatakan bahwa keputusan akhir memerlukan informasi tambahan.`,
        examples: [pair('Both notes seek clear feedback, but they differ on timing.', 'Kedua catatan menginginkan umpan balik jelas, tetapi berbeda dalam waktu.'), pair('My combination would need a check of volunteer availability.', 'Gabungan usulan saya memerlukan pemeriksaan ketersediaan relawan.')],
        vocabulary: [pair('synthesis', 'penggabungan berdasarkan hubungan gagasan'), pair('conditional conclusion', 'simpulan bersyarat'), pair('issue', 'isu yang dibandingkan')],
        reading: { title: 'Feedback after a Practice Talk — original fictional sources by Nisa and Wawan', text: `Nisa's fictional source, “Questions Straight Away,” proposes a short question period immediately after each practice talk. Speakers could clarify an unclear point while listeners still remember it. Her example assumes enough time between talks; she admits the next speaker might otherwise lose rehearsal time. Wawan's fictional source, “One Written Response,” proposes asking each listener to leave one written response after the session. Speakers could reread comments later, but an unclear comment would not receive an immediate explanation. Both aim to make feedback usable. Neither compares later speaking performance or records how long feedback takes. A combined approach would be a new recommendation, not a trial reported by either author.` },
        listening: { title: 'Organising a synthesis by issue', text: `Tutor: How will you organise your comparison of fictional visitor guides?
Learner: First by the common aim: helping visitors choose a route. Then by update needs and access conditions, rather than one long section per writer.
Tutor: Keep the sources visible as you move between them.
Learner: I will name Dewi's printed-guide note and Adam's audio-guide note when using their ideas. Neither reports visitor tests.
Tutor: What is your conclusion?
Learner: A printed guide may suit visitors who want to compare routes at once, whereas audio may suit those wanting a spoken explanation. My recommendation would depend on local access checks. It is not a proven ranking.` },
        quizzes: {
          pattern: [question('Susunan mana paling menunjukkan sintesis?', ['Semua A lalu salinan semua B tanpa hubungan.', 'Tujuan bersama, perbandingan waktu, batasan, simpulan bersyarat.', 'Pendapat pribadi tanpa sumber.'], 1, 'Organisasi menurut isu menghubungkan kedua sumber, bukan hanya menempel ringkasan.'), question('Menggabungkan dua metode perlu diberi label…', ['Hasil resmi kedua penulis.', 'Eksperimen selesai.', 'Rekomendasi Anda jika tidak dinyatakan sumber.'], 2, 'Gabungan baru harus dibedakan dari apa yang benar-benar ditulis sumber.')],
          reading: [question('Apa risiko pertanyaan langsung menurut Nisa?', ['Waktu latihan pembicara berikutnya bisa berkurang.', 'Komentar tidak bisa diingat siapa pun.', 'Semua pembicara pasti menolak.'], 0, 'Keterbatasan waktu antar-talks dapat mengurangi rehearsal berikutnya.'), question('Apa kelemahan respons tertulis menurut Wawan?', ['Tidak dapat dibaca ulang.', 'Komentar tidak jelas tidak mendapat penjelasan langsung.', 'Pasti memerlukan internet.'], 1, 'Ketidakjelasan komentar belum bisa dijawab segera.')],
          listening: [question('Apa dua isu perbandingan setelah tujuan?', ['Warna dan panjang nama penulis.', 'Skor resmi dan biaya pasti.', 'Kebutuhan pembaruan dan kondisi akses.'], 2, 'Learner menyebut update needs dan access conditions.'), question('Bagaimana status rekomendasi Learner?', ['Bergantung pemeriksaan lokal, bukan peringkat terbukti.', 'Sudah terbukti dari uji pengunjung.', 'Selalu sama untuk semua tempat.'], 0, 'Penutup mempertahankan syarat dan ketiadaan proven ranking.')]
        },
        output: { speaking: 'Bandingkan Nisa/Wawan 3–4 menit dari matriks. Beri satu kesamaan, dua kontras, limit kedua sumber, dan simpulan yang bergantung kondisi.', writing: 'Tulis sintesis 180–220 kata menurut isu. Sebut dua judul/penulis, bedakan rekomendasi sendiri, lalu catat satu informasi yang masih diperlukan.' },
        review: 'Warna atau garis berbeda dapat menandai ide A, B, dan Anda. Pastikan satu paragraf perbandingan memiliki hubungan nyata, bukan sekadar dua nama.'
      })
    ],
    assessment: {
      title: 'D6 — Sintesis dua sumber yang belum dilatih',
      objective: 'Membandingkan dua sumber baru dengan matriks dan simpulan bersyarat tanpa meminjam isi lama.',
      explanation: `Baca kedua sumber hari keenam dan tentukan pertanyaan yang sama-sama mereka jawab. Isi matriks sebelum membuat pilihan: tujuan, metode, dukungan, konteks, dan batasan. Jangan menganggap kesamaan tujuan berarti kesepakatan metode. Tandai informasi yang tidak disediakan, bukan mengisinya dari bacaan kemarin.

Susun sintesis menurut dua isu yang paling relevan. Gunakan atribusi setiap kali asal gagasan berganti. Jika memberi rekomendasi sendiri, nyatakan syarat serta apa yang belum diketahui. Untuk dialog, catat perbandingan dan limit secara terpisah. Kualitas sintesis terletak pada ketepatan hubungan, bukan banyaknya kata penghubung.`,
      examples: [pair('The sources share a goal but propose different arrangements.', 'Sumber-sumber memiliki tujuan sama tetapi mengusulkan pengaturan berbeda.'), pair('Neither text establishes which option serves more people.', 'Tidak satu pun teks membuktikan pilihan mana melayani lebih banyak orang.')],
      vocabulary: [pair('common focus', 'fokus bersama'), pair('trade-off', 'kompromi keuntungan dan kekurangan'), pair('limited recommendation', 'rekomendasi terbatas')],
      quizzes: { pattern: [question('Sebelum memilih opsi, Anda perlu…', ['Menentukan favorit lalu mengabaikan limit.', 'Membuat perbandingan pada fokus bersama.', 'Memakai hasil tugas kemarin sebagai data baru.'], 1, 'Matriks pada fokus bersama mencegah pemilihan yang mengabaikan sumber.'), question('Kalimat Both harus diperiksa terhadap…', ['Sumber A saja.', 'Pendapat pribadi saja.', 'Kedua sumber.'], 2, 'Both menyatakan sesuatu berlaku pada dua sumber sehingga keduanya harus mendukung.')] },
      output: { speaking: 'Sampaikan sintesis paket baru selama tiga menit: tujuan, dua dimensi kontras, limit, dan pilihan bersyarat. Jawab satu pertanyaan tentang informasi yang kurang selama maksimal satu menit; total rekaman maksimal empat menit.', writing: 'Buat matriks dan sintesis 180–250 kata. Sebut identitas kedua sumber dan satu rekomendasi pribadi yang jelas tidak dilaporkan sebagai hasil.' },
      review: 'Periksa Both/Neither/Whereas satu per satu. Hapus klaim yang tidak dapat dipetakan ke sumber atau ke penalaran sendiri yang diberi label.'
    }
  },
  {
    week: 22,
    days: [
      day({
        title: 'D1 — Posisi terbatas dan alasan relevan',
        objective: 'Menyatakan posisi spesifik dengan because dan membedakannya dari pengulangan pendapat.',
        explanation: `Argumen dimulai dengan posisi yang dapat diperdebatkan. **The club should…** menyarankan tindakan; tambahkan cakupan agar tidak menjadi klaim untuk semua orang. Alasan sesudah **because** harus menjawab mengapa tindakan itu masuk akal, bukan mengulang bahwa tindakan itu baik.

Bandingkan “keep the desk because it is useful” dengan alasan yang menyebut kebutuhan pengunjung. Alasan kedua lebih dapat diperiksa. Namun alasan masuk akal belum sama dengan hasil terbukti. Pada sumber fiktif latihan ini, gunakan alasan sebagai penalaran tentang skenario, bukan bukti bahwa program tertentu telah meningkatkan kemampuan semua peserta.`,
        examples: [pair('The club should keep a short welcome session because newcomers need to locate the equipment.', 'Klub sebaiknya mempertahankan sesi penyambutan singkat karena pendatang baru perlu menemukan alat.'), pair('This recommendation concerns the opening session, not every meeting.', 'Rekomendasi ini menyangkut sesi pembuka, bukan setiap pertemuan.')],
        vocabulary: [pair('position', 'posisi atau pendirian'), pair('reason', 'alasan'), pair('relevant', 'berhubungan langsung')],
        reading: { title: 'Keep the Opening Walk — Tami (original fictional argument)', text: `In this fictional argument, Tami recommends keeping a short walk around the community theatre before new volunteers begin. She argues that people need to identify the costume room, exit, and meeting point before receiving a task. Her imagined example concerns a volunteer carrying costumes to the wrong door because two corridors look similar. Tami does not propose a tour before every rehearsal. She recognises that experienced volunteers may already know the building and could go directly to their task. The text gives a practical reason for an opening walk, but no accident figures or evidence that the walk saves time. The committee has not decided.` },
        listening: { title: 'Replacing a circular reason', text: `Tutor: What is your position on the fictional club's welcome board?
Learner: We should keep it because it is a good board.
Tutor: That repeats your judgement. What need would it address?
Learner: New visitors need to see which activity is open before entering the rooms. A welcome board could put that information in one place.
Tutor: Limit your position.
Learner: The club should try a simple welcome board at the entrance during its next open afternoon because visitors need a clear starting point.
Tutor: Have you proved it works?
Learner: No. That is a reason for a trial, not a claim of measured success.` },
        quizzes: {
          pattern: [question('Alasan mana bukan pengulangan posisi?', ['Keep the board because keeping it is good.', 'Keep the board because visitors need to locate open activities.', 'Keep the board because I say keep it.'], 1, 'Kebutuhan pengunjung menjelaskan relevansi tindakan.'), question('Posisi paling terbatas adalah…', ['Every organisation must always use this.', 'This solves all communication forever.', 'The club should try this at its next open afternoon.'], 2, 'Tempat dan kesempatan tertentu memberi cakupan jelas.')],
          reading: [question('Mengapa Tami mendukung walk pembuka?', ['Relawan baru perlu mengetahui lokasi penting.', 'Semua relawan harus berkeliling setiap hari.', 'Ia sudah mengukur semua kecelakaan.'], 0, 'Alasan terkait identifikasi costume room, exit, dan meeting point.'), question('Siapa boleh langsung ke tugas?', ['Semua orang yang belum pernah datang.', 'Relawan berpengalaman yang sudah mengenal gedung.', 'Hanya komite luar negeri.'], 1, 'Tami membatasi kebutuhan tur bagi mereka yang belum mengenal tempat.')],
          listening: [question('Apa masalah alasan pertama Learner?', ['Terlalu banyak data.', 'Tidak menyebut warna papan.', 'Hanya mengulang penilaian bahwa papan baik.'], 2, 'Because it is a good board tidak menjelaskan kebutuhan atau mekanisme.'), question('Bagaimana status posisi yang diperbaiki?', ['Alasan mencoba, bukan bukti keberhasilan.', 'Hasil percobaan nasional.', 'Kebijakan yang sudah disetujui.'], 0, 'Learner menandai trial dan tidak mengklaim measured success.')]
        },
        output: { speaking: 'Nyatakan posisi tentang opening walk dalam 90 detik, beri satu alasan konkret dan batas kelompok sasaran.', writing: 'Tulis paragraf argumen 90–110 kata dengan posisi, because, contoh beratribusi pada Tami, dan satu batasan. Hindari “good because it is good”.' },
        review: 'Tanyakan mengapa setelah setiap alasan. Bila jawabannya hanya mengulang kata posisi, tulis kebutuhan yang benar-benar dijelaskan sumber.'
      }),
      day({
        title: 'D2 — Dukungan dan jembatan penalaran',
        objective: 'Menghubungkan contoh sumber dengan posisi melalui penjelasan sendiri yang berlabel.',
        explanation: `Menyebut sumber belum cukup untuk membuat argumen. Setelah dukungan, jelaskan mengapa detail itu relevan terhadap posisi Anda. Gunakan tiga langkah: **claim**, **source support**, lalu **explanation**. Kalimat terakhir adalah jembatan penalaran, bukan pengulangan kutipan.

**This matters because…** membantu menjelaskan hubungan tersebut. Bedakan gagasan sumber dari kesimpulan Anda dengan **I therefore suggest…**. Jangan menyimpulkan sebab-akibat atau peningkatan terukur dari contoh fiktif tunggal. Jika sumber hanya menunjukkan kemungkinan masalah, argumen Anda dapat mendukung uji coba terbatas, bukan menyatakan solusi pasti berhasil untuk semua kelompok.`,
        examples: [pair('According to Dito, unclear labels can leave visitors unsure where to queue.', 'Menurut Dito, label tidak jelas dapat membuat pengunjung ragu harus antre di mana.'), pair('This matters because an instruction is useful only if visitors can identify the right place.', 'Hal ini penting karena instruksi berguna hanya jika pengunjung dapat mengenali tempat yang benar.')],
        vocabulary: [pair('source support', 'dukungan dari sumber'), pair('reasoning link', 'hubungan penalaran'), pair('therefore', 'karena itu')],
        reading: { title: 'A Name on Each Station — Dito (original fictional memo)', text: `Dito's fictional memo describes an imagined book-repair event. Visitors see signs saying “start here” on two different tables and ask which one handles new arrivals. Dito recommends naming one table “welcome” and the other “repairs in progress.” He argues that labels should match the different functions of the stations. He has not counted visitor questions or compared alternative wording. The memo also notes that a volunteer must remain available for visitors who cannot read the signs. A learner using this source could argue for checking the clarity of station names, but could not claim the labels have already reduced queues or replaced the need for assistance.` },
        listening: { title: 'Explaining why a source detail matters', text: `Tutor: You cited the fictional story of a visitor who could not find the welcome table. How does it support your proposal?
Learner: It proves every visitor dislikes our event.
Tutor: The source does not say that. Explain the connection more carefully.
Learner: The example shows how two similar signs could create uncertainty. This matters because visitors need to distinguish arrival instructions from repair work. I therefore suggest checking the station names before the next event.
Tutor: Is that your suggestion or a reported result?
Learner: My suggestion, based on the fictional memo. We would still need to observe how visitors understand the names.` },
        quizzes: {
          pattern: [question('Apa fungsi “This matters because…”?', ['Menjelaskan relevansi dukungan terhadap posisi.', 'Menciptakan penelitian baru.', 'Menghapus kebutuhan menyebut sumber.'], 0, 'Frasa ini membangun jembatan penalaran setelah dukungan.'), question('Satu contoh fiktif tentang kebingungan mendukung…', ['Klaim semua pengunjung membenci acara.', 'Alasan memeriksa kejelasan nama, bukan hasil pasti.', 'Angka penurunan antrean 90 persen.'], 1, 'Dukungan terbatas harus menghasilkan klaim yang sepadan.')],
          reading: [question('Apa masalah dua tanda “start here”?', ['Keduanya menyebut jam tutup.', 'Keduanya terlalu mahal menurut data.', 'Pengunjung tidak tahu meja penerima kedatangan.'], 2, 'Fungsi meja berbeda tetapi tanda sama membuat urutan tidak jelas.'), question('Mengapa relawan masih diperlukan?', ['Sebagian pengunjung tidak dapat membaca tanda.', 'Semua label telah dihapus.', 'Tidak ada kegiatan perbaikan.'], 0, 'Memo mempertahankan bantuan bagi pengunjung yang tidak dapat membaca.')],
          listening: [question('Apa perbaikan Learner terhadap klaim awal?', ['Semua pengunjung telah dinilai.', 'Contoh menunjukkan kemungkinan ketidakjelasan, bukan ketidaksukaan semua orang.', 'Tidak ada alasan untuk memeriksa tanda.'], 1, 'Respons baru membatasi kesimpulan pada masalah yang benar-benar ditunjukkan contoh.'), question('Apa yang masih diperlukan?', ['Janji semua orang langsung paham.', 'Nama peneliti rekaan.', 'Pengamatan pemahaman pengunjung terhadap nama meja.'], 2, 'Learner mengakui perlunya observe understanding sebelum menyatakan hasil.')]
        },
        output: { speaking: 'Berikan argumen dua menit dengan urutan posisi–dukungan Dito–penjelasan Anda. Sebut satu klaim hasil yang belum boleh dibuat.', writing: 'Tulis 120–150 kata. Tandai [sumber] dan [penalaran saya] pada draf, lalu pastikan pembaca dapat membedakan keduanya dalam versi bersih.' },
        review: 'Cek apakah kalimat setelah dukungan menjelaskan hubungannya. Hapus generalisasi semua pengunjung yang tidak terdapat dalam sumber.'
      }),
      day({
        title: 'D3 — Keberatan yang disajikan dengan adil',
        objective: 'Merumuskan kontra-argumen terkuat tanpa meremehkan kelompok yang terdampak.',
        explanation: `Kontra-argumen bukan pendapat lemah yang sengaja dibuat mudah dikalahkan. Tanyakan siapa yang mungkin dirugikan oleh posisi Anda dan alasan masuk akal mereka. **A reasonable concern is that…** memperkenalkan keberatan tanpa menyerang orang. Jangan mengubah “sebagian tidak bisa hadir” menjadi “mereka tidak mau belajar”.

Gunakan sumber tandingan untuk memeriksa apa yang sungguh dikatakan. Akui kelebihan yang relevan sebelum menjawabnya pada tahap berikut. Keberatan yang adil dapat mempersempit posisi Anda. Tujuannya bukan memenangkan perdebatan dengan kata keras, tetapi membuat rekomendasi lebih dapat dinilai oleh pembaca yang memiliki kebutuhan berbeda.`,
        examples: [pair('A reasonable concern is that a fixed meeting excludes shift workers.', 'Keberatan yang masuk akal ialah rapat tetap menyisihkan pekerja bergilir.'), pair('Supporters of written comments value time to consider a response.', 'Pendukung komentar tertulis menghargai waktu untuk mempertimbangkan tanggapan.')],
        vocabulary: [pair('counterargument', 'argumen tandingan'), pair('fair representation', 'penyajian yang adil'), pair('affected group', 'kelompok terdampak')],
        reading: { title: 'A Shared Review Session? — original fictional sources by Erna and Fajar', text: `Erna's fictional proposal, “Review Together,” recommends one live session to discuss a club newsletter draft. Members could resolve conflicting suggestions while everyone hears the same explanation. Her example assumes members share a free evening. Fajar's fictional response, “Time to Think,” argues that members working late still need a way to comment. He favours a day for written responses, especially when a difficult paragraph needs careful reading. He recognises that replies may arrive at different times and delay the final version. Neither writer says the other group is careless. Neither compares the quality of published newsletters. Their disagreement concerns access and response time, not members' motivation.` },
        listening: { title: 'Removing an unfair objection', text: `Tutor: State the objection to your fictional Saturday workshop.
Learner: People who object are lazy and do not care about the club.
Tutor: That attacks people rather than their reason. The note says some members work on Saturdays.
Learner: Then a fair objection is that a Saturday session would exclude members whose jobs require weekend attendance.
Tutor: Does that mean they oppose learning?
Learner: No. Their available time differs. I should explain that before considering another access option.
Tutor: Good. A useful argument addresses the strongest concern, not a weaker claim invented for an easy answer.` },
        quizzes: {
          pattern: [question('Keberatan yang adil adalah…', ['Shift workers are lazy.', 'People who disagree hate learning.', 'A fixed meeting may exclude people working then.'], 2, 'Kalimat terakhir menguraikan kondisi nyata tanpa menyerang motivasi.'), question('Tujuan kontra-argumen dalam tulisan adalah…', ['Menghadirkan alasan tandingan yang relevan untuk dijawab.', 'Mengejek kelompok berbeda.', 'Menghapus semua batasan posisi.'], 0, 'Argumen tandingan menguji posisi secara substantif.')],
          reading: [question('Apa yang terutama ditekankan Fajar?', ['Semua anggota harus bicara cepat.', 'Akses komentar bagi anggota yang bekerja larut dan perlu berpikir.', 'Newsletter pasti sudah berkualitas tinggi.'], 1, 'Fajar membahas waktu serta akses respons, bukan kemalasan.'), question('Keterbatasan respons tertulis apa yang diakui?', ['Tidak bisa dibaca teliti.', 'Tidak ada orang memiliki jadwal.', 'Balasan berbeda waktu dapat menunda versi akhir.'], 2, 'Fajar mengakui penundaan final version.')],
          listening: [question('Apa alasan nyata sebagian orang tidak dapat hadir Sabtu?', ['Mereka bekerja pada Sabtu.', 'Mereka tidak peduli menurut bukti.', 'Mereka menolak semua klub.'], 0, 'Tutor mengoreksi serangan pribadi dengan kondisi pekerjaan.'), question('Apa yang sebaiknya ditanggapi?', ['Klaim lemah yang Anda ciptakan.', 'Keberatan paling kuat tentang akses waktu.', 'Penampilan orang yang tidak setuju.'], 1, 'Respons yang bermakna perlu menanggapi concern paling kuat.')]
        },
        output: { speaking: 'Sampaikan posisi pilihan Anda tentang review newsletter selama dua menit, lalu jelaskan kontra-argumen terkuat seolah pemiliknya hadir mendengar.', writing: 'Tulis 150–180 kata: posisi awal dan paragraf kontra-argumen beratribusi. Belum perlu memaksakan solusi; akhiri dengan kebutuhan yang harus dijawab.' },
        review: 'Hapus kata yang menyerang sifat atau motivasi. Periksa apakah pemilik keberatan dapat mengenali alasannya dalam parafrase Anda.'
      }),
      day({
        title: 'D4 — Although dan jawaban bersyarat',
        objective: 'Menjawab keberatan dengan modifikasi yang relevan serta menyebut masalah yang masih tersisa.',
        explanation: `Jawaban yang kuat tidak harus menghapus semua kelemahan. **Although…** mengakui bagian keberatan yang benar, lalu kalimat utama menawarkan respons. Pastikan respons menyentuh masalah yang sama. Jika keberatan tentang orang tidak dapat hadir, mengganti warna ruangan tidak menjawabnya.

Gunakan **provided that** untuk syarat penting dan **may reduce** untuk manfaat yang belum diuji. Jelaskan sisa batasan setelah modifikasi; akses tertulis misalnya belum tentu membantu orang yang membutuhkan penjelasan lisan. Hindari menganggap semua keberatan selesai hanya karena satu pilihan tambahan tersedia. Posisi dapat tetap sementara sampai kebutuhan lain diperiksa.`,
        examples: [pair('Although one session excludes some members, a later response period may widen access.', 'Walaupun satu sesi menyisihkan sebagian anggota, masa respons lanjutan mungkin memperluas akses.'), pair('The trial may be workable, provided that someone answers delayed questions.', 'Uji coba mungkin dapat dijalankan, asalkan ada yang menjawab pertanyaan susulan.')],
        vocabulary: [pair('concession', 'pengakuan atas keberatan'), pair('response', 'jawaban terhadap keberatan'), pair('provided that', 'asalkan')],
        reading: { title: 'Quiet Time without Closing Discussion — Luki (original fictional proposal)', text: `Luki's fictional proposal recommends reserving one study-room table for quiet individual work from six to seven. A discussion group objects that the room has few tables. Luki accepts that a permanent reservation would reduce its options. He revises the plan to a one-hour trial twice a week, provided that the coordinator checks whether another table remains available for discussion. He does not promise that every visitor will find a seat. The proposal also leaves unresolved what should happen when an unusually large group arrives. Luki asks for comments before a longer arrangement is considered. No trial has measured demand for quiet or discussion space.` },
        listening: { title: 'Does the response answer the objection?', text: `Tutor: Your fictional booking desk opens only at noon. What is the access objection?
Learner: Some members work through lunch and cannot come.
Tutor: Your proposed answer is a brighter sign. Does it address their time problem?
Learner: No. Although a sign may explain the hours, it cannot change when members are free. I could propose requests by message, provided that a volunteer checks and answers them.
Tutor: What limit remains?
Learner: That would not serve everyone without message access. I would keep the plan temporary and ask what other contact method is needed before making it permanent.` },
        quizzes: {
          pattern: [question('Jawaban relevan untuk keberatan jam buka adalah…', ['Menambah pilihan permintaan di luar jam itu.', 'Mengecat dinding tanpa mengubah akses.', 'Menyebut semua anggota malas.'], 0, 'Respons perlu menanggapi keterbatasan waktu, bukan masalah berbeda.'), question('Provided that menandai…', ['Hasil yang sudah terjadi.', 'Syarat berlakunya usulan.', 'Pendapat sumber yang tidak dikenal.'], 1, 'Frasa tersebut memperjelas kondisi yang diperlukan.')],
          reading: [question('Bagaimana Luki mengubah reservasi?', ['Menjadi permanen di seluruh ruangan.', 'Membatalkan semua diskusi.', 'Menjadi satu jam dua kali seminggu dengan pemeriksaan meja lain.'], 2, 'Modifikasi membatasi durasi dan mensyaratkan ketersediaan ruang diskusi.'), question('Apa yang masih belum terselesaikan?', ['Kedatangan kelompok yang sangat besar.', 'Nama penulis proposal.', 'Adanya keberatan kelompok diskusi.'], 0, 'Proposal masih menyisakan kasus unusually large group.')],
          listening: [question('Mengapa tanda lebih terang tidak cukup?', ['Tanda pasti selalu buruk.', 'Tanda tidak mengubah waktu luang pekerja.', 'Tidak ada jam buka.'], 1, 'Keberatan menyangkut ketersediaan waktu, bukan keterbacaan tanda.'), question('Siapa masih mungkin belum terlayani oleh pesan?', ['Relawan yang menjawab.', 'Anggota yang memakai pesan.', 'Anggota tanpa akses pesan.'], 2, 'Learner mengakui batas metode tambahan itu.')]
        },
        output: { speaking: 'Jawab keberatan terhadap quiet table selama dua menit: akui masalah, tawarkan modifikasi bersyarat, dan sebut satu sisa batasan.', writing: 'Tulis 180–220 kata dengan although, provided that, dan pertanyaan yang masih terbuka. Jelaskan bagaimana respons mengatasi masalah yang sama dengan keberatan.' },
        review: 'Hubungkan setiap respons dengan kata inti keberatan. Bila topiknya bergeser, perbaiki respons sebelum mengoreksi grammar kecil.'
      }),
      day({
        title: 'D5 — Argumen dua sumber yang dapat dipertanggungjawabkan',
        objective: 'Menyusun posisi, dukungan, kontra-argumen, dan jawaban bersyarat tanpa melebihkan bukti.',
        explanation: `Gabungkan unsur argumen dalam urutan yang membantu pembaca menilai keputusan: posisi terbatas, alasan dengan dukungan, penjelasan, keberatan adil, dan respons bersyarat. Anda boleh menggunakan dua sumber untuk mendukung bagian berbeda; tidak perlu memaksa keduanya menyetujui posisi Anda.

Pada revisi isi, beri tanda setiap klaim hasil seperti **improves**, **saves**, atau **causes**. Tanyakan apakah sumber benar-benar mengukurnya. Jika tidak, hapus, ubah menjadi kemungkinan, atau jadikan pertanyaan pemeriksaan. Setelah logika jelas, perbaiki dua bentuk bahasa yang paling memengaruhi makna, terutama modal, rujukan subjek, dan syarat.`,
        examples: [pair('A supports advance planning, while B highlights unexpected needs.', 'A mendukung perencanaan awal, sementara B menyoroti kebutuhan mendadak.'), pair('I recommend a limited trial rather than claiming that the issue is solved.', 'Saya merekomendasikan uji coba terbatas, bukan mengklaim masalah selesai.')],
        vocabulary: [pair('rebuttal', 'jawaban terhadap argumen tandingan'), pair('evidence audit', 'pemeriksaan dukungan klaim'), pair('conditional position', 'posisi bersyarat')],
        reading: { title: 'Reserving a Practice Keyboard — original fictional sources by Rara and Ilham', text: `Rara's fictional source, “Book Before You Travel,” proposes advance reservations for a community keyboard. Learners making a special trip could know when practice time is available. She recognises that an unused reservation would block others and proposes releasing it after ten minutes. Ilham's fictional source, “A Chance on Arrival,” favours access without reservations so visitors with unexpected free time can try the instrument. He recognises they could arrive while it is already occupied. Both discuss fair access, but neither records actual usage, travel time, or missed sessions. A combined trial would require its own rules; neither text reports that a mixed arrangement has been tested.` },
        listening: { title: 'Auditing a complete argument', text: `Tutor: Give your fictional keyboard recommendation.
Learner: I would try reservations for half the available slots and leave the rest open. Rara's note supports planning before travel, while Ilham's note highlights unplanned free time.
Tutor: What is the strongest objection?
Learner: Splitting slots could make the arrangement harder to understand. Although the combination may widen options, it needs a simple notice and someone to answer questions.
Tutor: Does it double access?
Learner: We cannot say that. Neither source has usage figures. My proposal would need a trial, and I would check whether people understand which slots require reservations before claiming an improvement.` },
        quizzes: {
          pattern: [question('Klaim mana membutuhkan pengukuran yang tidak diberikan?', ['The proposals consider different access needs.', 'A mixed system doubles access.', 'A trial would need clear instructions.'], 1, 'Doubles menyatakan hasil kuantitatif yang tidak ada dalam sumber.'), question('Revisi sebaiknya memprioritaskan…', ['Warna judul sebelum isi.', 'Menghapus semua keberatan.', 'Logika dan makna sebelum grammar kecil.'], 2, 'Argumen harus akurat dan relevan sebelum dipoles.')],
          reading: [question('Apa solusi Rara terhadap reservasi tidak dipakai?', ['Melepas reservasi setelah sepuluh menit.', 'Mengunci alat sepanjang hari.', 'Melarang orang melakukan perjalanan.'], 0, 'Rara menawarkan release setelah sepuluh menit sebagai usulan.'), question('Kelemahan akses langsung yang diakui Ilham adalah…', ['Semua orang pasti mendapat alat.', 'Alat mungkin sedang dipakai ketika pengunjung datang.', 'Reservasi sudah wajib dalam usulannya.'], 1, 'Ilham mengakui ketidakpastian availability saat kedatangan.')],
          listening: [question('Apa keberatan terhadap sistem campuran?', ['Tidak memerlukan informasi.', 'Sudah terbukti gagal.', 'Bisa lebih sulit dipahami.'], 2, 'Learner mengakui aturan campuran dapat membingungkan.'), question('Apa pemeriksaan yang diusulkan?', ['Apakah orang memahami slot yang perlu reservasi.', 'Apakah akses sudah pasti dua kali lipat.', 'Apakah semua hasil penelitian nyata benar.'], 0, 'Pemeriksaan berfokus pada pemahaman aturan sebelum klaim perbaikan.')]
        },
        output: { speaking: 'Sampaikan argumen tiga menit tentang keyboard. Rujuk dua sumber, beri kontra-argumen adil dan respons bersyarat. Tambahkan jawaban spontan tentang bukti yang kurang selama maksimal satu menit; total rekaman maksimal empat menit.', writing: 'Tulis 250–300 kata berisi posisi, dua alasan, dukungan beratribusi, kontra-argumen, respons, dan simpulan terbatas. Catat dua revisi makna dari draf pertama.' },
        review: 'Tunjukkan sumber atau label penalaran sendiri untuk setiap alasan. Pastikan respons tidak mengaku menghapus semua risiko.'
      })
    ],
    assessment: {
      title: 'D6 — Argumen transfer dengan keberatan baru',
      objective: 'Membangun argumen dari dua sumber assessment dengan kontra-argumen dan respons yang sepadan.',
      explanation: `Gunakan sumber baru untuk menentukan posisi Anda, bukan menyalin solusi campuran dari latihan. Buat catatan klaim, dukungan, dan batasan masing-masing penulis. Pilih keberatan terkuat terhadap posisi sendiri dan nyatakan tanpa serangan pribadi. Sesudah itu rancang respons yang menanggapi masalah yang sama.

Batasi simpulan sesuai informasi. Kata **may** tidak menyulap dugaan menjadi bukti; tetap jelaskan dasar penalarannya. Jika informasi tidak ada, sebut pemeriksaan yang diperlukan. Revisi isi lebih dahulu, lalu bentuk bahasa yang mengubah maksud. Simpan draf dan rekaman awal agar penalaran sebelum serta sesudah revisi dapat dibandingkan.`,
      examples: [pair('A reasonable objection concerns access for another group.', 'Keberatan yang masuk akal menyangkut akses kelompok lain.'), pair('Although the adjustment may help, one limitation remains.', 'Walaupun penyesuaian mungkin membantu, satu batasan masih tersisa.')],
      vocabulary: [pair('strong objection', 'keberatan yang kuat'), pair('proportionate claim', 'klaim sepadan dengan dukungan'), pair('remaining limit', 'batasan yang tersisa')],
      quizzes: { pattern: [question('Respons terbaik terhadap keberatan perlu…', ['Mengatasi masalah yang sama dan mengakui batasnya.', 'Mengganti topik agar tampak menang.', 'Mengatakan semua lawan salah tanpa alasan.'], 0, 'Respons harus relevan dan tidak menutupi kelemahan tersisa.'), question('May dalam argumen…', ['Menggantikan seluruh kebutuhan dukungan.', 'Membatasi kepastian tetapi tetap membutuhkan alasan.', 'Membuktikan semua hasil sudah diukur.'], 1, 'Modal membantu membatasi klaim, bukan menciptakan bukti.')] },
      output: { speaking: 'Sampaikan argumen tiga menit dari paket baru, lalu jawab singkat: siapa belum terlayani, keberatan apa terkuat, serta bukti apa diperlukan. Batasi seluruh rekaman maksimal lima menit. Jangan menghafal jawaban sebelumnya.', writing: 'Tulis 250–400 kata dengan atribusi dua sumber, posisi, dukungan, kontra-argumen adil, respons bersyarat, dan simpulan. Simpan draf serta dua revisi logika atau makna.' },
      review: 'Periksa hubungan dukungan–alasan–posisi. Tandai klaim hasil tanpa pengukuran dan hapus atau ubah menjadi pertanyaan pemeriksaan.'
    }
  },
  {
    week: 23,
    days: [
      day({
        title: 'D1 — Pertanyaan dan peta presentasi',
        objective: 'Membuka presentasi dengan pertanyaan utama, cakupan, dan urutan dua poin.',
        explanation: `Presentasi membantu pendengar mengikuti suatu pertanyaan, bukan mendengar semua catatan Anda. Mulai dengan **My question is…**, jelaskan cakupan, lalu beri peta **First… then…**. Pilih dua poin yang benar-benar membantu menjawab pertanyaan. Pembuka tidak perlu memuat seluruh bukti atau simpulan terperinci.

Sesuaikan cakupan dengan waktu. Jika topiknya peminjaman alat, jelaskan apakah Anda membahas cara memesan atau cara memperbaiki alat. Batas topik mencegah pendengar mengira presentasi menjawab hal lain. Gunakan sumber fiktif sebagai bahan penalaran lokal, bukan sebagai penelitian nyata. Latih pembuka dari kata kunci agar tidak terdengar seperti membaca esai.`,
        examples: [pair('My question is how visitors should find the right activity.', 'Pertanyaan saya ialah bagaimana pengunjung menemukan kegiatan yang tepat.'), pair('First, I will compare the options; then, I will discuss their limits.', 'Pertama saya akan membandingkan pilihan; lalu saya akan membahas batasannya.')],
        vocabulary: [pair('opening', 'pembuka'), pair('road map', 'peta urutan pembahasan'), pair('scope', 'cakupan')],
        reading: { title: 'An Opening with a Purpose — Yasmin (original fictional speaker note)', text: `Yasmin's fictional speaker note prepares a talk for a community arts centre. Her question is how first-time visitors should choose between activities. She will compare a colour-coded entrance board with a short welcome conversation. She says clearly that she is discussing arrival information, not the quality of the activities. Her opening gives the order: first the two methods, then the conditions each requires, and finally a limited recommendation. She leaves detailed examples for the main section. The note does not claim either method has been tested. Yasmin wants listeners to know what decision they are considering before they hear her reasons.` },
        listening: { title: 'Shortening an overloaded opening', text: `Tutor: Start your fictional presentation about the club cupboard.
Learner: The cupboard was bought many years ago, and the club has several interesting members, and there are blue boxes inside—
Tutor: Pause. What question will you answer?
Learner: How should members find shared materials without opening every box?
Tutor: Give your audience a route through the talk.
Learner: I will compare picture labels and a written contents list. First I will explain access needs, then update requirements. I am discussing finding materials, not buying new supplies.
Tutor: That opening gives purpose and scope. The cupboard's history can wait unless it supports a later point.` },
        quizzes: {
          pattern: [question('Pembuka paling membantu pendengar adalah…', ['Daftar semua detail tanpa tujuan.', 'Pertanyaan, cakupan, dan urutan poin.', 'Jawaban semua pertanyaan sebelum topik.'], 1, 'Pembuka memberi arah sebelum pendengar menerima rincian.'), question('Kalimat mana membatasi cakupan?', ['This talk concerns finding materials, not buying supplies.', 'Everything about every club will be explained.', 'There are many things everywhere.'], 0, 'Kalimat pertama menjelaskan apa yang dibahas dan tidak dibahas.')],
          reading: [question('Apa pertanyaan Yasmin?', ['Siapa pelukis terbaik.', 'Berapa umur gedung.', 'Bagaimana pengunjung pertama memilih kegiatan.'], 2, 'Pertanyaan berfokus pada arrival information bagi first-time visitors.'), question('Apa yang sengaja tidak dibahas?', ['Kondisi setiap metode.', 'Kualitas aktivitas.', 'Rekomendasi terbatas.'], 1, 'Yasmin membedakan pemilihan kegiatan dari kualitas kegiatan.')],
          listening: [question('Apa dua pilihan yang dibandingkan?', ['Label gambar dan daftar isi tertulis.', 'Membeli dan menjual lemari.', 'Sejarah dan nama semua anggota.'], 0, 'Learner memperjelas perbandingan picture labels dan written contents list.'), question('Mengapa cerita umur lemari ditunda?', ['Semua sejarah selalu salah.', 'Pendengar tidak boleh mendengar contoh.', 'Belum jelas relevansinya terhadap pertanyaan utama.'], 2, 'Detail dapat menunggu kecuali mendukung poin utama.')]
        },
        output: { speaking: 'Rekam pembuka 60–90 detik tentang cara pengunjung menemukan kegiatan. Nyatakan pertanyaan, batas topik, dan dua poin tanpa membaca paragraf penuh.', writing: 'Buat outline empat baris dan catatan pembuka 60–80 kata. Hapus satu detail yang tidak membantu pertanyaan; jelaskan alasannya.' },
        review: 'Dengarkan 20 detik pertama: apakah pertanyaan terdengar jelas sebelum latar panjang? Tandai bagian yang dapat dipindah ke isi.'
      }),
      day({
        title: 'D2 — Sumber terdengar saat ide digunakan',
        objective: 'Menyebut identitas sumber secara lisan dan membedakan contoh simulasi dari hasil penelitian.',
        explanation: `Pendengar tidak dapat memeriksa catatan kaki saat Anda berbicara. Sebut nama dan judul singkat ketika memakai gagasan sumber: **In “judul,” penulis proposes…**. Setelah itu, gunakan **that note** bila rujukannya tetap jelas. Jangan menyebut semua sumber hanya di akhir sehingga asal tiap ide kabur.

Angka dalam contoh harus membawa label dan statusnya. Katakan **In an invented example…**, bukan **Research shows…** jika sumber adalah skenario fiktif. Catatan pembicara dapat diberi tanda A, B, atau “my proposal” untuk membantu atribusi. Anda tidak perlu membaca daftar identitas panjang, tetapi pendengar harus dapat membedakan asal gagasan.`,
        examples: [pair('In “Check the Back Row,” Reno proposes a sound check.', 'Dalam “Check the Back Row”, Reno mengusulkan pemeriksaan suara.'), pair('The invented example involves two listeners, not measured audience results.', 'Contoh rekaan melibatkan dua pendengar, bukan hasil pengukuran audiens.')],
        vocabulary: [pair('oral attribution', 'penyebutan sumber secara lisan'), pair('speaker notes', 'catatan pembicara'), pair('simulation', 'simulasi')],
        reading: { title: 'Checking a Talk Before the Event — original fictional briefs by Reno and Siska', text: `Reno's fictional brief, “Check the Back Row,” recommends testing a microphone with two listeners standing at the back of a hall. His invented example concerns an event with borrowed equipment. The check could reveal an immediate sound problem, but it would not reproduce the noise of a full audience. Siska's fictional brief, “Try the Explanation,” recommends telling the main idea to one listener before preparing slides. A listener could ask about an unclear term, but one response would not represent every visitor. Neither brief measures presentation success. A speaker using them should name the writer when moving from a sound check to an explanation check.` },
        listening: { title: 'Repairing invisible attribution', text: `Tutor: You said “they recommend testing everything.” Who are they?
Learner: I combined two fictional notes without naming them.
Tutor: Try again so listeners can follow the sources.
Learner: In “Check the Back Row,” Reno proposes a microphone check with two listeners. In “Try the Explanation,” Siska proposes checking the main idea with one listener. My recommendation is to consider both checks if time permits.
Tutor: Are the numbers research results?
Learner: No. They belong to invented examples. Neither source measures presentation success, and my combination is a proposal rather than a tested package.` },
        quizzes: {
          pattern: [question('Kapan sumber sebaiknya disebut?', ['Hanya jika audiens marah.', 'Tidak perlu jika ide diparaphrase.', 'Saat gagasannya digunakan, terutama ketika sumber berganti.'], 2, 'Atribusi lisan menjaga asal ide tetap terdengar.'), question('Pengantar tepat untuk angka rekaan adalah…', ['In an invented example, two listeners check the sound.', 'Research has proved this with two real participants.', 'All audiences improve by two levels.'], 0, 'Status contoh dinyatakan tanpa mengklaim data nyata.')],
          reading: [question('Apa batas microphone check Reno?', ['Tidak bisa memakai pendengar.', 'Tidak meniru kebisingan audiens penuh.', 'Sudah mengukur keberhasilan seluruh presentasi.'], 1, 'Dua pendengar di belakang tidak mereproduksi noise ketika hall penuh.'), question('Apa yang diperiksa pada usulan Siska?', ['Jumlah kursi aula.', 'Harga mikrofon.', 'Kejelasan gagasan utama kepada satu pendengar.'], 2, 'Siska memprioritaskan explanation sebelum slides.')],
          listening: [question('Apa masalah kata “they” pada awal?', ['Asal dua gagasan tidak jelas.', 'Semua pembicara harus bernama sama.', 'Kata itu selalu dilarang dalam bahasa Inggris.'], 0, 'Rujukan kabur muncul karena dua sumber digabung tanpa identitas.'), question('Bagaimana kombinasi kedua check dilabeli?', ['Hasil eksperimen selesai.', 'Rekomendasi Learner yang belum diuji sebagai paket.', 'Kewajiban yang dilaporkan Siska.'], 1, 'Learner memisahkan my recommendation dari isi dan hasil sumber.')]
        },
        output: { speaking: 'Sampaikan isi 2–3 menit dengan atribusi Reno dan Siska pada saat idenya digunakan. Sebut angka beserta status contoh rekaan.', writing: 'Buat catatan pembicara maksimal 100 kata dengan tanda A/B/usulan saya. Tulis dua kalimat atribusi lisan yang tidak terdengar seperti daftar pustaka panjang.' },
        review: 'Putar rekaman tanpa melihat outline. Catat apakah asal setiap ide masih dapat dikenali dari bunyi saja.'
      }),
      day({
        title: 'D3 — Transisi dan simpulan yang menjawab pertanyaan',
        objective: 'Menghubungkan poin dengan signposting dan menutup dengan rekomendasi terbatas.',
        explanation: `Penanda arah membantu pendengar memahami hubungan, bukan sekadar menghitung poin. **Turning to access…** memperkenalkan aspek baru; **In contrast…** menandai perbedaan; **The main limitation is…** memberi bobot pada batasan. Pilih penanda yang sesuai hubungan logis, bukan memasukkannya di setiap kalimat.

Simpulan kembali pada pertanyaan pembuka. Ringkas alasan utama, nyatakan pilihan bersyarat, dan sebut langkah informasi berikutnya. Jangan memasukkan bukti baru pada penutup karena pendengar belum mendapat waktu menilainya. Jika tidak ada pemenang yang didukung sumber, simpulan dapat menjelaskan kondisi yang harus diperiksa sebelum memilih.`,
        examples: [pair('Turning to updates, the two formats require different work.', 'Beralih ke pembaruan, kedua format membutuhkan pekerjaan berbeda.'), pair('To answer my opening question, I recommend a trial under these conditions.', 'Untuk menjawab pertanyaan pembuka saya, saya merekomendasikan uji coba dengan syarat ini.')],
        vocabulary: [pair('transition', 'peralihan antarbagian'), pair('conclusion', 'simpulan'), pair('signposting', 'penanda arah pembicaraan')],
        reading: { title: 'A Route through the Main Section — Gita (original fictional outline)', text: `Gita's fictional outline asks how a small exhibition should explain its displays. She compares short wall texts with a staffed explanation point. Her first section concerns access without waiting: wall texts remain available, whereas a person may already be helping someone. Her second section concerns unexpected questions: a helper could respond, whereas a fixed text cannot. Gita marks the transition “Turning to questions” so the audience knows the dimension has changed. Her conclusion recommends checking volunteer availability before choosing a staffed point. She does not add new claims about visitor learning in the final sentence. The outline is a reasoned plan, not a tested exhibition report.` },
        listening: { title: 'Closing without adding new evidence', text: `Tutor: Finish your fictional talk about printed and spoken instructions.
Learner: To conclude, spoken instructions increase success by seventy percent.
Tutor: That number was not in either source or your main section.
Learner: I should remove it. To answer my opening question, I suggest a printed basic guide with a person available for questions, provided that a helper can attend.
Tutor: State the limit before ending.
Learner: Neither note tests the combined approach. We would need to check whether visitors can find the guide and whether help is available. That is a proposal for review, not proof of better learning.` },
        quizzes: {
          pattern: [question('“Turning to questions” berfungsi untuk…', ['Mengubah contoh menjadi data.', 'Menandai perpindahan aspek pembahasan.', 'Menjamin jawaban tersedia.'], 1, 'Frasa itu menunjukkan dimensi berikutnya bagi pendengar.'), question('Apa yang tidak sebaiknya muncul pertama kali di simpulan?', ['Jawaban singkat pertanyaan utama.', 'Syarat rekomendasi.', 'Angka bukti baru yang belum dibahas.'], 2, 'Bukti baru perlu dikembangkan dalam isi, bukan disisipkan tanpa penjelasan di penutup.')],
          reading: [question('Apa aspek bagian pertama Gita?', ['Akses penjelasan tanpa menunggu.', 'Harga cat dinding.', 'Kualitas belajar yang sudah diuji.'], 0, 'Bagian pertama membandingkan availability teks dan orang.'), question('Apa yang harus diperiksa sebelum memilih staffed point?', ['Jumlah jurnal nyata.', 'Ketersediaan relawan.', 'Angka peningkatan kemampuan pasti.'], 1, 'Simpulan mensyaratkan volunteer availability.')],
          listening: [question('Mengapa angka tujuh puluh persen dihapus?', ['Terlalu kecil untuk presentasi.', 'Semua angka dilarang.', 'Tidak ada dalam sumber maupun isi presentasi.'], 2, 'Angka itu rekaan tanpa dukungan dan baru muncul di penutup.'), question('Bagaimana status gabungan panduan dan helper?', ['Usulan yang perlu ditinjau, belum diuji.', 'Hasil terbukti dari dua catatan.', 'Program yang sudah diwajibkan.'], 0, 'Learner menegaskan combined approach belum diuji.')]
        },
        output: { speaking: 'Buat isi dan penutup 3 menit tentang wall text/staffed point dengan dua transisi dan simpulan yang menjawab pertanyaan awal.', writing: 'Susun outline lima bagian dan catatan maksimal 120 kata. Garis bawahi transisi dan beri kotak pada syarat simpulan. Jangan menambah bukti baru di penutup.' },
        review: 'Apakah setiap transisi menandai hubungan yang benar? Cocokkan pertanyaan pertama dengan kalimat jawaban terakhir.'
      }),
      day({
        title: 'D4 — Q&A: jawab, klarifikasi, atau akui celah',
        objective: 'Memilih respons langsung, permintaan klarifikasi, atau pengakuan informasi belum tersedia.',
        explanation: `Saat pertanyaan datang, identifikasi apa yang diminta sebelum menjawab. Jika jelas dan sumber mendukungnya, jawab inti dahulu lalu beri alasan singkat. Jika istilahnya kabur, gunakan **By… do you mean…?**. Jangan menjawab dua kemungkinan sekaligus dengan uraian panjang yang tidak menyentuh maksud pendengar.

Jika jawaban tidak tersedia, katakan **The sources do not provide that information** dan jelaskan apa yang perlu diperiksa. Ini berbeda dari menghindari pertanyaan: Anda tetap menanggapi batas pengetahuan secara spesifik. Jangan mengulang seluruh presentasi atau mengarang biaya dan hasil demi terdengar yakin. Latih jeda singkat sebelum respons.`,
        examples: [pair('By access, do you mean the opening hours or the entrance route?', 'Dengan akses, apakah maksud Anda jam buka atau jalur masuk?'), pair('The sources do not give costs; we would need a local estimate.', 'Sumber tidak memberikan biaya; kita memerlukan perkiraan lokal.')],
        vocabulary: [pair('clarification', 'permintaan penjelasan maksud'), pair('direct answer', 'jawaban langsung'), pair('unknown', 'hal yang belum diketahui')],
        reading: { title: 'Three Question Cards — Farah (original fictional rehearsal log)', text: `Farah's fictional rehearsal log records three questions about a proposed visitor desk. One asks where the desk would stand; her source specifies beside the inner entrance, so she answers directly. Another asks whether access would improve. Farah asks whether the listener means access to information or physical entry, because her talk only concerns information. A third asks the exact monthly cost. Neither of her practice sources gives a budget, so she says a local estimate is needed. Farah does not call the proposal free merely because it uses volunteers. Her review counts whether each answer addresses the question, not whether she speaks without any pause.` },
        listening: { title: 'Responding to three kinds of question', text: `Tutor: In your fictional proposal, where would the welcome sign stand?
Learner: Beside the inner door, according to the note.
Tutor: Would it improve access?
Learner: By access, do you mean finding information or entering the building physically?
Tutor: Finding information.
Learner: That is the intended purpose, but it has not been tested.
Tutor: Exactly how much would the sign cost?
Learner: The source gives no price. We would need a local printing estimate before approval. I cannot infer that it is free.
Tutor: Good. You answered directly, clarified an ambiguous term, and identified a specific information gap.` },
        quizzes: {
          pattern: [question('Istilah pertanyaan tidak jelas. Respons pertama yang sesuai…', ['By access, do you mean hours or physical entry?', 'It definitely costs nothing.', 'I will restart my entire presentation.'], 0, 'Pertanyaan klarifikasi mempersempit makna sebelum menjawab.'), question('Sumber tidak memberi harga. Jawaban tepat…', ['The price is certainly half of any alternative.', 'We need a local estimate; the source gives no price.', 'Volunteers make every material free.'], 1, 'Jawaban mengakui celah tertentu dan informasi yang diperlukan.')],
          reading: [question('Mengapa Farah meminta klarifikasi tentang access?', ['Tidak ada pintu disebut.', 'Ia ingin menghindari semua pertanyaan.', 'Presentasi membahas informasi, bukan akses fisik.'], 2, 'Istilah access dapat memiliki dua arti berbeda.'), question('Apa yang tidak boleh diasumsikan dari penggunaan relawan?', ['Bahwa proposal tidak memerlukan biaya sama sekali.', 'Bahwa orang dapat bertanya.', 'Bahwa ada ide visitor desk.'], 0, 'Tenaga relawan tidak membuktikan bahan dan operasi tanpa biaya.')],
          listening: [question('Di mana tanda diusulkan berdiri?', ['Di jalan luar kota.', 'Di samping pintu dalam.', 'Di belakang semua lemari.'], 1, 'Learner menjawab beside the inner door sesuai note.'), question('Apa yang perlu diperoleh sebelum approval biaya?', ['Skor ujian resmi.', 'Janji semua orang setuju.', 'Perkiraan pencetakan lokal.'], 2, 'Local printing estimate adalah informasi biaya yang belum tersedia.')]
        },
        output: { speaking: 'Jawab tiga kartu tanpa menulis jawaban penuh: lokasi tanda, makna akses, biaya. Beri jawaban inti maksimal 40 detik per kartu dan gunakan satu klarifikasi.', writing: 'Tulis tiga kartu pertanyaan baru untuk proposal desk. Klasifikasikan answerable/ambiguous/not provided, lalu catat evaluasi setelah menjawab lisan, bukan skrip hafalan.' },
        review: 'Catat apakah kalimat pertama menanggapi inti pertanyaan. Rekam ulang hanya jawaban yang terlalu panjang atau mengarang detail.'
      }),
      day({
        title: 'D5 — Presentasi utuh dari kata kunci',
        objective: 'Menyajikan perbandingan dua sumber dengan rekomendasi bersyarat dan menjawab pertanyaan spontan.',
        explanation: `Sekarang gunakan outline sebagai penopang, bukan naskah lengkap. Pembuka menyebut pertanyaan, isi membandingkan dua aspek, dan penutup menjawab dengan syarat. Letakkan identitas sumber pada kata kunci yang relevan. Jika memerlukan kalimat penuh untuk setiap bagian, kurangi catatan secara bertahap setelah maknanya jelas.

Latih pertanyaan setelah presentasi, bukan hanya penyampaian yang sudah dihafal. Jawab inti, jelaskan alasan, dan akui limit. Simpan satu rekaman utuh sebelum memperbaiki bagian tertentu. Durasi panjang dan sedikit jeda tidak membuktikan kemampuan akademik resmi; yang dinilai ialah tugas lokal, ketepatan isi, organisasi, dan respons terhadap pertanyaan.`,
        examples: [pair('My recommendation depends on volunteer availability and room access.', 'Rekomendasi saya bergantung pada ketersediaan relawan dan akses ruangan.'), pair('That question concerns a different outcome, which these notes do not measure.', 'Pertanyaan itu menyangkut hasil lain yang tidak diukur catatan ini.')],
        vocabulary: [pair('key-word notes', 'catatan kata kunci'), pair('rehearsal', 'latihan penyampaian'), pair('follow-up response', 'jawaban pertanyaan lanjutan')],
        reading: { title: 'Where to Practise a Demonstration — original fictional sources by Lia and Bagas', text: `Lia's fictional brief, “Begin with Two Listeners,” proposes practising a craft demonstration in a small side room. Two listeners could interrupt to ask about an unclear step. She admits the room would not reproduce the distance between a demonstrator and a large audience. Bagas's fictional brief, “Check the Event Space,” proposes a rehearsal in the actual hall. The presenter could check whether the back row sees the materials, although access to the hall may be limited and an empty room cannot reproduce audience questions. Neither brief measures confidence or learning. A presenter should compare question practice and visibility checks rather than claim one setting is best for everyone.` },
        listening: { title: 'A rehearsal followed by a challenge', text: `Tutor: Give the conclusion of your fictional demonstration talk.
Learner: I recommend checking the explanation with two listeners, then checking visibility in the hall if access is available. Lia's brief supports questions in a small group; Bagas's brief supports checking the event space. Neither proves a rise in confidence.
Tutor: What if the hall is unavailable?
Learner: I could still check the explanation, but I could not claim the visibility check was complete. We would need another opportunity to inspect the space.
Tutor: Does your combined plan guarantee a successful event?
Learner: No. It is a conditional rehearsal proposal, and it leaves audience behaviour unknown.` },
        quizzes: {
          pattern: [question('Catatan yang mendukung presentasi mandiri adalah…', ['Esai lengkap yang dibaca tanpa melihat pendengar.', 'Kata kunci dengan alur dan identitas sumber.', 'Hanya daftar judul tanpa poin.'], 1, 'Kata kunci menjaga struktur dan atribusi sambil memberi ruang penyampaian sendiri.'), question('Jika hall tidak tersedia, laporan tepat…', ['The hall check is complete anyway.', 'Every audience will see perfectly.', 'The explanation check is possible, but visibility remains unchecked.'], 2, 'Respons membedakan bagian yang dapat dilakukan dari bagian tanpa bukti.')],
          reading: [question('Apa kelebihan side room menurut Lia?', ['Dua pendengar dapat bertanya tentang langkah tidak jelas.', 'Meniru semua jarak hall.', 'Menjamin percaya diri meningkat.'], 0, 'Sumber A menekankan interaksi untuk explanation.'), question('Apa batas latihan di hall kosong?', ['Tidak bisa melihat bahan.', 'Tidak meniru pertanyaan audiens.', 'Selalu menolak mikrofon.'], 1, 'Bagas mengakui empty room tidak mereproduksi audience questions.')],
          listening: [question('Apa yang tidak boleh diklaim jika hall tidak tersedia?', ['Penjelasan dapat dicoba.', 'Sumber berbeda prioritas.', 'Visibility check sudah selesai.'], 2, 'Learner menandai ketidaktersediaan ruang sebagai batas bukti.'), question('Bagaimana status rencana gabungan?', ['Usulan latihan bersyarat, bukan jaminan keberhasilan.', 'Eksperimen selesai yang menjamin hasil.', 'Satu kebijakan wajib dari Lia.'], 0, 'Kesimpulan membedakan proposal dan guaranteed event outcome.')]
        },
        output: { speaking: 'Sajikan tiga menit tentang tempat latihan demonstrasi dari outline maksimal 70 kata. Jawab tiga kartu secara singkat: jika hall tidak ada, bukti terkuat, dan hal belum terukur. Total presentasi dan jawaban maksimal lima menit.', writing: 'Buat outline lima bagian serta catatan pembicara maksimal 150 kata. Setelah rekaman, tulis evaluasi tentang atribusi, satu limit, dan satu jawaban yang perlu dipendekkan.' },
        review: 'Simpan rekaman utuh dan satu revisi jawaban. Jangan mengganti seluruh percobaan awal dengan versi yang lebih rapi tanpa jejak.'
      })
    ],
    assessment: {
      title: 'D6 — Presentasi dan Q&A pada sumber baru',
      objective: 'Menyusun presentasi dua sumber baru dan memberi jawaban spontan yang tetap dalam batas informasi.',
      explanation: `Gunakan paket hari keenam untuk presentasi yang belum dihafal. Tentukan pertanyaan utama, dua dimensi perbandingan, identitas sumber, serta simpulan bersyarat. Outline singkat cukup; jangan mengubahnya menjadi esai yang dibaca. Pastikan pendengar mengetahui kapan Anda melaporkan sumber dan kapan memberi rekomendasi sendiri.

Sesudah penyampaian, jawab pertanyaan tentang alasan, kelompok yang belum terlayani, dan informasi yang masih dibutuhkan. Minta klarifikasi bila istilahnya kabur. Bila tidak ada jawaban dalam sumber, jelaskan pemeriksaan yang diperlukan tanpa menebak. Simpan kondisi bantuan dan rekaman, lalu nilai ketepatan isi terpisah dari kelancaran.`,
      examples: [pair('I will compare access conditions before making a recommendation.', 'Saya akan membandingkan kondisi akses sebelum memberi rekomendasi.'), pair('The sources do not answer that; a local check would be needed.', 'Sumber tidak menjawab itu; diperlukan pemeriksaan lokal.')],
      vocabulary: [pair('spontaneous question', 'pertanyaan spontan'), pair('source trail', 'jejak asal gagasan'), pair('bounded answer', 'jawaban dengan batas jelas')],
      quizzes: { pattern: [question('Ketika sumber berganti dalam presentasi, sebaiknya…', ['Menyebut asal ide yang baru digunakan.', 'Menyebut semuanya sebagai pendapat Anda.', 'Menghilangkan judul agar cepat.'], 0, 'Atribusi saat berpindah ide menjaga sumber tetap dapat dikenali.'), question('Pertanyaan biaya tanpa data dijawab dengan…', ['Harga rekaan yang terdengar tepat.', 'Pengakuan celah dan kebutuhan informasi biaya.', 'Jaminan bahwa semua gratis.'], 1, 'Jawaban spesifik tentang celah lebih tepat daripada angka tanpa dukungan.')] },
      output: { speaking: 'Presentasikan paket baru selama tiga menit dengan dua atribusi, kontras, dan limit. Jawab tiga pertanyaan singkat tanpa skrip: mengapa pilihan itu, siapa belum terlayani, dan bukti apa kurang. Total rekaman maksimal lima menit.', writing: 'Buat outline lima bagian dan catatan maksimal 180 kata. Setelah menjawab, catat satu respons langsung, satu celah yang diakui, dan satu bagian yang perlu direvisi.' },
      review: 'Dengarkan apakah sumber, syarat, dan jawaban inti terdengar. Jangan menilai kesiapan ujian resmi dari satu presentasi lokal.'
    }
  },
  {
    week: 24,
    days: [
      day({
        title: 'D1 — Dari sumber ke brief keputusan',
        objective: 'Mengubah dua sumber menjadi brief masalah, opsi, dan keputusan yang diminta.',
        explanation: `Proyek terpadu dimulai dengan keputusan yang jelas. Pisahkan masalah, opsi dari sumber, dan tindakan yang Anda minta. **We need to decide whether…** membatasi keputusan; **Source A proposes…** menjaga asal opsi. Jangan langsung menulis email panjang sebelum mengetahui keputusan yang diminta.

Brief bukan laporan keberhasilan. Jika sumber belum mencoba pilihan, tulis status itu. Sebut kelompok yang terdampak dan informasi yang belum tersedia. Rekomendasi awal boleh sementara dan belum memiliki detail operasional lengkap. Pada tahap ini, tugas Anda ialah membuat dasar keputusan yang dapat dipahami, bukan mengisi semua celah dengan kebijakan rekaan.`,
        examples: [pair('We need to decide how volunteers should pass on unfinished tasks.', 'Kita perlu memutuskan cara relawan meneruskan tugas yang belum selesai.'), pair('The sources offer options, but neither reports a trial.', 'Sumber menawarkan pilihan, tetapi tidak satu pun melaporkan uji coba.')],
        vocabulary: [pair('decision brief', 'ringkasan untuk keputusan'), pair('option', 'pilihan tindakan'), pair('stakeholder', 'pihak terdampak')],
        reading: { title: 'Passing on a Gardening Task — original fictional sources by Seno and Ayla', text: `Seno's fictional memo, “Leave a Task Card,” proposes recording unfinished work at a community garden on a card beside the tools. Volunteers arriving later could see what remains, but somebody would need to update the card after a change. Ayla's fictional note, “A Short Overlap,” proposes having outgoing and incoming volunteers meet briefly. They could explain an unexpected problem directly, but travel schedules might prevent an overlap. Neither source has measured time savings or missed tasks. Both address continuity between volunteers, not gardening methods. A project brief should ask how information will pass between shifts while recognising the need for both clarity and workable attendance.` },
        listening: { title: 'Defining the project decision', text: `Tutor: What decision does your fictional library project need?
Learner: We need everything to become better.
Tutor: That is too broad to approve. What specific problem do the notes describe?
Learner: Returning volunteers do not always know which books still need sorting.
Tutor: And what are the options?
Learner: A visible task list or a short spoken handover. One source supports a lasting record; the other supports immediate questions. Neither reports a completed trial.
Tutor: State the decision now.
Learner: We need to decide how to pass unfinished sorting work between shifts, not how to reorganise the whole library.` },
        quizzes: {
          pattern: [question('Brief keputusan paling jelas adalah…', ['Make everything better forever.', 'Decide how to pass unfinished sorting work between shifts.', 'All tasks have already succeeded.'], 1, 'Keputusan spesifik dapat dinilai dan tidak mengklaim hasil.'), question('Opsi dari sumber yang belum dicoba harus disebut…', ['Usulan dengan status belum diuji.', 'Program yang sudah berhasil.', 'Penemuan ilmiah nyata.'], 0, 'Status sumber harus dipertahankan dalam brief.')],
          reading: [question('Apa masalah kedua sumber?', ['Cara menanam setiap jenis bunga.', 'Harga kebun nasional.', 'Kelanjutan informasi antara relawan.'], 2, 'Keduanya membahas continuity antarshift.'), question('Apa batas task card?', ['Tidak dapat memuat kata.', 'Perlu diperbarui setelah perubahan.', 'Semua relawan wajib bertemu.'], 1, 'Seno mengakui kebutuhan pemutakhiran kartu.')],
          listening: [question('Apa tugas yang belum jelas bagi relawan berikutnya?', ['Buku mana masih perlu dipilah.', 'Siapa membeli gedung.', 'Bagaimana mengukur seluruh perpustakaan.'], 0, 'Masalah spesifiknya unfinished sorting work.'), question('Apa yang sengaja di luar keputusan?', ['Serah-terima antarshift.', 'Pilihan daftar atau lisan.', 'Menata ulang seluruh perpustakaan.'], 2, 'Learner mempersempit cakupan agar keputusan dapat ditindaklanjuti.')]
        },
        output: { speaking: 'Berikan brief 90 detik tentang gardening handover: masalah, dua opsi, keputusan yang diminta, dan satu celah informasi.', writing: 'Tulis brief 100–120 kata dengan bagian masalah/opsi/keputusan/status bukti. Sebut Seno dan Ayla serta jangan menetapkan hasil yang belum ada.' },
        review: 'Apakah penerima dapat menjawab ya/tidak atau memilih opsi dari keputusan Anda? Persempit frasa yang masih seperti “make everything better”.'
      }),
      day({
        title: 'D2 — Email meminta persetujuan',
        objective: 'Menulis permintaan persetujuan uji coba dengan tujuan, batas, dan tindakan penerima yang jelas.',
        explanation: `Email proyek meminta keputusan tertentu, bukan memuat seluruh memo. Subjek menyebut tindakan; paragraf awal memakai **Could you approve…?**. Berikutnya beri alasan singkat, ruang lingkup uji coba, dan pertanyaan yang perlu dijawab penerima. Identitas sumber dapat disebut ringkas tanpa menyalin semua analisis.

Gunakan **would** untuk langkah usulan dan **has** hanya bila benar-benar sudah terjadi. Tentukan detail uji coba sebagai rancangan Anda, bukan fakta dari sumber. Jangan mengirim email sungguhan; penerima dan organisasi di sini fiktif. Akhiri dengan langkah keputusan yang jelas, bukan janji hasil seperti penghematan waktu yang belum diperiksa.`,
        examples: [pair('Could you approve a one-week trial of a return checklist?', 'Bisakah Anda menyetujui uji coba daftar pengembalian selama satu minggu?'), pair('The trial would cover hand tools only.', 'Uji coba akan mencakup alat tangan saja.')],
        vocabulary: [pair('approval request', 'permintaan persetujuan'), pair('trial scope', 'cakupan uji coba'), pair('subject line', 'baris subjek email')],
        reading: { title: 'A Request, Not a Result — Nanda (original fictional draft email)', text: `Subject: Request to try a tool-return checklist. Dear Coordinator, Could you approve a one-week trial of a return checklist at our fictional model-making club? In “Check Each Box,” fictional writer Rima recommends listing borrowed tools by box. Her note argues that members need a clear way to identify missing items, but it reports no trial. I propose covering hand tools only, not electrical equipment. Members would mark each item before returning the box, and a volunteer would help anyone needing a spoken explanation. We would review incomplete entries before deciding whether to continue. Please confirm whether you approve this limited trial or would like a revised scope. Regards, Nanda.` },
        listening: { title: 'Changing a claim into an approval request', text: `Tutor: Read the first line of your fictional project email.
Learner: Our new card has eliminated handover mistakes.
Tutor: Have you tried the card?
Learner: No. I used a result verb for a proposal.
Tutor: What decision are you actually requesting?
Learner: Could you approve a two-session trial of a handover card? It would list completed work and the next task.
Tutor: Keep the scope clear.
Learner: The trial would cover the Saturday craft group only. I would not call it a centre-wide policy, and I would ask for approval before preparing the cards.` },
        quizzes: {
          pattern: [question('Mana permintaan persetujuan, bukan klaim hasil?', ['The card has eliminated mistakes.', 'All members have improved.', 'Could you approve a two-session trial?'], 2, 'Could you approve meminta keputusan tentang tindakan mendatang.'), question('Untuk langkah yang masih usulan, bentuk tepat adalah…', ['The trial would cover one group.', 'The trial has already succeeded.', 'The trial proved all outcomes.'], 0, 'Would menjaga status rancangan, bukan hasil.')],
          reading: [question('Apa cakupan email Nanda?', ['Semua peralatan listrik seluruh kota.', 'Alat tangan pada klub model selama satu minggu.', 'Semua organisasi secara permanen.'], 1, 'Email membatasi alat dan durasi secara eksplisit.'), question('Apa respons yang diminta dari koordinator?', ['Mengumumkan hasil sukses.', 'Membayar penelitian nyata.', 'Menyetujui uji coba terbatas atau meminta cakupan diperbaiki.'], 2, 'Penutup memberi tindakan penerima yang jelas.')],
          listening: [question('Apa kesalahan kalimat pertama Learner?', ['Mengklaim penghapusan kesalahan sebelum trial.', 'Meminta keputusan terlalu jelas.', 'Menyebut kelompok sasaran.'], 0, 'Has eliminated menyatakan hasil yang tidak pernah diamati.'), question('Siapa yang dicakup usulan revisi?', ['Seluruh pusat kegiatan.', 'Kelompok kerajinan Sabtu saja.', 'Semua warga tanpa batas.'], 1, 'Learner memperjelas trial bukan centre-wide policy.')]
        },
        output: { speaking: 'Jelaskan permintaan email Nanda dalam dua menit tanpa membacanya. Bedakan apa dari Rima dan apa rancangan Nanda.', writing: 'Tulis email fiktif 100–130 kata untuk menyetujui uji coba handover dari D1. Gunakan subjek, permintaan, alasan, batas, dan tindakan penerima; labeli detail tambahan sebagai usulan Anda.' },
        review: 'Lingkari verba yang memberi kesan hasil. Ganti bila tindakan masih usulan, lalu pastikan kalimat penutup meminta keputusan tertentu.'
      }),
      day({
        title: 'D3 — Memo keputusan dan trade-off',
        objective: 'Mengembangkan email menjadi memo yang menjelaskan opsi, alasan pilihan, dan batasan.',
        explanation: `Memo memberi dasar untuk menilai keputusan yang diminta email. Gunakan bagian masalah, pilihan, rekomendasi, batasan, dan langkah berikutnya. Dua pilihan perlu disajikan dengan adil sebelum Anda menjelaskan mengapa satu dipilih dalam kondisi skenario. Panjang memo berasal dari analisis, bukan pengulangan salam email.

Pertahankan keputusan yang sama pada kedua bentuk. Jika email meminta kartu, memo tidak boleh diam-diam hanya menyarankan rapat. Anda boleh merevisi keputusan, tetapi semua produk harus ikut berubah. Sebut sumber lokal pada alasan yang relevan dan pisahkan aturan operasional yang Anda rancang dari fakta sumber. Jangan menyebut kompromi sebagai solusi tanpa biaya atau batas.`,
        examples: [pair('The card preserves a record, while the overlap allows questions.', 'Kartu mempertahankan catatan, sementara waktu bertemu memungkinkan pertanyaan.'), pair('I recommend a card with a question contact, subject to volunteer availability.', 'Saya merekomendasikan kartu dengan kontak untuk pertanyaan, bergantung ketersediaan relawan.')],
        vocabulary: [pair('decision memo', 'memo dasar keputusan'), pair('alternative', 'pilihan lain'), pair('trade-off', 'pertukaran keuntungan dan keterbatasan')],
        reading: { title: 'A Consistent Recommendation — Rosi (original fictional memo outline)', text: `Rosi's fictional memo concerns the handover of costumes between theatre volunteers. Source A, “A Labelled Rail” by Yuda, proposes leaving a card on each rail showing costumes still to be checked. It would preserve a record, but unclear notes might remain unanswered. Source B, “Check Together” by Bela, proposes a brief overlap to inspect unresolved items. It allows questions but depends on volunteers sharing a time. Rosi recommends a card with a named contact for later questions because the fictional shifts do not reliably overlap. She labels that combination as her proposal. Her email requests the same limited trial; neither document claims fewer mistakes have already been measured.` },
        listening: { title: 'Catching a contradiction between products', text: `Tutor: Your fictional email requests a trial of written handover cards. What does the memo recommend?
Learner: A daily meeting with no written record.
Tutor: Can the coordinator tell what you want approved?
Learner: Not reliably. The products request different actions.
Tutor: How will you repair them?
Learner: I will choose one recommendation and update both. Given the different shifts in my scenario, I will keep the card trial and explain why a daily meeting may not be workable.
Tutor: What about unclear cards?
Learner: I will propose a contact for questions and state that availability remains a condition, not pretend the limitation disappears.` },
        quizzes: {
          pattern: [question('Email dan memo harus konsisten pada…', ['Jenis salam saja.', 'Keputusan dan cakupan tindakan yang diminta.', 'Jumlah kata yang persis sama.'], 1, 'Produk berbeda bentuk tetapi perlu meminta keputusan yang selaras.'), question('Gabungan ide yang Anda buat harus disebut…', ['Hasil asli Source A.', 'Kebijakan yang sudah berlaku.', 'Usulan Anda dengan dasar dan syarat jelas.'], 2, 'Kombinasi baru tidak boleh dipindahkan menjadi fakta sumber.')],
          reading: [question('Mengapa Rosi memilih kartu dan kontak?', ['Shift dalam skenarionya tidak selalu bertemu.', 'Bela melarang pertanyaan.', 'Kartu sudah terbukti menghapus semua kesalahan.'], 0, 'Rekomendasi disesuaikan dengan keterbatasan overlap.'), question('Apa batas card Yuda?', ['Tidak memberi catatan permanen.', 'Catatan kabur mungkin tidak terjawab.', 'Mewajibkan semua orang datang bersama.'], 1, 'Source A menyebut kebutuhan penjelasan yang belum otomatis terpenuhi.')],
          listening: [question('Apa kontradiksi awal?', ['Email dan memo memakai bahasa Inggris.', 'Keduanya sama-sama fiktif.', 'Email meminta kartu, memo meminta rapat tanpa catatan.'], 2, 'Tindakan yang diminta berbeda sehingga approval tidak jelas.'), question('Apa yang masih menjadi syarat kontak pertanyaan?', ['Ketersediaan orang untuk menjawab.', 'Jaminan seluruh kartu sempurna.', 'Penghapusan semua shift.'], 0, 'Learner mempertahankan availability sebagai kondisi.')]
        },
        output: { speaking: 'Jelaskan rekomendasi Rosi dan opsi yang tidak dipilih selama 2–3 menit. Sebut satu trade-off yang masih ada.', writing: 'Tulis memo 180–220 kata untuk email Anda dari D2. Pakai dua sumber D1, alasan pilihan, batasan, serta langkah berikutnya. Cocokkan keputusan memo dengan email.' },
        review: 'Buat satu kalimat keputusan bersama untuk email dan memo. Tandai setiap detail operasional yang merupakan rancangan Anda.'
      }),
      day({
        title: 'D4 — Pemilik tindakan dan pemeriksaan uji coba',
        objective: 'Menetapkan tindakan, pemilik, tenggat, serta cara meninjau trial tanpa mengklaim hasil.',
        explanation: `Rekomendasi perlu langkah yang dapat dilaksanakan dalam skenario. Tulis siapa melakukan apa dan kapan: **The coordinator would check… by…**. Pemilik tindakan bukan sekadar nama jabatan pada akhir paragraf. Tenggat perlu melekat pada tindakan tertentu agar persiapan tidak tertukar dengan hari pelaksanaan.

Pilih pemeriksaan yang berhubungan dengan masalah awal. Jika masalahnya tugas berikutnya tidak jelas, catat apakah relawan dapat mengidentifikasinya. Itu rencana pengumpulan informasi, bukan hasil yang sudah diperoleh. Jangan menambahkan angka penghematan. Pertahankan bantuan akses pada rencana dan sampaikan bahwa semua detail baru adalah bagian usulan simulasi.`,
        examples: [pair('The shift lead would check the wording by Monday.', 'Pemimpin shift akan memeriksa tulisan paling lambat Senin.'), pair('We would record whether the next volunteer can identify the unfinished task.', 'Kita akan mencatat apakah relawan berikutnya dapat mengenali tugas yang belum selesai.')],
        vocabulary: [pair('action owner', 'penanggung jawab tindakan'), pair('review criterion', 'kriteria peninjauan'), pair('implementation step', 'langkah pelaksanaan')],
        reading: { title: 'Who Checks What? — Anisa (original fictional trial plan)', text: `Anisa's fictional plan proposes a two-session handover trial for a community painting group. The outgoing helper would mark completed work and name the next task. The session lead would check the card wording by Tuesday, before the first trial session on Wednesday. Another volunteer would offer a spoken explanation when needed. At the end of each session, the lead would record whether the incoming helper could identify the next task and what questions remained. Anisa does not promise faster preparation. These roles and dates are her proposed scenario details, not findings from a source. A review after the second session would inform a later decision about continuing.` },
        listening: { title: 'Reviewing an observable criterion', text: `Tutor: How would you evaluate your fictional return-sheet trial?
Learner: We would say everyone likes it and that it saves hours.
Tutor: Those are results you have not collected. What could you actually record?
Learner: Whether each entry includes an item and return date, and which instructions prompt questions.
Tutor: Who would prepare the sheet?
Learner: The club assistant would prepare it by Thursday. The coordinator would check the wording on Friday before the Saturday trial.
Tutor: What about members needing help writing?
Learner: A volunteer could enter their details with permission. I would include that condition in every project product.` },
        quizzes: {
          pattern: [question('Pemeriksaan yang dapat diamati adalah…', ['Everyone will certainly love the plan.', 'The trial has saved hours before starting.', 'Record whether each entry has a return date.'], 2, 'Kelengkapan entry bisa dicatat selama trial tanpa mengarang hasil.'), question('Rencana tindakan jelas memuat…', ['Pelaku, tindakan, dan tenggat yang berhubungan.', 'Nama jabatan tanpa tugas.', 'Angka hasil tanpa sumber.'], 0, 'Ketiga unsur membuat langkah skenario dapat dipahami.')],
          reading: [question('Kapan wording diperiksa?', ['Rabu sesudah sesi kedua.', 'Paling lambat Selasa sebelum trial Rabu.', 'Setelah rencana dibuat permanen.'], 1, 'Rencana membedakan persiapan Selasa dari pelaksanaan Rabu.'), question('Apa yang dicatat pada akhir sesi?', ['Nilai ujian resmi setiap helper.', 'Penghematan jam yang sudah pasti.', 'Apakah incoming helper mengenali tugas berikutnya dan pertanyaan tersisa.'], 2, 'Kriteria berhubungan langsung dengan kejelasan handover.')],
          listening: [question('Siapa menyiapkan return sheet?', ['Club assistant paling lambat Kamis.', 'Semua peminjam setelah Sabtu.', 'Peneliti luar tanpa nama.'], 0, 'Learner memberi pemilik dan deadline persiapan secara eksplisit.'), question('Kondisi bantuan apa dipertahankan?', ['Tidak ada orang boleh bertanya.', 'Relawan membantu menulis dengan izin anggota.', 'Semua anggota harus membeli alat.'], 1, 'Akses bantuan dengan permission dicantumkan dalam semua produk.')]
        },
        output: { speaking: 'Jelaskan rencana trial Anda 3 menit: pemilik, dua tenggat berbeda, bantuan, dan dua hal yang akan dicatat. Jangan menyebut hasil yang belum ada.', writing: 'Tambahkan tabel tindakan/pemilik/tenggat/cek pada memo. Perbarui email bila syarat penting berubah. Tulis 80–100 kata yang menjelaskan cara hasil trial kelak memengaruhi keputusan.' },
        review: 'Cocokkan setiap tenggat dengan satu tindakan. Periksa apakah kriteria dapat benar-benar dicatat, bukan hanya berupa kata “successful”.'
      }),
      day({
        title: 'D5 — Paket proyek yang selaras',
        objective: 'Menyusun email, memo, dan presentasi dari dua sumber baru dengan keputusan dan syarat konsisten.',
        explanation: `Paket terpadu memakai satu inti keputusan dalam bentuk berbeda. Email meminta persetujuan; memo menjelaskan pilihan dan alasan; presentasi membantu pendengar menilai serta bertanya. Jangan menyalin semua kalimat yang sama. Sesuaikan rincian dengan tujuan setiap bentuk sambil mempertahankan cakupan, pemilik, tenggat, dan syarat.

Sebelum menyerahkan, buat cek silang empat unsur itu. Bedakan informasi sumber, penalaran Anda, dan tindakan usulan. Paket yang lancar tetapi kontradiktif belum siap dinilai. Gunakan sumber baru hari ini agar Anda harus memindahkan keterampilan, bukan menghafal handover kemarin. Semua organisasi serta angka tetap bagian latihan fiktif.`,
        examples: [pair('The email requests the same trial that the memo explains.', 'Email meminta trial yang sama dengan yang dijelaskan memo.'), pair('The coordinator would review comments before any permanent change.', 'Koordinator akan meninjau komentar sebelum perubahan permanen apa pun.')],
        vocabulary: [pair('integrated package', 'paket beberapa produk yang selaras'), pair('cross-check', 'pemeriksaan silang'), pair('consistency', 'keselarasan informasi')],
        reading: { title: 'Recording an Exhibition Reset — original fictional sources by Kania and Bowo', text: `Kania's fictional source, “A Reset Checklist,” proposes a checklist for volunteers clearing a community exhibition. It would name items to pack, surfaces to clear, and the place for unfinished displays. A checklist could preserve the expected steps, but a tick would not show whether a fragile display was packed correctly. Bowo's fictional source, “A Closing Photo,” proposes taking a photograph of each cleared display area. The next team could see the arrangement, although a photograph would not reveal missing items inside closed boxes and someone would need permission before including people. Neither source reports a trial. Both aim to make the reset understandable without claiming that cleanup is faster.` },
        listening: { title: 'Checking the reset project before submission', text: `Tutor: Your fictional project email asks for a two-session checklist-and-photo trial. Is that what the memo recommends?
Learner: Yes. Both limit it to the exhibition reset, and both say photographs should exclude people unless permission is given.
Tutor: What does your presentation add?
Learner: It explains why Kania's checklist could preserve the expected steps and Bowo's photo could show the final arrangement. I label the combination as my proposal.
Tutor: What will you review?
Learner: Whether the next team can identify unfinished work and which packed items still need checking. I will not claim faster cleanup before the trial. The coordinator would review comments before deciding whether to continue.` },
        quizzes: {
          pattern: [question('Apa yang boleh berbeda antara email dan memo?', ['Keputusan diam-diam berlawanan.', 'Kondisi penting hilang dari salah satunya.', 'Tingkat rincian sesuai fungsi, dengan inti keputusan sama.'], 2, 'Bentuk berbeda memerlukan rincian berbeda tetapi informasi utama selaras.'), question('Peran dan tanggal baru dalam paket adalah…', ['Detail usulan simulasi yang harus dilabeli.', 'Temuan otomatis kedua sumber.', 'Hasil penelitian nyata.'], 0, 'Sumber tidak memberi semua detail operasional; penambahan perlu label.')],
          reading: [question('Apa batas reset checklist?', ['Tidak dapat menyebut langkah.', 'Tanda centang tidak menunjukkan apakah display rapuh dikemas benar.', 'Mewajibkan semua volunteer dipotret.'], 1, 'Daftar mencatat langkah tetapi tidak menjamin kualitas pengepakan.'), question('Apa batas foto Bowo?', ['Selalu menunjukkan isi setiap kotak.', 'Tidak memerlukan aturan izin.', 'Tidak menunjukkan barang hilang dalam kotak tertutup; orang memerlukan izin.'], 2, 'Foto hanya menunjukkan bagian yang terlihat dan perlu mempertimbangkan izin orang.')],
          listening: [question('Apa cakupan trial dalam email dan memo?', ['Exhibition reset.', 'Semua kegiatan pusat secara permanen.', 'Orientasi helper pasar baru.'], 0, 'Learner memastikan cakupan sama pada kedua produk.'), question('Apa peran koordinator setelah trial?', ['Mengumumkan hasil sukses sebelum mulai.', 'Meninjau komentar sebelum memutuskan kelanjutan.', 'Menghapus semua pertanyaan.'], 1, 'Review mendahului keputusan permanen.')]
        },
        output: { speaking: 'Presentasikan usulan exhibition reset selama tiga menit dari dua sumber baru. Jawab singkat: jika foto tidak boleh memuat orang, jika checklist tidak cukup menunjukkan kualitas pengepakan, dan bukti apa kurang. Total rekaman maksimal lima menit.', writing: 'Buat email 100–140 kata dan memo 200–250 kata. Pilih checklist, foto, atau kombinasi dengan alasan; tetapkan usulan pemilik/tenggat dan pemeriksaan. Cek silang semua syarat.' },
        review: 'Bandingkan keputusan, cakupan, pemilik, tenggat, dan bantuan pada tiga produk. Catat satu kontradiksi yang dicegah atau diperbaiki dengan bukti kalimat.'
      })
    ],
    assessment: {
      title: 'D6 — Capstone transfer pada keputusan baru',
      objective: 'Menyusun paket proyek mandiri dari assessment baru dengan sumber, rencana, dan evaluasi yang jelas.',
      explanation: `Gunakan dua sumber baru hari keenam sebagai dasar proyek, bukan mengganti nama pada paket kemarin. Tentukan keputusan, bandingkan opsi, dan pilih rekomendasi yang sesuai kondisi. Setiap produk harus membedakan apa yang tertulis dalam sumber, apa yang Anda simpulkan, dan apa yang Anda usulkan.

Email meminta persetujuan tertentu; memo menjelaskan trade-off; presentasi menampilkan alasan serta batasan. Tetapkan peran dan tenggat sebagai detail simulasi. Pilih pemeriksaan yang dapat dicatat selama trial tanpa mengarang hasil. Cocokkan semua produk sebelum menyimpan paket. Gate ini menilai transfer tugas lokal, bukan sertifikasi kesiapan kerja atau kuliah.`,
      examples: [pair('Could you approve this limited trial before we prepare the materials?', 'Bisakah Anda menyetujui trial terbatas ini sebelum kami menyiapkan bahan?'), pair('The review would inform a later decision, not confirm success in advance.', 'Peninjauan akan mendasari keputusan berikutnya, bukan memastikan keberhasilan sebelumnya.')],
      vocabulary: [pair('capstone', 'proyek akhir terpadu'), pair('proposed role', 'peran yang diusulkan'), pair('decision consistency', 'keselarasan keputusan')],
      quizzes: { pattern: [question('Paket siap diperiksa bila…', ['Email meminta satu hal dan memo diam-diam kebalikannya.', 'Keputusan, cakupan, dan syarat selaras di semua produk.', 'Presentasi menciptakan hasil yang tidak ada.'], 1, 'Konsistensi lintas bentuk merupakan bagian utama proyek terpadu.'), question('Ukuran peninjauan trial harus berupa…', ['Janji bahwa semua orang puas.', 'Klaim hasil sebelum trial.', 'Hal yang akan dicatat dan berhubungan dengan masalah.'], 2, 'Kriteria harus dapat diamati kelak, bukan menganggap hasil sudah diketahui.')] },
      output: { speaking: 'Sampaikan usulan paket baru selama tiga menit dan jawab tiga pertanyaan singkat tentang keterbatasan, kondisi berubah, dan bukti yang kurang. Batasi seluruh rekaman maksimal lima menit. Simpan rekaman pertama.', writing: 'Buat email 100–150 kata dan memo 200–300 kata dengan dua sumber baru. Nyatakan keputusan, trade-off, pemilik, tenggat, bantuan, serta rencana review. Simpan draf dan revisi.' },
      review: 'Lakukan cek silang produk. Pilih dua hambatan berbukti untuk koreksi minggu berikutnya, bukan dua aturan yang sekadar menarik.'
    }
  },
  {
    week: 25,
    days: [
      day({
        title: 'D1 — Diagnosis berdasarkan bukti tugas',
        objective: 'Memilih dua hambatan dari produk sebelumnya dan merumuskan gejala yang dapat diamati.',
        explanation: `Perbaikan terarah dimulai dari bukti, bukan perasaan bahwa semua grammar lemah. Buka paket proyek sebelumnya dan pilih bagian yang menghambat pesan: tenggat salah, sumber terlalu pasti, tindakan tanpa pemilik, atau jawaban yang terlambat mencapai inti. Kutip kalimat atau catat waktu rekaman untuk menunjukkan gejalanya.

Pilih dua target saja agar latihan koreksi mengganti sebagian latihan biasa, bukan menambah beban tanpa batas. Tulis perilaku yang ingin berubah, misalnya “dua tanggal melekat pada tindakan yang benar”. Bedakan kesalahan isi dari kesalahan bentuk. Pengucapan belum perlu menjadi prioritas jika pendengar justru menerima keputusan yang berlawanan dengan memo.`,
        examples: [pair('My first target is to attach each deadline to the correct action.', 'Target pertama saya ialah melekatkan setiap tenggat pada tindakan yang tepat.'), pair('At 01:20, I gave background instead of answering the question.', 'Pada 01:20, saya memberi latar alih-alih menjawab pertanyaan.')],
        vocabulary: [pair('observable symptom', 'gejala yang dapat diamati'), pair('targeted correction', 'koreksi terarah'), pair('baseline', 'contoh awal sebagai pembanding')],
        reading: { title: 'Two Targets, Not Ten — Rani (original fictional learning log)', text: `Rani's fictional learning log reviews a volunteer-project package. In her email, she asks for a one-week trial, but her memo says two weeks. In her recording, a question about who checks the card receives a long description of the club before any person is named. Rani selects decision consistency and direct answers as her two targets. She does not choose every article error in the memo, because those errors did not change its central meaning. For a baseline, she saves the conflicting sentences and the first recording. She plans to try a new context after correction, rather than polish the same answers until she remembers them.` },
        listening: { title: 'Choosing a correction target', text: `Tutor: What will you improve after your fictional capstone task?
Learner: Everything. I want perfect English.
Tutor: Show one observable problem.
Learner: At fifty seconds, I said the trial had succeeded, although the sources only proposed it. Later, I answered a deadline question with the wrong event date.
Tutor: Those give you two targets.
Learner: I will preserve proposal language and keep action-date pairs clear. I will save the original sentences, revise them, then make new responses on another topic.
Tutor: Will revising the old script alone show transfer?
Learner: No. It shows a revision, but I need a new attempt without copying that script.` },
        quizzes: {
          pattern: [question('Target yang paling teramati adalah…', ['Be perfect immediately.', 'Keep each action paired with its correct date in a new reply.', 'Know all English forever.'], 1, 'Target menyebut perilaku yang dapat dilihat pada produk baru.'), question('Mengapa menyimpan baseline?', ['Untuk menunjukkan masalah awal dan membandingkan perubahan.', 'Untuk menghapus kebutuhan latihan baru.', 'Untuk mengklaim penilaian independen.'], 0, 'Baseline memberi bukti sebelum koreksi; tidak otomatis membuktikan transfer.')],
          reading: [question('Apa dua target Rani?', ['Semua article dan aksen.', 'Membeli mikrofon dan menambah durasi.', 'Keselarasan keputusan dan jawaban langsung.'], 2, 'Keduanya dipilih dari kontradiksi produk dan respons rekaman.'), question('Mengapa Rani tidak memprioritaskan semua article error?', ['Semua article tidak penting dalam bahasa Inggris.', 'Kesalahan itu tidak mengubah makna utama pada tugas ini.', 'Memo tidak memiliki bahasa sama sekali.'], 1, 'Prioritas berdasarkan hambatan pesan, bukan klaim bahwa aturan tersebut tak pernah penting.')],
          listening: [question('Apa masalah pada klaim trial?', ['Proposal disebut seolah sudah berhasil.', 'Sumber benar-benar mengukur sukses.', 'Learner tidak menyebut tanggal lahir.'], 0, 'Learner mengubah usulan menjadi hasil pada detik lima puluh.'), question('Apa bukti yang masih diperlukan setelah revisi skrip lama?', ['Persentase CEFR dari kuis.', 'Janji lebih lancar.', 'Respons baru tanpa menyalin skrip.'], 2, 'Transfer memerlukan penerapan pada tugas baru, bukan hafalan revisi.')]
        },
        output: { speaking: 'Pilih dua hambatan dari paket Anda, lalu jelaskan bukti dan target dalam dua menit. Kutip satu bagian rekaman atau baca satu kalimat awal yang bermasalah.', writing: 'Buat catatan dua target: bukti awal, dampak pada makna, bentuk perbaikan, dan perilaku yang akan diperiksa pada konteks baru. Jika tugas lama tidak tersedia, buat respons 80 kata pada sumber Rani lalu pilih masalah yang benar-benar tampak.' },
        review: 'Pastikan setiap target memiliki kutipan atau waktu rekaman. Jangan menyebut target berhasil sebelum ada percobaan baru.'
      }),
      day({
        title: 'D2 — Tenggat dan hari pelaksanaan',
        objective: 'Memperbaiki by/on dan memisahkan dua tindakan bertanggal dalam respons baru.',
        explanation: `**By Tuesday** berarti Selasa batas terakhir; pengiriman lebih awal masih sesuai. **On Thursday** menunjukkan kegiatan berlangsung Kamis, bukan tenggat yang dapat dimajukan sesuka hati. Kesalahan kecil ini dapat mengubah tindakan penerima. Tulis objek dan kata kerja bersama waktu: daftar dikirim, barang diambil.

Gunakan konfirmasi **Let me check…** untuk membedakan deadline dari collection time. Jangan merangkum dua tindakan menjadi **do it then** jika ada dua hari berbeda. Hari ini latih ketepatan waktu sebagai konteks koreksi; tetap simpan dua target pilihan Anda. Jika target Anda berbeda, tandai juga contoh terkait target tersebut dalam respons yang dibuat.`,
        examples: [pair('Send the repair description by Monday.', 'Kirim deskripsi perbaikan paling lambat Senin.'), pair('Bring the item on Wednesday afternoon.', 'Bawa barang pada Rabu sore.')],
        vocabulary: [pair('by', 'paling lambat'), pair('on', 'pada hari atau tanggal tertentu'), pair('collection time', 'waktu pengambilan')],
        reading: { title: 'Preparing a Costume Display — Nino (original fictional service note)', text: `Nino's fictional service note asks volunteers to send a list of costume sizes by Tuesday. Earlier messages are welcome, but Tuesday is the latest day for the list. Volunteers should collect the costumes on Thursday between three and five from the side office. The main hall will be used for a rehearsal, so costumes must not be left there. Nino asks volunteers to name another collector if they cannot attend. The note does not say collections are available on Wednesday. Its proposed size list may help preparation, but no comparison of collection times has been made. Requests and collection are separate actions with different dates.` },
        listening: { title: 'Confirming a list and a delivery', text: `Tutor: For our fictional book exchange, send the number of boxes by Friday. Deliver the boxes on Sunday between nine and ten.
Learner: So I should send the number on Sunday?
Tutor: No. Friday is the deadline for the number. Sunday is the delivery day.
Learner: Let me check: I will send the box total by Friday, then bring the boxes on Sunday morning. Where do I deliver them?
Tutor: At the rear door, not the front steps. If another person delivers them, include that person's name in your message.
Learner: I will keep the total, delivery time, place, and substitute's name in separate clear details.` },
        quizzes: {
          pattern: [question('“Send the list by Tuesday” berarti…', ['Kirim hanya setelah Selasa.', 'Selasa batas terakhir; boleh lebih awal.', 'Ambil barang pada Selasa.'], 1, 'By menandai deadline, bukan hari wajib tunggal untuk pengiriman.'), question('Kalimat paling jelas untuk dua tindakan adalah…', ['Do it then with them.', 'Bring those at that time.', 'Send the total by Friday and deliver the boxes on Sunday.'], 2, 'Objek, tindakan, dan waktu masing-masing disebut eksplisit.')],
          reading: [question('Kapan kostum diambil?', ['Kamis pukul tiga sampai lima di side office.', 'Selasa kapan saja di aula.', 'Rabu pagi di pintu depan.'], 0, 'Note membedakan deadline daftar Selasa dari collection Kamis.'), question('Apa yang perlu ditulis bila tidak dapat datang?', ['Janji semua koleksi lebih cepat.', 'Nama orang lain yang mengambil.', 'Tanggal baru yang dipilih tanpa izin.'], 1, 'Nino meminta nama collector pengganti, bukan perubahan waktu otomatis.')],
          listening: [question('Apa yang harus dikirim paling lambat Jumat?', ['Kotak ke tangga depan.', 'Jumlah buku yang tidak disebut.', 'Jumlah kotak.'], 2, 'Box total dikirim dahulu untuk delivery Minggu.'), question('Di mana kotak diserahkan?', ['Pintu belakang.', 'Tangga depan.', 'Side office pada Kamis.'], 0, 'Tutor menyebut rear door dan secara eksplisit menolak front steps.')]
        },
        output: { speaking: 'Beri konfirmasi baru 90 detik tentang costume display: deadline, collection, tempat, dan pengganti. Lalu jelaskan ulang book exchange tanpa melihat catatan.', writing: 'Tulis balasan 100–130 kata kepada Nino dengan dua tanggal terpisah dan satu pertanyaan yang jawabannya belum tersedia. Catat satu contoh sebelum/sesudah koreksi dan satu kalimat baru pada konteks buku.' },
        review: 'Pasangkan setiap waktu dengan kata kerja dan objek. Jangan menghitung kalimat yang disalin dari revisi sebagai bukti transfer mandiri.'
      }),
      day({
        title: 'D3 — Modal dan rujukan yang menjaga makna',
        objective: 'Memperbaiki klaim terlalu pasti dan pronoun kabur dalam pesan kegiatan baru.',
        explanation: `Dua hambatan yang sering mengubah pesan ialah kepastian berlebihan dan rujukan kabur. **May reduce questions** menyatakan harapan terbatas; **has reduced questions** menyatakan hasil yang sudah terjadi. Pilih bentuk berdasarkan status sumber, bukan karena ingin terdengar lebih percaya diri.

Untuk rujukan, periksa **it**, **they**, dan **them** ketika beberapa benda atau orang disebut. Ganti dengan nama benda jika pembaca dapat menafsirkannya lebih dari satu cara. Anda tidak harus menghapus semua pronoun; cukup buat rujukannya jelas. Setelah memperbaiki satu kalimat, buat contoh baru pada konteks berbeda agar latihan melampaui salinan revisi.`,
        examples: [pair('The checklist may make the next step clearer; it has not been tested.', 'Checklist mungkin memperjelas langkah berikutnya; checklist belum diuji.'), pair('Send the form today and bring the labelled jars on Saturday.', 'Kirim formulir hari ini dan bawa stoples berlabel pada Sabtu.')],
        vocabulary: [pair('modal verb', 'kata kerja penanda kemungkinan atau kewajiban'), pair('reference', 'rujukan kata'), pair('overstatement', 'klaim yang terlalu kuat')],
        reading: { title: 'A Clearer Jar-Swap Message — Mira (original fictional revision note)', text: `Mira's fictional note prepares a community jar swap. A draft tells volunteers to complete a request form and label their jars, then says, “Bring them then.” Mira replaces the final instruction with “Send the form by Wednesday and bring the labelled jars on Saturday morning.” She also changes “The labels have removed confusion” to “The labels may help visitors identify the contents.” No swap using the labels has occurred. Volunteers should still explain contents aloud when asked, and the note gives no guarantee that every visitor will understand each label. Mira's revision aims to clarify the planned arrangement, not to report a measured improvement.` },
        listening: { title: 'Repairing two meaning-changing sentences', text: `Tutor: Your fictional donation message mentions bags and forms. Then you say, “Put them there.” What should go where?
Learner: The bags should go on the covered shelf. The forms should go in the office box. I need to name them separately.
Tutor: You also say the new shelf has prevented missing donations. What supports that?
Learner: Nothing measured. The source only proposes the shelf. I will say it may make donations easier to locate, but the effect has not been checked.
Tutor: Now make a fresh sentence about another object.
Learner: A numbered tray may help us find returned keys, but we would need to try it before claiming fewer losses.` },
        quizzes: {
          pattern: [question('Sumber hanya mengusulkan label. Kalimat tepat…', ['The labels have eliminated every question.', 'The labels may help identify contents.', 'Every visitor has understood all labels.'], 1, 'May menjaga status manfaat yang belum diuji.'), question('Rujukan “them” perlu diganti bila…', ['Ada beberapa benda yang mungkin dirujuk.', 'Hanya ada satu benda dan rujukannya jelas.', 'Setiap kali muncul, tanpa alasan.'], 0, 'Tujuannya menghilangkan ambiguitas, bukan melarang semua pronoun.')],
          reading: [question('Apa pasangan instruksi hasil revisi Mira?', ['Bawa formulir Sabtu dan kirim stoples Rabu.', 'Letakkan semua benda tanpa waktu.', 'Kirim formulir paling lambat Rabu; bawa stoples Sabtu pagi.'], 2, 'Revisi mengikat tindakan, objek, dan waktu masing-masing.'), question('Mengapa “have removed confusion” diubah?', ['Semua label dilarang.', 'Belum ada swap dengan label dan belum ada hasil.', 'Sudah ada penelitian yang menyatakan gagal.'], 1, 'Kalimat hasil tidak sesuai status kegiatan yang belum berlangsung.')],
          listening: [question('Ke mana forms harus diletakkan?', ['Kotak di kantor.', 'Rak tertutup bersama bags.', 'Baki kunci bernomor.'], 0, 'Learner memisahkan forms di office box dari bags di covered shelf.'), question('Apa fungsi kalimat tentang key tray?', ['Membuktikan pengurangan kehilangan.', 'Mengulang kata benda dari pesan yang sama saja.', 'Memberi contoh baru dengan modal dan batas hasil.'], 2, 'Contoh berpindah objek sambil menjaga may dan kebutuhan trial.')]
        },
        output: { speaking: 'Jelaskan revisi Mira selama dua menit, lalu buat pesan lisan baru tentang penyimpanan dua jenis benda dengan tempat berbeda dan satu klaim may yang terbatas.', writing: 'Tulis respons 120–150 kata pada jar swap. Sertakan instruksi jelas, modal sesuai status, dan dua target pribadi. Lampirkan satu kalimat awal, revisi, serta contoh baru yang tidak disalin.' },
        review: 'Untuk setiap has/have dan will, cek apakah sumber mendukung tingkat kepastian. Untuk setiap pronoun, tunjuk satu rujukan yang tidak ambigu.'
      }),
      day({
        title: 'D4 — Jawaban inti dan konfirmasi lisan',
        objective: 'Menjawab pertanyaan pada kalimat pertama serta mengonfirmasi detail tanpa menyembunyikan celah.',
        explanation: `Koreksi speaking bukan selalu berbicara lebih cepat. Jika jawaban inti muncul terlalu lambat, gunakan urutan jawaban–alasan–batasan. Pertanyaan **When?** dimulai dengan waktu; **Who?** dimulai dengan pelaku. Beri latar hanya setelah kebutuhan pendengar terpenuhi.

Untuk detail yang diragukan, gunakan **Let me confirm…** atau minta pengulangan. Jangan mengisi celah dengan jawaban yang lancar tetapi salah. Rekam percobaan awal, revisi bagian yang mengganggu, lalu jawab pertanyaan baru tanpa menulis skrip. Jika mengevaluasi sendiri, labeli sebagai pemeriksaan mandiri; Anda belum memperoleh feedback independen hanya karena mendengarkan rekaman dua kali.`,
        examples: [pair('The forms are due by Wednesday. We need them before preparing the packs.', 'Formulir harus masuk paling lambat Rabu. Kita membutuhkannya sebelum menyiapkan paket.'), pair('The note does not name a substitute, so I would ask the organiser.', 'Catatan tidak menyebut pengganti, jadi saya akan bertanya kepada penyelenggara.')],
        vocabulary: [pair('answer first', 'jawab inti dahulu'), pair('confirmation', 'penegasan kembali detail'), pair('self-assessment', 'penilaian mandiri')],
        reading: { title: 'Answer the Question in Front of You — Dela (original fictional feedback log)', text: `Dela's fictional feedback log concerns a neighbourhood photo display. The organiser asks volunteers to send photo titles by Wednesday and bring printed photographs on Friday afternoon. A helper asks, “When do you need the titles?” In Dela's first recording, she talks about the display's purpose for forty seconds before naming Wednesday. In a revised answer, she begins with the deadline and then explains that titles are needed for labels. She also records that the note does not name a substitute organiser if the main contact is absent. Dela evaluates her own recordings and labels the exercise self-assessment, not independent feedback from an expert.` },
        listening: { title: 'A direct answer followed by a gap', text: `Tutor: When should members send the number of display boards in this fictional plan?
Learner: By Monday. The organiser needs the total before arranging tables.
Tutor: Where should boards be delivered?
Learner: To the east entrance on Thursday morning. Let me confirm: the number is due Monday, while the boards arrive Thursday.
Tutor: Who takes over if the organiser is absent?
Learner: The note does not name a substitute. I would ask before promising a contact.
Tutor: Did someone else assess this response?
Learner: No. I am reviewing my own recording, so I will call it self-assessment and note that an independent opinion is still unavailable.` },
        quizzes: {
          pattern: [question('Pertanyaan “When are titles due?” sebaiknya dimulai dengan…', ['The whole history of the display.', 'By Wednesday.', 'Many people enjoy photos.'], 1, 'Kalimat pertama menjawab waktu yang ditanyakan.'), question('Evaluasi rekaman sendiri harus disebut…', ['Independent expert certification.', 'A guaranteed proficiency score.', 'Self-assessment.'], 2, 'Tanpa penilai lain, bukti tersebut adalah penilaian mandiri.')],
          reading: [question('Apa masalah respons pertama Dela?', ['Deadline baru disebut setelah latar empat puluh detik.', 'Ia menyebut Wednesday terlalu cepat.', 'Ia meminta semua orang menghafal foto.'], 0, 'Masalahnya keterlambatan jawaban inti, bukan kekurangan latar.'), question('Apa yang belum disebut catatan?', ['Hari membawa foto.', 'Pengganti penyelenggara jika absen.', 'Tenggat photo titles.'], 1, 'Dela mengakui gap tentang substitute organiser.')],
          listening: [question('Pasangan tindakan dan waktu yang benar?', ['Papan Senin; jumlah Kamis.', 'Keduanya pada Jumat.', 'Jumlah paling lambat Senin; papan Kamis pagi.'], 2, 'Konfirmasi memisahkan deadline jumlah dari delivery boards.'), question('Apa respons untuk pertanyaan pengganti?', ['Catatan belum menyebut; tanyakan sebelum menjanjikan kontak.', 'Pasti orang bernama tertentu tanpa sumber.', 'Tidak perlu peduli pertanyaan.'], 0, 'Learner menjawab celah secara langsung tanpa membuat nama.')]
        },
        output: { speaking: 'Jawab empat pertanyaan baru tentang photo display, maksimal 30–40 detik per jawaban: deadline judul, waktu foto, alasan judul, dan pengganti kontak. Awali dengan inti atau gap.', writing: 'Tulis log 100–130 kata yang membandingkan respons awal dan baru pada dua target pribadi. Kutip kalimat atau waktu, labeli self-assessment bila tidak ada penilai lain.' },
        review: 'Hitung jawaban yang inti pertamanya benar-benar menjawab pertanyaan. Jangan mengubah hitungan lokal itu menjadi persentase kemampuan bahasa umum.'
      }),
      day({
        title: 'D5 — Transfer koreksi tanpa melihat revisi',
        objective: 'Menerapkan dua target pilihan pada konteks baru dan membandingkan bukti awal dengan respons mandiri.',
        explanation: `Transfer memerlukan tugas baru yang tidak hanya mengganti nama pada skrip lama. Tutup contoh revisi dan gunakan sumber hari ini untuk membuat respons pertama. Setelah selesai, periksa dua target yang Anda pilih pada D1. Nilai dengan bukti: berhasil, masih perlu bantuan, atau belum ada kesempatan menunjukkan target.

Jangan memaksakan kesimpulan kemajuan jika tugas baru tidak memunculkan perilaku yang ditargetkan. Buat satu pertanyaan tambahan yang relevan agar bukti tersedia. Simpan respons pertama sebelum koreksi dan bedakan bantuan yang digunakan. Tujuan hari ini ialah mengetahui apakah perbaikan bertahan saat isi berubah, bukan menghasilkan halaman paling sempurna dengan sebanyak mungkin bantuan.`,
        examples: [pair('In this new reply, I kept the request deadline separate from delivery.', 'Dalam balasan baru ini, saya memisahkan deadline permintaan dari pengiriman.'), pair('I still needed help to limit the claim, so transfer is not yet independent.', 'Saya masih memerlukan bantuan untuk membatasi klaim, jadi transfer belum mandiri.')],
        vocabulary: [pair('transfer attempt', 'percobaan pada konteks baru'), pair('without copying', 'tanpa menyalin'), pair('not yet evidenced', 'belum memiliki bukti')],
        reading: { title: 'A New Situation: Community Banner Printing — Olin (original fictional request)', text: `Olin's fictional request concerns banners for a community event. Groups should send the exact banner wording by Monday evening. They may send it earlier, but printing begins Tuesday. Finished banners can be collected on Friday from the workshop's side entrance between two and four. Groups must name a collector if someone else will come. Olin proposes a wording checklist to help groups notice missing dates, but it has not been tested and does not guarantee error-free banners. The note does not specify how late changes will be handled. Groups needing help writing can request a short spoken planning call before the deadline. No real printing order is required for this exercise.` },
        listening: { title: 'A fresh confirmation for a repair visit', text: `Tutor: In our fictional lantern-repair visit, send a description of your lantern by Tuesday. Bring it to the covered yard on Saturday between ten and twelve.
Learner: The description is due by Tuesday; the lantern itself comes on Saturday morning. May somebody else bring it?
Tutor: Yes, name that person in your message. The description helps planning, but we cannot guarantee a repair, especially if special parts are needed.
Learner: I will not promise a repair. What if Saturday's weather is bad?
Tutor: The note does not give a weather plan. We should ask the organiser rather than automatically change the place or cancel the visit.` },
        quizzes: {
          pattern: [question('Apa bukti transfer yang lebih kuat?', ['Membaca revisi lama dengan lancar.', 'Menyalin koreksi ke konteks bernama baru.', 'Respons baru pada sumber berbeda tanpa melihat revisi.'], 2, 'Tugas baru tanpa menyalin menunjukkan apakah keterampilan berpindah.'), question('Target belum muncul dalam tugas baru. Laporan jujur…', ['Not yet evidenced; I need a relevant new question.', 'Perfectly mastered forever.', 'Officially certified.'], 0, 'Ketiadaan kesempatan menunjukkan target tidak sama dengan keberhasilan.')],
          reading: [question('Apa yang harus dikirim paling lambat Senin malam?', ['Banner jadi.', 'Tulisan banner yang persis.', 'Hasil evaluasi checklist.'], 1, 'Wording dikirim sebelum printing dimulai Selasa.'), question('Apa yang belum ditentukan?', ['Tempat collection.', 'Rentang waktu Jumat.', 'Cara menangani perubahan yang terlambat.'], 2, 'Note tidak memberi late-change policy.')],
          listening: [question('Apa yang tidak dapat dijamin dari description awal?', ['Lantern pasti dapat diperbaiki.', 'Description harus dikirim Selasa.', 'Ada rentang waktu Sabtu.'], 0, 'Kebutuhan special parts dapat membuat repair tidak terjamin.'), question('Apa status rencana cuaca buruk?', ['Pasti dibatalkan.', 'Belum diberikan; perlu bertanya kepada organiser.', 'Otomatis pindah ke sekolah.'], 1, 'Learner tidak boleh membuat kebijakan cuaca yang tidak ada.')]
        },
        output: { speaking: 'Tutup revisi lama. Jelaskan banner request 2–3 menit dan jawab spontan tentang perubahan terlambat. Periksa dua target pribadi hanya setelah rekaman selesai.', writing: 'Tulis balasan 150–180 kata kepada Olin dengan deadline, collection, bantuan bila perlu, dan pertanyaan yang belum terjawab. Tambahkan log dua target: bukti awal, bukti baru, bantuan, dan status transfer.' },
        review: 'Bandingkan dua target saja, dengan kutipan nyata. Simpan respons mandiri sebelum koreksi sebagai bukti untuk audit akhir.'
      })
    ],
    assessment: {
      title: 'D6 — Bukti perbaikan pada situasi tak dilatih',
      objective: 'Menggunakan dua target koreksi pada paket baru dan melaporkan hasil dengan bukti serta batas bantuan.',
      explanation: `Kerjakan paket hari keenam tanpa membuka contoh koreksi terlebih dahulu. Pertahankan dua target pilihan Anda dan buat respons awal yang benar-benar baru. Simpan produk itu sebelum melakukan pemeriksaan. Gunakan pertanyaan lanjutan untuk melihat apakah target bertahan ketika Anda tidak sempat menyiapkan kalimat.

Sesudahnya, tandai bukti berhasil, masih perlu bantuan, atau belum cukup bukti. Kutip kalimat dan waktu rekaman. Jika hanya membaca naskah suara, jangan menyatakan hasil listening. Bila meminta orang lain menilai, catat siapa serta aspek yang dinilai; bila memeriksa sendiri, gunakan label penilaian mandiri tanpa menjadikannya sertifikasi independen.`,
      examples: [pair('The new response keeps the deadline and event date distinct.', 'Respons baru membedakan deadline dari hari kegiatan.'), pair('My review found one unsupported promise, which I revised after the first attempt.', 'Pemeriksaan saya menemukan satu janji tanpa dukungan yang saya revisi sesudah percobaan pertama.')],
      vocabulary: [pair('correction evidence', 'bukti hasil koreksi'), pair('unrehearsed response', 'respons yang belum dilatih'), pair('assistance record', 'catatan bantuan')],
      quizzes: { pattern: [question('Perbandingan perbaikan harus memakai…', ['Perasaan lebih percaya diri saja.', 'Kutipan atau rekaman pada target yang sama.', 'Jumlah halaman sebagai skor resmi.'], 1, 'Bukti spesifik memungkinkan perubahan pada target yang sama diperiksa.'), question('Respons dibuat setelah melihat model. Kondisinya…', ['Harus disebut mandiri sepenuhnya.', 'Tidak perlu dicatat.', 'Perlu dilabeli menggunakan bantuan model.'], 2, 'Bantuan tetap berguna tetapi tidak setara dengan respons tanpa bantuan.')] },
      output: { speaking: 'Buat respons tiga menit tentang paket baru dan jawab dua pertanyaan tanpa skrip selama maksimal satu menit secara keseluruhan. Total rekaman maksimal empat menit. Setelah selesai, tinjau hanya dua target dan rekam ulang bagian yang gagal secara terpisah.', writing: 'Tulis respons 150–200 kata pada situasi assessment. Lampirkan dua target, kutipan awal, revisi, bukti baru, serta kondisi bantuan. Jangan mengklaim penguasaan umum dari dua keberhasilan lokal.' },
      review: 'Simpan produk pertama dan revisi terpisah. Siapkan satu bukti transfer yang benar-benar mandiri untuk portofolio minggu akhir.'
    }
  },
  {
    week: 26,
    days: [
      day({
        title: 'D1 — Audit membaca: jawaban dan dasar teks',
        objective: 'Menghasilkan profil membaca berdasarkan klaim, detail, batasan, dan kondisi bantuan pada sumber baru.',
        explanation: `Audit akhir tidak menambah aturan baru. Untuk membaca, tunjukkan bukan hanya jawaban, tetapi kalimat sumber yang mendasarinya. Pisahkan apa yang tertulis dari simpulan Anda. Catat kondisi: sekali atau berulang, kamus atau tidak, serta apakah jawaban dibuat sebelum melihat penjelasan kuis.

Gunakan teks baru agar hasil tidak berasal dari hafalan. Nilai ketepatan gagasan utama, detail, dan batasan secara terpisah. Skor lokal tidak dapat dikonversi menjadi CEFR atau kesiapan kuliah. Jika satu batasan terlewat, simpan sebagai gap spesifik untuk latihan berikutnya, bukan alasan menyatakan seluruh kemampuan membaca lemah.`,
        examples: [pair('I located both recommendations, but missed one exception on my first reading.', 'Saya menemukan kedua rekomendasi, tetapi melewatkan satu pengecualian pada bacaan pertama.'), pair('This sentence supports my answer; the cost is not stated.', 'Kalimat ini mendukung jawaban saya; biaya tidak disebutkan.')],
        vocabulary: [pair('reading evidence', 'bukti pemahaman bacaan'), pair('task condition', 'kondisi pengerjaan'), pair('textual support', 'dasar dari teks')],
        reading: { title: 'Finding a Place to Begin — original fictional sources by Elma and Harun', text: `Elma's fictional note, “A Quiet Starting Table,” proposes keeping one table silent during the first half-hour of a neighbourhood study session. Her example concerns members drafting individual messages. She recognises that newcomers needing spoken guidance would require another place. Harun's fictional note, “Begin with Questions,” proposes a short welcome conversation at the start. Newcomers could ask where materials belong, although conversation might disturb individual writers in the same room. Neither note reports attendance, task completion, or room measurements. Both want members to begin useful work. Their different assumptions concern who needs help first and whether separate space is available, not proven differences in learning gains.` },
        listening: { title: 'Reporting a reading audit accurately', text: `Tutor: What did your first reading of the fictional sources show?
Learner: I identified the quiet-table proposal and the welcome conversation. I answered before opening the quiz explanations.
Tutor: Did you catch every limit?
Learner: No. I missed the need for another place for spoken guidance. I found it when I read again.
Tutor: How will you report that?
Learner: Main proposals identified on the first reading; one access limit found on the second. I used no dictionary, but I reopened the text.
Tutor: Can this become a formal proficiency score?
Learner: No. It describes this reading task and its conditions, not an official level.` },
        quizzes: {
          pattern: [question('Laporan membaca paling berbukti adalah…', ['I am perfect at every text.', 'I found both proposals first, then one limit after rereading.', 'My local quiz guarantees university admission.'], 1, 'Laporan menyebut perilaku dan kondisi, bukan generalisasi kemampuan.'), question('Dasar jawaban bacaan sebaiknya berupa…', ['Kalimat sumber atau penalaran berlabel yang relevan.', 'Pilihan yang paling panjang saja.', 'Fakta luar yang tidak ada dalam tugas.'], 0, 'Audit menilai ketepatan terhadap teks dan pembedaan inferensi.')],
          reading: [question('Apa tujuan bersama Elma dan Harun?', ['Mengukur semua learning gains.', 'Menutup ruang untuk pemula.', 'Membantu anggota memulai pekerjaan bermanfaat.'], 2, 'Tujuan itu dinyatakan di bagian akhir sumber.'), question('Kondisi ruang apa belum diketahui?', ['Nama dua penulis.', 'Apakah tersedia ruang terpisah.', 'Adanya usulan quiet table.'], 1, 'Kedua metode bergantung pada kebutuhan yang mungkin memerlukan area terpisah.')],
          listening: [question('Kapan Learner menemukan access limit?', ['Pada pembacaan kedua.', 'Dari kamus sebelum membaca.', 'Dari penilaian resmi universitas.'], 0, 'Learner mengaku baru menemukannya saat membaca kembali.'), question('Apa cakupan laporan tersebut?', ['Semua teks masa depan.', 'Sertifikasi CEFR.', 'Tugas membaca ini beserta kondisinya.'], 2, 'Laporan membatasi kesimpulan pada bukti lokal.')]
        },
        output: { speaking: 'Bandingkan sumber baru selama dua menit dari catatan, lalu jelaskan kondisi membaca dan satu gap selama 30 detik.', writing: 'Tulis sintesis 140–170 kata dan audit membaca empat baris: bukti, kondisi, kekuatan, gap. Beri satu dasar teks untuk tiap jawaban kuis sebelum melihat penjelasannya.' },
        review: 'Pisahkan jawaban awal dari koreksi setelah membaca ulang. Jangan memasukkan detail yang baru diperoleh kemudian ke laporan percobaan pertama.'
      }),
      day({
        title: 'D2 — Audit listening: pertama, ulang, transkrip',
        objective: 'Membedakan detail yang terdengar pertama kali, setelah pengulangan, dan setelah membaca naskah.',
        explanation: `Listening memerlukan bukti bunyi yang benar-benar didengar. Sebelum memutar audio, tutup transkrip dan sediakan ruang untuk keputusan, waktu, pelaku, dan limit. Sesudah pemutaran pertama, simpan catatan sebelum mengulang. Gunakan tiga label: pertama, ulang, dan transkrip.

Detail yang baru ditemukan setelah membaca tetap membantu belajar, tetapi tidak boleh dilaporkan sebagai hasil pendengaran pertama. Jika audio tidak tersedia, lakukan latihan naskah dan nyatakan bukti listening belum tersedia. Kualitas suara sintetis dan pengulangan merupakan kondisi tugas lokal; jangan menyamakannya dengan ujian autentik atau interaksi manusia yang memiliki tuntutan berbeda.`,
        examples: [pair('I heard the decision once but needed a second playback for the time.', 'Saya mendengar keputusan sekali tetapi memerlukan putaran kedua untuk waktunya.'), pair('I found the location only after reading the transcript.', 'Saya baru mengetahui lokasi setelah membaca transkrip.')],
        vocabulary: [pair('playback count', 'jumlah pemutaran'), pair('transcript support', 'bantuan transkrip'), pair('listening gap', 'detail yang belum tertangkap lewat audio')],
        reading: { title: 'Three Evidence Labels — Jihan (original fictional audit note)', text: `Jihan's fictional audit note reviews a short audio briefing about a book donation day. On the first playback, she catches the request for a book total but misses the deadline. On the second, she records Tuesday evening. Only after opening the transcript does she find that delivery uses the side entrance. She marks each detail with its evidence label instead of writing that she understood everything at once. The briefing includes no result about faster sorting. Jihan preserves that limit in her summary. She also records that the voice was synthetic and that she listened alone with headphones. These conditions describe the local task without claiming official listening proficiency.` },
        listening: { title: 'A new briefing for an honest listening record', text: `Tutor: This fictional community desk needs volunteers to send their available hours by Thursday evening. The planning meeting is on Saturday from nine to ten in the upstairs room. Those are separate actions: send your hours first, then attend the meeting if you can.
Learner: What if someone cannot use the stairs?
Tutor: They should tell the coordinator before the meeting so an accessible arrangement can be discussed. The current note does not confirm an alternative room.
Learner: Has the new planning routine reduced missed shifts?
Tutor: No comparison has been made. It is a proposed routine, not a measured result. Please keep that limit in your notes.` },
        quizzes: {
          pattern: [question('Detail baru diketahui dari transkrip. Label tepat…', ['First-playback success.', 'Independent listening without text.', 'Found after reading transcript.'], 2, 'Kondisi bukti harus menunjukkan bagaimana detail diperoleh.'), question('Jika tidak ada audio, laporan yang benar…', ['Listening evidence is unavailable; I practised the script as reading.', 'I heard everything perfectly once.', 'The quiz is an official listening score.'], 0, 'Tanpa mendengar bunyi, hasil tidak boleh diklaim sebagai listening.')],
          reading: [question('Apa yang baru ditemukan Jihan dari transkrip?', ['Adanya permintaan book total.', 'Pengiriman memakai side entrance.', 'Deadline Tuesday evening pada putaran kedua.'], 1, 'Teks membedakan lokasi dari detail yang terdengar sebelumnya.'), question('Kondisi audio apa dicatat Jihan?', ['Percakapan manusia langsung di aula.', 'Ujian resmi dengan penguji.', 'Suara sintetis, sendiri, dengan headphones.'], 2, 'Kondisi tersebut membatasi interpretasi hasil tugas.')],
          listening: [question('Kapan available hours harus dikirim?', ['Paling lambat Kamis malam.', 'Sabtu pukul sepuluh setelah meeting.', 'Senin pagi.'], 0, 'Deadline pengiriman Kamis berbeda dari meeting Sabtu.'), question('Apa yang belum dikonfirmasi?', ['Adanya upstairs room.', 'Ruangan alternatif yang dapat diakses.', 'Rentang waktu meeting.'], 1, 'Perlu diskusi kebutuhan akses; note belum menetapkan alternatif.')]
        },
        output: { speaking: 'Dari catatan audio, jelaskan keputusan, waktu, akses, dan limit selama dua menit. Lalu laporkan detail mana diperoleh pada tiap tahap. Jika tanpa audio, labeli latihan naskah.', writing: 'Buat tabel detail/pertama/ulang/transkrip. Tulis ringkasan 100–130 kata serta audit listening empat baris dengan jumlah pemutaran dan bantuan yang dipakai.' },
        review: 'Pertahankan kolom awal tanpa menimpanya. Bukti bantuan bukan kegagalan, tetapi kategorinya harus tetap jujur.'
      }),
      day({
        title: 'D3 — Audit speaking dan writing terpisah',
        objective: 'Membandingkan kelengkapan pesan, organisasi, dan hambatan makna pada dua bentuk output baru.',
        explanation: `Speaking dan writing menggunakan isi yang sama tetapi menuntut bukti berbeda. Pada rekaman, periksa apakah keputusan dan jawaban inti terdengar tanpa membaca memo. Pada tulisan, periksa apakah pembaca menemukan tindakan, alasan, syarat, dan langkah berikutnya. Jangan memberi satu nilai umum hanya karena salah satu bentuk lebih rapi.

Gunakan kriteria pesan lengkap, makna tepat, organisasi, dan hambatan bahasa. Catat satu contoh untuk masing-masing skill. Jeda lisan tidak otomatis berarti makna salah; grammar rapi juga tidak menjamin keputusan konsisten. Simpan output awal sebelum revisi dan jelaskan bantuan yang digunakan, termasuk outline, kamus, atau model kalimat.`,
        examples: [pair('My memo names the action owner, but my recording leaves that person unclear.', 'Memo saya menyebut penanggung jawab, tetapi rekaman saya membuat orang itu tidak jelas.'), pair('I answered directly, although I paused before explaining the condition.', 'Saya menjawab langsung, walaupun jeda muncul sebelum menjelaskan syarat.')],
        vocabulary: [pair('message completeness', 'kelengkapan pesan'), pair('organisation', 'susunan gagasan'), pair('meaning barrier', 'hambatan pemahaman makna')],
        reading: { title: 'Who Reviews the Club Newsletter? — original fictional sources by Novi and Arman', text: `Novi's fictional note, “One Named Editor,” proposes a single editor for a community newsletter. Writers would know whom to contact and the editor could check consistent wording across sections. However, one volunteer could face a heavy workload, and illness might delay review. Arman's fictional note, “A Rotating Review Pair,” proposes two different reviewers for each issue. The workload could be shared, although reviewers might interpret the style guide differently and would need a clear handover. Neither writer compares publication delays or reader understanding. A learner may recommend a trial with a named decision owner, but cannot claim either method has improved the newsletter. The notes support separate spoken and written tasks.` },
        listening: { title: 'Different gaps in two newsletter outputs', text: `Tutor: What did you find when reviewing your fictional newsletter task?
Learner: My memo names the coordinator as the person who assigns reviewers. In the recording, I say only “someone,” so the action owner is unclear.
Tutor: Did speaking have any strength?
Learner: Yes. I answered the question about an absent editor immediately, then gave a reason. My memo hides that risk near the end.
Tutor: Will you give both skills the same judgement?
Learner: No. I will record separate strengths and gaps. I used an outline for speaking and a dictionary for writing. Both supports belong in the evidence record rather than being silently ignored.` },
        quizzes: {
          pattern: [question('Audit speaking dan writing sebaiknya…', ['Disatukan karena selalu sama.', 'Dipisahkan dengan bukti spesifik tiap bentuk.', 'Dinilai hanya dari panjang output.'], 1, 'Bentuk berbeda dapat menunjukkan kekuatan serta gap berbeda.'), question('Yang paling menunjukkan hambatan makna adalah…', ['Jeda singkat dengan jawaban tetap jelas.', 'Satu kata yang dieja berbeda tanpa mengubah pesan.', 'Penanggung jawab tindakan tidak dapat diketahui.'], 2, 'Ketidakjelasan pelaku mengganggu kelengkapan tindakan.')],
          reading: [question('Apa risiko rotating pair menurut Arman?', ['Penafsiran style guide bisa berbeda dan perlu handover jelas.', 'Tidak memerlukan pembagian kerja.', 'Sudah terbukti menghapus semua delay.'], 0, 'Arman mengakui konsistensi dan handover sebagai batas sistem bergilir.'), question('Apa yang tidak dibandingkan kedua sumber?', ['Pilihan reviewer.', 'Keterlambatan publikasi atau pemahaman pembaca.', 'Penulis dengan nama.'], 1, 'Tidak ada perbandingan hasil publication delays atau reader understanding.')],
          listening: [question('Apa gap pada rekaman Learner?', ['Tidak menyebut risiko apa pun.', 'Tidak memakai bahasa Inggris.', 'Menyebut “someone” sehingga pemilik tindakan kabur.'], 2, 'Action owner tidak teridentifikasi, berbeda dari memo.'), question('Bantuan apa yang digunakan?', ['Outline untuk speaking dan kamus untuk writing.', 'Penguji resmi untuk keduanya.', 'Tidak ada bantuan apa pun.'], 0, 'Learner melaporkan dua bentuk dukungan secara terpisah.')]
        },
        output: { speaking: 'Bandingkan opsi newsletter review selama tiga menit dan jawab dua pertanyaan total maksimal satu menit: risiko utama dan bukti yang kurang. Simpan rekaman sebelum revisi.', writing: 'Tulis memo 180–220 kata dengan rekomendasi, syarat, pemilik usulan, dan review. Buat dua audit terpisah untuk speaking/writing: bukti, bantuan, kekuatan, gap.' },
        review: 'Gunakan kutipan tulisan dan waktu rekaman untuk setiap penilaian. Jangan memakai satu kelebihan untuk menutupi gap skill lain.'
      }),
      day({
        title: 'D4 — Portofolio: awal, revisi, transfer',
        objective: 'Memilih tiga jenis bukti dan menjelaskan perubahan tanpa menyamakan revisi dengan transfer.',
        explanation: `Portofolio bukan kumpulan versi paling rapi saja. Pilih contoh awal, revisi yang dapat Anda jelaskan, dan respons baru pada konteks berbeda. Ketiganya menjawab pertanyaan berbeda: apa yang terjadi dahulu, apa yang diperbaiki, dan apakah perbaikan bertahan saat isi berubah.

Sebut tanggal atau identitas tugas serta bantuan pada setiap bukti. Gunakan **This revision changes…** untuk proses dan **The new task shows…** untuk transfer. Jangan mengklaim feedback independen jika semua pemeriksaan dilakukan sendiri. Jika bukti belum ada, tulis gap tersebut dan pilih tugas baru yang benar-benar dapat mengujinya, bukan mengarang riwayat kemajuan.`,
        examples: [pair('The revision fixes the deadline, while the new task checks whether I can do that elsewhere.', 'Revisi memperbaiki deadline, sementara tugas baru memeriksa apakah saya dapat melakukannya di konteks lain.'), pair('This is self-assessment; no independent reviewer has checked it.', 'Ini penilaian mandiri; belum ada penilai independen yang memeriksanya.')],
        vocabulary: [pair('portfolio', 'kumpulan bukti proses dan produk'), pair('revision history', 'riwayat perbaikan'), pair('transfer evidence', 'bukti penerapan pada konteks berbeda')],
        reading: { title: 'Choosing Evidence, Not Decorations — Tesa (original fictional portfolio note)', text: `Tesa's fictional portfolio note compares three pieces of work. Her first email confuses the deadline for a volunteer list with the date of an event. A revised email gives each action a separate date. A later reply about a different workshop also keeps the dates clear without copying the revision. Tesa selects all three, not only the neatest final email. She explains that the revision shows correction while the later reply offers transfer evidence. She also includes a recording where a follow-up answer still begins with too much background. That unresolved gap makes the portfolio more informative than a claim that every skill has become perfect.` },
        listening: { title: 'Checking what each portfolio item proves', text: `Tutor: Why did you include two versions of the same fictional memo?
Learner: The first has an unsupported claim that the plan saves time. The revision changes it to a possibility and names the missing evidence.
Tutor: Does that alone show transfer?
Learner: No. My later response about an unfamiliar booking system is the transfer item. I limited the claim there without looking at the revised memo.
Tutor: Who reviewed the items?
Learner: I did. I will label the comments self-assessment. I also keep one unresolved problem: my spoken answer to an unexpected question is still too indirect.` },
        quizzes: {
          pattern: [question('Revisi teks lama menunjukkan…', ['Pasti penguasaan semua konteks.', 'Proses koreksi pada tugas itu.', 'Skor resmi independen.'], 1, 'Transfer perlu tugas baru; revisi memberi bukti proses yang berbeda.'), question('Portofolio yang informatif juga mencantumkan…', ['Hanya pujian tanpa contoh.', 'Riwayat rekaan bila lupa.', 'Gap tersisa beserta bukti dan bantuan.'], 2, 'Keterbatasan nyata membantu menafsirkan kemajuan secara jujur.')],
          reading: [question('Apa transfer item Tesa?', ['Balasan workshop berbeda dengan tanggal jelas tanpa menyalin.', 'Email awal yang salah.', 'Versi yang hanya diganti warna.'], 0, 'Later reply memberi bukti penerapan pada konteks baru.'), question('Gap apa masih dicatat?', ['Tidak pernah dapat membaca nama.', 'Jawaban lanjutan terlalu banyak latar sebelum inti.', 'Semua tanggal sudah hilang.'], 1, 'Rekaman menunjukkan jawaban follow-up yang masih indirect.')],
          listening: [question('Apa yang diperbaiki pada memo?', ['Tanda tangan saja.', 'Nama folder saja.', 'Klaim pasti menghemat waktu menjadi kemungkinan dengan celah bukti.'], 2, 'Revisi mengoreksi tingkat kepastian dan menyebut missing evidence.'), question('Bagaimana komentar evaluasi dilabeli?', ['Self-assessment.', 'Sertifikasi penguji independen.', 'Skor nasional.'], 0, 'Learner sendiri yang meninjau bukti.')]
        },
        output: { speaking: 'Jelaskan tiga item portofolio Anda selama tiga menit: awal, revisi, transfer. Tambahkan satu gap nyata dan label bantuan, tanpa mengarang perubahan.', writing: 'Susun indeks bukti 150–200 kata dengan identitas tugas, kondisi, apa yang ditunjukkan, dan apa yang belum dibuktikan. Bila satu item tidak ada, sebut kekurangan dan buat respons baru 80 kata pada topik newsletter D3 untuk mulai mengisinya.' },
        review: 'Jangan menyebut dua versi tugas sama sebagai dua bukti transfer. Pastikan klaim perbaikan memiliki pasangan sebelum–sesudah yang dapat dilihat.'
      }),
      day({
        title: 'D5 — Profil empat skill dan rencana 12 minggu',
        objective: 'Menyusun profil berbukti dan rencana lanjutan dengan frekuensi, konteks baru, serta waktu audit.',
        explanation: `Akhiri latihan dengan profil empat skill, bukan satu label umum. Untuk tiap skill, sebut bukti tugas, kondisi bantuan, kekuatan, dan gap utama. Jika tidak ada audio yang didengar, tulis bahwa bukti listening belum tersedia. Jangan mengubah jumlah pelajaran selesai atau kuis lokal menjadi tingkat resmi.

Rencana dua belas minggu perlu perilaku yang teramati, kegiatan rutin, dan titik review. Minggu 1–4 menargetkan gap utama, 5–8 memindahkannya ke konteks berbeda, dan 9–12 menguji tugas baru serta meninjau ulang. Sesuaikan target dengan bukti, bukan janji menjadi sempurna. Tentukan produk yang akan disimpan agar review berikutnya memiliki dasar.`,
        examples: [pair('Twice a week, I will answer a new follow-up question in the first sentence.', 'Dua kali seminggu, saya akan menjawab pertanyaan lanjutan baru pada kalimat pertama.'), pair('At week four, I will compare three new recordings with my baseline.', 'Pada minggu keempat, saya akan membandingkan tiga rekaman baru dengan contoh awal.')],
        vocabulary: [pair('remaining gap', 'kesenjangan yang tersisa'), pair('review point', 'waktu peninjauan'), pair('observable goal', 'target yang dapat diamati')],
        reading: { title: 'A Plan Based on Evidence — original fictional planning notes by Bima and Alia', text: `Bima's fictional planning note describes a learner who reads recommendations accurately but misses spoken dates on the first playback. He proposes two short listening tasks each week, keeping first and repeated notes separate. Alia's fictional planning note describes a learner whose written decisions are clear but spoken follow-up answers begin with long background. She proposes brief unfamiliar questions twice a week, with recordings saved for comparison. Neither note promises an official level after twelve weeks. Both recommend a review after four weeks, a change of context during the next four, and a new independent task near the end. A real plan for this course should use the learner's own evidence rather than copy either profile automatically.` },
        listening: { title: 'Turning a vague aim into a reviewable plan', text: `Tutor: What is your next goal after the fictional audit?
Learner: Be fluent at everything as soon as possible.
Tutor: Which gap does your evidence show?
Learner: My follow-up answers reach the point too late. For weeks one to four, I will answer two unfamiliar questions each week and put the answer in the first sentence.
Tutor: How will you check transfer?
Learner: During weeks five to eight, I will use different topics. In weeks nine to twelve, I will make a new presentation and answer fresh questions without a script. I will compare saved recordings at weeks four, eight, and twelve, not claim a formal level from the task.` },
        quizzes: {
          pattern: [question('Rencana teramati adalah…', ['Become perfect at everything immediately.', 'Answer two unfamiliar questions weekly and review saved recordings at week four.', 'Finish pages without keeping evidence.'], 1, 'Ada perilaku, frekuensi, produk, dan waktu peninjauan yang jelas.'), question('Profil empat skill sebaiknya…', ['Memakai satu skor resmi dari kuis lokal.', 'Menganggap listening berhasil meski tidak ada audio.', 'Mencatat bukti dan kondisi terpisah untuk tiap skill.'], 2, 'Skill serta bantuan berbeda perlu dilaporkan terpisah.')],
          reading: [question('Untuk siapa usulan Bima terutama relevan?', ['Learner yang melewatkan tanggal lisan pada pemutaran pertama.', 'Semua orang tanpa melihat bukti.', 'Hanya penilai resmi universitas.'], 0, 'Target dipilih dari gap listening yang dijelaskan.'), question('Apa yang tidak dijanjikan kedua catatan?', ['Review setelah empat minggu.', 'Tingkat resmi setelah dua belas minggu.', 'Perubahan konteks di tahap berikut.'], 1, 'Keduanya menolak janji official level dari rencana lokal.')],
          listening: [question('Apa target tahap minggu satu sampai empat?', ['Menulis semua jawaban dahulu untuk dihafal.', 'Menyalin presentasi lama saja.', 'Menjawab dua pertanyaan baru per minggu dengan inti pada kalimat pertama.'], 2, 'Target teramati langsung menanggapi gap jawaban terlalu lambat.'), question('Kapan rekaman ditinjau?', ['Minggu empat, delapan, dan dua belas.', 'Hanya sesudah semua rekaman dihapus.', 'Setiap kali kuis dipakai sebagai CEFR.'], 0, 'Review points disebut eksplisit pada penutup.')]
        },
        output: { speaking: 'Sampaikan profil empat skill dan rencana lanjut selama tiga menit. Jawab satu pertanyaan tentang cara mengetahui transfer selama maksimal satu menit; total rekaman maksimal empat menit.', writing: 'Tulis laporan 200–250 kata tentang empat skill dengan bukti/bantuan/kekuatan/gap. Tambahkan rencana 12 minggu dalam tiga tahap, frekuensi, produk tersimpan, dan review minggu 4/8/12.' },
        review: 'Cocokkan setiap target dengan gap berbukti. Ganti target yang hanya berbunyi “lebih baik” dengan perilaku dan bukti yang dapat diperiksa.'
      })
    ],
    assessment: {
      title: 'D6 — Audit akhir mandiri dan portofolio',
      objective: 'Menyelesaikan tugas baru, melaporkan empat skill secara terpisah, dan menetapkan tindak lanjut berbukti.',
      explanation: `Kerjakan paket baru hari keenam sebelum membuka jawaban atau model. Catat kondisi membaca dan audio, jumlah pengulangan, catatan pembicara, serta bantuan menulis. Simpan output awal. Buat rekomendasi dengan atribusi sumber, batasan, dan penalaran sendiri yang dapat dibedakan.

Sesudah tugas, laporkan empat skill terpisah dengan bukti, kekuatan, dan gap. Jika audio tidak didengar, jangan memberi klaim listening. Bandingkan contoh awal, revisi, dan transfer secara jujur. Akhiri dengan rencana dua belas minggu yang menyebut frekuensi serta review. Audit lokal ini tidak menghasilkan CEFR, skor ujian resmi, atau jaminan siap kuliah.`,
      examples: [pair('This new task shows one independent strength and one remaining gap.', 'Tugas baru ini menunjukkan satu kekuatan mandiri dan satu gap tersisa.'), pair('I used notes for the presentation and recorded that support.', 'Saya menggunakan catatan untuk presentasi dan mencatat bantuan itu.')],
      vocabulary: [pair('final audit', 'pemeriksaan bukti akhir'), pair('independent evidence', 'bukti tanpa bantuan'), pair('next review', 'peninjauan berikutnya')],
      quizzes: { pattern: [question('Kesimpulan yang dapat dipertanggungjawabkan adalah…', ['This local task guarantees a university score.', 'I identified two limits without reopening this text.', 'Finishing the course proves every skill is perfect.'], 1, 'Kalimat kedua menyebut perilaku dan kondisi terbatas, bukan sertifikasi.'), question('Bukti listening belum tersedia jika…', ['Audio didengar sekali tanpa transkrip.', 'Audio didengar ulang dan jumlahnya dicatat.', 'Hanya transkrip dibaca tanpa mendengar audio.'], 2, 'Membaca naskah memberi bukti membaca, bukan kemampuan menangkap bunyi.')] },
      output: { speaking: 'Sampaikan rekomendasi dari paket baru selama tiga menit dan jawab tiga pertanyaan singkat: mengapa pilihan itu, siapa belum terlayani, serta bukti apa kurang. Batasi seluruh rekaman maksimal lima menit.', writing: 'Tulis rekomendasi 200–300 kata dan laporan portofolio empat skill dengan kondisi bantuan. Sertakan awal/revisi/transfer dan rencana 12 minggu dengan kegiatan, frekuensi, produk, serta review minggu 4/8/12.' },
      review: 'Simpan hasil pertama dan revisi terpisah. Laporkan bukti yang benar-benar ada tanpa konversi CEFR atau skor resmi; pilih gap terbesar untuk siklus belajar berikutnya.'
    }
  },
];
