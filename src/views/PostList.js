import React, { Component } from 'react';
import PostItem from '../components/articles/ListItem';
import reviewsList from '../data/reviews.json';

export default class PostList extends Component {
  state = { posts: this.props.type === 'reviews' ? reviewsList : null };

  render() {
    const { type } = this.props;
    const title = type === 'reviews' ? 'Reviews' : 'Articles';
    return (
      <div className="container">
        <h1 className="sm-title">
          <span>{title}</span>
        </h1>
        {this.state.posts.map((post, index) => {
          return <PostItem key={index} article={post} />;
        })}
      </div>
    );
  }
}
