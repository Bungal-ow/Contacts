/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/abode_dh', { useNewUrlParser: true });

const propertySchema = mongoose.Schema({
  address: String,
  numBd: Number,
  numBa: Number,
  sqft: Number,
  availableOn: Date,
  marketValEst: Number,
  listedby: [],
});

const agentSchema = mongoose.Schema({
  name: String,
  title: String,
  rating: Number,
  numSales: Number,
  phoneNum: String,
});

const Property = mongoose.model('Property', propertySchema);
const Agent = mongoose.model('Agent', agentSchema);

module.exports = {
  Property,
  Agent,
};
