    import Swiper from 'swiper';
    import { Autoplay, EffectCoverflow } from 'swiper/modules';
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
            promoText.textContent = 'Black Week!';
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
        modules: [Autoplay, EffectCoverflow],
        slidesPerView: 1,
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
        },
        slidesPerView: 1.3,
        spaceBetween: 30,

        a11y: {
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
        },

        speed: 1000,

        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },

        breakpoints: {
            768: {
                slidesPerView: 2.3,   
            },
            1024: {
                slidesPerView: 3.3, 
            },
        },

    });
