window.addEventListener('DOMContentLoaded', () => { /* - загрузка страницы */
    const menu = document.querySelector('.menu'),  /* переменная с селектором меню */
    menuItem = document.querySelectorAll('.menu_item'), /* все селекторые меню item  */
    hamburger = document.querySelector('.hamburger'); /* сама кнопка */

    hamburger.addEventListener('click', () => { /* обработчик события при клике на кнопку */
        hamburger.classList.toggle('hamburger_active'); /* вкл/выкл класса hamburger_active */
        menu.classList.toggle('menu_active');/*  аналогично - появляется/убирается меню */
    });

    menuItem.forEach(item => { /* аналгочино для все элементов меню */
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
});
