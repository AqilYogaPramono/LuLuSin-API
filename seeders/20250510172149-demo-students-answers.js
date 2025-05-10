'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('students_answers', [
      { id_student: 1, answer_options_id: 2,  id_answer_option: 1 },
      { id_student: 1, answer_options_id: 8,  id_answer_option: 2 },
      // … dst.
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('students_answers', null, {});
  }
};

