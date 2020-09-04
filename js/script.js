//slider
$(document).ready(function () {
    $('.intro-slider').slick({
            autoplay: true,
            arrows: false,
            dots: true,
            responsive: [{
                breakpoint: 767,
                settings: {
                    dots: false
                }
            }, ]
        }
    )
});