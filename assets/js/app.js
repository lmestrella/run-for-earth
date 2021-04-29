const siteHamburger = document.querySelector(".site__nav-hamburger");
const siteMenuList = document.querySelector(".site__nav-list");

const toggleSiteMenu = (e) => {
  siteHamburger.classList.toggle("site__nav-hamburger--open");
  siteMenuList.classList.toggle("site__nav-list--open");
};

siteHamburger.addEventListener("click", toggleSiteMenu);
