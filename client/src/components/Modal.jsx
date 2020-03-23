/* eslint-disable react/prop-types */
import React from 'react';
import Signin from './Signin';
import Share from './Share';
import Contact from './Contact';
import TourBooking from './TourBooking';

const Modal = ({
  icon,
  handleClose,
  type,
  property,
  star,
}) => {
  let body;
  let modalModifier;

  if (type === 'signin') {
    body = <Signin />;
    modalModifier = 'signin';
  } else if (type === 'share') {
    body = <Share />;
    modalModifier = 'share';
  } else if (type === 'contact') {
    body = <Contact star={star} property={property} />;
  } else if (type === 'tour') {
    body = <TourBooking />;
  }

  return (
    <div className="modal display-block">
      <section className={`modal modal-main ${modalModifier}`}>
        <button id="close" type="button" onClick={handleClose}><img src={icon} alt="exit" height="20px" /></button>
        {body}
      </section>
    </div>
  );
};

export default Modal;
