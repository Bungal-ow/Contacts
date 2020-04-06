const Sequelize = require('sequelize');
const sequelize = require('../seqlizconnect.js');
// define = instance of Property
const userBookingModel = sequelize.define('user_bookings', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  BookingTime: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
module.exports = userBookingModel;
