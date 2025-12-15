import Swiper from 'swiper';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const loader = document.querySelector('.lds-roller');
const swiperWrapper = document.querySelector('.swiper-wrapper');

const images = import.meta.glob('../images/hero-images/*.webp', {
    eager: true,
});

// import.meta.glob - Vite function to import multiple files, returns an object, 
// where keys are file paths and values are modules
// eager: true - imports files immediately instead of lazily

const heroImages = Object.values(images).map((img) => img.default);

// img.default - gets the URL of the image file


function createSlides(numSlides) {
    for (let i = 0; i < numSlides; i++) {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        swiperWrapper.appendChild(slide);
    }
}

function initHeroSlider() {
    createSlides(heroImages.length);

    const slides = document.querySelectorAll('.swiper-slide');

    slides.forEach((slide, index) => {
        const link = document.createElement('a');
        link.href = './offers.html';
        link.classList.add('slide-link'); 
        slide.appendChild(link);

        const contentContainer = document.createElement('div');
        contentContainer.classList.add('slide-content');
        link.appendChild(contentContainer);

        const imgContainer = document.createElement('div');
        imgContainer.classList.add('slide-image');
        contentContainer.appendChild(imgContainer);

        const textContainer = document.createElement('div');
        textContainer.classList.add('slide-text');
        contentContainer.appendChild(textContainer);

        const promoText = document.createElement('h2');
        promoText.textContent = 'Black Week!';
        textContainer.appendChild(promoText);

        const promoTextDescription = document.createElement('h3');
        promoTextDescription.textContent = 'Up to 50%!';
        textContainer.appendChild(promoTextDescription);

        const imgElement = document.createElement('img');
        imgElement.src = heroImages[index];
        imgElement.alt = 'Book cover';

        imgContainer.appendChild(imgElement);
    });

    loader.remove();

    // Init Swiper
    const heroSwiper = new Swiper('.swiper', {
        modules: [Autoplay, EffectCoverflow],
        slidesPerView: 1.3,
        loop: false,              
        spaceBetween: 30,
        speed: 800,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1400: { slidesPerView: 4},
        },
    });

    let direction = 1; // change direction of slide

    setInterval(() => {
        if (heroSwiper.isEnd) {
            direction = -1;
        } else if (heroSwiper.isBeginning) {
            direction = 1;
        }

        heroSwiper.slideTo(heroSwiper.activeIndex + direction);
    }, 3000); // interval time
}


initHeroSlider();