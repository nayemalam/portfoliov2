/* external imports */
import React from 'react';
import { Helmet } from 'react-helmet';
/* component imports */
import NavigationBar from './navigationbar/NavigationBar';
/* internal css */
import '../styles/global.scss';

function Layout ({children}) {

  return ( 
    <div className='layout'>
      {/* head elements */}
      <Helmet>
        <link rel='preload' href='https://fonts.googleapis.com/css?family=Quicksand&display=swap' as='style' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Josefin+Sans:500&display=swap' />
      </Helmet>

      {/* site elements */}
      <NavigationBar />
      {children}
      {/* <FloatingButton></FloatingButton> */}
    </div>
  );
}

export default Layout
