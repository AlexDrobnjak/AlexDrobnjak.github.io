var main = function() {
  $('img').click(function(){
     $('.dropdown-menu').toggle();
  });
  $('form').submit(function(){

   var email = $('#email').val();
   var password = $('#password').val();
    if(email === ""){
      $('.email-error').text('Please enter your email.').show();
    }

    if(password === ""){
      $('.password-error').text('Please enter your password.').show();

    }
  return false;
  });
                   };
$(document).ready(main);