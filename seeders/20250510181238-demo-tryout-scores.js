'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tryout_scores', [
      { id_tryout: 2, id_student: 1, average_score: 54, total_correct: 9, total_wrong: 7, total_empty: 0 },
      { id_tryout: 2, id_student: 2, average_score: 100, total_correct: 16, total_wrong: 0, total_empty: 0 },
      { id_tryout: 1, id_student: 1, average_score: 100, total_correct: 16, total_wrong: 0, total_empty: 0 },
      { id_tryout: 1, id_student: 2, average_score: 54, total_correct: 9, total_wrong: 7, total_empty: 0 },
    ], {});
  },

  async down (queryInterface, Sequelize) {

  }
};
