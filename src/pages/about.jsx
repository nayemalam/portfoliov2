import React, { Component } from 'react';
import DateTimeStamp from '../components/datetimestamp/DateTimeStamp';
import HTMLTitle from '../components/htmltitle/HTMLTitle';
import HeaderDesc from '../components/headerdesc/HeaderDesc';

class About extends Component {
  render() {

    const headerText = 'Welcome to my world';
    const descText = 'This is a place...';
    return (
      <div className='about container'>
        <HTMLTitle title='Who Am I? | Nayem Alam' />
        
        <HeaderDesc header={headerText} desc={descText} />
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