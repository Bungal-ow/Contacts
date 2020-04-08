'use strict';

const random = require('generate-random-data');
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let entries = 1;
    let i = 0;
    let data = [];
    let func;
    let count = 0;
    // every user could 0 to 6 with differet property booking
    while (i < 1000) {
      data = [];
      count = 0;
      while (count < 10000) {
        const bookingAmt = faker.random.number({ min: 0, max: 3 });
        const date = new Date();
        for (let j = 0; j < bookingAmt; j += 1) {
          const bookings = {
            bookingTime: random.datetime('y-M-d H:m:s'),
            user_id: entries,
            property_id: faker.random.number({ min: 1, max: 10000000 }),
            createdAt: date,
            updatedAt: date,
          };
          data.push(bookings);
        }
        entries += 1;
        count += 1;
      }
      func = await queryInterface.bulkInsert('user_bookings', data, {});
      i += 1;
      console.log(i);
    }
    return func;
  },
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('user_bookings', null, {}),
};
