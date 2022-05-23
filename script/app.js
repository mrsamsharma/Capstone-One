const hamburgerBtn = document.querySelector('.hamburger');
const crossBtn = document.querySelector('.cross-icon');
const navLinks = document.querySelectorAll('.navLink');

function menuToggle() {
  document.querySelector('.mobile-nav').classList.toggle('active');
  document.querySelector('.hamburger').classList.toggle('hide');
}

hamburgerBtn.addEventListener('click', menuToggle);
crossBtn.addEventListener('click', menuToggle);

navLinks.forEach((navItem) => {
  navItem.addEventListener('click', menuToggle);
});