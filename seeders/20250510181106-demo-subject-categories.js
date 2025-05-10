'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here. Assumes timestamps are disabled.
     */
    await queryInterface.bulkInsert('subject_categories', [
      {
        subject_category_name: 'Tes Literasi'
      },
      {
        subject_category_name: 'Tes Potensi Skolastik'
      },
      {
        subject_category_name: 'Penalaran Matematika'
      }
    ], {});
  },

  // No down migration since seeds are permanent
  async down (queryInterface, Sequelize) {
    // intentionally left blank
  }
};
