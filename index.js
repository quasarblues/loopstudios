const bodyEl = document.body;
const navHamburgerBtn = document.querySelector('.main-nav img');
const navCloseBtn = document.querySelector('.mobile-nav img');
const mobileNav = document.querySelector('.mobile-nav');

navHamburgerBtn.addEventListener('click', () => {
    mobileNav.style.display = 'block';
    bodyEl.style.overflowY = 'hidden';
})

navCloseBtn.addEventListener('click', () => {
    mobileNav.style.display = 'none';
    bodyEl.style.overflowY = 'auto';
})