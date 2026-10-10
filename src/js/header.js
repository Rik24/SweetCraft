document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.header-burger-btn');
  const closeBtn = document.querySelector('.mobile-menu-close-btn');
  const mobileMenu = document.querySelector('.mobile-menu');

  function toggleMenu() {
    mobileMenu.classList.toggle('is-open');
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', toggleMenu);
  }

  // Закрытие по клику на крестик
  if (closeBtn) {
    closeBtn.addEventListener('click', toggleMenu);
  }

  const menuLinks = document.querySelectorAll(
    '.mobile-menu-link, .mobile-menu-btn'
  );
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
    });
  });
});
