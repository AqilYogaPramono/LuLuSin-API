'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('questions', [
      // hanya contoh 2 baris pertama; lanjutkan sesuai daftar Anda
      {
        id_tryout:     1,
        id_subject:    1,
        question:      'Bacalah paragraf berikut: "… berita bohong." Apa pesan utama?',
        question_image:'',
        score:         100
      },
      {
        id_tryout:     1,
        id_subject:    1,
        question:      'Bacalah kutipan: "… literasi menurun." Apa simpulan?',
        question_image:'',
        score:         100
      }
      // … dst.
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('questions', null, {});
  }
};

