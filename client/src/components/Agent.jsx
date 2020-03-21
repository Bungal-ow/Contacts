/* eslint-disable react/self-closing-comp */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

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
          {agent.title}
          <br></br>
          {agent.name}
          <br></br>
          {`${agent.rating}/5`}
          <br></br>
          {`${agent.numSales} recent reviews`}
          <br></br>
          {agent.phoneNum}
        </label>
      </span>
    );
  }
}

export default Agent;
