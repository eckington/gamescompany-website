import React, { Component } from 'react';
import reviewsList from '../data/reviews.json';
import postsList from '../data/posts.json';

export default class Post extends Component {
  state = { post: { title: '', content: [] } }

  componentDidMount() {
    const shortName = this.props.location.pathname.substring(this.props.type.length + 2);
    
    const post = this.props.type === 'review' ?
      reviewsList.find(e => e.shortName == shortName) :
      postsList.find(e => e.shortName == shortName);
    
    this.setState({ post });
    
    document.title = `${post.title} - GamesCompany`;
  }

  render() {
    return(
      <div className="container">
        <h1>{this.state.post.title}</h1>
        <hr/>
        {this.state.post.content.map((val, index) => {
          return(<p key={index}>{val}</p>)
        })}
      </div>
    )
  }
}