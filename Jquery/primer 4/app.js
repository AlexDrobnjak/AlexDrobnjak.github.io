var removeClass = function () {
  $(".thumbnail" ).removeClass('selected');
};

var main = function() {
  $('.nav li').click(function() {
    var category = $(this).attr('class');
   if (category === "nav-consumer") {
    removeClass();
    $(".consumer").addClass('selected');
   } else if (category === "nav-mobile") {
    removeClass();
    $(".mobile").addClass('selected');                  } else if ( category === "nav-commerce") {
    removeClass();
    $(".commerce").addClass('selected');                  }
    else if ( category === "nav-enterprise") {
   removeClass();
    $(".enterprise").addClass('selected');                  } else {
     removeClass();
    }


  });
};

$(document).ready(main);
