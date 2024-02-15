const banner = document.querySelector('.banner-container');
const hamburgerBtn = document.querySelector('.hamburger')
const closeBtn = document.querySelector('.close-btn');

hamburgerBtn.addEventListener('click', function () {
  banner.classList.add('show')
  hamburgerBtn.classList.add('show')
  closeBtn.classList.add('show')
})

closeBtn.addEventListener('click', function () {
  banner.classList.remove('show')
  hamburgerBtn.classList.remove('show')
  closeBtn.classList.remove('show')
})