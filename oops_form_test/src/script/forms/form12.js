;(function($, w) {
  $(function(){
    $('.js-form12NextButton').on('click', function() {
      var $form12ClinicName = $('input[name="form12-clinicName"]');
      $('#form12-clinicName').val($form12ClinicName.val());

      $('#form12-radio').val(
        $('input[name="form12-radio"]:checked').next().text()
      );
      $('div[id*="form"]').hide();

      let $form12RadioVal = $('#form12-radio').val();
      switch ($form12RadioVal) {
        case 'はい、海外製の医薬品です':
        case '分かりません':
          w.oopsObj.pageList.push('14');
          $('#form14').show();
          break;
        case 'いいえ、国内正規品です':
          w.oopsObj.pageList.push('15');
          $('#form15').show();
          break;
      }
    });

    $('.js-form12PrevButton').on('click', function() {
      $('div[id*="form"]').hide();
      $('#form12-radio').val('');
      w.oopsObj.pageList.pop();
      var pageNum = w.oopsObj.pageList.slice(-1)[0];
      $('#form' + pageNum).show();
    });
  });
})(jQuery, window);