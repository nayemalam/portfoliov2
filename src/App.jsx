/* external imports */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* page imports */
import NavigationBar from './components/navigationbar/NavigationBar';
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
      </Router>
    </div>
  );
}

export default App