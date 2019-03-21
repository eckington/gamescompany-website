import React, { Component } from 'react';
import GamesListItem from '../components/games/ListItem';
import uuidv4 from '../util/uuid';
import * as gamesList from '../data/games.json';

export default class PS4Games extends Component {
  constructor(props) {
    super(props);
    this.state = { games: [] };
  }

  componentDidMount() {
    let games = [];
    for(let g in gamesList.default) {
      let game = gamesList.default[g];
      (game.stores.includes('xbox')) ? games.push(game) : null;
      game.uuid = uuidv4();
    }
    this.setState({ games });
  }

  render() {
    return (
      <div className="container gamesList" id="xbox-games">
        <div className="heading">
          <span id="listTitle">Xbox One Games</span>
          <span id="listSubtitle">Jump in.</span>
        </div>
        <div className="list">
          {this.state.games.map((game, key) => {
            return (<GamesListItem key={key} name={game.name} imageURL={game.imageURL} publisher={game.publisher} shortName={game.shortName} price={game.price} />);
          })}
        </div>
      </div>
    )
  }
}
