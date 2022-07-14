;(function($, w) {
  $(function(){
    $('.js-form6NextButton').on('click', function() {
      $('#form6-radio').val(
        $('input[name="form6-radio"]:checked').next().text()
      );
      $('div[id*="form"]').hide();
      let $form6RadioVal = $('#form6-radio').val();
      switch ($form6RadioVal) {
        case 'ミノキシジル外用薬だけ「解約」する':
        case 'ミノキシジル外用薬だけ「休止」する':
          w.sendOopsForm();
          break;
        case 'フィナステリド+ミノキシジル外用薬セットの解約に進む':
        case 'デュタステリド+ミノキシジル外用薬セットの解約に進む':
          w.oopsObj.pageList.push('5');
          $('#form5').show();
          break;
      }
    });

    $('.js-form6PrevButton').on('click', function() {
      $('div[id*="form"]').hide();
      $('#form6-radio').val('');
      w.oopsObj.pageList.pop();
      var pageNum = w.oopsObj.pageList.slice(-1)[0];
      $('#form' + pageNum).show();
    });
  });
})(jQuery, window);