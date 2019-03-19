import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return(
      <header>
        <div className="container">
          <div className="topRow">
            <a href="#/">
              <img src="https://via.placeholder.com/250x130.png" alt="Logo" />
            </a>
            <p className="tagline">Reviews, comments &amp; nasty people!</p>
          </div>
          <hr/>
          <div className="links">
            <span className="menu-icon">Menu</span>
            <ul className="links-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/games/pc">PC Games</Link></li>
              <li><Link to="/games/ps4">PS4 Games</Link></li>
              <li><Link to="/games/xbox">Xbox One Games</Link></li>
              <li><Link to="/reviews">Reviews</Link></li>
              <Link to="/search" className="search-link">Search</Link>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;