/* external imports */
import React from 'react';

/* page imports */
import NavBar from './components/navigation/navbar/NavBar';

/* internal css */
import './global.scss'

function App ()  {
  return (
    <div className='app'>
      <NavBar></NavBar>
      {/* <SideBar></SideBar> */}
      {/* <Home></Home> */}
    </div>
  );
}

export default App