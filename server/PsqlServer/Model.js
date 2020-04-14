const db = require('./dbconnection.js');


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
        `UPDATE properties SET address=$1, "numBath"=$2, "numBed"=$3, "sqFt"=$4, "marketValEst"=$5, "monthlyPayment"=$6, "createdAt"=$7, "updatedAt"=$8 WHERE id=${aa} RETURNING id`,
        ['123', 1, 2, 12321, 123213, 2123, date, date],
      );
    },
    delete: (id) => db.pool.query(`DELETE FROM properties WHERE id = ${id} RETURNING id`),
  },
  agents: {
    getAgents: (id) => db.pool.query(`SELECT * FROM agents WHERE id IN (SELECT "agentID" FROM property_agents WHERE "propertID" = ${id})`),
  },
  houseBooking: {
    getBooking: (id) => db.pool.query(`SELECT "bookingTime" FROM bookings WHERE "propertyID" = ${id}`),
  },
};
