import React, { Component } from 'react';
import Header from './header/Header';
import Socials from './socials/Socials';
import ReadMore from './readmore/ReadMore';
import TypeWriter from './typewriter/TypeWriter';

class Home extends Component {
  
  render () {
    const featuredWords = ['code', 'design', 'speak', 'drink coffee']

    return (
      <div className='home container'>
        <Header></Header>
        <TypeWriter words={featuredWords}></TypeWriter>
        <ReadMore></ReadMore>
        <Socials></Socials>
      </div>
    )
  }
}

export default Home;
