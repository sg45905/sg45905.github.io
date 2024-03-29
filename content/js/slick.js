$(".port-slider").slick (
    {
        dots: !1,
        infinite: !0,
        autoplay: !0,
        arrows: !0,
        speed: 1e3,
        prevArrow: '<i class="fa fa-long-arrow-alt-right dandik"> </i>',
        nextArrow: '<i class="fa fa-long-arrow-alt-left bamdik"> </i>',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: !1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: !1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: !0,
                    arrows: !1
                }
            }
        ]
    }
),

$(".testi-slider").slick (
    {
        dots: !1,
        infinite: !0,
        speed: 1e3,
        autoplay: !0,
        arrows: !0,
        fade: !1,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<i class="fa fa-long-arrow-alt-right dandik"> </i>',
        nextArrow: '<i class="fa fa-long-arrow-alt-left bamdik"> </i>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: !0,
                    dots: !1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: !1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: !1
                }
            }
        ]
    }
),

$(".feature-slider").slick (
    {
        dots: !1,
        infinite: !0,
        speed: 1e3,
        autoplay: !0,
        arrows: !1,
        fade: !1,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<i class="fa fa-long-arrow-alt-right dandik"> </i>',
        nextArrow: '<i class="fa fa-long-arrow-alt-left bamdik"> </i>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: !0,
                    dots: !1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: !0,
                    dots: !1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: !1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: !0,
                    arrows: !1
                }
            }
        ]
    }
),

$(".suggest-slider").slick (
    {
        dots: !1,
        infinite: !0,
        adaptiveHeight: !1,
        variableWidth: !0,
        speed: 800,
        autoplay: !0,
        arrows: !0,
        fade: !1,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<i class="fa fa-long-arrow-alt-right dandik"> </i>',
        nextArrow: '<i class="fa fa-long-arrow-alt-left bamdik"> </i>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: !0,
                    dots: !1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: !1
                }
            }
        ]
    }
),

$(".theme-slider").slick (
    {
        dots: !1,
        infinite: !0,
        speed: 1e3,
        fade: !1,
        autoplay: !0,
        arrows: !0,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<i class="fa fa-chevron-right dandik"> </i>',
        nextArrow: '<i class="fa fa-chevron-left bamdik"> </i>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: !1
                }
            }
        ]
    }
);