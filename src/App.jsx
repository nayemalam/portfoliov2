/* external imports */
import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

/* page imports */
import Home from './pages/home/Home';
import NavBar from './components/navbar/NavBar'

/* internal css */
import './global.scss'

const App = () => (
  <div className='app'>
    <BrowserRouter>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/nav' component={NavBar}/>
      </Switch>
    </BrowserRouter>
  </div>
)

export default App