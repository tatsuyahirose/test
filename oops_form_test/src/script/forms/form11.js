;(function($, w) {
  $(function(){
    $('.js-form11NextButton').on('click', function() {
      $('#form11-radio').val(
        $('input[name="form11-radio"]:checked').next().text()
      );
      $('div[id*="form"]').hide();
      w.oopsObj.pageList.push('13');
      $('#form13').show();
    });

    $('.js-form11PrevButton').on('click', function() {
      $('div[id*="form"]').hide();
      $('#form11-radio').val('');
      w.oopsObj.pageList.pop();
      var pageNum = w.oopsObj.pageList.slice(-1)[0];
      $('#form' + pageNum).show();
    });
  });
})(jQuery, window);