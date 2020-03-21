/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable no-alert */
import React, { Component } from 'react';
import ContactForm from './ContactForm';
import Agent from './Agent';

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
    const { property } = this.props;
    this.setState({ message: `I am interested in ${property.address}.` });
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
    const { property } = this.props;
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
            {property.contact.map((agent) => (
              <div>
                <span><input type="radio" id={agent.id} /></span>
                <span><Agent agent={agent} /></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
