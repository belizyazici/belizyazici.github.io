/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-mwnu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }

    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active');
        });

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active');
        });

        target.classList.add('qualification__active');

        tab.classList.add('qualification__active');
    });
});
     
/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}


modalBtns.forEach((modalBtn, i) =>{
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})
/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',    
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    mousewheel:true,
    keyboard: true,
});

document.addEventListener("DOMContentLoaded", () => {
    // Modal Elements
const modal2 = document.getElementById("portfolioModal");
const modalClose2 = document.querySelector(".modal-close");
const portfolioButtons = document.querySelectorAll(".portfolio__button");

// Open Modal
portfolioButtons.forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        const projectTitle = this.parentElement.querySelector(".portfolio__title").innerText;
        const projectDescription = this.getAttribute("data-modal-description");
        const projectImage = this.getAttribute("data-image");
        const projectLink = this.getAttribute("data-link");
        const projectLink2 = this.getAttribute("data-link2");

        modal2.querySelector(".modal-title").innerText = projectTitle;
        modal2.querySelector(".modal-description").innerText = projectDescription;
        modal2.querySelector(".modal-image").src = projectImage;
        modal2.querySelector(".modal-image").style.display = "block";
        
        const modalLink = modal2.querySelector(".modal-link");
        modalLink.href = projectLink;
        modalLink.style.display = "block";
        
        const modalLink2 = modal2.querySelector(".modal-link2");
        modalLink2.href = projectLink2;
        modalLink2.style.display = "block";

        modal2.style.display = "block";
    });
});

// Close Modal
modalClose2.addEventListener("click", function() {
    modal2.style.display = "none";
});

// Close Modal when clicking outside of the modal content
window.addEventListener("click", function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
});
    });

    // Close Modal when clicking outside of the modal content
    window.addEventListener("click", function(event) {
        if (event.target == modal2) {
            modal2.style.display = "none";
        }
});






/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween:48,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// script.js
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__link[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__link[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
        
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');

    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
        
    else scrollUp.classList.remove('show-scroll');
    
}

window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('seleceted-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTime = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'


if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}


themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selevted-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})