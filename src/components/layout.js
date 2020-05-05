/* external imports */
import React from 'react';
import 'typeface-quicksand';
import 'typeface-josefin-sans';
/* component imports */
import NavigationBar from './navigationbar/NavigationBar';
/* internal css */
import '../styles/global.scss';

function Layout ({children}) {

  return (
    <div className='layout'>
        <NavigationBar />
        {children}
        {/* <FloatingButton></FloatingButton> */}
    </div>
  );
}

export default Layout
