/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const {
  seedSellersAgents,
  seedPremierAgents,
  seedProperties,
} = require('../seed.js');

const app = express();
const port = 5000;

app.listen(port, () => {
  console.log(`Server is running, listening on port ${port}`);
});

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/seedAgents', (req, res) => {
  const sellersAgentsTest = seedSellersAgents();
  const premierAgentsTest = seedPremierAgents();
  const seedTest = sellersAgentsTest.concat(premierAgentsTest);
  res.send(seedTest);
});

app.get('/seedProperties', (req, res) => {
  const propertiesTest = seedProperties();
  res.send(propertiesTest);
});
