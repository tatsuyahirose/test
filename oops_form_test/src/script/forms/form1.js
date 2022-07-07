;(function($, w) {
  $(function(){

    $('.js-form1NextButton').on('click', function(e){
      var $form1FullName = $('input[name="form1-fullName"]');
      var $form1MailAddress = $('input[name="form1-mailAddress"]');
      var $form1PhoneNumber = $('input[name="form1-phoneNumber"]');
      var $form1Radio = $('input[name="form1-radio"]:checked');

      var errorFlag = false;

      $('#form1-fullName').val($form1FullName.val());
      $('#form1-mailAddress').val($form1MailAddress.val());
      $('#form1-phoneNumber').val($form1PhoneNumber.val());
      $('#form1-radio').val($form1Radio.next().text());

      //名前チェック
      if($('#form1-fullName').val() === '' ){
        errorFlag = true;
        $('.js-fullName-error').show();
      } else {
        $('.js-fullName-error').hide();
      }

      // メールアドレスチェック
      if($('#form1-mailAddress').val() === '' ){
        errorFlag = true;
        $('.js-mailAddress-error').show();
      } else {
        $('.js-mailAddress-error').hide();
      }

      // 電話番号チェック
      if($('#form1-phoneNumber').val() === '' ){
        errorFlag = true;
        $('.js-phoneNumber-error').show();
      } else {
        $('.js-phoneNumber-error').hide();
      }

      //最終エラー結果
      if(errorFlag){
        return;
      }

      let $form1RadioVal = $('#form1-radio').val();

      $('div[id*="form"]').hide();

      if ($form1RadioVal === '次回配送分をスキップ') {
        w.oopsObj.pageList.push('2');
        $('#form2').show();
      } else {
        w.oopsObj.pageList.push('3');
        $('#form3').show();
      }
    });
  });
})(jQuery, window);