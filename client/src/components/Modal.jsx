/* eslint-disable react/prop-types */
import React from 'react';
import Signin from './Signin';
import Share from './Share';
import Contact from './Contact';
import TourBooking from './TourBooking';
import styles from '../styles/modal.css';

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
    modalModifier = styles.signin;
  } else if (type === 'share') {
    body = <Share />;
    modalModifier = styles.share;
  } else if (type === 'contact') {
    body = <Contact star={star} property={property} />;
  } else if (type === 'tour') {
    body = <TourBooking />;
    modalModifier = styles.tour;
  }

  return (
    <div className={`${styles.modal} ${styles.block}`}>
      <section className={`${styles.modal} ${styles.main} ${modalModifier}`}>
        <button className={styles.button} id="close" type="button" onClick={handleClose}><img src={icon} alt="exit" height="20px" /></button>
        {body}
      </section>
    </div>
  );
};

export default Modal;
