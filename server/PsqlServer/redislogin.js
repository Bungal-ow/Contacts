const redis = require('redis');

const REDIS_PORT = process.env.PORT || 6379;
const client = redis.createClient(REDIS_PORT);

client.on('connect', () => console.log('Redis connected'));


// set response

const setResponse = (id, data) => {
  return `<h2> ${data} has ${id} </h2>`;
};

module.exports = { client, setResponse };
