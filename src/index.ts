import './styles/main.scss';

// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener('click', function(e) {
        iconMenu!.classList.toggle('__active')
        menuBody!.classList.toggle('__active')
    });
}

