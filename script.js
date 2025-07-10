document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Close mobile menu after clicking a link
            if (document.body.classList.contains('nav-open')) {
                document.body.classList.remove('nav-open');
                document.querySelector('.hamburger').classList.remove('active');
                document.querySelector('.nav-links').classList.remove('active');
            }
        });
    });

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        document.body.classList.toggle('nav-open'); // Add a class to body to prevent scroll
    });

    // Accordion functionality for features
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', function() {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null; // Collapse the panel
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px'; // Expand the panel
            }
        });
    });

    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});
