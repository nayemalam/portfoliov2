import React, { Component } from 'react'
import MetaTags from '../components/metatags/MetaTags'
import TypeWriter from '../components/home/TypeWriter'
// import NotificationBar from '../components/notificationbar/NotificationBar';
import MoreInfoButtons from '../components/home/MoreInfoButtons'
import Socials from '../components/home/Socials'

class Home extends Component {
  render() {
    const featuredWords = ['code', 'design', 'speak', 'drink coffee']
    console.log(
      '%c 🚩If you notice any issues, please flag them to me, thanks!',
      'color: teal; font-weight: bold; background-color: black;'
    )

    return (
      <div id="main" className="home container">
        {/* adding skip link for accessibility purposes */}
        <a className="skip-link" href="#main">
          Skip to main
        </a>

        <MetaTags title="Nayem Alam | Engineer, Slam Poet & Developer" />

        {/* <NotificationBar /> */}
        <TypeWriter words={featuredWords} />
        <MoreInfoButtons />
        <Socials />
      </div>
    )
  }
}

export default Home
