export const lessons3 = [
  {
    week: 19,
    explanation: `## Ringkasan bukan salinan pendek
Ringkasan mempertahankan ide utama, hubungan alasan, dan batasan sumber. Paraphrase menyatakan kembali satu bagian dengan susunan sendiri tanpa mengubah maknanya. Keduanya tetap memerlukan penyebutan sumber. Untuk teks lokal ini, cukup tulis judul dan nama penulis fiktif yang tercantum; jangan menciptakan jurnal atau tautan.

Baca sekali untuk menjawab: masalah apa, usulan apa, dan syarat apa? Tutup teks, tulis catatan tiga poin, lalu susun ringkasan. Buka kembali untuk memeriksa nama, angka, kata pembatas seperti *some*, dan perbedaan antara usulan dengan hasil. Mengganti beberapa kata dengan sinonim sambil mempertahankan seluruh susunan bukan latihan paraphrase yang memadai.

Gunakan *The writer suggests that…* untuk ide sumber dan *In my view…* untuk pendapat sendiri. Kesalahan umum adalah mengubah *may help* menjadi *will solve*, atau menghilangkan pengecualian sehingga klaim terdengar mutlak. Jangan menambahkan pengalaman pribadi ke dalam ringkasan seolah berasal dari penulis. Semua situasi dan angka di unit ini fiktif untuk belajar bahasa, bukan temuan penelitian. Audio lokal membacakan naskah listening dengan suara sintetis; itu latihan, bukan ujian listening autentik.`,
    examples: [
      { en: 'In “A Quieter Start,” Maya suggests protecting the first study block.', id: 'Dalam “A Quieter Start”, Maya menyarankan melindungi blok belajar pertama.' },
      { en: 'The plan may help some learners, but it does not remove family duties.', id: 'Rencana itu mungkin membantu sebagian pelajar, tetapi tidak menghilangkan kewajiban keluarga.' },
      { en: 'In my view, the trial needs a flexible starting time.', id: 'Menurut saya, uji coba itu memerlukan waktu mulai yang fleksibel.' }
    ],
    vocabulary: [
      { en: 'main point', id: 'gagasan utama' },
      { en: 'paraphrase', id: 'menyatakan kembali dengan susunan sendiri' },
      { en: 'attribute', id: 'menyebutkan asal gagasan' },
      { en: 'qualification', id: 'pembatas atau syarat klaim' },
      { en: 'faithful summary', id: 'ringkasan yang setia pada makna sumber' }
    ],
    reading: {
      title: 'A Quieter Start — Maya, fictional learning-club note',
      text: `This original note describes a fictional learning club, not a research study. Maya, the club coordinator, proposes a quieter start to the evening session. Members currently arrive at different times and often begin by answering group messages. Maya suggests putting one short task on a card before opening the message board. The task should fit into twenty minutes and have a visible finish, such as drafting the opening of an email.

Members who care for children may need to interrupt this block. Maya therefore recommends allowing them to choose a later start rather than treating an interruption as failure. She also says that urgent messages should still reach the coordinator by phone. The proposal has not been tested, and the note gives no evidence that it improves learning. Its main purpose is to make the first task easier to begin, not to increase the total number of study hours. Maya asks members to try the routine for one week and record whether they could start their chosen task.`
    },
    listening: {
      title: 'Practice script: Keeping the Author’s Meaning — optional synthetic speech',
      text: `Tutor: Tell me the main idea of the fictional garden-club note you read.
Learner: The writer wants every member to attend a meeting every morning.
Tutor: Look at your notes. Did the writer say every member, or new volunteers?
Learner: New volunteers. And the meeting is on their first morning, not every morning.
Tutor: Good. What is the purpose?
Learner: To show them where the tools belong before they begin working.
Tutor: Does the note promise fewer accidents?
Learner: No. It says the introduction may reduce confusion, but it gives no safety results.
Tutor: Now try a faithful summary.
Learner: The writer suggests a short tool introduction for new volunteers on their first morning. It may make the work easier to understand, although its effects have not been measured.
Tutor: That keeps the scope and the uncertainty. Put your own opinion in a separate sentence.`
    },
    output: {
      speaking: 'Tutup bacaan “A Quieter Start”. Rekam ringkasan 2–3 menit: sebut judul/penulis, masalah, usulan, dan dua batasan. Tambahkan satu pendapat sendiri dengan penanda yang jelas. Buka teks, tandai bila Anda mengubah usulan menjadi hasil yang sudah terbukti, lalu rekam ulang bagian itu.',
      writing: 'Tulis ringkasan 120–180 kata dari bacaan dengan teks tertutup. Sebut sumber lokal pada kalimat pertama, pertahankan syarat keluarga dan pesan mendesak, lalu cek makna dengan teks asli. Di bawah ringkasan, tulis satu paraphrase dua kalimat dan satu pendapat pribadi terpisah. Jangan menambah angka atau hasil.'
    },
    review: 'Bandingkan tiga kalimat Anda dengan sumber: apakah subjek, tingkat kepastian, dan pengecualiannya tetap sama? Simpan versi awal dan revisi. Ulangi hanya bagian yang kehilangan makna, lalu jelaskan alasan perbaikannya dalam bahasa Indonesia.',
    quizzes: {
      pattern: [
        { prompt: 'Sumber mengatakan “The routine may help some learners.” Paraphrase mana yang paling setia?', options: ['The routine always helps everyone.', 'The routine could be useful for certain learners.', 'The routine has already solved the problem.'], answer: 1, explanation: 'Could mempertahankan ketidakpastian may, dan certain learners mempertahankan cakupan some learners.' },
        { prompt: 'Kalimat mana yang secara jelas menandai pendapat pembelajar, bukan ide sumber?', options: ['The writer reports that the room is quiet.', 'According to Maya, the task is short.', 'In my view, the start time should be flexible.'], answer: 2, explanation: 'In my view secara eksplisit menyatakan pendapat penutur sendiri.' }
      ],
      reading: [
        { prompt: 'Apa tujuan utama usulan Maya?', options: ['Mempermudah memulai tugas pertama.', 'Membuktikan peningkatan jam belajar.', 'Melarang semua pesan mendesak.'], answer: 0, explanation: 'Paragraf terakhir menyebut tujuan mempermudah memulai tugas, bukan menambah total jam belajar.' },
        { prompt: 'Batasan mana yang harus dipertahankan dalam ringkasan?', options: ['Semua anggota telah membuktikan keberhasilannya.', 'Anggota dengan kewajiban mengasuh boleh memilih waktu mulai lebih lambat.', 'Semua tugas harus diselesaikan dalam satu jam.'], answer: 1, explanation: 'Maya secara khusus mengizinkan waktu mulai lebih lambat untuk anggota yang mengasuh anak.' }
      ],
      listening: [
        { prompt: 'Siapa yang dimaksud dalam catatan klub kebun?', options: ['Semua anggota setiap pagi.', 'Koordinator setiap sore.', 'Relawan baru pada pagi pertama mereka.'], answer: 2, explanation: 'Pembelajar memperbaiki cakupan menjadi new volunteers dan waktu menjadi their first morning.' },
        { prompt: 'Apa yang belum diberikan oleh catatan klub kebun?', options: ['Hasil pengukuran keselamatan.', 'Lokasi penyimpanan alat sebagai topik pengenalan.', 'Usulan pengenalan singkat.'], answer: 0, explanation: 'Dialog menyatakan bahwa catatan tidak memberikan safety results; manfaatnya belum diukur.' }
      ]
    },
    assessment: {
      reading: {
        title: 'Day 6: Borrowing Without a Deposit — fictional proposal',
        text: `This original fictional proposal was written by Niko for a neighbourhood equipment library. The library currently asks new borrowers to leave a cash deposit. Niko proposes replacing that deposit with a short introduction and a signed return card for inexpensive tools. He argues that people without spare cash could then borrow basic equipment more easily. Expensive electric tools would still require the existing deposit.

The proposal does not claim that tools would be returned more reliably. Niko suggests a two-week trial with twelve hand tools and asks the librarian to record late returns and missing parts separately. Borrowers who cannot read the card should receive a spoken explanation. A volunteer would contact each borrower one day before the return date. The library committee has not approved the trial, and the proposal contains no actual borrowing results. Its purpose is to suggest a more accessible process while keeping a record of possible problems.`
      },
      listening: {
        title: 'Day 6 script: A Shared Noticeboard — optional synthetic speech',
        text: `Editor: What does the fictional housing note recommend?
Reader: Replacing every telephone call with a noticeboard.
Editor: Check the exception before you summarise it.
Reader: Right. It recommends a noticeboard for routine maintenance updates. Emergency repairs still need a telephone call.
Editor: Who would update the board?
Reader: The building caretaker, on Monday and Thursday mornings. Residents could leave questions in a small box below it.
Editor: Is there evidence that residents prefer this arrangement?
Reader: No. The author asks for a one-month trial. Residents would then give comments on whether the updates were easy to find.
Editor: How will you separate your view from that proposal?
Reader: I will first describe the author's plan and its limits. Then I will write, “In my view, the notices also need large print.” That is my suggestion, not something the note already promises.`
      },
      readingQuiz: [
        { prompt: 'Barang mana yang tetap memerlukan deposit menurut usulan Niko?', options: ['Semua alat tangan murah.', 'Alat listrik mahal.', 'Tidak ada barang sama sekali.'], answer: 1, explanation: 'Pengecualian yang disebut eksplisit adalah expensive electric tools.' },
        { prompt: 'Pernyataan mana yang setia pada status usulan?', options: ['Uji coba telah membuktikan pengembalian lebih cepat.', 'Komite telah menghapus deposit seluruhnya.', 'Uji coba belum disetujui dan belum memiliki hasil peminjaman.'], answer: 2, explanation: 'Teks menyebut komite belum menyetujui dan tidak ada hasil peminjaman aktual.' }
      ],
      listeningQuiz: [
        { prompt: 'Untuk apa panggilan telepon masih diperlukan?', options: ['Perbaikan darurat.', 'Semua pertanyaan rutin.', 'Mengirim komentar setelah setahun.'], answer: 0, explanation: 'Reader memperbaiki ringkasannya: emergency repairs masih memerlukan telepon.' },
        { prompt: 'Saran siapa yang berupa penggunaan huruf besar?', options: ['Janji penulis catatan.', 'Pendapat Reader sendiri.', 'Hasil uji coba penghuni.'], answer: 1, explanation: 'Reader menyatakan secara eksplisit bahwa large print adalah sarannya sendiri.' }
      ]
    }
  },
  {
    week: 20,
    explanation: `## Mendengar struktur, bukan menyalin semuanya
Catatan kuliah perlu menangkap inti, alasan atau contoh, serta batasan. Sebelum mendengar naskah, buat tiga kolom: *claim*, *support*, dan *limit*. Dengarkan pertama kali untuk topik dan arah pembicaraan. Pada putaran kedua, isi kata kunci, angka beserta satuan, dan hubungan seperti *however* atau *therefore*. Singkatan pribadi boleh digunakan selama Anda dapat membacanya kembali.

Bedakan sesuatu yang benar-benar dikatakan pembicara dari tafsiran Anda. Jika ada detail terlewat, tulis tanda tanya, bukan angka tebakan. Contoh satu kelompok kecil tidak otomatis menjelaskan semua orang. Kata *in this exercise* membatasi pembicaraan pada simulasi; *might* bukan janji hasil.

Setelah mendengar, gunakan catatan untuk menjelaskan kembali, lalu periksa dengan transkrip. Kesalahan umum ialah mencatat angka tanpa objeknya, menyamakan jumlah peserta dengan jumlah sesi, dan membuang kalimat batasan di akhir. Tulis satu pertanyaan seminar yang meminta informasi belum tersedia, bukan menanyakan kembali fakta yang sudah jelas. Seluruh angka kuliah ini dibuat untuk latihan, bukan hasil eksperimen sungguhan. Audio lokal memakai suara sintetis dan tidak mewakili ujian listening nyata.`,
    examples: [
      { en: 'The speaker’s main point is that the task needs a clear ending.', id: 'Inti pembicara adalah bahwa tugas memerlukan akhir yang jelas.' },
      { en: 'The example involves six fictional volunteers, not six sessions.', id: 'Contoh melibatkan enam relawan fiktif, bukan enam sesi.' },
      { en: 'Would the same plan work for people with changing shifts?', id: 'Apakah rencana yang sama akan sesuai bagi orang dengan giliran kerja berubah-ubah?' }
    ],
    vocabulary: [
      { en: 'lecture outline', id: 'kerangka kuliah' },
      { en: 'supporting example', id: 'contoh pendukung' },
      { en: 'limitation', id: 'keterbatasan' },
      { en: 'participant', id: 'peserta' },
      { en: 'unanswered question', id: 'pertanyaan yang belum terjawab' }
    ],
    reading: {
      title: 'A Note-Taker’s Three Columns — original study guide',
      text: `A useful set of lecture notes does not preserve every sentence. It preserves the speaker's reasoning. Imagine a fictional talk about organising a repair workshop. The claim is that each repair station needs a clear closing step. The supporting example describes volunteers placing finished items on a labelled shelf. The limit is that a shelf cannot solve a shortage of spare parts.

A note-taker could put these points in three columns headed claim, support, and limit. Numbers should keep their labels: four stations is different from four volunteers. A question mark should show a detail that was missed, rather than hide it behind a confident guess. After the talk, the listener can turn the notes into a short explanation and compare it with the transcript. If the explanation says that labelled shelves solve every workshop problem, the notes have lost the speaker's limit. Accurate notes help the listener ask a useful next question, such as how unfinished items should be stored overnight.`
    },
    listening: {
      title: 'Practice lecture: Defining a Small Task — optional synthetic speech',
      text: `Today I will discuss task boundaries. My main suggestion is to define what counts as finished before beginning a short study block. Consider this invented classroom example. Six fictional volunteers each plan a twenty-five-minute session. Three write “work on English.” The other three write “draft the opening and closing of a request email.” In our imagined record, the second group can describe its next step more clearly. This is a made-up illustration, not evidence from an experiment.

Why might a boundary help? It gives the learner something concrete to check. However, a clear boundary does not guarantee better language or prevent interruptions. We have not compared the quality of the emails, and we have no information about later sessions. To conclude, define a small finish, check what happened, and revise the plan. A useful seminar question would ask how this approach could be adapted for an unpredictable work schedule.`
    },
    output: {
      speaking: 'Untuk Gate E, dengarkan naskah tanpa melihat teks jika fitur suara tersedia; jika tidak, baca sekali lalu tutup. Buat catatan inti/contoh/batasan, kemudian jelaskan 3–5 menit dari catatan saja. Sebut bahwa contoh bersifat fiktif dan ajukan satu pertanyaan seminar. Nilai terpisah: ketepatan isi dan kelancaran penyampaian.',
      writing: 'Buat catatan tiga kolom dari kuliah: minimal dua poin inti, detail jumlah orang dan menit, dua keterbatasan, serta satu pertanyaan yang belum terjawab. Kembangkan menjadi ringkasan 120–160 kata tanpa mengubah contoh menjadi bukti penelitian. Setelah itu cek transkrip dengan warna atau tanda revisi yang konsisten.'
    },
    review: 'Gate E adalah diagnosis lokal, bukan skor kemampuan resmi. Catat detail yang hilang pada pendengaran pertama, detail yang baru ditemukan setelah mengulang, dan apakah ringkasan lisan tetap setia. Bila hanya membaca transkrip, tandai hasil sebagai latihan membaca/catatan, bukan bukti listening.',
    quizzes: {
      pattern: [
        { prompt: 'Catatan mana yang menjaga angka beserta objeknya dari kuliah?', options: ['6 sessions; 25 volunteers.', '6 fictional volunteers; 25-minute sessions.', '25 emails; 6 completed courses.'], answer: 1, explanation: 'Kuliah menyebut enam relawan fiktif dan sesi berdurasi dua puluh lima menit.' },
        { prompt: 'Anda tidak mendengar jumlah peserta. Apa catatan yang paling jujur?', options: ['participants: ? — check later', 'participants: 100, probably', 'participants: definitely 12'], answer: 0, explanation: 'Tanda tanya menunjukkan informasi belum tertangkap tanpa mengarang angka.' }
      ],
      reading: [
        { prompt: 'Apa keterbatasan rak berlabel dalam contoh workshop?', options: ['Rak mengganti semua relawan.', 'Rak tidak dapat mengatasi kekurangan suku cadang.', 'Rak menghapus kebutuhan catatan.'], answer: 1, explanation: 'Bacaan menyebut rak tidak menyelesaikan shortage of spare parts.' },
        { prompt: 'Apa yang seharusnya dipertahankan catatan yang baik?', options: ['Setiap bunyi tanpa hubungan makna.', 'Tebakan yang terdengar meyakinkan.', 'Alur penalaran pembicara.'], answer: 2, explanation: 'Kalimat awal membedakan penyalinan setiap kalimat dari mempertahankan reasoning.' }
      ],
      listening: [
        { prompt: 'Apa tugas yang ditulis kelompok kedua?', options: ['Menyusun pembuka dan penutup email permintaan.', 'Membaca enam buku selama semalam.', 'Mengikuti dua puluh lima kuliah.'], answer: 0, explanation: 'Kelompok kedua menulis draft the opening and closing of a request email.' },
        { prompt: 'Apa yang belum dibandingkan dalam contoh?', options: ['Jumlah anggota kedua kelompok.', 'Durasi sesi yang direncanakan.', 'Kualitas email.'], answer: 2, explanation: 'Pembicara secara eksplisit mengatakan kualitas email belum dibandingkan.' }
      ]
    },
    assessment: {
      reading: {
        title: 'Day 6: Notes from a Fictional Museum Briefing',
        text: `The following account is an invented training situation, not a museum evaluation. A guide explains a new way to end a tour. Instead of giving all visitors the same leaflet, the guide would ask them to choose one question to take home. The claim is that a chosen question may give visitors a clearer starting point for later reading. The example involves eight imaginary visitors on a forty-minute tour.

The guide does not claim that visitors will remember more facts. No follow-up interviews have taken place. Visitors who want the full leaflet could still collect it at the desk. A note-taker should keep the distinction between eight people and forty minutes, and record the lack of follow-up evidence. A useful question after the briefing would concern visitors who do not share the guide's language. That issue was not addressed in the proposed routine.`
      },
      listening: {
        title: 'Day 6 lecture: Returning Shared Equipment — optional synthetic speech',
        text: `My topic is the final five minutes of a community cooking class. I suggest assigning a named place to every shared item before the class begins. Here is a fictional illustration. Four pairs prepare food during a ninety-minute session. In an invented closing routine, each pair returns one box of equipment and marks missing items on a card. These details are created for this exercise; they are not research findings.

The routine makes responsibility visible, but it cannot tell us whether an item was damaged earlier. It also needs space for the boxes. We have no information about kitchens with very little storage. My conclusion is limited: a return routine may help people see what remains to be done. It does not prove that cooking classes will finish sooner. For discussion, I would ask how a teacher could adapt the routine when several classes use the same room.`
      },
      readingQuiz: [
        { prompt: 'Apa yang belum dilakukan setelah tur museum dalam skenario?', options: ['Memilih durasi tur.', 'Wawancara tindak lanjut.', 'Menyebut jumlah pengunjung contoh.'], answer: 1, explanation: 'Teks menyatakan no follow-up interviews have taken place.' },
        { prompt: 'Pasangan angka mana yang akurat?', options: ['40 pengunjung; 8 menit.', '8 tur; 40 pemandu.', '8 pengunjung; 40 menit.'], answer: 2, explanation: 'Contoh terdiri dari delapan pengunjung imajiner pada tur empat puluh menit.' }
      ],
      listeningQuiz: [
        { prompt: 'Apa tugas setiap pasangan pada akhir kelas?', options: ['Mengembalikan satu kotak dan mencatat barang yang hilang.', 'Membuktikan kelas selesai lebih cepat.', 'Mewawancarai sembilan puluh peserta.'], answer: 0, explanation: 'Setiap pasangan mengembalikan satu kotak alat dan menandai barang hilang pada kartu.' },
        { prompt: 'Kondisi mana yang belum dijelaskan oleh contoh?', options: ['Adanya kartu pencatatan.', 'Dapur dengan ruang penyimpanan sangat sedikit.', 'Jumlah pasangan dalam ilustrasi.'], answer: 1, explanation: 'Pembicara menyatakan tidak memiliki informasi tentang dapur dengan penyimpanan sangat terbatas.' }
      ]
    }
  },
  {
    week: 21,
    explanation: `## Membandingkan sumber secara adil
Sintesis bukan dua ringkasan yang ditempel. Pilih satu pertanyaan bersama, lalu bandingkan jawaban kedua sumber pada pertanyaan itu. Bacaan menyediakan dua sumber lokal asli dengan penulis fiktif. Keduanya membahas waktu belajar, tetapi situasi dan kekhawatirannya berbeda. Identitas sumber perlu dipertahankan agar pembaca tahu asal setiap klaim.

Buat matriks dengan baris klaim, dukungan, dan keterbatasan; isi kolom A dan B. Dukungan dapat berupa contoh penalaran, bukan selalu data. Jangan menyebut contoh fiktif sebagai penelitian. Jika sumber tidak mengukur sesuatu, tulis *not measured*, bukan mengarang hasil. Kesepakatan pada satu tujuan juga tidak berarti mereka setuju pada semua cara.

Gunakan *Both sources…* hanya untuk kesamaan yang benar-benar ada. Gunakan *Whereas A…, B…* untuk perbedaan, lalu jelaskan mengapa perbedaan konteks penting. Kesalahan umum ialah memilih sumber yang terasa cocok dengan pendapat sendiri dan mengabaikan batasannya. Simpulan yang baik dapat bersyarat: satu usulan mungkin sesuai untuk jadwal tetap, yang lain untuk jadwal berubah. Naskah dialog tersedia untuk latihan dengan suara sintetis opsional, bukan sebagai bukti tes listening resmi.`,
    examples: [
      { en: 'Both sources aim to protect time for study.', id: 'Kedua sumber bertujuan melindungi waktu untuk belajar.' },
      { en: 'Whereas Arif favours a fixed start, Lani recommends a movable block.', id: 'Sementara Arif memilih waktu mulai tetap, Lani menyarankan blok yang dapat dipindah.' },
      { en: 'Neither source measures long-term learning outcomes.', id: 'Tidak satu pun sumber mengukur hasil belajar jangka panjang.' }
    ],
    vocabulary: [
      { en: 'synthesis', id: 'penggabungan gagasan menurut hubungan antarsumber' },
      { en: 'shared aim', id: 'tujuan bersama' },
      { en: 'whereas', id: 'sedangkan atau sementara untuk membandingkan' },
      { en: 'context', id: 'konteks atau keadaan yang melatarbelakangi' },
      { en: 'trade-off', id: 'kompromi antara keuntungan dan kekurangan' }
    ],
    reading: {
      title: 'Two Original Fictional Sources: Protecting Study Time',
      text: `Source A — Arif's club proposal (fictional). Arif recommends starting a study group at seven every evening. His example is a group whose members all finish work at five. A fixed start would let them plan dinner and travel around the meeting. He suggests keeping the same start for two weeks before discussing changes. However, his example excludes people with rotating shifts, and he offers no measured learning results. His priority is predictable attendance rather than longer sessions.

Source B — Lani's volunteer note (fictional). Lani recommends choosing a thirty-minute study block each morning for use later that day. In her example, volunteers receive their work times only a day ahead. A movable block could protect study without requiring everyone to begin together. However, partners might find it harder to arrange live discussion. Her note contains no measured learning results either. She prioritises keeping a small study commitment during an unpredictable week. Both texts are original practice sources, not reports of real studies.`
    },
    listening: {
      title: 'Practice dialogue: Comparing Lunch Options — optional synthetic speech',
      text: `Rina: We have two fictional notes about lunch at the training centre. What is their shared aim?
Bima: Both want learners to have enough time to eat. Note A proposes one common lunch break so that kitchen staff can prepare everything together.
Rina: And its limit?
Bima: The note assumes all classes end at the same time. It does not explain what happens to a class that finishes late.
Rina: Note B proposes two lunch periods. It gives a made-up example of classes ending at different times, but admits that staff would need to stay longer.
Bima: So neither note proves that its plan is cheaper.
Rina: Exactly. Compare the conditions, not just which plan you prefer.
Bima: My synthesis will say that a common break fits a shared timetable, whereas two periods may fit staggered classes. We would need staffing information before making a cost claim.`
    },
    output: {
      speaking: 'Jelaskan perbandingan Arif dan Lani selama 3–4 menit dari matriks, bukan dari naskah penuh. Sebut satu tujuan bersama, dua perbedaan, batasan masing-masing, dan kondisi yang akan memengaruhi pilihan Anda. Akhiri dengan pertanyaan yang belum dijawab sumber.',
      writing: 'Buat matriks A/B dengan baris klaim, contoh pendukung, konteks, dan batasan. Tulis sintesis 180–250 kata berdasarkan bacaan: kelompokkan menurut isu, bukan satu paragraf panjang per sumber. Sebut Source A—Arif dan Source B—Lani; tandai pendapat sendiri dan jangan menambah temuan.'
    },
    review: 'Garis bawahi setiap Both, Whereas, dan Neither dalam tulisan Anda. Periksa masing-masing terhadap dua sumber. Jika hanya satu sumber mendukungnya, ubah atribusi. Simpan satu contoh simpulan bersyarat dan satu klaim yang Anda hapus karena tidak didukung.',
    quizzes: {
      pattern: [
        { prompt: 'Kedua sumber tidak mengukur hasil jangka panjang. Kalimat mana yang tepat?', options: ['Both sources prove long-term success.', 'Neither source measures long-term outcomes.', 'Only Source A measures long-term outcomes.'], answer: 1, explanation: 'Neither berarti tidak satu pun dari dua sumber; measures sesuai dengan neither source yang tunggal.' },
        { prompt: 'Kalimat mana yang menandai perbedaan, bukan persetujuan?', options: ['Both writers value study time.', 'The writers have the same aim.', 'Whereas A fixes the start, B allows it to move.'], answer: 2, explanation: 'Whereas menghubungkan dua posisi yang berbeda tentang waktu mulai.' }
      ],
      reading: [
        { prompt: 'Konteks apa yang mendasari usulan Lani?', options: ['Jadwal kerja baru diketahui sehari sebelumnya.', 'Semua anggota selesai kerja pukul lima.', 'Semua relawan memiliki jam kerja tetap sepanjang tahun.'], answer: 0, explanation: 'Source B menyebut relawan menerima waktu kerja hanya sehari sebelumnya.' },
        { prompt: 'Kesamaan mana yang benar-benar didukung kedua sumber?', options: ['Keduanya membuktikan diskusi langsung lebih mudah.', 'Keduanya tidak memberikan hasil belajar terukur.', 'Keduanya meminta semua orang mulai pukul tujuh.'], answer: 1, explanation: 'A dan B sama-sama menyatakan tidak memiliki measured learning results.' }
      ],
      listening: [
        { prompt: 'Apa kelemahan yang diakui Note B?', options: ['Semua kelas harus dibatalkan.', 'Makanan tidak dapat disajikan.', 'Staf perlu tinggal lebih lama.'], answer: 2, explanation: 'Dialog menyebut dua periode makan membuat staf perlu tinggal lebih lama.' },
        { prompt: 'Informasi apa yang dibutuhkan sebelum mengklaim biaya lebih murah?', options: ['Informasi kebutuhan staf.', 'Warna meja makan.', 'Nama seluruh peserta.'], answer: 0, explanation: 'Bima mengatakan staffing information diperlukan sebelum membuat cost claim.' }
      ]
    },
    assessment: {
      reading: {
        title: 'Day 6: Two Original Fictional Sources on Workshop Access',
        text: `Source A — Sinta's evening-access memo (fictional). Sinta proposes opening a community workshop on Friday evenings. Her example concerns adults who work on weekdays and cannot attend afternoon sessions. She argues that one evening opening would give this group a predictable opportunity. She recognises that volunteers would need to travel home late. The memo includes no attendance or transport data.

Source B — Danu's weekend-access letter (fictional). Danu proposes a Saturday morning opening instead. His example concerns families who want to attend together before lunch. He argues that daylight would make it easier to show outdoor equipment. However, he admits that Saturday workers would still be excluded. He has not collected attendance or transport data. Both writers want wider access, but their examples concern different groups. Neither text establishes which opening would attract more people. These sources are invented for comparison practice, not records of an actual consultation.`
      },
      listening: {
        title: 'Day 6 dialogue: Two Map Formats — optional synthetic speech',
        text: `Tutor: Compare the two fictional proposals for a visitor map.
Student: Proposal A wants a printed map at the entrance. Its example concerns visitors whose phones have no connection. A printed map would remain available offline, but the proposal admits that changed routes would require new copies.
Tutor: What does Proposal B suggest?
Student: A digital map that staff can update quickly. It assumes visitors have a suitable device and know how to open the map. It does not solve access for someone without a phone.
Tutor: What do they agree on?
Student: Visitors need a clear route. Neither proposal includes a test with visitors, so we cannot claim one is easier to use.
Tutor: Can your conclusion preserve that uncertainty?
Student: Yes. I would compare update needs with device access and suggest checking both before choosing. My suggestion would be separate from the two proposals.`
      },
      readingQuiz: [
        { prompt: 'Kelompok mana yang masih tersisih dalam usulan Danu?', options: ['Keluarga yang ingin datang sebelum makan siang.', 'Orang yang bekerja pada Sabtu.', 'Orang yang memerlukan kegiatan siang hari.'], answer: 1, explanation: 'Danu mengakui bahwa Saturday workers tetap tidak dapat ikut.' },
        { prompt: 'Simpulan mana yang didukung kedua sumber?', options: ['Keduanya ingin memperluas akses, tetapi belum menentukan pilihan dengan pengunjung terbanyak.', 'Jumat pasti menarik dua kali lebih banyak orang.', 'Sabtu telah terbukti menyelesaikan semua masalah transportasi.'], answer: 0, explanation: 'Kedua sumber memiliki tujuan akses lebih luas, tanpa data yang menentukan jumlah kehadiran.' }
      ],
      listeningQuiz: [
        { prompt: 'Apa keterbatasan peta cetak menurut Proposal A?', options: ['Tidak bisa digunakan tanpa koneksi.', 'Selalu memerlukan telepon pengunjung.', 'Perubahan rute memerlukan salinan baru.'], answer: 2, explanation: 'Proposal A mengakui changed routes memerlukan new copies.' },
        { prompt: 'Mengapa belum dapat diklaim bahwa salah satu peta lebih mudah digunakan?', options: ['Tidak satu pun proposal mencakup uji dengan pengunjung.', 'Kedua proposal sudah ditolak pengunjung.', 'Peta digital tidak dapat diperbarui.'], answer: 0, explanation: 'Student mengatakan neither proposal includes a test with visitors.' }
      ]
    }
  },
  {
    week: 22,
    explanation: `## Argumen dengan keberatan yang sungguh dijawab
Argumen memiliki posisi, alasan, dukungan, dan hubungan yang menjelaskan mengapa dukungan relevan. Posisi seperti *The club should keep one shared session* perlu alasan yang dapat dilacak ke sumber, bukan sekadar pengulangan pendapat. Bacaan minggu ini menyediakan dua pandangan fiktif tentang diskusi langsung dan komentar tertulis.

Susun paragraf dengan klaim terbatas, dukungan beratribusi, lalu penjelasan Anda. Setelah itu hadirkan kontra-argumen dalam bentuk yang adil. Jangan melemahkannya dengan kata seperti *obviously silly*. Gunakan *Although…* untuk mengakui keberatan, kemudian jawab dengan syarat atau perubahan usulan. Jawaban tidak harus menghapus seluruh kelemahan.

Kata *may*, *in this setting*, dan *provided that* membantu membatasi klaim, tetapi bukan pengganti bukti. Jika informasi tidak tersedia, tandai klaim tersebut belum didukung dan jangan mengisinya dengan angka buatan. Kesalahan umum adalah menyimpulkan sebab-akibat dari contoh tunggal atau memakai *all learners* ketika sumber hanya membahas satu klub. Tulis draf dahulu, lalu periksa dukungan dan logika sebelum memperbaiki grammar yang mengaburkan makna. Naskah suara sintetis opsional di sini adalah latihan, bukan tes akademik resmi.`,
    examples: [
      { en: 'The club should retain a short live meeting because questions can be clarified immediately.', id: 'Klub sebaiknya mempertahankan rapat langsung singkat karena pertanyaan dapat diperjelas segera.' },
      { en: 'Although written comments allow more time to think, replies may arrive too late for a shared decision.', id: 'Walaupun komentar tertulis memberi waktu berpikir, balasan mungkin terlambat untuk keputusan bersama.' },
      { en: 'This proposal may be workable, provided that absent members can comment later.', id: 'Usulan ini mungkin dapat dijalankan, asalkan anggota yang absen dapat berkomentar kemudian.' }
    ],
    vocabulary: [
      { en: 'claim', id: 'klaim atau pernyataan yang perlu didukung' },
      { en: 'counterargument', id: 'argumen tandingan' },
      { en: 'concession', id: 'pengakuan terhadap bagian keberatan yang masuk akal' },
      { en: 'rebuttal', id: 'jawaban terhadap argumen tandingan' },
      { en: 'provided that', id: 'asalkan atau dengan syarat bahwa' }
    ],
    reading: {
      title: 'Two Original Fictional Sources: How Should a Club Discuss Drafts?',
      text: `Source A — Mira's discussion proposal (fictional). Mira favours a twenty-minute live meeting after members exchange draft paragraphs. A listener can ask immediately what an unclear sentence means, and the writer can explain the intended message. Her example concerns a small club whose members share a free evening. She admits that a live meeting excludes members who cannot attend and that quick speakers may dominate. She proposes taking turns, but offers no measured comparison of writing quality.

Source B — Yusuf's written-feedback note (fictional). Yusuf favours comments that members can read and answer during the following day. He argues that writers need time to consider a difficult question before responding. His example concerns members with different work schedules. However, he recognises that delayed replies can slow a joint decision and that an unclear comment may need further explanation. He offers no measured comparison of writing quality either. These are invented proposals with different priorities, not scientific findings.`
    },
    listening: {
      title: 'Practice discussion: Answering an Objection — optional synthetic speech',
      text: `Chair: State your argument about the fictional reading room.
Speaker: We should reserve one quiet table for individual work. It would give visitors a place where conversation is not expected.
Chair: What is the strongest objection?
Speaker: The room is small, so a reserved table might leave a discussion group without enough seats.
Chair: Do not dismiss that concern. How would you respond?
Speaker: Although a permanent reservation could reduce flexibility, a two-hour quiet period might protect individual work without blocking the table all day.
Chair: What does that response still fail to establish?
Speaker: It does not show how many people want quiet space. We would need a local check before making a lasting change.
Chair: Good. Your position is conditional, and you have not claimed that a schedule solves every problem.
Speaker: I will also label the room example as fictional, not present it as evidence from a real library.`
    },
    output: {
      speaking: 'Sampaikan argumen 4 menit tentang cara klub membahas draf. Nyatakan posisi, rujuk A dan B, hadirkan keberatan terkuat, lalu jawab dengan syarat yang jelas. Rekam jawaban spontan untuk: “Siapa yang belum terlayani?” dan “Bukti apa yang masih diperlukan?” Jangan mengklaim hasil belajar yang tidak diukur.',
      writing: 'Tulis esai latihan 250–400 kata dengan dua sumber bacaan. Sertakan posisi, dua alasan, kontra-argumen yang adil, jawaban bersyarat, dan kesimpulan terbatas. Tandai klaim yang belum didukung dengan “belum didukung”, kemudian hapus atau ubah menjadi pertanyaan dalam revisi. Simpan draf dan revisi; sebut A—Mira serta B—Yusuf.'
    },
    review: 'Untuk setiap alasan, tunjukkan kalimat sumber atau tandai sebagai penalaran Anda. Periksa apakah jawaban benar-benar menanggapi keberatan. Koreksi dua grammar yang paling mengganggu makna, misalnya subjek yang tidak jelas atau kata modal yang terlalu pasti; jelaskan perubahan maknanya.',
    quizzes: {
      pattern: [
        { prompt: 'Kalimat mana yang mengakui keberatan lalu menawarkan jawaban bersyarat?', options: ['The objection is silly and needs no answer.', 'Although fixed meetings exclude some members, a written follow-up may reduce that problem.', 'Everyone will certainly improve immediately.'], answer: 1, explanation: 'Although mengakui keterbatasan, lalu written follow-up ditawarkan sebagai jawaban yang masih dibatasi may.' },
        { prompt: 'Sumber tidak mengukur hasil belajar. Klaim mana yang harus ditolak sebagai hasil terbukti?', options: ['The plan may fit members with shared free time.', 'The proposal needs further checking.', 'The plan has proved that every learner writes better.'], answer: 2, explanation: 'Has proved dan every learner melebihkan bukti yang sama sekali belum diukur.' }
      ],
      reading: [
        { prompt: 'Keuntungan utama rapat langsung menurut Mira adalah apa?', options: ['Kalimat tidak jelas dapat segera ditanyakan.', 'Semua orang pasti dapat hadir.', 'Tidak diperlukan giliran berbicara.'], answer: 0, explanation: 'Mira menekankan kesempatan meminta penjelasan dan menjawab langsung.' },
        { prompt: 'Keberatan mana yang Yusuf akui terhadap komentar tertulis?', options: ['Penulis tidak pernah perlu waktu berpikir.', 'Balasan yang terlambat dapat memperlambat keputusan bersama.', 'Komentar tertulis telah terbukti menurunkan semua nilai.'], answer: 1, explanation: 'Source B mengakui delayed replies dapat slow a joint decision.' }
      ],
      listening: [
        { prompt: 'Bagaimana Speaker menanggapi masalah keterbatasan meja?', options: ['Menyediakan reservasi permanen sepanjang hari.', 'Menghapus semua diskusi selamanya.', 'Mengusulkan periode tenang selama dua jam.'], answer: 2, explanation: 'Speaker mengubah reservasi permanen menjadi two-hour quiet period.' },
        { prompt: 'Informasi apa yang masih diperlukan?', options: ['Berapa orang yang menginginkan ruang tenang.', 'Apakah contoh itu berasal dari riset nyata yang disebutkan.', 'Warna cat meja yang sudah dipilih.'], answer: 0, explanation: 'Speaker mengakui belum diketahui how many people want quiet space.' }
      ]
    },
    assessment: {
      reading: {
        title: 'Day 6: Two Original Fictional Sources on Shared Bicycles',
        text: `Source A — Hana's booking proposal (fictional). Hana wants members of a community centre to book shared bicycles the previous evening. Her example concerns people who need a bicycle to reach a morning class. A booking could let them plan the journey in advance. She admits that unused bookings would prevent others from borrowing, and suggests releasing a bicycle ten minutes after the booked time. She has no actual usage figures.

Source B — Reza's open-access note (fictional). Reza wants bicycles to remain available without advance booking. He argues that visitors with unexpected needs should have a chance to borrow on arrival. However, he recognises that they might find every bicycle already in use and cannot rely on getting one. He has no actual usage figures either. Both sources discuss access, but neither demonstrates which arrangement serves more journeys. Their contrasting examples are invented for this exercise.`
      },
      listening: {
        title: 'Day 6 discussion: A Weekly Help Desk — optional synthetic speech',
        text: `Tutor: What is your proposal for the fictional residents' centre?
Learner: It should run a weekly help desk for questions about local forms. People could ask for clarification instead of guessing what a section means.
Tutor: What might someone reasonably object to?
Learner: A single weekly opening may not fit people who work during those hours.
Tutor: How will you respond without pretending the problem disappears?
Learner: Although one opening cannot serve everyone, a box for written questions could allow some residents to ask at another time. Staff could prepare replies for collection.
Tutor: What limit remains?
Learner: Written questions would not help everyone, especially a person who needs a spoken explanation. I would say the proposal needs another access option before it becomes permanent.
Tutor: And your evidence?
Learner: This is an invented example. I have not measured demand or claimed that the arrangement already works.`
      },
      readingQuiz: [
        { prompt: 'Kontra-argumen mana yang paling langsung didukung terhadap rencana Hana?', options: ['Pemesanan selalu membuat semua perjalanan gagal.', 'Pemesanan yang tidak digunakan dapat menghalangi peminjam lain.', 'Tidak ada orang yang memerlukan sepeda pagi hari.'], answer: 1, explanation: 'Hana sendiri mengakui unused bookings dapat menghalangi orang lain meminjam.' },
        { prompt: 'Simpulan mana yang tidak melebihkan sumber?', options: ['Akses tanpa pemesanan telah terbukti melayani semua orang.', 'Pemesanan telah menggandakan penggunaan.', 'Pilihan memerlukan pertimbangan kebutuhan terencana dan mendadak; belum ada angka penggunaan.'], answer: 2, explanation: 'Kedua kebutuhan dibahas, tetapi tidak satu pun sumber memiliki usage figures.' }
      ],
      listeningQuiz: [
        { prompt: 'Apa jawaban awal Learner terhadap keberatan jam buka?', options: ['Kotak untuk pertanyaan tertulis.', 'Mewajibkan semua warga berhenti bekerja.', 'Menghapus meja bantuan.'], answer: 0, explanation: 'Learner mengusulkan box for written questions agar pertanyaan dapat disampaikan pada waktu lain.' },
        { prompt: 'Keterbatasan apa yang masih diakui?', options: ['Tidak ada satu pun batasan tersisa.', 'Sebagian orang memerlukan penjelasan lisan.', 'Semua permintaan sudah diukur.'], answer: 1, explanation: 'Pertanyaan tertulis belum membantu orang yang membutuhkan spoken explanation.' }
      ]
    }
  },
  {
    week: 23,
    explanation: `## Presentasi akademik: jejak sumber tetap terlihat
Presentasi bukan membaca esai keras-keras. Pilih pertanyaan utama, posisi sementara, dua atau tiga poin, dan simpulan yang menjawab pertanyaan. Cantumkan identitas sumber dalam outline dan sebutkan saat ide dipakai. Pendengar perlu tahu kapan Anda merangkum sumber dan kapan Anda mengusulkan sesuatu sendiri.

Gunakan penanda arah seperti *First, I will compare…* dan *The main limitation is…*. Jika menyebut angka, sertakan objek, satuan, serta status simulasi. Materi lokal ini tidak memberikan temuan riset nyata. Jangan menambahkan tabel dengan angka seolah diukur hanya agar presentasi terlihat ilmiah.

Untuk pertanyaan spontan, berhenti sebentar, identifikasi inti pertanyaan, lalu jawab langsung dengan alasan dan batasan. Bila pertanyaan belum jelas, minta klarifikasi. Bila jawabannya tidak tersedia, katakan apa yang belum diketahui dan informasi apa yang dibutuhkan; jangan mengarang jawaban. Kesalahan umum adalah mengulang presentasi dari awal atau menyatakan pasti ketika sumber justru berhati-hati. Rekam latihan, cek apakah atribusi dan batasan terdengar, lalu kurangi catatan menjadi kata kunci. Suara sintetis pada dialog hanya membantu latihan mendengar, bukan menggantikan interaksi manusia atau ujian presentasi resmi.`,
    examples: [
      { en: 'I will compare the two proposals before presenting a conditional recommendation.', id: 'Saya akan membandingkan kedua usulan sebelum memberikan rekomendasi bersyarat.' },
      { en: 'By “access,” do you mean opening hours or physical entry?', id: 'Dengan “akses”, apakah maksud Anda jam buka atau akses masuk secara fisik?' },
      { en: 'The sources do not answer that question; we would need local attendance information.', id: 'Sumber tidak menjawab pertanyaan itu; kita memerlukan informasi kehadiran setempat.' }
    ],
    vocabulary: [
      { en: 'signposting', id: 'penanda arah atau urutan pembicaraan' },
      { en: 'outline', id: 'kerangka penyampaian' },
      { en: 'conditional recommendation', id: 'rekomendasi yang bergantung pada syarat' },
      { en: 'clarification', id: 'penjelasan untuk memperjelas maksud' },
      { en: 'scope', id: 'cakupan pembahasan atau klaim' }
    ],
    reading: {
      title: 'Two Original Fictional Briefs: Where Should Practice Presentations Happen?',
      text: `Source A — Nara's small-room brief (fictional). Nara recommends practising in a small meeting room before presenting to a larger audience. Her example concerns nervous speakers who want to try their opening with two listeners. The room would allow immediate questions without a large audience watching. However, it would not reproduce the sound or distance of the main hall. The brief provides no measured reduction in anxiety.

Source B — Oki's main-hall brief (fictional). Oki recommends one rehearsal in the actual presentation hall. Speakers could check the microphone and whether people at the back can hear. His example concerns an event with a fixed room and available equipment. However, hall access may be limited, and a large empty space might not prepare speakers for questions from people. His brief provides no measured reduction in anxiety either. These original practice sources offer reasons and limits, not evidence that one rehearsal method is best for every speaker.`
    },
    listening: {
      title: 'Practice Q&A: Explaining a Limited Recommendation — optional synthetic speech',
      text: `Presenter: I recommend a short practice session before the fictional club's public event, provided that participants can choose a suitable time.
Audience member: Does your proposal prove that everyone will feel confident?
Presenter: No. Confidence was not measured. The proposal concerns checking the opening and receiving questions, not guaranteeing a feeling.
Audience member: What do you mean by a suitable time?
Presenter: A time the speaker and two listeners can attend. I am not assuming one slot fits the whole club.
Audience member: Would an online rehearsal be cheaper?
Presenter: The notes do not contain cost information. We would need to compare room access and connection needs before answering that.
Audience member: Which source supports your recommendation?
Presenter: The small-group note supports trying the opening with listeners. The equipment note reminds me that a separate sound check may still be needed. My combination is a proposal, not a result already tested.`
    },
    output: {
      speaking: 'Buat presentasi akademik 6–8 menit dengan sumber minggu 21–22 yang sudah Anda pelajari; gunakan bacaan minggu ini untuk latihan singkat tambahan. Outline memuat pertanyaan, posisi, perbandingan, keterbatasan, dan simpulan serta identitas dua sumber. Jawab empat pertanyaan: bukti terkuat, keberatan, kondisi berbeda, dan batasan pendapat. Jika belajar sendiri, baca pertanyaan bergantian tanpa menulis jawaban dahulu.',
      writing: 'Tulis outline lima bagian dan catatan pembicara maksimal 180 kata untuk presentasi utama. Di setiap klaim, tulis sumber A/B atau “usulan saya”. Susun empat kartu pertanyaan beserta catatan evaluasi setelah menjawab lisan: apakah jawaban langsung, beralasan, dan tidak mengarang? Jangan menulis jawaban lengkap untuk dihafal.'
    },
    review: 'Putar rekaman dan catat waktu presentasi, satu atribusi yang terdengar jelas, satu batasan, dan satu jawaban yang terlalu panjang. Rekam ulang hanya jawaban itu. Durasi dan kelancaran tidak membuktikan tingkat CEFR; simpan rekaman sebagai bukti tugas lokal.',
    quizzes: {
      pattern: [
        { prompt: 'Pendengar bertanya tentang biaya, tetapi sumber tidak menyebut biaya. Jawaban mana yang tepat?', options: ['It is certainly free for everyone.', 'The sources do not provide costs; we would need that information.', 'The cost is exactly half, although I have no figures.'], answer: 1, explanation: 'Jawaban ini mengakui batas sumber dan menyebut informasi yang diperlukan tanpa mengarang.' },
        { prompt: 'Kalimat mana yang meminta klarifikasi istilah “access”?', options: ['By access, do you mean opening hours or physical entry?', 'Access is always easy everywhere.', 'I have already answered every possible question.'], answer: 0, explanation: 'Pertanyaan menawarkan dua makna untuk memperjelas maksud pendengar sebelum menjawab.' }
      ],
      reading: [
        { prompt: 'Apa kelebihan berlatih di aula menurut Oki?', options: ['Pasti menghilangkan seluruh kecemasan.', 'Menggantikan semua pertanyaan audiens.', 'Dapat memeriksa mikrofon dan keterdengaran di belakang.'], answer: 2, explanation: 'Source B menyebut pengecekan mikrofon dan apakah orang di belakang dapat mendengar.' },
        { prompt: 'Keterbatasan mana yang diakui Nara?', options: ['Ruang kecil tidak meniru bunyi dan jarak aula utama.', 'Ruang kecil selalu memiliki ribuan penonton.', 'Dua pendengar tidak boleh bertanya.'], answer: 0, explanation: 'Source A menyebut sound dan distance aula tidak dapat direproduksi di ruang kecil.' }
      ],
      listening: [
        { prompt: 'Apakah Presenter mengklaim kepercayaan diri semua orang sudah terbukti meningkat?', options: ['Ya, karena semua orang sudah diuji.', 'Tidak; kepercayaan diri tidak diukur.', 'Ya, karena tidak ada pertanyaan audiens.'], answer: 1, explanation: 'Presenter menjawab No dan menyatakan Confidence was not measured.' },
        { prompt: 'Bagaimana Presenter menyebut penggabungan dua usulannya?', options: ['Hasil eksperimen yang telah selesai.', 'Kewajiban bagi seluruh klub di semua tempat.', 'Sebuah usulan, bukan hasil yang telah diuji.'], answer: 2, explanation: 'Kalimat terakhir secara eksplisit memisahkan proposal dari result already tested.' }
      ]
    },
    assessment: {
      reading: {
        title: 'Day 6: Two Original Fictional Notes for a Community Exhibition',
        text: `Source A — Intan's poster note (fictional). Intan recommends large printed posters for a community exhibition. Visitors could read them without borrowing equipment, and several people could view a poster together. Her example concerns a hall with clear wall space. She recognises that detailed explanations would need too much space and that small text would be hard to read from a distance. She has not tested the posters with visitors.

Source B — Faris's audio note (fictional). Faris recommends short recorded explanations at each display. Visitors could hear a fuller explanation without adding more printed text. His example assumes working players and a quiet enough room. He recognises that visitors may need a written alternative and that equipment could fail. He has not tested the recordings with visitors. A presentation using these notes should compare access conditions rather than announce a proven winner. Both notes are original fictional practice sources.`
      },
      listening: {
        title: 'Day 6 Q&A: A Covered Waiting Area — optional synthetic speech',
        text: `Presenter: My fictional proposal is to add a covered waiting area beside the community office. I am discussing shelter from rain, not a new transport service.
Questioner: Would that reduce waiting times?
Presenter: The proposal does not establish that. A roof could make a wait more comfortable, but the length of the queue is a separate issue.
Questioner: Is the site suitable for wheelchair users?
Presenter: I cannot confirm that from the note. We would need to check the route and the available space before approving a design.
Questioner: Do you mean a closed room when you say covered?
Presenter: No. I mean a roof over an open area. Thank you for checking the term.
Questioner: What is your strongest limitation?
Presenter: We do not yet know whether the proposed space allows safe access. I would keep the recommendation conditional until that is checked.`
      },
      readingQuiz: [
        { prompt: 'Asumsi apa yang dibutuhkan usulan Faris?', options: ['Semua pengunjung harus bisa membaca teks kecil.', 'Pemutar berfungsi dan ruangan cukup tenang.', 'Tidak ada pengunjung yang memerlukan alternatif tertulis.'], answer: 1, explanation: 'Source B secara eksplisit mengasumsikan working players dan quiet enough room.' },
        { prompt: 'Simpulan presentasi mana yang sesuai kedua catatan?', options: ['Audio telah terbukti paling baik bagi seluruh pengunjung.', 'Poster telah diuji dan mengalahkan audio.', 'Pilihan perlu dibandingkan menurut kondisi akses; belum ada uji pengunjung.'], answer: 2, explanation: 'Kedua sumber belum menguji dengan pengunjung dan memiliki kondisi akses berbeda.' }
      ],
      listeningQuiz: [
        { prompt: 'Apa arti covered menurut Presenter?', options: ['Atap di atas area terbuka.', 'Ruangan tertutup sepenuhnya.', 'Layanan transportasi baru.'], answer: 0, explanation: 'Presenter menjelaskan a roof over an open area, bukan closed room.' },
        { prompt: 'Mengapa rekomendasi masih bersyarat?', options: ['Waktu antre sudah terbukti nol.', 'Akses aman ke lokasi belum diperiksa.', 'Semua pengguna kursi roda sudah menyetujui desain.'], answer: 1, explanation: 'Batasan utama yang disebut adalah belum diketahui apakah ruang memungkinkan safe access.' }
      ]
    }
  },
  {
    week: 24,
    explanation: `## Proyek terpadu pada masalah baru
Capstone memindahkan keterampilan ke keputusan nyata dalam skenario latihan, bukan mengulang esai lama. Minggu ini gunakan dua sumber baru tentang serah-terima pekerjaan sukarela. Keduanya teks asli dan fiktif; Anda tidak perlu mencari artikel luar atau menghubungi organisasi sungguhan. Pertanyaan proyeknya adalah bagaimana membuat serah-terima jelas tanpa menambah beban yang tidak perlu.

Pisahkan tiga lapisan: informasi sumber, penalaran Anda, dan tindakan yang diusulkan. Email meminta keputusan tertentu; memo menjelaskan masalah, pilihan, alasan, batasan, dan langkah berikutnya; presentasi membantu pendengar menilai usulan serta bertanya. Ketiganya boleh memakai inti keputusan yang sama, tetapi bentuknya harus menyesuaikan tujuan.

Pilih pemilik tindakan dan tenggat yang Anda nyatakan sebagai bagian skenario usulan, bukan fakta dari sumber. Jangan menciptakan angka penghematan atau menyebut rencana sudah berhasil. Ukuran pemeriksaan dapat berupa pertanyaan sederhana yang akan dicatat selama uji coba. Kesalahan umum adalah email meminta satu keputusan sementara memo merekomendasikan kebalikannya. Cocokkan istilah, syarat, dan langkah berikutnya sebelum mengumpulkan paket. Gate F menilai transfer tugas lokal, bukan sertifikasi kemampuan. Dialog dapat memakai suara sintetis opsional sebagai latihan, bukan rekaman rapat nyata.`,
    examples: [
      { en: 'Could you approve a one-week trial of the handover card?', id: 'Bisakah Anda menyetujui uji coba kartu serah-terima selama satu minggu?' },
      { en: 'Source A supports a written record, while Source B highlights the need for questions.', id: 'Sumber A mendukung catatan tertulis, sedangkan Sumber B menyoroti kebutuhan bertanya.' },
      { en: 'The coordinator would collect comments before any permanent change.', id: 'Koordinator akan mengumpulkan komentar sebelum perubahan permanen apa pun.' }
    ],
    vocabulary: [
      { en: 'handover', id: 'serah-terima informasi atau tanggung jawab' },
      { en: 'approval', id: 'persetujuan' },
      { en: 'trial period', id: 'masa uji coba' },
      { en: 'action owner', id: 'penanggung jawab tindakan' },
      { en: 'success criterion', id: 'kriteria untuk menilai keberhasilan' }
    ],
    reading: {
      title: 'Two New Original Fictional Sources: Volunteer Handover',
      text: `Source A — Salma's handover-card memo (fictional). Salma proposes a card listing completed work, the next task, and any unresolved problem at a community book room. Her example concerns volunteers who never meet because they cover different shifts. A card could preserve information between shifts without requiring a shared meeting. However, an unclear note might remain unexplained, and somebody must update it. Salma has not measured time savings or errors.

Source B — Bayu's overlap note (fictional). Bayu proposes a brief overlap between outgoing and incoming volunteers. They could check an unresolved problem together and ask immediate questions. His example assumes both volunteers can arrive at the agreed time. However, he admits that travel or other duties may prevent an overlap, and there would be no lasting record unless somebody writes one. Bayu has not measured time savings or errors either. Both sources address continuity, but their proposals depend on different conditions. These are new practice materials, not reports of a real organisation.`
    },
    listening: {
      title: 'Practice planning meeting: A Clear Borrowing Process — optional synthetic speech',
      text: `Coordinator: For our fictional club project, what decision are you requesting?
Volunteer: Permission to try a simple borrowing sheet for one week. Each entry would show the item, borrower, and return date.
Coordinator: Is that already in use?
Volunteer: No. It is my proposal. The practice notes describe a problem, but they do not report a successful trial.
Coordinator: Who would prepare the sheet?
Volunteer: I would prepare it before the next club session. You would check whether the instructions are clear.
Coordinator: What would you review afterward?
Volunteer: Whether members can find the return date and whether any entry is incomplete. I will not claim that it saves time without checking.
Coordinator: What about members who need help writing?
Volunteer: A volunteer could record their entry with permission. I will include that condition in both the email and the memo, rather than mentioning it only in the presentation.`
    },
    output: {
      speaking: 'Untuk Gate F, presentasikan usulan serah-terima 5–8 menit memakai dua sumber baru pada bacaan. Jelaskan keputusan yang diminta, alasan, pilihan yang tidak dipilih, batasan, pemilik tindakan, dan cara meninjau uji coba. Jawab tiga pertanyaan spontan: jika jadwal tidak bertemu, jika catatan tidak jelas, dan bukti apa yang belum ada.',
      writing: 'Buat paket capstone mandiri: email usulan 100–150 kata kepada koordinator fiktif dan memo 200–300 kata berdasarkan Salma/Bayu. Pilih kartu, overlap, atau kombinasi yang beralasan. Sebut sumber lokal, labeli rencana/angka baru sebagai usulan simulasi, tetapkan penanggung jawab serta tenggat, dan rumuskan pemeriksaan yang belum diklaim sebagai hasil. Tidak perlu mengirim email.'
    },
    review: 'Gate F: cocokkan email, memo, dan rekaman presentasi pada keputusan, tindakan, tenggat, dan batasan. Catat satu kekuatan serta dua hambatan paling mengganggu untuk minggu 25, dengan kutipan atau waktu rekaman sebagai bukti. Nilai pemahaman sumber terpisah dari kualitas bahasa.',
    quizzes: {
      pattern: [
        { prompt: 'Kalimat mana yang meminta keputusan, bukan mengklaim hasil yang belum ada?', options: ['The trial has already saved ten hours, although we never ran it.', 'Could you approve a one-week trial?', 'Everyone has proved that the plan is perfect.'], answer: 1, explanation: 'Could you approve meminta persetujuan untuk tindakan mendatang tanpa mengarang hasil.' },
        { prompt: 'Pemeriksaan mana yang dapat dicatat selama uji coba tanpa berpura-pura sudah berhasil?', options: ['We will record whether the next volunteer can identify the unfinished task.', 'We have certainly eliminated every mistake before starting.', 'The fictional plan is a real scientific discovery.'], answer: 0, explanation: 'Will record menyatakan rencana pemeriksaan, bukan hasil yang sudah diamati.' }
      ],
      reading: [
        { prompt: 'Masalah apa yang belum otomatis diselesaikan kartu Salma?', options: ['Kartu tidak mungkin mencatat tugas berikutnya.', 'Semua relawan harus bertemu langsung.', 'Catatan tidak jelas mungkin tidak mendapat penjelasan.'], answer: 2, explanation: 'Source A menyebut an unclear note might remain unexplained.' },
        { prompt: 'Syarat apa yang diperlukan usulan Bayu?', options: ['Kedua relawan dapat hadir pada waktu yang disepakati.', 'Tidak boleh ada pertanyaan langsung.', 'Tidak diperlukan waktu bertemu sama sekali.'], answer: 0, explanation: 'Overlap mengasumsikan kedua relawan bisa datang pada agreed time.' }
      ],
      listening: [
        { prompt: 'Siapa yang akan menyiapkan lembar peminjaman?', options: ['Peminjam pertama setelah uji coba selesai.', 'Volunteer sebelum sesi klub berikutnya.', 'Organisasi luar yang tidak disebutkan.'], answer: 1, explanation: 'Volunteer berkata I would prepare it before the next club session.' },
        { prompt: 'Syarat akses apa yang akan dimasukkan ke email dan memo?', options: ['Hanya orang yang bisa menulis cepat boleh meminjam.', 'Semua anggota harus membeli perangkat.', 'Relawan dapat membantu mencatat dengan izin anggota.'], answer: 2, explanation: 'Bantuan pencatatan dengan permission diusulkan untuk anggota yang memerlukan bantuan menulis.' }
      ]
    },
    assessment: {
      reading: {
        title: 'Day 6: Two New Original Fictional Sources on an Orientation Pack',
        text: `Source A — Wulan's welcome-sheet proposal (fictional). Wulan recommends a one-page orientation sheet for new market volunteers. It would show the meeting point, the supervisor's role, and the first task. Her example concerns people arriving at different times. She argues that they could find basic instructions without waiting for a group talk. However, a sheet would not answer an unexpected question, and its information would need checking after changes. No trial has taken place.

Source B — Galih's buddy proposal (fictional). Galih recommends pairing each new volunteer with an experienced person for the opening task. A buddy could demonstrate a procedure and answer questions. His example assumes enough experienced volunteers are available. He recognises that a buddy might give inconsistent information unless there is a shared guide. No trial has taken place here either. These new sources offer different supports for orientation; neither reports a measured improvement.`
      },
      listening: {
        title: 'Day 6 meeting: A Queue Information Trial — optional synthetic speech',
        text: `Manager: What are you asking us to approve in this fictional service centre?
Assistant: A three-day trial of a sign explaining where visitors should wait. The sign would not promise a shorter queue.
Manager: What is the evidence behind it?
Assistant: Our exercise notes describe confusion about the waiting place. They do not give measured waiting times. This is a proposed response, not a tested result.
Manager: Who would check the wording?
Assistant: The reception lead would check it on Tuesday before the trial begins on Wednesday.
Manager: How would you review the trial?
Assistant: Staff would record questions about where to wait, while keeping personal details out of the record. We would also ask whether the sign is easy to see.
Manager: What if some visitors cannot read it?
Assistant: Staff would still explain the process aloud. I will keep that condition in the proposal email, memo, and spoken summary.`
      },
      readingQuiz: [
        { prompt: 'Keterbatasan apa yang Galih akui?', options: ['Buddy dapat memberikan informasi tidak konsisten tanpa panduan bersama.', 'Buddy tidak dapat memperagakan prosedur.', 'Semua peningkatan sudah diukur.'], answer: 0, explanation: 'Source B mengakui risiko inconsistent information unless there is a shared guide.' },
        { prompt: 'Gabungan mana yang menanggapi batasan kedua sumber tanpa mengarang hasil?', options: ['Mengklaim semua relawan telah memahami tugas.', 'Mengusulkan panduan bersama dan buddy untuk pertanyaan, lalu meninjau uji coba.', 'Menghapus semua instruksi dan mengumumkan keberhasilan.'], answer: 1, explanation: 'Panduan bersama menanggapi konsistensi, buddy menanggapi pertanyaan; statusnya tetap usulan yang perlu ditinjau.' }
      ],
      listeningQuiz: [
        { prompt: 'Kapan reception lead akan memeriksa tulisan tanda?', options: ['Rabu setelah seluruh uji coba berakhir.', 'Setiap Sabtu selama satu tahun.', 'Selasa sebelum uji coba mulai Rabu.'], answer: 2, explanation: 'Assistant menyebut pemeriksaan pada Tuesday sebelum trial begins on Wednesday.' },
        { prompt: 'Apa yang tidak dijanjikan tanda tersebut?', options: ['Antrean lebih singkat.', 'Penjelasan lokasi menunggu.', 'Pemeriksaan apakah tanda mudah dilihat.'], answer: 0, explanation: 'Kalimat awal secara eksplisit menyebut sign would not promise a shorter queue.' }
      ]
    }
  },
  {
    week: 25,
    explanation: `## Perbaikan terarah harus berpindah konteks
Pilih dua hambatan terbesar dari bukti minggu lalu, bukan dua aturan yang paling menarik. Hambatan dapat berupa salah menangkap tenggat, klaim sumber yang terlalu pasti, tulisan tanpa tindakan jelas, atau jawaban lisan yang tidak langsung. Tentukan gejala yang dapat diamati: misalnya tiga angka tanpa satuan atau dua pertanyaan yang tidak terjawab.

Gunakan konteks baru minggu ini untuk mengetahui apakah perbaikan bertahan. Siklusnya adalah mencoba, menemukan bagian yang gagal, memperbaiki bagian itu, lalu membuat respons baru tanpa menyalin revisi. Mengulang naskah yang sama sampai hafal belum membuktikan transfer. Blok koreksi mengganti sebagian latihan biasa agar beban tetap masuk akal.

Untuk grammar, prioritaskan bentuk yang mengubah makna, seperti *by Friday* dibanding *on Friday*, kata modal, atau rujukan *it* yang kabur. Untuk listening, bandingkan detail sebelum dan sesudah membuka transkrip. Untuk speaking, periksa jawaban inti sebelum kelancaran. Bila tidak ada partner, gunakan rekaman dan daftar cek yang jelas; jangan menyebut penilaian sendiri sebagai feedback independen. Skenario lokal tetap fiktif, dan suara sintetis opsional hanyalah sarana latihan. Simpan contoh awal serta respons baru agar perubahan dapat ditunjukkan, bukan sekadar dirasakan.`,
    examples: [
      { en: 'Please send the list by Thursday; Thursday is the latest acceptable day.', id: 'Kirim daftar paling lambat Kamis; Kamis adalah hari terakhir yang dapat diterima.' },
      { en: 'Please collect the keys on Friday, not before the caretaker arrives.', id: 'Ambil kunci pada Jumat, bukan sebelum penjaga datang.' },
      { en: 'The schedule may reduce confusion; it has not been shown to save time.', id: 'Jadwal itu mungkin mengurangi kebingungan; belum ditunjukkan bahwa jadwal menghemat waktu.' }
    ],
    vocabulary: [
      { en: 'targeted correction', id: 'koreksi yang menargetkan hambatan tertentu' },
      { en: 'transfer', id: 'penerapan keterampilan pada konteks berbeda' },
      { en: 'deadline', id: 'batas waktu terakhir' },
      { en: 'observable', id: 'dapat diamati dengan bukti' },
      { en: 'independent feedback', id: 'umpan balik dari penilai lain' }
    ],
    reading: {
      title: 'A New Context: Preparing a Fictional Plant Exchange',
      text: `This original scenario is fictional. The neighbourhood garden group is preparing a plant exchange in a borrowed courtyard. Dina asks each volunteer to send a list of available plants by Thursday. The list may arrive earlier, but Thursday is the deadline. Volunteers should bring the labelled pots on Saturday between eight and nine in the morning. They should not leave pots at the gate on Friday because the courtyard will still be locked.

A previous draft message said, “Bring them then,” without explaining whether “them” meant lists or plants. Dina has replaced it with separate instructions for the list and the pots. She hopes the clearer wording will reduce questions, but no comparison has been made. The group also needs one person to welcome visitors who arrive without a plant. Dina asks volunteers to offer help with that role in their reply. If rain is forecast, she will confirm a new indoor location on Friday evening; the exchange has not automatically been cancelled.`
    },
    listening: {
      title: 'Practice clarification: A Fictional Costume Loan — optional synthetic speech',
      text: `Organiser: Please send your costume sizes by Tuesday. You can collect the costumes on Thursday afternoon.
Volunteer: So I should send the sizes on Thursday?
Organiser: No. Tuesday is the deadline for the size list. Thursday afternoon is the collection time.
Volunteer: Thank you. Where should I collect them?
Organiser: From the side office, not the stage. The stage will be in use.
Volunteer: Has the new list already made collection faster?
Organiser: We have not measured that. We hope it will help us prepare, but that is not a result yet.
Volunteer: Let me confirm. I will send the size list by Tuesday, then collect the costumes from the side office on Thursday afternoon.
Organiser: Correct. If you cannot come, name another collector in your message.
Volunteer: I will include a collector's name if needed and keep the two dates in separate sentences.`
    },
    output: {
      speaking: 'Pilih dua target berdasarkan bukti Gate F, lalu buat respons lisan baru 3–4 menit tentang pertukaran tanaman. Nyatakan tindakan, waktu, kondisi hujan, dan satu batasan klaim. Dengarkan rekaman, perbaiki hanya dua target, lalu tutup catatan dan jawab pertanyaan baru: “Apa yang saya lakukan jika tidak dapat hadir?” Jelaskan bagian yang belum ditentukan sumber, bukan mengarang ketentuan.',
      writing: 'Tulis respons 150–200 kata kepada Dina: konfirmasi tenggat daftar, waktu membawa pot, tawarkan atau tolak peran penyambut dengan alasan, dan ajukan pertanyaan tentang detail yang belum jelas. Di bawahnya, catat dua target pilihan, satu kutipan kesalahan awal, revisi, dan satu kalimat baru yang membuktikan penggunaan pada konteks lain. Minta feedback orang lain bila tersedia; jika tidak, labeli pemeriksaan mandiri.'
    },
    review: 'Bandingkan respons awal dan respons baru hanya pada dua target terpilih. Tandai berhasil, masih perlu bantuan, atau belum ada bukti. Hitung contoh nyata, bukan persentase kemampuan umum. Simpan satu respons yang dibuat tanpa melihat koreksi untuk portofolio akhir.',
    quizzes: {
      pattern: [
        { prompt: 'Apa arti “Send the list by Thursday”?', options: ['Kirim hanya setelah Kamis berlalu.', 'Kamis adalah batas terakhir; lebih awal boleh.', 'Daftar harus dikirim setiap hari selamanya.'], answer: 1, explanation: 'By menyatakan batas waktu terakhir, bukan kewajiban menunggu hingga hari itu.' },
        { prompt: 'Pesan mana yang menghilangkan rujukan kabur “Bring them then”?', options: ['Bring those things at that time.', 'Do it then with them.', 'Send the list by Thursday and bring the pots on Saturday morning.'], answer: 2, explanation: 'Nama benda dan waktu untuk masing-masing tindakan disebut secara eksplisit.' }
      ],
      reading: [
        { prompt: 'Mengapa pot tidak boleh ditinggal di gerbang pada Jumat?', options: ['Halaman masih terkunci.', 'Semua tanaman telah dibatalkan.', 'Daftar harus dibawa bersama pot pada Jumat.'], answer: 0, explanation: 'Teks menyatakan courtyard will still be locked pada Jumat.' },
        { prompt: 'Apa yang akan Dina lakukan bila ada prakiraan hujan?', options: ['Otomatis membatalkan kegiatan tanpa pemberitahuan.', 'Mengonfirmasi lokasi dalam ruangan baru pada Jumat malam.', 'Meminta semua pot ditinggal Kamis malam.'], answer: 1, explanation: 'Dina akan confirm a new indoor location on Friday evening.' }
      ],
      listening: [
        { prompt: 'Pasangan tindakan dan waktu mana yang benar?', options: ['Daftar ukuran Kamis; pengambilan Selasa.', 'Keduanya pada Jumat pagi.', 'Daftar ukuran paling lambat Selasa; pengambilan Kamis sore.'], answer: 2, explanation: 'Organiser membedakan deadline Tuesday dari collection Thursday afternoon.' },
        { prompt: 'Apa status klaim bahwa daftar membuat pengambilan lebih cepat?', options: ['Belum diukur; baru harapan.', 'Sudah terbukti pada semua acara.', 'Dinyatakan mustahil oleh penelitian nyata.'], answer: 0, explanation: 'Organiser mengatakan We have not measured that dan that is not a result yet.' }
      ]
    },
    assessment: {
      reading: {
        title: 'Day 6: A Fictional Mobile Repair Visit',
        text: `The following service message is an original fictional scenario. A repair volunteer will visit the community hall next week. Residents should send a description of the broken item by Monday so that the volunteer can decide what tools to bring. The visit itself is on Wednesday from two to four in the afternoon. Residents must bring their items to the rear entrance, because a children's activity will use the front room.

The organiser hopes that advance descriptions will make preparation easier, but has not measured repair times or success rates. Items needing specialist electrical work may be referred elsewhere; a description does not guarantee a repair. Residents who cannot write a description can leave a spoken message with the hall assistant. The organiser asks every resident to include a contact method, not a public list of personal details. If the volunteer is delayed, the hall assistant will contact registered residents on Tuesday evening.`
      },
      listening: {
        title: 'Day 6 clarification: A Fictional Food Collection — optional synthetic speech',
        text: `Coordinator: Send the number of meal boxes you need by Friday. Collection is on Sunday between ten and eleven in the morning.
Helper: Is Friday the collection day?
Coordinator: No. Friday is the deadline for the number. You collect on Sunday from the school kitchen entrance, not the main gate.
Helper: Will the boxes certainly stay hot until evening?
Coordinator: We cannot promise that. The note only gives the collection arrangement, not a tested storage period. Please follow the food instructions supplied with the boxes.
Helper: I will not invent a storage time. What if another person collects for me?
Coordinator: Put that person's name in your request so staff know who to expect.
Helper: Let me check: number by Friday, collection on Sunday morning at the kitchen entrance, and a collector's name if somebody else comes.
Coordinator: That is the complete arrangement we have agreed in this fictional exercise.`
      },
      readingQuiz: [
        { prompt: 'Apa yang harus dikirim paling lambat Senin?', options: ['Barang ke pintu depan.', 'Deskripsi barang yang rusak.', 'Hasil perbaikan yang sudah selesai.'], answer: 1, explanation: 'Deskripsi dikirim by Monday; barang dibawa saat kunjungan Rabu.' },
        { prompt: 'Klaim mana yang sesuai pesan?', options: ['Semua barang pasti dapat diperbaiki.', 'Waktu perbaikan telah terbukti berkurang separuh.', 'Deskripsi awal membantu persiapan yang diharapkan, tetapi tidak menjamin perbaikan.'], answer: 2, explanation: 'Teks menyatakan harapan persiapan, belum ada pengukuran, dan description does not guarantee a repair.' }
      ],
      listeningQuiz: [
        { prompt: 'Di mana kotak makanan diambil?', options: ['Pintu masuk dapur sekolah.', 'Gerbang utama.', 'Balai warga pada Jumat malam.'], answer: 0, explanation: 'Coordinator secara khusus menyebut school kitchen entrance, not the main gate.' },
        { prompt: 'Apa yang belum dapat dijanjikan dari catatan tersebut?', options: ['Batas pemesanan pada Jumat.', 'Kotak pasti tetap panas sampai malam.', 'Pengambilan pada Minggu pagi.'], answer: 1, explanation: 'Catatan tidak memberikan tested storage period sehingga ketahanan panas hingga malam tidak dapat dijanjikan.' }
      ]
    }
  },
  {
    week: 26,
    explanation: `## Audit akhir: laporkan bukti, bukan label
Minggu ini tidak menambah aturan bahasa. Gunakan paket baru untuk memeriksa membaca, mendengar, berbicara, dan menulis secara terpisah. Catat kondisi tugas: sekali atau berulang, dengan atau tanpa transkrip, memakai catatan atau tidak, serta bantuan yang digunakan. Hasil dengan bantuan tetap berguna, tetapi tidak setara dengan respons mandiri.

Portofolio perlu menunjukkan produk dan proses. Pilih contoh awal, revisi yang dapat dijelaskan, dan respons baru yang memperlihatkan transfer. Untuk membaca, tunjukkan jawaban yang bersumber pada teks; untuk listening, bedakan detail yang terdengar dari detail yang baru diketahui setelah membaca. Untuk speaking dan writing, periksa kelengkapan pesan, ketepatan makna, organisasi, dan hambatan bahasa.

Jangan mengubah skor kuis lokal menjadi CEFR, skor ujian resmi, atau janji siap kuliah. Jika tidak ada audio yang didengar, tulis bahwa bukti listening belum tersedia. Semua sumber di sini asli dan fiktif; simpulan hanya berlaku untuk tugas latihan ini. Akhiri dengan rencana dua belas minggu berdasarkan gap terbesar: target yang teramati, kegiatan berulang, dan waktu meninjau bukti baru. Kesalahan umum ialah menghitung banyaknya materi selesai tanpa menunjukkan apa yang dapat dilakukan tanpa bantuan.`,
    examples: [
      { en: 'I identified both sources’ limits without reopening the text.', id: 'Saya mengenali batasan kedua sumber tanpa membuka teks kembali.' },
      { en: 'I needed a second playback to catch the collection time.', id: 'Saya memerlukan pemutaran kedua untuk menangkap waktu pengambilan.' },
      { en: 'My next goal is to answer a follow-up question directly before adding detail.', id: 'Target berikutnya adalah menjawab pertanyaan lanjutan secara langsung sebelum menambah detail.' }
    ],
    vocabulary: [
      { en: 'portfolio evidence', id: 'bukti tugas dalam portofolio' },
      { en: 'independent performance', id: 'kinerja tanpa bantuan' },
      { en: 'revision history', id: 'riwayat perbaikan' },
      { en: 'remaining gap', id: 'kesenjangan kemampuan yang masih ada' },
      { en: 'review point', id: 'waktu yang ditetapkan untuk meninjau kemajuan' }
    ],
    reading: {
      title: 'Two New Original Fictional Sources: Making a Community Study Space Useful',
      text: `Source A — Rafi's silent-hour proposal (fictional). Rafi recommends keeping the first hour of a community study room quiet. His example concerns learners preparing individual written tasks after work. He argues that a predictable quiet period could help them begin. However, newcomers who need spoken guidance would have to wait or use another area. Rafi has no records of actual attendance or task completion.

Source B — Melati's welcome-desk proposal (fictional). Melati recommends using the first hour for a staffed welcome desk and short spoken explanations. Her example concerns new members who do not yet understand the room's materials. She argues that immediate guidance could make starting easier. However, conversation might disturb people doing individual work, and a separate area may not be available. Melati has no attendance or completion records either. Both sources want members to begin useful work, but their priorities differ. These original fictional sources support a limited comparison, not a conclusion about measured learning gains.`
    },
    listening: {
      title: 'Practice reflection: Reporting What Happened — optional synthetic speech',
      text: `Reviewer: What evidence will you include from your fictional course task?
Learner: A first recording, a revised outline, and a new recording on another topic. In the first attempt, I gave a long background before answering the question.
Reviewer: What changed in the new attempt?
Learner: I answered the question in the opening sentence and then gave a reason. I still paused when explaining a limitation.
Reviewer: Did another person assess it?
Learner: No. This is my own review of the recordings, so I will label it as self-assessment.
Reviewer: What can you say about listening?
Learner: I caught the main decision on the first playback, but needed a second playback for the date. I will record both conditions.
Reviewer: And your next goal?
Learner: Practise short answers to unfamiliar follow-up questions twice a week, then compare a new recording after four weeks. I will not turn this task into a formal proficiency score.`
    },
    output: {
      speaking: 'Untuk portofolio latihan, bandingkan Rafi/Melati dalam presentasi 5–6 menit, sebut batasan dan usulan sendiri. Jawab tiga pertanyaan tanpa naskah: siapa yang belum terlayani, informasi apa yang kurang, dan apa yang berubah jika ada ruang kedua? Simpan rekaman serta catatan bantuan. Pada hari 6, ulangi audit lisan dengan skenario assessment yang baru, bukan presentasi yang sudah dihafal.',
      writing: 'Tulis memo latihan 200–300 kata dari dua sumber baru, lalu laporan portofolio dengan bagian membaca, listening, speaking, dan writing. Untuk tiap skill sebut bukti tugas, kondisi bantuan, kekuatan, dan gap. Lampirkan satu draf/revisi serta respons transfer. Susun rencana 12 minggu: minggu 1–4 satu gap utama, 5–8 konteks berbeda, 9–12 tugas baru dan audit ulang; tentukan frekuensi serta bukti yang akan ditinjau.'
    },
    review: 'Audit akhir hari 6: kerjakan kuis bacaan/naskah assessment sebelum membuka jawaban. Jika audio tersedia, dengarkan tanpa transkrip terlebih dahulu dan catat jumlah pemutaran; jika tidak, jangan laporkan skor listening. Dari paket baru, tulis rekomendasi 200–300 kata dan rekam presentasi 5 menit serta tiga jawaban: mengapa pilihan itu, siapa belum terlayani, dan bukti apa yang kurang. Simpan hasil pertama serta revisi terpisah. Laporkan profil empat skill dan rencana 12 minggu, tanpa konversi CEFR atau skor ujian resmi.',
    quizzes: {
      pattern: [
        { prompt: 'Laporan mana yang membedakan kinerja dan bantuan secara jujur?', options: ['I understood everything perfectly, although I only read the answer key.', 'I caught the main point once and found the date after a second playback.', 'My local quiz result guarantees a university language score.'], answer: 1, explanation: 'Laporan kedua menjelaskan apa yang berhasil dan kondisi pengulangan tanpa melebihkan hasil.' },
        { prompt: 'Target lanjutan mana yang paling dapat diamati?', options: ['Be perfect at all English immediately.', 'Finish many pages without keeping any evidence.', 'Answer the question in the first sentence in three new recorded tasks.'], answer: 2, explanation: 'Target terakhir memiliki perilaku, jumlah tugas baru, dan bukti rekaman yang dapat ditinjau.' }
      ],
      reading: [
        { prompt: 'Apa tujuan yang sama pada dua proposal?', options: ['Membantu anggota memulai pekerjaan yang bermanfaat.', 'Membuktikan semua hasil belajar meningkat.', 'Melarang setiap anggota baru bertanya.'], answer: 0, explanation: 'Kalimat akhir menyebut keduanya ingin members to begin useful work.' },
        { prompt: 'Keterbatasan apa yang Melati akui?', options: ['Penjelasan lisan selalu mustahil.', 'Percakapan dapat mengganggu kerja individu dan ruang terpisah mungkin tidak tersedia.', 'Semua anggota telah menyelesaikan tugas lebih cepat.'], answer: 1, explanation: 'Source B menyebut potensi gangguan percakapan dan ketidaktersediaan area terpisah.' }
      ],
      listening: [
        { prompt: 'Apa perubahan yang Learner tunjukkan dalam rekaman baru?', options: ['Menghapus semua alasan dan batasan.', 'Meminta orang lain berbicara menggantikannya.', 'Menjawab pada kalimat pembuka lalu memberi alasan.'], answer: 2, explanation: 'Learner mengatakan I answered the question in the opening sentence and then gave a reason.' },
        { prompt: 'Bagaimana evaluasi rekaman itu harus dilabeli?', options: ['Penilaian mandiri.', 'Sertifikasi penguji independen.', 'Skor resmi seluruh kemampuan bahasa.'], answer: 0, explanation: 'Tidak ada orang lain yang menilai, sehingga Learner menyebut self-assessment.' }
      ]
    },
    assessment: {
      reading: {
        title: 'Day 6 Final Audit: Two Original Fictional Sources on Shared Storage',
        text: `Source A — Laras's labelled-shelf proposal (fictional). Laras recommends giving each activity group a labelled shelf in the community hall. Her example concerns groups that meet weekly and need a predictable place for a small box. A fixed shelf could make supplies easier to locate. However, an unused shelf would remain unavailable to a visiting group unless somebody changed the allocation. Laras has no records of lost items or storage demand.

Source B — Joko's booking-cabinet proposal (fictional). Joko recommends a cabinet that groups reserve for specific dates. His example concerns short events that need temporary storage. Reservations could share limited space between more activities. However, somebody would need to maintain the booking record, and a late collection could affect the next group. Joko has no records of lost items or storage demand either. Both sources aim to organise supplies, but neither proves that its method prevents losses. They are new original practice sources, not research reports.`
      },
      listening: {
        title: 'Day 6 Final Audit: A Fictional Courtyard Schedule — optional synthetic speech',
        text: `Chair: We need a proposal for using the shared courtyard. The walking group wants a quiet morning slot, while the drama group needs space to practise aloud.
Secretary: The walking group requests Saturday from seven to eight. The drama group requests Saturday from nine to eleven. There is an hour between the proposed slots.
Chair: Are those bookings already approved?
Secretary: No. Both are requests. We also need to check whether nearby residents have concerns about morning noise.
Chair: What should the proposal include?
Secretary: The requested times, a named person to open and close the gate, and a way for residents to comment before approval.
Chair: Can we say that this schedule improves wellbeing?
Secretary: No. We have no wellbeing measurements. We can discuss whether the activities fit the space and times, not claim a health result.
Chair: Record the requests and the unanswered noise question separately. Do not present an undecided schedule as an agreement.`
      },
      readingQuiz: [
        { prompt: 'Risiko apa yang khusus disebut dalam usulan kabinet Joko?', options: ['Tidak ada orang yang boleh membuat catatan.', 'Pengambilan terlambat dapat memengaruhi kelompok berikutnya.', 'Semua rak permanen otomatis dipindahkan.'], answer: 1, explanation: 'Source B menyebut a late collection could affect the next group.' },
        { prompt: 'Pernyataan mana yang dibenarkan kedua sumber?', options: ['Keduanya membuktikan kehilangan barang sudah hilang.', 'Keduanya mencatat permintaan penyimpanan secara lengkap.', 'Keduanya bertujuan mengatur perlengkapan, tetapi belum membuktikan pencegahan kehilangan.'], answer: 2, explanation: 'Tujuan pengaturan dinyatakan bersama, sementara tidak ada catatan atau bukti pencegahan kehilangan.' }
      ],
      listeningQuiz: [
        { prompt: 'Bagaimana status waktu penggunaan halaman?', options: ['Masih berupa permintaan, belum disetujui.', 'Sudah menjadi persetujuan final semua warga.', 'Sudah diuji sepanjang tahun.'], answer: 0, explanation: 'Secretary menjawab No dan menegaskan both are requests, bukan approved bookings.' },
        { prompt: 'Mengapa tidak boleh mengklaim peningkatan wellbeing?', options: ['Kelompok berjalan meminta waktu sore.', 'Tidak ada pengukuran wellbeing.', 'Kelompok drama membatalkan permintaannya.'], answer: 1, explanation: 'Secretary menyatakan We have no wellbeing measurements sehingga hasil kesehatan tidak dapat diklaim.' }
      ]
    }
  }
];
