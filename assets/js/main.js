/* ========================================
   AFMASA Website - Main JavaScript File
   ======================================== */

// DOM Elements
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
const scrollToTopBtn = document.querySelector('.scroll-to-top');
const header = document.querySelector('.header');
const contactForm = document.getElementById('contactForm');
const faqQuestions = document.querySelectorAll('.faq-question');
const filterTabs = document.querySelectorAll('.filter-tab');
const galleryItems = document.querySelectorAll('.gallery-item');
const lightboxModal = document.getElementById('lightboxModal');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxCaption = document.querySelector('.lightbox-caption');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');
const statNumbers = document.querySelectorAll('.stat-number');
const galleryContainer = document.querySelector('.gallery-grid')

let currentLightboxIndex = 0;
let filteredGalleryItems = [];

/* ========== HEADER SCROLL EFFECT ========== */
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header?.classList.add('scrolled');
    } else {
        header?.classList.remove('scrolled');        
    }
});

/* ========== MOBILE MENU TOGGLE ========== */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

/* ========== HERO SECTION PARALLAX ========== */

  const hero = document.querySelector('.hero');
  const video = document.querySelector('.hero-video');

  window.addEventListener('scroll', () => {
    const rect = hero.getBoundingClientRect();
    const scrollProgress = Math.min(Math.max(-rect.top / rect.height, 0), 1);

    video.style.transform = `translateY(${scrollProgress * 40}px)`;
  });



/* ========== SMOOTH SCROLL ========== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

/* ========== SCROLL TO TOP BUTTON ========== */
if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* ========== INTERSECTION OBSERVER FOR ANIMATIONS ========== */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.card, .focus-card, .benefit-card, .news-card, .event-card, .step-card, .office-card, .media-item').forEach(el => {
    el.style.animation = 'fadeIn 0s';
    observer.observe(el);
});

/* ========== CONTACT FORM HANDLING ========== */
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value.trim();
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            showFormMessage('Please fill in all required fields', 'error');
            return;
        }
        
        // Email validation
        if (!isValidEmail(email)) {
            showFormMessage('Please enter a valid email address', 'error');
            return;
        }
        
        // Success message (in production, this would send to a server)
        showFormMessage('Thank you for your message! We\'ll get back to you soon.', 'success');
        
        // Reset form
        contactForm.reset();
        
        // Clear message after 5 seconds
        setTimeout(() => {
            document.getElementById('formMessage').textContent = '';
            document.getElementById('formMessage').className = '';
        }, 5000);
    });
}

function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/* ========== FAQ ACCORDION ========== */
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all other FAQs
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Toggle current FAQ
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

/* ========== FILTER TABS ========== */
filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const filterValue = tab.getAttribute('data-filter');
        
        // Update active tab
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Filter items based on category
        if (galleryItems.length > 0) {
            filterGalleryItems(filterValue);
        } else {
            filterEventItems(filterValue);
        }
    });
});

function filterGalleryItems(filter) {
    galleryItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
            item.style.display = 'block';
            item.style.animation = 'fadeIn 0.5s ease';
        } else {
            item.style.display = 'none';
        }
    });
    
    filteredGalleryItems = Array.from(galleryItems).filter(item => 
        item.style.display !== 'none'
    );
}

function filterEventItems(filter) {
    document.querySelectorAll('.event-item').forEach(item => {
        if (filter === 'all' || item.classList.contains(filter)) {
            item.style.display = 'block';
            item.style.animation = 'fadeIn 0.5s ease';
        } else {
            item.style.display = 'none';
        }
    });
}

/* ========== GALLERY LIGHTBOX ========== */
if (galleryItems.length > 0) {
    galleryItems.forEach((item, index) => {
        const zoomBtn = item.querySelector('.gallery-zoom');
        if (zoomBtn) {
            zoomBtn.addEventListener('click', () => {
                filteredGalleryItems = Array.from(galleryItems).filter(g => 
                    g.style.display !== 'none'
                );
                currentLightboxIndex = filteredGalleryItems.indexOf(item);
                openLightbox();
            });
        }
    });

    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', showPreviousImage);
    }

    if (lightboxNext) {
        lightboxNext.addEventListener('click', showNextImage);
    }

    // Close lightbox on background click
    if (lightboxModal) {
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) {
                closeLightbox();
            }
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightboxModal && lightboxModal.classList.contains('active')) {
            if (e.key === 'ArrowLeft') showPreviousImage();
            if (e.key === 'ArrowRight') showNextImage();
            if (e.key === 'Escape') closeLightbox();
        }
    });
}

function openLightbox() {
    if (filteredGalleryItems.length === 0) return;
    
    const item = filteredGalleryItems[currentLightboxIndex];
    const img = item.querySelector('img');
    const caption = item.querySelector('.gallery-caption');
    
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightboxCaption.textContent = caption.textContent;
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function showNextImage() {
    currentLightboxIndex = (currentLightboxIndex + 1) % filteredGalleryItems.length;
    openLightbox();
}

function showPreviousImage() {
    currentLightboxIndex = (currentLightboxIndex - 1 + filteredGalleryItems.length) % filteredGalleryItems.length;
    openLightbox();
}

/* ========== ANIMATED COUNTERS ========== */
function animateCounters() {
    statNumbers.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 50);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current >= target) {
                counter.textContent = target;
            } else {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            }
        };

        updateCounter();
    });
}

// Animate counters when they come into view
if (statNumbers.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.textContent === '0') {
                animateCounters();
                counterObserver.unobserve(entry.target.parentElement);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(counter => {
        counterObserver.observe(counter.parentElement);
    });
}

/* ========== EMAIL NEWSLETTER FORM ========== */
document.querySelectorAll('.email-form, .newsletter-form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]');
        
        if (email && isValidEmail(email.value)) {
            alert('Thank you for subscribing! Check your email for confirmation.');
            email.value = '';
        } else if (email) {
            alert('Please enter a valid email address.');
        }
    });
});

/* ========== TOGGLE BUTTONS (General) ========== */
document.querySelectorAll('[data-toggle]').forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-toggle');
        const target = document.getElementById(targetId);
        if (target) {
            target.classList.toggle('active');
        }
    });
});

/* ========== HEADER SHADOW ON SCROLL ========== */
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
        if (window.pageYOffset > 0) {
            header.style.boxShadow = '0 4px 12px rgba(0, 51, 102, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 4px rgba(0, 51, 102, 0.1)';
        }
    }
});

/* ========== LAZY LOADING IMAGES ========== */
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

/* ========== DYNAMIC PAGE TITLE UPDATE ========== */
function updatePageTitle() {
    const path = window.location.pathname;
    const fileName = path.split('/').pop() || 'index.html';
    
    const titleMap = {
        'index.html': 'AFMASA - Africa Federation of Mining & Supply Associations',
        'about.html': 'About AFMASA',
        'membership.html': 'Membership - AFMASA',
        'events.html': 'Events - AFMASA',
        'news.html': 'News & Media - AFMASA',
        'gallery.html': 'Gallery - AFMASA',
        'contact.html': 'Contact - AFMASA'
    };
    
    // Document title is already set in HTML, but this could be used for other purposes
}

updatePageTitle();

/* ========== FORM VALIDATION HELPER ========== */
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#dc3545';
        } else {
            input.style.borderColor = '';
        }
    });

    return isValid;
}

/* ========== RESET FORM STYLES ========== */
document.querySelectorAll('input, textarea, select').forEach(input => {
    input.addEventListener('focus', function() {
        this.style.borderColor = '';
    });
});

/* ========== ACTIVE NAV LINK HIGHLIGHT ========== */
function updateActiveNavLink() {
    const currentPath = window.location.pathname;
    const fileName = currentPath.split('/').pop() || 'index.html';

    document.querySelectorAll('.nav-menu a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === fileName || (fileName === '' && href === 'index.html')) {
            link.style.color = 'var(--secondary)';
        }
    });
}

document.addEventListener('DOMContentLoaded', updateActiveNavLink);

/* ========== ACCESSIBILITY: SKIP TO MAIN CONTENT ========== */
const skipLink = document.createElement('a');
skipLink.href = '#main';
skipLink.textContent = 'Skip to main content';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: #000;
    color: #fff;
    padding: 8px;
    text-decoration: none;
    z-index: 100;
`;

skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});

skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});

document.body.appendChild(skipLink);

/* ========== PRINT STYLES INITIALIZATION ========== */
window.addEventListener('beforeprint', () => {
    document.body.style.backgroundColor = '#fff';
});

/* ========== PERFORMANCE: DEBOUNCE SCROLL EVENTS ========== */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/* ========== UTILITY: GET COOKIE ========== */
function getCookie(name) {
    const nameEQ = name + '=';
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.indexOf(nameEQ) === 0) {
            return decodeURIComponent(cookie.substring(nameEQ.length));
        }
    }
    return null;
}

/* ========== UTILITY: SET COOKIE ========== */
function setCookie(name, value, days = 365) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/`;
}

/* ========== INITIALIZATION ========== */
document.addEventListener('DOMContentLoaded', () => {
    console.log('AFMASA Website loaded successfully');
    
    // Initialize all interactive elements
    initializeInteractiveElements();
});

function initializeInteractiveElements() {
    // Add smooth transitions to all elements with data-animate attribute
    document.querySelectorAll('[data-animate]').forEach(el => {
        el.style.animation = `${el.getAttribute('data-animate')} 0.6s ease-out`;
    });

    // Initialize all tooltips if Bootstrap or similar is used
    // This is a placeholder for future enhancement
}

/* ========== EXPORT FUNCTIONS FOR EXTERNAL USE ========== */
window.AFMASA = {
    getCookie,
    setCookie,
    isValidEmail,
    debounce,
    validateForm
};

console.log('AFMASA JavaScript utilities loaded. Access via window.AFMASA');
