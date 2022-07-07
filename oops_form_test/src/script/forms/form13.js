;(function($, w) {
  $(function(){
    $('.js-form13NextButton').on('click', function() {
      $('#form13-radio').val(
        $('input[name="form13-radio"]:checked').next().text()
      );
      $('div[id*="form"]').hide();

      w.oopsObj.pageList.push('16');
      $('#form16').show();
    });

    $('.js-form13PrevButton').on('click', function() {
      $('div[id*="form"]').hide();
      $('#form13-radio').val('');
      w.oopsObj.pageList.pop();
      var pageNum = w.oopsObj.pageList.slice(-1)[0];
      $('#form' + pageNum).show();
    });
  });
})(jQuery, window);