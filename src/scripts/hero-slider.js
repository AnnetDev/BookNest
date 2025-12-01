// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { getBooks } from './bookService.js';

const loader = document.querySelector('.lds-roller');
const swiperWrapper = document.querySelector('.swiper-wrapper');



function createSlides(books) {
const numSlides = books.length;

for (let i = 0; i < numSlides; i++) {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    swiperWrapper.appendChild(slide);
}
}

async function getHeroBooks() {
    const books = await getBooks();                     
 
    const heroBooks = books.sort(() => 0.5 - Math.random()).slice(0, 10);

    createSlides(heroBooks);                              

    const slides = document.querySelectorAll('.swiper-slide');  

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

    slides.forEach((slide, index) => {
        const imgSrc = heroBooks[index].formats['image/jpeg'] || '';
        const imgContainer = slide.querySelector('.slide-image');

        const imgElement = document.createElement('img');
        imgElement.src = imgSrc;
        imgElement.alt = heroBooks[index].title;

        imgContainer.appendChild(imgElement);
    });

    loader.remove();
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
        clickable: true,
        type: 'bullets',
        renderCustom: (swiper, current, total) => {
            // Возвращаем РОВНО 3 буллета, средний — активный
            return `
              <span class="swiper-pagination-bullet bullet-prev"  aria-label="Previous slide"></span>
              <span class="swiper-pagination-bullet swiper-pagination-bullet-active bullet-middle" aria-current="true"></span>
              <span class="swiper-pagination-bullet bullet-next"  aria-label="Next slide"></span>
            `;
          },
    },


    a11y: {
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
    },
    speed: 1000,

    spaceBetween: 20,

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
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },

    on: {
        init(swiper) {
          const pag = swiper.pagination.el;
    
          // Делегирование кликов по кастомным буллетам
          pag.addEventListener('click', (e) => {
            const t = e.target;
            if (t.classList.contains('bullet-prev')) {
              swiper.slidePrev();
            } else if (t.classList.contains('bullet-next')) {
              swiper.slideNext();
            }
            // Средний буллет — просто индикатор, клик по нему игнорируем
          });
        },
    
        // На любом изменении слайда просто перерисовываем пагинацию,
        // чтобы оставить средний буллет активным.
        slideChange(swiper) {
          swiper.pagination.render();
          swiper.pagination.update();
        },
      },
});

//add breakpoints

// heroSwiper();


