'use strict';

const random = require('generate-random-data');


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
          BookingTime: random.datetime('y-M-d H:m:s'),
          user_id: entries,
          createdAt: date,
          updatedAt: date,
        });
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
