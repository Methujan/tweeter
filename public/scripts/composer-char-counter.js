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

// Sets time of post
  //const timeAgo = $.timeago(14611139590885);
  //$('#post1').text(timeAgo);

  //const timeAgo = $.timeago(Number($('time').attr('datetime')))
//console.log('timeAgo', timeAgo);
  //$('.timeago').text(timeAgo)


  //$('time.timeago').timeago();

  
  
  //const timeAgo = $.timeago(Number($('time').attr('datetime')))
  //$('.timeago').text(timeAgo)


});

