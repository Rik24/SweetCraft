import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'css-star-rating/css/star-rating.css';
import { openOrderModal } from './order-modal';

const BASE_URL = 'https://deserts-store.b.goit.study/api';
const dessertList = document.querySelector('.dessert-list');
const backdrop = document.querySelector('.dessert-details-modal-backdrop');
const closeBtn = document.querySelector('.dessert-details-close-btn');
const loader = document.querySelector('.dessert-details-loader');
const content = document.querySelector('.dessert-details-content');

let currentDessertId = null;

async function getDessertById(id) {
  const res = await axios.get(`${BASE_URL}/desserts/${id}`);
  return res.data;
}

function createClassFromRate(rate) {
  if (Number.isInteger(rate)) {
    return `value-${rate}`;
  }
  return `value-${Math.floor(rate)} half`;
}

function createStarsMarkup() {
  const star = `<div class="star">
      <svg class="star-empty"><use href="/img/star-rating.icons.svg#star-empty"></use></svg>
      <svg class="star-half"><use href="/img/star-rating.icons.svg#star-half"></use></svg>
      <svg class="star-filled"><use href="/img/star-rating.icons.svg#star-filled"></use></svg>
    </div>`;
  return star.repeat(5);
}

function createDessertDetailsMarkup(dessert) {
  return `<img class="dessert-details-img" src="${dessert.image}" alt="${dessert.name}" />
    <div class="dessert-details-info">
      <h2 class="dessert-details-name">${dessert.name}</h2>
      <p class="dessert-details-price">${dessert.price} грн</p>
      <div class="rating dessert-details-rating ${createClassFromRate(dessert.rate)}" aria-label="Рейтинг ${dessert.rate} з 5">
        <div class="star-container">${createStarsMarkup()}</div>
      </div>
      <p class="dessert-details-text">${dessert.description}</p>
      <p class="dessert-details-composition">
        <span class="dessert-details-composition-label">Склад</span>: ${dessert.composition}
      </p>
      <button type="button" class="dessert-details-order-btn">Перейти до замовлення</button>
    </div>`;
}

function onEscapePress(event) {
  if (event.key === 'Escape') {
    closeDetailsModal();
  }
}

function showDetailsModal() {
  backdrop.classList.add('is-modal-open');
  document.addEventListener('keydown', onEscapePress);
}

function closeDetailsModal() {
  backdrop.classList.remove('is-modal-open');
  document.removeEventListener('keydown', onEscapePress);
}

async function openDessertDetails(id) {
  currentDessertId = id;
  content.innerHTML = '';
  loader.classList.add('is-visible');
  showDetailsModal();

  try {
    const dessert = await getDessertById(id);
    content.innerHTML = createDessertDetailsMarkup(dessert);
  } catch (err) {
    closeDetailsModal();
    iziToast.error({
      message: 'Не вдалося завантажити десерт. Спробуйте пізніше.',
      position: 'topRight',
    });
  } finally {
    loader.classList.remove('is-visible');
  }
}

dessertList.addEventListener('click', event => {
  const dessertBtn = event.target.closest('.dessert-btn');
  if (!dessertBtn) return;

  openDessertDetails(dessertBtn.dataset.id);
});

closeBtn.addEventListener('click', closeDetailsModal);

backdrop.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    closeDetailsModal();
  }
});

content.addEventListener('click', event => {
  if (!event.target.closest('.dessert-details-order-btn')) return;

  closeDetailsModal();
  openOrderModal(currentDessertId, showDetailsModal);
});
