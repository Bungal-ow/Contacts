const Sequelize = require('sequelize');
const sequelize = require('../seqlizconnect.js');
// define = instance of Property
const agencyModel = sequelize.define('agencies', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  agency_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  numberSales: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  phoneNum: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    // primaryKey: true,
  },
});
module.exports = agencyModel;
