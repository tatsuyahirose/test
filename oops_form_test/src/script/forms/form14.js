;(function($, w) {
  $(function(){
    $('.js-form14NextButton').on('click', function() {
      $('#form14-radio').val(
        $('input[name="form14-radio"]:checked').next().text()
      );
      $('div[id*="form"]').hide();

      w.oopsObj.pageList.push('15');
      $('#form15').show();
    });

    $('.js-form14PrevButton').on('click', function() {
      $('div[id*="form"]').hide();
      $('#form14-radio').val('');
      w.oopsObj.pageList.pop();
      var pageNum = w.oopsObj.pageList.slice(-1)[0];
      $('#form' + pageNum).show();
    });
  });
})(jQuery, window);