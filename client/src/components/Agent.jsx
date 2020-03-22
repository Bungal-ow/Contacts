/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import img from '../assets/placeholder.jpg';

class Agent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { agent } = this.props;

    return (
      <span className="agent">
        <input type="radio" id={agent.id} />
        <label htmlFor={agent.id}>
          <span id="avatar"><img src={img} alt="avatar"></img></span>
        </label>
        <label htmlFor={agent.id}>
          <div className="agent-title">{agent.title}</div>
          <div className="agent-name">{agent.name}</div>
          <div>{`${agent.rating}/5`}</div>
          <div>{`${agent.numSales} Recent sales`}</div>
          <div>{agent.phoneNum}</div>
        </label>
      </span>
    );
  }
}

export default Agent;
