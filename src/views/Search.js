import React, { Component } from 'react';
import GamesListItem from '../components/games/ListItem';
import games from '../data/games.json';
import fuzzy, { parseSearch } from '../util/search';

export default class Search extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      loaded: false,
      found: [],
      games: games,
      reviews: [],
      posts: [],
      searchTerm: parseSearch(this.props.location.search).q ? parseSearch(this.props.location.search).q : ''
    };
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    let searchText = parseSearch(this.props.location.search)['q'];
    let gamesFound = searchText ? fuzzy(
      games,
      ["name", "publisher", "price", "stores"],
      searchText
    ) : [];
    this.setState({ found: gamesFound });
    this.setState({ games: games, loaded: true });
  }

  submit(ev) {
    ev.preventDefault();
    let searchText = document.getElementsByName("search").item(0).value;
    window.location.replace(`/#/search?q=${searchText}`);
    window.location.reload();
  }

  render() {
    const loaded = this.state.loaded;
    if (!loaded) {
      return (
        <div className="container">
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div className="searchPage container gamesList">
          <form onSubmit={this.submit}>
            <input
              name="search"
              placeholder="Search..."
              type="text"
              defaultValue={this.state.searchTerm}
            />
            <input name="submit" value="Search" type="submit" />
          </form>
          <div className="list">
            {this.state.found.map((game, key) => {
              return (
                <GamesListItem
                  key={key}
                  name={game.name}
                  imageURL={game.imageURL}
                  publisher={game.publisher}
                  shortName={game.shortName}
                  price={game.price}
                />
              );
            })}
          </div>
        </div>
      );
    }
  }
}
