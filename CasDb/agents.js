
const faker = require('faker');
const cassandra = require('cassandra-driver');

const { Uuid } = cassandra.types;

const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1' });

// Timer
console.time('seed');
async function seed() {
  await client.connect();
  await client.execute('CREATE KEYSPACE IF NOT EXISTS HouseInfo WITH replication = {\'class\': \'SimpleStrategy\', \'replication_factor\': \'1\' }');
  await client.execute('USE HouseInfo');
  await client.execute('CREATE TABLE IF NOT EXISTS HouseInfo.house_agents (id uuid, house_id int, street text, city text, state text, zipcode text, numbed int, numbath int, propsize text, price int, mthrent int, name text, title text, rating tinyint, numsales int, phonenum text, email text, createdat timestamp, PRIMARY KEY (house_id, name))');
  await client.execute('CREATE TABLE IF NOT EXISTS HouseInfo.house_booking (id uuid, house_id int, bookingtime timestamp, username text, email text, PRIMARY KEY (house_id, username))');

  // The maximum amount of async executions that are going to be launched in parallel at any given time
  const concurrencyLevel = 10;
  const promises = new Array(concurrencyLevel);
  const info = {
    totalLength: 10000000,
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
const generateRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const numberWithCommas = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

async function executeOneAtATime(info) {
  const query = 'INSERT INTO  HouseInfo.house_agents (id, house_id, street, city, state, zipcode, numbed, numbath, propsize, price, mthrent, name, title, rating, numsales, phonenum, email, createdat) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const options = { prepare: true, isIdempotent: true };

  // Execute the queries
  while (info.counter++ < info.totalLength) {
    if (info.counter % 100000 === 0) {
      console.log(info.counter);
    }
    let count = 0;
    const params = [
      Uuid.random(),
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
      faker.name.findName(),
      'Seller\'s Agent',
      generateRandomNum(3, 5),
      generateRandomNum(0, 30),
      faker.phone.phoneNumberFormat(0),
      faker.internet.email(),
      faker.date.past(),
    ];
    while (count < 4) {
      if (count === 0) {
        params[11] = faker.name.findName();
        params[12] = 'Seller\'s Agent';
        params[13] = generateRandomNum(3, 5);
        params[14] = generateRandomNum(0, 30);
        params[15] = faker.phone.phoneNumberFormat(0);
        params[16] = faker.internet.email();
        await client.execute(query, params, options);
      } else {
        params[11] = faker.name.findName();
        params[12] = 'Premier Agent';
        params[13] = generateRandomNum(3, 5);
        params[14] = generateRandomNum(0, 30);
        params[15] = faker.phone.phoneNumberFormat(0);
        params[16] = faker.internet.email();
        await client.execute(query, params, options);
      }
      count += 1;
    }
  }
}
seed();
// Exit on unhandledRejection
process.on('unhandledRejection', (reason) => { throw reason; });
