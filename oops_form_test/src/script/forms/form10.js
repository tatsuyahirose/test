;(function($, w) {
  $(function(){
    $('.js-form10NextButton').on('click', function() {
      $('#form10-radio').val(
        $('input[name="form10-radio"]:checked').next().text()
      );
      $('div[id*="form"]').hide();
      w.oopsObj.pageList.push('16');
      $('#form16').show();
    });

    $('.js-form10PrevButton').on('click', function() {
      $('div[id*="form"]').hide();
      $('#form10-radio').val('');
      w.oopsObj.pageList.pop();
      var pageNum = w.oopsObj.pageList.slice(-1)[0];
      $('#form' + pageNum).show();
    });
  });
})(jQuery, window);