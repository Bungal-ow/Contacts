const db = require('./queries.js');


module.exports = {
  property: {
    get: (req, res) => {
      const id = parseInt(req.params.id);
      // const id = faker.random.number({ min: 1, max: 10000000 });
      db.pool.query(`SELECT * FROM properties WHERE id = ${id}`, (err, result) => {
        if (err) {
          throw (err);
        }
        res.status(200).send(result.rows);
        // console.log(result.rows);
      });
    },
    post: (req, res) => {
      // const { address, numBath, numBed, sqFt, marketValEst, monthlyPayment, createdAt, updatedAt, id } = req.body;
      const date = new Date();
      db.pool.query('INSERT INTO properties (address, "numBath", "numBed", "sqFt", "marketValEst", "monthlyPayment", "createdAt", "updatedAt") VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id',
        ['123', 1, 2, 12321, 123213, 2123, date, date], (err, result) => {
          if (err) {
            throw (err);
          }
          res.status(201).send(`User added with ID: ${result.rows[0].id}`);
        });
    },
    put: (req, res) => {
      // const { address, numBath, numBed, sqFt, marketValEst, monthlyPayment, createdAt, updatedAt, id } = req.body;
      const id = 10000000;
      const date = new Date();
      db.pool.query(`UPDATE properties SET address=$1, "numBath"=$2, "numBed"=$3, "sqFt"=$4, "marketValEst"=$5, "monthlyPayment"=$6, "createdAt"$=7, "updatedAt"$=8 WHERE id=${id}`,
        ['123', 1, 2, 12321, 123213, 2123, date, date], (err, result) => {
          if (err) {
            throw (err);
          }
          res.status(201).send(`User added with ID: ${result.rows[0].id}`);
        });
    },
    delete: (req, res) => {
      const id = 10000001;
      // const id = parseInt(req.params.id);
      db.pool.query('DELETE FROM properties WHERE id = $1',
        [id], (err) => {
          if (err) {
            throw (err);
          }
          res.status(200).send(`User deleted with ID: ${id}`);
        });
    },
  },
  agents: {
    getAgents: (req, res) => {
      const id = parseInt(req.params.id);
      // const id = faker.random.number({ min: 1, max: 10000000 });
      db.pool.query(`SELECT * FROM agents WHERE id IN (SELECT agent_id FROM property_agents WHERE property_agents.property_id = ${id})`, (err, result) => {
        if (err) {
          throw (err);
        }
        res.status(200).send(result.rows);
      });
    },
  },
  houseBooking: {
    getBooking: (req, res) => {
      const id = parseInt(req.params.id);
      // const id = faker.random.number({ min: 1, max: 10000000 });
      db.pool.query(`SELECT "bookingTime" FROM user_bookings WHERE property_id = ${id}`, (err, result) => {
        if (err) {
          throw (err);
        }
        res.status(200).send(result.rows);
      });
    },
  },
};
