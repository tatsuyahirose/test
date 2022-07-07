;(function($, w) {
  $(function(){
    $('.js-form15NextButton').on('click', function() {
      $('#form15-radio').val(
        $('input[name="form15-radio"]:checked').next().text()
      );
      $('div[id*="form"]').hide();

      w.oopsObj.pageList.push('16');
      $('#form16').show();
    });

    $('.js-form15PrevButton').on('click', function() {
      $('div[id*="form"]').hide();
      $('#form15-radio').val('');
      w.oopsObj.pageList.pop();
      var pageNum = w.oopsObj.pageList.slice(-1)[0];
      $('#form' + pageNum).show();
    });
  });
})(jQuery, window);