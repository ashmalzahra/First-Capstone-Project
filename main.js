const menuBtn = document.querySelector('.ham-burger');
const closeBtn = document.querySelector('.cross');
const content = document.querySelector('.mobile-links');
const link1 = document.querySelector('.mob-link1');
const link2 = document.querySelector('.mob-link2');
const link3 = document.querySelector('.mob-link3');

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
link1.addEventListener('click', hideMenu);
link2.addEventListener('click', hideMenu);
link3.addEventListener('click', hideMenu);

function myFunction(desktopView) {
  if (desktopView.matches) {
    content.style.display = 'none';
    menuBtn.style.display = 'none';
  } else {
    menuBtn.style.display = 'block';
    content.style.display = 'none';
  }
}

const desktopView = window.matchMedia('(min-width: 768px)');

myFunction(desktopView);

desktopView.addListener(myFunction);