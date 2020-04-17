require('newrelic');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const controller = require('./Controller.js');
const midWare = require('./exp.js');

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../../client/dist')));

app.get('/api/property/:id', midWare, controller.property.get);
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

app.get('/', midWare, (req, res) => {
  // simulating a long process
  res.send('message from route /');
});

app.listen(port, () => {
  console.log(`Server is running, listening on port ${port}`);
});
