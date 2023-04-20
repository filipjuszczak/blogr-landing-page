const navToggle = document.querySelector('.mobile-toggle');
const navButtons = document.querySelectorAll('.nav__links__btn');
const overlay = document.querySelector('.overlay');

function closeDropdowns() {
  const dropdowns = document.querySelectorAll('.nav__dropdown');
  navButtons.forEach((button) => {
    button.setAttribute('aria-expanded', false);
  });
  dropdowns.forEach((dropdown) => {
    dropdown.setAttribute('aria-hidden', true);
  });
}

navToggle.addEventListener('click', () => {
  const navVisibility = navToggle.getAttribute('data-nav-expanded');
  if (navVisibility === 'false') {
    navToggle.setAttribute('data-nav-expanded', true);
    overlay.setAttribute('data-visible', true);
  } else {
    navToggle.setAttribute('data-nav-expanded', false);
    overlay.setAttribute('data-visible', false);
  }
});

navButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded');
    if (isExpanded === 'false') {
      button.setAttribute('aria-expanded', true);
    } else {
      button.setAttribute('aria-expanded', false);
    }
  });
});
