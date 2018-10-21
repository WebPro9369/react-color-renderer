import React from 'react';

const decToHex = (dec) => {
  let hex = parseInt(dec).toString(16);
  if (hex.length === 1) {
    hex = "0" + hex;
  }
  return hex;
};

const Tab2 = ({color}) => (
  <div id="tab2">
    <h4>HEX value: #{decToHex(color.red)}{decToHex(color.green)}{decToHex(color.blue)}</h4>
    <h4>RGB value: rgb({color.red}, {color.green}, {color.blue})</h4>
  </div>
);

export default Tab2;