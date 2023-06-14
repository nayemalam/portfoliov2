import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import SideDrawer from './sidedrawer/SideDrawer';

class NavigationBar extends Component {
  render() {
    return (
      <div className="navigationbar">
        <CssBaseline>
          <SideDrawer />
        </CssBaseline>
      </div>
    );
  }
}

export default NavigationBar;
