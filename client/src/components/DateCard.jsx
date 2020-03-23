/* eslint-disable react/self-closing-comp */
/* eslint-disable react/prop-types */
import React from 'react';

const DateCard = ({ handleSelect, day }) => (
  <span>
    <button className="date-card" value="Mon" type="button" onClick={handleSelect}>
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
