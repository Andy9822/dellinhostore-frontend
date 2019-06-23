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

$( document ).ready(function() {
    $('.username').text(window.sessionStorage.name)
});

  })(jQuery);
