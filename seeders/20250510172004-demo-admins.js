'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('admins', [
      { admin_name: 'Aqil',  email: 'aqil@admins.com',  password: 'Aqil123' },
      { admin_name: 'Agiel', email: 'agiel@admins.com', password: 'Agiel123' },
      { admin_name: 'Lexy',  email: 'lexy@admins.com',  password: 'Lexy123' }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('admins', null, {});
  }
};

