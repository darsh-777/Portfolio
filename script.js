// Custom JavaScript for portfolio

// Typing animation for hero title
const heroTitle = document.querySelector('.hero-title');
const text = "Hi, I'm Darshan Pansare";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        heroTitle.innerHTML = text.substring(0, i + 1) + '<span class="cursor">|</span>';
        i++;
        setTimeout(typeWriter, 100);
    } else {
        // Remove cursor after typing
        setTimeout(() => {
            heroTitle.innerHTML = text;
        }, 1000);
    }
}

// Navbar color change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('bg-primary');
        navbar.classList.remove('bg-transparent');
    } else {
        navbar.classList.add('bg-transparent');
        navbar.classList.remove('bg-primary');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbar = document.querySelector('.navbar');
            const offset = navbar.offsetHeight;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handler
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Basic form validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            alert('Thank you for your message! I\'ll get back to you soon.');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-primary');
        navbar.classList.remove('bg-transparent');
    } else {
        navbar.classList.add('bg-transparent');
        navbar.classList.remove('bg-primary');
    }
});

// Initialize AOS
AOS.init();