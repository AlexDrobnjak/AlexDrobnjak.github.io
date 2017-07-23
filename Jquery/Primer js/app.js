var main = function() {
  $('form').submit(function() {
    event.preventDefault();
    var firstName = $('#first').val();
    if(firstName.length === 0) {
      $('.first-name-error').text('Please enter your first name').show();
    } else{
     $('.first-name-error').hide();
    };
    var lastName = $('#last').val();
    if(lastName.length === 0) {
      $('.last-name-error').text('Please enter your last name').show();
    } else{
      $('.last-name-error').hide();
    };
    var eMail = $('#email').val();
    if(eMail.length === 0) {
      $('.email-error').text('Please enter your email adress').show();
    } else if (eMail === "drobnjak.aleksa@gmail.com"){
      $('.email-error').text('This email is already taken').show();
    } else {
      $('.email-error').hide();
    }
    var password = $('#password').val();
     if(password.length === 0) {
       $('.password-error').text('Please enter password').show();
     } else if(password.length < 8) {
      $('.password-error').text('Short passwords are easy to guess.Try one with at least 8 characters.').show();
    } else{
      $('.password-error').hide();
    };
  });
};

$(document).ready(main);
