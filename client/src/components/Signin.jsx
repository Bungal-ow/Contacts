/* eslint-disable no-alert */
import React, { Component } from 'react';
import styles from '../styles/signin.css';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '  Enter email',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const { value } = this.state;
    alert(`Submitted ${value}`);
    event.preventDefault();
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <div className={styles.header}>
          Sign in or register to save this home
        </div>
        <div className={styles.body}>
          <div>
            <form className={styles.form} onSubmit={this.handleSubmit}>
              <input className={styles.input} type="email" defaultValue={value} onChange={this.handleChange} />
              <input className={styles.submit} type="submit" value="Submit" />
              <p className={styles.legal}>By submitting, I accept...</p>
            </form>
          </div>
          <div>
            <button className={styles.apple} type="button">
              Connect with Apple
            </button>
            <button className={styles.facebook} type="button">Connect with Facebook</button>
            <button className={styles.google} type="button">Connect with Google</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
