const cassandra = require('cassandra-driver');
const async = require('async');
const fs = require('fs');
const $ = require('jquery');
const config = require('./config');


const authProviderLocalCassandra = new cassandra.auth.PlainTextAuthProvider(config.username, config.password);

const client = new cassandra.Client({ contactPoints: [config.contactPoint], authProvider: authProviderLocalCassandra, localDataCenter: 'datacenter1' });

async.series([
  function insert(next) {
    console.log('insert');
    const arr = [
      'INSERT INTO  HouseInfo.house_agencies (id, house_id, street, city, zipcode, numbd, numba, sqft, marketvalest, monthlypayment, agency_id, name, title, rating, numsales, phonenum, email) VALUES (2, 4234, \'daf\', \'SF\', \'94412\', 2, 4, \'2112\', \'23002312312\', \'1222\', 1, \'AGENCY1\', \'lvl1\', 12, 1, 123, \'1@GAMIL.COM\')'];
    arr.forEach((element) => {
      client.execute(element);
    });
    next();
  },
  // function insert(next) {
  //   console.log('insert');
  //   const arr = [
  //     'INSERT INTO  HouseInfo.house_agencies (id, house_id, street, city, zipcode, numBd, numBa, sqft, marketValEst, monthlyPayment, bookingTime, userName, email, user_id, CreatedAt) VALUES (1, \'AdrianaS\', \'Seattle\')',
  //     'INSERT INTO  HouseInfo.house_agencies (id, house_id, street, city, zipcode, numBd, numBa, sqft, marketValEst, monthlyPayment, bookingTime, userName, email, user_id, CreatedAt) VALUES (2, \'JiriK\', \'Toronto\')'];
  //   arr.forEach((element) => {
  //     client.execute(element);
  //   });
  //   next();
  // },
  // function selectAll(next) {
  //   console.log('`Select ALL');
  //   const query = 'SELECT * FROM uprofile.user';
  //   client.execute(query, function (err, result) {
  //     if (err) return next(err);
  //     result.rows.forEach((row) => {
  //       console.log('Obtained row: %d | %s | %s ', row.user_id, row.user_name, row.user_bcity);
  //     }, this);
  //     next();
  //   });
  // },

  // function selectById(next) {
  //   console.log('`Getting by id');
  //   const query = 'SELECT * FROM uprofile.user where user_id=1';
  //   client.execute(query, function (err, result) {
  //     if (err) return next(err);
  //     result.rows.forEach((row) => {
  //       console.log('Obtained row: %d | %s | %s ', row.user_id, row.user_name, row.user_bcity);
  //     }, this);
  //     next();
  //   });
  // },
], (err) => {
  if (err) {
    console.error('There was an error', err.message, err.stack);
  }
  console.log('Please delete your table after verifying the presence of data in portal or from CQL');
  client.shutdown();
});

// 'INSERT INTO  HouseInfo.house_agencies (house_id, street, city, zipcode, numbd, numba, sqft, marketvalest, monthlypayment, agency_id, name, title, rating, numsales, phonenum, email) VALUES ( 2, \'apple\', \'NY\', \'NY\', \'92131\', 3, 2, \'2112\', \'23002312312\', \'1222\', \'SUNDAY\', \'AGENCY1\', \'1@GAMIL.COM\', 2, \'2011-02-03T04:05:00+0000\')
