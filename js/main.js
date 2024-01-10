$('.reset-btn').click( function() {
  var sliderId = $( this ).data('slider');
  $('#' + sliderId).val(0).change();
});

$('.bar').on('input change', function() {
  $('.bar').each( function() {
    localStorage.setItem( this.id, $(this).val() );
  });
});

$( document ).ready( function() {
  $('.bar').each( function() {
    var sliderId = this.id;
    var sliderVal = localStorage.getItem( sliderId );
    $( '#' + sliderId ).val( sliderVal );
  });
});