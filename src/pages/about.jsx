import React, { Component } from 'react';
import DateTimeStamp from '../components/datetimestamp/DateTimeStamp';
import HTMLTitle from '../components/htmltitle/HTMLTitle';
import HeaderDesc from '../components/headerdesc/HeaderDesc';
import Description from '../components/about/Description';

class About extends Component {
  render() {

    const headerText = 'Hello World';
    const descText = '';
    return (
      <div className='about container'>
        <HTMLTitle title='Who Am I? | Nayem Alam' />
        
        <HeaderDesc header={headerText} desc={descText} />
        <Description />
        <DateTimeStamp />

      </div>
    )
  }
}

export default About;