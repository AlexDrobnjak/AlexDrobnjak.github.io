var main = function () {
 $('.cart, .account, .help').click(function() { 
   if ($(this).is('.cart')) {
 $(this).children('.dropdown-menu').toggle();
 $('.account, .help').children('.dropdown-menu').hide();   
}  else if ($(this).is('.account')) { 
  $(this).children('.dropdown-menu').toggle();
  $('.cart, .help').children('.dropdown-menu').hide();
}  else if ($(this).is('.help')) {
  $(this).children('.dropdown-menu').toggle();
   $('.cart, .account').children('.dropdown-menu').hide();    
}                                                       
 });
};
$(document).ready(main);
