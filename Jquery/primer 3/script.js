var main = function() {
  $('.day').click(function () {
     $(this).next().toggle();
     $(this).children().find( "span" ).toggleClass('glyphicon-minus');
  });
};

$(document).ready(main);
