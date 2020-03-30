import React, { Component } from 'react';
import Header from './header/Header';
import Socials from './socials/Socials';
import ReadMore from './readmore/ReadMore';

class Home extends Component {
  
  render () {
    return (
      <div className='home container'>
        <Header></Header>
        <ReadMore></ReadMore>
        <Socials></Socials>
      </div>
    )
  }
}

export default Home;
