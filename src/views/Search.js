import React, { Component } from 'react'

export default class Search extends Component {
  render() {
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
