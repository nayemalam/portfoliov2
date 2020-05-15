/* external imports */
import React from 'react';
import { Helmet } from 'react-helmet';
/* component imports */
import NavigationBar from './navigationbar/NavigationBar';
/* internal css */
import '../styles/global.scss';
import FloatingHamburger from './navigationbar/sidedrawer/mobilemenu/hamburger/FloatingHamburger';

function Layout ({children}) {

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
      <FloatingHamburger />
    </div>
  );
}

export default Layout
