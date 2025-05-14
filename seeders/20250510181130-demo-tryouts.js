'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here. Assumes timestamps are disabled.
     */
    await queryInterface.bulkInsert('tryouts', [
      { tryout_name: 'Tryout Episode 1', status: 'show' },
      { tryout_name: 'Tryout Episode 2', status: 'show' },
      { tryout_name: 'Tryout Episode 3', status: 'show' },
      { tryout_name: 'Tryout Episode 4', status: 'hide' }
    ], {});
  },

  // No down migration since seeds are permanent
  async down (queryInterface, Sequelize) {
    // intentionally left blank
  }
};
