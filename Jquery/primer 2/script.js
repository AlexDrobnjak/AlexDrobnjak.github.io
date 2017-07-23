var main = function() {
  $('form').submit(function() {
    event.preventDefault();
    var comment = $('#comment').val();
    if(comment !== "") {
      var html = $('<li>').text(comment);
      $(html).prependTo('.comments');
      $('#comment').val("");
    } else {
    return false;
  }
  });
};

$(document).ready(main);
