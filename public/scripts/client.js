/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  const createTweetElement = function (tweet) {
    const $tweet = $('<article>');
    $tweet.addClass('tweet');
    const html = $(
      `<header>
            <h4 class="tweet-name"><i class="fas fa-user-ninja"></i> ${tweet.user.name}</h4>
            <h4 class='tweet-handle'>${tweet.user.handle}</h4>
          </header>
          <p>${tweet.content.text}
          </p>
          <footer>
            <p >
              Posted <time id="post1" class="timeago">${$.timeago(tweet.created_at)} </time>
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
    $tweet.append(html);
    return $tweet;
  }


  const renderTweets = function (tweets) {
    tweets.forEach(tweet => {
      $('#tweets-container').append(createTweetElement(tweet));
    })

  }


// Post to server
  $(".form").submit(function(event) {
    event.preventDefault();
    //console.log('this.serial.length',$(this).serialize().length)
    console.log('textarea:',$(".text-area").val().length)

    if (($(this).serialize().length - 5) > 140) {
      alert('Characters have exceeded the limit.');

    } else if (($(".text-area").val().length) === 0) {
      alert('Please enter a tweet');

    } else {

    $.ajax({ 
      url:"/tweets/",
      method: 'POST',
      data: $(this).serialize()
    })
    
    console.log($(this).serialize());
  }

  })


  const loadTweets = function() {
    const $button = $('.tweet-button');
    $button.on('click', function() {
      console.log('Button clicked, performing ajax call...');
      $.ajax({
        url: "/tweets",
        method: "GET",
      })
      .then(function(tweets){
        renderTweets(tweets);

      })
    })
  }
  loadTweets();

})