import React, { Component } from 'react';
import HTMLTitle from '../components/htmltitle/HTMLTitle';
import TypeWriter from '../components/home/TypeWriter';
import NotificationBar from '../components/notificationbar/NotificationBar';
import MoreInfoButtons from '../components/home/MoreInfoButtons';
import Socials from '../components/home/Socials';

class Home extends Component {

  render () {
    const featuredWords = ['code', 'design', 'speak', 'drink coffee'];
    console.log('%c 🚩If you notice any issues, please flag them to me, thanks!', 'color: teal; font-weight: bold; background-color: black;');

    return (
      <div className='home container parallax'>
        <HTMLTitle title='Nayem Alam | Engineer, Slam Poet & Developer' />
        <div className="stars"></div>
        <div className="stars2"></div>
        <NotificationBar />
        <TypeWriter words={featuredWords} />
        <MoreInfoButtons />
        <Socials />
      </div>
    )
  }
}

export default Home;
