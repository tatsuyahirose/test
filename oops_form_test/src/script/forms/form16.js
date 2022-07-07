;(function($, w) {
  $(function(){
    $('.js-form16NextButton').on('click', function() {
      $('#formrunForm').submit();
      $('div[id*="form"]').hide();
      w.oopsObj.pageList.push('17');
      $('#form17').show();
    });

    $('.js-form16PrevButton').on('click', function() {
      $('div[id*="form"]').hide();
      w.oopsObj.pageList.pop();

      var pageNum = w.oopsObj.pageList.slice(-1)[0];
      $('#form' + pageNum).show();
    });
  });
})(jQuery, window);