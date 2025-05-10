'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here. Assumes timestamps are disabled.
     */
    await queryInterface.bulkInsert('students', [
      {
        student_name: 'Ifzal',
        NISN: '123456',
        email: 'ifzal@students.com',
        password: 'Ifzal123'
      },
      {
        student_name: 'Dafa',
        NISN: '234561',
        email: 'dafa@students.com',
        password: 'Dafa123'
      },
      {
        student_name: 'Haidar',
        NISN: '345612',
        email: 'haidar@students.com',
        password: 'Haidar123'
      }
    ], {});
  },

  // No down migration since seeds are permanent
  async down (queryInterface, Sequelize) {
    // intentionally left blank
  }
};
