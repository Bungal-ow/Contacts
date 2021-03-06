/* eslint-disable react/prop-types */
/* eslint-disable radix */
/* eslint-disable arrow-body-style */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-alert */
import $ from 'jquery';
import React, { Component } from 'react';
import DateCards from './DateCards';
import { daysController, arrayOfDays } from '../utils/getDates';
import styles from '../styles/tourbooking.css';

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
    event.preventDefault();
    const { timeslot, date } = this.state;
    const { property } = this.props;
    const bookingTime = `${date} ${timeslot}`;
    const propertyID = property.id;
    const userID = 100000001;
    $.post('/api/houseBooking', {
      bookingTime, userID, propertyID,
    });
    // console.log(bookingTime, property.id);
  }

  render() {
    const { timeslot, days } = this.state;
    return (
      <div>
        <div className={styles.header}>
          Visit this home
        </div>
        <div className={styles.body}>
          <button className={styles.nav} onClick={this.handleNav} value="-1" type="button">←</button>
          <DateCards className={styles.cards} days={days} handleSelect={this.handleSelect} />
          <button className={styles.nav} onClick={this.handleNav} value="1" type="button">→</button>
        </div>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <select className={styles.select} value={timeslot} onChange={this.handleChange}>
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
          <input className={styles.submit} type="submit" value="Request this time" />
        </form>
      </div>
    );
  }
}

export default TourBooking;
