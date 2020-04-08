'use strict';

const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let entries = 1;
    let i = 0;
    let data = [];
    let func;
    let count = 0;
    // 10 m users
    while (i < 1000) {
      data = [];
      count = 0;
      while (count < 10000) {
        const date = new Date();
        data.push({
          user_id: entries,
          email: faker.internet.email(),
          passowrd: faker.internet.password(),
          createdAt: date,
          updatedAt: date,
        });
        entries += 1;
        count += 1;
      }
      func = await queryInterface.bulkInsert('users', data, {});
      i += 1;
      console.log(i);
    }
    return func;
  },
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('users', null, {}),
};
