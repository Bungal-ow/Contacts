const db = require('./dbconnection.js');
const faker = require('faker');

module.exports = {
  property: {
    get: (id) => db.pool.query(`SELECT * FROM properties WHERE id = ${id}`),
    post: ({
      address, numBath, numBed, sqFt, marketValEst, monthlyPayment, createdAt, updatedAt
    }) => {
      const date = new Date();
      return db.pool.query(
        'INSERT INTO properties (address, "numBath", "numBed", "sqFt", "marketValEst", "monthlyPayment", "createdAt", "updatedAt") VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id',
        ['123', 1, 2, 12321, 123213, 2123, date, date],
      );
    },
    put: ({
      address, numBath, numBed, sqFt, marketValEst, monthlyPayment, createdAt, updatedAt, id
    }) => {
      const aa = 12314;
      const date = new Date();
      return db.pool.query(
        `UPDATE properties SET address=$1, "numBath"=$2, "numBed"=$3, "sqFt"=$4, "marketValEst"=$5, "monthlyPayment"=$6, "createdAt"=$7, "updatedAt"=$8 WHERE id=${aa}`,
        ['123', 1, 2, 12321, 123213, 2123, date, date],
      );
    },
    delete: (id) => db.pool.query(`DELETE FROM properties WHERE id = ${id} RETURNING id`),
  },
  agents: {
    getAgents: (id) => db.pool.query(`SELECT * FROM agents WHERE id IN (SELECT agentID FROM property_agents WHERE property_agents.propertyID = ${id})`),
  },
  houseBooking: {
    getBooking: (id) => db.pool.query(`SELECT "bookingTime" FROM user_bookings WHERE propertyID = ${id}`),
    post: ({
      bookingTime, userID, propertyID, createdAt, updatedAt
    }) => {
      // [bookingTime, userID, propertyID, date, date]
      const date = new Date();
      const id = faker.random.number({ min: 1, max: 10000000 });
      return db.pool.query(
        'INSERT INTO user_bookings ("bookingTime", "userID", "propertyID", "createdAt", "updatedAt") VALUES ($1, $2, $3, $4, $5) RETURNING id',
        ['a', 1000000, id, date, date],
      );
    },
  },
  contactagents: {
    post: ({
      name, phoneNum, email, message, agentID, createdAt, updatedAt
    }) => {
      // [name, phoneNum, email, message, agentID, date, date]
      const date = new Date();
      const id = faker.random.number({ min: 1, max: 10000000 });
      return db.pool.query(
        'INSERT INTO contactagents (name, "phoneNum", email, message, "agentID", "createdAt", "updatedAt") VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id',
        ['a', 'a', 'a', 'a', id, date, date],
      );
    },
  },
};
