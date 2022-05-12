import outsideClick from './outsideclick.js';

export default function initDropDownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  function handleClick(event) {
    event.preventDefault();
    event.currentTarget.classList.add('active');

    outsideClick(this, ['click', 'touchstart'], () => {
      this.classList.remove('active');
    });
  }

  dropdownMenus.forEach((menu) => {
    ['click', 'touchstart'].forEach((eventUser) => menu.addEventListener(eventUser, handleClick));
  });
}
