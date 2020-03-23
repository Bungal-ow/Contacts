/* eslint-disable react/prop-types */
import React from 'react';

const DateCard = ({ handleSelect, day }) => (
  <span>
    <button className="date-cards" value="Mon" type="button" onClick={handleSelect}>
      <div>
        <div>
          {day.day}
        </div>
        <div>
          {`${day.month} ${day.date}`}
        </div>
      </div>
    </button>
  </span>
);

export default DateCard;
