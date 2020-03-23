/* eslint-disable react/prop-types */
import React from 'react';
import DateCard from './DateCard';

const DateCards = ({ handleSelect, days }) => (
  <span>
    {days.map((day) => <DateCard day={day} handleSelect={handleSelect} />)}
    {/* <DateCard handleSelect={handleSelect} />
    <DateCard handleSelect={handleSelect} />
    <DateCard handleSelect={handleSelect} /> */}
  </span>
);

export default DateCards;
