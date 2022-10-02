$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".cstm-navbar").addClass("darkHeader");
    } else {
        $(".cstm-navbar").removeClass("darkHeader");
    }
});