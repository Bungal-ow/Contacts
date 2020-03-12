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
  listedby: [{
    isAgency: Boolean,
    isAgent: Boolean,
    representative_id: mongoose.Schema.Types.ObjectId,
  }],
});

const agencySchema = mongoose.Schema({
  name: String,
  address: String,
  agents: [mongoose.Schema.Types.ObjectId],
});

const agentSchema = mongoose.Schema({
  name: String,
  title: String,
  rating: Number,
  numSales: Number,
  phoneNum: String,
  bookings: [{
    date: String,
    timeblock: Number,
  }],
});

const Property = mongoose.model('Property', propertySchema);
const Agency = mongoose.model('Agency', agencySchema);
const Agent = mongoose.model('Agent', agentSchema);

module.exports = {
  Property,
  Agency,
  Agent,
};
