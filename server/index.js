/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const { find } = require('../database/index.js');
const DateCard = require('../client/src/components/Dates.js');

const app = express();
const port = 5000;

app.listen(port, () => {
  console.log(`Server is running, listening on port ${port}`);
});

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/properties', (req, res) => {
  find({}, (data) => {
    res.send(data);
  });
});

app.get('/date', (req, res) => {
  const newDates = new DateCard();
  res.send(newDates.getMonthAbbr(2));
});
