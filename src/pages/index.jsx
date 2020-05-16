import React, { Component } from 'react';
import HTMLTitle from '../components/htmltitle/HTMLTitle';
import TypeWriter from '../components/home/TypeWriter';
import NotificationBar from '../components/notificationbar/NotificationBar';

class Home extends Component {

  render () {
    const featuredWords = ['code', 'design', 'speak', 'drink coffee'];
    console.log('%c 🚩If you notice any issues, please flag them to me, thanks!', 'color: teal; font-weight: bold; background-color: black;');

    return (
      <div className='home container'>
        <HTMLTitle title='Nayem Alam | Engineer, Slam Poet & Developer' />

        <NotificationBar />
        <TypeWriter words={featuredWords} />
      </div>
    )
  }
}

export default Home;
