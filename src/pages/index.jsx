import React, { Component } from 'react';
import Header from '../components/home/Header';
import HTMLTitle from '../components/htmltitle/HTMLTitle';

class Home extends Component {

  render () {
    return (
      <div className='home container'>
        <HTMLTitle title='Nayem Alam | Engineer, Slam Poet & Developer' />
        
        <Header />
      </div>
    )
  }
}

export default Home;
