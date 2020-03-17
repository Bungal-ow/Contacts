/* eslint-disable react/prop-types */
/* eslint-disable react/no-deprecated */
/* eslint-disable react/button-has-type */
// import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Summary extends Component {
  // constructor(props) {
  //   super(props);
  // }

  hasAbestimate() {
    const { summary } = this.props;
    if (summary.hasAbestimate) {
      return 'Abestimate';
    }
    return '';
  }

  render() {
    const { summary } = this.props;
    return (
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
            <span>{`${summary.sqft} sqft.`}</span>
          </div>
          <div className="address">
            {summary.address}
          </div>
          <div className="format">
            <div>
              <span>{summary.format}</span>
              <span> | </span>
              <span>
                {this.hasAbestimate()}
              </span>
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
  }
}

export default Summary;
