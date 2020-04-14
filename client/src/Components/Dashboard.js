import React, { Component } from 'react';
import Home from './Home'
import Incentives from './Incentives'
import SignUpButton from './SignUpButton'


class Dashboard extends Component {
  render () {
    return (
      <>
        <Home/>
        <Incentives/>
        <SignUpButton/>
      </>
    );
  }
}

export default Dashboard