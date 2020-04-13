const faker = require('faker');
const fs = require('fs');

const writeAgents = fs.createWriteStream('agents.csv');
writeAgents.write('name, rating, numberSales, phoneNum, email, createdAt, updatedAt\n', 'utf8');

function writeTenMillionAgents(writer, encoding, callback) {
  let i = 10;
  function write() {
    let ok = true;
    do {
      i -= 1;
      const date = new Date();
      const name = faker.name.findName();
      const rating = faker.random.number({ min: 3, max: 5 });
      const numberSales = faker.random.number({ min: 0, max: 30 });
      const phoneNum = faker.phone.phoneNumberFormat(0);
      const email = faker.internet.email();
      const createdAt = date;
      const updatedAt = date;
      const data = `${name},${rating},${numberSales},${phoneNum},${email},${createdAt},${updatedAt}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
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

writeTenMillionAgents(writeAgents, 'utf-8', () => {
  writeAgents.end();
});
