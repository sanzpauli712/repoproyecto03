const toggleBtn = document.querySelector('.header_toggle');
const navMenu = document.querySelector('.header_nav');

toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('is-active');
});