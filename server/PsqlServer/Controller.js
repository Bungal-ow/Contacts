const faker = require('faker');
const model = require('./Model.js');


module.exports = {
  property: {
    get: (req, res) => {
      // const id = parseInt(req.params.id);
      const id = faker.random.number({ min: 1, max: 10000000 });
      model.property.get(id)
        .then((result) => res.status(200).send(result.rows))
        .catch((err) => res.status(400).send(err));
    },
    post: (req, res) => {
      model.property.post(req.body)
        .then((result) => res.status(201).send(`User added with ID: ${result.rows[0].id}`))
        .catch((err) => res.status(400).send(err));
    },
    put: (req, res) => {
      model.property.put(req.body)
        .then((result) => res.status(201).send(`User updated with ID: ${result.rows[0].id}`))
        .catch((err) => res.status(400).send(err));
    },
    delete: (req, res) => {
      const id = 10000001;
      // const id = parseInt(req.params.id);
      model.property.delete(id)
        .then((result) => res.status(201).send(`User deleted with ID: ${result.rows[0].id}`))
        .catch((err) => res.status(400).send(err));
    },
  },
  agents: {
    getAgents: (req, res) => {
      // const id = parseInt(req.params.id);
      const id = faker.random.number({ min: 1, max: 10000000 });
      model.agents.getAgents(id)
        .then((result) => res.status(200).send(result.rows))
        .catch((err) => res.status(400).send(err));
    },
  },
  houseBooking: {
    getBooking: (req, res) => {
      // const propertyID = parseInt(req.params.id);
      const propertyID = faker.random.number({ min: 1, max: 10000000 });
      model.houseBooking.getBooking(propertyID)
        .then((result) => res.status(200).send(result.rows))
        .catch((err) => res.status(400).send(err));
    },
    post: (req, res) => {
      // console.log(req.body)
      model.houseBooking.post(req.body)
        .then((result) => res.status(201).send(`User added booking with house ID: ${result.rows[0].id}`))
        .catch((err) => res.status(400).send(err));
    },
  },
  contactagents: {
    post: (req, res) => {
      // console.log(req.body)
      model.contactagents.post(req.body)
        .then((result) => res.status(201).send(`message ${result.rows[0].id}`))
        .catch((err) => res.status(400).send(err));
    },
  },
};
