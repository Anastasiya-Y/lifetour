import {stopVideo} from '../video/init-video';
import {stopAudio} from '../audio/init-audio';

const swiperContainerHero = document.querySelector('.hero__container');
const swiperContainerTours = document.querySelector('.tours__container');
const swiperContainerTrain = document.querySelector('.train__container');
const swiperContainerFeedback = document.querySelector('.feedback__container');
const swiperContainerGallery = document.querySelector('.gallery__container');

const initSwiper = () => {
  const swiperHero = new Swiper(swiperContainerHero, {
    pagination: {
      el: '.hero__pagination',
      type: 'bullets',
      bulletElement: 'button',
      bulletClass: 'hero__bullet',
      bulletActiveClass: 'hero__bullet--active',
      clickable: true,
    },
    simulateTouch: false,
    centeredSlides: true,
    loop: true,
    speed: 300,
    cssMode: true,
    on: {
      slideChange: () => {
        stopVideo('hero__video-wrapper');
        stopAudio('.hero__audio-wrapper');
      },
    },
  });

  const swiperTours = new Swiper(swiperContainerTours, {
    navigation: {
      nextEl: '.tours__button--next',
      prevEl: '.tours__button--prev',
    },
    simulateTouch: false,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  const swiperTrain = new Swiper(swiperContainerTrain, {
    navigation: {
      nextEl: '.train__button--next',
      prevEl: '.train__button--prev',
    },
    simulateTouch: false,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  const swiperFeedback = new Swiper(swiperContainerFeedback, {
    navigation: {
      nextEl: '.feedback__button--next',
      prevEl: '.feedback__button--prev',
    },
    simulateTouch: false,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 1.2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 1.5,
        spaceBetween: 30,
      },
    },
  });

  const swiperGallery = new Swiper(swiperContainerGallery, {
    navigation: {
      nextEl: '.gallery__button--next',
      prevEl: '.gallery__button--prev',
    },
    simulateTouch: false,
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 3,
      },
      768: {
        spaceBetween: 5,
      },
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 5,
      },
    },
  });
};

export {initSwiper};
