;(function($, w) {
  $(function(){
    $('.js-form8NextButton').on('click', function() {
      $('#form8-radio').val(
        $('input[name="form8-radio"]:checked').next().text()
      );
      w.sendOopsForm();
    });

    $('.js-form8PrevButton').on('click', function() {
      $('div[id*="form"]').hide();
      $('#form8-radio').val('');
      w.oopsObj.pageList.pop();
      var pageNum = w.oopsObj.pageList.slice(-1)[0];
      $('#form' + pageNum).show();
    });
  });
})(jQuery, window);