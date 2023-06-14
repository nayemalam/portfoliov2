import React, { Component } from 'react';
import Awards from '../components/about/Awards';
import Description from '../components/about/Description';
import Education from '../components/about/Education';
import FavQuotes from '../components/about/FavQuotes';
import WorkExperience from '../components/about/WorkExperience';
import EditPage from '../components/editpage/EditPage';
import HeaderDesc from '../components/headerdesc/HeaderDesc';
import MetaTags from '../components/metatags/MetaTags';
// import UsefulData from '../components/about/UsefulData';

class About extends Component {
  render() {
    const headerText = 'Hello World';
    const descText = '';
    return (
      <div className="about container">
        <MetaTags title="Who Am I? | Nayem Alam" />

        <HeaderDesc header={headerText} desc={descText} />
        <Description />
        <WorkExperience />
        <Education />
        <Awards />
        <FavQuotes />
        {/* <UsefulData /> */}
        <EditPage
          link={
            'https://github.com/nayemalam/portfoliov2/blob/dev/src/pages/about.jsx'
          }
        />
      </div>
    );
  }
}

export default About;
