import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GamesListItem extends Component {
  render() {
    return (
      <div className="game">
        <img src={this.props.imageURL} style={{width:'45%'}} />
        <span className="game--name">{this.props.name}</span>
        <span className="game--publisher">By <i>{this.props.publisher}</i></span>
        <span className="game--price">{this.props.price}</span>
        <Link to={'/review/' + this.props.shortName} className="button">See Reviews</Link>
      </div>
    )
  }
}

GamesListItem.defaultProps = {
  shortName: 'untitled',
  name: 'Untitled Game',
  publisher: 'PublisherCompany',
  price: 'Free',
  buttonURL: '/review/untitled'
}

export default GamesListItem