/* external imports */
import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

/* page imports */
import Home from './pages/home/Home';
import SideBar from './components/navigation/sidebar/SideBar';
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