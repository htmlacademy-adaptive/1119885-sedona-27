let header = document.querySelector('.header')
let nav = document.querySelector('.navigation')

header.classList.remove('header--no-js')
nav.classList.remove('navigation--no-js')

let navButton = document.querySelector('.navigation__menu-button')
let navList = document.querySelector('.navigation__list')

navButton.addEventListener('click', function() {
    navList.classList.toggle('navigation__list--opened')
})
