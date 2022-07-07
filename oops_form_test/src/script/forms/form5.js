;(function($, w) {
  $(function(){
    $('.js-form5NextButton').on('click', function() {
      $('#form5-radio').val(
        $('input[name="form5-radio"]:checked').next().text()
      );
      $('div[id*="form"]').hide();
      let $form5RadioVal = $('#form5-radio').val();
      switch ($form5RadioVal) {
        case '薬の値段が高い':
        case '効果が感じられなかった':
        case '医師の対応に不満があった':
          w.oopsObj.pageList.push('9');
          $('#form9').show();
          break;
        case '間違えて定期配送プランを購入してしまった':
          w.oopsObj.pageList.push('10');
          $('#form10').show();
          break;
        case '薬が余っている':
          w.oopsObj.pageList.push('11');
          $('#form11').show();
          break;
        case 'AGA治療をやめる':
          w.oopsObj.pageList.push('13');
          $('#form13').show();
          break;
      }
    });

    $('.js-form5PrevButton').on('click', function() {
      $('div[id*="form"]').hide();
      $('#form5-radio').val('');
      w.oopsObj.pageList.pop();
      var pageNum = w.oopsObj.pageList.slice(-1)[0];
      $('#form' + pageNum).show();
    });
  });
})(jQuery, window);