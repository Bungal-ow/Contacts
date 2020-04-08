'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let entries = 1;
    let i = 0;
    let data = [];
    let func;
    let count = 0;
    // 10mil agents to house
    while (i < 1000) {
      data = [];
      count = 0;
      while (count < 10000) {
        const agentsNum = faker.random.number({ min: 1, max: 3 });
        for (let j = 0; j < agentsNum; j += 1) {
          const date = new Date();
          // 1000000
          const pair = {
            agent_id: faker.random.number({ min: 1, max: 10000000 }),
            property_id: entries,
            createdAt: date,
            updatedAt: date,
          };
          data.push(pair);
        }
        entries += 1;
        count += 1;
      }
      func = await queryInterface.bulkInsert('property_agents', data, {});
      i += 1;
      console.log(i);
    }
    return func;
  },
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('property_agents', null, {}),
};
