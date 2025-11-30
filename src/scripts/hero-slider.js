// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { getBooks } from './bookService.js';

const slides = document.querySelectorAll('.swiper-slide');
const loader = document.querySelector('.lds-roller');

slides.forEach(slide => {
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('slide-content');
    slide.appendChild(contentContainer);
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('slide-image');
    contentContainer.appendChild(imgContainer);
    const textContainer = document.createElement('div');
    textContainer.classList.add('slide-text');
    contentContainer.appendChild(textContainer);
    const promoText = document.createElement('h2');
    promoText.textContent = 'Black Week';
    textContainer.appendChild(promoText);
    const promoTextDescription = document.createElement('h3');
    promoTextDescription.textContent = 'Up to 50%!';
    textContainer.appendChild(promoTextDescription);
});

// loadRandomBooks();
async function getHeroBooks() {
    getBooks().then(books => {
        const heroBooks = books.sort(() => 0.5 - Math.random()).slice(0, 3);

        slides.forEach((slide, index) => {
            const imgSrc = heroBooks[index].formats['image/jpeg'] || '';
            const imgContainer = slide.querySelector('.slide-image');
            const imgElement = document.createElement('img');
            imgElement.src = imgSrc;
            imgElement.alt = heroBooks[index].title;
            imgContainer.appendChild(imgElement);
        });
        loader.remove();
    })
}

getHeroBooks();

// init Swiper:
const heroSwiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, Autoplay, EffectCoverflow],
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },

    a11y: {
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
    },
    speed: 1000,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    // effect: 'fade',
    // // | 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'creative' | 'cards'
    // effect: 'coverflow',
    // fadeEffect: {
    //     crossFade: true
    // },
});

//add breakpoints

heroSwiper();


