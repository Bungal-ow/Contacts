/* eslint-disable react/prop-types */
import React from 'react';

const Modal = ({ handleClose }) => (
  <div className="modal display-block">
    <section className="modal modal-main">
      <p>Modal</p>
      <p>Data</p>
      <button type="button" onClick={handleClose}>close</button>
    </section>
  </div>
);

export default Modal;
