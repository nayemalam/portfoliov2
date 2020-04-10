import React, { Component } from 'react';
import DateTimeStamp from '../../components/datetimestamp/DateTimeStamp';

class About extends Component {
  render() {
    return (
      <div className='about container'>
        <h2 className='customHeader upperCaseAll centerText'>hello world</h2>
        <div style={{textAlign: 'center'}}>
          <h1>ABOUT PAGE</h1>
          <h2>ABOUT PAGE</h2>
          <h3>ABOUT PAGEx3</h3>
          <DateTimeStamp></DateTimeStamp>
        </div>
      </div>
    )
  }
}

export default About;