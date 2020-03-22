/* eslint-disable react/no-unused-state */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-alert */
import React, { Component } from 'react';
import DateCards from './DateCards';

class TourBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      timeslot: null,
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSelect(event) {
    this.setState({ date: event.target.value });
  }

  handleChange(event) {
    this.setState({ timeslot: event.target.value });
  }

  handleSubmit(event) {
    const { timeslot } = this.state;
    alert(timeslot);
    event.preventDefault();
  }

  render() {
    const { timeslot } = this.state;

    return (
      <div>
        <div className="header">
          Visit this home
        </div>
        <div className="body">
          <button type="button" className="nav">←</button>
          <DateCards handleSelect={this.handleSelect} />
          <button type="button" className="nav">→</button>
        </div>
        <div className="timeSelector">
          <form onSubmit={this.handleSubmit}>
            <select value={timeslot} onChange={this.handleChange}>
              <option value="0930">9:30 AM</option>
              <option value="1000">10:00 AM</option>
              <option value="1030">10:30 AM</option>
              <option value="1100">11:00 AM</option>
              <option value="1130">11:30 AM</option>
              <option value="1200">12:00 PM</option>
              <option value="1230">12:30 PM</option>
              <option value="1300">1:00 PM</option>
              <option value="1330">1:30 PM</option>
              <option value="1400">2:00 PM</option>
              <option value="1430">2:30 PM</option>
              <option value="1500">3:00 PM</option>
              <option value="1530">3:30 PM</option>
              <option value="1600">4:00 PM</option>
              <option value="1630">4:30 PM</option>
              <option value="1700">5:00 PM</option>
              <option value="1730">5:30 PM</option>
              <option value="1800">6:00 PM</option>
              <option value="1830">6:30 PM</option>
              <option value="1900">7:00 PM</option>
              <option value="1930">7:30 PM</option>
            </select>
            <br></br>
            <input type="submit" value="Request this time" />
          </form>
        </div>
      </div>
    );
  }
}

export default TourBooking;
