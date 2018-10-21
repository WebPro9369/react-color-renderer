import React from 'react';
import { connect } from 'react-redux';
import Tab1 from '../components/Tab1';

export default connect(
  state => ({
    color: state.Color
  })
)(Tab1);