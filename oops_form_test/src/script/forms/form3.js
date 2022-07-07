;(function($, w) {
  $(function(){
    $('.js-form3NextButton').on('click', function() {
      $('#form3-radio').val(
        $('input[name="form3-radio"]:checked').next().text()
      );
      $('div[id*="form"]').hide();

      let $form3RadioVal = $('#form3-radio').val();
      switch ($form3RadioVal) {
        case 'シアリスジェネリック（5錠）':
        case 'バイアグラジェネリック（5錠）':
          w.oopsObj.pageList.push('4');
          $('#form4').show();
          break;
        case 'フィナステリド（1ヶ月分28錠）':
        case 'デュタステリド（1ヶ月分30錠）':
          w.oopsObj.pageList.push('5');
          $('#form5').show();
          break;
        case 'フィナステリド+ミノキシジル外用薬セット':
        case 'デュタステリド+ミノキシジル外用薬セット':
          w.oopsObj.pageList.push('6');
          $('#form6').show();
          break;
        case 'ミノキシジル外用薬のみ':
        default:
          w.oopsObj.pageList.push('16');
          $('#form16').show();
          break;
      }
    });

    $('.js-form3PrevButton').on('click', function() {
      $('div[id*="form"]').hide();
      $('#form3-radio').val('');
      w.oopsObj.pageList.pop();
      var pageNum = w.oopsObj.pageList.slice(-1)[0];
      $('#form' + pageNum).show();
    });
  });
})(jQuery, window);