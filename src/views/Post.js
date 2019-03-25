import React, { Component } from 'react';
import reviewsList from '../data/reviews.json';
import postsList from '../data/posts.json';

export default class Post extends Component {
  state = { post: {} }

  componentDidMount() {
    const shortName = this.props.location.pathname.substring(6);
    const post = this.props.type === 'review' ?
      reviewsList.find(e => e.shortName == shortName) :
      postsList.find(e => e.shortName == shortName);
    this.setState({ post });
  }

  render() {
    return(
      <div className="container">
        <h1>{this.state.post.title}</h1>
        <hr/>
        {this.state.post.content}
      </div>
    )
  }
}