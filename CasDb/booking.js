"use strict";
const faker = require('faker');
const cassandra = require('cassandra-driver');

const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1' });

// Timer
console.time('seed');
async function seed() {
  await client.connect();
  await client.execute('CREATE KEYSPACE IF NOT EXISTS HouseInfo WITH replication = {\'class\': \'SimpleStrategy\', \'replication_factor\': \'1\' }');
  await client.execute('USE HouseInfo');
  await client.execute('CREATE TABLE IF NOT EXISTS HouseInfo.house_booking (id int, bookingtime timestamp, username text, email text, PRIMARY KEY (id, username))');

  // The maximum amount of async executions that are going to be launched in parallel at any given time
  const concurrencyLevel = 100;
  const promises = new Array(concurrencyLevel);
  const info = {
    totalLength: 50000000,
    counter: 0,
  };
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
// const generateRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

async function executeOneAtATime(info) {
  const query = 'INSERT INTO HouseInfo.house_booking (id, bookingtime, username, email) VALUES (?, ?, ?, ?)';
  const options = { prepare: true, isIdempotent: true };
  // Execute the queries

  while (info.counter++ < info.totalLength) {
    if (info.counter % 100000 === 0) {
      console.log(info.counter);
    }

    const params = [
      info.counter,
      faker.date.past(),
      faker.name.findName(),
      faker.internet.email(),
    ];
    await client.execute(query, params, options);
  }
}

seed();

// Exit on unhandledRejection
process.on('unhandledRejection', (reason) => { throw reason; });
