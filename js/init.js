$(document).ready(function(){

    common();
    // check login
    var ref = new Firebase("https://sizzling-heat-2499.firebaseio.com");
    var authData = ref.getAuth();
    if (authData) {
        console.log("User " + authData.uid + " is logged in with " + authData.provider);
        $(".nav-login").hide();

    } else {
        console.log("User is not logged in.");
        $(".nav-account").hide();
    }

    var w = window.innerWidth;
      if( w < 992 ) {
        $("#footer-block1").addClass("center");
        $("#footer-block2").addClass("center");
      } else {
        $("#footer-block1").removeClass("center");
        $("#footer-block2").removeClass("center");
      }

}); // end of document ready

