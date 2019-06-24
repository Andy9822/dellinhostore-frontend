(function ($) {
    "use strict";

    $( document ).ready(function() {

      if (window.sessionStorage.clientEmail == null) {
        window.location.href = "index.html";
      }
       $.get("https://dellinhostore.herokuapp.com/client/email", {"email": window.sessionStorage.clientEmail}, function(response){
         if (response.success) {
           var client = response.message;
           console.log(response);
            $(".name").text(client.name);
            $(".email").text(client.email);
            $(".phone").text(client.phone);
            $(".birth").text(client.dateOfBirth);
         }
         else {
           window.location.href = "index.html";
         }
     });

});

function viewMyProfile() {
  window.sessionStorage.setItem('clientEmail',window.sessionStorage.loggedEmail);
  window.location.href = "user.html";
}

$( document ).ready(function() {
  $('.my-profile').on("click", function() { viewMyProfile()});
    $('.username').text(window.sessionStorage.name)

    if (window.sessionStorage.clientEmail == window.sessionStorage.loggedEmail) {
        $('.edit').show();
        console.log('alo');
    }
    else {
      $('.edit').hide();
    }
});

  })(jQuery);
