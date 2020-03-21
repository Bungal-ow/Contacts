/* eslint-disable react/self-closing-comp */
/* eslint-disable react/prop-types */
import React from 'react';

const ContactForm = ({ handleSubmit, handleChange, defaultMessage }) => (
  <div className="contactForm">
    <form onSubmit={handleSubmit}>
      <input
        id="name"
        name="name"
        type="text"
        defaultValue="Name"
        onChange={handleChange}
      />
      <br></br>
      <input
        id="phone"
        name="phone"
        type="text"
        defaultValue="Phone"
        onChange={handleChange}
      />
      <br></br>
      <input
        id="email"
        name="email"
        type="email"
        defaultValue="Email"
        onChange={handleChange}
      />
      <br></br>
      <textarea
        id="message"
        name="message"
        defaultValue={defaultMessage}
        onChange={handleChange}
      />
      <br></br>
      <input type="submit" name="Contact agent" />
      <br></br>
    </form>
  </div>
);


export default ContactForm;
