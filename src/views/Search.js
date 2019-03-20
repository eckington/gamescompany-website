import React, { Component } from 'react';
import games from '../data/games.json';

export default class Search extends Component {
  constructor(...args) {
    super(...args);
    this.state = { games: games, reviews: [], posts: [] };
    this.submit.bind(this);
    console.log(this);
  }

  componentDidMount() {
    this.setState({ games: games, loaded: true });
  }

  submit(ev) {
    ev.preventDefault();
    let searchText = document.getElementsByName('search').item(0).value;
    let game = this.state.games.find(g => g.name.toLowerCase() == searchText.toLowerCase());
  }

  render() {
    const loaded = this.state.loaded;
    if(!loaded) {
      return (
        <div className="container">
          <h1>Loading...</h1>
        </div>
      )
    } else {
      return (
        <div className="searchPage">
          <form onSubmit={this.submit}>
            <input name="search" placeholder="Search..." type="text" />
            <input name="submit" value="Search" type="submit" />
          </form>
        </div>
      )
    }
  }
}
