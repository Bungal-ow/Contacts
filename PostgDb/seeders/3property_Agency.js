'use strict';
const generateRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let i = 0;
    let data = [];
    let func;
    let count = 0;
    while (i < 1000) {
      data = [];
      count = 0;
      while (count < 10) {
        const date = new Date();
        data.push({
          agency_id: generateRandomNum(1, 399999),
          property_id: generateRandomNum(1, 9999999),
          createdAt: date,
          updatedAt: date,
        });
        count += 1;
      }
      func = await queryInterface.bulkInsert('property_agencies', data, {});
      i += 1;
      console.log(i);
    }
    return func;
  },
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('property_agencies', null, {}),
};
