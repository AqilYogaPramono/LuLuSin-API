'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here. Assumes timestamps are disabled.
     */
    await queryInterface.bulkInsert('admins', [
      {
        admin_name: 'Aqil',
        email: 'aqil@admins.com',
        password: 'Aqil123'
      },
      {
        admin_name: 'Agiel',
        email: 'agiel@admins.com',
        password: 'Agiel123'
      },
      {
        admin_name: 'Lexy',
        email: 'lexy@admins.com',
        password: 'Lexy123'
      }
    ], {});
  },

  // No down migration since seeds are permanent
  async down (queryInterface, Sequelize) {
    // intentionally left blank
  }
};
