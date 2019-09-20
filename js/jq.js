$(function() {
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 346) {
            $(".navigation").addClass("nav-active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $(".navigation").removeClass("nav-active");
        }
    });
});