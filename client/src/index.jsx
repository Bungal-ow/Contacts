import React from 'react';
import ReactDOM from 'react-dom';
import Summary from './components/Summary';

const summary = {
  price: 2750000,
  numBD: 4,
  numBA: 3,
  sqft: 32116,
  address: '46 Cook St, San Francisco, 94118',
  format: 'for sale',
  hasAbestimate: true,
  estPayment: 12780,
};

ReactDOM.render(
  <Summary summary={summary} />,
  document.getElementById('app'),
);
