/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import img from '../assets/placeholder.jpg';
import styles from '../styles/contact.css';

class Agent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { agent, star, handleID } = this.props;
    const agentID = agent.id ? agent.id : 0;
    return (
      <span className={styles.agent}>
        <input className={styles.radio} type="radio" id={agent.id} onClick={() => handleID(agentID)} />
        <label htmlFor={agent.id}>
          <span className={styles.avatar}><img src={img} alt="avatar"></img></span>
        </label>
        <label htmlFor={agent.id}>
          <div className={styles.agentTitle}>{agent.title}</div>
          <div className={styles.agentName}>{agent.name}</div>
          <div>
            <img src={star} alt="star" height="10" />
            {`${agent.rating}/5 Rating`}
          </div>
          <div>{`${agent.numberSales} Recent sales`}</div>
          <div>{agent.phoneNum}</div>
        </label>
      </span>
    );
  }
}

export default Agent;
