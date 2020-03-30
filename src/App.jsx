/* external imports */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// component imports
// import FloatingButton from './components/floatingbutton/FloatingButton';
import NavigationBar from './components/navigationbar/NavigationBar';
/* page imports */
import Home from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Media from './pages/media/Media';
import Speaking from './pages/speaking/Speaking';
import Contact from './pages/contact/Contact';

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
          <Route exact path='/portfolio' component={Portfolio}></Route>
          <Route exact path='/media' component={Media}></Route>
          <Route exact path='/speaking' component={Speaking}></Route>
          <Route exact path='/contact' component={Contact}></Route>
        </Switch>

        {/* <FloatingButton></FloatingButton> */}
      </Router>
    </div>
  );
}

export default App