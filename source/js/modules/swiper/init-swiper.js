const swiperContainerHero = document.querySelector('.hero__container');
const swiperContainerTours = document.querySelector('.tours__container');

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
    loop: true,
    speed: 300,
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
        spaceBetween: 0,
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
};

export {initSwiper};
