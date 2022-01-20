let show = true

const menuSection = document.querySelector(".nav__menu")
const menuBurguer = document.querySelector('#burguer')

menuBurguer.addEventListener('click', () => {
    menuSection.classList.toggle("on", show)
    show = !show
})

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)


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
