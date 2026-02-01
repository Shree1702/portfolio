// ===== DOM Elements =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const backToTop = document.getElementById('backToTop');
const typedText = document.getElementById('typed-text');

// ===== Typing Effect =====
const titles = [
    'Software Developer',
    'Flutter Developer',
    'Python Developer',
    'AI/ML Enthusiast',
    'Full Stack Developer'
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
        typedText.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typedText.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentTitle.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        typingSpeed = 500; // Pause before next word
    }

    setTimeout(typeEffect, typingSpeed);
}

// Start typing effect
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeEffect, 1000);
});

// ===== Navbar Scroll Effect =====
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add/remove scrolled class
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Show/hide back to top button
    if (currentScroll > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }

    lastScroll = currentScroll;
});

// ===== Mobile Navigation =====
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = navToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = navToggle.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// ===== Active Navigation Link =====
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ===== Back to Top =====
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Animate stat numbers
            if (entry.target.classList.contains('stat')) {
                animateNumber(entry.target.querySelector('.stat-number'));
            }
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.querySelectorAll('.skill-category, .timeline-item, .project-card, .publication-card, .contact-item, .stat').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ===== Number Animation =====
function animateNumber(element) {
    if (!element || element.dataset.animated) return;

    const target = parseInt(element.dataset.count);
    const duration = 1500;
    const step = target / (duration / 16);
    let current = 0;

    element.dataset.animated = 'true';

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Project Cards Tilt Effect =====
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ===== Skill Tags Hover Animation =====
const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach((tag, index) => {
    tag.style.animationDelay = `${index * 0.05}s`;
});

// ===== Console Easter Egg =====
console.log(`
%c  ____  _          _ _              _
%c / ___|| |__  _ __(_) | ____ _ _ __ | |_
%c \\___ \\| '_ \\| '__| | |/ / _\` | '_ \\| __|
%c  ___) | | | | |  | |   < (_| | | | | |_
%c |____/|_| |_|_|  |_|_|\\_\\__,_|_| |_|\\__|
%c
%c Welcome to my portfolio! 👋
%c Looking for a passionate developer? Let's connect!
%c Email: shrikantdipakdharmal@gmail.com
`,
'color: #6366f1; font-weight: bold;',
'color: #818cf8; font-weight: bold;',
'color: #a5b4fc; font-weight: bold;',
'color: #818cf8; font-weight: bold;',
'color: #6366f1; font-weight: bold;',
'',
'color: #10b981; font-size: 14px;',
'color: #94a3b8; font-size: 12px;',
'color: #94a3b8; font-size: 12px;'
);

// ===== Preloader (Optional) =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===== Form Submission (if you add a contact form later) =====
function handleFormSubmit(e) {
    e.preventDefault();
    // Add your form handling logic here
    // Example: Send to Formspree, Netlify Forms, or your backend
}

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    // Trigger initial scroll check
    highlightNavLink();

    // Add loaded class to body
    setTimeout(() => {
        document.body.classList.add('ready');
    }, 100);
});
