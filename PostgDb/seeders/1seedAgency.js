
const faker = require('faker');

const generateRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let entries = 1;
    let i = 0;
    let data = [];
    let func;
    let count = 0;
    // 4m
    while (i < 400) {
      data = [];
      count = 0;
      while (count < 10000) {
        const date = new Date();
        data.push({
          agency_id: entries,
          name: faker.name.findName(),
          rating: generateRandomNum(0, 5),
          numberSales: generateRandomNum(0, 30),
          phoneNum: faker.phone.phoneNumberFormat(0),
          email: faker.internet.email(),
          createdAt: date,
          updatedAt: date,
        });
        entries += 1;
        count += 1;
      }
      func = await queryInterface.bulkInsert('agencies', data, {});
      i += 1;
      console.log(i);
    }
    
    return func;
  },
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('agencies', null, {}),
};
