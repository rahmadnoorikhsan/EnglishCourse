// Original assessment scenarios aligned to 03-KURIKULUM-26-MINGGU.md.
// Rubric and evidence conditions: 04-EVALUASI.md, sections 2–5; not CEFR certification.
const writing = (task) => `${task} Tulis dalam bahasa Inggris tanpa AI/penerjemah paragraf; simpan draft mandiri sebelum menerima feedback. Setelah feedback, kirim revisi sebagai percobaan terhubung, bukan bukti mandiri baru. Panjang adalah sasaran latihan, bukan syarat lulus otomatis.`;
const speaking = (task) => `${task} Gunakan maksimal lima kata kunci, bukan membaca naskah. Rekam jawaban lanjutan dalam audio yang sama. Jika ada partner, minta ia mengajukan pertanyaan; jika tidak, jawab pemantik sendiri dan nyatakan simulasi, bukan interaksi spontan terverifikasi. Sertakan audio untuk penilaian keterpahaman; teks saja tidak membuktikan pelafalan atau kelancaran. Durasi adalah sasaran, bukan syarat lulus otomatis.`;
const phase = (task) => `${task} Kerjakan tulisan baru tanpa AI/penerjemah paragraf dan simpan draft sebelum feedback. Untuk rekaman, gunakan maksimal lima kata kunci, bukan naskah; sertakan respons pertanyaan lanjutan. Catat bantuan dan apakah pertanyaan diajukan partner atau dijawab sebagai simulasi sendiri. Jangan klaim simulasi sebagai interaksi spontan. Penilaian AI bersifat sementara, bukan verifikasi manusia, bukti listening, atau sertifikat CEFR. Panjang/durasi merupakan sasaran latihan, bukan kriteria tunggal kelulusan.`;

const archiveSource = 'Sumber fiktif untuk latihan: “Labels Before Shelves”, Mira Seno. The neighbourhood archive tried colour labels on three shelves for one afternoon. Two volunteers said the labels helped them return folders. No retrieval times were recorded. Mira recommends a longer trial before changing the whole archive.';
const lectureSource = 'Catatan ceramah fiktif “A Pause for Questions”, pembicara Tia Laras: A community workshop added a two-minute question pause after each demonstration. In one practice session, four of seven fictional participants asked about a step they had missed. The speaker suggests the pause may expose confusion. There was no comparison session, and later task performance was not measured.';
const comparisonSources = 'Dua sumber fiktif: A, “One Borrowing Desk”, Eko Nara: A single borrowing desk gives residents one place to ask for tools. However, a queue may form on busy Saturdays. No waiting times have been measured. B, “Bookings by Message”, Sela Ranu: Advance messages may spread tool collections across the day. Residents without reliable phones still need a walk-in option. The proposal has not been tested.';
const argumentSources = 'Dua sumber fiktif: A, “Open Practice Hour”, Vina Danu: A drop-in music practice hour lets beginners request help when they need it, but demand is unpredictable. This is a proposal, not an evaluated programme. B, “Reserved Practice Slots”, Arga Seno: Reserved slots give each player a predictable turn. Late cancellations can leave equipment unused. No attendance comparison is available.';
const presentationSources = 'Dua sumber fiktif: A, “Printed Routes”, Kira Nala: Printed route cards may help new museum volunteers find rooms without a phone. Cards must be replaced when displays move. B, “A Guide on Screen”, Dito Arsa: A shared digital guide can be updated quickly, but some rooms have weak reception. Neither author measured navigation errors or costs.';
const capstoneSources = 'Dua sumber fiktif baru: A, “A Quiet Repair Queue”, Luki Sena: Numbered repair tickets may keep the order clear at a community repair stall. Tickets alone do not record what help a visitor needs. The idea has not been tested. B, “A Welcome Conversation”, Prita Nara: A brief arrival conversation lets a volunteer identify repair needs, but a long conversation may delay the queue. No waiting times or repair outcomes have been measured.';
const finalSources = 'Dua sumber fiktif baru: A, “A Seed Record”, Hana Reka: A paper seed-exchange record can show what was borrowed and what growing advice was given. It depends on legible entries and safe storage. B, “A Monthly Seed Circle”, Bima Sora: A monthly discussion may let gardeners explain problems and share advice. People who cannot attend need another way to contribute. Neither proposal has been tested, and neither source measures plant growth.';

export const masteryTasks = [
  {
    week: 1,
    objective: 'Menyampaikan identitas dan asal dengan be, kata ganti, serta membedakan identitas dari kegiatan.',
    title: 'Anggota baru klub menggambar',
    questions: [
      { id: 'w1-q1', prompt: 'Perbaiki satu kata saja: “We is new members.” Tulis seluruh kalimat.', accepted: ['We are new members.'], explanation: 'We adalah subjek jamak sehingga memakai are, bukan is. Coba pasangkan I–am, he/she–is, we/they–are sebelum menulis ulang.' },
      { id: 'w1-q2', prompt: 'Lengkapi satu kata: “Dewi is a baker. ___ is from Tegal.” Dewi adalah seorang perempuan.', accepted: ['She'], explanation: 'She menggantikan Dewi sebagai subjek perempuan tunggal; her adalah bentuk kepemilikan/objek, bukan subjek di sini.' },
      { id: 'w1-q3', prompt: 'Perbaiki dengan menghapus satu kata: “I am draw every day.” Tulis seluruh kalimat.', accepted: ['I draw every day.'], explanation: 'Draw sudah merupakan kata kerja kegiatan. Jangan sisipkan am sebelum bentuk dasar draw; bandingkan dengan I am an artist untuk identitas.' },
      { id: 'w1-q4', prompt: 'Ubah pernyataan ini menjadi pertanyaan ya/tidak, tanpa menambah kata lain: “They are from Pontianak.”', accepted: ['Are they from Pontianak?'], explanation: 'Dalam pertanyaan dengan be, are berpindah ke depan subjek: Are they ...? Tidak perlu do untuk pola identitas ini.' }
    ],
    writingTask: writing('Kamu menyambut anggota baru klub menggambar bernama Nuri, dari Pekalongan, seorang penjahit; temannya Oka berasal dari Kupang dan seorang pelajar. Tulis pesan 5–8 kalimat kepada anggota klub. Perkenalkan keduanya dengan kata ganti yang jelas, sebutkan peran dan asal, serta jelaskan bahwa Nuri bukan guru. Tambahkan satu kegiatan klub dengan kata kerja draw atau learn tanpa be yang tidak perlu.'),
    speakingTask: speaking('Mainkan peran anggota baru klub kebun bernama Sinta, dari Madiun, seorang juru masak. Perkenalkan diri selama 30–60 detik, eja nama, sebut asal dan peran, lalu jelaskan bahwa kamu bukan pemimpin klub. Jawab tiga pemantik: What is your name? Where are you from? Are you the club leader?'),
    phaseTask: null
  },
  {
    week: 2,
    objective: 'Menjelaskan rutinitas dan jadwal menggunakan present simple I/you, have/like, serta waktu yang jelas.',
    title: 'Jadwal di kios bunga',
    questions: [
      { id: 'w2-q1', prompt: 'Perbaiki dengan menghapus satu kata: “I am have lunch at one.” Tulis seluruh kalimat.', accepted: ['I have lunch at one.'], explanation: 'Have adalah kata kerja utama untuk kegiatan makan. I have tidak memakai am; am diperlukan untuk identitas atau sifat seperti I am hungry.' },
      { id: 'w2-q2', prompt: 'Isi dua preposisi berurutan, pisahkan dengan koma: “I deliver flowers ___ Friday ___ ten.”', accepted: ['on, at', 'on at'], explanation: 'On menandai hari, sedangkan at menandai jam. Ulangi dengan hari dan jam lain agar tidak hanya mengingat contoh.' },
      { id: 'w2-q3', prompt: 'Jadwal tertulis: “Packing: 08:45; opening: 09:15.” What time do you open? Jawab dengan jam angka saja dalam format 24 jam HH:MM.', accepted: ['09:15'], explanation: 'Pertanyaannya jam membuka, bukan jam mengepak. Cocokkan nama kegiatan sebelum membaca angka.' },
      { id: 'w2-q4', prompt: 'Perbaiki satu kata agar cocok dengan subjek I: “I likes growing roses.” Tulis seluruh kalimat.', accepted: ['I like growing roses.'], explanation: 'I memakai bentuk dasar like untuk kesukaan. Likes dipakai bersama he/she/it, bukan I. Subjek menentukan bentuk kata kerja.' }
    ],
    writingTask: writing('Kamu membantu kios bunga fiktif: Senin dan Rabu menata bunga pukul 08.00, Jumat mengantar bunga pukul 10.30, Sabtu berlatih menggambar pukul 16.00. Buat jadwal ringkas dan 6–8 kalimat kepada teman yang ingin membantu. Gunakan I have untuk satu waktu makan yang kamu tentukan, I like untuk kesukaan, serta on dan at dengan tepat. Bedakan waktu mulai setiap kegiatan.'),
    speakingTask: speaking('Jelaskan rutinitas penjaga akuarium fiktif selama sekitar 60 detik: memberi makan ikan Selasa dan Kamis pukul 07.15, membersihkan kaca Sabtu pukul 09.00. Tambahkan satu kesukaan dan waktu istirahat pilihanmu. Jawab: What time do you feed the fish? What do you do on Saturday? Do you like the morning routine?'),
    phaseTask: null
  },
  {
    week: 3,
    objective: 'Membentuk pertanyaan dan negatif kegiatan dengan do/does serta membedakannya dari pertanyaan be.',
    title: 'Mencari kebutuhan relawan',
    questions: [
      { id: 'w3-q1', prompt: 'Perbaiki satu kata: “Does Faris needs gloves?” Tulis seluruh pertanyaan.', accepted: ['Does Faris need gloves?'], explanation: 'Does sudah membawa penanda orang ketiga; kata kerja setelahnya kembali ke need, bukan needs.' },
      { id: 'w3-q2', prompt: 'Ubah menjadi negatif dengan don’t atau do not: “We use plastic bags.” Tulis seluruh kalimat tanpa mengubah kata lainnya.', accepted: ["We don't use plastic bags.", 'We do not use plastic bags.'], explanation: 'We menggunakan do not/don’t + use. Tidak perlu are karena use adalah kegiatan, bukan identitas.' },
      { id: 'w3-q3', prompt: 'Isi satu kata tanya untuk lokasi: “___ does the volunteer keep the gloves?”', accepted: ['Where'], explanation: 'Where menanyakan tempat. When menanyakan waktu dan what menanyakan hal/benda; pilih sesuai informasi yang dibutuhkan.' },
      { id: 'w3-q4', prompt: 'Seorang petugas memang sedang siap. Jawab singkat positif dengan tiga kata: “Is the caretaker ready?” Gunakan he.', accepted: ['Yes, he is.'], explanation: 'Pertanyaan memakai is, jadi jawabannya Yes, he is, bukan Yes, he does. Cocokkan kata bantu jawaban dengan pertanyaan.' }
    ],
    writingTask: writing('Kamu menyiapkan relawan di tempat penampungan hewan fiktif. Diketahui Lala bekerja Minggu, membutuhkan sepatu tertutup, dan tidak membawa kendaraan; lokasi berkumpul adalah gerbang timur pukul 08.30. Tulis lima pertanyaan asli beserta jawabannya untuk relawan baru: sertakan do, does, where, when, satu pertanyaan dengan be, dan satu jawaban negatif. Pertahankan fakta skenario.'),
    speakingTask: speaking('Simulasikan percakapan sekitar dua menit dengan anggota baru tim bersih pantai. Sebagai koordinator, tanyakan kebutuhan sarung tangan, lokasi tinggal, dan hari yang tersedia; sebagai anggota, berikan jawaban yang konsisten serta satu penolakan. Jawab tiga lanjutan: Does your friend need gloves? Where do you meet? Are you ready? Tentukan fakta sendiri dan jangan mengubahnya di tengah percakapan.'),
    phaseTask: null
  },
  {
    week: 4,
    objective: 'Mendeskripsikan ruang dengan jumlah, there is/are, artikel, plural, dan lokasi yang tidak ambigu.',
    title: 'Sudut kegiatan di balai warga',
    questions: [
      { id: 'w4-q1', prompt: 'Perbaiki satu kata: “There is four cushions by the door.” Tulis seluruh kalimat.', accepted: ['There are four cushions by the door.'], explanation: 'Four cushions lebih dari satu, jadi gunakan there are. Cocokkan bentuk be dengan jumlah benda, bukan dengan kata door di akhir.' },
      { id: 'w4-q2', prompt: 'Isi a atau an: “There is ___ orange cushion on the bench.”', accepted: ['an'], explanation: 'Orange diawali bunyi vokal, jadi an orange cushion. Artikel mengikuti bunyi kata sesudahnya, walaupun bendanya cushion.' },
      { id: 'w4-q3', prompt: 'Tulis bentuk jamak dari box untuk melengkapi “three ___”. Jawab satu kata.', accepted: ['boxes'], explanation: 'Box menjadi boxes, bukan boxs. Akhiran -x membutuhkan -es dalam bentuk jamak ini.' },
      { id: 'w4-q4', prompt: 'The map is on the wall. The bench is directly below it. Lengkapi lokasi peta dengan satu kata: “The map is ___ the bench.”', accepted: ['above'], explanation: 'Jika bangku di bawah peta, peta berada above bangku. Periksa titik acuan; jangan membalik hubungan benda.' }
    ],
    writingTask: writing('Tulis 60–80 kata untuk tamu balai warga yang mencari sudut permainan: ada satu bangku di bawah peta, empat bantal di atas bangku, dua kotak di dekat pintu, dan tidak ada televisi. Gunakan there is/are, satu kalimat negatif, serta sedikitnya dua ungkapan lokasi. Jelaskan bagaimana tamu mengenali tempat itu tanpa mengarang benda tambahan sebagai fakta.'),
    speakingTask: speaking('Deskripsikan ruang kerajinan fiktif selama 1–2 menit: satu lemari di samping pintu, tiga keranjang di bawah meja, sebuah gambar di atas meja pada dinding, dan dua kursi di dekat jendela. Jawab: Where are the baskets? How many chairs are there? Is there a cupboard near the door? Beri lokasi yang membuat pendengar dapat membayangkan ruang.'),
    phaseTask: phase('Gate A — skenario baru: kamu menyambut Ibel, relawan taman baca dari Cilacap. Ia datang Sabtu pukul 09.00. Ruang kegiatan mempunyai satu meja di tengah, tiga kursi di dekat jendela, rak di samping pintu, dan tidak ada komputer. Tulisan: buat pesan sambutan 60–80 kata yang mengenalkan Ibel, menyebut hari/jam, dan menjelaskan ruang dengan jumlah/lokasi yang benar. Rekaman: perkenalkan Ibel lalu pandu pengunjung membayangkan ruang selama 1–2 menit. Jawab: Where is the shelf? How many chairs are there? Is Ibel from Cilacap?')
  },
  {
    week: 5,
    objective: 'Membedakan kebiasaan dari kegiatan sekarang serta meminta bantuan dengan can/could.',
    title: 'Hari berbeda di toko sepeda',
    questions: [
      { id: 'w5-q1', prompt: 'Isi bentuk repair yang tepat: “I usually ___ bicycles after lunch.” Jawab satu kata.', accepted: ['repair'], explanation: 'Usually menandai kebiasaan. Dengan I, gunakan bentuk dasar repair, bukan repairing tanpa be.' },
      { id: 'w5-q2', prompt: 'Lengkapi menggunakan check: “At the moment, she ___ the brakes.” Tulis hanya dua kata yang hilang.', accepted: ['is checking'], explanation: 'Kegiatan saat ini memakai is + checking untuk she. She checking kehilangan be; she is check kehilangan -ing.' },
      { id: 'w5-q3', prompt: 'Perbaiki hanya bentuk kata kerja: “Could you holding the wheel, please?” Tulis seluruh pertanyaan.', accepted: ['Could you hold the wheel, please?'], explanation: 'Could diikuti kata kerja dasar hold, bukan holding atau to hold. Gunakan pola ini untuk permintaan bantuan yang sopan.' },
      { id: 'w5-q4', prompt: '“They wash the bikes every Sunday, but today they are painting the sign.” Kegiatan mana yang sedang berlangsung hari ini? Salin frasa tiga kata yang dimulai painting.', accepted: ['painting the sign'], explanation: 'Every Sunday menyatakan rutinitas mencuci, sedangkan today ... are painting menunjukkan kegiatan hari ini. Jangan menyamakan kedua kerangka waktu.' }
    ],
    writingTask: writing('Tulis 6–8 kalimat pesan dari toko sepeda fiktif. Biasanya kamu memperbaiki sepeda setelah makan siang dan rekanmu membersihkan alat. Hari ini kamu memeriksa ban sementara rekanmu mengecat papan toko. Bandingkan kebiasaan dan kegiatan sekarang, lalu minta pelanggan menunggu sebentar dengan can atau could. Jelaskan alasan permintaan tanpa mengubah waktu kegiatan.'),
    speakingTask: speaking('Role-play sekitar 1–2 menit di dapur komunitas: biasanya kamu mencatat pesanan, tetapi sekarang kamu mencuci sayur; rekanmu biasanya memasak, tetapi sekarang ia menerima kiriman. Mintalah bantuan memindahkan kotak dengan sopan. Jawab: What do you usually do? What are you doing now? Could you help with the boxes?'),
    phaseTask: null
  },
  {
    week: 6,
    objective: 'Menceritakan kejadian lampau dengan urutan, past simple, did/didn’t, dan was/were.',
    title: 'Kiriman yang terlambat',
    questions: [
      { id: 'w6-q1', prompt: 'Lengkapi go dalam bentuk lampau: “Last Thursday, we ___ to the harbour.” Jawab satu kata.', accepted: ['went'], explanation: 'Go memiliki bentuk lampau tidak beraturan went. Last Thursday menempatkan kejadian pada masa lampau yang sudah selesai.' },
      { id: 'w6-q2', prompt: 'Perbaiki satu kata: “Did you found the parcel?” Tulis seluruh pertanyaan.', accepted: ['Did you find the parcel?'], explanation: 'Setelah did, gunakan bentuk dasar find. Did sudah menandai lampau sehingga found tidak dipakai lagi.' },
      { id: 'w6-q3', prompt: 'Isi was atau were: “The two parcels ___ wet yesterday.”', accepted: ['were'], explanation: 'The two parcels adalah subjek jamak, jadi were. Yesterday menunjukkan lampau; are tidak cocok untuk keadaan kemarin.' },
      { id: 'w6-q4', prompt: 'Ubah menjadi negatif dengan didn’t atau did not: “Suri bought a ticket.” Pertahankan kata-kata lainnya.', accepted: ["Suri didn't buy a ticket.", 'Suri did not buy a ticket.'], explanation: 'Negatif lampau memakai did not + buy. Bentuk bought kembali ke dasar setelah did.' }
    ],
    writingTask: writing('Tulis cerita 80–100 kata kepada teman tentang kiriman fiktif: Kamis lalu kamu pergi ke pelabuhan, hujan turun, dua paket basah, tetapi petugas menemukan paket milikmu di ruang kering. Kamu tidak membeli tiket kapal. Ceritakan urutan, waktu, keadaan, dan hasil dengan jelas; gunakan satu negatif lampau dan jangan menyatakan paketmu basah.'),
    speakingTask: speaking('Ceritakan kejadian fiktif sekitar dua menit: Minggu lalu kamu datang ke pasar kerajinan, lupa membawa tas, meminjam tas dari pedagang, lalu pulang membawa cangkir. Bedakan masalah, tindakan, dan hasil. Jawab: When did it happen? What did you borrow? Were you able to take the cup home?'),
    phaseTask: null
  },
  {
    week: 7,
    objective: 'Menyatakan jumlah terhitung/tak terhitung dan membandingkan pilihan menggunakan kriteria yang sama.',
    title: 'Memilih perlengkapan piknik',
    questions: [
      { id: 'w7-q1', prompt: 'Isi many atau much: “How ___ juice do we need?”', accepted: ['much'], explanation: 'Juice sebagai cairan tidak dihitung langsung, jadi how much. Jika menyebut bottles of juice, yang dihitung adalah botolnya.' },
      { id: 'w7-q2', prompt: 'Lengkapi satu kata: “We need three ___ of juice.” Gunakan bentuk jamak bottle.', accepted: ['bottles'], explanation: 'Jumlah three memerlukan bentuk jamak bottles; wadah membuat jumlah cairan terukur tanpa mengatakan three juices.' },
      { id: 'w7-q3', prompt: 'Perbaiki dengan menghapus satu kata: “The green basket is more lighter than the brown basket.” Tulis seluruh kalimat.', accepted: ['The green basket is lighter than the brown basket.'], explanation: 'Light memakai comparative lighter. Jangan memakai more dan -er sekaligus untuk perbandingan yang sama.' },
      { id: 'w7-q4', prompt: 'Keranjang A berharga 45 ribu rupiah, B 60 ribu. Lengkapi satu kata: “A is ___ than B.” Gunakan comparative dari cheap.', accepted: ['cheaper'], explanation: '45 ribu lebih murah daripada 60 ribu, jadi cheaper than. Perhatikan arah perbandingan agar fakta harga tidak terbalik.' }
    ],
    writingTask: writing('Tulis pesan 80–100 kata kepada tim piknik. Keranjang A seharga Rp45.000 dan ringan, tetapi hanya memuat enam roti; B seharga Rp60.000 dan lebih berat, tetapi memuat sepuluh roti. Tim perlu delapan roti dan tiga botol jus. Bandingkan kapasitas, harga, dan berat; pilih satu keranjang dan jelaskan konsekuensinya. Gunakan jumlah/wadah dengan jelas, bukan memilih hanya karena harga.'),
    speakingTask: speaking('Bandingkan dua layanan antar fiktif selama sekitar dua menit. A berbiaya Rp12.000, tiba dalam 40 menit, dan membawa dua kotak; B Rp18.000, tiba dalam 20 menit, dan membawa empat kotak. Kamu perlu mengirim tiga kotak dalam 30 menit. Pilih dan beri alasan. Jawab: Which is cheaper? Which meets the deadline? How many boxes do you need to send?'),
    phaseTask: null
  },
  {
    week: 8,
    objective: 'Menyusun rencana dan konfirmasi janji dengan going to/will, hari, jam, serta pembagian tindakan.',
    title: 'Menjadwalkan pameran mini',
    questions: [
      { id: 'w8-q1', prompt: 'Perbaiki dengan menambah satu kata: “We going to hang the pictures tomorrow.” Tulis seluruh kalimat.', accepted: ['We are going to hang the pictures tomorrow.'], explanation: 'Going to untuk rencana tetap membutuhkan be: we are going to + hang. Jangan menghilangkan are.' },
      { id: 'w8-q2', prompt: 'Lengkapi dua kata dengan will dan bentuk tepat dari bring untuk tawaran spontan: “The hooks are missing.” “I ___ some.”', accepted: ['will bring', "'ll bring", '’ll bring'], explanation: 'Will/’ll diikuti bentuk dasar bring; konteksnya tawaran spontan membawa pengait, bukan brings atau bringing.' },
      { id: 'w8-q3', prompt: 'Pesan terbaru: “Not Tuesday at 10. Let’s meet Wednesday at 11.” Hari apa yang harus ditulis di konfirmasi? Jawab nama hari dalam bahasa Inggris.', accepted: ['Wednesday'], explanation: 'Konfirmasi harus mengikuti perubahan terbaru. Tuesday adalah pilihan yang dibatalkan, bukan jadwal final.' },
      { id: 'w8-q4', prompt: 'Perbaiki satu kata: “She will brings the tape.” Tulis seluruh kalimat.', accepted: ['She will bring the tape.'], explanation: 'Will tidak berubah menurut subjek dan diikuti bring, bukan brings. Penanda -s tidak ditambahkan setelah modal.' }
    ],
    writingTask: writing('Tulis pesan konfirmasi 80–100 kata kepada panitia pameran fiktif. Rencana Selasa pukul 10.00 dibatalkan; jadwal baru Rabu pukul 11.00 di aula barat. Kamu akan membawa selotip, Rosi membawa gambar, dan panitia harus membalas sebelum Selasa pukul 17.00. Sebut perubahan, tempat, pembagian tindakan, tenggat balasan, dan satu permintaan bantuan sopan.'),
    speakingTask: speaking('Atur pertemuan sekitar dua menit untuk latihan paduan suara: teman tidak bisa Jumat pukul 18.00; kalian memilih Sabtu pukul 15.30 di ruang musik. Kamu menawarkan membawa air dan teman membawa daftar lagu. Jelaskan rencana dan konfirmasikan tindakan. Jawab: Why not Friday? What time is the new meeting? What will you bring?'),
    phaseTask: phase('Gate B — perbaikan kunjungan taman kota: Sabtu lalu pintu utara tutup sehingga kelompok menunggu 20 menit dan tidak masuk. Kunjungan baru direncanakan Minggu pukul 08.15 melalui pintu selatan; kamu akan membawa enam botol air, sedangkan Niko memeriksa tiket sebelum Sabtu pukul 12.00. Tulisan: pesan 80–100 kata kepada kelompok yang menjelaskan kejadian, perubahan rencana, kebutuhan, tindakan, dan waktu konfirmasi. Rekaman: ceritakan kejadian lalu atur ulang kunjungan selama sekitar dua menit. Jawab: What happened last Saturday? Where are you going to meet? Who will check the tickets, and by when?')
  },
  {
    week: 9,
    objective: 'Menyusun petunjuk berurutan dengan alasan, pemeriksaan hasil, serta membedakan larangan dari tidak wajib.',
    title: 'Menyiapkan paket bibit',
    questions: [
      { id: 'w9-q1', prompt: 'Perbaiki bentuk kata pertama menjadi imperatif: “Putting the seeds in a dry envelope.” Tulis seluruh kalimat.', accepted: ['Put the seeds in a dry envelope.'], explanation: 'Petunjuk langsung dimulai dengan bentuk dasar Put. Putting bukan perintah lengkap dalam pola ini.' },
      { id: 'w9-q2', prompt: 'Isi must not atau don’t have to: “Labelling is optional. You ___ label the spare envelopes.”', accepted: ["don't have to", 'do not have to'], explanation: 'Optional berarti tidak wajib, jadi don’t have to. Must not justru melarang tindakan, bukan membebaskan kewajiban.' },
      { id: 'w9-q3', prompt: 'Isi because atau so: “Keep the seeds dry ___ wet seeds may rot.”', accepted: ['because'], explanation: 'Bagian sesudah celah memberi alasan mengapa bibit harus kering. Because menandai alasan; so menandai akibat.' },
      { id: 'w9-q4', prompt: 'Urutan: pilih bibit → masukkan ke amplop → periksa nama tanaman. Penanda mana yang tepat sebelum langkah terakhir: first, next, atau finally? Jawab satu kata.', accepted: ['finally'], explanation: 'Finally menandai langkah terakhir, yaitu pemeriksaan nama. Petunjuk tidak selesai hanya saat barang dimasukkan; hasil perlu diperiksa.' }
    ],
    writingTask: writing('Tulis petunjuk 100–120 kata untuk relawan baru yang menyiapkan paket bibit. Syarat: amplop kering, satu jenis bibit per amplop, nama tanaman dan tanggal pada label, lalu pemeriksaan isi terhadap label. Menambahkan pita tidak wajib; mencampur dua jenis bibit dilarang. Sertakan first/then/finally, satu alasan because, dan pemeriksaan akhir yang dapat dilakukan pembaca.'),
    speakingTask: speaking('Jelaskan selama 2–3 menit cara menyiapkan stasiun isi ulang air fiktif: cuci wadah, taruh di meja stabil, isi air minum, letakkan gelas bersih, periksa keran. Musik latar tidak wajib, tetapi wadah tidak boleh dibiarkan terbuka. Jawab: Why must the table be stable? Is music required? How do you check that the station is ready?'),
    phaseTask: null
  },
  {
    week: 10,
    objective: 'Membedakan pengalaman/hasil yang terkait sekarang dari detail kejadian pada waktu lampau tertentu.',
    title: 'Pengalaman membuat peta',
    questions: [
      { id: 'w10-q1', prompt: 'Lengkapi dua kata menggunakan write dalam present perfect: “Raka ___ three route descriptions so far.”', accepted: ['has written'], explanation: 'Raka tunggal memakai has dan bentuk ketiga written. So far menghubungkan hasil sampai sekarang, bukan satu waktu lampau selesai.' },
      { id: 'w10-q2', prompt: 'Perbaiki menjadi past simple tanpa mengubah waktu: “I have drawn the map last Saturday.”', accepted: ['I drew the map last Saturday.'], explanation: 'Last Saturday adalah waktu lampau tertentu yang selesai; gunakan drew, bukan have drawn untuk kejadian itu.' },
      { id: 'w10-q3', prompt: 'Isi already atau yet: “We haven’t tested the route ___.”', accepted: ['yet'], explanation: 'Yet cocok dengan negatif yang menyatakan pekerjaan belum terjadi sampai sekarang. Belum diuji tidak berarti tidak akan pernah diuji.' },
      { id: 'w10-q4', prompt: 'Untuk menanyakan tanggal kejadian yang sudah disebut sebagai pengalaman, isi satu kata: “When ___ you create your first map?”', accepted: ['did'], explanation: 'When meminta waktu kejadian lampau tertentu. Gunakan did + create untuk detail, meskipun cerita dibuka dengan pengalaman present perfect.' }
    ],
    writingTask: writing('Tulis sekitar 120 kata kepada teman tentang pembuat peta fiktif bernama Raka. Sampai sekarang ia telah membuat tiga peta jalan kaki. Peta pertamanya dibuat Agustus lalu; ia memeriksa nama jalan dengan penjaga toko. Peta ketiga selesai, tetapi rutenya belum diuji. Bedakan pengalaman umum, waktu kejadian spesifik, hasil yang sudah ada, dan pekerjaan yang belum dilakukan; jangan mengklaim semua rute aman.'),
    speakingTask: speaking('Ceritakan pengalaman tokoh fiktif yang pernah mengatur pertukaran buku selama sekitar tiga menit. Pada kegiatan pertamanya bulan Mei, daftar buku tertukar; ia mengurutkan ulang berdasarkan nama pemilik dan berhasil mengembalikan semua buku. Bedakan pembukaan tentang pengalaman dan rincian waktu lampau. Jawab: When did the first event happen? What did you do to fix the list? Have you checked the next event’s list yet? Tentukan jawaban terakhir sebagai rencana skenario, bukan fakta hasil nyata.'),
    phaseTask: null
  },
  {
    week: 11,
    objective: 'Membangun pendapat dengan alasan/contoh relevan dan membedakan informasi sumber dari pendapat sendiri.',
    title: 'Apakah papan informasi perlu gambar?',
    questions: [
      { id: 'w11-q1', prompt: 'Isi because atau although: “___ the pictures take time to make, they may help new visitors.”', accepted: ['Although'], explanation: 'Kalimat mengakui biaya waktu namun tetap menyebut manfaat; although menandai pertentangan. Because akan membuat waktu pembuatan menjadi alasan manfaat yang tidak dijelaskan.' },
      { id: 'w11-q2', prompt: 'Perbaiki dengan menghapus but: “Although the notice is short, but it gives the opening hours.”', accepted: ['Although the notice is short, it gives the opening hours.'], explanation: 'Although sudah menandai hubungan kontras. Jangan menggandakannya dengan but dalam hubungan yang sama.' },
      { id: 'w11-q3', prompt: 'Teks fiktif: “Lusi prefers picture signs.” Klaim “Picture signs help everyone” lebih luas dari sumber. Jawab satu label: didukung atau belum didukung.', accepted: ['belum didukung'], explanation: 'Preferensi satu tokoh tidak membuktikan manfaat bagi semua orang. Pertahankan batas sumber dan tambahkan bukti lain sebelum memperluas klaim.' },
      { id: 'w11-q4', prompt: 'Klaim: gambar membantu pengunjung menemukan ruang. Contoh: “A visitor followed the cup symbol to the kitchen.” Lengkapi hubungan dengan satu kata: “This example supports the claim ___ the symbol helped the visitor find the kitchen.”', accepted: ['because'], explanation: 'Because menghubungkan contoh dengan alasan relevansinya. Contoh perlu menunjukkan bagaimana gambar membantu menemukan ruang, bukan sekadar menyebut warna yang disukai.' }
    ],
    writingTask: writing('Sumber fiktif “A Notice at the Gate”, Lusi Wira: Lusi prefers a picture beside each room name because some new visitors do not know the building. She has not tested whether pictures reduce mistakes. Tulis paragraf 120–150 kata kepada pengelola gedung: sampaikan pendapat tentang penambahan gambar, berikan alasan dan contoh skenario baru, sebut isi sumber dengan atribusi, dan akui apa yang belum diuji. Jangan menyajikan preferensi Lusi sebagai hasil penelitian.'),
    speakingTask: speaking('Sampaikan pendapat 2–3 menit tentang menyediakan label warna pada kotak alat klub. Sumber fiktif: “Nando says colour labels may help volunteers find the right box, but he has not measured the time needed.” Nyatakan posisi, alasan, contoh, dan batas klaim. Jawab: Why do you support or reject the idea? What example supports your reason? Does Nando’s comment prove that everyone will work faster?'),
    phaseTask: null
  },
  {
    week: 12,
    objective: 'Mengintegrasikan situasi, kejadian lampau, rencana, alasan, dan klarifikasi tanpa mengaburkan tindakan.',
    title: 'Memulihkan latihan yang terhenti',
    questions: [
      { id: 'w12-q1', prompt: 'Pesan: “The key was missing yesterday, so we practised outside. Tomorrow we will use the hall.” Tempat mana untuk besok? Jawab frasa bahasa Inggris dari pesan, termasuk the.', accepted: ['the hall'], explanation: 'Outside adalah lokasi kemarin, sedangkan will use the hall menunjuk rencana besok. Pisahkan kerangka waktu sebelum merangkum.' },
      { id: 'w12-q2', prompt: '“Please return it before nine.” Kamu tidak tahu it berarti kunci atau map. Lengkapi klarifikasi dengan dua nama benda itu dalam bahasa Inggris: “Do you mean the ___ or the ___?” Pisahkan jawaban dengan koma.', accepted: ['key, folder', 'key folder', 'folder, key', 'folder key'], explanation: 'Key dan folder memeriksa objek yang ambigu. Klarifikasi yang baik menargetkan bagian pesan yang belum jelas, bukan hanya mengulang yes.' },
      { id: 'w12-q3', prompt: 'Lengkapi satu kata: “The hall was locked, ___ we moved to the garden.” Gunakan because atau so.', accepted: ['so'], explanation: 'Pindah ke taman adalah akibat aula terkunci, maka gunakan so. Because akan menempatkan sebab dan akibat secara terbalik.' },
      { id: 'w12-q4', prompt: 'Catatan: “Ayu: return the key; Friday, 16:00.” Siapa penanggung jawab tindakan? Jawab nama saja.', accepted: ['Ayu'], explanation: 'Tindakan perlu memiliki pelaku. Catatan ini menetapkan Ayu, bukan seluruh kelompok, untuk mengembalikan kunci.' }
    ],
    writingTask: writing('Tulis sekitar 150 kata kepada anggota kelompok teater fiktif: kemarin kunci hilang sehingga latihan pindah ke kebun; hari ini kunci ditemukan; besok latihan kembali di aula pukul 16.00. Ayu harus mengembalikan kunci ke penjaga sebelum Jumat pukul 16.00. Susun situasi, perubahan, dan tindakan; jelaskan satu alasan serta satu pertanyaan klarifikasi yang masih masuk akal. Jangan mengubah rencana menjadi kejadian yang sudah berlangsung.'),
    speakingTask: speaking('Bicarakan rencana klub melukis selama sekitar empat menit: minggu lalu hujan menghentikan kegiatan luar ruang, kini tersedia ruang tertutup kecil, dan kelompok harus memutuskan sesi pendek atau dua kelompok bergantian. Beri alasan dan langkah selanjutnya yang kamu usulkan. Jawab: What went wrong last week? Why is your option suitable? What would you ask the organiser to clarify?'),
    phaseTask: phase('Gate C — skenario baru: kelompok observasi burung biasanya bertemu pukul 06.00. Minggu lalu bus terlambat sehingga dua anggota tertinggal. Sumber fiktif “A Later Start”, Olin Reka: Olin proposes a 07:00 start so more members can use the bus, but some birds may be harder to see later. There is no attendance comparison. Tulisan: sekitar 150 kata kepada kelompok; hubungkan kejadian, usulan, alasan, satu kelemahan, dan tindakan berikutnya yang kamu tetapkan sebagai rencana. Bedakan pendapat Olin dari keputusanmu. Rekaman: diskusikan pilihan pukul 06.00 atau 07.00 selama sekitar empat menit. Jawab: Why did members miss the last visit? What is the cost of the later start? What information would you clarify before confirming?')
  },
  {
    week: 13,
    objective: 'Menggunakan istilah bidang dalam hubungan bermakna, terutama durasi, tenggat, penanggung jawab, dan ketersediaan.',
    title: 'Bahasa proyek kebun atap',
    questions: [
      { id: 'w13-q1', prompt: '“The watering task takes 25 minutes.” Angka itu menyatakan duration atau deadline? Jawab satu istilah.', accepted: ['duration'], explanation: '25 minutes adalah lama tugas, bukan waktu paling akhir selesai. Deadline perlu titik waktu seperti Monday at noon.' },
      { id: 'w13-q2', prompt: '“Nela is responsible for checking the seedlings.” Dalam peta tugas, siapa owner-nya? Jawab nama saja.', accepted: ['Nela'], explanation: 'Owner dalam pengelolaan tugas berarti penanggung jawab, bukan selalu pemilik kebun atau barang.' },
      { id: 'w13-q3', prompt: '“I am available at three; please ask the others.” Apakah rapat sudah dikonfirmasi? Jawab sudah atau belum.', accepted: ['belum'], explanation: 'Available hanya menyatakan ketersediaan satu orang. Konfirmasi memerlukan kesepakatan, bukan asumsi dari satu balasan.' },
      { id: 'w13-q4', prompt: '“We leave ten spare minutes in case watering takes longer.” Sepuluh menit cadangan ini disebut buffer atau deadline? Jawab satu istilah.', accepted: ['buffer'], explanation: 'Buffer adalah waktu cadangan untuk keterlambatan. Deadline adalah batas selesai, bukan tambahan durasi untuk menangani keterlambatan.' }
    ],
    writingTask: writing('Skenario proyek kebun atap: Nela mengecek bibit selama 25 menit sebelum Senin pukul 12.00; pekerjaan menanam bergantung pada hasil pemeriksaan; ada buffer sepuluh menit. Tulis pengantar 100–150 kata kepada relawan baru menggunakan task, owner, duration, deadline, dependency, dan buffer dalam hubungan yang benar, bukan daftar terjemahan. Sebut bidang ini sebagai latihan koordinasi dan satu pertanyaan tentang ketersediaan, bukan rapat yang sudah pasti.'),
    speakingTask: speaking('Perkenalkan bidang koordinasi peminjaman alat selama sekitar tiga menit kepada anggota baru. Jelaskan task, priority, owner, deadline, dan progress memakai contoh skenario buatan yang konsisten. Terangkan satu ketergantungan antarpekerjaan dengan kata sederhana. Jawab: How is a deadline different from duration? Who owns the first task? Does availability mean a booking is confirmed?'),
    phaseTask: null
  },
  {
    week: 14,
    objective: 'Menulis permintaan dan follow-up profesional dengan tindakan, penerima, tenggat, serta pilihan balasan yang jelas.',
    title: 'Meminta lemari pajangan',
    questions: [
      { id: 'w14-q1', prompt: 'Isi by atau on untuk tenggat paling lambat: “Please reply ___ Monday at 14:00; earlier is fine.”', accepted: ['by'], explanation: 'By berarti paling lambat; on menempatkan tindakan pada hari itu. Earlier is fine menegaskan bahwa ini tenggat, bukan waktu wajib melakukan tindakan.' },
      { id: 'w14-q2', prompt: 'Perbaiki satu kata: “Could you sends the cabinet dimensions?” Tulis seluruh pertanyaan.', accepted: ['Could you send the cabinet dimensions?'], explanation: 'Could you diikuti bentuk dasar send. Pilih objek yang spesifik agar penerima tahu informasi yang diminta.' },
      { id: 'w14-q3', prompt: 'Subject email perlu menyebut kebutuhan. Lengkapi dua kata dari konteks: kamu memerlukan ukuran lemari pajangan (cabinet dimensions). “Display ___ ___ needed by Monday”.', accepted: ['cabinet dimensions'], explanation: 'Cabinet dimensions menyebut informasi yang diminta, sedangkan by Monday menyebut tenggat. Subject yang hanya Hello tidak mengidentifikasi tindakan.' },
      { id: 'w14-q4', prompt: '“I am following up on my request for the cabinet size.” Ini permintaan pertama atau pengingat? Jawab salah satu label tersebut.', accepted: ['pengingat'], explanation: 'Following up mengacu pada permintaan sebelumnya. Follow-up yang baik tetap menyebut kebutuhan tanpa menuduh penerima.' }
    ],
    writingTask: writing('Buat dua email kepada petugas galeri fiktif, sekitar 100–150 kata per email. Email pertama meminta ukuran dan ketersediaan lemari pajangan untuk Sabtu; jawaban diperlukan paling lambat Senin pukul 14.00. Email kedua adalah follow-up karena belum ada jawaban, bukan karena ditolak. Sertakan subject, konteks singkat, permintaan spesifik, tenggat, penutup sopan, dan alternatif bila lemari tidak tersedia. Jangan mengklaim ada lampiran.'),
    speakingTask: speaking('Simulasikan telepon 2–3 menit kepada pengelola ruang komunitas untuk menanyakan ketersediaan layar presentasi Jumat pukul 10.00. Mintalah ukuran layar dan konfirmasi paling lambat Rabu pukul 15.00, lalu sampaikan alternatif bila tidak tersedia. Jawab: What exactly do you need? When must the organiser reply? What will you do if the screen is unavailable?'),
    phaseTask: null
  },
  {
    week: 15,
    objective: 'Melaporkan selesai/berikutnya/hambatan dengan akurat dan mengklarifikasi angka atau tindakan yang ambigu.',
    title: 'Perkembangan lokakarya kain',
    questions: [
      { id: 'w15-q1', prompt: 'Update: “The materials list is complete. We cannot pack kits until the fabric arrives.” Apa hambatannya? Jawab frasa dari teks: the ___ ___.', accepted: ['the fabric arrives'], explanation: 'Packing menunggu kedatangan kain. Daftar bahan justru sudah selesai; jangan melaporkan pekerjaan selesai sebagai hambatan.' },
      { id: 'w15-q2', prompt: 'Catatan “Prita will check the kits by Thursday at 11.” Isi satu nama sebagai owner.', accepted: ['Prita'], explanation: 'Prita ditetapkan sebagai pelaku. Action note harus mempertahankan siapa melakukan apa dan kapan, bukan hanya jenis pekerjaan.' },
      { id: 'w15-q3', prompt: 'Di telepon kamu ragu antara 14 dan 40 kit. Tulis kedua angka dengan huruf bahasa Inggris untuk melengkapi “Did you say ___ kits or ___?” Pisahkan dengan koma.', accepted: ['fourteen, forty', 'fourteen forty', 'forty, fourteen', 'forty fourteen'], explanation: 'Fourteen dan forty mudah tertukar. Ucapkan ulang kedua kemungkinan bersama objek kits, lalu tunggu konfirmasi; jangan menebak jumlah.' },
      { id: 'w15-q4', prompt: '“The outline is finished, but the full instructions are still a draft.” Apakah full instructions final? Jawab ya atau tidak.', accepted: ['tidak'], explanation: 'Outline selesai tidak berarti seluruh petunjuk final. Pertahankan perbedaan produk selesai dan draft agar laporan tidak menyesatkan.' }
    ],
    writingTask: writing('Tulis notulen tindakan 120–150 kata untuk lokakarya kain fiktif. Daftar bahan selesai kemarin; petunjuk lengkap masih draft; kain belum tiba sehingga paket belum dapat dikemas. Prita mengecek isi paket paling lambat Kamis pukul 11.00 setelah kain datang; Dewa harus meminta waktu kedatangan ke pemasok hari ini. Pisahkan selesai, hambatan/dampak, dan tindakan berikutnya beserta pelaku/tenggat. Jangan menyatakan paket siap.'),
    speakingTask: speaking('Sampaikan update 3–4 menit tentang pameran tanaman fiktif: denah selesai, label tanaman masih diperiksa, pencetakan menunggu ejaan nama dikonfirmasi. Tentukan pelaku dan waktu untuk pemeriksaan berikutnya sebagai rencana. Di tengah simulasi klarifikasikan jumlah label 16 atau 60. Jawab: What is finished? What is blocking printing? Who will do what next, and by when?'),
    phaseTask: null
  },
  {
    week: 16,
    objective: 'Membandingkan dua opsi rapat, memberi alasan dan keberatan sopan, lalu merangkum keputusan/tindakan.',
    title: 'Memilih tempat pelatihan relawan',
    questions: [
      { id: 'w16-q1', prompt: 'Perbaiki dengan menghapus satu kata: “We should to inspect the entrance.” Tulis seluruh kalimat.', accepted: ['We should inspect the entrance.'], explanation: 'Should diikuti bentuk dasar inspect, tanpa to. Bentuk yang jelas membantu membedakan saran dari laporan tindakan selesai.' },
      { id: 'w16-q2', prompt: 'Ruang A berkapasitas 12 orang; ada 18 peserta dan setiap peserta perlu tempat. Berapa tempat tambahan diperlukan agar A memenuhi syarat? Jawab angka saja.', accepted: ['6', 'six', 'enam'], explanation: '18 dikurangi 12 adalah enam tempat tambahan. Bandingkan pilihan terhadap syarat utama sebelum menimbang harga atau kenyamanan.' },
      { id: 'w16-q3', prompt: '“We could ask for an earlier opening time.” Ini pilihan yang diusulkan atau janji pasti? Jawab pilihan atau janji.', accepted: ['pilihan'], explanation: 'Could di sini menyatakan alternatif yang mungkin. Jangan mencatat usulan seolah sudah disepakati atau dijanjikan.' },
      { id: 'w16-q4', prompt: 'Notulen: “B selected; Hani to confirm access by Wednesday.” Salin frasa dua kata yang menyatakan tindakan yang masih perlu dilakukan.', accepted: ['confirm access'], explanation: 'Pemilihan B sudah dicatat sebagai keputusan; confirm access adalah tindakan berikutnya. Keputusan dan tindak lanjut tidak boleh tertukar.' }
    ],
    writingTask: writing('Tulis email keputusan 150–200 kata kepada tim pelatihan fiktif. Opsi A murah, berkapasitas 12 orang, dan memiliki tangga; B lebih mahal, berkapasitas 20 orang, dengan pintu masuk tanpa tangga. Ada 18 peserta termasuk satu pengguna kursi roda. Tim telah memilih B dengan syarat akses benar-benar dikonfirmasi Hani sebelum Rabu pukul 16.00. Bandingkan opsi dengan kriteria sama, jelaskan alasan, catat syarat dan tindakan, serta minta konfirmasi ringkasan tanpa mengaku akses sudah diperiksa.'),
    speakingTask: speaking('Simulasikan rapat sekitar lima menit untuk memilih jadwal pelatihan: A Sabtu pagi dapat diikuti delapan dari sepuluh anggota; B Minggu sore dapat diikuti semua, tetapi instruktur belum memastikan ketersediaan. Bandingkan partisipasi dan kepastian instruktur, tanggapi satu keberatan dengan sopan, lalu usulkan keputusan bersyarat serta pemilik/tenggat tindakan. Jawab: Why not the other option? What needs clarification? Who will confirm the final arrangement?'),
    phaseTask: phase('Gate D — skenario baru: lokakarya perbaikan mainan memerlukan 15 tempat duduk dan penerangan baik. Aula A menyediakan 18 tempat dan lampu baik, tetapi hanya tersedia pukul 08.00; ruang B tersedia pukul 10.00 dan murah, tetapi hanya 12 tempat. Ketersediaan instruktur pukul 08.00 belum diketahui. Tulisan: email/memo 150–200 kata yang membandingkan dua opsi, mengusulkan keputusan dengan syarat yang masuk akal, menetapkan pelaku/tenggat konfirmasi, dan memisahkan fakta dari usulan. Rekaman: diskusikan pilihan sekitar lima menit, ajukan klarifikasi dan tanggapi keberatan. Jawab: Why is capacity important? What if the instructor cannot come at eight? What exactly must be confirmed before booking?')
  },
  {
    week: 17,
    objective: 'Menjelaskan masalah, kontribusi pribadi, tindakan, hasil, dan batasan dalam wawancara/solusi.',
    title: 'Menyelesaikan kekeliruan daftar peserta',
    questions: [
      { id: 'w17-q1', prompt: 'Cerita: “The team prepared the event. I called three families to check their names.” Tindakan pribadi pembicara apa? Salin frasa tiga kata yang dimulai called.', accepted: ['called three families'], explanation: 'Kontribusi pribadi adalah menelepon tiga keluarga untuk memeriksa nama, bukan mengambil seluruh kerja tim. Bedakan I untuk tindakan pribadi dan we/the team untuk kerja bersama.' },
      { id: 'w17-q2', prompt: '“The corrected list reached the reception desk before guests arrived.” Ini situation, action, atau result? Jawab satu label.', accepted: ['result'], explanation: 'Kalimat menunjukkan hasil tindakan: daftar benar sampai tepat waktu. Situation menjelaskan masalah awal, action menjelaskan yang dilakukan.' },
      { id: 'w17-q3', prompt: 'Perbaiki satu kata: “Yesterday, I check the spelling with each family.”', accepted: ['Yesterday, I checked the spelling with each family.'], explanation: 'Yesterday menandai kejadian lampau selesai. Check menjadi checked; urutan tindakan harus mempertahankan waktu kejadian.' },
      { id: 'w17-q4', prompt: 'Satu perbaikan daftar berhasil pada satu acara. Klaim “This method always prevents mistakes” didukung atau belum didukung? Jawab satu label.', accepted: ['belum didukung'], explanation: 'Satu hasil tidak membuktikan always. Jelaskan yang benar-benar terjadi dan batasi kesimpulan pada konteksnya.' }
    ],
    writingTask: writing('Tulis memo masalah/solusi 150–200 kata tentang skenario fiktif: tim menyiapkan acara keluarga; daftar peserta memiliki tiga nama salah; tugasmu memeriksa ejaan dengan menelepon ketiga keluarga; kamu mengirim daftar terkoreksi sebelum tamu datang. Jelaskan dampak masalah, peran tim versus peranmu, tindakan, hasil diketahui, dan satu langkah pencegahan yang masih usulan. Jangan menciptakan persentase keberhasilan.'),
    speakingTask: speaking('Jawab wawancara sekitar 3–4 menit memakai pengalaman benar dari belajar/rumah atau skenario fiktif yang kamu tandai jelas. Jelaskan masalah, tanggung jawabmu, tindakan, dan hasil, tanpa mengklaim hasil kerja orang lain. Jawab lima lanjutan: Why did you choose that action? What was your own contribution? What alternative did you consider? What did not work? What would you change next time?'),
    phaseTask: null
  },
  {
    week: 18,
    objective: 'Menyajikan alur kerja dan angka bersatuan, membedakan nilai akhir dari besar perubahan, serta menjawab Q&A dengan batasan.',
    title: 'Presentasi pengemasan perlengkapan',
    questions: [
      { id: 'w18-q1', prompt: 'Data simulasi: packing time fell from 55 to 35 minutes per kit. Berapa besar penurunannya? Jawab angka dan unit dalam bahasa Inggris.', accepted: ['20 minutes', 'twenty minutes'], explanation: 'Besar perubahan adalah 55 dikurangi 35, yaitu 20 menit. 35 menit adalah nilai akhir, bukan besarnya penurunan.' },
      { id: 'w18-q2', prompt: 'Isi from atau by: “Packing time fell ___ twenty minutes, from fifty-five to thirty-five minutes.”', accepted: ['by'], explanation: 'By menunjukkan besar perubahan; from ... to ... menunjukkan nilai awal dan akhir. Jangan menukar keduanya karena maknanya berubah.' },
      { id: 'w18-q3', prompt: 'Tabel waktu tidak mencatat penyebab perubahan. Apakah tabel membuktikan pelatihan menyebabkan penurunan? Jawab ya atau tidak.', accepted: ['tidak'], explanation: 'Dua nilai tidak cukup untuk menyimpulkan sebab-akibat. Nyatakan bahwa penyebab tidak diukur dan hindari mengisi kekosongan dengan tebakan.' },
      { id: 'w18-q4', prompt: 'Perbaiki label data buatan dengan mengganti satu kata: “These are research figures for practice.” Gunakan simulated untuk status data yang sebenarnya; tulis seluruh kalimat.', accepted: ['These are simulated figures for practice.'], explanation: 'Simulated figures memberi status data yang benar. Jangan menyebut angka buatan sebagai penelitian atau hasil kerja nyata.' }
    ],
    writingTask: writing('Buat outline lima bagian dengan penjelasan 150–200 kata kepada koordinator pengemasan: tujuan, keadaan saat ini, data, rekomendasi, langkah berikutnya. Data seluruhnya simulasi: waktu per kit pada putaran A 55 menit, B 35 menit; jumlah kerusakan tidak dicatat dan penyebab perubahan tidak diuji. Sebut unit, nilai awal/akhir, besar perubahan, batas data, serta usulan pemeriksaan yang tidak menganggap kualitas pasti meningkat.'),
    speakingTask: speaking('Presentasi sekitar lima menit tentang data simulasi pemilahan buku: putaran A 48 menit per rak, B 36 menit per rak; ketepatan kategori tidak diukur. Gunakan alur lima bagian, nyatakan status simulasi, hitung perubahan dengan benar, dan beri rekomendasi terbatas. Jawab tiga pertanyaan: How large was the decrease? Does the table show fewer sorting errors? What should be checked before changing the process permanently?'),
    phaseTask: null
  },
  {
    week: 19,
    objective: 'Meringkas dan memparafrasekan tanpa menambah fakta, menghilangkan batasan, atau menyamarkan asal ide.',
    title: 'Ringkasan uji label arsip',
    questions: [
      { id: 'w19-q1', prompt: 'Sumber: “Colour labels may help some volunteers.” Isi satu kata modal agar tidak memperkuat klaim: “The labels ___ help some volunteers.” Gunakan kata dari sumber.', accepted: ['may'], explanation: 'May menyatakan kemungkinan. Mengganti dengan will atau always membuat ringkasan lebih pasti daripada sumber.' },
      { id: 'w19-q2', prompt: 'Sumber: “Two volunteers said labels helped. No retrieval times were recorded.” Apakah sumber mengukur pencarian lebih cepat? Jawab ya/tidak.', accepted: ['tidak'], explanation: 'Komentar bahwa label membantu bukan pengukuran waktu. Pertahankan perbedaan laporan pendapat dan hasil terukur.' },
      { id: 'w19-q3', prompt: 'Sumber menyebut tiga shelves. Ringkasan keliru: “Mira tested labels on all shelves.” Perbaiki dengan mengganti all menjadi jumlah yang benar; pertahankan kata lain.', accepted: ['Mira tested labels on three shelves.'], explanation: 'Three mempertahankan cakupan uji. Paraphrase tidak boleh memperluas tiga rak menjadi seluruh rak; bentuk boleh berubah, fakta tetap.' },
      { id: 'w19-q4', prompt: 'Kamu menulis ulang ide Mira dengan susunan kalimat sendiri. Masih perlu menyebut sumber? Jawab ya/tidak.', accepted: ['ya'], explanation: 'Paraphrase mengubah bentuk bahasa, bukan kepemilikan ide. Tetap cantumkan penulis/judul; jangan membuat jurnal atau URL palsu.' }
    ],
    writingTask: writing(`${archiveSource} Baca, tutup sumber, lalu tulis ringkasan 120–180 kata untuk pengelola arsip; buka kembali hanya untuk mengecek kesetiaan makna dan catat bahwa pemeriksaan dilakukan. Pertahankan siapa, lokasi uji, durasi, tanggapan, yang tidak diukur, dan rekomendasi bersyarat. Sebut judul/penulis fiktif; jangan menambah pendapat sendiri ke dalam ringkasan atau mengarang detail demi panjang.`),
    speakingTask: speaking(`${archiveSource} Jelaskan isi sumber selama sekitar tiga menit dengan susunan sendiri. Sebut atribusi, temuan yang benar-benar dilaporkan, batasan, dan rekomendasi. Jawab: What was actually tried? Did anyone measure retrieval time? What does Mira recommend before expansion? Jangan mengubah komentar dua relawan menjadi bukti semua orang bekerja lebih cepat.`),
    phaseTask: null
  },
  {
    week: 20,
    objective: 'Mengorganisasi inti, dukungan, dan batasan ceramah serta merumuskan pertanyaan yang belum terjawab.',
    title: 'Mencatat jeda pertanyaan',
    questions: [
      { id: 'w20-q1', prompt: 'Cuplikan ceramah: “Four of seven participants asked a question.” Angka tujuh menghitung participants atau sessions? Jawab satu kata.', accepted: ['participants'], explanation: 'Objek angka adalah peserta, bukan sesi. Dalam catatan selalu simpan angka bersama satuan/objek agar makna tidak berubah.' },
      { id: 'w20-q2', prompt: '“There was no comparison session.” Ini support atau limit? Jawab satu label.', accepted: ['limit'], explanation: 'Tidak adanya sesi pembanding adalah batas bukti. Catatan yang hanya menyimpan dukungan akan membuat simpulan terlalu kuat.' },
      { id: 'w20-q3', prompt: 'Pembicara tidak menyebut hasil tugas berikutnya. Pada kolom hasil, tulis satu label: not measured atau improved.', accepted: ['not measured'], explanation: 'Informasi yang tidak diukur harus ditandai tidak tersedia, bukan diisi improved berdasarkan dugaan manfaat jeda.' },
      { id: 'w20-q4', prompt: 'Pembicara tidak mengukur akurasi tugas sesudah sesi. Lengkapi pertanyaan seminar dengan bentuk pasif complete yang tepat: “Were later tasks ___ more accurately?” Jawab satu kata.', accepted: ['completed'], explanation: 'Were ... completed menanyakan hasil yang belum diketahui. Pertanyaan seminar ini mengisi gap bukti, bukan sekadar mengulang jumlah peserta yang sudah disebut.' }
    ],
    writingTask: writing(`${lectureSource} Buat catatan claim/support/limit, lalu ringkasan 150–200 kata untuk teman yang tidak hadir. Cantumkan pembicara/judul, angka bersama objeknya, sifat simulasi, dan satu pertanyaan seminar tentang hal yang belum diukur. Ini tugas pemahaman catatan tertulis; jangan melaporkannya sebagai skor listening atau seolah kamu mendengar audio yang tidak tersedia. Jangan menambah detail agar mencapai panjang.`),
    speakingTask: speaking(`${lectureSource} Dari catatan claim/support/limit, jelaskan ceramah fiktif ini selama 3–5 menit, dengan atribusi dan satu pertanyaan seminar. Nyatakan kamu memakai ringkasan tertulis, bukan bukti listening baru. Jawab: What is the speaker suggesting? What does four out of seven describe? What would a comparison session help us learn?`),
    phaseTask: phase('Gate E — sumber baru fiktif “A Check Before Closing”, pembicara Rena Talu: A pottery workshop introduced a closing checklist. In one fictional evening session, six learners used it to check tools and wet clay. One missing sponge was noticed before the room closed. No earlier sessions were compared, and the time needed for checking was not recorded. Rena suggests testing whether the checklist remains useful on busier evenings. Tulisan: catatan inti/dukungan/batasan dan ringkasan 150–200 kata yang setia pada sumber, dengan atribusi serta satu pertanyaan seminar. Rekaman: jelaskan isi dan batas bukti selama 3–5 menit. Jawab: What did the checklist help someone notice? What was not measured? Can this single example prove the checklist saves time? Sumber disediakan sebagai teks; tugas ini tidak menghasilkan bukti listening. Listening baru, bila dilakukan terpisah, perlu sumber audio dan catatan kondisi sendiri.')
  },
  {
    week: 21,
    objective: 'Membandingkan klaim, dukungan, dan batasan dua sumber dalam sintesis, bukan dua ringkasan lepas.',
    title: 'Dua cara meminjam alat',
    questions: [
      { id: 'w21-q1', prompt: 'A menyarankan satu meja peminjaman alat. B menyarankan pemesanan lewat pesan. Keduanya membahas akses terhadap apa? Jawab satu kata dalam bahasa Inggris: tools atau music.', accepted: ['tools'], explanation: 'Pertanyaan bersama adalah akses/peminjaman alat. Sintesis memerlukan fokus bersama sebelum membandingkan cara yang berbeda.' },
      { id: 'w21-q2', prompt: 'A: “No waiting times have been measured.” B: “The proposal has not been tested.” Klaim “Both methods reduce waiting time” didukung atau belum didukung?', accepted: ['belum didukung'], explanation: 'Tidak ada pengukuran atau uji yang membuktikan pengurangan waktu tunggu. Kesamaan tujuan bukan bukti kesamaan hasil.' },
      { id: 'w21-q3', prompt: 'Isi whereas atau because untuk menandai perbedaan: “A offers one physical desk, ___ B proposes advance messages.”', accepted: ['whereas'], explanation: 'Whereas mempertemukan dua cara berbeda pada fokus yang sama. Because akan menyatakan hubungan sebab yang tidak didukung.' },
      { id: 'w21-q4', prompt: 'B menyebut warga tanpa telepon andal tetap butuh walk-in option. Jika rekomendasi hanya menerima pesan telepon, batasan mana terabaikan? Jawab access atau price.', accepted: ['access'], explanation: 'Masalahnya akses bagi warga tanpa telepon. Rekomendasi sintesis harus menanggapi batasan nyata, bukan mengarang informasi harga.' }
    ],
    writingTask: writing(`${comparisonSources} Buat matriks singkat klaim/dukungan/batasan untuk A dan B, lalu sintesis 180–250 kata kepada pengelola peminjaman alat. Atur paragraf berdasarkan pertanyaan bersama tentang akses dan antrean, bukan satu paragraf ringkasan per sumber saja. Sebut persamaan tujuan, perbedaan cara, ketiadaan pengukuran, dan rekomendasi bersyarat yang tetap menyediakan akses tanpa telepon.`),
    speakingTask: speaking(`${comparisonSources} Bandingkan sumber selama sekitar 4–5 menit dan jelaskan usulan gabunganmu dengan atribusi lisan. Jawab: What is the shared problem? How do the proposed methods differ? What information is missing before choosing permanently? Jangan mengaku salah satu metode terbukti mengurangi antrean.`),
    phaseTask: null
  },
  {
    week: 22,
    objective: 'Mengembangkan argumen berbasis dua sumber dengan kontra-argumen adil dan klaim proporsional.',
    title: 'Mengatur giliran latihan musik',
    questions: [
      { id: 'w22-q1', prompt: 'Usulan belum dievaluasi. Perlemah kepastian dengan mengganti will menjadi may, tanpa mengubah kata lainnya: “This will help in this setting.”', accepted: ['This may help in this setting.'], explanation: 'May membatasi kepastian. Klaim tetap membutuhkan alasan; kata hati-hati tidak mengubah usulan menjadi hasil yang telah terbukti.' },
      { id: 'w22-q2', prompt: 'Keberatan: pembatalan reservasi membuat alat menganggur. Lengkapi dua kata untuk respons yang menanggapi masalah: “Offer cancelled slots to people on a ___ ___.” Gunakan istilah Inggris untuk daftar tunggu.', accepted: ['waiting list'], explanation: 'Waiting list menanggapi slot kosong secara langsung. Jawaban kontra-argumen perlu mengatasi masalah, bukan hanya mengulang bahwa usulan bagus.' },
      { id: 'w22-q3', prompt: 'Isi provided that atau therefore: “Reserved slots may be practical, ___ unused slots can be offered to waiting players.”', accepted: ['provided that'], explanation: 'Provided that menyatakan syarat kelayakan. Therefore menandai akibat, bukan kondisi yang perlu dipenuhi.' },
      { id: 'w22-q4', prompt: 'Dua penulis tidak mengukur kehadiran. Klaim “Reservations increase attendance by 30%” harus ditandai supported atau unsupported?', accepted: ['unsupported'], explanation: 'Angka 30% tidak berasal dari sumber. Hapus klaim angka itu atau nyatakan tidak didukung, jangan menambahkan rujukan palsu.' }
    ],
    writingTask: writing(`${argumentSources} Tulis argumen latihan 250–400 kata kepada pengelola ruang musik: pilih sistem atau kombinasi yang kamu dukung, beri alasan beratribusi, jelaskan hubungan dukungan dengan posisi, hadirkan keberatan terkuat secara adil, dan jawab dengan syarat/perubahan usulan. Cantumkan batas bukti dan klaim yang belum didukung. Jangan menyebut kedua teks sebagai penelitian atau mengarang data kehadiran.`),
    speakingTask: speaking(`${argumentSources} Pertahankan rekomendasimu selama sekitar 4–5 menit dengan dukungan dua sumber dan kontra-argumen yang adil. Jawab: What is the strongest objection to your proposal? How would you change the plan in response? What can the sources not establish? Bedakan alasan logis dari hasil yang telah diukur.`),
    phaseTask: null
  },
  {
    week: 23,
    objective: 'Menyajikan argumen akademik dengan jejak sumber dan menjawab pertanyaan langsung tanpa mengarang bukti.',
    title: 'Panduan ruang museum',
    questions: [
      { id: 'w23-q1', prompt: 'Kamu memakai usulan Kira tentang kartu rute tercetak. Perlu atribusi dalam presentasi lisan? Jawab ya/tidak.', accepted: ['ya'], explanation: 'Asal ide harus terdengar, tidak hanya ada di daftar akhir. Pendengar perlu membedakan isi sumber dan rekomendasi pembicara.' },
      { id: 'w23-q2', prompt: 'Sumber tidak memberi data biaya. Lengkapi respons Q&A dengan mengubah provide menjadi negatif present simple: “The sources ___ cost data.” Tulis hanya kata-kata yang hilang.', accepted: ['do not provide', "don't provide"], explanation: 'Do not provide mengakui informasi tidak tersedia. Jangan menebak opsi termurah hanya agar jawaban terdengar pasti.' },
      { id: 'w23-q3', prompt: 'Dalam Q&A, “By access, do you mean internet access or wheelchair access?” adalah clarification atau conclusion?', accepted: ['clarification'], explanation: 'Kalimat memeriksa makna istilah sebelum menjawab. Ia belum menyimpulkan hasil atau menghindari pertanyaan.' },
      { id: 'w23-q4', prompt: 'Kedua sumber tidak mengukur kesalahan navigasi. Lengkapi jawaban langsung tentang batasan dengan dua kata: “Neither source measures ___ ___.” Gunakan frasa Inggris dari konteks: navigation errors.', accepted: ['navigation errors'], explanation: 'Jawaban langsung menyebut keterbatasan yang ditanya. Setelah inti pertanyaan terjawab, tambahkan detail relevan; jangan mengulang seluruh pengantar.' }
    ],
    writingTask: writing(`${presentationSources} Buat outline presentasi lima bagian dan ringkasan 180–250 kata untuk kurator museum. Sertakan pertanyaan utama, posisi sementara, perbandingan sumber beratribusi, batasan, dan rekomendasi bersyarat. Tambahkan empat pertanyaan audiens beserta garis besar jawaban yang mengakui bila data tidak tersedia; salah satunya harus menanyakan biaya dan satu lagi keterbatasan bukti.`),
    speakingTask: speaking(`${presentationSources} Presentasikan pilihan panduan untuk relawan museum selama 6–8 menit, sebut sumber saat memakai idenya, dan bedakan usulanmu dari fakta teks. Jawab empat pertanyaan: Which option would you recommend and why? What happens when reception is weak? Which option is cheaper? What evidence would make you change your recommendation? Akui bahwa biaya dan kesalahan navigasi belum diukur.`),
    phaseTask: null
  },
  {
    week: 24,
    objective: 'Mentransfer sumber ke email, memo, dan presentasi usulan yang konsisten serta dapat ditindaklanjuti.',
    title: 'Antrean di tempat perbaikan warga',
    questions: [
      { id: 'w24-q1', prompt: 'Memo mengusulkan uji coba dua minggu, tetapi email meminta penerapan permanen segera. Apakah kedua dokumen konsisten? Jawab ya/tidak.', accepted: ['tidak'], explanation: 'Keputusan yang diminta berbeda. Cocokkan skala, durasi, dan syarat usulan antarproduk, bukan sekadar tata bahasa.' },
      { id: 'w24-q2', prompt: '“I propose that Nisa checks the tickets next Monday.” Ini source fact atau own proposal? Jawab salah satu label.', accepted: ['own proposal'], explanation: 'I propose menandai rencana penulis. Nama pelaku/tenggat yang kamu tetapkan tidak boleh dipresentasikan sebagai informasi sumber.' },
      { id: 'w24-q3', prompt: 'Untuk mengukur waktu tunggu, catat arrival time dan waktu mulai dilayani. Lengkapi satu kata: “Waiting time is service-start time ___ arrival time.” Jawab minus atau plus.', accepted: ['minus'], explanation: 'Waktu tunggu adalah waktu mulai layanan dikurangi waktu datang. Ukuran ini dapat diamati, tidak sama dengan mengasumsikan semua pengunjung lebih puas.' },
      { id: 'w24-q4', prompt: 'Uji coba baru akan berlangsung. Perbaiki bentuk waktu dengan mengganti has reduced menjadi may reduce: “The trial has reduced confusion.” Tulis seluruh kalimat.', accepted: ['The trial may reduce confusion.'], explanation: 'May reduce menyatakan kemungkinan manfaat, bukan hasil yang sudah terjadi. Rencana, perkiraan, dan hasil perlu dibedakan.' }
    ],
    writingTask: writing(`${capstoneSources} Buat paket untuk koordinator tempat perbaikan: email singkat meminta persetujuan dan memo 200–300 kata. Rumuskan masalah, bandingkan ide sumber, usulkan percobaan terbatas dengan pelaku/tenggat yang kamu tandai sebagai usulan, tentukan cara memeriksa hasil dan satu batasan. Pastikan email dan memo meminta keputusan sama. Jangan mengarang penghematan waktu.`),
    speakingTask: speaking(`${capstoneSources} Presentasikan usulan yang konsisten dengan email/memomu selama 5–8 menit. Jelaskan masalah, pilihan, alasan, uji coba, dan batas bukti. Jawab: How will tickets record a visitor’s needs? Could the arrival conversation slow the queue? What observation would show that the trial should change? Sebut sumber dan jangan mengklaim hasil uji yang belum terjadi.`),
    phaseTask: phase('Gate F — dua sumber baru fiktif tentang meja informasi festival: A, “A Question Card”, Raka Lumi: Visitors could write their question on a card before reaching the desk. This may help volunteers prepare, but some visitors need help writing. No trial has taken place. B, “A Roving Helper”, Weni Tala: A helper in the queue could answer simple questions early. Complex cases would still need the desk, and the extra role needs staffing. No queue lengths or response times have been measured. Tulisan: email persetujuan singkat dan memo 200–300 kata dengan sintesis dua sumber, usulan baru, alasan, akses pengunjung, kebutuhan staf, pelaku/tenggat, dan ukuran uji coba. Rekaman: presentasi 5–8 menit dengan atribusi dan rencana yang konsisten. Jawab: How will you support visitors who cannot write? Who will staff the extra role? What evidence is missing? What would make you stop or revise the trial?')
  },
  {
    week: 25,
    objective: 'Menargetkan dua hambatan berbasis feedback dan menunjukkan perbaikan pada konteks baru, bukan hafalan revisi.',
    title: 'Transfer perbaikan ke peminjaman kostum',
    questions: [
      { id: 'w25-q1', prompt: 'Feedback menyebut tenggat tanpa jam. Lengkapi satu kata agar target dapat diamati: “In the next memo, include a day and a ___ for every deadline.” Gunakan kata Inggris untuk jam/waktu.', accepted: ['time'], explanation: 'Day and time dapat dicek pada memo baru. Target umum seperti be fluent tidak menunjukkan apakah tenggat kini cukup jelas.' },
      { id: 'w25-q2', prompt: 'Menghafal revisi lama lalu membacakannya membuktikan transfer ke konteks baru? Jawab ya/tidak.', accepted: ['tidak'], explanation: 'Transfer memerlukan respons baru dengan tuntutan sebanding dalam konteks berbeda. Hafalan mungkin menunjukkan kelancaran naskah, bukan kemampuan mandiri.' },
      { id: 'w25-q3', prompt: '“Return costumes by Sunday at 18:00; returning earlier is allowed.” Isi by atau on untuk makna paling lambat: “Return them ___ Sunday at 18:00.”', accepted: ['by'], explanation: 'By menetapkan batas akhir. Pilihan preposisi dapat mengubah makna, jadi prioritaskan kesalahan ini bila feedback menunjukkan tenggat membingungkan.' },
      { id: 'w25-q4', prompt: 'Kamu menilai rekaman sendiri tanpa penilai lain. Pilih label jujur: self-check atau human-verified.', accepted: ['self-check'], explanation: 'Self-check berguna untuk diagnosis, tetapi bukan verifikasi independen oleh manusia. Simpan identitas/kondisi penilaian secara jujur.' }
    ],
    writingTask: writing('Pilih dua hambatan spesifik dari feedback tersimpan, sebut bukti dan target teramati dalam catatan pembuka terpisah; bila belum ada feedback, nyatakan belum ada dan targetkan tenggat eksplisit serta pemisahan usulan/hasil, bukan mengarang feedback. Konteks baru: klub teater meminjamkan kostum; pengembalian paling lambat Minggu pukul 18.00; daftar ukuran belum lengkap; kamu mengusulkan pemeriksaan bersama Sabtu, belum diputuskan. Tulis memo 180–250 kata yang meminta tindakan, menyebut pelaku/tenggat yang kamu usulkan, serta tidak menyatakan usulan telah berhasil. Tunjukkan dua perbaikan tanpa menyalin revisi lama.'),
    speakingTask: speaking('Pindahkan dua target perbaikan ke konteks lain: kegiatan merawat kolam komunitas. Alat sudah dibersihkan; pemeriksaan air masih menunggu alat ukur; pembersihan berikut diusulkan Selasa pukul 07.30, belum disetujui. Jelaskan update dan permintaan keputusan selama 3–5 menit. Sebut dua target dalam catatan pendamping, bukan membaca revisi lama. Jawab: What is complete and what is blocked? Is Tuesday confirmed? What will you check before claiming the plan works?'),
    phaseTask: null
  },
  {
    week: 26,
    objective: 'Melaporkan kemampuan per skill dengan bukti/kondisi yang jujur dan menyusun tindak lanjut dari gap yang nyata.',
    title: 'Audit bukti dan rencana berikutnya',
    questions: [
      { id: 'w26-q1', prompt: 'Kamu hanya membaca transkrip, tidak mendengar audio. Apakah ada bukti listening dari tugas itu? Jawab ya/tidak.', accepted: ['tidak'], explanation: 'Membaca transkrip memberi bukti pemahaman teks, bukan kemampuan menangkap ujaran. Catat listening belum tersedia bila audio tidak dikerjakan.' },
      { id: 'w26-q2', prompt: 'Tulisan sudah direvisi menggunakan feedback AI. Untuk menilai tulisan mandiri, pilih independent draft atau assisted revision.', accepted: ['independent draft'], explanation: 'Draft sebelum bantuan adalah bukti mandiri. Assisted revision menunjukkan proses belajar, tetapi tidak menggantikan kemampuan awal tanpa bantuan.' },
      { id: 'w26-q3', prompt: 'Skor kuis lokal 4/4 otomatis membuktikan CEFR B2? Jawab ya/tidak.', accepted: ['tidak'], explanation: 'Tes lokal terbatas pada tugasnya dan tidak tervalidasi sebagai sertifikasi CEFR. Laporkan keberhasilan konkret, bukan konversi skor yang tidak sah.' },
      { id: 'w26-q4', prompt: 'Rencana: jawab tiga pertanyaan baru setiap minggu, simpan audio, tinjau directness setiap empat minggu. Isi satu angka: dalam 12 minggu, berapa sesi tinjau yang dijadwalkan pada minggu 4, 8, dan 12?', accepted: ['3', 'three', 'tiga'], explanation: 'Ada tiga titik tinjau. Rencana yang dapat dievaluasi menyebut kegiatan, bukti tersimpan, dan waktu menilai respons baru, bukan sekadar study more.' }
    ],
    writingTask: writing('Buat laporan audit 200–300 kata berdasarkan bukti milikmu yang benar-benar tersedia: satu kemampuan dan satu gap untuk masing-masing listening, reading, speaking, writing. Sebut id/nama berkas/tanggal dan kondisi bantuan bila ada; jika bukti tidak tersedia, tulis demikian tanpa angka rekaan. Bedakan draft, revisi terbantu, dan respons transfer. Pilih dua gap terbesar untuk rencana 12 minggu dengan kegiatan teramati dan tinjauan setiap empat minggu. Jangan mengklaim CEFR atau verifikasi manusia dari AI.'),
    speakingTask: speaking('Presentasikan audit portofolio 5–8 menit: bandingkan satu bukti awal dan satu bukti baru yang benar-benar ada; jelaskan bantuan/kondisi, satu perubahan yang dapat diamati, dua gap, dan rencana 12 minggu. Bila belum punya pasangan bukti, nyatakan keterbatasannya dan jangan mengarang kemajuan. Jawab: Which evidence was produced independently? What can you still not do reliably? How will you check progress in four weeks? Apa yang kamu ceritakan tentang listening bukan bukti baru listening itu sendiri.'),
    phaseTask: phase(`${finalSources} Evaluasi akhir — konteks baru pertukaran benih, bukan mengulang proyek minggu 24. Tulisan: email permintaan persetujuan dan memo 200–300 kata untuk koordinator kebun; sintesis dua sumber dengan atribusi, bedakan dukungan/batasan, usulkan sistem yang memperhatikan pencatatan dan akses anggota absen, tetapkan pelaku/tenggat sebagai rencana, serta ukuran uji coba tanpa mengarang hasil pertumbuhan. Sertakan catatan singkat kondisi pengerjaan dan kaitkan satu kekuatan/satu gap dengan bukti portofolio nyata bila tersedia. Rekaman: presentasi 5–8 menit dan jawaban empat pertanyaan: How will the records remain readable? How can absent gardeners contribute? Can either source prove better plant growth? What evidence would you collect before a permanent decision? Nyatakan bila suatu bukti portofolio atau listening belum tersedia; jangan mengubah audit lokal menjadi label CEFR.`)
  }
];
