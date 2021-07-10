const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
    navbar.classList.toggle("change");
    menu.classList.toggle("change");
});

// section 3 skills
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 70,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
});