import outsideClick from './outsideclick.js';

export default class DropDownMenu {
  constructor(selector, events) {
    this.dropdownMenus = document.querySelectorAll(selector);

    if (events === undefined) {
      this.events = ['click', 'touchstart'];
    } else {
      this.events = events;
    }

    this.activeClass = 'active';
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  activeDropdownMenu(event) {
    event.preventDefault();
    const { currentTarget } = event;
    currentTarget.classList.add('active');

    outsideClick(currentTarget, this.events, () => {
      currentTarget.classList.remove('active');
    });
  }

  addDropdownMenuEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((eventUser) => menu.addEventListener(eventUser, this.activeDropdownMenu));
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenuEvent();
    }
    return this;
  }
}
