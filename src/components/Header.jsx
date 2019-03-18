import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return(
      <header>
        <div class="container">
          <div class="topRow">
            <a href="#/">
              <img src="https://via.placeholder.com/250x130.png" alt="Logo" />
            </a>
            <p class="tagline">Where even Cowell would wet his pants</p>
          </div>
          <hr>
          <div class="links">
            <span class="menu-icon">Menu</span>
            <ul class="links-list">
              <li><a href="#/">Home</a></li>
              <li><a href="#/games/pc">PC Games</a></li>
              <li><a href="#/games/ps4">PS4 Games</a></li>
              <li><a href="#/games/xbox">Xbox One Games</a></li>
              <li><a href="#/reviews">Reviews</a></li>
              <a href="#/search" class="search-link">Search</a>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;