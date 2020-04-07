
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
  await client.execute('CREATE TABLE IF NOT EXISTS HouseInfo.house_booking (id uuid, house_id int, bookingtime timestamp, username text, email text, PRIMARY KEY (house_id, username))');

  // The maximum amount of async executions that are going to be launched in parallel at any given time
  const concurrencyLevel = 5;
  const promisesbooking = new Array(concurrencyLevel);

  const infobooking = {
    totalLength: 10000000,
    counter: 0,
  };

  // Launch in parallel n async operations (n being the concurrency level)
  for (let i = 0; i < concurrencyLevel; i++) {
    promisesbooking[i] = executebookingOneAtATime(infobooking);
  }

  try {
    // The n promises are going to be resolved when all the executions are completed.
    await Promise.all(promisesbooking);
    console.timeEnd('seed');
    console.log(`Finished executing ${infobooking.totalLength} queries with a concurrency level of ${concurrencyLevel}.`);
  } finally {
    await client.shutdown();
  }
}
const generateRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

async function executebookingOneAtATime(infobooking) {
  const query = 'INSERT INTO HouseInfo.house_booking (id, house_id, bookingtime, username, email) VALUES (?, ?, ?, ?, ?)';
  const options = { prepare: true, isIdempotent: true };

  // Execute the queries
  while (infobooking.counter++ < infobooking.totalLength) {
    if (infobooking.counter % 100000 === 0) {
      console.log('booking', infobooking.counter);
    }
    let count = 0;
    const params = [
      Uuid.random(),
      infobooking.counter,
      faker.date.past(),
      faker.name.findName(),
      faker.internet.email(),
    ];
    while (count < 5) {
    //   console.log(count, infobooking.counter);
      params[0] = Uuid.random();
      params[1] = infobooking.counter;
      params[2] = faker.date.past();
      params[3] = faker.name.findName();
      params[4] = faker.internet.email();
      await client.execute(query, params, options);
      count += 1;
    }
  }
}

seed();

// Exit on unhandledRejection
process.on('unhandledRejection', (reason) => { throw reason; });
