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
    // Insert answer_options data
    await queryInterface.bulkInsert('answer_options', [
      // id_question: 1
      { id_question: 1, answer_option: 'Masyarakat harus berhati-hati terhadap berita bohong' },
      { id_question: 1, answer_option: 'Pentingnya kemampuan literasi di era digital' },
      { id_question: 1, answer_option: 'Digitalisasi membawa dampak buruk' },
      { id_question: 1, answer_option: 'Masyarakat belum paham teknologi' },
      { id_question: 1, answer_option: 'Literasi hanya untuk pelajar' },
      // id_question: 2
      { id_question: 2, answer_option: 'Media sosial tidak bermanfaat' },
      { id_question: 2, answer_option: 'Remaja harus membaca buku di sekolah' },
      { id_question: 2, answer_option: 'Kemampuan literasi remaja menurun karena media sosial' },
      { id_question: 2, answer_option: 'Remaja lebih pintar dari generasi sebelumnya' },
      { id_question: 2, answer_option: 'Remaja senang membaca buku pelajaran' },
      // id_question: 3
      { id_question: 3, answer_option: 'Literasi berarti membaca dan menulis dengan cepat' },
      { id_question: 3, answer_option: 'Literasi adalah kemampuan teknologi informasi' },
      { id_question: 3, answer_option: 'Literasi mencakup pemahaman dan penggunaan informasi secara kritis' },
      { id_question: 3, answer_option: 'Literasi hanya dipelajari di sekolah' },
      { id_question: 3, answer_option: 'Literasi tidak penting dalam kehidupan' },
      // id_question: 4
      { id_question: 4, answer_option: 'Membaca membuat siswa cerdas secara emosional' },
      { id_question: 4, answer_option: 'Berpikir kritis adalah bagian dari membaca' },
      { id_question: 4, answer_option: 'Membaca meningkatkan kemampuan berpikir kritis' },
      { id_question: 4, answer_option: 'Berpikir kritis menurunkan minat baca' },
      { id_question: 4, answer_option: 'Tidak ada hubungan antara membaca dan berpikir' },
      // id_question: 5
      { id_question: 5, answer_option: 'Membuat siswa menjadi penulis handal' },
      { id_question: 5, answer_option: 'Meningkatkan nilai akademik' },
      { id_question: 5, answer_option: 'Membentuk siswa yang mampu menyaring informasi dan berkomunikasi' },
      { id_question: 5, answer_option: 'Membantu siswa menghafal pelajaran' },
      { id_question: 5, answer_option: 'Agar siswa menjadi pustakawan' },
      // id_question: 6
      { id_question: 6, answer_option: 'Agar bisa mengikuti tren di media sosial' },
      { id_question: 6, answer_option: 'Untuk memahami makna sebenarnya dari teks' },
      { id_question: 6, answer_option: 'Supaya tidak ketinggalan berita' },
      { id_question: 6, answer_option: 'Agar dapat membaca lebih cepat' },
      { id_question: 6, answer_option: 'Untuk membuat konten viral' },
      // id_question: 7
      { id_question: 7, answer_option: 'Untuk membuat tulisan panjang' },
      { id_question: 7, answer_option: 'Sebagai hiburan semata' },
      { id_question: 7, answer_option: 'Menuangkan ide dan memperkuat pemahaman' },
      { id_question: 7, answer_option: 'Agar menjadi terkenal' },
      { id_question: 7, answer_option: 'Meniru tulisan orang lain' },
      // id_question: 8
      { id_question: 8, answer_option: 'Mengurangi waktu bermain' },
      { id_question: 8, answer_option: 'Meningkatkan kemampuan logis dan kosa kata' },
      { id_question: 8, answer_option: 'Menambah pekerjaan rumah' },
      { id_question: 8, answer_option: 'Membuat anak menjadi pendiam' },
      { id_question: 8, answer_option: 'Meningkatkan aktivitas fisik' },
      // id_question: 9
      { id_question: 9, answer_option: 'Mengikuti semua informasi yang ada' },
      { id_question: 9, answer_option: 'Mampu mengevaluasi informasi dari berbagai sumber' },
      { id_question: 9, answer_option: 'Menulis berita setiap hari' },
      { id_question: 9, answer_option: 'Menghindari berita dari luar negeri' },
      { id_question: 9, answer_option: 'Memercayai semua informasi di internet' },
      // id_question: 10
      { id_question: 10, answer_option: 'The children were afraid of the rain' },
      { id_question: 10, answer_option: 'The children stopped playing due to the rain' },
      { id_question: 10, answer_option: 'The rain made the children excited' },
      { id_question: 10, answer_option: 'The children ignored the rain and kept playing' },
      { id_question: 10, answer_option: 'The rain caused flooding' },
      // id_question: 11
      { id_question: 11, answer_option: 'Coastal cities are growing rapidly' },
      { id_question: 11, answer_option: 'Global warming affects sea levels and cities' },
      { id_question: 11, answer_option: 'Rainfall is increasing globally' },
      { id_question: 11, answer_option: 'Global warming benefits the climate' },
      { id_question: 11, answer_option: 'Coastal cities are safe from natural disasters' },
      // id_question: 12
      { id_question: 12, answer_option: 'Likely to be avoided' },
      { id_question: 12, answer_option: 'Uncertain' },
      { id_question: 12, answer_option: 'Impossible to prevent' },
      { id_question: 12, answer_option: 'Exciting or thrilling' },
      { id_question: 12, answer_option: 'Quick to happen' },
      // id_question: 13
      { id_question: 13, answer_option: 'Education should be free for all' },
      { id_question: 13, answer_option: 'Education can help reduce poverty' },
      { id_question: 13, answer_option: 'Poverty is caused by illiteracy' },
      { id_question: 13, answer_option: 'Teachers need more training' },
      { id_question: 13, answer_option: 'Poverty affects education access' },
      // id_question: 14
      { id_question: 14, answer_option: 'People prefer face-to-face communication' },
      { id_question: 14, answer_option: 'Technology slows communication' },
      { id_question: 14, answer_option: 'Communication becomes slower and less reliable' },
      { id_question: 14, answer_option: 'Technology enables faster global communication' },
      { id_question: 14, answer_option: 'Global messaging is impossible without mail' },
      // id_question: 15
      { id_question: 15, answer_option: 'To memorize facts quickly' },
      { id_question: 15, answer_option: 'To blindly follow instructions' },
      { id_question: 15, answer_option: 'To assess information and make informed decisions' },
      { id_question: 15, answer_option: 'To rely solely on emotions' },
      { id_question: 15, answer_option: 'To ignore opposing viewpoints' },
      // id_question: 16
      { id_question: 16, answer_option: 'Pentingnya transportasi laut di Indonesia' },
      { id_question: 16, answer_option: 'Pengelolaan hutan secara berkelanjutan' },
      { id_question: 16, answer_option: 'Kekayaan dan tantangan pengelolaan sumber daya alam Indonesia' },
      { id_question: 16, answer_option: 'Pulau-pulau kecil di Indonesia' },
      { id_question: 16, answer_option: 'Keragaman budaya Indonesia' },
      // id_question: 17
      { id_question: 17, answer_option: 'Mengajak masyarakat menanam pohon' },
      { id_question: 17, answer_option: 'Mengurangi emisi dari kendaraan listrik' },
      { id_question: 17, answer_option: 'Mengurangi ketergantungan terhadap energi fosil' },
      { id_question: 17, answer_option: 'Meningkatkan ekspor bahan bakar fosil' },
      { id_question: 17, answer_option: 'Menjual energi ke negara lain' },
      // id_question: 18
      { id_question: 18, answer_option: 'Berdasarkan data tersebut, dapat disimpulkan bahwa pemerintah perlu bertindak cepat.' },
      { id_question: 18, answer_option: 'Sebagai tambahan, mari kita perhatikan grafik berikut.' },
      { id_question: 18, answer_option: 'Pertama, kita harus memahami definisi energi hijau.' },
      { id_question: 18, answer_option: 'Contohnya seperti yang terjadi di negara maju.' },
      { id_question: 18, answer_option: 'Dengan demikian, paragraf ini adalah paragraf pembuka.' },
      // id_question: 19
      { id_question: 19, answer_option: 'Pendahuluan' },
      { id_question: 19, answer_option: 'Kesimpulan' },
      { id_question: 19, answer_option: 'Argumentasi' },
      { id_question: 19, answer_option: 'Sanggahan' },
      { id_question: 19, answer_option: 'Judul' },
      // id_question: 20
      { id_question: 20, answer_option: 'Saya pergi ke pasar untuk membeli sayur dan buah.' },
      { id_question: 20, answer_option: 'Karena dia sudah datang maka saya pulang.' },
      { id_question: 20, answer_option: 'Dimana kamu tinggal adalah tempat yang jauh.' },
      { id_question: 20, answer_option: 'Mereka suka dengan makanan yang pedas yang enak.' },
      { id_question: 20, answer_option: 'Setiap hari dia naik motor dengan sangat cepat sekali.' },
      // id_question: 21
      { id_question: 21, answer_option: 'Memiliki banyak kalimat tanya' },
      { id_question: 21, answer_option: 'Menggunakan kata-kata sulit' },
      { id_question: 21, answer_option: 'Hanya berisi fakta tanpa opini' },
      { id_question: 21, answer_option: 'Memiliki satu gagasan utama yang didukung kalimat penjelas' },
      { id_question: 21, answer_option: 'Selalu diawali dengan kutipan tokoh' },
      // id_question: 22
      { id_question: 22, answer_option: 'Semua A adalah C' },
      { id_question: 22, answer_option: 'Semua C adalah A' },
      { id_question: 22, answer_option: 'Beberapa A bukan C' },
      { id_question: 22, answer_option: 'Semua C adalah B' },
      { id_question: 22, answer_option: 'A dan C tidak berhubungan' },
      // id_question: 23
      { id_question: 23, answer_option: 'Dika rajin belajar' },
      { id_question: 23, answer_option: 'Dika pasti tidak belajar' },
      { id_question: 23, answer_option: 'Dika mungkin sakit saat ujian' },
      { id_question: 23, answer_option: 'Dika tinggal kelas' },
      { id_question: 23, answer_option: 'Dika adalah siswa pintar' },
      // id_question: 24
      { id_question: 24, answer_option: 'Ani' },
      { id_question: 24, answer_option: 'Budi' },
      { id_question: 24, answer_option: 'Citra' },
      { id_question: 24, answer_option: 'Ani dan Citra sama tinggi' },
      { id_question: 24, answer_option: 'Budi dan Citra sama tinggi' },
      // id_question: 25
      { id_question: 25, answer_option: 'Rani' },
      { id_question: 25, answer_option: 'Sinta' },
      { id_question: 25, answer_option: 'Tia' },
      { id_question: 25, answer_option: 'Rani dan Tia bersamaan' },
      { id_question: 25, answer_option: 'Sinta dan Tia bersamaan' },
      // id_question: 26
      { id_question: 26, answer_option: 'Hujan turun' },
      { id_question: 26, answer_option: 'Sedang mendung' },
      { id_question: 26, answer_option: 'Tidak hujan' },
      { id_question: 26, answer_option: 'Jalanan becek' },
      { id_question: 26, answer_option: 'Jalanan rusak' },
      // id_question: 27
      { id_question: 27, answer_option: 'Penguin tidak bisa terbang' },
      { id_question: 27, answer_option: 'Penguin bisa berenang' },
      { id_question: 27, answer_option: 'Penguin adalah mamalia' },
      { id_question: 27, answer_option: 'Semua burung sama' },
      { id_question: 27, answer_option: 'Burung adalah penguin' },
      // id_question: 28
      { id_question: 28, answer_option: 'Hari ini libur' },
      { id_question: 28, answer_option: 'Toko tutup karena hujan' },
      { id_question: 28, answer_option: 'Hari ini bukan hari libur' },
      { id_question: 28, answer_option: 'Toko sedang direnovasi' },
      { id_question: 28, answer_option: 'Hari ini hari Minggu' },
      // id_question: 29
      { id_question: 29, answer_option: 'Budi sakit atau ada kendala' },
      { id_question: 29, answer_option: 'Budi sengaja terlambat' },
      { id_question: 29, answer_option: 'Budi bukan orang tepat waktu' },
      { id_question: 29, answer_option: 'Budi tidak datang' },
      { id_question: 29, answer_option: 'Budi pindah sekolah' },
      // id_question: 30
      { id_question: 30, answer_option: 'Rina adalah orang pintar' },
      { id_question: 30, answer_option: 'Rina bukan dokter' },
      { id_question: 30, answer_option: 'Semua orang pintar adalah dokter' },
      { id_question: 30, answer_option: 'Dokter harus perempuan' },
      { id_question: 30, answer_option: 'Rina tidak pintar' },
      // id_question: 31
      { id_question: 31, answer_option: '24 jam' },
      { id_question: 31, answer_option: '30 hari' },
      { id_question: 31, answer_option: '365 hari' },
      { id_question: 31, answer_option: '12 jam' },
      { id_question: 31, answer_option: '7 hari' },
      // id_question: 32
      { id_question: 32, answer_option: '1 Juni 1945' },
      { id_question: 32, answer_option: '28 Oktober 1928' },
      { id_question: 32, answer_option: '17 Agustus 1945' },
      { id_question: 32, answer_option: '20 Mei 1908' },
      { id_question: 32, answer_option: '10 November 1945' },
      // id_question: 33
      { id_question: 33, answer_option: 'Malaysia' },
      { id_question: 33, answer_option: 'Papua Nugini' },
      { id_question: 33, answer_option: 'Filipina' },
      { id_question: 33, answer_option: 'India' },
      { id_question: 33, answer_option: 'Timor Leste' },
      // id_question: 34
      { id_question: 34, answer_option: 'Arab' },
      { id_question: 34, answer_option: 'Latin' },
      { id_question: 34, answer_option: 'Mandarin' },
      { id_question: 34, answer_option: 'Bahasa Indonesia' },
      { id_question: 34, answer_option: 'Sansekerta' },
      // id_question: 35
      { id_question: 35, answer_option: 'Sebagai pedoman berpakaian' },
      { id_question: 35, answer_option: 'Sebagai alat tukar nasional' },
      { id_question: 35, answer_option: 'Sebagai dasar hukum negara' },
      { id_question: 35, answer_option: 'Sebagai simbol budaya' },
      { id_question: 35, answer_option: 'Sebagai lambang kebangsaan' },
      // id_question: 36
      { id_question: 36, answer_option: 'Jakarta' },
      { id_question: 36, answer_option: 'Surabaya' },
      { id_question: 36, answer_option: 'Bali' },
      { id_question: 36, answer_option: 'Bandung' },
      { id_question: 36, answer_option: 'Medan' },
      // id_question: 37
      { id_question: 37, answer_option: 'Rp2.000' },
      { id_question: 37, answer_option: 'Rp4.000' },
      { id_question: 37, answer_option: 'Rp5.000' },
      { id_question: 37, answer_option: 'Rp6.000' },
      { id_question: 37, answer_option: 'Rp8.000' },
      // id_question: 38
      { id_question: 38, answer_option: '2 jam' },
      { id_question: 38, answer_option: '2,5 jam' },
      { id_question: 38, answer_option: '3 jam' },
      { id_question: 38, answer_option: '3,5 jam' },
      { id_question: 38, answer_option: '4 jam' },
      // id_question: 39
      { id_question: 39, answer_option: '13' },
      { id_question: 39, answer_option: '14' },
      { id_question: 39, answer_option: '15' },
      { id_question: 39, answer_option: '16' },
      { id_question: 39, answer_option: '17' },
      // id_question: 40
      { id_question: 40, answer_option: '2' },
      { id_question: 40, answer_option: '3' },
      { id_question: 40, answer_option: '4' },
      { id_question: 40, answer_option: '5' },
      { id_question: 40, answer_option: '6' },
      // id_question: 41
      { id_question: 41, answer_option: 'Rp150.000' },
      { id_question: 41, answer_option: 'Rp175.000' },
      { id_question: 41, answer_option: 'Rp180.000' },
      { id_question: 41, answer_option: 'Rp200.000' },
      { id_question: 41, answer_option: 'Rp220.000' },
      // id_question: 42
      { id_question: 42, answer_option: 'Rp1.050.000' },
      { id_question: 42, answer_option: 'Rp1.100.000' },
      { id_question: 42, answer_option: 'Rp1.150.000' },
      { id_question: 42, answer_option: 'Rp1.200.000' },
      { id_question: 42, answer_option: 'Rp1.250.000' },
      // id_question: 43
      { id_question: 43, answer_option: '40 cm²' },
      { id_question: 43, answer_option: '50 cm²' },
      { id_question: 43, answer_option: '60 cm²' },
      { id_question: 43, answer_option: '70 cm²' },
      { id_question: 43, answer_option: '80 cm²' },
      // id_question: 44
      { id_question: 44, answer_option: 'x = 1 dan x = 6' },
      { id_question: 44, answer_option: 'x = 2 dan x = 3' },
      { id_question: 44, answer_option: 'x = -2 dan x = -3' },
      { id_question: 44, answer_option: 'x = 5 dan x = 6' },
      { id_question: 44, answer_option: 'x = 1 dan x = 5' },
      // id_question: 45
      { id_question: 45, answer_option: '1/8' },
      { id_question: 45, answer_option: '2/8' },
      { id_question: 45, answer_option: '3/8' },
      { id_question: 45, answer_option: '5/8' },
      { id_question: 45, answer_option: '8/8' },
      // id_question: 46
      { id_question: 46, answer_option: '4 cm' },
      { id_question: 46, answer_option: '6 cm' },
      { id_question: 46, answer_option: '8 cm' },
      { id_question: 46, answer_option: '10 cm' },
      { id_question: 46, answer_option: '12 cm' },
      // id_question: 47
      { id_question: 47, answer_option: '8' },
      { id_question: 47, answer_option: '9' },
      { id_question: 47, answer_option: '10' },
      { id_question: 47, answer_option: '11' },
      { id_question: 47, answer_option: '12' },
      // id_question: 48
      { id_question: 48, answer_option: '100 cm³' },
      { id_question: 48, answer_option: '125 cm³' },
      { id_question: 48, answer_option: '150 cm³' },
      { id_question: 48, answer_option: '175 cm³' },
      { id_question: 48, answer_option: '200 cm³' }
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
