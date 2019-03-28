import React, { Component } from 'react'

export default class Index extends Component {
  componentDidMount() {
    document.title = 'Home - GamesCompany';
  }

  render() {
    return (
      <div className="container">
        <h1>Welcome to GamesCompany!</h1>
      </div>
    )
  }
}
