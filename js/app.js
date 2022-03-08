$('.owl-carousel').owlCarousel({
    loop: false,
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 1000,
    margin: 50,
    dots: false,
    lazyload: true,
    padding: 50,
    stagePadding: 35, 
    items: 4,
    dots: true,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        485: {
            items: 2,
        },
        768: {
            items: 2,
        },
        728: {
            items: 3,
        },
        960: {
            items: 4
        },
        1100: {
            items: 4,
        },
        1400: {
            items: 4,

        },
    }
});





















