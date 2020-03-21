/* eslint-disable react/prop-types */
import React from 'react';
import Signin from './Signin';
import Share from './Share';
import Contact from './Contact';
import TourBooking from './TourBooking';

const Modal = ({ handleClose, type, address }) => {
  let body;

  if (type === 'signin') {
    body = <Signin />;
  } else if (type === 'share') {
    body = <Share />;
  } else if (type === 'contact') {
    body = <Contact address={address} />;
  } else if (type === 'tour') {
    body = <TourBooking />;
  }

  return (
    <div className="modal display-block">
      <section className="modal modal-main">
        <button type="button" onClick={handleClose}>close</button>
        {body}
      </section>
    </div>
  );
};

export default Modal;
