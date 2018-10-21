import React from 'react';
import { connect } from 'react-redux';
import Tab2 from '../components/Tab2';

export default connect(
  state => ({
    color: state.Color
  })
)(Tab2);