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
      selectedAgent: null,
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
      selectedAgent,
    } = this.state;

    alert(`Submitted ${name}, ${phone}, ${email}, ${message}, ${selectedAgent}`);
    event.preventDefault();
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { property, star } = this.props;
    const { message } = this.state;

    return (
      <div className="contact">
        <div className="modal-header">
          Contact agent
        </div>
        <div className="modal-body">
          <div className="form">
            <ContactForm
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              defaultMessage={message}
            />
          </div>
          <div className="agents">
            {/* ADD ON CHANGE */}
            {property.contact.map((agent) => (
              <div>
                <Agent star={star} agent={agent} />
              </div>
            ))}
            <p className="placeholder">
              Learn how to appear as the agent above
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
