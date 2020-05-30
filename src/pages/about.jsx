import React, { Component } from 'react';
import HTMLTitle from '../components/htmltitle/HTMLTitle';
import HeaderDesc from '../components/headerdesc/HeaderDesc';
import Description from '../components/about/Description';
import WorkExperience from '../components/about/WorkExperience';
import Education from '../components/about/Education';
import Awards from '../components/about/Awards';
import EditPage from '../components/editpage/EditPage';
import UsefulData from '../components/about/UsefulData';
import FavQuotes from '../components/about/FavQuotes';

class About extends Component {
  render() {

    const headerText = 'Hello World';
    const descText = '';
    return (
      <div className='about container'>
        <HTMLTitle title='Who Am I? | Nayem Alam' />
        
        <HeaderDesc header={headerText} desc={descText} />
        <Description />
        <WorkExperience />
        <Education />
        <Awards />
        <FavQuotes />
        <UsefulData />
        <EditPage link={'https://github.com/nayemalam/portfolio/blob/master/about.html'} />
      </div>
    )
  }
}

export default About;