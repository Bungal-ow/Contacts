const redis = require('redis');

const client = redis.createClient();

client.on('connect', () => console.log('Redis connected'));

const express = require('express');


const midWare = (req, res, next) => {
  const key = req.url;
  client.get(key, (err, result) => {
    if (err == null && result != null) {
      res.send('from cache');
    } else {
      res.send = (body) => {
        client.set(key, body, (err, reply) => {
          if (reply === 'OK') res.send(body);
        });
      };
      next();
    }
  });
};

module.exports = midWare;
