import React, { Component } from 'react';
import DateTimeStamp from '../components/datetimestamp/DateTimeStamp';
import PageTitle from '../components/pagetitle/PageTitle';

class About extends Component {
  render() {
    return (
      <div className='about container'>
        <PageTitle title='Who Am I? | Nayem Alam' />
        
        <h2 className='customHeader upperCaseAll centerText'>hello world</h2>
        <div style={{textAlign: 'center'}}>
          <h1>Made a change</h1>
          <h2>ABOUT PAGE</h2>
          <h3>ABOUT PAGEx3</h3>
          <h1>ABOUT PAGE</h1>
          <h2>ABOUT PAGE</h2>
          <h3>ABOUT PAGEx3</h3>
          <h1>ABOUT PAGE</h1>
          <h2>ABOUT PAGE</h2>
          <h3>ABOUT PAGEx3</h3>
          <h1>ABOUT PAGE</h1>
          <h2>ABOUT PAGE</h2>
          <h3>ABOUT PAGEx3</h3>
          <h1>ABOUT PAGE</h1>
          <h2>ABOUT PAGE</h2>
          <h3>ABOUT PAGEx3</h3>
          <DateTimeStamp />
        </div>
      </div>
    )
  }
}

export default About;