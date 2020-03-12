/* eslint-disable no-console */
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/abode_dh', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // all code goes here
});
