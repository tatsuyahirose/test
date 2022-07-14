;(function($, w) {
  $(function(){
    $('.js-form7NextButton').on('click', function() {
      $('#form7-radio').val(
        $('input[name="form7-radio"]:checked').next().text()
      );
      w.sendOopsForm();
    });

    $('.js-form7PrevButton').on('click', function() {
      $('div[id*="form"]').hide();
      $('#form7-radio').val('');
      w.oopsObj.pageList.pop();
      var pageNum = w.oopsObj.pageList.slice(-1)[0];
      $('#form' + pageNum).show();
    });
  });
})(jQuery, window);