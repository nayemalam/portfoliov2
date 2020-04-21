/* external imports */
import React from 'react';
/* component imports */
import NavigationBar from './navigationbar/NavigationBar';
/* internal css */
import '../styles/global.scss';

function Layout ({children}) {

  return (
    <div className='layout'>
        <NavigationBar></NavigationBar>
        {children}
        {/* <FloatingButton></FloatingButton> */}
    </div>
  );
}

export default Layout
