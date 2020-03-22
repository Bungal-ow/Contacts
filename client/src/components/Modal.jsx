/* eslint-disable react/prop-types */
import React from 'react';
import Signin from './Signin';
import Share from './Share';
import Contact from './Contact';
import TourBooking from './TourBooking';

const Modal = ({ handleClose, type, property }) => {
  let body;
  let modalModifier;

  if (type === 'signin') {
    body = <Signin />;
    modalModifier = 'signin';
  } else if (type === 'share') {
    body = <Share />;
    modalModifier = 'share';
  } else if (type === 'contact') {
    body = <Contact property={property} />;
  } else if (type === 'tour') {
    body = <TourBooking />;
  }

  return (
    <div className="modal display-block">
      <section className={`modal modal-main ${modalModifier}`}>
        <button id="close" type="button" onClick={handleClose}>close</button>
        {body}
      </section>
    </div>
  );
};

export default Modal;
