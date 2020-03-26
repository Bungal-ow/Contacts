/* eslint-disable react/self-closing-comp */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from '../styles/contact.css';

const legalBlock = (
  `By pressing Contact Agent, you agree that Abode Group and real estate professionals
  may call/text you about your inquiry, which may involve use of automated means
  and prerecorded/artificial voices. You don't need to consent as a condition of
  buying any property, goods or services. Message/data rates may apply. You also
  agree to our Terms of Use. Abode does not endorse any real estate professionals.`
);

const ContactForm = ({ handleSubmit, handleChange, defaultMessage }) => (
  <form className={styles.form} onSubmit={handleSubmit}>
    <input
      className={styles.input}
      id="name"
      name="name"
      type="text"
      defaultValue="Name"
      onChange={handleChange}
    />
    <br></br>
    <input
      className={styles.input}
      id="phone"
      name="phone"
      type="text"
      defaultValue="Phone"
      onChange={handleChange}
    />
    <br></br>
    <input
      className={styles.input}
      id="email"
      name="email"
      type="email"
      defaultValue="Email"
      onChange={handleChange}
    />
    <br></br>
    <textarea
      className={styles.textarea}
      id="message"
      name="message"
      defaultValue={defaultMessage}
      onChange={handleChange}
    />
    <br></br>
    <input className={styles.submit} type="submit" value="Contact agent" />
    <div>
      <p className={styles.legal}>
        {legalBlock}
      </p>
    </div>
    <br></br>
  </form>
);


export default ContactForm;
