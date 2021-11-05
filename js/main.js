/* Adiciona class overed em item seleciondo da lista */
let list = document.querySelectorAll('.nav li');
function linkActive() {
    list.forEach((item) =>
        item.classList.remove('hovered'));
    this.classList.add('hovered');
}
list.forEach((item) =>
    item.addEventListener('mouseover', linkActive));

/* Menu toggle */
let toggle = document.querySelector('.toggle'),
    nav = document.querySelector('.nav'),
    main = document.querySelector('.main');
toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    main.classList.toggle('active');
})