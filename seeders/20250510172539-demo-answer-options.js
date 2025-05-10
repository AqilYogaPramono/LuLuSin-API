'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('answer_options', [
      // contoh untuk question_id = 1
      { id_question: 1, answer_option: 'Masyarakat harus berhati-hati terhadap berita bohong' },
      { id_question: 1, answer_option: 'Pentingnya kemampuan literasi di era digital' },
      // … dst.
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('answer_options', null, {});
  }
};

