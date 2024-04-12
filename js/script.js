document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('nav');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            navbar.classList.add('navbar-transparent');
        } else {
            navbar.classList.remove('navbar-transparent');
        }
    });
});
