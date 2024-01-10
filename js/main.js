function setColor( obj ) {
  var val = $( obj ).val();
  var min = $( obj ).attr('min');
  var max = $( obj ).attr('max');
  var percent = ( val - min ) / ( max - min );
  var color = 'rgb(' + Math.round( 255 * ( 1 - percent ) ) + ',' + Math.round( 255 * percent ) + ', 0 )';
  $( obj ).css('background-color', 'rgba( 0, 0, 0, 0 )' );

  var styleSheet = '#'+$( obj ).attr('id') + '::-webkit-slider-thumb { background-color: ' + color + '; } ' +
                   '#'+$( obj ).attr('id') + '::-moz-range-thumb { background-color: ' + color + '; }';

  $('head').append('<style>' + styleSheet + '</style>');
}

$('.reset-btn').click( function() {
  var sliderId = $( this ).data('slider');
  $('#' + sliderId).val(0).change();
});

$('.reset-all-btn').click( function() {
  $('.bar').each( function() {
    var sliderId = this.id;
    $('#' + sliderId ).val(0).change();
  });
});

$('.bar').on('input change', function() {
  setColor( this );

  $('.bar').each( function() {
    localStorage.setItem( this.id, $( this ).val() );
  });
});

$( document ).ready( function() {
  $('.bar').each( function() {
    var sliderId = this.id;
    var sliderVal = localStorage.getItem( sliderId );
    $('#' + sliderId ).val( sliderVal );

    setColor( this );
  });
});