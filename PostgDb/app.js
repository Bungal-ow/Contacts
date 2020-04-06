const express = require('express');
const sequelize = require('./seqlizconnect.js');

const app = express();
// Model
const agencyModel = require('./models/1agencyModel.js');
const propertyModel = require('./models/2propertyModel.js');
const propertyAgencyMdoel = require('./models/3property_Agency_Model.js');
const userModel = require('./models/4userModel.js');
const userBookingModel = require('./models/5user_bookingModel.js');

propertyAgencyMdoel.belongsTo(agencyModel, { foreignKey: 'agency_id' });
propertyAgencyMdoel.belongsTo(propertyModel, { foreignKey: 'property_id' });
userBookingModel.belongsTo(userModel, { foreignKey: 'user_id' });

// Create DB
sequelize
  .sync()
  .then((result) => {
    const port = process.env.PORT || 8080;
    app.listen(port);
  })
  .catch((err) => console.log(err));
