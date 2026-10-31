export const lessons1 = [
  {
    week: 1,
    explanation: `### Identitas dengan am, is, are
Dalam bahasa Inggris, kalimat identitas membutuhkan kata kerja **be**. Pilih **I am**, **you/we/they are**, dan **he/she/it is**. Jadi, “Saya pelajar” menjadi **I am a student**, bukan “I student”. Gunakan **a** sebelum nama pekerjaan tunggal: **She is a teacher**. Untuk asal, gunakan **from**: **We are from Indonesia**. Kata ganti menggantikan nama: Rina menjadi **she**, Budi menjadi **he**, dan dua orang menjadi **they**.

Bentuk pendek **I'm**, **you're**, dan **she's** berarti sama dengan bentuk lengkap. Tambahkan **not** untuk menyangkal: **I'm not a teacher**. Untuk bertanya, pindahkan be ke depan: **Are you a student?** Jawaban singkatnya **Yes, I am** atau **No, I'm not**. **My name** berarti nama saya; **your name** berarti nama kamu.

Jangan menambahkan am pada semua kalimat. Identitas memakai **I am a student**, tetapi kegiatan memakai **I study** atau **I work**, bukan “I am work”. Saat mengeja nama, ucapkan huruf satu per satu: **A-N-I**. **How do you spell your name?** adalah ungkapan siap pakai untuk meminta ejaan. Mulai perlahan; kejelasan nama dan peran lebih penting daripada kecepatan.`,
    examples: [
      { en: "I am a student. I study English.", id: "Saya seorang pelajar. Saya belajar bahasa Inggris." },
      { en: "She is from Bandung. Her name is Ani.", id: "Dia berasal dari Bandung. Namanya Ani." },
      { en: "Are you a teacher? No, I am not.", id: "Apakah kamu seorang guru? Bukan." },
      { en: "My name is Ani: A-N-I.", id: "Nama saya Ani: A-N-I." }
    ],
    vocabulary: [
      { en: "name", id: "nama" }, { en: "student", id: "pelajar atau mahasiswa" },
      { en: "teacher", id: "guru" }, { en: "from", id: "berasal dari" },
      { en: "ready", id: "siap" }, { en: "spell", id: "mengeja" }
    ],
    reading: {
      title: "A new member",
      text: "Hello! My name is Lina. I am from Solo. I am a student, and I study English. My friend is Arif. He is a cook. We are new members of a small English club. Our teacher is Maya. She is kind. We are ready for our first lesson."
    },
    listening: {
      title: "Meeting before class — synthetic-speech practice script",
      text: "Dina: Hello. I am Dina. Are you Rio? Rio: No, I am Riko. My name is R-I-K-O. Dina: Nice to meet you, Riko. Are you a teacher? Riko: No, I am a student. Our teacher is Mr Adi. Dina: Oh, I am a student too. Riko: Great! We are in the same class."
    },
    output: {
      speaking: "Sebelum berlatih, rekam 10–30 detik apa yang sudah bisa kamu ucapkan; simpan sebagai rekaman awal. Setelah latihan, buat rekaman 30–60 detik dari tiga kata kunci: nama, asal, peran. Eja namamu. Mainkan dua peran untuk tiga tanya-jawab: nama, asal, dan apakah seorang pelajar. Tidak perlu partner atau alat selain perekam opsional.",
      writing: "Tulis 5–8 kalimat perkenalan diri atau tokoh fiktif. Masukkan asal, peran, satu kalimat negatif, dan satu kegiatan dengan I study atau I work. Simpan draft, periksa am/is/are, lalu buat revisi tanpa menghapus draft."
    },
    review: "Tutup materi. Ucapkan pasangan I–am, she–is, they–are, lalu buat contoh baru. Jelaskan bedanya I am a student dan I study. Bandingkan rekaman awal dengan rekaman akhir hanya pada kejelasan identitas; catat dua hal untuk dilatih. Simpan asesmen baru untuk hari 6, bukan untuk hafalan latihan.",
    quizzes: {
      pattern: [
        { prompt: "Lengkapi: She ___ a teacher.", options: ["am", "is", "are"], answer: 1, explanation: "She berpasangan dengan is. Am hanya untuk I." },
        { prompt: "Kalimat mana yang benar untuk mengatakan saya bekerja?", options: ["I am work.", "I are work.", "I work."], answer: 2, explanation: "Work sudah merupakan kata kerja kegiatan; jangan tambahkan am." }
      ],
      reading: [
        { prompt: "Dari kota mana Lina berasal?", options: ["Solo", "Bandung", "Medan"], answer: 0, explanation: "Lina mengatakan I am from Solo." },
        { prompt: "Apa pekerjaan Arif?", options: ["Teacher", "Cook", "Driver"], answer: 1, explanation: "Kalimat He is a cook menjelaskan pekerjaan Arif." }
      ],
      listening: [
        { prompt: "Bagaimana ejaan nama teman Dina?", options: ["R-I-O", "R-I-N-O", "R-I-K-O"], answer: 2, explanation: "Riko mengeja namanya R-I-K-O, bukan Rio." },
        { prompt: "Siapa guru mereka?", options: ["Mr Adi", "Riko", "Dina"], answer: 0, explanation: "Riko menyebut Our teacher is Mr Adi." }
      ]
    },
    assessment: {
      reading: {
        title: "A welcome card",
        text: "Hi! I am Nisa. I am from Malang. I am a nurse. My brother is Damar. He is a driver, not a nurse. We are at a community centre. Our English teacher is Sari. She is from Semarang. Damar and I are happy to join her class today."
      },
      listening: {
        title: "At the welcome desk — synthetic-speech assessment script",
        text: "Host: Hello. What is your name? Guest: My name is Ema, E-M-A. Host: Welcome, Ema. Are you from Bogor? Guest: No, I am from Padang. Host: Are you a student? Guest: No, I am a shop assistant. My friend Fajar is a student. Host: Nice to meet you. I am Tono."
      },
      readingQuiz: [
        { prompt: "Apa pekerjaan Nisa?", options: ["Driver", "Teacher", "Nurse"], answer: 2, explanation: "Nisa memperkenalkan diri dengan I am a nurse." },
        { prompt: "Siapa yang berasal dari Semarang?", options: ["Nisa", "Sari", "Damar"], answer: 1, explanation: "She is from Semarang merujuk pada guru bernama Sari." }
      ],
      listeningQuiz: [
        { prompt: "Dari mana Ema berasal?", options: ["Padang", "Bogor", "Malang"], answer: 0, explanation: "Ema menyangkal Bogor lalu menyebut Padang." },
        { prompt: "Apa peran Fajar?", options: ["Host", "Shop assistant", "Student"], answer: 2, explanation: "Ema berkata My friend Fajar is a student." }
      ]
    }
  },
  {
    week: 2,
    explanation: `### Rutinitas, waktu, dan kesukaan
Gunakan **present simple** untuk kegiatan berulang: **I work on Monday** atau **You study every evening**. Dengan **I** dan **you**, pakai bentuk dasar kata kerja: **work, study, have, like**. **I have breakfast** berarti saya sarapan; **I like tea** menyatakan kesukaan. Jangan menulis “I am have breakfast”, karena have sudah menjadi kata kerja. **I am tired** berbeda: tired adalah sifat, jadi membutuhkan am.

Untuk waktu, **at** dipakai bersama jam: **at seven**, **at seven thirty**. **On** dipakai bersama hari: **on Tuesday**; **in** dipakai dalam **in the morning**. **Every day** berarti setiap hari dan tidak membutuhkan on. Jam **7:30** bisa dibaca **seven thirty**. Bedakan **seven** (7) dan **seventeen** (17), lalu cocokkan angka dengan konteks jadwal.

Susun cerita dengan **first**, **then**, dan **after that** sebagai penanda urutan sederhana. Untuk menanyakan waktu, gunakan ungkapan **What time do you start?** dan jawab **At eight**. Pada minggu ini, fokuskan ketepatan kegiatan dan jam, bukan menghafal semua bentuk pertanyaan sekaligus. Saat menulis jadwal, beri hari dan waktu agar pembaca tidak perlu menebak.`,
    examples: [
      { en: "I have breakfast at six thirty.", id: "Saya sarapan pukul enam tiga puluh." },
      { en: "I study English on Tuesday and Thursday.", id: "Saya belajar bahasa Inggris pada Selasa dan Kamis." },
      { en: "You like coffee. I like tea.", id: "Kamu menyukai kopi. Saya menyukai teh." },
      { en: "What time do you start? At eight.", id: "Pukul berapa kamu mulai? Pukul delapan." }
    ],
    vocabulary: [
      { en: "breakfast", id: "sarapan" }, { en: "start", id: "mulai" },
      { en: "finish", id: "selesai" }, { en: "every day", id: "setiap hari" },
      { en: "morning", id: "pagi" }, { en: "evening", id: "petang atau malam" }
    ],
    reading: {
      title: "My study days",
      text: "I am Bayu. I work in a shop from Monday to Friday. I start at eight and finish at four. I have lunch at twelve. On Tuesday and Thursday, I study English at seven in the evening. I like short stories. On Saturday, I read a story and write five new words."
    },
    listening: {
      title: "Comparing morning routines — synthetic-speech practice script",
      text: "Ayu: What time do you have breakfast? Ben: At six fifteen. I start work at seven thirty. Ayu: I start at nine. I study English before work. Ben: I study in the evening, on Wednesday. Ayu: Do you like music? Ben: Yes. I like English songs. I listen to one song after dinner."
    },
    output: {
      speaking: "Buat jadwal tujuh hari dengan kata kunci kegiatan dan jam. Ceritakan rutinitas selama 60 detik tanpa membaca kalimat lengkap. Lalu mainkan dua peran yang saling bertanya jam mulai bekerja atau belajar dan jam makan.",
      writing: "Tulis jadwal mingguan sederhana dan 6–8 kalimat penjelas. Gunakan I have, I like, at untuk jam, dan on untuk hari. Buat draft lalu revisi dua kesalahan yang paling mengubah makna; jangan mengubah jam secara tidak sengaja."
    },
    review: "Tanpa melihat contoh, sebutkan tiga kegiatan dengan I dan waktunya. Baca angka 13, 30, 7:15, dan 7:50 secara perlahan. Cek apakah kamu menambahkan am sebelum work atau have. Jika ya, buat satu pasangan I am ready / I work untuk mengingat bedanya. Materi asesmen hanya dibuka pada hari 6.",
    quizzes: {
      pattern: [
        { prompt: "Pilih kalimat rutinitas yang benar.", options: ["I have breakfast at six.", "I am have breakfast at six.", "I having breakfast at six every day."], answer: 0, explanation: "I memakai kata kerja dasar have untuk rutinitas, tanpa am." },
        { prompt: "Lengkapi: I study ___ Monday ___ seven.", options: ["at / on", "on / at", "in / on"], answer: 1, explanation: "On dipakai untuk hari dan at untuk jam." }
      ],
      reading: [
        { prompt: "Kapan Bayu belajar bahasa Inggris?", options: ["Monday and Friday", "Saturday and Sunday", "Tuesday and Thursday"], answer: 2, explanation: "Jadwal belajar Bayu tertulis Tuesday and Thursday, pukul tujuh malam." },
        { prompt: "Apa yang Bayu tulis pada Sabtu?", options: ["Five new words", "A lunch menu", "Ten names"], answer: 0, explanation: "Bayu menulis five new words setelah membaca cerita." }
      ],
      listening: [
        { prompt: "Pukul berapa Ben sarapan?", options: ["7:30", "6:15", "9:00"], answer: 1, explanation: "Ben menjawab At six fifteen untuk pertanyaan sarapan." },
        { prompt: "Kapan Ayu belajar bahasa Inggris?", options: ["After dinner", "At midnight", "Before work"], answer: 2, explanation: "Ayu berkata I study English before work." }
      ]
    },
    assessment: {
      reading: {
        title: "A weekend timetable",
        text: "My name is Farah. On Sunday, I help at a small library. I start at ten and finish at two. I have lunch at eleven thirty. After lunch, I put books on shelves. I like picture books. On Monday evening, I study English at home. I write three sentences before bed."
      },
      listening: {
        title: "A different workday — synthetic-speech assessment script",
        text: "Nuri: What time do you start work, Hadi? Hadi: At five forty-five in the morning. I have breakfast at five. Nuri: When do you study? Hadi: On Friday, at eight thirty in the evening. I like reading menus in English. Nuri: I study on Saturday. I like stories about animals. Hadi: That sounds good."
      },
      readingQuiz: [
        { prompt: "Pukul berapa Farah selesai membantu di perpustakaan?", options: ["10:00", "11:30", "2:00"], answer: 2, explanation: "Farah mengatakan I start at ten and finish at two." },
        { prompt: "Apa yang dilakukan Farah sebelum tidur?", options: ["Writes three sentences", "Has lunch", "Opens the library"], answer: 0, explanation: "Kalimat terakhir menyebut menulis tiga kalimat sebelum tidur." }
      ],
      listeningQuiz: [
        { prompt: "Pukul berapa Hadi mulai bekerja?", options: ["5:00", "5:45", "8:30"], answer: 1, explanation: "Five forty-five adalah jam mulai kerja; five adalah jam sarapan." },
        { prompt: "Apa yang Nuri suka baca?", options: ["Menus", "Work reports", "Animal stories"], answer: 2, explanation: "Nuri mengatakan I like stories about animals." }
      ]
    }
  },
  {
    week: 3,
    explanation: `### Bertanya dengan do dan does
Untuk pertanyaan kegiatan atau kebutuhan dalam present simple, gunakan **do** bersama **I/you/we/they** dan **does** bersama **he/she/it**. Polanya **Do you need a pen?** dan **Does Rani work here?** Setelah do atau does, kata kerja kembali ke bentuk dasar: **Does she work?**, bukan “Does she works?”. Pada pernyataan positif tanpa does, gunakan **She works here**.

Negatifnya **I don't need a pen** dan **She doesn't work here**. **Don't** adalah do not; **doesn't** adalah does not. Jawaban singkat mengikuti subjek: **Yes, I do**, **No, she doesn't**. Jangan menjawab “Yes, I am” untuk pertanyaan **Do you work?** karena kata bantu pertanyaannya berbeda.

Tambahkan kata tanya untuk informasi tertentu: **what** menanyakan apa, **where** tempat, dan **when** waktu. **Where does she work?** menanyakan tempat kerja, sedangkan **When do you study?** menanyakan jadwal. Namun identitas dan keadaan tetap memakai be: **Are you ready?**, bukan “Do you ready?”. Cek dahulu apakah kalimat memiliki kata kerja kegiatan seperti work, need, atau like. Kebiasaan ini membantu memilih pola pertanyaan tanpa menerjemahkan kata demi kata.`,
    examples: [
      { en: "Do you need a notebook? Yes, I do.", id: "Apakah kamu membutuhkan buku catatan? Ya." },
      { en: "Where does Sinta work? She works at a bakery.", id: "Di mana Sinta bekerja? Dia bekerja di toko roti." },
      { en: "He doesn't like coffee.", id: "Dia tidak menyukai kopi." },
      { en: "Are you ready? Do you have a pen?", id: "Apakah kamu siap? Apakah kamu punya pena?" }
    ],
    vocabulary: [
      { en: "need", id: "membutuhkan" }, { en: "where", id: "di mana" },
      { en: "when", id: "kapan" }, { en: "what", id: "apa" },
      { en: "notebook", id: "buku catatan" }, { en: "borrow", id: "meminjam" }
    ],
    reading: {
      title: "Getting ready for a class",
      text: "Rani works at a bakery. She studies English on Friday. She needs a notebook, but she doesn't need a new dictionary. Her brother has one at home. The class starts at six. Rani asks the teacher, 'Do we need coloured pens?' The teacher says, 'No. Please bring a black pen and your notebook.'"
    },
    listening: {
      title: "Asking about a club — synthetic-speech practice script",
      text: "Iman: Where does the chess club meet? Elsa: At the community hall. Iman: When do you meet? Elsa: On Saturday morning. Iman: Does your sister come too? Elsa: No, she doesn't. She works on Saturday. Iman: Do I need a chess set? Elsa: No. We have sets here. You only need a notebook."
    },
    output: {
      speaking: "Mainkan percakapan dua menit antara anggota baru dan pengelola klub fiktif. Buat lima pertanyaan asli tentang tempat, waktu, kebutuhan, dan kegiatan seseorang; jawab dengan rincian yang konsisten. Gunakan kata kunci saja, bukan daftar kalimat yang dibaca.",
      writing: "Tulis lima pertanyaan beserta jawabannya tentang kegiatanmu atau tokoh fiktif. Sertakan do, does, satu don't, satu doesn't, serta satu pertanyaan be. Tandai kata kerja setelah does dan periksa bahwa bentuknya dasar. Simpan draft dan revisi."
    },
    review: "Ubah You need a bag menjadi pertanyaan dan negatif, lalu ulangi dengan She. Jelaskan mengapa Are you ready berbeda dari Do you work. Catat dua pasangan tanya-jawab yang masih keliru dan gunakan pada situasi baru. Jangan membaca skrip asesmen sebelum hari 6.",
    quizzes: {
      pattern: [
        { prompt: "Pilih pertanyaan yang benar.", options: ["Does she works here?", "Does she work here?", "Do she work here?"], answer: 1, explanation: "She membutuhkan does; setelah does gunakan work, bukan works." },
        { prompt: "Lengkapi pertanyaan keadaan: ___ you ready?", options: ["Do", "Does", "Are"], answer: 2, explanation: "Ready adalah sifat; pertanyaan keadaan memakai be: Are you ready?" }
      ],
      reading: [
        { prompt: "Mengapa Rani tidak membutuhkan kamus baru?", options: ["Her brother has one.", "The class has no reading.", "She works in a bookshop."], answer: 0, explanation: "Teks menyatakan kakaknya memiliki kamus di rumah." },
        { prompt: "Pena apa yang diminta guru?", options: ["A red pen", "A black pen", "A green pen"], answer: 1, explanation: "Guru meminta a black pen, bukan coloured pens." }
      ],
      listening: [
        { prompt: "Di mana klub catur bertemu?", options: ["At a bakery", "At Elsa's home", "At the community hall"], answer: 2, explanation: "Elsa menjawab At the community hall." },
        { prompt: "Mengapa saudara perempuan Elsa tidak datang?", options: ["She works on Saturday.", "She needs a chess set.", "She studies on Friday."], answer: 0, explanation: "Elsa mengatakan saudaranya bekerja pada Sabtu." }
      ]
    },
    assessment: {
      reading: {
        title: "Joining a garden group",
        text: "Dewi helps a garden group on Sunday afternoon. The group meets behind the market. She brings water, but she doesn't bring tools because the group has tools. Her cousin Joko wants to join. He asks, 'Does the group need more people?' Dewi says, 'Yes. Please come at three and bring a hat.'"
      },
      listening: {
        title: "Finding a music lesson — synthetic-speech assessment script",
        text: "Luki: Where does Mira teach music? Hana: At the youth centre. Luki: Does she teach on Monday? Hana: No, she doesn't. She teaches on Thursday at four. Luki: Do students need a guitar? Hana: Yes, they do. Luki: What do I need to bring for writing? Hana: Just a pencil. We have paper at the centre."
      },
      readingQuiz: [
        { prompt: "Mengapa Dewi tidak membawa alat?", options: ["The market is closed.", "Joko has all the tools.", "The group has tools."], answer: 2, explanation: "Dewi tidak membawa alat karena kelompok sudah memilikinya." },
        { prompt: "Apa yang diminta Dewi agar Joko bawa?", options: ["A guitar", "A hat", "A dictionary"], answer: 1, explanation: "Dewi meminta Joko datang pukul tiga dan membawa topi." }
      ],
      listeningQuiz: [
        { prompt: "Kapan Mira mengajar?", options: ["Thursday at four", "Monday at four", "Sunday at three"], answer: 0, explanation: "Hana mengoreksi Monday menjadi Thursday at four." },
        { prompt: "Apa yang sudah tersedia di pusat kegiatan?", options: ["Guitars", "Pencils", "Paper"], answer: 2, explanation: "Hana berkata We have paper at the centre; siswa tetap membawa gitar dan pensil." }
      ]
    }
  },
  {
    week: 4,
    explanation: `### Menyebut benda dan lokasinya
Gunakan **there is** untuk menyatakan ada satu benda: **There is a desk**. Gunakan **there are** untuk lebih dari satu: **There are two chairs**. There di sini memperkenalkan keberadaan, bukan selalu berarti “di sana”. Untuk benda tunggal yang belum spesifik, pakai **a** atau **an**. Pilih berdasarkan bunyi awal: **a book**, **an apple**, **an old chair**. Benda jamak tidak memakai a/an: **two books**, bukan “a two books”.

Kebanyakan bentuk jamak ditambah **-s**. Untuk latihan ini, perhatikan **book/books**, **chair/chairs**, dan **box/boxes**. Sesuaikan jumlah dengan is atau are. Pertanyaan menjadi **Is there a lamp?** atau **Are there two windows?** Negatif sederhana: **There isn't a cupboard** dan **There aren't any shelves**.

Untuk lokasi, **on** berarti di atas permukaan, **under** di bawah, **next to** di sebelah, dan **between** di antara dua benda. **The bag is under the desk** menjelaskan letak tas yang sudah diketahui. Jangan tertukar dengan **The bag is the desk**, yang malah menyamakan tas dan meja. Mulailah deskripsi dari gambaran umum, lalu sebutkan benda beserta posisinya agar pendengar bisa membayangkan ruangan.`,
    examples: [
      { en: "There is a lamp on the desk.", id: "Ada sebuah lampu di atas meja." },
      { en: "There are two boxes under the chair.", id: "Ada dua kotak di bawah kursi." },
      { en: "An old clock is next to the window.", id: "Sebuah jam tua berada di sebelah jendela." },
      { en: "Is there a shelf? Yes, there is.", id: "Apakah ada rak? Ya, ada." }
    ],
    vocabulary: [
      { en: "desk", id: "meja belajar atau kerja" }, { en: "shelf", id: "rak" },
      { en: "window", id: "jendela" }, { en: "under", id: "di bawah" },
      { en: "next to", id: "di sebelah" }, { en: "between", id: "di antara dua hal" }
    ],
    reading: {
      title: "A small study corner",
      text: "My study corner is next to a window. There is a white desk and a blue chair. There are three books on the desk. A small lamp is between the books and a cup. My bag is under the chair. There isn't a computer here. I use a notebook for my English lessons."
    },
    listening: {
      title: "Finding the supplies — synthetic-speech practice script",
      text: "Yuni: Is there a pencil on the table? Eko: No. There are two pencils in the box. Yuni: Where is the box? Eko: It is under the shelf, next to the door. Yuni: Thanks. Is there an eraser too? Eko: Yes. The eraser is in the cup on the table. Yuni: I can see it now."
    },
    output: {
      speaking: "Pilih meja atau ruangan nyata, atau gambarkan ruangan fiktif. Deskripsikan 1–2 menit dari lima kata kunci. Sebutkan minimal empat benda, dua jumlah berbeda, dan tiga posisi. Untuk Gate A, ulangi tanpa naskah dan cek apakah gambarnya dapat dibayangkan dari ucapanmu.",
      writing: "Tulis deskripsi ruangan 60–80 kata. Pakai there is, there are, a/an, serta on, under, atau next to. Bandingkan tulisan dengan ruangan atau gambarmu, lalu revisi jumlah dan lokasi yang tidak cocok. Simpan kedua versi sebagai bukti Gate A, bukan sertifikat tingkat bahasa."
    },
    review: "Tanpa membuka contoh, sebut satu benda dan dua benda dengan there is/are. Jelaskan posisi tiga barang tanpa menunjuknya. Gate A: cek apakah identitas, rutinitas, pertanyaan kebutuhan, dan deskripsi tempat sudah bisa dipahami. Ulangi bagian lemah dengan benda baru; nilai kuis saja tidak membuktikan kemampuan berbicara. Gunakan asesmen baru pada hari 6.",
    quizzes: {
      pattern: [
        { prompt: "Lengkapi: There ___ two chairs next to the desk.", options: ["is", "am", "are"], answer: 2, explanation: "Two chairs berjumlah lebih dari satu, sehingga memakai are." },
        { prompt: "Pilih frasa tunggal yang benar.", options: ["An old chair", "A old chair", "An two chairs"], answer: 0, explanation: "Old dimulai dengan bunyi vokal sehingga memakai an; a/an tidak dipakai untuk jamak." }
      ],
      reading: [
        { prompt: "Di mana tas berada?", options: ["On the desk", "Under the chair", "Next to the cup"], answer: 1, explanation: "Teks menyatakan My bag is under the chair." },
        { prompt: "Apa yang berada di antara buku dan cangkir?", options: ["A computer", "A notebook", "A lamp"], answer: 2, explanation: "Lampu kecil berada between the books and a cup." }
      ],
      listening: [
        { prompt: "Di mana dua pensil berada?", options: ["In the box", "On the table", "In the cup"], answer: 0, explanation: "Eko mengatakan There are two pencils in the box." },
        { prompt: "Di mana penghapus berada?", options: ["Under the shelf", "In the cup on the table", "Next to the door"], answer: 1, explanation: "Penghapus ada di cangkir di atas meja, bukan di lokasi kotak." }
      ]
    },
    assessment: {
      reading: {
        title: "The art room",
        text: "There are four stools in our art room. There is a round table near the back wall. A green basket is under the table. There are six brushes in the basket. A large picture is between the door and the cupboard. There isn't a clock, but there is a calendar next to the cupboard."
      },
      listening: {
        title: "Looking for a key — synthetic-speech assessment script",
        text: "Oki: Where is the office key? Vera: It is on the small shelf above the printer. Oki: Is it next to the red folder? Vera: No, it is between a glass and a yellow box. Oki: Are there any envelopes there? Vera: Yes, there are five envelopes inside the yellow box. Please take one for me."
      },
      readingQuiz: [
        { prompt: "Ada berapa kuas di keranjang?", options: ["Four", "Six", "One"], answer: 1, explanation: "Six brushes adalah jumlah kuas; four adalah jumlah bangku." },
        { prompt: "Apa yang berada di sebelah lemari?", options: ["A clock", "A basket", "A calendar"], answer: 2, explanation: "Teks menyebut tidak ada jam, tetapi ada kalender next to the cupboard." }
      ],
      listeningQuiz: [
        { prompt: "Di antara benda apa kunci berada?", options: ["A glass and a yellow box", "A printer and a folder", "Two envelopes"], answer: 0, explanation: "Vera mengoreksi lokasi menjadi between a glass and a yellow box." },
        { prompt: "Di mana amplop berada?", options: ["Under the printer", "Inside the yellow box", "Next to the red folder"], answer: 1, explanation: "Lima amplop berada inside the yellow box." }
      ]
    }
  },
  {
    week: 5,
    explanation: `### Kebiasaan berbeda dari kegiatan sekarang
**Present simple** menjelaskan kebiasaan: **I read after dinner**. **Present continuous** menjelaskan kegiatan yang sedang berlangsung: **I am reading now**. Bentuknya **am/is/are + kata kerja -ing**. Pilih **I am working**, **she is working**, atau **they are working**. Jangan menulis “I reading” karena be hilang, atau “I am read” karena bentuk -ing hilang.

Kata seperti **usually** dan **every day** sering menandai kebiasaan, sementara **now** dan **at the moment** membantu menunjukkan kegiatan sekarang. Bandingkan **She usually walks to work, but today she is taking a bus**. Pada kebiasaan, she memakai walks; pada kegiatan hari ini, she memakai is taking. Untuk ejaan, **write** menjadi **writing**, sedangkan **sit** menjadi **sitting**. Tidak semua kata cukup ditambah ing tanpa perubahan.

Untuk meminta bantuan, gunakan **Can you help me?** atau **Could you open the door, please?** Could dalam permintaan ini terdengar lebih sopan dan tidak menceritakan masa lalu. Setelah can/could gunakan bentuk dasar: **Could you carry this?**, bukan “Could you carrying this?”. Jawab permintaan secara jelas, misalnya **Yes, of course** atau **Sorry, I can't right now**.`,
    examples: [
      { en: "I usually study at home, but I am studying at the library today.", id: "Biasanya saya belajar di rumah, tetapi hari ini saya sedang belajar di perpustakaan." },
      { en: "She is writing a message now.", id: "Dia sedang menulis pesan sekarang." },
      { en: "Could you carry this box, please?", id: "Bisakah kamu membawakan kotak ini?" },
      { en: "They aren't working at the moment.", id: "Mereka tidak sedang bekerja saat ini." }
    ],
    vocabulary: [
      { en: "usually", id: "biasanya" }, { en: "at the moment", id: "saat ini" },
      { en: "carry", id: "membawa" }, { en: "quiet", id: "tenang atau tidak bising" },
      { en: "help", id: "membantu" }, { en: "move", id: "memindahkan atau berpindah" }
    ],
    reading: {
      title: "A different study morning",
      text: "Every Saturday, Sela studies English at her kitchen table. She usually reads a short story and writes new words in a notebook. Today, her neighbours are repairing their roof, so the kitchen is noisy. Sela is studying at the local library instead. She is sitting near a window and listening to a short practice dialogue with headphones. Her friend Wira is looking for a dictionary on a shelf. Sela wants to write a message, but her pen is empty. She asks Wira, 'Could you lend me a pen, please?' He gives her a blue pen. They usually talk during breaks, but at the moment they are working quietly."
    },
    listening: {
      title: "Help in the shared kitchen — synthetic-speech practice script",
      text: "Mila: Hi, Dito. You usually make lunch at noon. Why are you cooking now? Dito: My cousin is visiting today. We are making an early lunch before her bus leaves. Mila: What are you making? Dito: Vegetable soup. I usually use carrots, but today I am using pumpkin. Could you wash these bowls, please? Mila: Yes, of course. Is your cousin helping? Dito: She is setting the table in the next room. Could you put the clean bowls there? Mila: Certainly. Do you need water too? Dito: Not yet, thanks. There is a full bottle on the table. We are waiting for the bread now."
    },
    output: {
      speaking: "Mainkan dua peran selama 1–2 menit: seseorang sedang mengerjakan tugas dan meminta dua bantuan. Awali dengan kebiasaan, lalu jelaskan apa yang berbeda sekarang. Gunakan can/could dan jawaban yang jelas. Jika sendirian, beri jeda sebelum menjawab sebagai peran kedua.",
      writing: "Tulis 6–8 kalimat yang membandingkan hari biasa dan hari ini. Masukkan dua pasangan usually/now atau every day/today, serta satu permintaan bantuan. Periksa be + -ing dan bentuk dasar setelah could; simpan draft lalu revisi."
    },
    review: "Lihat sekeliling dan buat tiga kalimat kegiatan sekarang, lalu tiga kebiasaan yang benar tentangmu. Jangan menganggap setiap today wajib continuous; maknanya tetap harus kegiatan yang sedang berlangsung. Ulangi permintaan dengan benda berbeda. Kerjakan materi asesmen yang belum dibaca pada hari 6.",
    quizzes: {
      pattern: [
        { prompt: "Lengkapi kegiatan sekarang: They ___ lunch at the moment.", options: ["are making", "makes", "are make"], answer: 0, explanation: "At the moment menunjukkan kegiatan berlangsung; they memakai are + making." },
        { prompt: "Pilih permintaan yang benar.", options: ["Could you carrying this?", "Could you carry this, please?", "Could you carries this?"], answer: 1, explanation: "Setelah could gunakan kata kerja dasar carry." }
      ],
      reading: [
        { prompt: "Mengapa Sela belajar di perpustakaan hari ini?", options: ["Her kitchen has no table.", "Wira works at her house.", "Roof repairs make her kitchen noisy."], answer: 2, explanation: "Tetangga memperbaiki atap sehingga dapur Sela bising." },
        { prompt: "Bantuan apa yang diminta Sela?", options: ["To borrow a pen", "To repair a roof", "To move a table"], answer: 0, explanation: "Pena Sela habis, jadi ia meminta Wira meminjamkan pena." }
      ],
      listening: [
        { prompt: "Mengapa Dito memasak lebih awal?", options: ["He always eats early.", "His cousin's bus leaves after their early lunch.", "The kitchen closes at noon."], answer: 1, explanation: "Dito memasak untuk makan lebih awal sebelum bus sepupunya berangkat." },
        { prompt: "Apa yang sedang dilakukan sepupu Dito?", options: ["Washing bowls", "Buying carrots", "Setting the table"], answer: 2, explanation: "Dito menyebut She is setting the table in the next room." }
      ]
    },
    assessment: {
      reading: {
        title: "A rainy delivery morning",
        text: "Tari usually delivers flowers by bicycle. She starts at nine and visits three shops near the station. This morning, heavy rain is falling, so she is travelling in her uncle's van. Her uncle is driving, and Tari is checking the shop addresses on a paper list. They are carrying roses and small plants. At the first shop, the owner is cleaning the entrance. Tari asks, 'Can you hold the door, please?' The owner stops cleaning and opens it. Tari usually has a break beside the station, but today she is drinking tea inside the flower shop. Her bicycle is still at home."
      },
      listening: {
        title: "Preparing a puppet show — synthetic-speech assessment script",
        text: "Rafi: You usually draw posters on Tuesday, Lala. What are you doing today? Lala: I am making puppets for the children's show. Rafi: Is Nino drawing the poster? Lala: No, he is arranging chairs in the hall. Our teacher is drawing it. Could you cut this paper into small squares, please? Rafi: Sure. Do you need the red paper or the green paper? Lala: The green paper, please. I am using the red paper for hats. Rafi: Where can I sit? Lala: Next to me. There is a free chair here. We usually finish at five, but today we are working until six."
      },
      readingQuiz: [
        { prompt: "Bagaimana Tari bepergian pagi ini?", options: ["By bicycle", "By train", "In her uncle's van"], answer: 2, explanation: "Hujan deras membuat Tari memakai van pamannya, bukan sepeda seperti biasanya." },
        { prompt: "Bantuan apa yang Tari minta dari pemilik toko?", options: ["To check addresses", "To hold the door", "To drive the van"], answer: 1, explanation: "Permintaan Can you hold the door meminta pemilik toko menahan pintu." }
      ],
      listeningQuiz: [
        { prompt: "Apa yang sedang Nino lakukan?", options: ["Arranging chairs", "Drawing the poster", "Making hats"], answer: 0, explanation: "Lala mengoreksi dugaan Rafi: Nino sedang mengatur kursi." },
        { prompt: "Kertas warna apa yang harus Rafi potong?", options: ["Red", "Blue", "Green"], answer: 2, explanation: "Lala meminta green paper; red paper dipakai untuk topi." }
      ]
    }
  },
  {
    week: 6,
    explanation: `### Menceritakan kejadian yang sudah selesai
Gunakan **past simple** untuk kejadian selesai dengan waktu jelas, misalnya **yesterday**, **last night**, atau **last Monday**. Kata kerja beraturan biasanya ditambah **-ed**: **visit → visited**, **clean → cleaned**. Kata kerja tidak beraturan perlu dipelajari lewat contoh: **go → went**, **buy → bought**, dan **have → had**. **I went to the market yesterday** menyatakan perjalanan selesai, bukan rutinitas.

Untuk negatif dan pertanyaan kegiatan, pakai **did** lalu bentuk dasar: **I didn't go**, **Did you buy bread?** Jangan menulis “didn't went” atau “Did you bought?” karena did sudah membawa makna lampau. Jawaban singkatnya **Yes, I did** atau **No, I didn't**. Setelah jawaban singkat, kamu boleh menambahkan detail.

Untuk identitas, keadaan, atau lokasi lampau, gunakan **was/were**, bukan did: **I/he/she/it was**, **you/we/they were**. Contohnya **The shop was busy** dan **Were you tired?** Negatifnya **wasn't/weren't**. Bedakan **I was tired** dari **I worked**; jangan menulis “I was worked” untuk maksud saya bekerja. Ceritakan urutan dengan first, then, dan finally, lalu sebutkan hasil kejadian agar cerita tidak hanya berupa daftar kata kerja.`,
    examples: [
      { en: "I visited my aunt yesterday.", id: "Saya mengunjungi bibi kemarin." },
      { en: "Did you buy milk? No, I didn't.", id: "Apakah kamu membeli susu? Tidak." },
      { en: "We went home because the shop was closed.", id: "Kami pulang karena tokonya tutup." },
      { en: "They were tired, but they finished the work.", id: "Mereka lelah, tetapi mereka menyelesaikan pekerjaan itu." }
    ],
    vocabulary: [
      { en: "yesterday", id: "kemarin" }, { en: "bought", id: "membeli, bentuk lampau buy" },
      { en: "went", id: "pergi, bentuk lampau go" }, { en: "forgot", id: "lupa, bentuk lampau forget" },
      { en: "closed", id: "tutup" }, { en: "finally", id: "akhirnya atau pada langkah terakhir" }
    ],
    reading: {
      title: "The wrong bag",
      text: "Yesterday, Hasan went to the market with his sister. They wanted fruit for a family dinner. First, they bought bananas and oranges. Then they stopped at a small bread stall. Hasan put his shopping bag beside the counter while he paid. When they arrived home, he opened the bag and found tomatoes instead of fruit. He was surprised. They went back to the stall and spoke to the seller. Another customer had Hasan's fruit bag and was waiting there. The two customers exchanged bags. Hasan didn't buy more fruit. Finally, he and his sister returned home, and everyone enjoyed the dinner. Hasan wrote his name on the bag for next time."
    },
    listening: {
      title: "A missing bus card — synthetic-speech practice script",
      text: "Tia: You were late yesterday. What happened? Arman: I left home on time, but I couldn't find my bus card at the stop. Tia: Did you go back home? Arman: Yes, I did. I looked on my desk, but the card wasn't there. Then I checked my jacket. It was in the inside pocket. Tia: Did you catch the next bus? Arman: No, I didn't. I walked to work instead. The weather was cool, so the walk was pleasant. Tia: Was your manager angry? Arman: No. I called her before work started and explained the problem. Today, my card is already in my bag."
    },
    output: {
      speaking: "Ceritakan satu kejadian nyata atau fiktif selama sekitar dua menit dari lima kata kunci. Sebutkan kapan, masalahnya, dua tindakan, dan hasilnya. Setelah itu, jawab tiga pertanyaan buatan sendiri: Where did you go? What did you do? Were you tired? Jangan membaca naskah.",
      writing: "Tulis cerita 80–100 kata tentang satu kejadian kemarin atau minggu lalu. Pakai minimal dua kata kerja lampau beraturan, dua tidak beraturan, satu didn't + bentuk dasar, dan was/were bila sesuai. Garisbawahi penanda waktu, simpan draft, lalu revisi urutan yang membingungkan."
    },
    review: "Ubah I go, I buy, dan I clean menjadi cerita yesterday. Lalu ubah masing-masing menjadi pertanyaan dengan did dan kembalikan kata kerja ke bentuk dasar. Buat satu pertanyaan was/were untuk keadaan. Ingat kembali isi cerita tanpa menyalin; asesmen hari 6 memakai kejadian berbeda.",
    quizzes: {
      pattern: [
        { prompt: "Pilih pertanyaan lampau yang benar.", options: ["Did you went home?", "Did you go home?", "Were you go home?"], answer: 1, explanation: "Setelah did gunakan go; went hanya untuk pernyataan positif tanpa did." },
        { prompt: "Lengkapi: The shops ___ closed yesterday.", options: ["was", "did", "were"], answer: 2, explanation: "The shops jamak, sehingga keadaan lampau memakai were." }
      ],
      reading: [
        { prompt: "Apa yang Hasan temukan di tas saat sampai di rumah?", options: ["Tomatoes", "Bread", "Oranges"], answer: 0, explanation: "Tas yang tertukar berisi tomatoes, bukan buah yang ia beli." },
        { prompt: "Bagaimana Hasan mendapatkan buahnya kembali?", options: ["He bought more fruit.", "He exchanged bags with another customer.", "His sister grew new fruit."], answer: 1, explanation: "Pelanggan lain menunggu di kios dan mereka menukar tas; Hasan tidak membeli lagi." }
      ],
      listening: [
        { prompt: "Di mana kartu bus Arman ditemukan?", options: ["On his desk", "At the bus stop", "In his jacket pocket"], answer: 2, explanation: "Arman menemukan kartu di inside pocket jaketnya." },
        { prompt: "Bagaimana Arman akhirnya berangkat bekerja?", options: ["He walked.", "He caught the next bus.", "His manager drove him."], answer: 0, explanation: "Ia tidak naik bus berikutnya; ia berjalan kaki." }
      ]
    },
    assessment: {
      reading: {
        title: "An unexpected museum visit",
        text: "Last Wednesday, Putri took her nephew to the park. They arrived at eleven, but the gate was locked because workers were repairing a path. Putri checked a map and found a small museum nearby. They walked there and bought tickets. Inside, they looked at old bicycles and watched a short film about the town. Her nephew liked a red bicycle best. They didn't eat at the museum cafe because they had sandwiches in their bag. After lunch, they drew pictures in the museum garden. They returned home at three. The park visit failed, but they enjoyed their new plan."
      },
      listening: {
        title: "Repairing a broken chair — synthetic-speech assessment script",
        text: "Dara: Did you finish your room yesterday, Fikri? Fikri: Not everything. I cleaned the floor and moved the bed, but my chair broke. Dara: Were you hurt? Fikri: No, I wasn't. I was standing beside it when one leg fell off. Dara: Did you buy a new chair? Fikri: No. My neighbour brought some tools and helped me repair it. Dara: How long did that take? Fikri: About forty minutes. We finished before lunch. Then I painted the chair white. Dara: Can you use it now? Fikri: Not yet. The paint is still wet, so I am using a stool today."
      },
      readingQuiz: [
        { prompt: "Mengapa Putri dan keponakannya tidak masuk taman?", options: ["They lost their tickets.", "The weather was too hot.", "Workers were repairing a path."], answer: 2, explanation: "Gerbang dikunci karena pekerja sedang memperbaiki jalan setapak." },
        { prompt: "Apa yang mereka lakukan setelah makan siang?", options: ["Watched the film again", "Drew pictures in the garden", "Bought a bicycle"], answer: 1, explanation: "Setelah makan siang, mereka menggambar di taman museum." }
      ],
      listeningQuiz: [
        { prompt: "Siapa yang membantu Fikri memperbaiki kursi?", options: ["His neighbour", "Dara", "A shop assistant"], answer: 0, explanation: "Tetangga membawa alat dan membantu memperbaiki kursi." },
        { prompt: "Mengapa Fikri belum menggunakan kursinya?", options: ["A leg is still missing.", "He sold it.", "The paint is still wet."], answer: 2, explanation: "Perbaikan selesai, tetapi cat masih basah sehingga ia memakai bangku." }
      ]
    }
  },
  {
    week: 7,
    explanation: `### Jumlah, harga, dan pilihan
Benda yang bisa dihitung memakai bentuk tunggal atau jamak: **one apple**, **three apples**. Bahan seperti **water** dan **rice** biasanya tidak dihitung langsung. Gunakan wadah atau ukuran: **two bottles of water**, **a bag of rice**. Tanyakan **How many apples?** untuk benda terhitung dan **How much water?** untuk bahan tak terhitung. **How much is it?** adalah pertanyaan harga. Hindari “three waters” pada latihan ini; sebut botol atau gelas agar jumlahnya jelas.

Untuk membandingkan dua pilihan, kata sifat pendek biasanya memakai **-er + than**: **cheaper than**, **smaller than**. Akhiran y berubah menjadi i pada **easy → easier**. Kata sifat panjang memakai **more**: **more comfortable than**. Jangan memakai keduanya sekaligus: “more cheaper” salah. Bentuk khusus **good → better** perlu diingat.

Pilihan terbaik bergantung kebutuhan. Harga lebih murah tidak otomatis berarti semua hal lebih baik. Sebutkan ukuran, harga, jarak, atau layanan yang benar-benar tersedia dalam teks, lalu beri alasan: **I choose A because it is cheaper**. Dalam dua sumber fiktif minggu ini, pisahkan pendapat penulis dari rincian harga dan batas pengalamannya. Itu membantu memilih tanpa membuat klaim yang tidak didukung.`,
    examples: [
      { en: "How many bottles of water do we need?", id: "Berapa botol air yang kita butuhkan?" },
      { en: "How much rice is in the bag?", id: "Berapa banyak beras di dalam kantong itu?" },
      { en: "The bus is cheaper than the taxi.", id: "Bus lebih murah daripada taksi." },
      { en: "This seat is more comfortable than that seat.", id: "Kursi ini lebih nyaman daripada kursi itu." }
    ],
    vocabulary: [
      { en: "cheaper", id: "lebih murah" }, { en: "more expensive", id: "lebih mahal" },
      { en: "bottle", id: "botol" }, { en: "delivery", id: "pengantaran" },
      { en: "choose", id: "memilih" }, { en: "comfortable", id: "nyaman" }
    ],
    reading: {
      title: "Two fictional shoppers compare laundry services",
      text: "Source A — fictional note by Rina: I choose Quick Wash for my work shirts. One bag costs 24,000 rupiah, and the clothes are ready the next day. Soft Wash costs 32,000 rupiah and takes two days. Quick Wash is cheaper and faster. However, I carry my own clothes there. I have only used its basic washing service, not its ironing service.\n\nSource B — fictional note by Beni: I choose Soft Wash because it collects clothes from my house and brings them back. Delivery is included in the 32,000-rupiah price. This is easier for me because I work at home. I have only sent towels, so I cannot describe how well it washes delicate shirts."
    },
    listening: {
      title: "Choosing food for a picnic — synthetic-speech practice script",
      text: "Seller: Good morning. What do you need? Nanda: We need fruit for a picnic. How much are the apples? Seller: A bag of six apples is thirty thousand rupiah. A bag of eight bananas is twenty thousand. Nanda: The bananas are cheaper. Are they ready to eat? Seller: Yes. The apples are firmer and easier to carry, but both are ready to eat. Nanda: We have a short walk, so I will take the bananas. We also need water. How many bottles are in that pack? Seller: Four small bottles. Each bottle holds half a litre. Nanda: One pack is enough. Please put the fruit and water in separate bags."
    },
    output: {
      speaking: "Lakukan role-play memilih dua layanan selama sekitar dua menit. Pakai dua sumber fiktif bacaan: tanyakan harga, waktu selesai, dan pengantaran. Pilih satu untuk kebutuhan tokohmu dengan dua alasan, lalu sebutkan satu hal yang belum diketahui. Tukar peran penjual dan pelanggan.",
      writing: "Tulis pesan 80–100 kata kepada teman untuk memilih Quick Wash atau Soft Wash. Cantumkan harga dan kebutuhanmu, dua perbandingan, serta satu batas informasi dari sumber A atau B. Jangan menyebut pengalaman fiktif Rina atau Beni sebagai pengalamanmu. Revisi klaim yang terlalu mutlak."
    },
    review: "Kelompokkan apple, water, bottle, dan rice menjadi benda terhitung atau bahan tak terhitung. Buat pertanyaan how many/how much. Ucapkan cheaper than dan more comfortable than tanpa more cheaper. Jelaskan mengapa dua penulis memilih berbeda. Asesmen hari 6 memberi layanan dan angka baru.",
    quizzes: {
      pattern: [
        { prompt: "Lengkapi: How ___ bottles of water do you need?", options: ["much", "many", "more"], answer: 1, explanation: "Bottles adalah benda terhitung jamak sehingga memakai how many." },
        { prompt: "Pilih perbandingan yang benar.", options: ["A is more cheaper than B.", "A is cheap than B.", "A is cheaper than B."], answer: 2, explanation: "Cheap memakai cheaper; jangan menambahkan more pada bentuk -er." }
      ],
      reading: [
        { prompt: "Mengapa Beni memilih Soft Wash meskipun lebih mahal?", options: ["It includes collection and delivery.", "It finishes on the same day.", "It costs less than Quick Wash."], answer: 0, explanation: "Beni bekerja di rumah dan menghargai layanan jemput-antar yang termasuk harga." },
        { prompt: "Kesimpulan mana yang sesuai batas pengalaman kedua sumber?", options: ["Both have tested delicate shirts at Soft Wash.", "Beni cannot judge Soft Wash on delicate shirts.", "Rina has tested Quick Wash ironing."], answer: 1, explanation: "Beni hanya mengirim handuk; ia menyatakan tidak bisa menilai pencucian kemeja halus." }
      ],
      listening: [
        { prompt: "Mengapa Nanda memilih pisang?", options: ["Apples are not ready to eat.", "Bananas are easier to carry than apples.", "Bananas are cheaper and the walk is short."], answer: 2, explanation: "Pisang lebih murah; perjalanan singkat membuat keunggulan apel yang lebih mudah dibawa tidak menjadi prioritas." },
        { prompt: "Berapa botol dalam satu kemasan air?", options: ["Four", "Six", "Eight"], answer: 0, explanation: "Penjual menyebut four small bottles; enam adalah jumlah apel dan delapan jumlah pisang." }
      ]
    },
    assessment: {
      reading: {
        title: "Two fictional notes about bicycle hire",
        text: "Source A — fictional note by Fani: I prefer Hill Bikes for short trips. A bicycle costs 18,000 rupiah for one hour. River Bikes costs 27,000 rupiah for one hour. Hill Bikes is closer to my hostel, so collecting a bicycle is easier. I only rode on flat roads, so I cannot judge the bikes on hills.\n\nSource B — fictional note by Yusuf: I choose River Bikes. Its price includes a helmet and a map. At Hill Bikes, a helmet costs an extra 7,000 rupiah. I like having everything ready in one place. I tried River Bikes once, on a dry afternoon; I do not know its service in heavy rain."
      },
      listening: {
        title: "Buying drinks for a workshop — synthetic-speech assessment script",
        text: "Assistant: Can I help you? Rena: Yes. We need drinks for a workshop. How much is this carton of juice? Assistant: A one-litre carton is sixteen thousand rupiah. A two-litre bottle is twenty-eight thousand. Rena: The larger bottle is cheaper per litre, but we only need one litre of juice. I will take the carton. We also need cups. Assistant: There are ten cups in the small pack and twenty in the large pack. Rena: There are fifteen people, so I need the large pack. Do you have cold water? Assistant: Yes, in the fridge. Rena: Please add three bottles. We already have some at the workshop."
      },
      readingQuiz: [
        { prompt: "Mengapa Fani memilih Hill Bikes?", options: ["It has free helmets.", "It is cheaper and closer to her hostel.", "It has been tested in rain."], answer: 1, explanation: "Fani menyebut harga sewa lebih rendah serta lokasi lebih dekat; helm gratis tidak disebut untuk Hill Bikes." },
        { prompt: "Apa batas pengalaman Yusuf?", options: ["He only rode on hills.", "He tried both services in rain.", "He used River Bikes once in dry weather."], answer: 2, explanation: "Yusuf baru mencoba sekali pada sore kering dan tidak tahu layanan saat hujan deras." }
      ],
      listeningQuiz: [
        { prompt: "Mengapa Rena membeli karton satu liter?", options: ["She only needs one litre.", "It is cheaper per litre than the bottle.", "The larger bottle is empty."], answer: 0, explanation: "Botol besar lebih murah per liter, tetapi kebutuhannya hanya satu liter." },
        { prompt: "Berapa isi kemasan gelas yang Rena pilih?", options: ["Ten cups", "Twenty cups", "Fifteen cups"], answer: 1, explanation: "Untuk lima belas orang, Rena memilih kemasan besar yang berisi dua puluh gelas." }
      ]
    }
  },
  {
    week: 8,
    explanation: `### Rencana dan konfirmasi janji
Gunakan **be going to + kata kerja dasar** untuk rencana yang sudah dipikirkan: **I am going to study tonight**. Sesuaikan be dengan subjek: **she is going to come**, **we are going to meet**. Jangan menghilangkan be pada “I going to study” atau menulis “going to studying”. Untuk bertanya, gunakan **Are you going to join us?** Negatifnya **I'm not going to come**.

**Will + kata kerja dasar** sering dipakai untuk keputusan saat berbicara, tawaran, atau janji: **I'll bring the notes**. **I'll** berarti I will, dan **won't** berarti will not. Will tidak berubah untuk she atau they: **She will call**, bukan “She wills call”. Going to dan will kadang sama-sama mungkin; konteks rencana sebelumnya atau keputusan sekarang membantu memilih, bukan aturan bahwa semua masa depan wajib will.

Janji yang jelas menyebut **hari, tanggal bila perlu, jam, tempat, dan tindakan**. Gunakan **on Friday**, **at ten**, serta **at the library**. Bila waktu tidak cocok, tawarkan alternatif: **Can we meet at eleven instead?** Tutup dengan konfirmasi, misalnya **So, Friday at eleven at the library**. Gate B memeriksa apakah pesanmu bisa digunakan untuk bertindak; hasilnya bukan sertifikat atau bukti otomatis tingkat bahasa.`,
    examples: [
      { en: "We are going to meet on Friday at ten.", id: "Kami berencana bertemu pada Jumat pukul sepuluh." },
      { en: "The bag is heavy. I'll carry it.", id: "Tasnya berat. Akan saya bawakan." },
      { en: "Can we meet at eleven instead?", id: "Bisakah kita bertemu pukul sebelas sebagai gantinya?" },
      { en: "I won't forget the room key.", id: "Saya tidak akan lupa membawa kunci ruangan." }
    ],
    vocabulary: [
      { en: "plan", id: "rencana" }, { en: "confirm", id: "mengonfirmasi atau memastikan" },
      { en: "instead", id: "sebagai gantinya" }, { en: "available", id: "tersedia atau punya waktu" },
      { en: "bring", id: "membawa ke tempat tujuan" }, { en: "appointment", id: "janji pertemuan" }
    ],
    reading: {
      title: "A confirmed study meeting",
      text: "Hi Fira, we are going to practise our English presentation this week. Our first plan was to meet at the library on Thursday at two, but the study room is not available then. I booked it for Friday at three instead. The booking lasts one hour. Please meet me at the library entrance ten minutes before the booking starts. I am going to bring my laptop and the picture cards. You said you could bring the printed outline. If the printer is still broken, send me the file and I will print it at work. Please reply today to confirm the new day and time. We can practise the introduction first and then ask each other questions. Thanks, Deni."
    },
    listening: {
      title: "Arranging a neighbourhood clean-up — synthetic-speech practice script",
      text: "Susi: We are going to clean the community garden on Sunday. Can you join us, Farid? Farid: Yes. What time are you going to start? Susi: At eight in the morning, by the main gate. Farid: I have to take my mother to the station first. Can I come at nine instead? Susi: Of course. We are going to work until eleven. Farid: What should I bring? Susi: We have gloves, but we need rubbish bags. Farid: I'll bring a pack. Will we have a break? Susi: Yes, at ten. I'll bring drinking water too. Farid: Great. So I will meet you at the garden gate on Sunday at nine, with the bags."
    },
    output: {
      speaking: "Simulasikan percakapan 2–3 menit untuk mengatur pertemuan. Usulkan hari, jam, tempat, dan tugas. Peran kedua menolak satu waktu lalu menawarkan alternatif. Akhiri dengan konfirmasi lengkap dan satu janji memakai will. Rekam dari kata kunci jika memungkinkan; cek apakah jadwal akhirnya tidak ambigu.",
      writing: "Tulis pesan konfirmasi 80–100 kata tentang pertemuan fiktif baru, bukan menyalin Deni. Sebutkan perubahan dari rencana awal, jadwal final, tempat bertemu, serta siapa membawa apa. Minta balasan konfirmasi. Simpan draft dan revisi; gunakan sebagai bukti Gate B bersama rekaman dan asesmen baru."
    },
    review: "Tanpa contoh, jelaskan satu rencana dengan going to dan buat satu tawaran spontan dengan will. Untuk Gate B, cek kembali kebiasaan vs sekarang, cerita lampau, perbandingan layanan, dan penjadwalan. Pilih dua kelemahan berdasarkan hasil tugas nyata. Pada hari 6 gunakan materi baru; ulangi keterampilan lemah sebelum menambah kesulitan.",
    quizzes: {
      pattern: [
        { prompt: "Lengkapi rencana: She ___ going to visit her aunt.", options: ["is", "will", "does"], answer: 0, explanation: "Going to membutuhkan be yang sesuai; untuk she gunakan is." },
        { prompt: "Tas temanmu terlihat berat. Pilih tawaran yang benar.", options: ["I'll carrying it.", "I'll carry it.", "I will to carry it."], answer: 1, explanation: "Will diikuti kata kerja dasar carry, tanpa -ing atau to." }
      ],
      reading: [
        { prompt: "Kapan pemesanan ruang belajar yang sudah dikonfirmasi dimulai?", options: ["Thursday at two", "Friday at two fifty", "Friday at three"], answer: 2, explanation: "Ruangan dipesan Friday at three; two fifty adalah waktu bertemu di pintu masuk." },
        { prompt: "Apa yang Deni tawarkan jika printer Fira masih rusak?", options: ["To print the file at work", "To cancel the meeting", "To buy a new printer"], answer: 0, explanation: "Deni meminta berkas dikirim dan menawarkan mencetaknya di tempat kerja." }
      ],
      listening: [
        { prompt: "Pukul berapa Farid akhirnya akan datang?", options: ["Eight", "Nine", "Ten"], answer: 1, explanation: "Kegiatan mulai pukul delapan, tetapi Farid mengonfirmasi datang pukul sembilan." },
        { prompt: "Apa yang akan dibawa Farid?", options: ["Gloves", "Drinking water", "Rubbish bags"], answer: 2, explanation: "Farid menawarkan membawa satu pak kantong sampah; air minum dibawa Susi." }
      ]
    },
    assessment: {
      reading: {
        title: "A changed bicycle repair appointment",
        text: "Hello Galih, this is Nara from West Street Repairs. Your original bicycle appointment was on Tuesday at eleven. Our mechanic has a training session that morning, so we need to change it. You agreed by phone to come on Wednesday at one thirty. Please bring your bicycle and the old receipt. We are going to check the brakes first and then replace the front light. You can collect the bicycle at four thirty the same afternoon. If we find another problem, we will call before doing extra work. Please reply to confirm Wednesday at one thirty. We will not charge you for the brake check, but the new light costs extra."
      },
      listening: {
        title: "Planning a club recording — synthetic-speech assessment script",
        text: "Tomi: We are going to record our club introduction on Saturday. Are you free at two, Anisa? Anisa: I have a cooking class until two thirty. Could we start at three instead? Tomi: Yes. The music room is free from three to five. Let's meet outside it at two fifty-five. Anisa: Good. I am going to bring the microphone. What about the script? Tomi: I'll print two copies tonight. Anisa: Will Seno join us? Tomi: No, he is going to visit his grandparents. We can record his part next week. Anisa: All right. Saturday, outside the music room, at two fifty-five. I'll bring the microphone and a spare cable."
      },
      readingQuiz: [
        { prompt: "Kapan Galih diminta membawa sepedanya sesuai janji baru?", options: ["Tuesday at eleven", "Wednesday at four thirty", "Wednesday at one thirty"], answer: 2, explanation: "Janji baru adalah Wednesday at one thirty; four thirty adalah waktu pengambilan." },
        { prompt: "Apa yang bengkel janjikan sebelum mengerjakan masalah tambahan?", options: ["To replace every part", "To call Galih", "To cancel the appointment"], answer: 1, explanation: "Bengkel akan menelepon terlebih dahulu sebelum melakukan pekerjaan ekstra." }
      ],
      listeningQuiz: [
        { prompt: "Di mana dan kapan mereka sepakat bertemu?", options: ["Outside the music room at 2:55", "Inside the kitchen at 2:30", "Outside the music room at 2:00"], answer: 0, explanation: "Waktu rekaman mulai pukul tiga, tetapi waktu bertemu yang dikonfirmasi adalah 2:55 di luar ruang musik." },
        { prompt: "Mengapa Seno tidak ikut pada Sabtu?", options: ["He will print the script.", "He has a cooking class.", "He is going to visit his grandparents."], answer: 2, explanation: "Tomi mengatakan Seno akan mengunjungi kakek-neneknya; kelas memasak milik Anisa." }
      ]
    }
  }
];
