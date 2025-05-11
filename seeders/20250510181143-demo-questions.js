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
    // Insert questions data
    await queryInterface.bulkInsert('questions', [
      // id_tryout: 1, id_subject: 1
      { id_tryout: 1, id_subject: 1, question: 'Bacalah paragraf berikut:"Di era digital, kemampuan literasi sangat penting agar masyarakat mampu memilah informasi yang valid dan tidak terprovokasi oleh berita bohong."Apa pesan utama dari paragraf tersebut?', question_image: '', score: 100 },
      { id_tryout: 1, id_subject: 1, question: 'Bacalah kutipan:"Banyak remaja saat ini lebih tertarik pada media sosial daripada membaca buku. Akibatnya, kemampuan literasi mereka menurun."Apa simpulan dari kutipan tersebut?', question_image: '', score: 100 },
      { id_tryout: 1, id_subject: 1, question: 'Perhatikan pernyataan berikut:"Literasi tidak hanya mencakup kemampuan membaca dan menulis, tetapi juga memahami dan menggunakan informasi secara kritis."Apa yang dimaksud dengan literasi menurut pernyataan tersebut?', question_image: '', score: 100 },
      // id_tryout: 2, id_subject: 1
      { id_tryout: 2, id_subject: 1, question: 'Bacalah pernyataan:"Siswa yang gemar membaca cenderung memiliki kemampuan berpikir kritis yang lebih baik."Apa hubungan antara membaca dan berpikir kritis berdasarkan pernyataan tersebut?', question_image: '', score: 100 },
      { id_tryout: 2, id_subject: 1, question: 'Perhatikan kutipan:"Program literasi di sekolah bertujuan membentuk siswa yang mampu menyaring informasi dan berkomunikasi secara efektif."Apa tujuan utama dari program literasi tersebut?', question_image: '', score: 100 },
      { id_tryout: 2, id_subject: 1, question: 'Bacalah pernyataan berikut:"Di tengah arus informasi yang deras, kemampuan membaca kritis menjadi kunci untuk memahami makna sebenarnya dari suatu teks."Mengapa membaca kritis penting dalam era informasi?', question_image: '', score: 100 },
      // id_tryout: 3, id_subject: 1
      { id_tryout: 3, id_subject: 1, question: 'Perhatikan kutipan berikut:"Menulis adalah cara menuangkan ide dan memperkuat pemahaman terhadap suatu topik."Apa manfaat dari kegiatan menulis menurut kutipan tersebut?', question_image: '', score: 100 },
      { id_tryout: 3, id_subject: 1, question: 'Bacalah kutipan:"Anak-anak yang terbiasa membaca sejak dini memiliki kosa kata yang lebih luas dan kemampuan berpikir logis yang baik."Apa dampak kebiasaan membaca sejak dini?', question_image: '', score: 100 },
      { id_tryout: 3, id_subject: 1, question: 'Perhatikan pernyataan berikut:"Salah satu indikator masyarakat literat adalah mampu mengevaluasi informasi yang diterima dari berbagai sumber."Apa ciri utama masyarakat literat berdasarkan pernyataan tersebut?', question_image: '', score: 100 },
      // id_tryout: 1, id_subject: 2
      { id_tryout: 1, id_subject: 2, question: 'Read the following sentence:"Despite the heavy rain, the children continued to play outside."What does the sentence imply?', question_image: '', score: 100 },
      { id_tryout: 1, id_subject: 2, question: 'Read the excerpt:"Global warming has led to rising sea levels, threatening coastal cities."What is the main idea of the sentence?', question_image: '', score: 100 },
      // id_tryout: 2, id_subject: 2
      { id_tryout: 2, id_subject: 2, question: 'Choose the best meaning of the word "inevitable" in the sentence:"With the ongoing deforestation, environmental damage seems inevitable."', question_image: '', score: 100 },
      { id_tryout: 2, id_subject: 2, question: 'Read the sentence:"The author argues that education is the key to solving poverty issues."What is the author\'s main argument?', question_image: '', score: 100 },
      // id_tryout: 3, id_subject: 2
      { id_tryout: 3, id_subject: 2, question: 'Read the short passage:"Technology has transformed the way we communicate, allowing instant messaging across the globe."What is the effect of technology on communication according to the passage?', question_image: '', score: 100 },
      { id_tryout: 3, id_subject: 2, question: 'Read the following statement: "Critical thinking enables individuals to assess information and make informed decisions."What is the role of critical thinking according to the statement?', question_image: '', score: 100 },
      // id_tryout: 1, id_subject: 3
      { id_tryout: 1, id_subject: 3, question: 'Bacalah paragraf berikut:"Indonesia merupakan negara kepulauan dengan kekayaan alam yang melimpah. Namun, pengelolaan sumber daya alam masih menjadi tantangan."Apa topik utama paragraf tersebut?', question_image: '', score: 100 },
      { id_tryout: 1, id_subject: 3, question: 'Bacalah kalimat berikut:"Pemerintah terus mendorong penggunaan energi terbarukan untuk mengurangi ketergantungan terhadap bahan bakar fosil."Apa tujuan dari kalimat tersebut?', question_image: '', score: 100 },
      // id_tryout: 2, id_subject: 3
      { id_tryout: 2, id_subject: 3, question: 'Kalimat manakah yang paling tepat sebagai penutup dari teks argumentatif?', question_image: '', score: 100 },
      { id_tryout: 2, id_subject: 3, question: 'Dalam sebuah artikel, penulis menyatakan bahwa membaca buku dapat meningkatkan empati seseorang. Pernyataan tersebut termasuk bagian?', question_image: '', score: 100 },
      // id_tryout: 3, id_subject: 3
      { id_tryout: 3, id_subject: 3, question: 'Manakah dari kalimat berikut yang termasuk kalimat efektif?', question_image: '', score: 100 },
      { id_tryout: 3, id_subject: 3, question: 'Apa ciri utama dari paragraf yang baik dan padu?', question_image: '', score: 100 },
      // id_tryout: 1, id_subject: 4
      { id_tryout: 1, id_subject: 4, question: 'Jika semua A adalah B, dan semua B adalah C, maka:', question_image: '', score: 100 },
      { id_tryout: 1, id_subject: 4, question: 'Semua siswa yang rajin belajar lulus ujian. Dika tidak lulus ujian. Apa yang bisa disimpulkan?', question_image: '', score: 100 },
      { id_tryout: 1, id_subject: 4, question: 'Ani lebih tinggi dari Budi. Budi lebih tinggi dari Citra. Siapa yang paling pendek?', question_image: '', score: 100 },
      // id_tryout: 2, id_subject: 4
      { id_tryout: 2, id_subject: 4, question: 'Dalam sebuah lomba lari, Rani finis sebelum Sinta, dan Sinta finis sebelum Tia. Siapa yang paling akhir?', question_image: '', score: 100 },
      { id_tryout: 2, id_subject: 4, question: 'Jika hujan maka jalanan basah. Jalanan tidak basah. Maka:', question_image: '', score: 100 },
      { id_tryout: 2, id_subject: 4, question: 'Semua burung bisa terbang. Penguin adalah burung. Apa kesimpulannya?', question_image: '', score: 100 },
      // id_tryout: 3, id_subject: 4
      { id_tryout: 3, id_subject: 4, question: 'Jika hari ini libur maka toko tutup. Toko buka. Maka:', question_image: '', score: 100 },
      { id_tryout: 3, id_subject: 4, question: 'Budi selalu datang tepat waktu. Hari ini Budi terlambat. Apa kemungkinan yang bisa terjadi?', question_image: '', score: 100 },
      { id_tryout: 3, id_subject: 4, question: 'Semua dokter adalah orang pintar. Rina adalah dokter. Maka:', question_image: '', score: 100 },
      // id_tryout: 1, id_subject: 5
      { id_tryout: 1, id_subject: 5, question: 'Bumi mengelilingi matahari dalam waktu sekitar...', question_image: '', score: 100 },
      { id_tryout: 1, id_subject: 5, question: 'Sumpah Pemuda diikrarkan pada tanggal...', question_image: '', score: 100 },
      // id_tryout: 2, id_subject: 5
      { id_tryout: 2, id_subject: 5, question: 'Negara yang tidak berbatasan langsung dengan Indonesia adalah...', question_image: '', score: 100 },
      { id_tryout: 2, id_subject: 5, question: 'Bahasa resmi Perserikatan Bangsa-Bangsa (PBB) berikut ini adalah...', question_image: '', score: 100 },
      // id_tryout: 3, id_subject: 5
      { id_tryout: 3, id_subject: 5, question: 'Fungsi utama konstitusi dalam suatu negara adalah...', question_image: '', score: 100 },
      { id_tryout: 3, id_subject: 5, question: 'Ibu kota Indonesia adalah...', question_image: '', score: 50 },
      // id_tryout: 1, id_subject: 6
      { id_tryout: 1, id_subject: 6, question: 'Jika harga 3 pensil dan 2 buku adalah Rp26.000, dan harga 2 pensil dan 3 buku adalah Rp28.000, maka harga 1 pensil adalah...', question_image: '', score: 100 },
      { id_tryout: 1, id_subject: 6, question: 'Sebuah mobil menempuh jarak 180 km dalam waktu 3 jam. Jika kecepatannya ditambah 20 km/jam, maka waktu tempuhnya menjadi...', question_image: '', score: 100 },
      // id_tryout: 2, id_subject: 6
      { id_tryout: 2, id_subject: 6, question: 'Nilai rata-rata dari 5 bilangan adalah 12. Jika satu bilangan ditambahkan 8, maka rata-ratanya menjadi...', question_image: '', score: 100 },
      { id_tryout: 2, id_subject: 6, question: 'Jika 4x – 7 = 2x + 5, maka nilai dari x adalah...', question_image: '', score: 100 },
      // id_tryout: 3, id_subject: 6
      { id_tryout: 3, id_subject: 6, question: 'Sebuah toko memberi diskon 20% untuk semua barang. Jika harga asli sebuah jaket Rp250.000, maka harga setelah diskon adalah...', question_image: '', score: 100 },
      { id_tryout: 3, id_subject: 6, question: 'Jika sebuah tabungan sebesar Rp1.000.000 ditempatkan pada bank yang memberikan bunga 5% per tahun, berapa saldo akhir setelah 2 tahun?', question_image: '', score: 100 },
      // id_tryout: 1, id_subject: 7
      { id_tryout: 1, id_subject: 7, question: 'Sebuah segitiga memiliki panjang alas 10 cm dan tinggi 8 cm. Luas segitiga tersebut adalah...', question_image: '', score: 100 },
      { id_tryout: 1, id_subject: 7, question: 'Jika x² - 5x + 6 = 0, maka nilai x yang memenuhi adalah...', question_image: '', score: 100 },
      // id_tryout: 2, id_subject: 7
      { id_tryout: 2, id_subject: 7, question: 'Sebuah kotak berisi 5 bola merah dan 3 bola biru. Peluang mengambil bola biru adalah...', question_image: '', score: 100 },
      { id_tryout: 2, id_subject: 7, question: 'Sebuah persegi panjang memiliki keliling 36 cm dan panjang 10 cm. Maka lebarnya adalah...', question_image: '', score: 100 },
      // id_tryout: 3, id_subject: 7
      { id_tryout: 3, id_subject: 7, question: 'Jika f(x) = 2x + 3, maka f(4) adalah...', question_image: '', score: 100 },
      { id_tryout: 3, id_subject: 7, question: 'Jika panjang sisi sebuah kubus adalah 5 cm, maka volume kubus tersebut adalah...', question_image: '', score: 100 }
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
