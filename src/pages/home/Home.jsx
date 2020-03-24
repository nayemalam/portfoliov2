import React, { Component } from 'react'
import Header from './header/Header'

class Home extends Component {
  
  render () {
    console.log("on home page")
    return (
      <div className='home'>
        <Header></Header>
      </div>
    )
  }
}

export default Home;
