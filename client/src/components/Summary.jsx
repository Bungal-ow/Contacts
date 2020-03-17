/* eslint-disable react/button-has-type */
import React from 'react';

const dd = {
  price: 2750000,
  numBD: 4,
  numBA: 3,
  sqft: 32116,
  address: '46 Cook St, San Francisco, 94118',
  format: 'for sale',
  hasAbestimate: true,
  estPayment: 12780,
};

const hasAbestimate = () => {
  if (dd.hasAbestimate) {
    return 'Abestimate';
  }
  return '';
};

const Summary = () => (
  <div>
    <div className="header">
      <span>Abode</span>
      <span>save</span>
      <span>share</span>
      <span>more</span>
    </div>
    <div className="body">
      <div className="specs">
        <span>{dd.price}</span>
        <span>{`${dd.numBD}bd`}</span>
        <span>{`${dd.numBA}ba`}</span>
        <span>{`${dd.sqft}sqft.`}</span>
      </div>
      <div className="address">
        {dd.address}
      </div>
      <div className="format">
        <div>
          <span>{dd.format}</span>
          <span>
            {hasAbestimate()}
          </span>
        </div>
        <div>
          <span>
            {`Est. payment ${dd.estPayment}/mo.`}
          </span>
          <span>
            Get pre-qualified
          </span>
        </div>
      </div>
    </div>
    <div className="footer">
      <button>contact agent</button>
      <button>take a tour</button>
    </div>
  </div>

);


export default Summary;
