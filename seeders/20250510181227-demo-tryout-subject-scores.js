'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tryout_subject_scores', [
      { id_subject: 1, id_student: 2, id_tryout: 1, average_score: 66, total_correct: 2, total_wrong: 1, total_empty: 0 },
      { id_subject: 2, id_student: 2, id_tryout: 1, average_score: 50, total_correct: 1, total_wrong: 1, total_empty: 0 },
      { id_subject: 3, id_student: 2, id_tryout: 1, average_score: 50, total_correct: 1, total_wrong: 1, total_empty: 0 },
      { id_subject: 4, id_student: 2, id_tryout: 1, average_score: 66, total_correct: 2, total_wrong: 1, total_empty: 0 },
      { id_subject: 5, id_student: 2, id_tryout: 1, average_score: 50, total_correct: 1, total_wrong: 1, total_empty: 0 },
      { id_subject: 6, id_student: 2, id_tryout: 1, average_score: 50, total_correct: 1, total_wrong: 1, total_empty: 0 },
      { id_subject: 7, id_student: 2, id_tryout: 1, average_score: 50, total_correct: 1, total_wrong: 1, total_empty: 0 },
      { id_subject: 1, id_student: 2, id_tryout: 2, average_score: 100, total_correct: 3, total_wrong: 0, total_empty: 0 },
      { id_subject: 2, id_student: 2, id_tryout: 2, average_score: 100, total_correct: 2, total_wrong: 0, total_empty: 0 },
      { id_subject: 3, id_student: 2, id_tryout: 2, average_score: 100, total_correct: 2, total_wrong: 0, total_empty: 0 },
      { id_subject: 4, id_student: 2, id_tryout: 2, average_score: 100, total_correct: 3, total_wrong: 0, total_empty: 0 },
      { id_subject: 5, id_student: 2, id_tryout: 2, average_score: 100, total_correct: 2, total_wrong: 0, total_empty: 0 },
      { id_subject: 6, id_student: 2, id_tryout: 2, average_score: 100, total_correct: 2, total_wrong: 0, total_empty: 0 },
      { id_subject: 7, id_student: 2, id_tryout: 2, average_score: 100, total_correct: 2, total_wrong: 0, total_empty: 0 },
      { id_subject: 1, id_student: 1, id_tryout: 1, average_score: 100, total_correct: 3, total_wrong: 0, total_empty: 0 },
      { id_subject: 2, id_student: 1, id_tryout: 1, average_score: 100, total_correct: 2, total_wrong: 0, total_empty: 0 },
      { id_subject: 3, id_student: 1, id_tryout: 1, average_score: 100, total_correct: 2, total_wrong: 0, total_empty: 0 },
      { id_subject: 4, id_student: 1, id_tryout: 1, average_score: 100, total_correct: 3, total_wrong: 0, total_empty: 0 },
      { id_subject: 5, id_student: 1, id_tryout: 1, average_score: 100, total_correct: 2, total_wrong: 0, total_empty: 0 },
      { id_subject: 6, id_student: 1, id_tryout: 1, average_score: 100, total_correct: 2, total_wrong: 0, total_empty: 0 },
      { id_subject: 7, id_student: 1, id_tryout: 1, average_score: 100, total_correct: 2, total_wrong: 0, total_empty: 0 },
      { id_subject: 1, id_student: 1, id_tryout: 2, average_score: 66, total_correct: 2, total_wrong: 1, total_empty: 0 },
      { id_subject: 2, id_student: 1, id_tryout: 2, average_score: 50, total_correct: 1, total_wrong: 1, total_empty: 0 },
      { id_subject: 3, id_student: 1, id_tryout: 2, average_score: 50, total_correct: 1, total_wrong: 1, total_empty: 0 },
      { id_subject: 4, id_student: 1, id_tryout: 2, average_score: 66, total_correct: 2, total_wrong: 1, total_empty: 0 },
      { id_subject: 5, id_student: 1, id_tryout: 2, average_score: 50, total_correct: 1, total_wrong: 1, total_empty: 0 },
      { id_subject: 6, id_student: 1, id_tryout: 2, average_score: 50, total_correct: 1, total_wrong: 1, total_empty: 0 },
      { id_subject: 7, id_student: 1, id_tryout: 2, average_score: 50, total_correct: 1, total_wrong: 1, total_empty: 0 },
    ], {});
  },

  async down (queryInterface, Sequelize) {

  }
};