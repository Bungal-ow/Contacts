const faker = require('faker');

const model = require('./Model.js');


module.exports = {
  property: {
    get: (req, res) => {
      model.property.get()
    },
    post: (req, res) => {
    },
    put: (req, res) => {
    },
    delete: (req, res) => {
    },
  },
  agents: {
    getAgents: (req, res) => {
    },
  },
  houseBooking: {
    getBooking: (req, res) => {
    },
  },
};
