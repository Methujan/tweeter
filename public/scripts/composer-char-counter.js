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

  //$('time.timeago').timeago();

  //const timeAgo = $.timeago(14611139590885);
  //$('#post1').text(timeAgo);

  
  const timeAgo = $.timeago(Number($('time').attr('datetime')))
  $('#post1').text(timeAgo)
});

//const timeAAgo = $('time').attr('datetime')
//  $('#post1').text(timeAAgo)

/*
const timeAAgo = $('time').attr('datetime')
timeAAAgo = Number(timeAAgo)
const timeAgo = $.timeago(timeAAAgo)
$('#post1').text(timeAgo) */