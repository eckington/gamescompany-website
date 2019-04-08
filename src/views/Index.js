import React, { Component } from 'react';
import reviews from '../data/reviews.json';
import PostItem from '../components/articles/ListItem';

export default class Index extends Component {
  componentDidMount() {
    document.title = 'Home - GamesCompany';
  }

  render() {
    const newReviews = reviews.sort((a, b) => b.timestamp - a.timestamp);
    const top5 = [];
    for (let i = 0; i < 5; i++) top5.push(newReviews[i]);
    const title = 'Recent Reviews';
    return (
      <div className="container">
        <h1 className="sm-title">
          <span>{title}</span>
        </h1>
        {top5.map((post, index) => {
          return <PostItem key={index} article={post} />;
        })}
      </div>
    );
  }
}
