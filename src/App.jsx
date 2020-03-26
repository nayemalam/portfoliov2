/* external imports */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// component imports
// import FloatingButton from './components/floatingbutton/FloatingButton';
import NavigationBar from './components/navigationbar/NavigationBar';
/* page imports */
import Home from './pages/home/Home';
import About from './pages/about/About';

/* internal css */
import './global.scss'

function App ()  {
  return (
    <div className='app'>
      <Router>
        <NavigationBar></NavigationBar>
        
        <Switch>
          <Route exact path ='/' component={Home}></Route>
          <Route exact path ='/about' component={About}></Route>
        </Switch>

        {/* <FloatingButton></FloatingButton> */}
      </Router>
    </div>
  );
}

export default App