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

function detectMob() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

function detectmob() {
   if(screen.width <= 800 && screen.height <= 600) {
     return true;
   } else {
     return false;
   }
}

if (detectmob() || detectMob()) {
  window.location.pathname = '/mobile/index.html';
}

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
    $('p').html('e-mail:  <a href="mailto:theogat@protonmail.com">theogat@protonmail.com</a><br /><br />XMPP (Jabber):  <a href="xmpp:theogat@jabber.to">theogat@jabber.cat</a><br /><br />diaspora*:  theogat@joindiaspora.com');
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
