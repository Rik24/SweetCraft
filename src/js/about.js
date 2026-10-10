import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const aboutSwiper = new Swiper('.about-us__swiper', {
  modules: [Navigation, Pagination],

  enabled: false,

  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,

  loop: false,

  navigation: {
    nextEl: '.about-us__button--next',
    prevEl: '.about-us__button--prev',
  },

  pagination: {
    el: '.about-us__pagination',
    clickable: true,
  },

  breakpoints: {
    768: {
      enabled: true,
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 24,
    },

    1440: {
      enabled: true,
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 24,
    },
  },
});
