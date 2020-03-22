import React, { Component } from 'react';
import SideBar from '../sidebar/SideBar';
import CssBaseline from '@material-ui/core/CssBaseline';

class NavBar extends Component {
  render () {
    return (
      <div className='navbar'>
        <CssBaseline>
          <SideBar></SideBar>
        </CssBaseline>
      </div>
    )
  }
}

export default NavBar;
  
