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
    await queryInterface.bulkInsert('students_answers', [
      // Student 1
      { id_student: 1, answer_options_id: 2, id_answer_option: 1 },
      { id_student: 1, answer_options_id: 8, id_answer_option: 2 },
      { id_student: 1, answer_options_id: 13, id_answer_option: 3 },
      { id_student: 1, answer_options_id: 49, id_answer_option: 10 },
      { id_student: 1, answer_options_id: 52, id_answer_option: 11 },
      { id_student: 1, answer_options_id: 78, id_answer_option: 16 },
      { id_student: 1, answer_options_id: 83, id_answer_option: 17 },
      { id_student: 1, answer_options_id: 106, id_answer_option: 22 },
      { id_student: 1, answer_options_id: 113, id_answer_option: 23 },
      { id_student: 1, answer_options_id: 118, id_answer_option: 24 },
      { id_student: 1, answer_options_id: 153, id_answer_option: 31 },
      { id_student: 1, answer_options_id: 157, id_answer_option: 32 },
      { id_student: 1, answer_options_id: 184, id_answer_option: 37 },
      { id_student: 1, answer_options_id: 187, id_answer_option: 38 },
      { id_student: 1, answer_options_id: 211, id_answer_option: 43 },
      { id_student: 1, answer_options_id: 217, id_answer_option: 44 },
      { id_student: 1, answer_options_id: 17, id_answer_option: 4 },
      { id_student: 1, answer_options_id: 23, id_answer_option: 5 },
      { id_student: 1, answer_options_id: 27, id_answer_option: 6 },
      { id_student: 1, answer_options_id: 57, id_answer_option: 12 },
      { id_student: 1, answer_options_id: 62, id_answer_option: 13 },
      { id_student: 1, answer_options_id: 87, id_answer_option: 18 },
      { id_student: 1, answer_options_id: 93, id_answer_option: 19 },
      { id_student: 1, answer_options_id: 122, id_answer_option: 25 },
      { id_student: 1, answer_options_id: 128, id_answer_option: 26 },
      { id_student: 1, answer_options_id: 131, id_answer_option: 27 },
      { id_student: 1, answer_options_id: 163, id_answer_option: 33 },
      { id_student: 1, answer_options_id: 166, id_answer_option: 34 },
      { id_student: 1, answer_options_id: 191, id_answer_option: 39 },
      { id_student: 1, answer_options_id: 200, id_answer_option: 40 },
      { id_student: 1, answer_options_id: 222, id_answer_option: 45 },
      { id_student: 1, answer_options_id: 228, id_answer_option: 46 },
      // Student 2
      { id_student: 2, answer_options_id: 1, id_answer_option: 1 },
      { id_student: 2, answer_options_id: 8, id_answer_option: 2 },
      { id_student: 2, answer_options_id: 13, id_answer_option: 3 },
      { id_student: 2, answer_options_id: 48, id_answer_option: 10 },
      { id_student: 2, answer_options_id: 52, id_answer_option: 11 },
      { id_student: 2, answer_options_id: 77, id_answer_option: 16 },
      { id_student: 2, answer_options_id: 83, id_answer_option: 17 },
      { id_student: 2, answer_options_id: 107, id_answer_option: 22 },
      { id_student: 2, answer_options_id: 113, id_answer_option: 23 },
      { id_student: 2, answer_options_id: 118, id_answer_option: 24 },
      { id_student: 2, answer_options_id: 152, id_answer_option: 31 },
      { id_student: 2, answer_options_id: 157, id_answer_option: 32 },
      { id_student: 2, answer_options_id: 183, id_answer_option: 37 },
      { id_student: 2, answer_options_id: 187, id_answer_option: 38 },
      { id_student: 2, answer_options_id: 212, id_answer_option: 43 },
      { id_student: 2, answer_options_id: 217, id_answer_option: 44 },
      { id_student: 2, answer_options_id: 18, id_answer_option: 4 },
      { id_student: 2, answer_options_id: 23, id_answer_option: 5 },
      { id_student: 2, answer_options_id: 27, id_answer_option: 6 },
      { id_student: 2, answer_options_id: 58, id_answer_option: 12 },
      { id_student: 2, answer_options_id: 62, id_answer_option: 13 },
      { id_student: 2, answer_options_id: 86, id_answer_option: 18 },
      { id_student: 2, answer_options_id: 93, id_answer_option: 19 },
      { id_student: 2, answer_options_id: 123, id_answer_option: 25 },
      { id_student: 2, answer_options_id: 128, id_answer_option: 26 },
      { id_student: 2, answer_options_id: 131, id_answer_option: 27 },
      { id_student: 2, answer_options_id: 164, id_answer_option: 33 },
      { id_student: 2, answer_options_id: 166, id_answer_option: 34 },
      { id_student: 2, answer_options_id: 192, id_answer_option: 39 },
      { id_student: 2, answer_options_id: 200, id_answer_option: 40 },
      { id_student: 2, answer_options_id: 223, id_answer_option: 45 },
      { id_student: 2, answer_options_id: 228, id_answer_option: 46 }
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
