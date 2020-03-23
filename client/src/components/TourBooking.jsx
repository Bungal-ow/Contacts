/* eslint-disable radix */
/* eslint-disable arrow-body-style */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-alert */
import React, { Component } from 'react';
import DateCards from './DateCards';

const daysController = (days, delta) => {
  let alteredDays;

  if (!delta) {
    const today = new Date();
    const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    const yesterday = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
    alteredDays = [yesterday, today, tomorrow];
  } else {
    const forward = days.map((day) => {
      return new Date(day.setDate(day.getDate() + 1));
    });
    const backward = days.map((day) => {
      return new Date(day.setDate(day.getDate() - 2));
    });
    if (delta === 1) {
      alteredDays = forward;
    }

    if (delta === -1) {
      alteredDays = backward;
    }
  }

  return alteredDays;
};

const arrayOfDays = (days) => {
  const justDate = (day) => day.toString().slice(0, 10);
  const abbrDays = days.map((day) => justDate(day));
  const abbrDaysArr = abbrDays.map((abbrDay) => abbrDay.split(' '));
  const abbrDaysObj = abbrDaysArr.map((abbrDate) => {
    return {
      day: abbrDate[0],
      month: abbrDate[1],
      date: abbrDate[2],
    };
  });
  return abbrDaysObj;
};

class TourBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daysControl: [],
      days: [],
      date: null,
      timeslot: '0930',
    };

    this.handleNav = this.handleNav.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ 
      daysControl: daysController(),
      days: arrayOfDays(daysController()),
    });
  }

  handleNav({ target }) {
    const { daysControl } = this.state;
    const newDays = daysController(daysControl, parseInt(target.value));
    this.setState({
      daysControl: newDays,
      days: arrayOfDays(newDays),
    });
  }

  handleSelect({ target }) {
    this.setState({ date: target.value });
  }

  handleChange({ target }) {
    this.setState({ timeslot: target.value });
  }

  handleSubmit(event) {
    const { timeslot } = this.state;
    alert(timeslot);
    event.preventDefault();
  }

  render() {
    const { timeslot, days } = this.state;

    return (
      <div>
        <div className="header">
          Visit this home
        </div>
        <div className="body">
          <button onClick={this.handleNav} value="-1" type="button" className="nav">←</button>
          <DateCards days={days} handleSelect={this.handleSelect} />
          <button onClick={this.handleNav} value="1" type="button" className="nav">→</button>
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
