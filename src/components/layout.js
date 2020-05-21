/* external imports */
import React from 'react';
import { Helmet } from 'react-helmet';
/* component imports */
import NavigationBar from './navigationbar/NavigationBar';
/* internal css */
import '../styles/global.scss';

function Layout ({children}) {

  // trigger for landscape devices
  const readDeviceOrientation = () => {
    if (window.orientation === 90 || window.orientation === -90) {
        alert('This site is not optimized for landscape mode. Please use portrait mode instead, thank you.');
    } 
  }

  window.onorientationchange = readDeviceOrientation;

  return ( 
    <div className='layout'>
      {/* head elements */}
      <Helmet>
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Quicksand&display=swap' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Josefin+Sans:500&display=swap' />
      </Helmet>

      {/* site elements */}
      <NavigationBar />
      {children}
    </div>
  );
}

export default Layout
