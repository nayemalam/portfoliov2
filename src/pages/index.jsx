import React, { Component } from 'react';
import Header from '../components/home/Header';
import Layout from '../components/layout';

class Home extends Component {

  render () {
    return (
      <Layout>
      <div className='home container'>
        <Header></Header>
      </div>
      </Layout>
    )
  }
}

export default Home;
