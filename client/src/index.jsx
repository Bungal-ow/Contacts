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
      _id: '5e76d01d6242dc4433df125e',
      name: 'Fernando Glover',
      title: "Seller's Agent",
      rating: 5,
      numSales: 25,
      phoneNum: '680-121-3586',
      email: 'Corine_Greenfelder@gmail.com',
    },
    {
      _id: '5e76d01d6242dc4433df125f',
      name: 'Alek White III',
      title: 'Premier Agent',
      rating: 4,
      numSales: 27,
      phoneNum: '724-881-9610',
      email: 'Dereck.Will72@hotmail.com',
    },
    {
      _id: '5e76d01d6242dc4433df1260',
      name: 'Eloise Jaskolski',
      title: 'Premier Agent',
      rating: 5,
      numSales: 26,
      phoneNum: '994-413-1993',
      email: 'Dameon.Howell13@hotmail.com',
    },
    {
      _id: '5e76d01d6242dc4433df1261',
      name: 'Lelah Ziemann',
      title: 'Premier Agent',
      rating: 4,
      numSales: 25,
      phoneNum: '069-263-0318',
      email: 'Jazmin_Pagac64@hotmail.com',
    },
  ],
};

ReactDOM.render(
  <Summary summary={summary} />,
  document.getElementById('app'),
);
