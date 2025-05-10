'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('teachers', [
      { teacher_name: 'Tamisa',  NUPTK: '654321', email: 'tamisa@teachers.com',  password: 'Tamisa123' },
      { teacher_name: 'Danang',  NUPTK: '543216', email: 'danang@teachers.com',  password: 'Danang123' }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('teachers', null, {});
  }
};


