import React, { Component } from 'react';
import HTMLTitle from '../components/htmltitle/HTMLTitle';
import TypeWriter from '../components/home/TypeWriter';
// import NotificationBar from '../components/notificationbar/NotificationBar';
import MoreInfoButtons from '../components/home/MoreInfoButtons';
import Socials from '../components/home/Socials';
import SEO from '../components/seo';

class Home extends Component {

  render () {
    const featuredWords = ['code', 'design', 'speak', 'drink coffee'];
    console.log('%c 🚩If you notice any issues, please flag them to me, thanks!', 'color: teal; font-weight: bold; background-color: black;');

    return (
      <div className='home container'>
        <SEO 
          title='Nayem Alam | Engineer, Slam Poet & Developer' 
          description='23 y/o tech enthusiast with a passion for slam poetry and engineering.'
        />
        <HTMLTitle title='Nayem Alam | Engineer, Slam Poet & Developer' />
        
        {/* <NotificationBar /> */}
        <TypeWriter words={featuredWords} />
        <MoreInfoButtons />
        <Socials />
      </div>
    )
  }
}

export default Home;
