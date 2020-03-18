import React from 'react';

const IconButton = ({ icon, text }) => (
  <span>
    <img src={icon} alt="" height="12" />
    {text}
  </span>
);

export default IconButton;
