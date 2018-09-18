$(function() {


  $(".nav-button").click(function() {
    $(".mobile-nav").toggle();
  });

  $('div.slider').click(function () {
    $('.hidden').slideUp();
      if($(this).children('.hidden').is(':hidden')) {
        $(this).children('.hidden').slideDown();
        return true;
      }

      if($(this).children('.hidden').is(':visible')) {
        $(this).children('.hidden').slideUp();
        return false;
      }

  });

});
