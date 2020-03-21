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
  contact: [
    {
      _id: '5e6bdede3285240a2bdbb7cb',
      name: 'Dewayne Rippin',
      title: "Seller's Agent",
      rating: 5,
      numSales: 2,
      phoneNum: '1-981-117-2034 x215',
    },
    {
      _id: '5e6bdede3285240a2bdbb7cc',
      name: 'Cloyd Runte',
      title: 'Premier Agent',
      rating: 3,
      numSales: 4,
      phoneNum: '1-410-287-3032',
    },
    {
      _id: '5e6bdede3285240a2bdbb7cd',
      name: 'Alverta Lynch',
      title: 'Premier Agent',
      rating: 3,
      numSales: 4,
      phoneNum: '1-871-802-1899 x7236',
    },
    {
      _id: '5e6bdede3285240a2bdbb7ce',
      name: 'Teresa Kihn',
      title: 'Premier Agent',
      rating: 4,
      numSales: 9,
      phoneNum: '103.211.6929 x29927',
    },
  ],
};

ReactDOM.render(
  <Summary summary={summary} />,
  document.getElementById('app'),
);
