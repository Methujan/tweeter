$(document).ready(function() {
  let maxCount = 140;

  $('.text-area').on('keypress', function() {
    const countRemaining = maxCount - $(this).val().length;
 
    console.log($(this).closest('.new-tweet').find('.counter').text(countRemaining));
    if (countRemaining < 0) {
      $(this).closest('.new-tweet').find('.counter').addClass('tooManyWords')
    }
  })


});

