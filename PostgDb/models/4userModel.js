const Sequelize = require('sequelize');
const sequelize = require('../seqlizconnect.js');
// define = instance of Property
const userModel = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    // unique: true,
  },
  passowrd: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
module.exports = userModel;
