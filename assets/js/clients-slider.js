// Initialize clients slider
jQuery(document).ready(function($) {
    if ($('.clients-slider').length) {
        $('.clients-slider').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            dots: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 2,
                    nav: false
                },
                600: {
                    items: 3,
                    nav: true
                },
                1000: {
                    items: 5,
                    nav: true
                }
            }
        });
    }
});
