import React, { Component } from 'react';
import ReviewListItem from '../components/articles/ListItem';
import reviewsList from '../data/reviews.json';

export default class Reviews extends Component {
  state = { reviews: reviewsList }

  render() {
    return (
      <div className="container">
        <h1>Reviews</h1>
        <hr/>
        {this.state.reviews.map((review, index) => {
          return <ReviewListItem key={index} article={review} />
        })}
      </div>
    )
  }
}
