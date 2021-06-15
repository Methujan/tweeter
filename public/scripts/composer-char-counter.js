$(document).ready(function() {
  // --- our code goes here ---
  console.log('herpherpherrp');
  let maxCount = 140;
  const characterCount = $('.text-area');

  $('.text-area').on('keypress', function() {
    const countRemaining = maxCount - $(this).val().length;
    console.log(countRemaining);

    $(this).parent().children('.counter').text(countRemaining);
    console.log($(this))
    console.log($(this).closest('.new-tweet').find('.counter').text(countRemaining))
  })

});