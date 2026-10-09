import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const BASE_URL = 'https://deserts-store.b.goit.study/api';
const STORAGE_KEY = 'order-form-data';
const backdrop = document.querySelector('.order-modal-backdrop');
const closeBtn = document.querySelector('.order-close-btn');
const form = document.querySelector('.order-form');
const submitBtn = document.querySelector('.order-submit-btn');
const loader = document.querySelector('.order-loader');

let currentDessertId = null;
let returnToDetails = null;

function saveFormData() {
  const formData = {
    name: form.elements.name.value,
    phone: form.elements.phone.value,
    comment: form.elements.comment.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function fillFormFromStorage() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (!savedData) return;

  try {
    const formData = JSON.parse(savedData);
    form.elements.name.value = formData.name || '';
    form.elements.phone.value = formData.phone || '';
    form.elements.comment.value = formData.comment || '';
  } catch (err) {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function onEscapePress(event) {
  if (event.key === 'Escape') {
    closeOrderModal();
  }
}

export function openOrderModal(dessertId, onReturn) {
  currentDessertId = dessertId;
  returnToDetails = onReturn;

  fillFormFromStorage();
  backdrop.classList.add('is-modal-open');
  document.addEventListener('keydown', onEscapePress);
}

function closeOrderModal(shouldReturn = true) {
  backdrop.classList.remove('is-modal-open');
  document.removeEventListener('keydown', onEscapePress);

  if (shouldReturn && returnToDetails) {
    returnToDetails();
  }
}

form.addEventListener('input', saveFormData);

closeBtn.addEventListener('click', () => closeOrderModal());

backdrop.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    closeOrderModal();
  }
});

form.addEventListener('submit', async event => {
  event.preventDefault();

  const phone = form.elements.phone.value.replaceAll(' ', '');
  if (phone.length !== 12) {
    iziToast.warning({
      message: 'Телефон має містити 12 цифр, наприклад 380961234568.',
      position: 'topRight',
    });
    return;
  }

  const orderData = {
    name: form.elements.name.value.trim(),
    phone: phone,
    comment: form.elements.comment.value.trim(),
    dessertId: currentDessertId,
  };

  loader.classList.add('is-visible');
  submitBtn.disabled = true;

  try {
    const res = await axios.post(`${BASE_URL}/orders`, orderData);

    iziToast.success({
      message: `Дякуємо! Замовлення ${res.data.orderNum} прийнято, ми скоро зв'яжемось з вами.`,
      position: 'topRight',
    });

    form.reset();
    localStorage.removeItem(STORAGE_KEY);
    closeOrderModal(false);
  } catch (err) {
    iziToast.error({
      message: 'Не вдалося надіслати замовлення. Перевірте дані й спробуйте ще раз.',
      position: 'topRight',
    });
  } finally {
    loader.classList.remove('is-visible');
    submitBtn.disabled = false;
  }
});
