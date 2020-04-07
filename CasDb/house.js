"use strict";
const faker = require('faker');
const cassandra = require('cassandra-driver');

const { Uuid } = cassandra.types;

const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1' });

// Timer
console.time('seed');
async function seed() {
  await client.connect();
  //   await client.execute('CREATE KEYSPACE IF NOT EXISTS HouseInfo WITH replication = {\'class\': \'SimpleStrategy\', \'replication_factor\': \'1\' }');
  await client.execute('USE HouseInfo');
  await client.execute('CREATE TABLE IF NOT EXISTS HouseInfo.house (house_id int, street text, city text, state text, zipcode text, numbed int, numbath int, propsize text, price int, mthrent int, booking list<int>, PRIMARY KEY (house_id, state))');

  // The maximum amount of async executions that are going to be launched in parallel at any given time
  const concurrencyLevel = 100;
  const promises = new Array(concurrencyLevel);
  const info = {
    totalLength: 10000000,
    counter: 9000000,
  };

  // counter 0 to 1000000, 5000000 to 6000000, 9000000 to 10000000 has booking,
  // 1000000 to 5000000 has no booking, 6000000 to 9000000 has no booking,
  // Launch in parallel n async operations (n being the concurrency level)
  for (let i = 0; i < concurrencyLevel; i++) {
    promises[i] = executeOneAtATime(info);
  }

  try {
    // The n promises are going to be resolved when all the executions are completed.
    await Promise.all(promises);
    console.timeEnd('seed');
    console.log(`Finished executing ${info.totalLength} queries with a concurrency level of ${concurrencyLevel}.`);
  } finally {
    await client.shutdown();
  }
}

const generateRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const numberWithCommas = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

async function executeOneAtATime(info) {
  const query = 'INSERT INTO HouseInfo.house (house_id, street, city, state, zipcode, numbed, numbath, propsize, price, mthrent, booking) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const options = { prepare: true, isIdempotent: true };
  const bookings = [];
  for (let i = 0; i < faker.random.number({ min: 15, max: 20 }); i++) {
    const id = faker.random.number({ min: 30000000, max: 50000000 });
    bookings.push(id);
  }
  // counter 0 to 1000000 has booking id 1 to 20000000
  // counter 0 to 1000000 has booking id 20000000 to 35000000
  // Execute the queries
  while (info.counter++ < info.totalLength) {
    if (info.counter % 100000 === 0) {
      console.log(info.counter);
    }
    const params = [
      info.counter,
      faker.address.streetAddress(),
      faker.address.city(),
      faker.address.stateAbbr(),
      faker.address.zipCode(),
      generateRandomNum(1, 5),
      generateRandomNum(1, 5),
      numberWithCommas(generateRandomNum(10, 30) * 100),
      generateRandomNum(5000, 40000) * 100,
      Math.floor(generateRandomNum(5000, 40000)),
      bookings,
    ];
    await client.execute(query, params, options);
  }
}

seed();

// Exit on unhandledRejection
process.on('unhandledRejection', (reason) => { throw reason; });
