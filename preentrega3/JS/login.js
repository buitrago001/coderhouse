const container = document.querySelector('.container');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.iconClose');
const summit = document.querySelector('.btn');

registerLink.addEventListener('click', () => {
    container.classList.add('active');
});

loginLink.addEventListener('click', () => {
    container.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    container.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    container.classList.remove('active-popup');
});

btn.addEventListener('click', () => {
    const userName = document.getElementById('login-btn');
})
