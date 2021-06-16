/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  // Test / driver code (temporary). Eventually will get this from the server.
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
 }

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

const createTweetElement = function(tweet) {
  //let $tweet = /* Your code for creating the tweet element */
  // ...
  const $art = $('<article>')
  $art.addClass('tweet')
  const html = $(
  `<header>
            <h4 class="tweet-name"><i class="fas fa-user-ninja"></i> ${tweet.user.name}</h4>
            <h4 class='tweet-handle'>${tweet.user.handle}</h4>
          </header>
          <p>${tweet.content.text}
          </p>
          <footer>
            <p >
              Posted <time id="post1" class="timeago" > </time>
            </p>
            <p class="icons">
              <button class="icon-btn">
                <i class="fas fa-flag"></i>
              </button>
              <button class="icon-btn">
                <i class="fas fa-retweet"></i>
              </button>
              <button class="icon-btn">
                <i class="fas fa-heart"></i>
              </button>
            </p>
          </footer>
  `);
  $art.append(html)
  return $art;
}
const $art = createTweetElement(tweetData);

const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  tweets.forEach(tweet => {
    $('#tweet-container').append(createTweetElement(tweet))
  })

}

//renderTweets(data)

// Test / driver code (temporary)
console.log('tweet',$art); // to see what it looks like
$('#tweets-container').append($art); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
})