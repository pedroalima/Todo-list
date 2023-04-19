// Váriavel
const buttonTheme = document.querySelector('#buttonTheme');

// Evento
buttonTheme.addEventListener('click', () => {
    const pageHtml = document.querySelector('html');
    pageHtml.classList.toggle('dark-theme');
});