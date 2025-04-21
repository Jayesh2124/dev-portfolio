/*=============== MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle');

/* Menu show - hidden */
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
    navToggle.classList.toggle('animate-toggle');
})
/*=============== REMOVE MENU MOBILE ===============*/

/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SERVICES SWIPER ===============*/
var servicesSwiper = new Swiper('.services-swiper', {
    spaceBetween: 32,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }, 
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
/*=============== MIXITUP FILTER PORTFOLIO ===============*/
var mixer = mixitup('.work-container', {
    selectors:{
        target:'.mix'
    },
    animation:{
        duration:300,
    }
})
/* Active work */

const linkWork = document.querySelectorAll('.work-item');
function activeWork()
{
    linkWork.forEach((a)=>{
        a.classList.remove('active-work')
    })
    this.classList.add('active-work');
}
linkWork.forEach((a)=> a.addEventListener('click', activeWork))
/*=============== RESUME ===============*/

/*=============== TESTIMONIALS SWIPER ===============*/

/*=============== EMAIL JS ===============*/

/*=============== STYLE SWITCHER ===============*/

/* Switcher show */

/* Switcher hidden */

/*=============== THEME COLORS ===============*/

/*=============== LIGHT/DARK MODE ===============*/
