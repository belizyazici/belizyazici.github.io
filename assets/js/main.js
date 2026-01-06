/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
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

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}


modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})
/*==================== PORTFOLIO SWIPER  ====================*/
function toggleLink(el, url) {
    if (url && url.trim() !== "") {
        el.href = url;
        el.style.display = "inline-flex";
    } else {
        el.style.display = "none";
    }
}

/*new*/
const ml = document.getElementById("customModal");

document.querySelectorAll(".portfolio__button").forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault();

        const card = btn.closest(".portfolio__content");

        document.getElementById("customModalTitle").innerText =
            card.querySelector(".portfolio__title").innerText;

        document.getElementById("customModalDescription").innerText =
            btn.dataset.modalDescription;

        document.getElementById("customModalImage").src =
            btn.dataset.image;

        // 🔥 ICON ELEMENTLERİ
        const yt = document.getElementById("customModalYoutube");
        const gh = document.getElementById("customModalGithub");
        const ln = document.getElementById("customModalLinkedin");

        // 🔥 AÇ / KAPA KONTROLÜ (İŞTE BURASI)
        toggleLink(yt, btn.dataset.youtube);
        toggleLink(gh, btn.dataset.github);
        toggleLink(ln, btn.dataset.linkedin);

        ml.classList.add("active");
    });
});



document.querySelector(".custom-modal__close").onclick = () => {
    ml.classList.remove("active");
};

ml.onclick = e => {
    if (e.target === ml) ml.classList.remove("active");
};




const filters = document.querySelectorAll(".portfolio__filter");
const items = document.querySelectorAll(".portfolio__content");

filters.forEach(filter => {
    filter.addEventListener("click", () => {
        filters.forEach(f => f.classList.remove("active-filter"));
        filter.classList.add("active-filter");

        const value = filter.getAttribute("data-filter");

        items.forEach(item => {
            if (value === "all" || item.dataset.category.includes(value)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});

/*
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
    mousewheel: true,
    keyboard: true,
});*/


// Close Modal when clicking outside of the modal content
/*
window.addEventListener("click", function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
});*/

function openModal(data) {
    document.getElementById("customModalTitle").innerText = data.title;
    document.getElementById("customModalDescription").innerText = data.description;
    document.getElementById("customModalImage").src = data.image;

    const yt = document.getElementById("customModalYoutube");
    const gh = document.getElementById("customModalGithub");
    const ln = document.getElementById("customModalLinkedin");

    // YouTube
    if (data.youtube) {
        yt.href = data.youtube;
        yt.style.display = "inline-flex";
    } else {
        yt.style.display = "none";
    }

    // GitHub
    if (data.github) {
        gh.href = data.github;
        gh.style.display = "inline-flex";
    } else {
        gh.style.display = "none";
    }

    // LinkedIn
    if (data.linkedin) {
        ln.href = data.linkedin;
        ln.style.display = "inline-flex";
    } else {
        ln.style.display = "none";
    }

    document.getElementById("customModal").style.display = "flex";
}





/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        568: {
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
function scrollHeader() {
    const nav = document.getElementById('header')
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')

}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    console.log("scrolling", window.scrollY);

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

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'


if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}


themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})