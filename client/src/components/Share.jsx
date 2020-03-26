/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-alert */
import React, { Component } from 'react';
import styles from '../styles/share.css';

class Share extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipientEmail: '',
      userEmail: '',
      userMessage: 'Check out this home I found on Abode.',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    const { recipientEmail, userEmail, userMessage } = this.state;
    alert(`Submitted ${recipientEmail}, ${userEmail}, ${userMessage}`);
    event.preventDefault();
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { recipientEmail, userEmail, userMessage } = this.state;
    return (
      <div className={styles.main}>
        <div className={styles.share}>
          Email this home
        </div>
        <div className={styles.body}>
          <div className={styles.forms}>
            <form className={styles.form} onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="recipientEmail">
                  Recipient&apos;s email
                </label>
                <br></br>
                <input
                  className={styles.input}
                  name="recipientEmail"
                  type="email"
                  defaultValue={recipientEmail}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label htmlFor="userEmail">
                  Your email
                </label>
                <br></br>
                <input
                  className={styles.input}
                  name="userEmail"
                  type="email"
                  defaultValue={userEmail}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label htmlFor="userMessage">
                  Include message (optional)
                </label>
                <br></br>
                <textarea
                  className={styles.textarea}
                  name="userMessage"
                  defaultValue={userMessage}
                  onChange={this.handleChange}
                />
              </div>
              <input className={styles.submit} type="submit" value="Send email" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Share;
