let burger_btn = document.querySelector('.burger_btn');
let menu = document.querySelector('.menu');
let menu_close = document.querySelector('.menu_close');

burger_btn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

menu_close.addEventListener('click', () => {
    menu.classList.remove('active')
})