const swiperContainerAdvantages = document.querySelector('.advantages__container');
const breakpoint = window.matchMedia('(min-width: 1200px)');
let swiperAdvantages;

const initAdvantagesSwiper = () => {
  swiperAdvantages = new Swiper(swiperContainerAdvantages, {
    navigation: {
      nextEl: '.advantages__button--next',
      prevEl: '.advantages__button--prev',
    },
    simulateTouch: false,
    spaceBetween: 30,
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    initialSlide: 2,
  });
};


const checkBreakpoint = () => {
  if (breakpoint.matches) {
    return initAdvantagesSwiper();
  } else {
    if (swiperAdvantages !== undefined) {
      swiperAdvantages.destroy(true, true);
    }
    return;
  }
};

breakpoint.addEventListener('change', checkBreakpoint);

export {checkBreakpoint};
