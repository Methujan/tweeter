$(document).ready(function() {
  // --- our code goes here ---
  console.log('herpherpherrp');
  let maxCount = 14;
  const characterCount = $('.text-area');

  $('.text-area').on('keypress', function() {
    const countRemaining = maxCount - $(this).val().length;
 
    console.log($(this).closest('.new-tweet').find('.counter').text(countRemaining));
    if (countRemaining < 0) {
      $(this).closest('.new-tweet').find('.counter').addClass('tooManyWords')
    }
  })

});