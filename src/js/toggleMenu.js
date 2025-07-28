const btn = document.querySelector('.toggle-menu__btn')

if (btn) {
    btn.addEventListener('click', toogleMenu)
}

function toogleMenu(event) {
    const toggleMenu = document.querySelector('.toggle-menu__body')

    event.currentTarget.classList.toggle('toggle-menu__btn--active')

    if (toggleMenu) {
        toggleMenu.classList.toggle('toggle-menu__body--active')
    }
}
