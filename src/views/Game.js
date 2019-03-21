import React, { Component } from 'react';
import games from '../data/games.json';

export default class Game extends Component {
  state = { loaded: false, game: null };

  componentDidMount() {
    const shortName = this.props.location.pathname.substring(6);
    let game = games.find(game => game.shortName === shortName);
    this.setState({ loaded: true, game: game ? game : null });
  }

  render() {
    if(!this.state.loaded) {
      return (
        <div className="container">
          <div className="container" style={{ textAlign: "center" }}>
            <h3>Loading...</h3>
          </div>
        </div> 
      )
    } else {
      if(this.state.game === null) {
        return (
          <div className="container" style={{ textAlign: "center" }}>
            <h3>404.</h3>
            <h4>That's an error.</h4>
          </div>
        )
      } else {
        return (
          <div class="container">
            <h1>{this.state.game.name}</h1>
          </div>
        )
      }
    }
  }
}
