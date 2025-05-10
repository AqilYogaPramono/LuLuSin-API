'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tryouts', [
      { tryout_name: 'Tryout Sudah Dikerjakan',       status: 'show' },
      { tryout_name: 'Tryout Sudah Dikerjakan ', status: 'show' },
      { tryout_name: 'Tryout Belum Dikerjakan',       status: 'show' },
      { tryout_name: 'Tryout Belum Publish',          status: 'hide' }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tryouts', null, {});
  }
};

