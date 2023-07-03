//pickupの画像モーダル
$(function() {
  $('.c-pickup__image').click(function() {
    $('#c-graydisplay').html($(this).prop('outerHTML'));
    $('#c-graydisplay').fadeIn(200);
  });
  $('#c-graydisplay, #c-graydisplay img').click(function () {
    $('#c-graydisplay').fadeOut(200);
  });
});
