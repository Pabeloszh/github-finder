const dropdown = document.querySelectorAll(".dropdown");
const hamburgerMenu = document.querySelector(".mobile svg");
const closeMenu = document.querySelector(".close svg");

class UI {
  constructor() {
    this.dropdownMenu = document.querySelectorAll(".dropdown__menu");
    this.appMenu = document.querySelector(".links");
    this.tooltipDesktop = document.querySelector(".links .tooltip");
    this.tooltips = document.querySelectorAll(".tooltip");
  }

  toggleDropdown(index) {
    Array.from(this.dropdownMenu).forEach((ddM, i) => {
      index !== i && ddM.classList.remove("toggled");
    });
    this.dropdownMenu[index].classList.toggle("toggled");
  }
  toggleMenu() {
    this.appMenu.classList.toggle("menuToggled");
  }
  showTooltip() {
    this.tooltips.forEach((tt) => {
      tt.classList.add("desktop-active");
      setTimeout(() => {
        tt.classList.remove("desktop-active");
      }, 5000);
    });
  }
}

const ui = new UI();

window.onload = () => ui.showTooltip();

Array.from(dropdown).forEach((dd, index) => {
  dd.addEventListener("click", () => ui.toggleDropdown(index));
});
hamburgerMenu.addEventListener("click", () => ui.toggleMenu());
closeMenu.addEventListener("click", () => ui.toggleMenu());
