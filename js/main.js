document.body.classList.remove('no-scroll');

// ===== AOS =====
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// ===== Header =====
// бургер-меню
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', toggleMenu);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu.classList.contains('menu--open')) {
    closeMenu();
  }
});

document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !burger.contains(e.target) && menu.classList.contains('menu--open')) {
    closeMenu();
  }
});

function toggleMenu() {
  menu.classList.toggle('menu--open');
  burger.classList.toggle('burger--open');
  updateAria();
}

function closeMenu() {
  menu.classList.remove('menu--open');
  updateAria();
}

function updateAria() {
  const isOpen = menu.classList.contains('menu--open');
  burger.setAttribute('aria-expanded', isOpen);
  burger.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
  document.body.classList.toggle('no-scroll', isOpen);
}

// ===== HEADER SCROLL =====
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }
});

// ===== Slider =====
// кастомный слайдер

// ===== Form =====
// валидация