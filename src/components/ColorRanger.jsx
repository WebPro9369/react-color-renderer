import React from 'react';

const ColorRanger = ({
  handleChange,
  value
}) => (
  <div>
    <input type="range" min="0" max="255" value={value} className="color-slider" onChange={handleChange}></input>
    <input type="number" value={value} className="color-value" onChange={handleChange}></input>
  </div>
);

export default ColorRanger;