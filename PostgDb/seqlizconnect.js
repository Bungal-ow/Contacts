const { Sequelize } = require('sequelize');


// database  name , username ,password

const sequelize = new Sequelize('postgres', 'postgres', 'Null', {
  host: 'localhost',
  dialect: 'postgres',
});

// type of sql database

module.exports = sequelize;
