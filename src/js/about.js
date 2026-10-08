import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const aboutSwiper = new Swiper('.about-us__swiper', {
  modules: [Navigation, Pagination],

  /*
   * MOBILE FIRST
   *
   * На mobile Swiper выключен.
   * Картинки показываются обычным вертикальным списком.
   */
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
    /*
     * TABLET
     *
     * Видно 2 картинки.
     * Переключаемся ПО ОДНОМУ слайду.
     *
     * 1 + 2
     * 2 + 3
     * 3 + 4
     */
    768: {
      enabled: true,

      slidesPerView: 2,
      slidesPerGroup: 1,

      spaceBetween: 24,
    },

    /*
     * DESKTOP
     */
    1440: {
      enabled: true,

      slidesPerView: 2,
      slidesPerGroup: 1,

      spaceBetween: 24,
    },
  },
});
