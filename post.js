$(document).ready(function() {
  $('#post-container').hide();
  $('#submit').one('click', function() {
    $('#post-container').addClass("posted");
  });

  $('#submit').click(function() {
    var post = $('#text-box').val();
    var wrap = '<fieldset><div class="post"><div class="pcontent">' + post + '<br/><div class="right"><sub id="date">June 4, 2015 </sub><sub id="time">1:33 PM</sub></div></div></div></fieldset>';
    $('#post-container').show();
    $('#post-container').prepend(wrap);
    $('text-box').val("");
  });
 
  $('#submit').click(function() {
    var link = $('#hyper-box').val();
    var attach = '<fieldset><div class="link"><div class="lcontent"><iframe width="100%" height="300" src="' + link + '" frameborder="0" allowfullscreen></iframe><br/><div class="right"><sub id="date">June 4, 2015 </sub><sub id="time">1:33 PM</sub></div></div></div></fieldset>';
    $('#post-container').show();
    $('#post-container').prepend(attach);
    $('hyper-box').val("");
  });
});
