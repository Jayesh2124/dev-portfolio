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
    selectors: {
        target: '.mix'
    },
    animation: {
        duration: 300,
    }
})
/* Active work */

const linkWork = document.querySelectorAll('.work-item');
function activeWork() {
    linkWork.forEach((a) => {
        a.classList.remove('active-work')
    })
    this.classList.add('active-work');
}
linkWork.forEach((a) => a.addEventListener('click', activeWork))
/*=============== RESUME ===============*/

const accordionItems = document.querySelectorAll('.resume-item');

accordionItems.forEach((item) => {
    const header = item.querySelector('.resume-header'),
        content = item.querySelector('.resume-content'),
        icon = item.querySelector('.resume-icon i')
    header.addEventListener('click', () => {
        const isOpen = item.classList.toggle('accordion-open');
        content.style.height = isOpen ? content.scrollHeight + 'px' : '0';
        icon.className = isOpen ? 'ri-subtract-line' : 'ri-add-line';

        accordionItems.forEach((other) => {
            if (other !== item && other.classList.contains('accordion-open')) {
                other.querySelector('.resume-content').style.height = '0';
                other.querySelector('.resume-icon i').classList = 'ri-add-line';
                other.classList.remove('accordion-open');
            }
        })
    })
})


/*=============== TESTIMONIALS SWIPER ===============*/
var servicesSwiper = new Swiper('.testimonial-swiper', {
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
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form')
contactName = document.getElementById('contact-name'),
    contactMessage = document.getElementById('contact-message'),
    email = document.getElementById('contact-email'),
    subject = document.getElementById('contact-subject'),
    message = document.getElementById('message');

const sendEmail = (e) => {
    e.preventDefault();
    if (contactName.value === '' || email.value === '' || subject.value === '' || contactMessage === '') {
        message.classList.remove('color-first');
        message.classList.add('color-red');
        message.textContent = 'Write all input fields'

        setTimeout(() => {
            message.textContent = ''
        }, 3000)
    }
    else {
        emailjs.sendForm('service_j88vsws', 'template_kr507ap', '#contact-form', '0JAGhXl3bthBKfcDx').then(
            (response) => {
                message.classList.add('color-first');
                message.textContent = "Message Sent ✔"
                setTimeout(() => {
                    message.textContent = ''
                }, 5000)

                console.log('SUCCESS!', response.status, response.text);
            },
            (error) => {
                alert('Oops! Something Went Wrong..',error);
                console.log('FAILED...', error);
            },
        );
        contactName.val = '';
        email.val = '';
        subject.val = '';
        contactMessage.val = '';
    }
}

contactForm.addEventListener('submit', sendEmail);
/*=============== STYLE SWITCHER ===============*/

/* Switcher show */

/* Switcher hidden */

/*=============== THEME COLORS ===============*/

/*=============== LIGHT/DARK MODE ===============*/
