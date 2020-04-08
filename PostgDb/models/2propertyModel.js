const Sequelize = require('sequelize');
const sequelize = require('../seqlizconnect.js');
// define = instance of Property
const propertyModel = sequelize.define('properties', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  property_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  numBath: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  numBed: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  sqFt: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  marketValEst: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  monthlyPayment: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

});
module.exports = propertyModel;
