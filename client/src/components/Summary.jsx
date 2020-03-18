/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-deprecated */
/* eslint-disable react/button-has-type */
// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import IconButton from './IconButton';
import Modal from './Modal';
import shareIcon from '../assets/arrow.svg';
import heartIcon from '../assets/heart.svg';
import moreIcon from '../assets/more.svg';
import './Modal.css';

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
  }

  hasAbestimate() {
    const { summary } = this.props;
    if (summary.hasAbestimate) {
      return 'Abestimate';
    }
    return '';
  }

  render() {
    const { show } = this.state;
    const { summary } = this.props;
    return (
      <div>
        <div className="header">
          <span>Abode</span>
          <IconButton icon={heartIcon} text="Save" />
          <IconButton icon={shareIcon} text="Share" />
          <IconButton icon={moreIcon} text="More" />
        </div>
        <div className="body">
          <div className="specs">
            <span>${summary.price}</span>
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
          <button type="button" onClick={this.showModal}>contact agent</button>
          <button type="button" onClick={this.showModal}>take a tour</button>
        </div>
        <Modal show={show} handleClose={this.hideModal}>
          <p>Modal</p>
          <p>Data</p>
        </Modal>
      </div>
    );
  }
}

export default Summary;
