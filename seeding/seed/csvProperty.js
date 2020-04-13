const faker = require('faker');
const fs = require('fs');

const writeProperties = fs.createWriteStream('properties.csv');
writeProperties.write('address, numBath, numBed, sqFt, marketValEst, monthlyPayment, createdAt, updatedAt\n', 'utf8');
const generateRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

function writeTenMillionProperties(writer, encoding, callback) {
  let i = 10;
  function write() {
    let ok = true;
    do {
      i -= 1;
      const date = new Date();
      const address = `${faker.address.streetAddress()}/ ${faker.address.city()}/ ${faker.address.zipCode()}`;
      const numBath = faker.random.number({ min: 1, max: 5 });
      const numBed = faker.random.number({ min: 1, max: 5 });
      const sqFt = generateRandomNum(10, 30) * 100;
      const marketValEst = faker.random.number({ min: 100000, max: 5000000 });
      const monthlyPayment = faker.random.number({ min: 1000, max: 5000 });
      const createdAt = date;
      const updatedAt = date;
      const data = `${address},${numBath},${numBed},${sqFt},${marketValEst},${monthlyPayment},${createdAt},${updatedAt}\n`;
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

writeTenMillionProperties(writeProperties, 'utf-8', () => {
  writeProperties.end();
});
