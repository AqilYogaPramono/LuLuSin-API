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
        password: '$2b$10$V3.v67xgl6LczjheIv2TE.Xqky00g0ehU7XvAxjCx.GEa6WZpMEPO',
        status: 'accept'
      },
      {
        student_name: 'Dafa',
        NISN: '234561',
        email: 'dafa@students.com',
        password: '$2b$10$4CjxpwwcXn9qNu4SMSJx4OzGOMwrwNQSs19S29KeKvCD/uLwLrhEO',
        status: 'accept'
      },
      {
        student_name: 'Haidar',
        NISN: '345612',
        email: 'haidar@students.com',
        password: '$2b$10$LX/vwa5nLWvOdFJG.Afooe4earopaGRcY2z30PoJ5g3m623PvLXHS',
        status: 'accept'
      }
    ], {});
  },

  // No down migration since seeds are permanent
  async down (queryInterface, Sequelize) {
    // intentionally left blank
  }
};
