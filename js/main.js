let show = true

const menuSection = document.querySelector(".nav__menu")
const menuBurguer = document.querySelector('#burguer')

menuBurguer.addEventListener('click', () => {
    menuSection.classList.toggle("on", show)
    show = !show
})

