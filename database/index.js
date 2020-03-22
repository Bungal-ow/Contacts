/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/abode_dh', { useNewUrlParser: true, useUnifiedTopology: true });

const propertySchema = mongoose.Schema({
  address: String,
  numBd: Number,
  numBa: Number,
  sqft: String,
  marketValEst: String,
  monthlyPayment: String,
  contact: [],
});

const agentSchema = mongoose.Schema({
  name: String,
  title: String,
  rating: Number,
  numSales: Number,
  phoneNum: String,
  email: String,
});

const Property = mongoose.model('Property', propertySchema);
const Agent = mongoose.model('Agent', agentSchema);

const save = (document, next) => {
  document.save((err) => {
    if (err) {
      console.error(err);
    } else {
      next();
    }
  });
};

const find = (options, next) => {
  Property.find(options, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      next(docs);
    }
  });
};

module.exports = {
  Property,
  Agent,
  save,
  find,
};
