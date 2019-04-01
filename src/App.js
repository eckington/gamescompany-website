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
import PostList from './views/PostList';
import Game from './views/Game';
import './index.css';
import Post from './views/Post';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/games/pc" component={PCGames} />
          <Route path="/games/ps4" component={PS4Games} />
          <Route path="/games/xbox" component={XboxGames} />
          <Route
            path="/reviews"
            component={
              (props) => <PostList {...props} type="reviews" />
            }
          />
          <Route path="/search" component={Search} />
          <Route path="/review/:shortName" component={
            (props) => <Post {...props} type="review" />
          } />
          <Route component={FourOhFour} />
        </Switch>

        <Footer />
      </Router>
    );
  }
}

const FourOhFour = ({ location }) => (
  <div className="container" style={{ textAlign: "center" }}>
    <h3>404.</h3>
    <h4>That's an error.</h4>
  </div>
);

export default hot(module)(App);
