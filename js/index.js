const buttons = document.querySelectorAll('[data-carousel-button]');
const trendingWeekTypes = document.querySelector('.trending__section-items');
const trendingLinks = document.querySelectorAll('.trending__link');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const navbar = document.querySelector('.nav__links');
const searchIcon = document.querySelector(".nav__user--search");
const searchInp = document.querySelector(".search-input");

buttons.forEach(btn=> {
    btn.addEventListener('click', ()=> {
        const offset = btn.dataset.carouselButton === 'next' ? 1 : -1;
        const slides = btn.closest('[data-carousel]').querySelector('[data-slides]');

        const activeSlide = slides.querySelector('[data-active]');
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    })
})


trendingWeekTypes.addEventListener('click', function(e) {
    e.preventDefault();
    const clicked = e.target.closest('.trending__link');
    if (!clicked) return;

    trendingLinks.forEach(link=> link.classList.remove('trending_active'));
    clicked.classList.add('trending_active');
})

hamburgerIcon.addEventListener('click', function() {
    navbar.classList.toggle('active');
})


searchIcon.addEventListener('click', ()=> {
    searchInp.classList.toggle('active');
})