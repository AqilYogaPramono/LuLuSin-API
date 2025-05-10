'use strict';

/** @type {import('sequelize-cli').Migration} */
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('subject_categories', [
      { subject_category_name: 'Tes Literasi' },
      { subject_category_name: 'Tes Potensi Skolastik' },
      { subject_category_name: 'Penalaran Matematika' }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('subject_categories', null, {});
  }
};

