const faker = require('faker');
const fs = require('fs');
const random = require('generate-random-data');

const writeBooking = fs.createWriteStream('Booking.csv');
writeBooking.write('bookingTime, userID, propertyID, createdAt, updatedAt\n', 'utf8');

function writeTenMillionBooking(writer, encoding, callback) {
  let i = 10;
  let id = 0;

  function bookT(userid) {
    const date = new Date();
    const bookingTime = random.datetime('2020-M-d H');
    const userID = userid;
    const propertyID = faker.random.number({ min: 1, max: 10000000 });
    const createdAt = date;
    const updatedAt = date;
    const data = `${bookingTime}, ${userID},${propertyID},${createdAt},${updatedAt}\n`;
    return data;
  }

  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const bookingAmt = faker.random.number({ min: 0, max: 4 });
      for (let j = 0; j < bookingAmt; j += 1) {
        const data = bookT(id);
        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
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

writeTenMillionBooking(writeBooking, 'utf-8', () => {
  writeBooking.end();
});
