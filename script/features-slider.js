$('.features-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
        breakpoint: 1200,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
        }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
    });