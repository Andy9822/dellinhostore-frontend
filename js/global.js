(function ($) {
    'use strict';
    /*==================================================================
        [ Daterangepicker ]*/
    try {
        $('.js-datepicker').daterangepicker({
            "singleDatePicker": true,
            "showDropdowns": true,
            "autoUpdateInput": false,
            locale: {
                format: 'DD/MM/YYYY'
            },
        });

        var myCalendar = $('.js-datepicker');
        var isClick = 0;

        $(window).on('click',function(){
            isClick = 0;
        });

        $(myCalendar).on('apply.daterangepicker',function(ev, picker){
            isClick = 0;
            $(this).val(picker.startDate.format('DD/MM/YYYY'));

        });

        $('.js-btn-calendar').on('click',function(e){
            e.stopPropagation();

            if(isClick === 1) isClick = 0;
            else if(isClick === 0) isClick = 1;

            if (isClick === 1) {
                myCalendar.focus();
            }
        });

        $(myCalendar).on('click',function(e){
            e.stopPropagation();
            isClick = 1;
        });

        $('.daterangepicker').on('click',function(e){
            e.stopPropagation();
        });


    } catch(er) {console.log(er);}
    /*[ Select 2 Config ]
        ===========================================================*/

    try {
        var selectSimple = $('.js-select-simple');

        selectSimple.each(function () {
            var that = $(this);
            var selectBox = that.find('select');
            var selectDropdown = that.find('.select-dropdown');
            selectBox.select2({
                dropdownParent: selectDropdown
            });
        });

    } catch (err) {
        console.log(err);
    }

	$('.btn').on('click',function(){

    var name = $('[name=first_name]').val() + ' ' + $('[name=last_name]').val();
    var date = myCalendar.val();
    var email = $('[name=email]').val();
    var senha = $('[name=password]').val();
    var phone = $('[name=phone]').val();
    var cpf = $('[name=cpf]').val();
    console.log(name.length);
		console.log(date.length);
    console.log(email.length);
    console.log(senha.length);
    console.log(phone.length);
    console.log(cpf.length);
    if (name.length == 1 || date.length == 0 || email.length == 1 || senha.length == 1 || phone.length == 1 || cpf.length == 0 ) {
      alert('Preencha todos os campos!');
    }
    else {
      $.post("https://dellinhostore.herokuapp.com/client",
      {
        "name": name,
        "cpf": cpf,
        "dateOfBirth": date,
        "email": email,
        "password": senha,
        "phone": phone,
      }, function(response){
        if (response.success) {
          alert("Conta criada com sucesso!");
          window.location.href = "login.html";
        }
        else {
          alert(response.message)
        }
    });
    }

  });


})(jQuery);
