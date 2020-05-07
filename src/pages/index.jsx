import React, { Component } from 'react';
import Header from '../components/home/Header';
import PageTitle from '../components/pagetitle/PageTitle';

class Home extends Component {

  render () {
    return (
      <div className='home container'>
        <PageTitle title='Nayem Alam | Engineer, Slam Poet & Developer' />
        
        <Header />
      </div>
    )
  }
}

export default Home;
