import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import taglines from '../data/headerTaglines.json';
import Logo from './logo.png';

class Navbar extends Component {
  constructor(...params) {
    super(...params);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount() {
    let logo = new Image();
    logo.src = Logo;

    document.getElementById('header--logo').appendChild(logo);
  }

  toggleMenu(ev) {
    document.getElementById('links-list').classList.add('unhide');
  }

  render() {
    const tagline = taglines[~~(Math.random() * taglines.length)];
    return (
      <header>
        <div className="container">
          <div className="topRow">
            <Link to="/" id="header--logo" />
            <p className="tagline">{tagline}</p>
          </div>
          <hr />
          <div className="links">
            {/* <a className="menu-icon" onClick={this.toggleMenu}>Menu</a> */}
            <ul className="links-list" id="links-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/games/pc">PC Games</Link>
              </li>
              <li>
                <Link to="/games/ps4">PS4 Games</Link>
              </li>
              <li>
                <Link to="/games/xbox">Xbox One Games</Link>
              </li>
              <li>
                <Link to="/reviews">Reviews</Link>
              </li>
              <Link to="/search" className="search-link">
                Search
              </Link>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
