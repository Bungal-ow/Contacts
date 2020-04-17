require('newrelic');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const controller = require('./Controller.js');

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Check if work id is died
  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // This is Workers can share any TCP connection
  // It will be initialized using express
  console.log(`Worker ${process.pid} started`);

  app.get('/cluster', (req, res) => {
    const worker = cluster.worker.id;
    res.send(`Running on worker with id ==> ${worker}`);
  });

  app.use(express.static(path.join(__dirname, '../../client/dist')));

  app.get('/api/property/:id', controller.property.get);
  app.post('/api/property', controller.property.post);
  app.put('/api/property/:id', controller.property.put);
  app.delete('/api/property/:id', controller.property.delete);
  app.get('/api/houseagents/:id', controller.agents.getAgents);
  app.get('/api/houseBooking/:id', controller.houseBooking.getBooking);
  app.post('/api/houseBooking', controller.houseBooking.post);
  app.post('/api/contactagents', controller.contactagents.post);
  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../client/dist/index.html'));
  });

  app.listen(port, () => {
    console.log(`Server is running, listening on port ${port}`);
  });
}