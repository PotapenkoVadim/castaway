import './index.html';
import './styles/main.scss';

const ACTIVE_MOBILE_MENU_CLASSNAME = 'header__navigation_open';
const mobileMenu = document.getElementById('mobileMenu');
const mobileCloseIcon = document.getElementById('mobileCloseIcon');
const mobileNavigation = document.getElementById('mobileNavigation');

mobileMenu.addEventListener('click', () => {
  mobileNavigation.classList.toggle(ACTIVE_MOBILE_MENU_CLASSNAME);
});

mobileCloseIcon.addEventListener('click', () => {
  mobileNavigation.classList.remove(ACTIVE_MOBILE_MENU_CLASSNAME);
});
