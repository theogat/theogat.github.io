/*    
     @licstart  The following is the entire license notice for the 
                JavaScript code in this page.
	Copyright (C) 2017 Theodoros Gatsios
	The JavaScript code in this page is free software: you can redistribute it and/or
	modify it under the terms of the GNU General Public License
	as published by the Free Software Foundation; either version 2
	of the License, or (at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.


     @licend  The above is the entire license notice
        for the JavaScript code in this page.
*/
$(document).ready(function(){
  var language = 'us';
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
    $('p').show();
    $('h5').hide();
    $('img').hide();
    $('p').css('margin-left', '0px');
    if (language == 'us'){
      $('h3').html('Contact Information')
    }
    else if (language == 'el'){
      $('h3').html('Στοιχεία Επικοινωνίας');
    }
    $('p').html('e-mail:  <a href="mailto:theogat-27@protonmail.com">theogat-27@protonmail.com</a><br /><br />XMPP (Jabber):  <a href="xmpp:theogat@jabber.to">theogat@jabber.cat</a><br /><br />diaspora*:  theogat@joindiaspora.com');
  //  $('p').css('padding', '100px');
  });

  $('#aboutMe').click(function(){
    $('.main').fadeIn('slow');
    $('h5').hide();
    $('img').hide();
    $('p').show();
    $('p').css('margin-left', '0px');
    if (language == 'us') {
      $('h3').html('About Me');
      $('p').html('<a href="./Geospatial_CV_en.html">Geospatial C.V.</a><br /><br /><a href="./game/index.html">Arcade Game C.V.</a>');
    }
    else if (language == 'el') {
      $('h3').html('Σχετικά με Εμένα');
      $('p').html('<a href="./Geospatial_CV_el.html">Γεωχωρικό Βιογραφικό Σημείωμα.</a><br /><br /><a href="./game/index.html">Βιογραφικό Σημείωμα σε μορφή ηλ. παιχνιδιού.</a>');
    }
  });

  $('#software').click(function(){
    $('.main').fadeIn('slow');
    $('h5').show();
    $('p').show();
    $('img').show();    
    $('img').css({'width':'', 'position':'', 'top':'', 'left':'', 'right':'', 'bottom':'', 'float':'left', 'padding':'10px', 'margin-left':'20px'});
    if (language == 'us') {
      $('h3').html('Software');
      $('h5').html('Birthday Elephant');
      $('p').css('font-size', '');
      $('p').html('A simple program that integrates with an sqlite3 database and reminds you, your friends\' birthdays. The program comes with an sqlite3 editor (Birthday Editor).<br>License: <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache License Version 2.0</a><br><a href="https://github.com/theogat/theogat.github.io/raw/master/repo/birthdayElephant/birthday-elephant-1.0.1.deb"><font color="red">GNU/Linux (deb)</font></a>&emsp;<a href="https://github.com/theogat/Birthday-Elephant"><font color="red">Source Code</font></a>')
    }
    else if (language == 'el') {
      $('h3').html('Προγράμματα');
      $('h5').html('Birthday Elephant');
      $('p').css('font-size', '15px');
      $('p').html('Ένα απλό πρόγραμμα, που σας θυμίζει τα γενέθλια των φίλων σας, με την βοήθεια μιας βάσης δεδομένων SQLite3.  Το πρόγραμμα συνοδεύεται κι από έναν επεξεργαστή της SQLite3 βάσης (Birthday Editor).<br>Άδεια: <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache License Version 2.0</a><br><a href="https://github.com/theogat/theogat.github.io/raw/master/repo/birthdayElephant/birthday-elephant-1.0.1.deb"><font color="red">GNU/Linux (deb)</font></a>&emsp;<a href="https://github.com/theogat/Birthday-Elephant"><font color="red">Πηγαίος Κώδικας</font></a>')      
    }
    $('img').html('<img src="./pictures/software/BEl.png" />');
    $('p').css('margin-left', '50px');
    $('p').css('margin', '10px');
  });

  $('#blog').click(function(){
    $('.main').fadeIn('slow');
    if (language == 'us') {
      $('h3').html('Under Construction');
    }
    else if (language == 'el'){
      $('h3').html('Υπό Κατασκευή');
    }
    $('h5').hide();
    $('p').hide();
    $('img').show();
    $('img').html('<img src="./pictures/under_construction.png" />');
    $('img').css({'width':'50%', 'position':'absolute', 'top':'60px', 'left':'150px', 'right':'150px', 'bottom':'75px'});
  });

  $('#home').click(function(){
    $('.main').fadeOut('slow');
  });

  $('#el_flag').click(function(){
    language = 'el';
    document.getElementById('name').innerHTML = 'ΘΕΟΔΩΡΟΣ <span class="logo_bold">ΓΑΤΣΙΟΣ</span>';
    $('#name').css('font-size', '22px');
    document.getElementById('prof').innerHTML = 'Γεωλόγος';
    document.getElementById('home').innerHTML = 'Αρχική Σελίδα';
    document.getElementById('aboutMe').innerHTML = 'Σχετικά με Εμένα';
    document.getElementById('software').innerHTML = 'Προγράμματα';
    document.getElementById('contact').innerHTML = 'Επικοινωνία';
    $('.main').fadeOut('fast');
    $('.nav_item').css('font-weight', 'normal');
  });
  $('#us_flag').click(function(){
    language = 'us';
    document.getElementById('name').innerHTML = 'THEO <span class="logo_bold">GATSIOS</span>';
    $('#name').css('font-size', '');
    document.getElementById('prof').innerHTML = 'Geologist';
    document.getElementById('home').innerHTML = 'Home';
    document.getElementById('aboutMe').innerHTML = 'About Me';
    document.getElementById('software').innerHTML = 'Software';
    document.getElementById('contact').innerHTML = 'Contact';
    $('.main').fadeOut('fast');
    $('.nav_item').css('font-weight', 'normal');
  });
});
