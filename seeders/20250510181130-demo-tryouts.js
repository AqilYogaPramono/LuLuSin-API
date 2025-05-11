'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here. Assumes timestamps are disabled.
     */
    await queryInterface.bulkInsert('tryouts', [
      { tryout_name: 'Tryout Sudah Dikerjakan', status: 'show' },
      { tryout_name: 'Tryout Belum Dikerjakan', status: 'show' },
      { tryout_name: 'Tryout Belum Dikerjakan', status: 'show' },
      { tryout_name: 'Tryout Belum Publish', status: 'hide' }
    ], {});
  },

  // No down migration since seeds are permanent
  async down (queryInterface, Sequelize) {
    // intentionally left blank
  }
};
