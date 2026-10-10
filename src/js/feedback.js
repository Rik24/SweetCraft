import 'css-star-rating/css/star-rating.css';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// SWIPER
const swiperOptions = {
  modules: [Navigation, Pagination],
  grabCursor: true,
  slidesPerView: 1,

  breakpoints: {
    375: { slidesPerView: 1, spaceBetween: 20 },
    768: { slidesPerView: 3, spaceBetween: 30 },
  },

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  on: {
    async slideChange(swiper) {
      const {
        realIndex,
        slides: { length },
      } = swiper;
      const isNearEnd = realIndex + 1 >= length - 2;

      if (!isNearEnd || page >= totalPages) {
        return;
      }
      try {
        page += 1;
        const { feedbacks } = await getFeedbacks(page, limit);
        renderFeedbacks(feedbacks);
        swiper.update();
      } catch (err) {
        iziToast.error({
          title: 'Error',
          message: `Помилка отримання Фiдбекiв пiд час довантаження ${err}`,
        });
        console.log(`Помилка отримання Фiдбекiв пiд час довантаження ${err}`);
      }
    },
  },
};

const createFeedbackSwiper = () => new Swiper('.swiper', swiperOptions);

// CONSTANTS
let page = 1;
const limit = 10;
let totalPages = null;

// REFS
const swiperEl = document.querySelector('.swiper-wrapper');

document.addEventListener('DOMContentLoaded', initFeedbacks);

async function initFeedbacks() {
  try {
    const { feedbacks, total } = await getFeedbacks(page, limit);
    totalPages = Math.ceil(total / limit);
    renderFeedbacks(feedbacks);
    createFeedbackSwiper();
  } catch (err) {
    iziToast.error({
      title: 'Error',
      message: `Помилка отримання Фiдбекiв пiд час ініціалізації ${err}`,
    });
    console.log(`Помилка отримання Фiдбекiв пiд час ініціалізації ${err}`);
  }
}

// API FUNCTIONS
axios.defaults.baseURL = 'https://deserts-store.b.goit.study/api/';

const BREAKPOINTS = {
  FEEDBACKS: 'feedbacks',
};

async function getFeedbacks(page, limit) {
  const res = await axios(
    `${BREAKPOINTS.FEEDBACKS}?page=${page}&limit=${limit}`
  );
  return res.data;
}

// RENDER FUNCTIONS
function renderFeedbacks(feedbacks) {
  const markup = feedbacks
    .map(({ author, description, rate }) => {
      const ratingClass = createClassFromRate(rate);
      return createFeedbacksMarkup(author, description, ratingClass);
    })
    .join('');
  swiperEl.insertAdjacentHTML('beforeend', markup);
}

function createFeedbacksMarkup(author, description, ratingClass) {
  return `<div class="feedback-swiper-slide swiper-slide">
      <div class="rating ${ratingClass}">
            <div class="star-container">
              <div class="star">
                <svg class="star-empty">
                  <use href="../img/icons.svg#star-empty"></use>
                </svg>
                <svg class="star-half">
                  <use href="../img/icons.svg#star-half"></use>
                </svg>
                <svg class="star-filled">
                  <use href="../img/icons.svg#star-filled"></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty">
                  <use href="../img/icons.svg#star-empty"></use>
                </svg>
                <svg class="star-half">
                  <use href="../img/icons.svg#star-half"></use>
                </svg>
                <svg class="star-filled">
                  <use href="../img/icons.svg#star-filled"></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty">
                  <use href="../img/icons.svg#star-empty"></use>
                </svg>
                <svg class="star-half">
                  <use href="../img/icons.svg#star-half"></use>
                </svg>
                <svg class="star-filled">
                  <use href="../img/icons.svg#star-filled"></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty">
                  <use href="../img/icons.svg#star-empty"></use>
                </svg>
                <svg class="star-half">
                  <use href="../img/icons.svg#star-half"></use>
                </svg>
                <svg class="star-filled">
                  <use href="../img/icons.svg#star-filled"></use>
                </svg>
              </div>
              <div class="star">
                <svg class="star-empty">
                  <use href="../img/icons.svg#star-empty"></use>
                </svg>
                <svg class="star-half">
                  <use href="../img/icons.svg#star-half"></use>
                </svg>
                <svg class="star-filled">
                  <use href="../img/icons.svg#star-filled"></use>
                </svg>
              </div>
            </div>
          </div>
          <p class="feedback-description">"${description}"</p>
          <p class="feedback-name">${author}</p></div>`;
}

function createClassFromRate(rate) {
  if (Number.isInteger(rate)) {
    return `value-${rate}`;
  } else {
    const normalizeRate = Number.parseInt(rate);
    return `value-${normalizeRate} half`;
  }
}
