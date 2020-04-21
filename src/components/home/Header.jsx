import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <h1 className='customHeader centerText' style={{fontSize: '45px', color: 'rgb(195, 232, 141)'}}>Hi, I'm Nayem.</h1>
        <p className='customHeader centerText justifyText' style={{margin: '0 50px 0 50px', color: 'rgb(199, 146, 234)'}}>
        Slam poet, designer, developer, engineer. These are all titles I've been given. I like 
        to think of myself as a learner, from cooking to up and coming programming frameworks. 
        Continue reading and see what title you want to give me.
        </p>
      </div>
    )
  }
}

export default Header;