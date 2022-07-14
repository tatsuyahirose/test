;(function($, w) {
  w.oopsObj = w.oopsObj || {};

  // 表示したページリスト
  w.oopsObj.pageList = ['1'];

  // form送信処理
  w.sendOopsForm = function() {
    $('#formrunForm').submit();
    $('div[id*="form"]').hide();
    w.oopsObj.pageList.push('17');
    $('#form17').show();
  };
})(jQuery, window);