import { navLinks } from '../model/links.js';
const linksContainer = document.querySelector('.links')


const links = navLinks.map((link, index) => {
  const { page, url } = link;
  let position;
  if (index === 0) {
    position = 'link-active'
  }
  return `  <li class="link ${position}"><a href="${url}">${page}</a></li>`
}).join('')

linksContainer.innerHTML = links;