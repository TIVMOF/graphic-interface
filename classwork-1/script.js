document.querySelector('.hamburger').addEventListener('click',() => {
    const menu = document.querySelector('.menu-list');
    menu.classList.toggle('show');
});

var isDark = true;

const button = document.getElementById('theme-toggle');
const body = document.getElementById('body');

button.addEventListener('click', () => {
    if (isDark) {
        body.setAttribute("background-color", "#ffffff");
        isDark = false;
    } else {
        body.setAttribute("background-color", "#000000");
        isDark = true;
    }
});