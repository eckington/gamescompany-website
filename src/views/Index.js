import React, { Component } from 'react';
import reviews from '../data/reviews.json';

export default class Index extends Component {
  componentDidMount() {
    document.title = 'Home - GamesCompany';
  }

  render() {
    const newReviews = reviews.sort((a, b) => b.timestamp - a.timestamp);
    const top5 = [];
    for(let i = 0; i < 5; i++) {
      top5.push(newReviews[i]);
    }
    return (
      <div className="container">
        <h1 className="sm-title"><span>Recent Posts</span></h1>
        {
          newReviews.map((review, index) => {
            return (
              <h1 key={index}>
                <a href={'/#/review/' + review.shortName}>{review.title}</a>
              </h1>
            )
          })
        }
      </div>
    )
  }
}
