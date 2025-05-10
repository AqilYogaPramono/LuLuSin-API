'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('questions_explanations', [
      { id_answer_option: 2,  question_explanation: 'Paragraf tersebut menekankan pentingnya literasi di era digital.' },
      { id_answer_option: 8,  question_explanation: 'Simpulan yang tepat adalah …' },
      // … dst.
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('questions_explanations', null, {});
  }
};

