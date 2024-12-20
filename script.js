document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to my portfolio!");

    // Scroll to top on reload
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };

    // Smooth scroll for navigation links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
