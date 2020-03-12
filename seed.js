/* eslint-disable import/no-extraneous-dependencies */
const faker = require('faker');
const { Agent } = require('./database/index.js');

const seedSellersAgents = () => {
  const quantity = 10;
  const agents = [];
  for (let i = 0; i < quantity; i++) {
    agents.push(new Agent({
      name: faker.name.findName(),
      title: 'Seller\'s Agent',
      rating: Math.floor((Math.random() * 5)) + 1,
      numSales: Math.floor((Math.random() * 30)),
      phoneNum: faker.phone.phoneNumber(),
    }));
  }
  return agents;
};

module.exports = {
  seedSellersAgents,
};
