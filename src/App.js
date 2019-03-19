import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Header';
import Footer from './components/Footer';
import Index from './views/Index';
import PCGames from './views/PCGames';
import PS4Games from './views/PS4Games';
import XboxGames from './views/XboxGames';
import Search from './views/Search';

import './index.css';

class App extends Component{
  render(){
    return(
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/games/pc" component={PCGames} />
          <Route path="/games/ps4" component={PS4Games} />
          <Route path="/games/xbox" component={XboxGames} />
          <Route path="/reviews" component={XboxGames} />
          <Route path="/search" component={Search} />
          <Route component={FourOhFour} />
        </Switch>

        <Footer />
      </Router>
    );
  }
}

const FourOhFour = ({ location }) => (
  <div className="container">
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

export default hot(module)(App);