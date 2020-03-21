/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';

const IconButton = ({ icon, text, handleClick }) => (
  <div onClick={handleClick}>
    <img src={icon} alt="" height="15" />
    {`  ${text}`}
  </div>
);

export default IconButton;
