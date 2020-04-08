const Sequelize = require('sequelize');
const sequelize = require('../seqlizconnect.js');

// define = instance of Property
const propertyAgencyMdoel = sequelize.define('property_agents', {
  house_agency_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
});
module.exports = propertyAgencyMdoel;
