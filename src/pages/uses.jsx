import React, { Component } from 'react';
import MetaTags from '../components/metatags/MetaTags';
import HeaderDesc from '../components/headerdesc/HeaderDesc';

class About extends Component {
  render() {
    const headerText = 'Uses';
    const descText =
      'This page is a living document of all the software/hardware I use on a daily basis for curious devs out there';
    return (
      <div className="uses container">
        <MetaTags title="List of uses | Nayem Alam" />

        <HeaderDesc header={headerText} desc={descText} />
      </div>
    );
  }
}

export default About;
