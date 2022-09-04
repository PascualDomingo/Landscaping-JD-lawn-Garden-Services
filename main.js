
window.sr = ScrollReveal();
sr.reveal('.navbar', {
    duration: 2000, origin: 'bottom'
});
sr.reveal('.info-left', {
    duration: 2000, origin: 'top', distance: '300px'
});
sr.reveal('.info-right', {
    duration: 2000, origin: 'right', distance: '300px'
});
sr.reveal('#About', {
    duration: 2000, origin: 'left', distance: '300px'
});
sr.reveal('.col-md-3', {
    duration: 2000, origin: 'top', distance: '300px'
});
sr.reveal('#home', {
    duration: 2000, origin: 'left', distance: '300px'
});
sr.reveal('#contact', {
    duration: 2000, origin: 'top', distance: '300px'
});
sr.reveal('#portada', {
    duration: 2000, origin: 'top', distance: '300px'
});
sr.reveal('#servicio', {
    duration: 2000, origin: 'left', distance: '300px'
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});