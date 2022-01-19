let show = true

const menuSection = document.querySelector(".nav__menu")
const menuBurguer = document.querySelector('#burguer')

menuBurguer.addEventListener('click', () => {
    menuSection.classList.toggle("on", show)
    show = !show
})


/* ====== SCROLL ANIMAÇÃO ===== */

const sr = ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: true,
});

sr.reveal(`.content`, {
    origin: 'top',
    interval: 200,
})

sr.reveal(`.home-content, .newsletter-content`, {
    origin: 'left'
})

sr.reveal(`.delivery-content`, {
    origin: 'right'
})
