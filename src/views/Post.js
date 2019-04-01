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

    if(!post) return this.setState({ is404: true });
    
    this.setState({ post });
    
    document.title = `${post.title} - GamesCompany`;

    /**
     *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
     *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
     var disqus_config = function () {
      this.page.url = `https://r085.haydennyyy.com/#/${this.props.location.pathname}`;  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = this.props.location.pathname; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://imedia-r085.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
  }

  componentWillUnmount() {
    document.title = `GamesCompany`;
    document.body.style = ``;
  }

  render() {
    if(!this.state.is404) {
      document.body.style = `background:url(${this.state.post.image});background-attachment:fixed;background-position:center;background-repeat:no-repeat;background-size:cover`;
      const title = this.state.post.title.split(' ');
      const lastWord = title.pop();
      const titleToDisplay = title.join(' ');
      return(
        <div className="post container">
          <div className="content">
            <h1>{titleToDisplay} <span className="lastword">{lastWord}</span></h1>
            <p className="author">By {this.state.post.author}</p>
            {this.state.post.content.map((val, index) => {
              return(<p key={index}>{val}</p>)
            })}
            <div id="disqus_thread"></div>
          </div>
        </div>
      )
    } else {
      const FourOhFour = ({ location }) => (
        <div className="container" style={{ textAlign: "center" }}>
          <h3>404.</h3>
          <h4>That's an error.</h4>
        </div>
      );
      return FourOhFour({ location: this.props.location });
    }
  }
}