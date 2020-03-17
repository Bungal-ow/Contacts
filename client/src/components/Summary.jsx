/* eslint-disable react/button-has-type */
import React from 'react';

// const dd = {
//   price: 2750000,
//   numBD: 4,
//   numBA: 3,
//   sqft: 32116,
//   address: '46 Cook St, San Francisco, 94118',
//   format: 'for sale',
//   hasAbestimate: true,
//   estPayment: 12780,
// };

// const hasAbestimate = () => {
//   if (summary.hasAbestimate) {
//     return 'Abestimate';
//   }
//   return '';
// };

const Summary = ({summary}) => (
  <div>
    <div className="header">
      <span>Abode</span>
      <span>save</span>
      <span>share</span>
      <span>more</span>
    </div>
    <div className="body">
      <div className="specs">
        <span>{summary.price}</span>
        <span>{`${summary.numBD}bd`}</span>
        <span> | </span>
        <span>{`${summary.numBA}ba`}</span>
        <span> | </span>
        <span>{`${summary.sqft}sqft.`}</span>
      </div>
      <div className="address">
        {summary.address}
      </div>
      <div className="format">
        <div>
          <span>{summary.format}</span>
          <span> | </span>
          {/* <span>
            {hasAbestimate()}
          </span> */}
        </div>
        <div>
          <span>
            {`Est. payment ${summary.estPayment}/mo.`}
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
