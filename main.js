const menuBtn = document.querySelector('.ham-burger');
const closeBtn = document.querySelector('.cross');
const content = document.querySelector('.mobile-links');
const links = document.querySelectorAll('.mob-link');

function showMenu() {
  content.style.display = 'flex';
  menuBtn.style.display = 'none';
}

function hideMenu() {
  content.style.display = 'none';
  menuBtn.style.display = 'block';
}

menuBtn.addEventListener('click', showMenu);
closeBtn.addEventListener('click', hideMenu);
links.addEventListener('click', hideMenu);

function myFunction(mobileView) {
  if (mobileView.matches) {
    content.style.display = 'none';
    
  } else {
    menuBtn.style.display = 'block';
    content.style.display = 'none';
  }
}

const desktopView = window.matchMedia('(min-width: 768px)');
const mobileView = window.matchMedia('(max-width: 767px)')

myFunction(MobileView);

desktopView.addListener(myFunction);