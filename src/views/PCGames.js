import React, { Component } from 'react';
import GameListItem from '../components/games/ListItem';
import uuidv4 from '../util/uuid';
import * as gamesList from '../data/games.json';

export default class PCGames extends Component {
  constructor(props) {
    super(props);
    this.state = { games: [] };
  }

  componentDidMount() {
    let games = [];
    for(let g in gamesList.default) {
      let game = gamesList.default[g];
      (game.stores.includes('origin')  || game.stores.includes('steam') ||
       game.stores.includes('uplay')   || game.stores.includes('epic')  ||
       game.stores.includes('discord') || game.stores.includes('msstore-pc')) ? games.push(game) : null;
      game.uuid = uuidv4();
    }
    this.setState({ games });
  }

  render() {
    return (
      <div className="container gamesList" id="pc-games">
        <div className="heading">
          <span id="listTitle">PC Games</span>
          <span id="listSubtitle">r/PCMasterRace welcomes you.</span>
        </div>
        <div className="list">
          {this.state.games.map(game => {
            return (<GameListItem key={game.uuid} name={game.name} imageURL={game.imageURL} publisher={game.publisher} buttonURL={game.url} price={game.price} />);
          })}
        </div>
      </div>
    )
  }
}
