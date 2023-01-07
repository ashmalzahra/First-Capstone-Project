const More = document.getElementById('more');
const moreSpeakers = document.querySelector('.add-speaker-sec');
const moreSpeakers1 = document.querySelector('.add-speaker-sec1');
const showLess = document.querySelector('.less-info');
const showMore = document.querySelector('.more-info');

More.addEventListener('click', () => {
  moreSpeakers.classList.toggle('open');
  moreSpeakers1.classList.toggle('open');
  showLess.classList.toggle('open');
  showMore.classList.toggle('open');
});