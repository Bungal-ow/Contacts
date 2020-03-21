/* eslint-disable react/prop-types */
/* eslint-disable no-alert */
import React, { Component } from 'react';
import ContactForm from './ContactForm';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
      message: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { address } = this.props;
    this.setState({ message: `I am interested in ${address}.` });
  }

  handleSubmit(event) {
    const {
      name,
      phone,
      email,
      message,
    } = this.state;

    alert(`Submitted ${name}, ${phone}, ${email}, ${message}`);
    event.preventDefault();
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { message } = this.state;

    return (
      <div>
        <div className="header">
          contact agent
        </div>
        <div className="body">
          <div className="form">
            <ContactForm
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              defaultMessage={message}
            />
          </div>
          <div className="agents">
            agents here
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
