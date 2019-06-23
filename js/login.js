
(function ($) {
    "use strict";


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    function validateForm(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }
        return check;
    };

    $('.login100-form-btn').on('click',function(){
        if (validateForm()) {
          console.log('sending post...');
          $.post("https://dellinhostore.herokuapp.com/client/login", {"email": input[0].value, "password" : input[1].value}, function(response){
            if (response.success) {
              window.sessionStorage.setItem('logged',true);
              window.sessionStorage.setItem('admin',response.admin);
              window.sessionStorage.setItem('name',response.message.name);
              window.sessionStorage.setItem('id',response.message.id);
              window.location.href = "index.html";
            }
            else {
              console.log('erro login');
            }
        });
        console.log('post sent');
      }
  });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }



  })(jQuery);
