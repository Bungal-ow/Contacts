/* eslint-disable react/prop-types */
import React from 'react';

const DateCard = ({ handleSelect }) => (
  <span>
    <button value="Mon" type="button" onClick={handleSelect}>Mon</button>
  </span>
);

export default DateCard;
