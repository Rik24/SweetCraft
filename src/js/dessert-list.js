import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const BASE_URL = 'https://deserts-store.b.goit.study/api';
const LIMIT = 8;
const categoriesList = document.querySelector('.category-list');
const dessertList = document.querySelector('.dessert-list');
const loadMoreBtn = document.querySelector('.load-more-btn');
const loader = document.querySelector('.loader');

let currentPage = 1;
let selectedCategoryId = 'select-all';

async function getCategories() {
  const res = await axios.get(`${BASE_URL}/categories`);
  return res.data;
}

async function getDesserts(page, category) {
  const params = {
    page: page,
    limit: LIMIT,
  };

  if (category !== 'select-all') {
    params.category = category;
  }

  const res = await axios.get(`${BASE_URL}/desserts`, {
    params: params,
  });
  return res.data;
}

function renderCategories(categories) {
  const markup = categories
    .map(
      category => `<li>
        <button type="button" class="category-select-btn" data-id="${category._id}">${category.name}</button></li>`
    )
    .join('');

  categoriesList.insertAdjacentHTML('beforeend', markup);
}

function createDessertsMarkup(desserts) {
  return desserts
    .map(
      dessert => `<li class="dessert-item">
        <img class="dessert-img" src="${dessert.image}" alt="${dessert.name}" loading="lazy" />
        <p class="dessert-category">${dessert.category.name}</p>
        <h3 class="dessert-name">${dessert.name}</h3>
        <p class="dessert-text">${dessert.description}</p>
        <div class="dessert-bottom">
          <p class="dessert-price">${dessert.price} грн</p>
          <button type="button" class="dessert-btn" data-id="${dessert._id}" aria-label="Детальніше про ${dessert.name}">
            <svg class="dessert-btn-icon" width="24" height="24">
              <use href="/img/icons.svg#arrow_outwardicon"></use>
            </svg>
          </button>
        </div>
      </li>`
    )
    .join('');
}

function updateLoadMoreBtn(totalItems) {
  if (currentPage * LIMIT < totalItems) {
    loadMoreBtn.classList.add('is-visible');
  } else {
    loadMoreBtn.classList.remove('is-visible');
  }
}

function showDessertsError() {
  iziToast.error({
    message: 'Не вдалося завантажити десерти. Спробуйте пізніше.',
    position: 'topRight',
  });
}

function showLoader() {
  loader.classList.add('is-visible');
}

function hideLoader() {
  loader.classList.remove('is-visible');
}

async function init() {
  showLoader();

  try {
    const fetchedCategories = await getCategories();
    renderCategories(fetchedCategories);

    const fetchedDesserts = await getDesserts(currentPage, selectedCategoryId);
    dessertList.innerHTML = createDessertsMarkup(fetchedDesserts.desserts);
    updateLoadMoreBtn(fetchedDesserts.totalItems);
  } catch (err) {
    showDessertsError();
  } finally {
    hideLoader();
  }
}

init();

const categoryWrap = document.querySelector('.category-wrap');
const categoryToggle = document.querySelector('.category-toggle');

categoryToggle.addEventListener('click', () =>
  categoryWrap.classList.toggle('is-open')
);

const currentCategory = document.querySelector('.current-category');

currentCategory.textContent = categoriesList
  .querySelector('.is-active')
  .textContent.trim();

categoriesList.addEventListener('click', async event => {
  const categoryBtn = event.target.closest('.category-select-btn');
  if (!categoryBtn) return;

  const activeBtn = categoriesList.querySelector('.is-active');
  const prevCategoryId = selectedCategoryId;
  const prevPage = currentPage;
  const wasLoadMoreVisible = loadMoreBtn.classList.contains('is-visible');

  activeBtn.classList.remove('is-active');
  categoryBtn.classList.add('is-active');

  currentCategory.textContent = categoryBtn.textContent.trim();
  categoryWrap.classList.remove('is-open');

  currentPage = 1;
  selectedCategoryId = categoryBtn.dataset.id;

  showLoader();
  loadMoreBtn.classList.remove('is-visible');

  try {
    const fetchedDesserts = await getDesserts(currentPage, selectedCategoryId);
    dessertList.innerHTML = createDessertsMarkup(fetchedDesserts.desserts);
    updateLoadMoreBtn(fetchedDesserts.totalItems);
  } catch (err) {
    categoryBtn.classList.remove('is-active');
    activeBtn.classList.add('is-active');
    currentCategory.textContent = activeBtn.textContent.trim();

    selectedCategoryId = prevCategoryId;
    currentPage = prevPage;

    if (wasLoadMoreVisible) {
      loadMoreBtn.classList.add('is-visible');
    }

    showDessertsError();
  } finally {
    hideLoader();
  }
});

document.addEventListener('click', event => {
  if (!categoryWrap.contains(event.target)) {
    categoryWrap.classList.remove('is-open');
  }
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;

  showLoader();
  loadMoreBtn.classList.remove('is-visible');

  try {
    const fetchedDesserts = await getDesserts(currentPage, selectedCategoryId);
    dessertList.insertAdjacentHTML(
      'beforeend',
      createDessertsMarkup(fetchedDesserts.desserts)
    );
    updateLoadMoreBtn(fetchedDesserts.totalItems);
  } catch (err) {
    showDessertsError();
  } finally {
    hideLoader();
  }
});
