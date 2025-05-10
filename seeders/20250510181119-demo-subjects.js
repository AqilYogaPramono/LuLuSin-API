'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here. Assumes timestamps are disabled.
     */
    await queryInterface.bulkInsert('subjects', [
      { id_subject_category: 1, subject_name: 'Literasi Dalam Bahasa Indonesia', time_limit: 4, minimal_questions: 3 },
      { id_subject_category: 1, subject_name: 'Literasi Dalam Bahasa Inggris', time_limit: 2, minimal_questions: 2 },
      { id_subject_category: 2, subject_name: 'Pemahaman Bacaan dan Menulis', time_limit: 2, minimal_questions: 2 },
      { id_subject_category: 2, subject_name: 'Penalaran Umum', time_limit: 3, minimal_questions: 3 },
      { id_subject_category: 2, subject_name: 'Pengetahuan dan Pemahaman Umum', time_limit: 1, minimal_questions: 2 },
      { id_subject_category: 2, subject_name: 'Pengetahuan Kuantitatif', time_limit: 2, minimal_questions: 2 },
      { id_subject_category: 3, subject_name: 'Penalaran Matematika', time_limit: 4, minimal_questions: 2 }
    ], {});
  },

  // No down migration since seeds are permanent
  async down (queryInterface, Sequelize) {
    // intentionally left blank
  }
};
