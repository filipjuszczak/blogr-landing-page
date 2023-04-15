const navLinkEls = document.querySelectorAll('.nav-link--heading');
const arrowEls = document.querySelectorAll('.nav__icon');
const dropdownEls = document.querySelectorAll('.nav__dropdown');
const buttonEl = document.querySelector('.nav__btn--mobile');
const menuEl = document.querySelector('.nav__menu');

buttonEl.addEventListener('click', () => {
  console.log('a');
  menuEl.classList.toggle('nav__menu--open');
});

function closeOpenDropdowns() {
  dropdownEls.forEach((el) => {
    el.classList.remove('nav__dropdown--open');
  });
}

function flipArrow() {
  arrowEls.forEach((el) => {
    el.classList.remove('nav__icon--open');
  });
}

navLinkEls.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    const arrows = el.parentElement.querySelectorAll('.nav__icon');
    const dropdownEl = el.parentElement.querySelector('.nav__dropdown');
    const shouldOpen = !dropdownEl.classList.contains('nav__dropdown--open');
    closeOpenDropdowns();
    flipArrow();
    if (shouldOpen) {
      arrows.forEach((el) => {
        el.classList.add('nav__icon--open');
      });
      dropdownEl.classList.add('nav__dropdown--open');
    }
    e.stopPropagation();
  });
});

window.addEventListener('click', (e) => {
  if (e.target != navLinkEls) {
    closeOpenDropdowns();
    flipArrow();
  }
});
