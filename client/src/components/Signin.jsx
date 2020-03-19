/* eslint-disable no-alert */
import React, { Component } from 'react';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
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
        <div className="header">
          Sign in or register to save this home
        </div>
        <div className="body">
          <div className="form">
            <form onSubmit={this.handleSubmit}>
              <input type="email" value={value} onChange={this.handleChange} />
              <input type="submit" value="Submit" />
              <p>By submitting, I accept...</p>
            </form>
          </div>
          <div>
            <button>apple</button>
            <button>facebook</button>
            <button>google</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
