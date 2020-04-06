const cassandra = require('cassandra-driver');
const async = require('async');
const fs = require('fs');

const config = require('./config');


const authProviderLocalCassandra = new cassandra.auth.PlainTextAuthProvider(config.username, config.password);

const client = new cassandra.Client({ contactPoints: [config.contactPoint], authProvider: authProviderLocalCassandra, localDataCenter: 'datacenter1' });

async.series([
  function connect(next) {
    client.connect(next);
  },
  function createKeyspace(next) {
    const query = "CREATE KEYSPACE IF NOT EXISTS HouseInfo WITH replication = { 'class' : 'SimpleStrategy', 'replication_factor': '1' }";
    client.execute(query, next);
    console.log('created keyspace');
  },
  function createTable(next) {
    const query = 'CREATE TABLE IF NOT EXISTS HouseInfo.house_agencies (id int, house_id int, street text, city text, zipcode text, numBd int, numBa int, sqft text, marketValEst text, monthlyPayment text, agency_id int, name text, title text, rating tinyint, numSales int, phoneNum int, email text, PRIMARY KEY ((house_id, email), id)) WITH CLUSTERING ORDER BY (id DESC)';
    client.execute(query, next);
    console.log('created table');
  },
  function createTable(next) {
    const query = 'CREATE TABLE IF NOT EXISTS HouseInfo.house_booking (id int, house_id int, street text, city text, zipcode text, numBd int, numBa int, sqft text, marketValEst text, monthlyPayment text, bookingTime text, userName text, email text, user_id int, PRIMARY KEY (house_id, bookingTime)) WITH CLUSTERING ORDER BY (bookingTime DESC)';
    client.execute(query, next);
    console.log('created table');
  },

], (err) => {
  if (err) {
    console.error('There was an error', err.message, err.stack);
  }
  console.log('Please delete your table after verifying the presence of data in portal or from CQL');
  client.shutdown();
});
