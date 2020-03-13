/* eslint-disable import/no-extraneous-dependencies */
const faker = require('faker');
const { Agent, Property } = require('./database/index.js');

const generateRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const seedAgents = (quantity, title) => {
  const agents = [];
  for (let i = 0; i < quantity; i += 1) {
    agents.push(new Agent({
      name: faker.name.findName(),
      title,
      rating: generateRandomNum(3, 5),
      numSales: generateRandomNum(0, 30),
      phoneNum: faker.phone.phoneNumber(),
    }));
  }
  return agents;
};

const seedProperties = () => {
  const quantity = 100;
  const properties = [];

  const now = new Date();
  const oneMonth = new Date();
  oneMonth.setMonth(now.getMonth() + 1);

  const sellersAgent = seedAgents(1, 'Seller\'s Agent');
  const premierAgent = seedAgents(3, 'Premier Agent');

  for (let i = 0; i < quantity; i += 1) {
    properties.push(new Property({
      address: `${faker.address.streetAddress()}, 
        ${faker.address.city()}, 
        ${faker.address.zipCode()}`,
      numBd: generateRandomNum(1, 5),
      numBa: generateRandomNum(1, 5),
      sqft: generateRandomNum(10, 30) * 100,
      availableOn: faker.date.between(now, oneMonth),
      marketValEst: generateRandomNum(500000, 4000000),
      contact: sellersAgent.concat(premierAgent),
    }));
  }
  return properties;
};

module.exports = {
  seedProperties,
};
