import React, { Component } from 'react';
import MobileMenu from './mobilemenu/MobileMenu';

class SideBar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <MobileMenu></MobileMenu>
      </div>
    )
  }
}

export default SideBar;