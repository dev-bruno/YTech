/*---------------------------------------------------------------------------

Enables parallax effect on images 

*/
window.addEventListener('scroll', function () {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.pageYOffset;

    parallax.style.backgroundPositionY = -scrollPosition * 0.2 + 'px';
});


/*---------------------------------------------------------------------------

Validates the form activating other fields if email is valid 

*/
let emailInput = document.getElementById('email');
let nameInput = document.getElementById('name');
let messageInput = document.getElementById('message');
let subjectInput = document.getElementById('subject');

emailInput.addEventListener('input', function () {
    if (emailInput.checkValidity()) {
        nameInput.disabled = false;
        messageInput.disabled = false;
        subjectInput.disabled = false;
    } else {
        nameInput.disabled = true;
        messageInput.disabled = true;
        subjectInput.disabled = true;
    }
});


/*---------------------------------------------------------------------------

Smooth scroll to any part of DOM

*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



/*---------------------------------------------------------------------------

Back to top button

*/
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', function () {
    let scrollToTopBtn = document.getElementById('button_back_to_top');
    let scrollY = window.scrollY;

    if (scrollY > 20) {
        scrollToTopBtn.classList.add('show');
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.classList.remove('show');
        scrollToTopBtn.style.display = 'none';
    }
});



/*---------------------------------------------------------------------------

Fixed navbar

*/
window.addEventListener('scroll', function () {
    let header = document.getElementById('header');
    let scrollY = window.scrollY;

    if (scrollY > 20) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});










function toggleMenu() {
    const menu = document.getElementById('menu');
    const burgerMenu = document.querySelector('.burger-menu');
    burgerMenu.classList.toggle('active');
    menu.classList.toggle('active');
}