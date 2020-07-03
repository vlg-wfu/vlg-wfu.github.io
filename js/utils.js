function common() {

    $('.parallax').parallax();
    $('ul.tabs').tabs();
    $('.materialboxed').materialbox();
    $('.scrollspy').scrollSpy();
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });

    $('.modal-trigger').leanModal();
    $(".button-collapse").sideNav();
    $(".login-error").hide();
    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    });
    
    $(window).resize(function(){
      var w = window.innerWidth;
      console.log(w);
      if( w < 992 ) {
        $("#footer-block1").addClass("center");
        $("#footer-block2").addClass("center");
      } else {
        $("#footer-block1").removeClass("center");
        $("#footer-block2").removeClass("center");
      }
      
    });
}

function conference_mapping(conf) {

    conf = conf.toUpperCase();
    switch(conf) {
        case "PAMI"     : return "IEEE Transactions on Pattern Analysis and Machine Intelligence";
        case "IJCV"     : return "International Journal of Computer Vision";
        case "TIP"      : return "IEEE Transactions on Image Processing";
        case "TIT"      : return "IEEE Transactions on Information Theory";
        case "CVIU"     : return "Computer Vision and Image Understanding";
        case "PR"       : return "Pattern Recognition";
        case "JMLR"     : return "Journal of Machine Learning Research";
        case "TOG"      : return "ACM Transactions on Graphics";
        case "SIGGRAPH" : return "ACM Transactions on Graphics";
        case "NIPS"     : return "Advances in Neural Information Processing Systems";
        case "CVPR"     : return "IEEE Conference on Computer Vision and Pattern Recognition";
        case "ECCV"     : return "European Conference on Computer Vision";
        case "ICCV"     : return "IEEE International Conference on Computer Vision";
        case "ICIP"     : return "IEEE International Conference on Image Processing";
        case "ICCP"     : return "IEEE International Conference on Computational Photography";
        case "BMVC"     : return "British Machine Vision Conference";
        case "ACMMM"    : return "ACM International conference on Multimedia";
        case "ICPR"     : return "International Conference on Pattern Recognition";
        case "ICME"     : return "IEEE International Conference on Multimedia and Expo";
        case "VMV"      : return "Vision, Modelling and Visualization";
        case "ICASSP"   : return "IEEE International Conference on Acoustics, Speech, and Signal Processing";
        case "WACV"     : return "IEEE Winter Conference on Applications of Computer Vision";
        case "SPIE"     : return "SPIE: Image and Signal Processing";
        case "FG"       : return "IEEE Conference on Automatic Face and Gesture Recognition";
        case "TOMM"     : return "ACM Transactions on Multimedia Computing Communications and Applications";
        default: return conf;
    }
    
}

function month_str(month) {

    map = ["January", "February", "March", 'April', "May", "June", "July", "August", "September", "October", "November", "December"]
    if( month >= 1 && month <= 12 ) {
        return map[month-1];
    } else {
        return month;
    }

}



function login(){
    console.log("login!");
    var ref = new Firebase("https://sizzling-heat-2499.firebaseio.com");
    
    var account = $("#email").val();
    var pwd = $("#pwd").val();

    // Or with an email/password combination
    ref.authWithPassword({
      email    : account,
      password : pwd
    }, authHandler);

}

function authHandler(error, authData) {
if (error) {
    console.log("Login Failed!", error);
    $(".login-error").show();
    $("#error-message").text(error);
    
  } else {
    console.log("Authenticated successfully with payload:", authData);
    //window.location.href = "/wlai24/tmp";
    $('#login-modal').closeModal();
    location.reload();
  }
}

function logout() {
    var ref = new Firebase("https://sizzling-heat-2499.firebaseio.com");
    var authData = ref.getAuth();
    if (authData) {
      console.log("Logout User " + authData.uid + ".");
      ref.unauth();
      //window.location.href = "/wlai24/tmp";
      location.reload();
    } else {
      console.log("User is not logged in.");
    }
    
}