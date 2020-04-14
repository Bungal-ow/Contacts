/* eslint-disable react/self-closing-comp */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from '../styles/tourbooking.css';

const DateCard = ({ handleSelect, day }) => (
  <span>
    <button className={styles.card} value={`${day.month} ${day.date}`} type="button" onClick={handleSelect}>
      <div>
        <div>
          {day.day}
        </div>
        <br></br>
        <div>
          {`${day.month} ${day.date}`}
        </div>
      </div>
    </button>
  </span>
);

export default DateCard;
