const slider = document.querySelector('.hero-slider');
const slide = document.querySelector('.slide');
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

console.log(slide);

const navigateSlider = (type) => {
  if (type === 'next') {

  }
}
nextBtn.addEventListener('click', () => {
  let active = document.querySelector('.active')
  let next = active.nextElementSibling;
  if (next === null) {
    next = slider.firstElementChild;
  }
  active.classList.remove('active')
  next.classList.remove('next')
  active.classList.add('next')
  next.classList.add('active')
})

prevBtn.addEventListener('click', () => {
  let active = document.querySelector('.active')
  let prev = active.previousElementSibling;
  if (prev === null) {
    prev = slider.lastElementChild;
  }
  active.classList.remove('active')
  prev.classList.remove('prev')
  active.classList.add('prev')
  prev.classList.add('active')
})

