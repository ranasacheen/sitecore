$(document).ready(function () {
    var mainNav = $(".main-navigation");
    var stickyNavTop = $(mainNav).offset().top;
    var nvHt = $(mainNav).height();

    var stickyNav = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > stickyNavTop) {
            $(mainNav).addClass('sticky');
            $("body").css("padding-top", nvHt)
        } else {
            $(mainNav).removeClass('sticky');
            $("body").css("padding-top", '0')
        }
    };

    stickyNav();

    $(window).scroll(function () {
        stickyNav();
    });
//order feature accordingly
    $(window).on("load resize", function () {
        var companyFeature = $(".company-feature").find(".feature-alter-row:odd");
        var addOrder1 = $(companyFeature).find(".feature-alter-col:first");
        var addOrder2 = $(companyFeature).find(".feature-alter-col:last");

        if ($(window).innerWidth() > 992) {
            $(addOrder1).addClass("order-1");
            $(addOrder2).addClass("order-0");

        } else {
            $(addOrder1).removeClass("order-1");
            $(addOrder2).removeClass("order-0");

        }
    });
    //initialize slick slider for testimonial
    $('.slider-testimonial').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slider-testimonial-nav'
    });
    $('.slider-testimonial-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-testimonial',
        dots: false,
        nav: true,
        focusOnSelect: true,
        margin: 30,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    //mobile menu trigger
    $(".mobile-menu-toggle").click(function (event) {
        event.preventDefault();
        $("body").addClass("backdrop-active");
        $(".main-navigation").removeClass("sticky");
        $(".site-nav-link").show("slow").addClass("site-nav-link-active");

    });


    $(".mobile-menu-close").click(function (event) {
        event.preventDefault();
        $("body").removeClass("backdrop-active");
        $(".site-nav-link").hide("slow").removeClass("site-nav-link-active");
        $(".main-navigation").addClass("sticky");
    });
    $(window).on("load resize", function () {
        if ($(window).innerWidth() > 992) {
            $(".site-nav-link").show("slow")
        }
    });
});
