'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    // Insert questions_explanations data
    await queryInterface.bulkInsert('questions_explanations', [
      { id_answer_option: 2, question_explanation: 'Paragraf tersebut menekankan pentingnya literasi di era digital.' },
      { id_answer_option: 8, question_explanation: 'Simpulan yang tepat adalah bahwa media sosial menjadi penyebab menurunnya literasi.' },
      { id_answer_option: 13, question_explanation: 'Pernyataan menjelaskan bahwa literasi bukan hanya membaca dan menulis, tapi juga berpikir kritis.' },
      { id_answer_option: 18, question_explanation: 'Membaca membantu meningkatkan kemampuan berpikir kritis siswa.' },
      { id_answer_option: 23, question_explanation: 'Tujuan program literasi adalah membentuk siswa yang kritis dan komunikatif.' },
      { id_answer_option: 27, question_explanation: 'Membaca kritis membantu memahami makna sesungguhnya dari teks di tengah arus informasi.' },
      { id_answer_option: 33, question_explanation: 'Menulis memperkuat pemahaman dan menjadi sarana menuangkan ide.' },
      { id_answer_option: 38, question_explanation: 'Membaca sejak dini memperluas kosa kata dan meningkatkan kemampuan berpikir logis.' },
      { id_answer_option: 43, question_explanation: 'Masyarakat literat ditandai dengan kemampuan mengevaluasi informasi dari berbagai sumber.' },
      { id_answer_option: 49, question_explanation: 'The word "despite" shows the children continued playing even though it was raining.' },
      { id_answer_option: 52, question_explanation: 'The main idea is that global warming leads to rising sea levels, affecting coastal cities.' },
      { id_answer_option: 58, question_explanation: '“Inevitable” means something that cannot be prevented.' },
      { id_answer_option: 62, question_explanation: 'The author clearly states that education is the key to solving poverty issues.' },
      { id_answer_option: 69, question_explanation: 'The passage states that technology allows instant communication worldwide.' },
      { id_answer_option: 73, question_explanation: 'Critical thinking helps individuals analyze and evaluate information before making decisions.' },
      { id_answer_option: 78, question_explanation: 'Paragraf membahas tentang kekayaan sumber daya dan tantangan pengelolaannya.' },
      { id_answer_option: 83, question_explanation: 'Kalimat menunjukkan tujuan penggunaan energi terbarukan untuk mengurangi ketergantungan pada energi fosil.' },
      { id_answer_option: 86, question_explanation: 'Kalimat tersebut merangkum isi teks dan menyarankan tindakan, cocok sebagai penutup.' },
      { id_answer_option: 93, question_explanation: 'Pernyataan bahwa membaca buku meningkatkan empati termasuk dalam bagian argumentasi.' },
      { id_answer_option: 96, question_explanation: 'Kalimat tersebut singkat, jelas, dan memenuhi kaidah kalimat efektif.' },
      { id_answer_option: 104, question_explanation: 'Paragraf yang baik memiliki satu gagasan utama dan didukung kalimat penjelas.' },
      { id_answer_option: 106, question_explanation: 'Jika semua A adalah B, dan semua B adalah C, maka semua A juga adalah C (sifat transitif).' },
      { id_answer_option: 113, question_explanation: 'Jika semua siswa rajin lulus, maka yang tidak lulus berarti tidak rajin.' },
      { id_answer_option: 118, question_explanation: 'Citra paling pendek karena dia lebih pendek dari Budi dan Ani lebih tinggi dari Budi.' },
      { id_answer_option: 123, question_explanation: 'Tia finis setelah Sinta dan Rani, maka Tia paling akhir.' },
      { id_answer_option: 128, question_explanation: 'Jika hujan maka jalanan basah. Karena jalanan tidak basah, berarti tidak hujan (modus tollens).' },
      { id_answer_option: 131, question_explanation: 'Pernyataan awal tidak berlaku untuk semua burung, penguin adalah pengecualian yang tidak bisa terbang.' },
      { id_answer_option: 138, question_explanation: 'Jika hari ini libur maka toko tutup. Karena toko buka, maka hari ini bukan hari libur (modus tollens).' },
      { id_answer_option: 141, question_explanation: 'Jika biasanya tepat waktu dan hari ini terlambat, kemungkinan ada kendala atau alasan lain.' },
      { id_answer_option: 146, question_explanation: 'Karena semua dokter adalah orang pintar dan Rina adalah dokter, maka Rina pasti pintar.' },
      { id_answer_option: 153, question_explanation: 'Bumi mengelilingi matahari dalam waktu sekitar 365 hari, disebut satu tahun.' },
      { id_answer_option: 157, question_explanation: 'Sumpah Pemuda diikrarkan pada 28 Oktober 1928 sebagai tonggak persatuan bangsa.' },
      { id_answer_option: 164, question_explanation: 'India tidak memiliki batas darat maupun laut langsung dengan Indonesia.' },
      { id_answer_option: 166, question_explanation: 'Bahasa resmi PBB meliputi Arab, Mandarin, Inggris, Prancis, Rusia, dan Spanyol.' },
      { id_answer_option: 173, question_explanation: 'Konstitusi menjadi dasar hukum tertinggi yang mengatur sistem pemerintahan dan hak warga negara.' },
      { id_answer_option: 176, question_explanation: 'Ibu kota Indonesia adalah Jakarta, yang juga merupakan pusat pemerintahan dan ekonomi negara.' },
      { id_answer_option: 184, question_explanation: 'Dengan eliminasi-substitusi, 3p + 2b = 26000 dan 2p + 3b = 28000, maka p = Rp6.000.' },
      { id_answer_option: 187, question_explanation: 'Kecepatan awal = 60 km/jam, kecepatan baru = 80 km/jam, maka waktu = 180/80 = 2,25 jam = 2,5 jam.' },
      { id_answer_option: 192, question_explanation: 'Jumlah awal = 60, setelah tambah 8 jadi 68, rata-rata baru = 68/5 = 13.6 ≈ 14.' },
      { id_answer_option: 200, question_explanation: '4x – 7 = 2x + 5 → 2x = 12 → x = 6.' },
      { id_answer_option: 204, question_explanation: 'Diskon 20% dari Rp250.000 = Rp50.000 → Harga akhir = Rp200.000.' },
      { id_answer_option: 207, question_explanation: 'Bunga 5% per tahun berarti bunga Rp50.000 per tahun. Setelah 2 tahun, saldo akhir = Rp1.000.000 + Rp100.000 = Rp1.100.000.' },
      { id_answer_option: 211, question_explanation: 'Luas segitiga = 1/2 × alas × tinggi = 1/2 × 10 × 8 = 40 cm².' },
      { id_answer_option: 217, question_explanation: 'Persamaan dapat difaktorkan: (x-2)(x-3)=0 → x = 2 dan x = 3.' },
      { id_answer_option: 223, question_explanation: 'Total bola = 8, bola biru = 3 → Peluang = 3/8.' },
      { id_answer_option: 228, question_explanation: 'Keliling = 2(p + l) = 36, panjang = 10 → 2(10 + l) = 36 → l = 8.' },
      { id_answer_option: 234, question_explanation: 'f(4) = 2×4 + 3 = 8 + 3 = 11.' },
      { id_answer_option: 237, question_explanation: 'Volume kubus = s³, dimana s = 5 cm. Maka volume = 5³ = 125 cm³.' }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
