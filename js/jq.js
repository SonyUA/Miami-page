$(function() {
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 700) {
            $(".navigation").addClass("nav-active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $(".navigation").removeClass("nav-active");
        }
    });
});


$(document).ready(function() {
    $("#menu").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});