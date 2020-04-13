const faker = require('faker');
const fs = require('fs');

const writepropertyAgents = fs.createWriteStream('propertyAgents.csv');
writepropertyAgents.write('agentID, title, propertyID, createdAt, updatedAt\n', 'utf8');

function writeTenMillionpropertyAgents(writer, encoding, callback) {
  let i = 10;
  let id = 0;

  function agent(a, b) {
    const date = new Date();
    const agentID = faker.random.number({ min: 1, max: 10000000 });
    const title = a;
    const propertyID = b;
    const createdAt = date;
    const updatedAt = date;
    const data = `${agentID},${title},${propertyID},${createdAt},${updatedAt}\n`;
    return data;
  }

  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const agentsNum = faker.random.number({ min: 1, max: 4 });
      for (let j = 0; j < agentsNum; j += 1) {
        if (j === 0) {
          const data = agent('Seller\'s Agent', id);
          if (i === 0) {
            writer.write(data, encoding, callback);
          } else {
            ok = writer.write(data, encoding);
          }
        } else {
          const data = agent('Premier Agent', id);
          if (i === 0) {
            writer.write(data, encoding, callback);
          } else {
            ok = writer.write(data, encoding);
          }
        }
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write();
}

writeTenMillionpropertyAgents(writepropertyAgents, 'utf-8', () => {
  writepropertyAgents.end();
});
