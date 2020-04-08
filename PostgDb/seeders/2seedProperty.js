'use strict';

const faker = require('faker');

const numberWithCommas = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const generateRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let entries = 1;
    let i = 0;
    let data = [];
    let func;
    let count = 0;
    // 10 m house
    while (i < 1000) {
      data = [];
      count = 0;
      while (count < 10000) {
        const date = new Date();
        data.push({
          property_id: entries,
          address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.zipCode()}`,
          numBath: generateRandomNum(1, 5),
          numBed: generateRandomNum(1, 5),
          sqFt: generateRandomNum(10, 30) * 100,
          marketValEst: generateRandomNum(100000, 5000000),
          monthlyPayment: generateRandomNum(1000, 5000),
          createdAt: date,
          updatedAt: date,
        });
        entries += 1;
        count += 1;
      }
      func = await queryInterface.bulkInsert('properties', data, {});
      i += 1;
      console.log(i);
    }
    return func;
  },
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('properties', null, {}),
};
