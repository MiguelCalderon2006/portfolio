document.addEventListener('DOMContentLoaded', function () {
    let hamburger = document.querySelector('#hamburger');
    let mobileMenu = document.querySelector('#menu');

    hamburger.addEventListener('click', function () {
        menu.classList.toggle('hidden');
    });
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const sectionID = this.getAttribute('href');
        const section = document.querySelector(sectionID);

        section.scrollIntoView({ behavior: 'smooth' });
    });
});