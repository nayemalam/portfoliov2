import React, { Component } from 'react';
import TypeWriter from '../components/home/TypeWriter';
import MetaTags from '../components/metatags/MetaTags';
// import NotificationBar from '../components/notificationbar/NotificationBar';
import FeaturedCards from '../components/home/FeaturedCards';
import MoreInfoButtons from '../components/home/MoreInfoButtons';
import Socials from '../components/socials/Socials';

class Home extends Component {
  render() {
    const featuredWords = ['Welcome to my cave ツ'];
    console.log(
      '%c 🚩If you notice any issues, please flag them to me, thanks!',
      'color: teal; font-weight: bold; background-color: black;',
    );

    return (
      <div id="main" className="home container">
        {/* adding skip link for accessibility purposes */}
        <a className="skip-link" href="#main">
          Skip to main
        </a>

        <MetaTags title="Nayem Alam | Engineer, Slam Poet & Developer" />

        {/* <NotificationBar /> */}
        <TypeWriter words={featuredWords} />
        <FeaturedCards />
        <MoreInfoButtons />
        <Socials />
      </div>
    );
  }
}

export default Home;
