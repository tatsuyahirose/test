;(function($, w) {
  $(function(){
    $('.js-form9NextButton').on('click', function() {
      $('#form9-radio').val(
        $('input[name="form9-radio"]:checked').next().text()
      );
      $('div[id*="form"]').hide();
      let $form9RadioVal = $('#form9-radio').val();
      switch ($form9RadioVal) {
        case '他のクリニックで治療を行う予定がある':
          w.oopsObj.pageList.push('12');
          $('#form12').show();
          break;
        case '治療する予定はない':
          w.oopsObj.pageList.push('13');
          $('#form13').show();
          break;
      }
    });

    $('.js-form9PrevButton').on('click', function() {
      $('div[id*="form"]').hide();
      $('#form9-radio').val('');
      w.oopsObj.pageList.pop();
      var pageNum = w.oopsObj.pageList.slice(-1)[0];
      $('#form' + pageNum).show();
    });
  });
})(jQuery, window);