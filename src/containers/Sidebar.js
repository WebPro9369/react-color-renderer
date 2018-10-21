import React from 'react';
import { connect } from 'react-redux';
import ColorRanger from '../components/ColorRanger';
import actions from '../redux/color/actions';

const { setColorRed, setColorGreen, setColorBlue } = actions;

export const SidebarComponent = ({
  color,
  setColorRed,
  setColorGreen,
  setColorBlue,
}) => (
  <div id="sidebar">
    Red: 
    <ColorRanger 
      value={color.red}
      handleChange={(e) => setColorRed(e.target.value)}
    />
    Green: 
    <ColorRanger 
      value={color.green}
      handleChange={(e) => setColorGreen(e.target.value)}
    />
    Blue: 
    <ColorRanger 
      value={color.blue}
      handleChange={(e) => setColorBlue(e.target.value)}
    />
  </div>
);
export default connect(
  (state, ownProps) => ({
    color: state.Color
  }),
  {
    setColorRed,
    setColorGreen,
    setColorBlue,
  }
)(SidebarComponent);