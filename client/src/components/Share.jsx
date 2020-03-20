/* eslint-disable no-alert */
import React, { Component } from 'react';

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
      <div>
        <div className="header">
          Email this home
        </div>
        <div className="body">
          <div className="form">
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="recipientEmail">
                Recipient&apos;s email
                <input
                  id="recipientEmail"
                  name="recipientEmail"
                  type="email"
                  defaultValue={recipientEmail}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="userEmail">
                Your email
                <input
                  id="userEmail"
                  name="userEmail"
                  type="email"
                  defaultValue={userEmail}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="userMessage">
                Include message (optional)
                <textarea
                  id="userMessage"
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
