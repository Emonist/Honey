document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Handle potential offset for fixed header
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const headerOffset = document.querySelector('header').offsetHeight; // Get header height
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset - 20; // Add some extra padding

            window.scrollTo({
                 top: offsetPosition,
                 behavior: "smooth"
            });

            // Close mobile menu after clicking a link
            if (document.body.classList.contains('nav-open')) {
                document.body.classList.remove('nav-open');
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
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
                panel.style.maxHeight = panel.scrollHeight + 'px'; // Expand the panel dynamically
            }
        });
    });

    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();


    // Scroll Reveal Animation (similar to Olympus effect)
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Percentage of element visible to trigger
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    scrollRevealElements.forEach(el => {
        observer.observe(el);
    });

    // Initial check for elements already in view on load
    scrollRevealElements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('active');
        }
    });
});
