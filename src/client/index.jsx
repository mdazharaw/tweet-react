import React from "react";
import ReactDOM from "react-dom";
import tweets from "tweets";
import anchorme from "anchorme";
import Linkify from 'react-linkify';

//Profile pic
//https://pbs.twimg.com/profile_images/3482019714/1a4eedb7d18f0e534cd696ebaa551c6a_400x400.jpeg
class App extends React.Component {
  
  render() {
    var stringToHTML = function (str) {
      var dom = document.createElement('span');
      dom.innerHTML = str;
      return dom;
    };
    let tweetElements = tweets.tweets.map((element, index) => {
      // return <Tweet tweet={element}>!</Tweet>;
      var textBody = element.text
      // var textAnchor = anchorme(textBody);
      var htmlBody = stringToHTML(textBody)
      return (
        <div class="container border">
          <div class="row ml-5 mr-5 mt-3 mb-2">
            <p>
              {element.user.name} @{element.user.screen_name}
            </p>
          </div>
            <div class="row ml-5 mr-5 mt-3 mb-2">
              {/* <p>{element.text}</p>        */}
              {/* {textAnchor} */}
              {/* {htmlBody} */}
              <Linkify>
              {textBody}
              </Linkify>

            </div>
        </div>
        
      );
    });

    return <div>{tweetElements}</div>;
  }
}

class Tweet extends React.Component {
  render() {
    tweet = this.props.tweet;
    return (
      <div>
        {/* <User user={this.props.tweet.user}/> */}
        <p>{tweet.text}</p>
        {/* <Entities entities = {this.props.tweet.entities}/> */}
      </div>
    );
  }
}
class User extends React.Component {
  render() {
    user = this.props.user;
    return (
      <div>
        <p>
          {user.name} {user.screen_name}
        </p>
      </div>
    );
  }
}
class Entities extends React.Component {
  render() {
    entities = this.props.entities;
    return (
      <div>
        <p>
          {entities.hashtags} {entities.symbols} {entities.user_mentions}
        </p>
        <UrlEntity entities={this.props.entities} />
      </div>
    );
  }
}
class UrlEntity extends React.Component {
  render() {
    urlEntities = this.props.entities.urls;
    let urls = urlEntities.map((url, index) => {
      return (
        <p>
          {url.url} {url.expanded_url} {url.display_url}
        </p>
      );
    });
    return <div>{urls}</div>;
  }
}

const element = document.getElementById("app");

ReactDOM.render(<App />, element); //

console.log("tweet react");
