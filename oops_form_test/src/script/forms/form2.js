;(function($, w) {
  $(function(){
    $('.js-form2NextButton').on('click', function() {
      $('#form2-radio').val(
        $('input[name="form2-radio"]:checked').next().text()
      );
      $('div[id*="form"]').hide();
      w.oopsObj.pageList.push('16');
      $('#form16').show();
    });

    $('.js-form2PrevButton').on('click', function() {
      $('#form2-radio').val('');
      $('div[id*="form"]').hide();
      w.oopsObj.pageList.pop();

      var pageNum = w.oopsObj.pageList.slice(-1)[0];
      $('#form' + pageNum).show();
    });
  });
})(jQuery, window);