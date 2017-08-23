$(document).ready(function(){
  $('body').hide();
  $('.main').hide();
  $('body').fadeIn('slow');
  $('.nav_item').mouseenter(function(){
    $(this).css('font-size', '20px');
  });
  $('.nav_item').mouseleave(function(){
    $(this).css('font-size', '14px');
  });
  $('.nav_item').click(function(){
    $(this).siblings().css('font-weight', 'normal');
    $(this).css('font-weight', 'bold');
    $(this).siblings().css('font-size', '14px');
    $(this).css('font-size', '20px');
  });
  $('#contact').click(function(){
    $('.main').fadeIn('slow');
    $('h5').hide();
    $('img').hide();
    $('p').css('margin-left', '0px');
    $('h3').html('Contact Information');
    $('p').html('e-mail:  <a href="mailto:theogat-27@protonmail.com">theogat-27@protonmail.com</a><br /><br />XMPP (Jabber):  <a href="xmpp:theogat@jabber.to">theogat@jabber.to</a><br /><br />diaspora*:  theogat@joindiaspora.com');
  //  $('p').css('padding', '100px');
  });
  $('#aboutMe').click(function(){
    $('.main').fadeIn('slow');
    $('h5').hide();
    $('img').hide();
    $('p').css('margin-left', '0px');
    $('h3').html('About Me');
    $('p').html('Geospatial C.V.')
  });;
$('#software').click(function(){
    $('.main').fadeIn('slow');
    $('h3').html('Software');
    $('h5').show();
    $('h5').html('Birthday Elephant')
    $('img').show();
    $('img').html('<img src="./pictures/software/BEl.png" />');
    $('p').html('A simple program that integrates with an sqlite3 database and reminds you, your friends\' birthdays. The program comes with an sqlite3 editor (Birthday Editor).')
    $('p').css('margin-left', '50px');
  });;
  $('#home').click(function(){
    $('.main').fadeOut('slow');
  });
});
