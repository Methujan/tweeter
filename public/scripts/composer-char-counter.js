$(document).ready(function() {
  // --- our code goes here ---
  console.log('herpherpherrp')
  const characterCount = $('.text-area');

  $('.text-area').on('keypress', function() {
    console.log(this);
    console.log($(this).val().length);
  })

});