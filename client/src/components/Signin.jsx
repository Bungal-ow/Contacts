/* eslint-disable no-alert */
import React, { Component } from 'react';

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
      <div className="signin">
        <div className="signin-header">
          Sign in or register to save this home
        </div>
        <div className="signin-body">
          <div className="signin-form">
            <form onSubmit={this.handleSubmit}>
              <input type="email" defaultValue={value} onChange={this.handleChange} />
              <input id="submitButton" type="submit" value="Submit" />
              <p className="signin-legal">By submitting, I accept...</p>
            </form>
          </div>
          <div>
            <button id="button-apple" type="button">
              Connect with Apple
            </button>
            <button id="button-facebook" type="button">Connect with Facebook</button>
            <button id="button-google" type="button">Connect with Google</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
