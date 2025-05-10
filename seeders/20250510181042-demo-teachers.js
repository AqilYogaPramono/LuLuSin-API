'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here. Assumes timestamps are disabled.
     */
    await queryInterface.bulkInsert('teachers', [
      {
        teacher_name: 'Tamisa',
        NUPTK: '654321',
        email: 'tamisa@teachers.com',
        password: 'Tamisa123'
      },
      {
        teacher_name: 'Danang',
        NUPTK: '543216',
        email: 'danang@teachers.com',
        password: 'Danang123'
      }
    ], {});
  },

  // No down migration since seeds are permanent
  async down (queryInterface, Sequelize) {
    // intentionally left blank
  }
};
