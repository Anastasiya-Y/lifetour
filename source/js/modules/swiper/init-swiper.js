const swiperContainerHero = document.querySelector('.hero__container');

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
    grabCursor: true,
    simulateTouch: false,
    loop: true,
    speed: 300,
  });
};

export {initSwiper};
