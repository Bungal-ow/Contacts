/* eslint-disable no-alert */
import React, { Component } from 'react';

class Share extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipientEmail: '',
      userEmail: '',
      userMessage: '',
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
      <div>
        <div className="header">
          Email this home
        </div>
        <div className="body">
          <div className="form">
            <form onSubmit={this.handleSubmit}>
              <label>
                recipient&apos;s email
                <input
                  name="recipientEmail"
                  type="email"
                  defaultValue={recipientEmail}
                  onChange={this.handleChange}
                />
                <br></br>
              </label>
              <label>
                your email
                <input
                  name="userEmail"
                  type="email"
                  defaultValue={userEmail}
                  onChange={this.handleChange}
                />
                <br></br>
              </label>
              <label>
                message (optional)
                <textarea
                  name="userMessage"
                  defaultValue={userMessage}
                  onChange={this.handleChange}
                />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Share;
