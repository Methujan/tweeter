$(document).ready(function() {
  // --- our code goes here ---
  let maxCount = 140;

  $('.text-area').on('keypress', function() {
    const countRemaining = maxCount - $(this).val().length;
 
    console.log($(this).closest('.new-tweet').find('.counter').text(countRemaining));
    if (countRemaining < 0) {
      $(this).closest('.new-tweet').find('.counter').addClass('tooManyWords')
    }
  })

  const timeAgo = $.timeago('2021-06-15'); 
  $('#post1').text(timeAgo);
});