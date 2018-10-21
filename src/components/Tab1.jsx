import React from 'react';

const Tab1 = ({color}) => (
  <div id="tab1" style={{backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})`}}>
    Background color applied
  </div>
);

export default Tab1;