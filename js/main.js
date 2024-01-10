$('.reset-btn').click(function() {
  var sliderId = $(this).data('slider');
  $('#' + sliderId).val(0).change();
});