$(function() {

  // page inscriptions
  $("#niveau").change(function () {
    var selected_option = $('#niveau').val();

    if (selected_option == 'Bronze') {
      $('#argent').hide();
      $('#bronze').show();
    }
    if (selected_option != 'Bronze') {
      $('#bronze').hide();
      $('#argent').show();
    }
  })

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
