export default function scroll () {
  const anchors = document.querySelectorAll('.js-scroll-to');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  })
 }

let btnTop = document.querySelector('a.btn__burger');
window.addEventListener('scroll', () => {
  if(window.scrollY > 100) {
    btnTop.classList.add('_visible');
    btnTop.classList.remove('_hidden');
  } else {
    btnTop.classList.remove('_visible');
    btnTop.classList.add('_hidden');
  }
})
}
