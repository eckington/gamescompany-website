import React, { Component } from 'react';

export default class Post extends Component {
  render() {
    return(
      <div className="container">
        <h1>{this.props.post.title}</h1>
        <hr/>
        {this.props.post.content.split('\n\n').map((para, key) => {
          return <p key={key}>{para}</p>
        })}
      </div>
    )
  }
}