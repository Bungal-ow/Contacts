/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
const faker = require('faker');
const {
  Agent,
  Property,
  save,
  find,
} = require('./index.js');

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

const seedProperties = (quantity) => {
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

find({}, (docs) => {
  const quantity = 100 - docs.length;
  if (docs.length >= 0 && docs.length < 100) {
    const data = seedProperties(quantity);
    data.forEach((property) => {
      save(property, () => {});
    });
    console.log(`Database seeded with ${quantity} property entries`);
  } else {
    console.log('Database contains sufficient seeded data');
  }
});

module.exports = {
  seedProperties,
};
