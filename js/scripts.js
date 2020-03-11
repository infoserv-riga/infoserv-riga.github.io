$(function(){

    // Instantiate owl carousel for customers
    $("#resellingCarousel").owlCarousel({
        loop:true,
        dots:false,
        margin:10,

        autoplay:true,
        autoplayTimeout:4500,
        
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            426:{
                items:3,
                nav:false
            },
            1024:{
                items:5,
                nav:false
            }
        }
    });

    //monitor footer placehoder
    $("#colophonPlaceholder").height($("#colophon").height());
    $(window).resize(function() {        
        $("#colophonPlaceholder").height($("#colophon").height());
    });
});