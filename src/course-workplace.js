export const lessons2 = [
  {
    week: 9,
    explanation: `## Menjelaskan proses yang dapat diikuti

Instruksi yang baik menyebut tujuan, alat atau syarat, langkah, lalu cara memeriksa hasil. Gunakan kata kerja dasar di awal: “Open the file”, bukan “You opening the file”. Tambahkan objek yang jelas; “check it” membingungkan jika ada beberapa benda. Untuk urutan, gunakan first, next, then, dan finally. Then menunjukkan langkah berikutnya, sedangkan finally menandai langkah terakhir, bukan setiap langkah penting.

Hubungkan tindakan dan alasan dengan because: “Save a copy because you may need the original.” Untuk akibat, gunakan so: “The room is busy, so choose another time.” Jangan menulis “because ... so ...” dalam satu hubungan yang sama. Must menunjukkan keharusan; must not berarti larangan. Don't have to berarti tidak wajib, bukan dilarang. Pilih sesuai maksud, bukan terjemahan kata per kata.

Baca petunjuk sekali untuk tujuan, lalu sekali lagi untuk urutan dan batasannya. Setelah mendengar skrip, catat kata kerja tanpa menyalin semua kalimat. Saat menjelaskan, bayangkan pendengar belum pernah melakukan tugas itu. Uji kejelasan dengan menutup teks dan menyebut langkah dari awal sampai pemeriksaan akhir.`,
    examples: [
      { en: 'First, make a copy of the weekly plan.', id: 'Pertama, buat salinan rencana mingguan.' },
      { en: 'Keep the original because you may need it later.', id: 'Simpan versi asli karena kamu mungkin memerlukannya nanti.' },
      { en: 'You must not share the access code.', id: 'Kamu tidak boleh membagikan kode akses.' },
      { en: "You don't have to print the checklist.", id: 'Kamu tidak wajib mencetak daftar periksa.' }
    ],
    vocabulary: [
      { en: 'step', id: 'langkah' }, { en: 'copy', id: 'salinan; menyalin' },
      { en: 'checklist', id: 'daftar periksa' }, { en: 'confirm', id: 'memastikan; mengonfirmasi' },
      { en: 'available', id: 'tersedia' }, { en: 'original', id: 'versi asli' }
    ],
    reading: {
      title: 'Booking a quiet study room',
      text: 'Our fictional learning centre has a small room for quiet study. First, open the booking sheet and choose an empty time slot. Write your name and the number of people in your group. Each booking can last one hour. Next, check the equipment list because the room has a screen but no laptop. Bring your own laptop if you need one. Then send a short confirmation to the desk assistant. You must not give the door code to people outside your group. Finally, check the booking sheet again before you travel. Another group may have reported a problem with the room. You do not have to print your confirmation; showing it on your phone is enough.'
    },
    listening: {
      title: 'A handover for the evening helper',
      text: 'Dina: Could you explain how to close the activity desk? Arif: Sure. First, count the returned pencils and put them in the blue box. Dina: Do I put the scissors there too? Arif: No, keep the scissors in the locked drawer. Then write any missing items on the paper checklist. Dina: Should I email the list? Arif: Not tonight. Leave it beside the computer because the morning helper checks it there. Finally, turn off the desk lamp. You must leave the corridor light on, so visitors can find the exit. Dina: Pencils, checklist, desk lamp. The corridor light stays on. Arif: Exactly.'
    },
    output: {
      speaking: 'Jelaskan proses memesan ruang belajar selama 2–3 menit dari lima kata kunci, bukan naskah. Sebut tujuan, urutan, satu keharusan, satu larangan, dan pemeriksaan akhir. Mainkan pendengar yang bertanya “What happens next?” lalu jawab. Jika berlatih sendiri, rekam kedua peran dengan jeda.',
      writing: 'Tulis petunjuk asli 100–120 kata untuk menyiapkan satu sesi belajar di rumah. Sertakan alat, first/then/finally, satu because atau so, dan cara memeriksa hasil. Revisi instruksi yang objek atau urutannya belum jelas; simpan draft dan revisi.'
    },
    review: 'Hari 1–5 gunakan bacaan dan skrip latihan ini; audio lokal sintetis hanyalah pembacaan skrip untuk latihan. Tutup teks saat percobaan mendengar pertama. Hari 6 gunakan pasangan asesmen baru tanpa membuka teks/jawaban dahulu. Catat apakah kesulitan utamamu urutan, alasan, atau must not versus do not have to; pilih dua kalimat untuk diperbaiki.',
    quizzes: {
      pattern: [
        { prompt: 'Pilih kalimat yang berarti mencetak tidak wajib.', options: ['You must not print it.', "You don't have to print it.", 'You must print it.'], answer: 1, explanation: 'Do not have to menyatakan tidak wajib. Must not adalah larangan.' },
        { prompt: 'Lengkapi alasan: Keep a copy ___ the original may change.', options: ['so', 'finally', 'because'], answer: 2, explanation: 'Bagian sesudah rumpang adalah alasan menyimpan salinan, sehingga because tepat.' }
      ],
      reading: [
        { prompt: 'Apa yang perlu dibawa jika kelompok membutuhkan komputer?', options: ['A screen', 'A laptop', 'A printed confirmation'], answer: 1, explanation: 'Ruang memiliki screen tetapi tidak memiliki laptop; pembaca diminta membawa laptop sendiri.' },
        { prompt: 'Apa langkah terakhir sebelum berangkat?', options: ['Check the booking sheet again.', 'Share the code with another group.', 'Print every confirmation.'], answer: 0, explanation: 'Finally diikuti pemeriksaan ulang lembar pemesanan sebelum bepergian.' }
      ],
      listening: [
        { prompt: 'Di mana daftar barang yang hilang ditinggalkan?', options: ['In the blue box', 'Inside the locked drawer', 'Beside the computer'], answer: 2, explanation: 'Arif meminta checklist ditinggalkan di sebelah komputer untuk petugas pagi.' },
        { prompt: 'Lampu mana yang harus tetap menyala?', options: ['The desk lamp', 'The corridor light', 'Both lights'], answer: 1, explanation: 'Lampu meja dimatikan, tetapi lampu koridor tetap menyala agar pengunjung menemukan jalan keluar.' }
      ]
    },
    assessment: {
      reading: {
        title: 'Preparing a shared materials box',
        text: 'Before Friday’s drawing session, prepare a materials box for six learners. First, place six notebooks on the table and check that every notebook has blank pages. Put a pencil beside each one. Next, count twelve coloured pens and put them in the small tray. You must not put wet paint in the box because it can damage the paper. Then attach the materials list to the outside of the box. If something is missing, write a note for the organiser instead of borrowing from another class. Finally, leave the box on the lower shelf near the window. You do not have to lock the cupboard; the organiser will collect the box at noon.'
      },
      listening: {
        title: 'Sending an exercise file',
        text: 'Lina: How do I send my exercise to the tutor? Bayu: First, save it with your name and the lesson number. Lina: Can I send a photo of every page? Bayu: Please send one document instead. It is easier to read. Next, open the class message and attach the document. Check that it is the right file before you send it. Lina: Do I have to add my phone number? Bayu: No, you do not have to include a number. Finally, ask the tutor to confirm that the document opens. If it does not open, send a new copy. Do not send your account password.'
      },
      readingQuiz: [
        { prompt: 'Mengapa cat basah tidak boleh dimasukkan?', options: ['It can damage the paper.', 'The box is locked.', 'The organiser needs it at night.'], answer: 0, explanation: 'Larangan cat basah disertai alasan bahwa cat dapat merusak kertas.' },
        { prompt: 'Di mana kotak harus ditinggalkan?', options: ['On the table', 'On the lower shelf near the window', 'In another classroom'], answer: 1, explanation: 'Langkah finally menyebut rak bawah dekat jendela.' }
      ],
      listeningQuiz: [
        { prompt: 'Format kiriman apa yang diminta Bayu?', options: ['A separate photo of each page', 'A message containing a password', 'One document'], answer: 2, explanation: 'Bayu meminta satu dokumen, bukan foto setiap halaman.' },
        { prompt: 'Apa yang dilakukan setelah mengirim?', options: ['Ask whether the document opens.', 'Send an account password.', 'Delete the lesson number.'], answer: 0, explanation: 'Langkah terakhir adalah meminta konfirmasi bahwa dokumen bisa dibuka.' }
      ]
    }
  },
  {
    week: 10,
    explanation: `## Pengalaman dan waktu kejadian

Present perfect menghubungkan pengalaman atau hasil dengan sekarang. Bentuknya have atau has ditambah past participle: “I have completed the course.” Gunakan untuk menyatakan pernah, belum, atau hasil yang relevan tanpa waktu lampau yang sudah selesai. Have berubah menjadi has untuk he, she, atau it. Bentuk ketiga tidak selalu sama dengan bentuk lampau: write, wrote, written.

Past simple menempatkan kejadian pada waktu lampau tertentu: “I completed it last June.” Jangan menggabungkan “I have completed” dengan “yesterday” untuk kejadian selesai itu. Dalam cerita, mulailah dengan pengalaman umum, lalu berikan detail kapan, apa yang dilakukan, dan hasilnya dengan past simple. Pertanyaan lanjutan “When did you do it?” membantu mengubah pengalaman umum menjadi cerita konkret.

Already menandai sesuatu sudah terjadi; yet lazim pada pertanyaan dan negatif tentang yang diharapkan. “I haven't sent it yet” berarti belum, bukan tidak akan pernah. Hindari mengarang pencapaian untuk terdengar hebat. Pengalaman kecil seperti menyusun jadwal juga dapat dijelaskan dengan jelas. Saat membaca atau mendengar, pisahkan hal yang sudah selesai dari langkah yang masih direncanakan.`,
    examples: [
      { en: 'I have organised a study group.', id: 'Saya pernah mengatur kelompok belajar.' },
      { en: 'I organised our first meeting last April.', id: 'Saya mengatur pertemuan pertama kami April lalu.' },
      { en: "She hasn't written the summary yet.", id: 'Dia belum menulis ringkasannya.' },
      { en: 'Have you ever changed a difficult routine?', id: 'Pernahkah kamu mengubah rutinitas yang sulit?' }
    ],
    vocabulary: [
      { en: 'experience', id: 'pengalaman' }, { en: 'achievement', id: 'pencapaian' },
      { en: 'complete', id: 'menyelesaikan' }, { en: 'improve', id: 'memperbaiki' },
      { en: 'so far', id: 'sejauh ini' }, { en: 'yet', id: 'belum; sudah dalam pertanyaan' }
    ],
    reading: {
      title: 'A small achievement at the library',
      text: 'My name is Sari, and I have helped at a neighbourhood library for several months. I have learned how to welcome visitors and explain the borrowing rules. Last March, I organised a reading afternoon for the first time. I made a simple timetable and asked two friends to prepare the chairs. At first, I forgot to include a break, so we changed the timetable before the event. The afternoon went well, but I still found it difficult to answer unexpected questions. Since then, I have kept a notebook of useful phrases. I have not led another event yet. Next month, I plan to try again and leave more time for questions at the end.'
    },
    listening: {
      title: 'Talking about a repaired routine',
      text: 'Raka: Have you ever used a weekly study planner, Mei? Mei: Yes, I have. I started using one in August, after I missed a homework deadline. Raka: What did you change? Mei: I put my small tasks on separate days instead of leaving everything until Sunday. I have finished three short lessons this week, but I have not reviewed the vocabulary yet. Raka: Did the planner solve every problem? Mei: No. Last Tuesday, I planned too much and felt tired. Now I leave one empty evening. Raka: Have you shown it to anyone? Mei: Not yet. I want to make it easier to read first.'
    },
    output: {
      speaking: 'Ceritakan satu pengalaman nyata selama sekitar 3 menit. Mulai dengan “I have ...”, lalu jelaskan kapan dengan past simple, masalah, tindakan, dan hasil. Jawab tiga pertanyaan lanjutan buatanmu sendiri: When? What changed? What have you not done yet? Jangan mengklaim pengalaman tokoh sebagai pengalamanmu.',
      writing: 'Tulis sekitar 120 kata tentang pengalaman kecil yang benar-benar kamu alami. Tandai satu present perfect dan dua past simple beserta penanda waktunya. Sertakan satu hal yang belum selesai. Revisi jika ada have/has + yesterday atau bentuk ketiga yang keliru.'
    },
    review: 'Gunakan latihan hari 1–5, lalu simpan asesmen untuk percobaan pertama hari 6. Perlakukan audio lokal sintetis sebagai pembacaan skrip, bukan ujian listening autentik. Buat dua kolom: pengalaman tanpa waktu tertentu dan kejadian pada waktu tertentu. Catat satu kesalahan bentuk serta satu informasi yang gagal kamu tangkap.',
    quizzes: {
      pattern: [
        { prompt: 'Pilih kalimat dengan waktu lampau tertentu yang tepat.', options: ['I have joined the group yesterday.', 'I joined the group yesterday.', 'I has joined the group yesterday.'], answer: 1, explanation: 'Yesterday adalah waktu selesai, sehingga joined dalam past simple tepat.' },
        { prompt: 'Lengkapi: She has ___ three reports so far.', options: ['wrote', 'write', 'written'], answer: 2, explanation: 'Setelah has diperlukan past participle: written.' }
      ],
      reading: [
        { prompt: 'Apa yang terlupa pada jadwal awal Sari?', options: ['A break', 'The borrowing rules', 'A notebook'], answer: 0, explanation: 'Sari menyatakan bahwa ia lupa memasukkan waktu istirahat.' },
        { prompt: 'Apa yang belum dilakukan Sari lagi?', options: ['Welcome a visitor', 'Lead another event', 'Keep a phrase notebook'], answer: 1, explanation: 'Teks menyebut “I have not led another event yet”.' }
      ],
      listening: [
        { prompt: 'Mengapa Mei mulai memakai planner pada Agustus?', options: ['She wanted every evening to be full.', 'Raka bought her a notebook.', 'She missed a homework deadline.'], answer: 2, explanation: 'Mei mulai setelah melewatkan tenggat pekerjaan rumah.' },
        { prompt: 'Apa yang belum Mei kerjakan minggu ini?', options: ['Review the vocabulary', 'Finish any short lessons', 'Leave an empty evening'], answer: 0, explanation: 'Tiga pelajaran sudah selesai, tetapi kosakata belum ditinjau.' }
      ]
    },
    assessment: {
      reading: {
        title: 'Learning to lead an online session',
        text: 'Fikri has attended several online study sessions, but he has led only one. He led that session in February when the usual organiser was away. Before the call, he sent a short agenda and tested his microphone. During the session, one learner could not open the shared exercise. Fikri copied the instructions into the chat, so everyone could continue. He finished ten minutes later than planned because he allowed extra discussion. Since that day, he has prepared a backup text for every meeting he attends. He has not learned how to record meetings yet. His next goal is to practise that skill with a friend, with permission, before he leads another group.'
      },
      listening: {
        title: 'A first delivery task',
        text: 'Nadia: Have you ever helped with a community delivery? Gilang: Yes. I took books to a reading corner last November. Nadia: What was your task? Gilang: I checked the address and packed the books. I have packed many boxes at home, but that was my first delivery for the group. Nadia: Did anything go wrong? Gilang: We arrived at the side entrance, which was closed. I called the organiser, and she met us at the front door. Nadia: Have you volunteered again? Gilang: Not yet. I have contacted the group, but I have not received the next schedule.'
      },
      readingQuiz: [
        { prompt: 'Bagaimana Fikri membantu peserta yang tidak bisa membuka latihan?', options: ['He cancelled the discussion.', 'He recorded the whole meeting.', 'He copied instructions into the chat.'], answer: 2, explanation: 'Instruksi dipindahkan ke chat agar semua peserta dapat melanjutkan.' },
        { prompt: 'Keterampilan apa yang belum Fikri pelajari?', options: ['Recording meetings', 'Testing a microphone', 'Sending an agenda'], answer: 0, explanation: 'Teks secara eksplisit menyebut ia belum belajar merekam rapat.' }
      ],
      listeningQuiz: [
        { prompt: 'Kapan Gilang melakukan pengantaran buku?', options: ['Last February', 'Last November', 'Next November'], answer: 1, explanation: 'Gilang menyebut “last November”.' },
        { prompt: 'Mengapa Gilang belum mengetahui jadwal berikutnya?', options: ['He has not contacted the group.', 'The front door is still closed.', 'He has not received the schedule.'], answer: 2, explanation: 'Ia sudah menghubungi kelompok tetapi belum menerima jadwal baru.' }
      ]
    }
  },
  {
    week: 11,
    explanation: `## Membangun paragraf pendapat

Satu paragraf sebaiknya mengembangkan satu ide utama, bukan daftar banyak gagasan yang tidak berhubungan. Mulailah dengan topic sentence yang menyebut posisi. Lanjutkan alasan yang menjawab mengapa, lalu contoh konkret, dan tutup dengan implikasi atau batasan. Contoh mendukung penjelasan, tetapi satu pengalaman pribadi tidak membuktikan bahwa hal sama berlaku bagi semua orang.

Bedakan informasi teks dan pendapatmu. “The writer describes ...” mengacu pada isi bacaan; “I think ...” menunjukkan penilaian sendiri. Jangan mengubah pendapat tokoh menjadi fakta umum. Karena materi ini fiktif, tokohnya hanya sumber latihan, bukan peneliti atau bukti ilmiah.

But menghubungkan gagasan yang berlawanan. Although membuka anak kalimat: “Although the room is small, it is quiet.” Hindari “Although ... but ...” untuk hubungan yang sama. Pastikan contoh benar-benar menjelaskan alasan utama. Jika kalimat hanya menarik tetapi tidak relevan, hapus atau pindahkan. Saat merevisi, garis bawahi ide utama, lingkari penghubung, lalu tanyakan apakah setiap kalimat membantu pembaca memahami posisi dan batasannya. Kamu boleh tidak setuju dengan tokoh selama alasannya jelas dan isi sumber tidak dipelintir.`,
    examples: [
      { en: 'I think a short daily plan is easier to follow.', id: 'Menurut saya rencana harian singkat lebih mudah diikuti.' },
      { en: 'Although the room is small, it is quiet.', id: 'Walaupun ruangannya kecil, ruang itu tenang.' },
      { en: 'The writer prefers morning study, but I prefer evenings.', id: 'Penulis lebih suka belajar pagi, tetapi saya lebih suka malam.' },
      { en: 'For example, I can review five words before breakfast.', id: 'Misalnya, saya bisa meninjau lima kata sebelum sarapan.' }
    ],
    vocabulary: [
      { en: 'main idea', id: 'ide utama' }, { en: 'reason', id: 'alasan' },
      { en: 'example', id: 'contoh' }, { en: 'opinion', id: 'pendapat' },
      { en: 'relevant', id: 'berkaitan dengan topik' }, { en: 'limitation', id: 'keterbatasan' }
    ],
    reading: {
      title: 'Why I keep my daily plan short',
      text: 'I prefer a daily plan with only a few important tasks. A long list makes it difficult for me to decide where to begin. Last Monday, for example, I wrote down twelve jobs but kept moving between them. On Tuesday, I chose three priorities and finished the most urgent one before lunch. This experience does not show that short lists work for everyone. A person who coordinates a large team may need a longer record. However, for my own evening study, a short plan gives me a clear starting point. I still keep a separate list of future tasks, so I do not forget them. My daily plan is a guide for attention, not a complete record of my life.'
    },
    listening: {
      title: 'Where should the group study?',
      text: 'Ayu: I think our group should meet at the community room. It has a large table, so we can share our notes. Bima: I like the table, but the room gets noisy after six. Ayu: That is true. Last week, another group practised music next door. Could we start at four? Bima: Although four is quieter, I cannot arrive before five because of work. Ayu: Then perhaps the library is better this week. It has smaller tables, but it stays quiet. Bima: I agree for this meeting. We should not assume it will always have space. Let us check the booking page first.'
    },
    output: {
      speaking: 'Jelaskan pendapatmu tentang rencana singkat atau panjang selama 2–3 menit. Berikan satu alasan, satu contoh nyata, dan satu batasan. Awali rujukan ke bacaan dengan “The writer ...”, lalu pisahkan dengan “In my situation ...”. Tanggapi satu alasan yang berlawanan.',
      writing: 'Tulis paragraf 120–150 kata tentang tempat atau waktu belajar yang kamu pilih. Gunakan ide utama → alasan → contoh → batasan. Pakai but atau although sekali secara tepat. Simpan draft; revisi satu kalimat yang tidak mendukung ide utama dan jelaskan alasan revisinya dalam bahasa Indonesia.'
    },
    review: 'Tandai mana pendapat tokoh, contoh pengalaman, dan pendapatmu. Jangan menyebut contoh fiktif sebagai temuan penelitian. Hari 6 buka hanya materi asesmen baru untuk percobaan pertama. Jika mendengarkan pembacaan sintetis, catat sebagai latihan skrip. Nilai apakah pembaca dapat menyebut posisi dan alasanmu, bukan banyaknya penghubung yang dipakai.',
    quizzes: {
      pattern: [
        { prompt: 'Pilih penggunaan although yang tepat.', options: ['Although it is small, but it is quiet.', 'Although it is small, it is quiet.', 'Although it is small, because it is quiet.'], answer: 1, explanation: 'Although sudah menandai pertentangan; tidak perlu but pada hubungan yang sama.' },
        { prompt: 'Kalimat mana jelas menandai pendapat pribadi?', options: ['The writer lists three tasks.', 'The meeting begins at five.', 'I think shorter meetings suit my routine.'], answer: 2, explanation: 'I think secara eksplisit menandai penilaian pembicara.' }
      ],
      reading: [
        { prompt: 'Apa fungsi utama rencana harian bagi penulis?', options: ['A complete record of life', 'A guide for attention', 'A rule for every large team'], answer: 1, explanation: 'Kalimat penutup menyebut rencana sebagai panduan perhatian, bukan catatan seluruh kehidupan.' },
        { prompt: 'Batasan apa yang diakui penulis?', options: ['A large-team coordinator may need a longer record.', 'Everyone should use only three tasks.', 'Future tasks should never be written down.'], answer: 0, explanation: 'Penulis mengakui pengelola tim besar mungkin membutuhkan catatan lebih panjang.' }
      ],
      listening: [
        { prompt: 'Mengapa Bima tidak bisa mulai pukul empat?', options: ['The library closes at four.', 'He dislikes large tables.', 'He has work.'], answer: 2, explanation: 'Bima tidak dapat tiba sebelum pukul lima karena bekerja.' },
        { prompt: 'Apa yang perlu diperiksa sebelum memilih perpustakaan?', options: ['The music programme', 'The booking page', 'The price of notebooks'], answer: 1, explanation: 'Mereka harus mengecek halaman pemesanan karena tempat belum tentu tersedia.' }
      ]
    },
    assessment: {
      reading: {
        title: 'Leaving time between tasks',
        text: 'In my view, a small gap between study tasks is useful. I used to place reading, vocabulary review, and writing directly after one another. When the reading took longer than expected, the whole evening felt late. Now I leave ten minutes between activities. For example, yesterday I used that gap to finish a difficult page without cancelling my writing practice. This is a description of my routine, not proof that everyone needs the same break. Someone with only twenty minutes may prefer one continuous task. Although gaps make my schedule longer, they help me change activities calmly. I would rather complete two tasks with attention than rush through four and forget what I practised.'
      },
      listening: {
        title: 'Choosing a notebook',
        text: 'Mira: I prefer a paper notebook for planning because I can see the whole week on one page. Tono: I prefer a phone calendar. It reminds me before appointments. Mira: That is useful, but my phone sometimes distracts me. Yesterday, I opened it to check a time and started reading messages. Tono: Would paper solve that for everyone? Mira: No. My example only explains my choice. A person who travels often may find a phone easier. Tono: Perhaps we can each keep our own planner and use one shared calendar only for group meetings. Mira: Yes, that would separate personal preferences from information everyone needs.'
      },
      readingQuiz: [
        { prompt: 'Apa contoh manfaat jeda yang disebut penulis?', options: ['Finishing a difficult page without cancelling writing', 'Removing every writing task', 'Making every task last twenty minutes'], answer: 0, explanation: 'Jeda dipakai menyelesaikan halaman sulit sehingga latihan menulis tidak dibatalkan.' },
        { prompt: 'Apa posisi penulis tentang semua orang memakai jeda sama?', options: ['It is required for everyone.', 'It is proved by research in the text.', 'It is not established by this personal routine.'], answer: 2, explanation: 'Penulis menegaskan contoh rutinitasnya bukan bukti bahwa semua orang perlu jeda sama.' }
      ],
      listeningQuiz: [
        { prompt: 'Apa alasan Tono memilih kalender ponsel?', options: ['It has no messages.', 'It provides appointment reminders.', 'It prevents every distraction.'], answer: 1, explanation: 'Tono menyukai pengingat sebelum janji.' },
        { prompt: 'Apa usulan akhir mereka?', options: ['Use paper for all personal information.', 'Stop holding group meetings.', 'Use a shared calendar only for group meetings.'], answer: 2, explanation: 'Mereka memisahkan planner pribadi dari kalender bersama untuk pertemuan kelompok.' }
      ]
    }
  },
  {
    week: 12,
    explanation: `## Menggabungkan keterampilan dan mendiagnosis hambatan

Minggu ini tidak menambah aturan grammar. Gunakan pola yang sudah dipelajari untuk menjelaskan rutinitas, kejadian lampau, rencana, alasan, dan permintaan klarifikasi. Saat pesan panjang terasa sulit, pecah menjadi tiga bagian: situasi, perubahan, tindakan berikutnya. Pendengar tidak perlu mengetahui semua detail sekaligus, tetapi perlu tahu siapa melakukan apa dan kapan.

Diagnosis berbeda dari sekadar menghitung jawaban benar. Jika salah menangkap tenggat, periksa apakah masalahnya angka, kata before, atau terlalu cepat membaca. Jika dapat menjawab pilihan ganda tetapi tidak dapat menjelaskan alasannya, pemahaman mungkin masih rapuh. Catat bukti spesifik, misalnya “saya menangkap hari tetapi kehilangan jam”, bukan “listening saya buruk”.

Saat berbicara, gunakan permintaan klarifikasi seperti “Do you mean ...?” lalu ulangi makna dengan kata sendiri. Jangan hanya mengatakan yes ketika belum memahami. Saat menulis, prioritaskan isi yang dapat ditindaklanjuti sebelum variasi kata. Gate C adalah diagnosis lokal empat keterampilan, bukan sertifikat atau bukti tingkat CEFR. Satu rekaman bagus juga tidak cukup untuk menyimpulkan semua kemampuan. Pilih keterampilan terlemah berdasarkan tugas baru dan perbaiki dengan contoh berbeda.`,
    examples: [
      { en: 'We met on Tuesday, but the room was closed.', id: 'Kami bertemu Selasa, tetapi ruangannya tutup.' },
      { en: 'Do you mean the draft is due before lunch?', id: 'Maksudmu draft harus selesai sebelum makan siang?' },
      { en: 'I have checked the list, so I can explain the changes.', id: 'Saya sudah memeriksa daftar, jadi saya bisa menjelaskan perubahannya.' },
      { en: 'Next week, we are going to try a shorter session.', id: 'Minggu depan kami akan mencoba sesi yang lebih singkat.' }
    ],
    vocabulary: [
      { en: 'clarify', id: 'memperjelas' }, { en: 'deadline', id: 'tenggat' },
      { en: 'evidence', id: 'bukti' }, { en: 'weakness', id: 'kelemahan' },
      { en: 'next step', id: 'langkah berikutnya' }, { en: 'reschedule', id: 'menjadwal ulang' }
    ],
    reading: {
      title: 'A changed plan for the learning club',
      text: 'The learning club usually meets in Room Two on Wednesday evenings. Last week, the room was unavailable because workers were repairing the windows. The organiser moved the discussion online, but two members did not see the message. This week, the club will test a clearer system. Hana will update the shared calendar by Tuesday afternoon. Dodi will send a short message that includes the place, starting time, and one preparation task. Members should reply before Wednesday noon, even if they cannot attend. The discussion will begin at six and last forty minutes. After the meeting, Hana will ask whether everyone received the same information. The club has not decided to stay online permanently; this is a trial for one week.'
    },
    listening: {
      title: 'Checking the meaning of a deadline',
      text: 'Reno: I saw your message, but I want to check the deadline. You said Friday morning. Does that mean before nine? Sinta: No, please send the notes by eleven. I will combine them at noon. Reno: Thanks. I have finished the first section, but I need the new timetable for the second. Sinta: I sent the timetable yesterday. Did you receive the version with the green heading? Reno: I received one with a grey heading. Sinta: That is the old version. I will send the new one now. Reno: So I should use the green version and send both sections by eleven on Friday. Sinta: Correct.'
    },
    output: {
      speaking: 'Lakukan diskusi familier sekitar 4 menit tentang perubahan jadwal belajar. Jelaskan rutinitas, satu kejadian lampau, rencana, dan alasan. Sertakan dua pertanyaan klarifikasi serta jawaban. Jika sendiri, rekam dua peran. Setelahnya nilai terpisah: pesan jelas, kelancaran, dan respons spontan; pilih satu hambatan utama.',
      writing: 'Tanpa menyalin bacaan, tulis sekitar 150 kata tentang masalah jadwal nyata atau skenario fiktif yang diberi label. Jelaskan kejadian, tindakan yang sudah dilakukan, dan rencana dengan penanggung jawab/tenggat. Simpan draft tanpa bantuan mesin, lalu revisi dua kesalahan yang paling mengganggu makna.'
    },
    review: 'Gate C hari 6: pakai reading/listening asesmen baru sekali sebelum melihat kunci. Lalu buat tulisan dan rekaman baru dari situasi familier; kuis saja tidak menilai output. Catat bukti per keterampilan dan pilih yang terlemah untuk diulang. Jangan mengulang tes eksternal bila jeda syaratnya belum terpenuhi; materi lokal ini bukan tes sertifikasi. Audio lokal adalah pembacaan sintetis, bukan ujian autentik.',
    quizzes: {
      pattern: [
        { prompt: 'Respons mana benar-benar meminta klarifikasi tenggat?', options: ['Yes, everything is fine.', 'Do you mean before eleven on Friday?', 'I like Fridays.'], answer: 1, explanation: 'Pertanyaan tersebut memeriksa makna hari dan jam, bukan sekadar menyetujui.' },
        { prompt: 'Pilih catatan diagnosis yang paling spesifik.', options: ['My English is bad.', 'I am not talented.', 'I understood Wednesday but missed the starting time.'], answer: 2, explanation: 'Catatan spesifik menunjuk informasi yang tertangkap dan terlewat sehingga dapat dilatih.' }
      ],
      reading: [
        { prompt: 'Siapa yang akan memperbarui kalender?', options: ['Hana', 'Dodi', 'The window workers'], answer: 0, explanation: 'Hana bertugas memperbarui shared calendar paling lambat Selasa sore.' },
        { prompt: 'Apakah klub sudah memutuskan online secara permanen?', options: ['Yes, starting last week.', 'No, it is a one-week trial.', 'Yes, after the windows are repaired.'], answer: 1, explanation: 'Penutup menyatakan belum ada keputusan permanen; ini uji coba satu minggu.' }
      ],
      listening: [
        { prompt: 'Kapan Reno harus mengirim kedua bagian?', options: ['Friday before nine', 'Thursday at noon', 'Friday by eleven'], answer: 2, explanation: 'Sinta meluruskan tenggat menjadi Jumat pukul sebelas.' },
        { prompt: 'Versi jadwal mana yang benar?', options: ['The one with a green heading', 'The one with a grey heading', 'Either version'], answer: 0, explanation: 'Versi berjudul hijau adalah yang baru; abu-abu versi lama.' }
      ]
    },
    assessment: {
      reading: {
        title: 'A revised community workshop',
        text: 'A community workshop was planned for Saturday morning in the upstairs hall. Yesterday, the organiser learned that the lift would be repaired that day. The workshop will now take place in the ground-floor room, starting at ten thirty instead of ten. Participants do not need to bring laptops because the session uses paper maps. Nuri has already printed the maps, but she has not checked the marker pens. Hasan will check them on Friday evening. Anyone who needs a large-print map should contact Nuri by Thursday at four. The organiser will send a final message on Friday morning. The room change is confirmed, but the number of participants is still uncertain because several people have not replied.'
      },
      listening: {
        title: 'Clarifying a collection plan',
        text: 'Putri: Can I check tomorrow’s collection plan? Are we meeting outside the station? Eko: The station meeting was cancelled. Meet me at the community centre at two fifteen. Putri: Two fifty? Eko: No, two fifteen, a quarter past two. We need to leave by two thirty. Putri: Understood. What should I bring? Eko: Bring the list of names, but not the money. The centre has already paid for the materials. Putri: I have the list on my phone. Is that enough? Eko: Please bring a paper copy too, because we may not have a signal. Putri: I will print it this evening.'
      },
      readingQuiz: [
        { prompt: 'Mengapa ruang workshop dipindahkan?', options: ['The maps are too small.', 'The lift will be repaired.', 'All participants bring laptops.'], answer: 1, explanation: 'Perbaikan lift pada hari workshop menyebabkan perpindahan ke lantai dasar.' },
        { prompt: 'Informasi apa yang masih belum pasti?', options: ['The new room', 'The new starting time', 'The number of participants'], answer: 2, explanation: 'Ruang sudah dikonfirmasi, tetapi jumlah peserta belum pasti karena ada yang belum membalas.' }
      ],
      listeningQuiz: [
        { prompt: 'Di mana dan kapan mereka bertemu?', options: ['At the community centre at 2:15', 'At the station at 2:50', 'At the community centre at 2:30'], answer: 0, explanation: 'Eko mengoreksi lokasi menjadi community centre dan waktu menjadi two fifteen.' },
        { prompt: 'Mengapa Putri perlu salinan kertas?', options: ['The list has not been written.', 'There may be no signal.', 'The money is on the list.'], answer: 1, explanation: 'Eko meminta kertas karena sinyal mungkin tidak tersedia.' }
      ]
    }
  },
  {
    week: 13,
    explanation: `## Jembatan bidang: memperbaiki jadwal belajar atau kerja

Pilih satu situasi penggunaan Inggris yang nyata bagimu. Jika belum memilih pekerjaan atau jurusan, gunakan bidang default minggu ini: pengelolaan jadwal belajar atau kerja. Tidak perlu mencari artikel luar agar dapat menyelesaikan kelas. Bacaan dan skrip lokal menyediakan konteks istilah dasar, bukan nasihat ahli untuk semua tempat kerja.

Belajar istilah sebagai hubungan dalam kalimat. Task adalah pekerjaan tertentu; deadline adalah batas selesai; priority menunjukkan yang didahulukan. Available menjelaskan ketersediaan, bukan otomatis persetujuan. “I am available at two” belum berarti rapat sudah dikonfirmasi. Bedakan duration, lama kegiatan, dari deadline, waktu paling akhir. Hindari sekadar menerjemahkan dua puluh kata tanpa menunjukkan penggunaannya.

Untuk membuat peta istilah, kelompokkan kata menjadi pekerjaan, waktu, orang, serta perubahan. Hubungkan minimal dua istilah: “The owner checks progress before the deadline.” Gunakan definisi sederhana jika lupa satu kata teknis. Saat memperkenalkan bidang, sebut masalah, istilah utama, dan contoh keputusan yang bisa diambil. Ringkasan menyampaikan isi bacaan; usulanmu harus ditandai terpisah. Tujuannya menghubungkan bahasa umum ke situasi tertentu, bukan membuktikan penguasaan profesi hanya dari hafalan kosakata.`,
    examples: [
      { en: 'The deadline is Friday, but the task takes two hours.', id: 'Tenggatnya Jumat, tetapi tugasnya memerlukan dua jam.' },
      { en: 'Maya is the owner of the review task.', id: 'Maya adalah penanggung jawab tugas peninjauan.' },
      { en: 'I am available at two; please confirm the meeting.', id: 'Saya tersedia pukul dua; mohon konfirmasi rapatnya.' },
      { en: 'The buffer gives us time for an unexpected delay.', id: 'Waktu cadangan memberi kita ruang untuk keterlambatan tak terduga.' }
    ],
    vocabulary: [
      { en: 'task', id: 'tugas tertentu' }, { en: 'deadline', id: 'batas waktu selesai' },
      { en: 'priority', id: 'hal yang didahulukan' }, { en: 'duration', id: 'lama kegiatan' },
      { en: 'owner', id: 'penanggung jawab tugas' }, { en: 'progress', id: 'kemajuan' },
      { en: 'schedule', id: 'jadwal' }, { en: 'availability', id: 'ketersediaan waktu' },
      { en: 'slot', id: 'rentang waktu yang dialokasikan' }, { en: 'buffer', id: 'waktu cadangan' },
      { en: 'workload', id: 'beban tugas' }, { en: 'dependency', id: 'ketergantungan antartugas' },
      { en: 'milestone', id: 'titik capaian penting' }, { en: 'reschedule', id: 'menjadwal ulang' },
      { en: 'confirm', id: 'mengonfirmasi' }, { en: 'review', id: 'meninjau' },
      { en: 'draft', id: 'versi awal' }, { en: 'handover', id: 'serah terima tugas' },
      { en: 'overlap', id: 'tumpang tindih waktu' }, { en: 'constraint', id: 'batasan yang perlu dipatuhi' }
    ],
    reading: {
      title: 'A basic scheduling brief',
      text: 'In this fictional team, a schedule connects tasks with people and time. Each task has an owner, a deadline, and an estimated duration. The owner reports progress and asks for help when a constraint makes the plan difficult. A priority is a task that needs attention before less urgent work. A milestone marks an important stage, such as completing the first draft. Some tasks have a dependency: the review cannot begin until the draft is ready. The team leaves a buffer between stages because unexpected work can change the workload. Before a handover, both people confirm their availability and choose a shared slot. They check for overlap with other meetings. If a deadline changes, they reschedule the dependent tasks rather than changing only one date.'
    },
    listening: {
      title: 'Turning a broad goal into scheduled tasks',
      text: 'Coach: What do you want to improve, Wulan? Wulan: My evening study schedule. I write “study English”, but it is too broad. Coach: Choose a specific task first. Wulan: I could review my paragraph and write a new ending. Coach: Who owns that task? Wulan: I do. I estimate thirty minutes, and my deadline is Thursday evening. Coach: Does it depend on anything? Wulan: Yes, I need to read the feedback first. Coach: Then put that earlier in the schedule. Wulan: I will read the feedback on Wednesday and leave a short buffer on Thursday. Coach: Good. A schedule should show the next action, not only the final ambition.'
    },
    output: {
      speaking: 'Nyatakan tujuan “Saya ingin menggunakan Inggris untuk ... dalam situasi ...”; jika belum tahu, pakai perbaikan jadwal. Buat perkenalan bidang sekitar 3 menit dengan masalah, lima istilah, dan contoh. Jelaskan istilah yang lupa menggunakan bahasa sederhana, lalu jawab “What depends on the draft?” tanpa membaca naskah.',
      writing: 'Buat peta 20 istilah dari kosakata minggu ini, masing-masing dalam satu kalimat bermakna tentang jadwalmu atau tim fiktif berlabel. Tidak perlu membuat 20 kartu baru sekaligus. Lalu tulis ringkasan bacaan 100–150 kata; pisahkan satu usulan pribadi dari isi bacaan dan revisi kalimat yang mencampurkannya.'
    },
    review: 'Ulang istilah dalam hubungan, bukan daftar terjemahan. Gunakan tugas kerja dan ringkasan akademik meskipun bidang utamamu satu. Materi asesmen tetap tertutup sampai hari 6. Pembacaan sintetis opsional membantu latihan bunyi istilah tetapi bukan tes listening autentik. Jika Gate C masih menunjukkan kesulitan, perkecil kalimat tanpa melewati latihan makna.',
    quizzes: {
      pattern: [
        { prompt: 'Kalimat mana menyebut duration, bukan deadline?', options: ['The task takes forty minutes.', 'Send it by Monday.', 'It must arrive before noon.'], answer: 0, explanation: 'Takes forty minutes menyatakan lama tugas, bukan batas selesai.' },
        { prompt: 'Apa makna “I am available at three” yang paling tepat?', options: ['The meeting is already confirmed.', 'I can use that time, but confirmation may still be needed.', 'The task will take three hours.'], answer: 1, explanation: 'Ketersediaan waktu tidak otomatis berarti semua pihak telah mengonfirmasi.' }
      ],
      reading: [
        { prompt: 'Apa dependency yang dicontohkan?', options: ['The owner must attend every meeting.', 'The buffer must be removed.', 'The review waits for the draft.'], answer: 2, explanation: 'Teks menyatakan peninjauan tidak dapat mulai sebelum draft siap.' },
        { prompt: 'Apa yang dilakukan ketika tenggat berubah?', options: ['Reschedule dependent tasks too.', 'Change only one date.', 'Remove every task owner.'], answer: 0, explanation: 'Tim menyesuaikan tugas yang bergantung padanya, bukan satu tanggal saja.' }
      ],
      listening: [
        { prompt: 'Apa yang harus Wulan kerjakan sebelum merevisi paragraf?', options: ['Book a meeting room', 'Read the feedback', 'Complete twenty cards'], answer: 1, explanation: 'Tugas revisi bergantung pada membaca feedback terlebih dahulu.' },
        { prompt: 'Apa tenggat tugas revisi Wulan?', options: ['Wednesday morning', 'Friday evening', 'Thursday evening'], answer: 2, explanation: 'Wulan menyebut deadline Thursday evening.' }
      ]
    },
    assessment: {
      reading: {
        title: 'Planning a learner welcome pack',
        text: 'The fictional welcome-pack team has three connected tasks. Iman owns the first draft, which is due on Monday at three. Rosi will review that draft on Tuesday morning, so her work depends on Iman finishing first. Printing is the final milestone before the Thursday welcome session. The printer needs one full working day, which is its duration, not an extra deadline. The team has left Wednesday afternoon as a buffer for small corrections. If the draft arrives late, Rosi must tell the organiser before changing her review slot. The organiser will check whether printing can still finish in time. Nobody should promise Thursday delivery without checking that dependency. The team will confirm the handover in a short message.'
      },
      listening: {
        title: 'A scheduling conflict',
        text: 'Laras: I can help with the revision on Tuesday at one. Joko: I am available then too, but the room is booked until two. Laras: Could we use a different room? Joko: Yes, but there is another constraint. We need the tutor’s comments before we revise, and those arrive at one thirty. Laras: Then one is too early even if we find a room. Joko: Exactly. How about two fifteen? We can spend forty-five minutes on the revision and leave fifteen minutes as a buffer. Laras: That works for me. Please ask the tutor to confirm the comment time before we finalise our slot.'
      },
      readingQuiz: [
        { prompt: 'Pekerjaan Rosi bergantung pada apa?', options: ['The Thursday session ending', 'Iman finishing the first draft', 'Printing before Monday'], answer: 1, explanation: 'Rosi baru dapat meninjau setelah draft Iman selesai.' },
        { prompt: 'Apa fungsi Rabu sore dalam rencana?', options: ['A buffer for small corrections', 'The first-draft deadline', 'The welcome session'], answer: 0, explanation: 'Wednesday afternoon disediakan sebagai buffer perbaikan kecil.' }
      ],
      listeningQuiz: [
        { prompt: 'Mengapa pukul satu tetap terlalu awal meskipun ada ruangan lain?', options: ['The revision lasts all day.', 'Laras is unavailable until three.', 'The tutor’s comments arrive at 1:30.'], answer: 2, explanation: 'Komentar yang diperlukan untuk revisi baru tersedia pukul satu tiga puluh.' },
        { prompt: 'Berapa durasi revisi yang diusulkan?', options: ['Fifteen minutes', 'Forty-five minutes', 'Two hours'], answer: 1, explanation: 'Joko mengusulkan empat puluh lima menit revisi dan lima belas menit buffer.' }
      ]
    }
  },
  {
    week: 14,
    explanation: `## Email yang menghasilkan tindakan jelas

Email profesional tidak harus penuh kata sulit. Pembaca perlu mengetahui tujuan, konteks secukupnya, permintaan, tenggat, dan cara membalas. Subject yang spesifik membantu pembaca mengenali tugas. Buka dengan tujuan: “I am writing to request ...”. Setelah konteks singkat, nyatakan tindakan yang dapat dilakukan orang tertentu, bukan “Please handle this” tanpa objek.

Could you diikuti kata kerja dasar dan terdengar lebih sopan daripada perintah langsung. “Could you confirm the room by Tuesday?” meminta tindakan dan menetapkan batas waktunya. By Tuesday berarti paling lambat Selasa; on Tuesday berarti pada hari Selasa. Jika jam penting, tulis tanggal atau hari dan jam yang jelas. Hindari ASAP saat sebenarnya ada tenggat konkret.

Follow-up mengingatkan permintaan yang belum dijawab tanpa menuduh. Sebut pesan sebelumnya, ulangi kebutuhan, lalu berikan langkah jika penerima tidak bisa memenuhi. Jangan mengklaim lampiran sudah ada jika belum melampirkannya. Sebelum menyimpan draft, periksa apakah pembaca dapat menjawab: apa yang harus saya lakukan, kapan, dan untuk siapa? Nama serta alamat latihan harus fiktif; kamu tidak perlu mengirim email sungguhan untuk menyelesaikan tugas.`,
    examples: [
      { en: 'I am writing to request a quiet room for our review.', id: 'Saya menulis untuk meminta ruang tenang bagi peninjauan kami.' },
      { en: 'Could you confirm availability by Tuesday at four?', id: 'Bisakah Anda memastikan ketersediaan paling lambat Selasa pukul empat?' },
      { en: 'I am following up on my message about the timetable.', id: 'Saya menindaklanjuti pesan saya mengenai jadwal.' },
      { en: 'If that time is unavailable, please suggest an alternative.', id: 'Jika waktu itu tidak tersedia, mohon usulkan alternatif.' }
    ],
    vocabulary: [
      { en: 'subject line', id: 'baris subjek email' }, { en: 'request', id: 'permintaan; meminta' },
      { en: 'recipient', id: 'penerima' }, { en: 'attachment', id: 'lampiran' },
      { en: 'follow up', id: 'menindaklanjuti' }, { en: 'alternative', id: 'pilihan lain' }
    ],
    reading: {
      title: 'A request for a room change',
      text: 'Subject: Room request for Thursday planning session. Dear Ms Rina, I am writing to ask whether our planning group can use Room Four this Thursday from two to three. We originally booked the open work area, but we need a quiet space to discuss the new timetable. There will be five people, and we only need a table and a whiteboard. Could you confirm the room by Tuesday at four? If Room Four is unavailable, please suggest another quiet room for the same time. We can bring our own markers. Once we receive your reply, I will update the group calendar and send the location to the participants. Thank you for checking this request. Best regards, Aldi. This is a fictional practice email.'
    },
    listening: {
      title: 'Planning a polite follow-up',
      text: 'Maya: I asked for feedback on our schedule, but I have not received a reply. Should I write “Please reply immediately”? Danu: First, check the deadline you gave. Maya: I asked for comments by tomorrow at noon. Danu: Then send a short reminder today. Mention the original request and explain why the comments matter. Maya: Could I say, “I am following up on Monday’s draft. Could you send comments by tomorrow at noon so we can revise it before the meeting?” Danu: Yes. Add that they can tell you if they need more time. Maya: That is clearer than just writing “Any news?”'
    },
    output: {
      speaking: 'Mainkan penerima email yang menjelaskan kembali tindakan dan tenggat selama 2 menit, lalu penulis yang menjawab dua pertanyaan klarifikasi. Gunakan permintaan sopan tanpa membaca seluruh email. Jika sendiri, rekam dua peran dan cek apakah penerima menyebut hari/jam dengan tepat.',
      writing: 'Tulis dua email fiktif masing-masing 100–150 kata: permintaan perubahan jadwal dan follow-up karena belum ada balasan. Sertakan subject, tujuan, tindakan, tenggat, alternatif, penutup. Gunakan nama buatan; jangan kirim ke orang nyata. Revisi sampai tindakan dan tenggat dapat ditandai dengan jelas.'
    },
    review: 'Periksa by versus on, objek permintaan, dan kebenaran klaim lampiran. Simpan draft/revisi kedua email. Hari 6 gunakan asesmen baru yang belum dibaca. Audio lokal adalah pembacaan sintetis skrip, bukan rekaman percakapan atau tes autentik. Ukur kejelasan tindakan, bukan tingkat formalitas kata saja.',
    quizzes: {
      pattern: [
        { prompt: 'Pilih permintaan sopan dengan bentuk verba tepat.', options: ['Could you confirms the time?', 'Could you confirm the time?', 'Could you confirmed the time?'], answer: 1, explanation: 'Could you diikuti kata kerja dasar confirm.' },
        { prompt: 'Apa makna “Send it by Thursday at noon”?', options: ['Send it any time after Thursday.', 'Send it only at exactly noon.', 'Send it no later than Thursday at noon.'], answer: 2, explanation: 'By menunjukkan batas paling lambat, bukan waktu mulai atau tepat satu saat saja.' }
      ],
      reading: [
        { prompt: 'Apa tindakan yang diminta dari Ms Rina?', options: ['Confirm a room by Tuesday at four.', 'Bring markers on Thursday morning.', 'Write the new timetable for Aldi.'], answer: 0, explanation: 'Aldi meminta konfirmasi ruangan paling lambat Selasa pukul empat.' },
        { prompt: 'Apa yang dilakukan Aldi sesudah menerima balasan?', options: ['Cancel every group meeting.', 'Update the calendar and send the location.', 'Ask participants to bring a whiteboard.'], answer: 1, explanation: 'Aldi akan memperbarui kalender dan mengirim lokasi kepada peserta.' }
      ],
      listening: [
        { prompt: 'Tenggat komentar yang semula diberikan Maya adalah kapan?', options: ['Today at four', 'Monday morning', 'Tomorrow at noon'], answer: 2, explanation: 'Maya telah meminta komentar sebelum besok pukul dua belas.' },
        { prompt: 'Tambahan apa yang disarankan Danu?', options: ['Allow the recipient to say if more time is needed.', 'Accuse the recipient of ignoring the draft.', 'Remove the original request.'], answer: 0, explanation: 'Danu menyarankan memberi ruang penerima untuk mengatakan perlu waktu tambahan.' }
      ]
    },
    assessment: {
      reading: {
        title: 'Following up on a materials request',
        text: 'Subject: Follow-up: printing request for Monday workshop. Dear Mr Bagus, I am following up on the printing request I sent on Wednesday. We need eight copies of the two-page workshop guide for Monday’s session. Could you confirm by Friday at ten whether the copies will be ready for collection on Monday at eight thirty? Black-and-white printing is sufficient, so colour is not necessary. If your team cannot finish the job, please let me know by the same deadline. I will arrange another option rather than leave the workshop without materials. The updated guide is attached to this practice email and replaces the earlier version. Thank you for your help. Best regards, Intan. All names and circumstances here are fictional.'
      },
      listening: {
        title: 'Making a vague email clearer',
        text: 'Editor: Your draft says, “Please check this soon.” What do you need checked? Writer: The list of attendees. Editor: And when do you need the reply? Writer: By Wednesday at three, because I must order lunch at four. Editor: Put those details in the request. Writer: “Could you check the attendee names and reply by Wednesday at three?” Editor: Good. What if the recipient has no changes? Writer: They should still confirm the list is correct. Editor: Add that too. Writer: I will. I will also remove the sentence about an attachment, because the list is in the email itself. There is no separate file.'
      },
      readingQuiz: [
        { prompt: 'Apa yang harus dikonfirmasi paling lambat Jumat pukul sepuluh?', options: ['Whether colour printing is required', 'Whether copies will be ready Monday at 8:30', 'Whether the workshop will move to Friday'], answer: 1, explanation: 'Tenggat balasan Jumat pukul sepuluh berbeda dari waktu pengambilan Senin pukul delapan tiga puluh.' },
        { prompt: 'Apa yang dilakukan Intan jika tim tidak dapat mencetak?', options: ['Arrange another option', 'Require colour printing', 'Use the earlier version automatically'], answer: 0, explanation: 'Intan akan mengatur alternatif agar workshop tetap memiliki bahan.' }
      ],
      listeningQuiz: [
        { prompt: 'Mengapa balasan dibutuhkan Rabu pukul tiga?', options: ['The meeting starts at three.', 'A file will be attached then.', 'Lunch must be ordered at four.'], answer: 2, explanation: 'Daftar peserta harus pasti sebelum pemesanan makan siang pukul empat.' },
        { prompt: 'Mengapa kalimat tentang lampiran dihapus?', options: ['The names are secret.', 'The list is in the email, with no separate file.', 'The recipient cannot open email.'], answer: 1, explanation: 'Tidak ada file terpisah; daftar sudah berada di badan email.' }
      ]
    }
  },
  {
    week: 15,
    explanation: `## Status update dan klarifikasi melalui telepon

Status update menjawab tiga pertanyaan: apa yang selesai, apa berikutnya, dan apa yang menghambat. Awali dengan gambaran singkat agar pendengar tahu proyek yang dibahas. Untuk hasil yang sudah tersedia, gunakan “We have completed ...”; jika waktunya penting, tambahkan kalimat past simple seperti “We checked it yesterday”. Untuk langkah berikutnya, sebut pelaku dan waktu, bukan hanya “We will continue”.

Hambatan bukan alasan untuk menyalahkan. Jelaskan fakta, dampak pada pekerjaan, lalu bantuan atau keputusan yang diperlukan. “We are waiting for the room list, so we cannot finalise the invitations” lebih jelas daripada “There is a problem”. Bedakan selesai dari hampir selesai; jangan melaporkan draft sebagai versi final.

Dalam telepon, angka dan nama mudah tertukar. Minta pengulangan atau ejaan, lalu konfirmasi kembali: “Did you say fifteen or fifty?” Diam-diam menebak dapat mengubah jadwal. Notulen tindakan mencatat keputusan, penanggung jawab, dan tenggat, bukan semua kata yang diucapkan. Setelah latihan, periksa apakah pendengar dapat menyebut pekerjaan selesai dan satu tindakan berikutnya. Jika tidak, susun ulang update sebelum menambah detail.`,
    examples: [
      { en: 'We have completed the first draft.', id: 'Kami sudah menyelesaikan draft pertama.' },
      { en: 'Next, Rani will check the names by Thursday.', id: 'Berikutnya, Rani akan memeriksa nama paling lambat Kamis.' },
      { en: 'We are waiting for approval, so printing cannot start.', id: 'Kami menunggu persetujuan, jadi pencetakan belum bisa dimulai.' },
      { en: 'Did you say fifteen copies or fifty?', id: 'Tadi Anda mengatakan lima belas salinan atau lima puluh?' }
    ],
    vocabulary: [
      { en: 'status update', id: 'laporan perkembangan singkat' }, { en: 'blocker', id: 'hambatan yang menghentikan kemajuan' },
      { en: 'approval', id: 'persetujuan' }, { en: 'pending', id: 'masih menunggu penyelesaian' },
      { en: 'action item', id: 'tindakan lanjutan yang dicatat' }, { en: 'finalise', id: 'menyelesaikan menjadi versi final' }
    ],
    reading: {
      title: 'Progress on the welcome session',
      text: 'The welcome-session team has completed the agenda and checked the speaker names. Rani finished the agenda yesterday, and Yusuf corrected two names this morning. The invitation is still a draft because the room assignment is pending. This does not stop the team from preparing the slides, but it prevents them from sending the final invitation. Next, Yusuf will ask the office for the room assignment by Wednesday at two. Rani will prepare a short version of the invitation while they wait. If no room is confirmed by that time, the team lead will decide whether to move the session online. The team is not asking everyone to solve the problem; it needs one room decision from the office. The next status check is Wednesday at three.'
    },
    listening: {
      title: 'Checking a number on the phone',
      text: 'Lia: Hello, this is Lia from the workshop team. I am checking our materials request. Did you say you can prepare fifty folders? Desk: Fifteen folders, not fifty. Lia: Thank you. We need eighteen, so we are short by three. Desk: I can prepare three more if you collect them after one tomorrow. Lia: After one tomorrow. Has the paper order arrived? Desk: Yes, it arrived this morning. Only the folders need extra time. Lia: Understood. I will tell the team that the paper is ready and the full folder set will be ready after one. Desk: Please ask for Beni at the collection desk.'
    },
    output: {
      speaking: 'Sampaikan status proyek jadwal belajar atau skenario fiktif selama 3–4 menit tanpa naskah: selesai, berikutnya, hambatan, bantuan yang diperlukan. Jawab tiga pertanyaan detail. Lanjutkan role-play telepon dengan dua angka yang mirip; minta klarifikasi dan ulangi angka yang benar sebelum menutup.',
      writing: 'Tulis notulen tindakan 120–150 kata dari status proyekmu. Pisahkan hasil selesai, keputusan yang belum dibuat, dan tindakan berikutnya. Setiap tindakan harus punya penanggung jawab serta tenggat. Revisi jika pembaca tidak bisa membedakan draft dari final atau hambatan dari keputusan.'
    },
    review: 'Pilih kesalahan past/present/future dari rekamanmu, bukan menambah banyak aturan. Simpan notulen dan revisinya. Jangan membuka skenario asesmen sebelum hari 6. Audio lokal sintetis hanya pembacaan skrip latihan; pada percobaan pertama tutup teks dan catat angka serta tindakan, kemudian periksa kesalahan secara spesifik.',
    quizzes: {
      pattern: [
        { prompt: 'Update mana paling jelas menyatakan tindakan berikutnya?', options: ['Things will happen soon.', 'There are many tasks.', 'Yusuf will request the room list by Wednesday at two.'], answer: 2, explanation: 'Kalimat ini menyebut pelaku, tindakan, objek, dan tenggat.' },
        { prompt: 'Apa respons tepat ketika angka telepon tidak jelas?', options: ['Did you say fifteen or fifty?', 'I will assume fifty.', 'Numbers do not matter.'], answer: 0, explanation: 'Pertanyaan membedakan dua angka sebelum tindakan diambil.' }
      ],
      reading: [
        { prompt: 'Apa yang terhambat oleh belum adanya ruang?', options: ['Preparing any slides', 'Sending the final invitation', 'Checking speaker names'], answer: 1, explanation: 'Slides masih bisa disiapkan, tetapi undangan final menunggu ruang.' },
        { prompt: 'Siapa memutuskan kemungkinan pindah online?', options: ['Every participant individually', 'The speaker', 'The team lead'], answer: 2, explanation: 'Jika ruang belum pasti pada tenggat, team lead akan membuat keputusan.' }
      ],
      listening: [
        { prompt: 'Berapa folder tambahan yang dibutuhkan?', options: ['Three', 'Fifteen', 'Fifty'], answer: 0, explanation: 'Kebutuhan delapan belas dikurangi lima belas yang tersedia berarti tiga tambahan.' },
        { prompt: 'Kapan seluruh folder siap?', options: ['This morning', 'After one tomorrow', 'Before noon today'], answer: 1, explanation: 'Tiga folder tambahan dapat disiapkan untuk pengambilan setelah pukul satu besok.' }
      ]
    },
    assessment: {
      reading: {
        title: 'A learning fair status note',
        text: 'The learning fair team has finished the visitor guide and confirmed the table layout. The guide was revised on Monday after a volunteer found an incorrect opening time. Printing has not started because the team is waiting for approval of the cover. This delay affects the printed guide, but the welcome signs can still be prepared. Niko will ask the coordinator for cover approval by Thursday at eleven. If approval arrives on time, Salma will send the file to the printer that afternoon. Otherwise, the team will use a plain cover, but the coordinator must approve that option too. The fair date has not changed. At the next check-in, the team needs a clear cover decision rather than another general progress report.'
      },
      listening: {
        title: 'Clarifying a delivery update',
        text: 'Caller: I am checking the display-board delivery. Has everything left the store? Assistant: The six large boards have left, but the two small boards are still here. Caller: Did you say two or twelve small boards? Assistant: Two. They need new labels. Caller: Will they arrive with the large boards at ten? Assistant: No. The large boards arrive at ten tomorrow morning. The small ones will arrive at three tomorrow afternoon. Caller: Then we can set up the main display first. Who should receive the small boards? Assistant: Please ask Wira to sign for them. Caller: I will add Wira and the afternoon delivery to our action notes.'
      },
      readingQuiz: [
        { prompt: 'Apa hambatan pencetakan guide?', options: ['An unconfirmed fair date', 'A missing table layout', 'Pending cover approval'], answer: 2, explanation: 'Pencetakan menunggu persetujuan sampul, bukan perubahan tanggal atau tata meja.' },
        { prompt: 'Apakah opsi sampul polos boleh dipakai tanpa persetujuan?', options: ['No, the coordinator must approve it too.', 'Yes, Salma can decide alone.', 'Yes, it was already approved Monday.'], answer: 0, explanation: 'Teks menyebut alternatif sampul polos juga membutuhkan persetujuan koordinator.' }
      ],
      listeningQuiz: [
        { prompt: 'Kapan dua papan kecil akan tiba?', options: ['Tomorrow at ten in the morning', 'Tomorrow at three in the afternoon', 'Today at twelve'], answer: 1, explanation: 'Dua papan kecil tiba besok pukul tiga sore, berbeda dari papan besar.' },
        { prompt: 'Siapa diminta menandatangani penerimaan papan kecil?', options: ['The caller’s printer', 'The store manager', 'Wira'], answer: 2, explanation: 'Asisten meminta Wira menerima dan menandatangani untuk papan kecil.' }
      ]
    }
  },
  {
    week: 16,
    explanation: `## Rapat: alasan, usulan, dan keputusan

Rapat yang berguna bergerak dari tujuan ke pilihan, pertimbangan, lalu keputusan. Saat membandingkan dua opsi, gunakan kriteria yang sama, misalnya waktu, biaya, akses, atau beban kerja. Opsi termurah belum tentu terbaik jika tidak memenuhi kebutuhan utama. Jangan menyebut pendapat sebagai keputusan sebelum peserta benar-benar menyetujuinya.

Setuju atau tidak setuju dapat disampaikan dengan sopan dan spesifik. “I see your point, but ...” mengakui alasan orang lain tanpa pura-pura sepakat. Setelah keberatan, tawarkan alternatif yang menjawab masalah. Untuk saran, gunakan should ditambah kata kerja dasar, atau “We could ...”. Could di sini menyatakan kemungkinan pilihan, bukan janji pasti. Hindari “We should to book”; bentuk tepatnya “We should book”.

Di akhir, rangkum pilihan yang diambil, alasan utama, penanggung jawab, tenggat, dan hal yang masih belum pasti. Tanyakan konfirmasi agar ringkasan tidak menjadi keputusan sepihak. Email keputusan cukup mencatat hasil dan tindakan, bukan seluruh percakapan. Gate D memakai skenario baru untuk melihat apakah kamu dapat menanggapi alasan dan mempertahankan keputusan, bukan hanya menghafalkan ungkapan rapat.`,
    examples: [
      { en: 'I see your point, but the later slot excludes two members.', id: 'Saya memahami maksudmu, tetapi slot lebih malam membuat dua anggota tidak bisa ikut.' },
      { en: 'We could try the earlier session for one week.', id: 'Kita bisa mencoba sesi lebih awal selama satu minggu.' },
      { en: 'We should check access before we book.', id: 'Kita sebaiknya memeriksa akses sebelum memesan.' },
      { en: 'Can we confirm that Rudi will update the calendar?', id: 'Bisakah kita memastikan bahwa Rudi akan memperbarui kalender?' }
    ],
    vocabulary: [
      { en: 'agenda', id: 'daftar pokok rapat' }, { en: 'option', id: 'pilihan' },
      { en: 'criterion', id: 'kriteria pertimbangan' }, { en: 'trade-off', id: 'kompromi antara keuntungan dan kekurangan' },
      { en: 'proposal', id: 'usulan' }, { en: 'decision', id: 'keputusan' }
    ],
    reading: {
      title: 'Decision note: two review slots',
      text: 'This fictional team must choose a weekly review slot. Option A is Tuesday from four to four thirty in the office. Everyone is already there, but the room is available for only thirty minutes. Option B is Thursday from six to seven online. It offers more discussion time, but two members cannot join after six because they care for family members. The team agrees that participation matters more than a longer meeting. It chooses Option A for a two-week trial and asks members to send updates beforehand. Luki will book the room by Monday noon. Members will note any unfinished discussion topics. After two meetings, the team will review whether the shorter slot works. It has not decided to keep this arrangement permanently.'
    },
    listening: {
      title: 'Choosing how to review a draft',
      text: 'Chair: We need to choose a review method: one long call or written comments followed by a short call. Nina: I prefer the long call because we can ask questions immediately. Oki: I see your point, but two people have weak internet connections. Written comments would give them time to respond. Nina: Could we still discuss unclear points together? Oki: Yes, we could collect comments first and use a twenty-minute call only for disagreements. Chair: Does everyone accept that plan? Nina: Yes, as long as the comments arrive before the call. Chair: Agreed. Oki will send the document tonight, and comments are due Friday at noon. The short call is Friday at four.'
    },
    output: {
      speaking: 'Simulasikan rapat sekitar 5 menit dengan dua peran untuk memilih slot belajar pagi atau malam. Tetapkan dua kriteria, sampaikan ketidaksetujuan beralasan, tawarkan alternatif, lalu konfirmasi satu keputusan dan tindakan. Jawab pertanyaan “What would make us change this decision?” tanpa hafalan.',
      writing: 'Tulis email keputusan sekitar 120–150 kata dari simulasimu: opsi dipilih, alasan, opsi ditolak beserta pertimbangannya, penanggung jawab, tenggat, dan kapan ditinjau ulang. Tandai skenario fiktif. Revisi jika usulan yang belum disepakati terlanjur ditulis sebagai keputusan final.'
    },
    review: 'Gate D hari 6 menggunakan asesmen baru lalu rapat baru dengan topik familier. Pilihan ganda tidak menggantikan kemampuan menanggapi dan menyusun email. Catat apakah keputusan, alasan, serta tindakan dapat disebut ulang tanpa naskah. Audio lokal adalah suara sintetis untuk latihan skrip, bukan ujian listening resmi.',
    quizzes: {
      pattern: [
        { prompt: 'Pilih bentuk saran yang benar.', options: ['We should to check the room.', 'We should check the room.', 'We should checking the room.'], answer: 1, explanation: 'Should diikuti kata kerja dasar tanpa to.' },
        { prompt: 'Kalimat mana menyampaikan keberatan sekaligus alternatif?', options: ['That is wrong.', 'I agree with everything.', 'The late call excludes Lia; we could collect comments earlier.'], answer: 2, explanation: 'Kalimat itu menyebut masalah spesifik lalu menawarkan cara lain.' }
      ],
      reading: [
        { prompt: 'Mengapa Option A dipilih?', options: ['Participation is prioritised over meeting length.', 'It provides a full hour.', 'Two members cannot attend on Tuesday.'], answer: 0, explanation: 'Semua dapat berpartisipasi pada A; tim mengutamakan partisipasi daripada durasi.' },
        { prompt: 'Bagaimana status keputusan tersebut?', options: ['A permanent rule already proven effective', 'A two-week trial', 'An unaccepted suggestion with no action'], answer: 1, explanation: 'Keputusan adalah uji coba dua minggu yang akan ditinjau setelah dua rapat.' }
      ],
      listening: [
        { prompt: 'Mengapa Oki mengusulkan komentar tertulis?', options: ['Nobody has questions.', 'The document is already final.', 'Two people have weak internet connections.'], answer: 2, explanation: 'Komentar tertulis memberi kesempatan merespons bagi dua orang berkoneksi lemah.' },
        { prompt: 'Kapan komentar harus masuk?', options: ['Friday at noon', 'Friday at four', 'Tonight at midnight'], answer: 0, explanation: 'Komentar jatuh tempo Jumat siang; panggilan singkat pukul empat.' }
      ]
    },
    assessment: {
      reading: {
        title: 'Selecting a workshop venue',
        text: 'A fictional workshop group is comparing two venues. The central hall costs sixty tokens and is next to a bus stop, but it has no step-free entrance. The community room costs eighty tokens, has step-free access, and is a ten-minute walk from the bus stop. The group’s budget is ninety tokens, and one participant needs step-free access. It therefore selects the community room. The extra cost is acceptable within the budget, while the central hall does not meet an essential requirement. Sela will confirm the booking by Wednesday morning. Bowo will send walking directions and ask whether anyone needs help getting from the bus stop. The group will not announce the venue until Sela receives written confirmation. All prices are invented for this exercise.'
      },
      listening: {
        title: 'Agreeing a handover method',
        text: 'Facilitator: Should we hand over the project in a live meeting or with a written checklist? Fani: A meeting lets me ask questions immediately. Hadi: True, but our shifts do not overlap this week. We could write the checklist and then exchange voice messages for unclear items. Fani: I can accept that if the checklist names the unfinished tasks. Hadi: I will include the task owners and deadlines too. Facilitator: So we agree on a written checklist, with voice messages for questions. Hadi will send it by Saturday at five, and Fani will confirm receipt by six. We will use a live meeting next week only if major questions remain.'
      },
      readingQuiz: [
        { prompt: 'Apa alasan utama menolak central hall?', options: ['It exceeds the ninety-token budget.', 'It lacks required step-free access.', 'It is too far from the bus stop.'], answer: 1, explanation: 'Central hall murah dan dekat bus, tetapi tidak memenuhi kebutuhan akses tanpa anak tangga.' },
        { prompt: 'Kapan venue boleh diumumkan?', options: ['Before Sela contacts anyone', 'Immediately after comparing prices', 'After written booking confirmation arrives'], answer: 2, explanation: 'Pengumuman menunggu konfirmasi pemesanan tertulis.' }
      ],
      listeningQuiz: [
        { prompt: 'Mengapa rapat langsung tidak dipilih minggu ini?', options: ['Their shifts do not overlap.', 'Fani has no questions.', 'All tasks are already finished.'], answer: 0, explanation: 'Jadwal giliran mereka tidak bertemu sehingga dipilih checklist tertulis.' },
        { prompt: 'Apa tindakan Fani paling lambat Sabtu pukul enam?', options: ['Write all deadlines', 'Confirm receipt of the checklist', 'Organise a live meeting immediately'], answer: 1, explanation: 'Hadi mengirim pukul lima dan Fani mengonfirmasi penerimaan paling lambat pukul enam.' }
      ]
    }
  },
  {
    week: 17,
    explanation: `## Wawancara: jelaskan solusi lewat kejadian nyata

Jawaban wawancara yang meyakinkan menunjukkan contoh, bukan hanya sifat seperti “I am hardworking”. Susun dengan situasi, tugasmu, tindakanmu, dan hasil. Situasi cukup satu atau dua kalimat agar ada ruang untuk menjelaskan keputusan. Bedakan kontribusimu dari kerja tim: “We planned the event; I checked the invitations.” Jangan mengambil seluruh keberhasilan sebagai milik sendiri.

Untuk kejadian tertentu, gunakan past simple dengan urutan yang jelas. Present perfect dapat membuka pengalaman umum, lalu detail kembali ke past simple. Hasil tidak harus berupa angka. “The group received the correct timetable” adalah hasil yang bisa dijelaskan. Jika menyebut angka latihan, beri label fiktif; jangan mengarang capaian pribadi atau penelitian.

Pertanyaan lanjutan menguji pemahaman, bukan panjang naskah hafalan. Bersiap menjelaskan alasan tindakan, alternatif, hal yang tidak berhasil, pelajaran, dan apa yang akan diubah. Jika belum punya pengalaman kerja, gunakan tugas rumah, belajar, atau kegiatan komunitas yang benar. Memo masalah/solusi perlu menyebut masalah, dampak, tindakan, hasil yang diketahui, serta batasan. Hindari janji “This always works” hanya berdasarkan satu contoh.`,
    examples: [
      { en: 'The group had two different versions of the timetable.', id: 'Kelompok memiliki dua versi jadwal yang berbeda.' },
      { en: 'I checked the latest message before I changed the file.', id: 'Saya memeriksa pesan terbaru sebelum mengubah file.' },
      { en: 'We finished the event; my role was to confirm the room.', id: 'Kami menyelesaikan acara; peran saya adalah memastikan ruang.' },
      { en: 'Next time, I would check access earlier.', id: 'Lain kali saya akan memeriksa akses lebih awal.' }
    ],
    vocabulary: [
      { en: 'responsibility', id: 'tanggung jawab' }, { en: 'contribution', id: 'kontribusi' },
      { en: 'resolve', id: 'menyelesaikan masalah' }, { en: 'outcome', id: 'hasil akhir' },
      { en: 'follow-up question', id: 'pertanyaan lanjutan' }, { en: 'lesson learned', id: 'pelajaran yang didapat' }
    ],
    reading: {
      title: 'A memo about conflicting schedules',
      text: 'This fictional memo describes a problem in a volunteer team. Two versions of the weekend timetable were circulating, and people were arriving at different times. My task was to identify the approved version, not to redesign every shift. I checked the coordinator’s latest message and compared it with both files. Then I marked the approved file clearly and asked the coordinator to send one link to the whole team. I also moved the old file into an archive folder with a warning in its title. At the next shift, the volunteers used the same timetable. However, we did not check whether everyone could open the link on a phone. Next time, I would test access with one volunteer before sending the final message.'
    },
    listening: {
      title: 'Interview about an unexpected problem',
      text: 'Interviewer: Tell me about a time you solved a practical problem. Candidate: During a study event, our speaker could not arrive on time. My task was to keep the opening useful without changing her talk. I asked the organiser for permission, then led a short pair discussion using the questions we had prepared. Interviewer: Why did you choose that? Candidate: It needed no extra equipment, and people could join immediately. Interviewer: What was the result? Candidate: The group was ready with questions when the speaker arrived. I did not solve her travel problem, but I helped the session continue. Next time, I would agree on a backup activity before the event.'
    },
    output: {
      speaking: 'Jawab satu pertanyaan pengalaman selama 2 menit dengan kejadian → tindakan → hasil. Lalu jawab lima pertanyaan lanjutan tanpa menghafal: apa tanggung jawabmu, mengapa tindakan itu, apa alternatifnya, apa yang kurang berhasil, dan apa yang akan kamu ubah? Gunakan pengalaman nyata atau tandai seluruh role-play sebagai fiktif.',
      writing: 'Tulis memo masalah/solusi 150–200 kata tentang situasi familier. Bedakan tindakanmu dari tindakan tim, hasil yang diketahui dari dugaan, dan satu batasan. Jangan menyalin pengalaman tokoh sebagai milikmu. Revisi frasa umum seperti “I fixed everything” menjadi tindakan yang dapat dijelaskan.'
    },
    review: 'Dengarkan kembali rekaman dan cari bukti tindakan serta alasan, bukan sekadar banyaknya kata positif. Simpan jawaban spontan, memo draft, dan revisi. Skenario asesmen hanya dibuka hari 6. Bila memakai pembacaan sintetis, jangan menafsirkannya sebagai wawancara manusia atau tes listening autentik.',
    quizzes: {
      pattern: [
        { prompt: 'Jawaban mana menunjukkan tindakan konkret?', options: ['I am a perfect worker.', 'I checked both files and asked the coordinator to confirm one.', 'Everything became amazing.'], answer: 1, explanation: 'Tindakan memeriksa dan meminta konfirmasi dapat ditelusuri, berbeda dari pujian umum.' },
        { prompt: 'Kalimat mana memisahkan kontribusi pribadi dari tim?', options: ['I did everything for everyone.', 'The team result proves I never make mistakes.', 'We organised the workshop; I checked the room booking.'], answer: 2, explanation: 'We menyatakan kerja tim dan I menjelaskan peran pribadi secara spesifik.' }
      ],
      reading: [
        { prompt: 'Apa tugas utama penulis memo?', options: ['Identify the approved timetable.', 'Redesign every volunteer shift.', 'Create a new phone application.'], answer: 0, explanation: 'Tugasnya mengidentifikasi versi disetujui, bukan merancang ulang semua giliran.' },
        { prompt: 'Apa batasan tindakan yang diakui?', options: ['The coordinator never sent a link.', 'Phone access was not checked.', 'The old file could not be archived.'], answer: 1, explanation: 'Mereka belum memeriksa apakah semua orang bisa membuka tautan lewat ponsel.' }
      ],
      listening: [
        { prompt: 'Mengapa kandidat memilih diskusi berpasangan?', options: ['It replaced the speaker permanently.', 'It solved the travel delay.', 'It required no extra equipment and could start immediately.'], answer: 2, explanation: 'Alasan yang diberikan adalah tidak perlu peralatan tambahan dan bisa langsung diikuti.' },
        { prompt: 'Apa yang akan dilakukan kandidat lebih awal lain kali?', options: ['Agree on a backup activity.', 'Cancel every pair discussion.', 'Change the speaker’s whole talk.'], answer: 0, explanation: 'Kandidat ingin menyepakati aktivitas cadangan sebelum acara.' }
      ]
    },
    assessment: {
      reading: {
        title: 'A solution for incomplete handovers',
        text: 'In this fictional case, a study-space team kept finding unfinished tasks without knowing who owned them. Damar was asked to improve the handover, not to supervise every helper. He reviewed recent notes and noticed that they listed problems but rarely named a next action. He created a simple template with four fields: task, current state, next owner, and deadline. He tested it during one evening shift and asked the morning helper which parts were unclear. The helper could identify the urgent cleaning task, but the word “later” in one deadline was still ambiguous. Damar replaced it with a specific time and shared the revised template. The trial improved that handover, but it did not prove the template would suit every team or workload.'
      },
      listening: {
        title: 'Interview about a missing instruction',
        text: 'Interviewer: Describe a mistake you learned from. Applicant: I once sent a meeting invitation without saying which entrance to use. Two visitors waited at a locked side door. Interviewer: What did you do? Applicant: I called them, explained the route to the front entrance, and waited there to meet them. After the meeting, I added entrance details to the invitation template. Interviewer: Did that guarantee nobody would get lost again? Applicant: No. It addressed the missing instruction, but maps can still be confusing. Next time, I would ask a new visitor to check the directions before I send them to a whole group. Interviewer: What was your own responsibility? Applicant: Writing and checking the invitation.'
      },
      readingQuiz: [
        { prompt: 'Masalah apa yang masih ditemukan saat uji template?', options: ['All four fields were missing.', 'The helper could not identify any task.', 'The deadline word “later” was ambiguous.'], answer: 2, explanation: 'Kata later tidak menyebut waktu spesifik sehingga kemudian diganti.' },
        { prompt: 'Kesimpulan mana sesuai dengan batasan kasus?', options: ['The trial helped one handover but does not establish universal suitability.', 'The template is proven best for every team.', 'Damar must supervise every helper now.'], answer: 0, explanation: 'Teks membatasi hasil pada uji satu serah terima, bukan semua tim.' }
      ],
      listeningQuiz: [
        { prompt: 'Apa kesalahan awal pelamar?', options: ['Sending the invitation after the meeting', 'Omitting the entrance information', 'Booking the wrong date'], answer: 1, explanation: 'Undangan tidak menjelaskan pintu masuk, sehingga dua tamu menunggu di pintu samping terkunci.' },
        { prompt: 'Apa perbaikan yang ingin diuji sebelum undangan berikutnya dikirim?', options: ['Remove all directions', 'Ask visitors to arrive alone at night', 'Ask a new visitor to check the directions'], answer: 2, explanation: 'Pelamar ingin meminta orang yang belum familier memeriksa petunjuk terlebih dahulu.' }
      ]
    }
  },
  {
    week: 18,
    explanation: `## Presentasi kerja: alur, angka, dan tanya jawab

Presentasi memerlukan arah yang terdengar, bukan hanya teks panjang yang dibacakan. Gunakan lima bagian: tujuan, keadaan saat ini, pilihan atau data, rekomendasi, dan langkah berikutnya. Signposting seperti “First, I will explain ...” atau “To sum up ...” membantu pendengar mengikuti perpindahan. Jangan mengatakan finally lalu menambah beberapa topik besar baru.

Saat menjelaskan angka, sebut apa yang dihitung, unit, periode, dan sumbernya. “It fell from forty to thirty minutes” berbeda dari “It fell by thirty minutes”. From ... to ... menyebut nilai awal dan akhir; by menyebut besar perubahan. Jika angkanya buatan, sebut “These are simulated figures for practice.” Data latihan tidak boleh disebut temuan penelitian atau capaian nyata. Penurunan satu ukuran juga belum membuktikan penyebabnya.

Dalam tanya jawab, dengarkan pertanyaan sampai selesai, ulangi inti jika perlu, lalu jawab dengan batasan. “The table does not tell us that” lebih jujur daripada menebak. Jika lupa angka, lihat catatan atau katakan belum tahu. Tutup dengan rekomendasi yang sebanding dengan informasi tersedia, penanggung jawab, dan waktu meninjau ulang. Kelancaran bukan alasan untuk membuat klaim lebih kuat dari bukti.`,
    examples: [
      { en: 'First, I will explain the scheduling problem.', id: 'Pertama, saya akan menjelaskan masalah penjadwalan.' },
      { en: 'Preparation time fell from forty to thirty minutes.', id: 'Waktu persiapan turun dari empat puluh menjadi tiga puluh menit.' },
      { en: 'That is a decrease of ten minutes.', id: 'Itu merupakan penurunan sepuluh menit.' },
      { en: 'These simulated figures do not show why the change happened.', id: 'Angka simulasi ini tidak menunjukkan mengapa perubahan terjadi.' }
    ],
    vocabulary: [
      { en: 'outline', id: 'kerangka' }, { en: 'signposting', id: 'penanda arah pembahasan' },
      { en: 'figure', id: 'angka' }, { en: 'unit', id: 'satuan' },
      { en: 'decrease', id: 'penurunan' }, { en: 'recommendation', id: 'rekomendasi' },
      { en: 'simulated', id: 'dibuat untuk simulasi, bukan hasil nyata' }
    ],
    reading: {
      title: 'A presentation brief with simulated figures',
      text: 'This practice brief uses invented figures, not observations or research findings. A fictional team compares two weekly planning arrangements. Under Plan A, meeting time is sixty minutes, preparation time is twenty minutes, and there are four unresolved tasks at the end. Under Plan B, meeting time is forty minutes, preparation time is thirty minutes, and there are three unresolved tasks. Total preparation plus meeting time is therefore eighty minutes for A and seventy for B. The table does not explain why the unresolved-task count differs. The presenter should recommend a small trial of Plan B, not claim it will always be better. The next step is to assign a trial owner and decide what real information would be collected with permission. Participant workload should be checked as well as meeting length.'
    },
    listening: {
      title: 'Explaining a small practice table',
      text: 'Presenter: Today I will explain a fictional scheduling example. These figures are simulated for practice. First, preparation time was forty minutes in the old plan and thirty minutes in the revised plan. That is a decrease of ten minutes. Next, the meeting itself stayed at twenty minutes. Total time therefore changed from sixty to fifty minutes. I recommend testing the revised plan before adopting it. Listener: Does that prove the revised plan improves learning? Presenter: No. The table only describes the invented time figures. It contains no learning results. Listener: What would you check in a real trial? Presenter: I would check whether tasks were completed clearly and whether participants found the workload manageable, with their agreement.'
    },
    output: {
      speaking: 'Siapkan presentasi sekitar 5 menit dengan lima bagian: tujuan, situasi, angka, rekomendasi, langkah berikutnya. Gunakan tabel buatan dari bacaan dan sebut jelas data simulasi. Jawab tiga pertanyaan: berapa waktu total tiap opsi, apa yang tidak dapat disimpulkan, dan apa yang perlu dicek sebelum menerapkan. Jangan membaca naskah lengkap.',
      writing: 'Buat outline lima bagian dan tabel kecil berlabel “data simulasi”: Plan A rapat 60 menit + persiapan 20 menit, Plan B rapat 40 menit + persiapan 30 menit. Tambahkan naskah ringkas 150–200 kata dengan unit, perbandingan from/to dan by, satu batasan, rekomendasi uji coba, penanggung jawab, dan waktu review. Revisi klaim yang tidak didukung tabel.'
    },
    review: 'Periksa angka dan unit dalam rekaman, terutama from/to versus by. Tidak ada angka minggu ini yang merupakan riset atau hasilmu. Simpan outline, tabel, rekaman, dan revisi. Materi asesmen berbeda hanya dibuka hari 6. Audio lokal sintetis untuk latihan skrip, bukan tes presentasi atau listening autentik.',
    quizzes: {
      pattern: [
        { prompt: 'Waktu turun dari 40 menjadi 30 menit. Pilih pernyataan tepat.', options: ['It decreased by thirty minutes.', 'It decreased by ten minutes.', 'It increased by ten minutes.'], answer: 1, explanation: 'Besar penurunan adalah 40 dikurangi 30, yaitu 10 menit.' },
        { prompt: 'Respons mana jujur jika tabel hanya berisi waktu simulasi?', options: ['It proves real learning improves.', 'It is a scientific finding about every team.', 'It does not tell us whether learning improved.'], answer: 2, explanation: 'Tabel waktu simulasi tidak memuat ukuran hasil belajar dan tidak membuktikan perbaikan nyata.' }
      ],
      reading: [
        { prompt: 'Berapa total persiapan dan rapat Plan B?', options: ['Seventy minutes', 'Forty minutes', 'Eighty minutes'], answer: 0, explanation: 'Persiapan 30 ditambah rapat 40 menghasilkan total 70 menit.' },
        { prompt: 'Rekomendasi apa yang sesuai brief?', options: ['Adopt Plan B permanently for every team.', 'Run a small trial of Plan B.', 'Ignore preparation workload.'], answer: 1, explanation: 'Brief menyarankan uji kecil, bukan klaim bahwa Plan B selalu lebih baik.' }
      ],
      listening: [
        { prompt: 'Komponen mana tidak berubah?', options: ['Preparation time', 'Total time', 'Meeting time'], answer: 2, explanation: 'Durasi rapat tetap dua puluh menit; persiapan dan total berubah.' },
        { prompt: 'Apa yang tidak dimuat dalam tabel pembicara?', options: ['Learning results', 'Preparation time', 'Meeting time'], answer: 0, explanation: 'Pembicara menegaskan tabel tidak berisi hasil belajar.' }
      ]
    },
    assessment: {
      reading: {
        title: 'Comparing two fictional handover plans',
        text: 'All figures in this assessment are simulated for language practice. In the fictional current plan, writing a handover note takes twenty-five minutes and the follow-up call takes thirty-five minutes. In the proposed plan, writing takes thirty minutes and the call takes twenty minutes. The combined time is sixty minutes for the current plan and fifty for the proposed plan. The proposed plan also leaves two questions unresolved, compared with one in the current plan. This is a trade-off, not clear proof of overall improvement. A careful presentation should describe both time and unresolved questions. The recommendation is to revise the note template and test the proposal once more before making a permanent decision. The figures do not describe a real organisation or a measured learning outcome.'
      },
      listening: {
        title: 'Questions after a fictional presentation',
        text: 'Speaker: To sum up, our simulated example compares two workshop schedules. The first has ninety minutes of activities and thirty minutes of breaks. The second has eighty minutes of activities and forty minutes of breaks. Both total one hundred and twenty minutes. Audience: So the second schedule saves ten minutes overall? Speaker: No. Activity time decreases by ten minutes, but break time increases by ten. Total time stays the same. Audience: Which schedule do learners prefer? Speaker: We cannot tell. These are invented time figures, and we have no preference information. I recommend asking participants during a small trial, not claiming that either schedule is already better.'
      },
      readingQuiz: [
        { prompt: 'Apa trade-off pada proposed plan?', options: ['More total time but fewer unresolved questions', 'Less total time but more unresolved questions', 'No change in either time or questions'], answer: 1, explanation: 'Total turun dari 60 ke 50 menit, tetapi pertanyaan belum selesai naik dari satu menjadi dua.' },
        { prompt: 'Apa langkah yang direkomendasikan sebelum keputusan permanen?', options: ['Claim universal success immediately', 'Remove every follow-up call', 'Revise the note template and test again'], answer: 2, explanation: 'Rekomendasinya memperbaiki template dan menguji proposal sekali lagi.' }
      ],
      listeningQuiz: [
        { prompt: 'Berapa total waktu jadwal kedua?', options: ['One hundred and twenty minutes', 'One hundred and ten minutes', 'Eighty minutes'], answer: 0, explanation: '80 menit aktivitas ditambah 40 menit istirahat sama dengan 120 menit.' },
        { prompt: 'Mengapa pembicara tidak bisa menyebut jadwal yang lebih disukai?', options: ['The totals are too small.', 'No preference information is available.', 'Every learner chose the first schedule.'], answer: 1, explanation: 'Angka hanya waktu simulasi dan tidak memuat informasi preferensi peserta.' }
      ]
    }
  }
];
