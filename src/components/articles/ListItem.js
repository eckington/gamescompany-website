import React, { Component } from 'react';
import shorten from '../../util/shorten';

export default class ArticleListItem extends Component {
  render() {
    return (
      <div className="articleListing">
        <img src={this.props.article.image}/>
        <div className="articleMeta">
          <h1><a href={'/#/review/' + this.props.article.shortName}>{this.props.article.title}</a></h1>
          <span className="author">By <i>{this.props.article.author}</i></span>
          <p>{shorten(this.props.article.content[0])}</p>
        </div>
      </div>
    );
  }
}