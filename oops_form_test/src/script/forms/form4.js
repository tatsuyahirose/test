;(function($, w) {
  $(function(){
    $('.js-form4NextButton').on('click', function() {
      $('#form4-radio').val(
        $('input[name="form4-radio"]:checked').next().text()
      );
      $('div[id*="form"]').hide();
      let $form4RadioVal = $('#form4-radio').val();
      switch ($form4RadioVal) {
        case '他のクリニックで治療を行う予定':
          w.oopsObj.pageList.push('7');
          $('#form7').show();
          break;
        case '薬が余っている':
          w.oopsObj.pageList.push('8');
          $('#form8').show();
          break;
        case '薬の値段が高い':
        case 'ED治療をやめる':
        case '効果が感じられなかった':
        case 'お薬が身体にあわなかった':
        case '医師の対応に不満があった':
        case '間違えて定期配送プランを購入した':
        default:
          w.sendOopsForm();
          break;
      }
    });

    $('.js-form4PrevButton').on('click', function() {
      $('div[id*="form"]').hide();
      $('#form4-radio').val('');
      w.oopsObj.pageList.pop();
      var pageNum = w.oopsObj.pageList.slice(-1)[0];
      $('#form' + pageNum).show();
    });
  });
})(jQuery, window);