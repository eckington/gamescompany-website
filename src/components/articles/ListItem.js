import React, { Component } from 'react';

export default class ArticleListItem extends Component {
  render() {
    return (
      <div className="articleListing">
        <h1>{this.props.article.title}</h1>
        <span className="author">By <i>{this.props.article.author}</i></span>
        <p>{this.props.article.content[0]}</p>
      </div>
    );
  }
}