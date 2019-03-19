import React, { Component } from 'react'

export default class GamesListItem extends Component {
  render() {
    return (
      <div className="game">
        <img src={this.props.imageURL} />
        <span className="game--name">{this.props.name}</span>
        <span className="game--publisher">By <i>{this.props.publisher}</i></span>
        <span className="game--price">{this.props.price}</span>
        <a href={this.props.buttonURL} className="button">See Reviews</a>
      </div>
    )
  }
}
