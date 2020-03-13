/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const { find } = require('../database/index.js');

const app = express();
const port = 5000;

app.listen(port, () => {
  console.log(`Server is running, listening on port ${port}`);
});

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/seedProperties', (req, res) => {
  find({}, (data) => {
    res.send(data);
  });
});
