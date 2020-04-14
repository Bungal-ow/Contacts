/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable no-alert */
import $ from 'jquery';
import React, { Component } from 'react';
import ContactForm from './ContactForm';
import Agent from './Agent';
import styles from '../styles/contact.css';


class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phoneNum: '',
      email: '',
      message: '',
      agentID: 0,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleID = this.handleID.bind(this);
  }

  componentDidMount() {
    const { property } = this.props;
    this.setState({ message: `I am interested in ${property.address}.` });
  }

  handleSubmit(event) {
    const {
      name,
      phoneNum,
      email,
      message,
      agentID,
    } = this.state;
    $.post('/api/contactagents', {
      name, phoneNum, email, message, agentID,
    });
    alert(`Submitted ${name}, ${phoneNum}, ${email}, ${message}, ${agentID}`);
    event.preventDefault();
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  handleID(id) {
    this.setState({ agentID: id });
  }

  render() {
    const { star, agents } = this.props;
    const { message } = this.state;
    return (
      <div className={styles.contact}>
        <div className={styles.header}>
          Contact agent
        </div>
        <div className={styles.body}>
          <ContactForm
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            defaultMessage={message}
          />
          <div className={styles.agents}>
            {agents.map((agent) => (
              <div>
                <Agent star={star} agent={agent} handleID={this.handleID} />
              </div>
            ))}
            <p className={styles.placeholder}>
              Learn how to appear as the agent above
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
