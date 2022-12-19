document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 500,
        dist: -80,
        shift: 5,
        padding: 10,
        numVisible: 5,
        indicators: true,
        nowwrap: false,
    });
});
