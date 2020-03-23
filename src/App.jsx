/* external imports */
import React from 'react';

/* page imports */
import NavigationBar from './components/navigationbar/NavigationBar';

/* internal css */
import './global.scss'

function App ()  {
  return (
    <div className='app'>
      <NavigationBar></NavigationBar>
    </div>
  );
}

export default App