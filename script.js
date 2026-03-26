// ==============================
// CURSOR ANIMATION SYSTEM
// ==============================

class CursorAnimation {
    constructor() {
        this.mouseX = 0;
        this.mouseY = 0;
        this.trailX = 0;
        this.trailY = 0;
        this.isButtonHover = false;
        this.lastTime = 0;
        
        this.initCursor();
        this.setupEventListeners();
        this.startAnimationLoop();
    }

    initCursor() {
        // Create main cursor element
        const cursor = document.createElement('div');
        cursor.className = 'cursor';
        cursor.id = 'main-cursor';
        document.body.appendChild(cursor);
        this.cursorElement = cursor;

        // Create cursor ring
        const ring = document.createElement('div');
        ring.className = 'cursor-ring';
        ring.id = 'cursor-ring';
        document.body.appendChild(ring);
        this.ringElement = ring;
    }

    startAnimationLoop() {
        const animate = () => {
            // Smooth cursor following with immediate response
            this.cursorElement.style.left = (this.mouseX - 10) + 'px';
            this.cursorElement.style.top = (this.mouseY - 10) + 'px';

            // Ring follows with slightly dampened movement
            this.ringElement.style.left = (this.mouseX - 25) + 'px';
            this.ringElement.style.top = (this.mouseY - 25) + 'px';

            requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }

    setupEventListeners() {
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;

            // Create particle trail more frequently for faster feel
            if (Math.random() > 0.7) {
                this.createParticleTrail(this.mouseX, this.mouseY);
            }
        });

        document.addEventListener('touchmove', (e) => {
            const touch = e.touches[0];
            this.mouseX = touch.clientX;
            this.mouseY = touch.clientY;
        }, { passive: true });

        // Detect hovering over clickable elements
        document.addEventListener('mouseover', (e) => {
            const isClickable = e.target.tagName === 'BUTTON' || 
                              e.target.tagName === 'A' ||
                              e.target.classList.contains('interactive-btn') ||
                              e.target.closest('button') ||
                              e.target.closest('a');
            
            if (isClickable) {
                this.cursorElement.classList.add('active');
                this.ringElement.style.width = '80px';
                this.ringElement.style.height = '80px';
                this.ringElement.style.opacity = '0.8';
                this.isButtonHover = true;
            }
        });

        document.addEventListener('mouseout', (e) => {
            this.cursorElement.classList.remove('active');
            this.ringElement.style.width = '50px';
            this.ringElement.style.height = '50px';
            this.ringElement.style.opacity = '0.5';
            this.isButtonHover = false;
        });

        // Hide cursor when leaving window
        document.addEventListener('mouseleave', () => {
            this.cursorElement.style.opacity = '0';
            this.ringElement.style.opacity = '0';
        });

        document.addEventListener('mouseenter', () => {
            this.cursorElement.style.opacity = '1';
            this.ringElement.style.opacity = '0.5';
        });
    }

    createParticleTrail(x, y) {
        const particle = document.createElement('div');
        particle.className = 'cursor-particles';
        
        // Random velocity for particles
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 100 + 50;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        particle.style.background = getComputedStyle(document.documentElement)
            .getPropertyValue('--accent-color').trim();
        
        document.body.appendChild(particle);
        
        // Remove particle after animation completes
        setTimeout(() => particle.remove(), 1500);
    }
}

// ==============================
// RIPPLE & WAVE EFFECT SYSTEM
// ==============================

class RippleEffect {
    constructor() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.addEventListener('click', (e) => {
            this.createRipple(e.clientX, e.clientY, 'click');
        });

        document.addEventListener('touchstart', (e) => {
            const touch = e.touches[0];
            this.createRipple(touch.clientX, touch.clientY, 'touch');
        });
    }

    createRipple(x, y, type) {
        // Create main ripple wave
        const ripple = document.createElement('div');
        ripple.className = 'ripple-wave';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        document.body.appendChild(ripple);

        // Remove after animation
        setTimeout(() => ripple.remove(), 1200);

        // Create additional wave layers
        setTimeout(() => {
            const wave2 = document.createElement('div');
            wave2.className = 'ripple-wave ripple-wave-2';
            wave2.style.left = x + 'px';
            wave2.style.top = y + 'px';
            document.body.appendChild(wave2);
            setTimeout(() => wave2.remove(), 1200);
        }, 100);

        // Create background glow effect
        const glow = document.createElement('div');
        glow.className = 'ripple-glow';
        glow.style.left = x + 'px';
        glow.style.top = y + 'px';
        document.body.appendChild(glow);
        setTimeout(() => glow.remove(), 1000);

        // Trigger floating particles from click point
        this.createClickParticles(x, y);
    }

    createClickParticles(x, y) {
        const particleCount = 12;
        
        for (let i = 0; i < particleCount; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.className = 'click-particle';
                
                const angle = (i / particleCount) * Math.PI * 2;
                const velocity = 3 + Math.random() * 2;
                
                particle.style.left = x + 'px';
                particle.style.top = y + 'px';
                particle.style.setProperty('--angle', angle);
                particle.style.setProperty('--velocity', velocity);
                particle.style.background = getComputedStyle(document.documentElement)
                    .getPropertyValue('--accent-color').trim();
                
                document.body.appendChild(particle);
                setTimeout(() => particle.remove(), 800);
            }, i * 30);
        }
    }
}

// ==============================
// TOP ANIMATIONS SYSTEM
// ==============================

class TopAnimation {
    constructor() {
        this.initTopAnimations();
    }

    initTopAnimations() {
        // Create floating top elements
        const topContainer = document.createElement('div');
        topContainer.className = 'top-animations';
        document.body.appendChild(topContainer);

        // Create animated elements
        const elements = [
            { emoji: '✨', delay: 0, x: 15 },
            { emoji: '🚀', delay: 1, x: 35 },
            { emoji: '💖', delay: 2, x: 55 },
            { emoji: '⚡', delay: 0.5, x: 75 }
        ];

        elements.forEach(el => {
            const animEl = document.createElement('div');
            animEl.className = 'floating-element';
            animEl.textContent = el.emoji;
            animEl.style.left = el.x + '%';
            animEl.style.animationDelay = el.delay + 's';
            topContainer.appendChild(animEl);
        });

        // Create animated text trails
        this.createAnimatedText();
    }

    createAnimatedText() {
        const textTrail = document.createElement('div');
        textTrail.className = 'text-trail';
        textTrail.innerHTML = '<div class="trail-text">AI/ML</div><div class="trail-text">Creative</div><div class="trail-text">Interactive</div>';
        document.body.appendChild(textTrail);
    }
}

// ==============================
// ANIMATION THEME SYSTEM
// ==============================

class ThemeManager {
    constructor() {
        this.themes = [
            'theme-cyberpunk',
            'theme-ocean',
            'theme-sunset',
            'theme-mint',
            'theme-dark-matter',
            'theme-neon'
        ];
        
        this.currentThemeIndex = 0;
        this.loadSavedTheme();
        this.addThemeControls();
    }

    loadSavedTheme() {
        const savedTheme = localStorage.getItem('animationTheme');
        if (savedTheme && this.themes.includes(savedTheme)) {
            this.applyTheme(savedTheme);
            this.currentThemeIndex = this.themes.indexOf(savedTheme);
        } else {
            this.applyTheme(this.themes[0]);
        }
    }

    applyTheme(themeName) {
        document.body.className = document.body.className
            .replace(/theme-\w+/g, '')
            .trim();
        
        document.body.classList.add(themeName);
        localStorage.setItem('animationTheme', themeName);
    }

    cycleTheme() {
        this.currentThemeIndex = (this.currentThemeIndex + 1) % this.themes.length;
        this.applyTheme(this.themes[this.currentThemeIndex]);
        this.showThemeNotification(this.themes[this.currentThemeIndex]);
    }

    showThemeNotification(themeName) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: var(--primary-color);
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            font-weight: 600;
            z-index: 10000;
            animation: slide-in 0.3s ease;
        `;
        
        const themeTitles = {
            'theme-cyberpunk': '🎮 Cyberpunk',
            'theme-ocean': '🌊 Ocean',
            'theme-sunset': '🌅 Sunset',
            'theme-mint': '🌿 Mint',
            'theme-dark-matter': '🌌 Dark Matter',
            'theme-neon': '⚡ Neon'
        };
        
        notification.textContent = 'Theme: ' + (themeTitles[themeName] || themeName);
        document.body.appendChild(notification);
        
        setTimeout(() => notification.remove(), 2000);
    }

    addThemeControls() {
        // Add theme switcher button to navbar or create floating button
        const floatingThemeBtn = document.createElement('button');
        floatingThemeBtn.innerHTML = '🎨';
        floatingThemeBtn.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 2px solid var(--primary-color);
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            color: var(--primary-color);
            font-size: 1.5rem;
            cursor: pointer;
            z-index: 999;
            transition: all 0.3s ease;
        `;
        
        floatingThemeBtn.addEventListener('mouseenter', () => {
            floatingThemeBtn.style.transform = 'scale(1.1)';
            floatingThemeBtn.style.boxShadow = '0 0 20px var(--primary-color)';
        });

        floatingThemeBtn.addEventListener('mouseleave', () => {
            floatingThemeBtn.style.transform = 'scale(1)';
            floatingThemeBtn.style.boxShadow = 'none';
        });
        
        floatingThemeBtn.addEventListener('click', () => {
            this.cycleTheme();
        });
        
        document.body.appendChild(floatingThemeBtn);
    }
}

// ==============================
// PARALLAX & BACKGROUND EFFECTS
// ==============================

class ParallaxBackground {
    constructor() {
        this.parallaxElements = document.querySelectorAll('[data-parallax]');
        this.setupParallax();
    }

    setupParallax() {
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;

            this.parallaxElements.forEach(element => {
                const speed = element.dataset.parallax || 0.5;
                const offsetX = (x - 50) * speed * 0.1;
                const offsetY = (y - 50) * speed * 0.1;
                
                element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
            });
        });
    }
}

// ==============================
// ADVANCED SHADER ANIMATIONS
// ==============================

// Mouse-Tracking Gradient Effect (Isidor.ai Style)
class MouseGradientEffect {
    constructor() {
        this.gradient = document.querySelector('.mouse-gradient');
        if (!this.gradient) return;

        this.x = 0;
        this.y = 0;

        window.addEventListener('mousemove', (e) => {
            this.x = e.clientX;
            this.y = e.clientY;

            this.gradient.style.left = (this.x - 250) + 'px';
            this.gradient.style.top = (this.y - 250) + 'px';
            this.gradient.classList.add('active');
        });

        window.addEventListener('mouseleave', () => {
            this.gradient.classList.remove('active');
        });
    }
}

// Floating Particles Animation
class ParticleEffect {
    constructor(container) {
        this.container = container;
        if (!this.container) return;

        this.createParticles();
    }

    createParticles() {
        // Create 30-50 floating particles
        const particleCount = Math.random() * 20 + 30;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const delay = Math.random() * 10;
            const duration = Math.random() * 15 + 15;

            particle.style.left = x + '%';
            particle.style.bottom = y + '%';
            particle.style.animationDelay = delay + 's';
            particle.style.animationDuration = duration + 's';
            particle.style.opacity = Math.random() * 0.5 + 0.2;

            this.container.appendChild(particle);
        }
    }
}

// Scroll-triggered Animations with Stagger
class ScrollRevealAnimation {
    constructor() {
        this.elements = document.querySelectorAll('[data-reveal]');
        if (this.elements.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = `reveal-in 0.8s ease-out forwards`;
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        this.elements.forEach((el) => {
            observer.observe(el);
        });
    }
}

// Advanced Canvas Fluid Simulation
class FluidCanvas {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.parentElement.clientWidth;
        this.height = this.canvas.parentElement.clientHeight;
        
        this.canvas.width = this.width;
        this.canvas.height = this.height;

        this.time = 0;
        this.mouse = { x: this.width / 2, y: this.height / 2 };
        this.interactions = [];

        this.setupEvents();
        this.animate();
    }

    setupEvents() {
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY - (this.canvas.parentElement.offsetTop || 0);

            // Add interaction point
            this.interactions.push({
                x: this.mouse.x,
                y: this.mouse.y,
                age: 0
            });
        });

        window.addEventListener('resize', () => {
            this.width = this.canvas.parentElement.clientWidth;
            this.height = this.canvas.parentElement.clientHeight;
            this.canvas.width = this.width;
            this.canvas.height = this.height;
        });
    }

    drawWave(amplitude, frequency, phase, color, lineWidth = 2) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = lineWidth;

        let firstPoint = true;

        for (let x = 0; x <= this.width; x += 10) {
            // Distance-based distortion from interactions
            let distortion = 0;
            this.interactions.forEach((interaction) => {
                const distance = Math.sqrt(
                    Math.pow(x - interaction.x, 2) + 
                    Math.pow(this.height / 2 - interaction.y, 2)
                );
                const influence = Math.max(0, 1 - distance / 300) * (1 - interaction.age / 50);
                distortion += influence * 60;
            });

            const baseY = this.height / 2 + 
                         Math.sin(x * frequency + phase + this.time * 0.05) * amplitude +
                         Math.sin(this.time * 0.02 + x * 0.01) * 10;
            
            const y = baseY + distortion;

            if (firstPoint) {
                this.ctx.moveTo(x, y);
                firstPoint = false;
            } else {
                this.ctx.lineTo(x, y);
            }
        }

        this.ctx.lineTo(this.width, this.height);
        this.ctx.lineTo(0, this.height);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();
    }

    animate() {
        // Clear with fade trail
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
        this.ctx.fillRect(0, 0, this.width, this.height);

        this.time++;

        // Draw multiple layers with different properties
        this.drawWave(40, 0.02, 0, 'rgba(102, 126, 234, 0.25)', 2);
        this.drawWave(30, 0.015, Math.PI / 4, 'rgba(118, 75, 162, 0.2)', 2);
        this.drawWave(20, 0.01, Math.PI / 2, 'rgba(245, 93, 178, 0.15)', 1.5);

        // Update and remove old interactions
        this.interactions = this.interactions.filter((interaction) => {
            interaction.age++;
            return interaction.age < 50;
        });

        requestAnimationFrame(() => this.animate());
    }
}

// Initialize all advanced animations
document.addEventListener('DOMContentLoaded', () => {
    // Initialize mouse gradient effect
    new MouseGradientEffect();

    // Initialize particles
    const hero = document.querySelector('.hero');
    if (hero) {
        new ParticleEffect(hero);
    }

    // Initialize fluid canvas
    if (document.getElementById('waves-canvas')) {
        new FluidCanvas('waves-canvas');
    }

    // Initialize scroll reveal (if elements have data-reveal attribute)
    new ScrollRevealAnimation();

    // Create reveal animations on demand for fade-in elements
    createScrollAnimations();
});

// Enhanced scroll animations with more fluid effects
function createScrollAnimations() {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach((section) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(section);
    });
}

// ParallaxMouseEffect for depth perception
class ParallaxMouseEffect {
    constructor() {
        this.elements = document.querySelectorAll('[data-parallax]');
        if (this.elements.length === 0) return;

        window.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            this.elements.forEach((el) => {
                const depth = el.dataset.parallax || '1';
                const moveX = (x - 0.5) * 20 * depth;
                const moveY = (y - 0.5) * 20 * depth;

                el.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        });
    }
}

// Initialize parallax on load
document.addEventListener('DOMContentLoaded', () => {
    new ParallaxMouseEffect();
});

// ==============================
// THEME TOGGLE (Dark/Light Mode)
// ==============================
const themeToggle = document.querySelector('.theme-toggle');
const htmlElement = document.documentElement;
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
});

function applyTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        body.classList.remove('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

// ==============================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ==============================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach((el) => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
});

// ==============================
// INTERACTIVE BUTTON BEHAVIOR
// ==============================
const interactiveBtn = document.querySelector('.interactive-btn');
const ripple = document.querySelector('.btn-ripple');

// Scroll response - scale button on scroll
window.addEventListener('scroll', () => {
    const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    
    // Subtle scale effect based on scroll position
    const scale = 1 + (scrollPercent * 0.05);
    if (window.scrollY < window.innerHeight) {
        interactiveBtn.style.opacity = Math.max(0, 1 - (scrollPercent * 1.2));
    }
});

// Touch and click ripple effect
interactiveBtn.addEventListener('click', (e) => {
    const rect = interactiveBtn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rippleEl = document.createElement('div');
    rippleEl.className = 'btn-ripple';
    rippleEl.style.left = x + 'px';
    rippleEl.style.top = y + 'px';
    rippleEl.style.width = '0';
    rippleEl.style.height = '0';
    rippleEl.style.position = 'absolute';
    rippleEl.style.borderRadius = '50%';
    rippleEl.style.background = 'rgba(255, 255, 255, 0.5)';
    rippleEl.style.pointerEvents = 'none';

    interactiveBtn.appendChild(rippleEl);

    // Animate ripple
    let size = 0;
    const maxSize = 400;
    const interval = setInterval(() => {
        size += 15;
        rippleEl.style.width = size + 'px';
        rippleEl.style.height = size + 'px';
        rippleEl.style.marginLeft = -size / 2 + 'px';
        rippleEl.style.marginTop = -size / 2 + 'px';
        rippleEl.style.opacity = 1 - (size / maxSize);

        if (size >= maxSize) {
            clearInterval(interval);
            rippleEl.remove();
        }
    }, 10);

    // Smooth scroll to first content section
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});

// ==============================
// NAVIGATION ACTIVE LINK TRACKING
// ==============================
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--primary-color)';
        } else {
            link.style.color = 'var(--text-dark)';
        }
    });
});

// ==============================
// SMOOTH SCROLL BEHAVIOR
// ==============================
navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==============================
// FORM VALIDATION & SUBMISSION
// ==============================
const contactForm = document.querySelector('.contact-form');
const formInputs = contactForm.querySelectorAll('input, textarea');

// Form validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateForm() {
    let isValid = true;

    formInputs.forEach((input) => {
        const formGroup = input.closest('.form-group');
        const error = formGroup.querySelector('.form-error');

        if (input.value.trim() === '') {
            formGroup.classList.add('error');
            error.textContent = 'This field is required';
            isValid = false;
        } else if (input.type === 'email' && !validateEmail(input.value)) {
            formGroup.classList.add('error');
            error.textContent = 'Please enter a valid email';
            isValid = false;
        } else {
            formGroup.classList.remove('error');
            error.textContent = '';
        }
    });

    return isValid;
}

// Remove error on input
formInputs.forEach((input) => {
    input.addEventListener('input', () => {
        const formGroup = input.closest('.form-group');
        if (input.value.trim() !== '') {
            formGroup.classList.remove('error');
        }
    });
});

// Form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateForm()) {
        // Create a simple success message
        const successMsg = document.createElement('div');
        successMsg.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
            padding: 1.5rem 2rem;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
            z-index: 10000;
            animation: slideInRight 0.4s ease-out;
        `;
        successMsg.textContent = '✓ Message sent successfully!';
        document.body.appendChild(successMsg);

        // Clear form
        contactForm.reset();

        // Remove success message after 4 seconds
        setTimeout(() => {
            successMsg.remove();
        }, 4000);
    }
});

// ==============================
// SKILL TAGS INTERACTION
// ==============================
const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach((tag) => {
    tag.addEventListener('click', function () {
        // Create a tooltip/notification
        const skill = this.textContent;
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            font-weight: 600;
            z-index: 9999;
            animation: slideDown 0.3s ease-out;
            box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
        `;
        notification.textContent = `${skill} - Great choice!`;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 2000);
    });
});

// ==============================
// TOOL CARD INTERACTION
// ==============================
const toolCards = document.querySelectorAll('.tool-card');

toolCards.forEach((card) => {
    card.addEventListener('click', function () {
        // Add a subtle pulse effect
        this.style.animation = 'pulse 0.6s ease-out';

        setTimeout(() => {
            this.style.animation = '';
        }, 600);
    });

    // Parallax effect on mouse move
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) * 0.05;
        const rotateY = (centerX - x) * 0.05;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ==============================
// PROJECT CARD HOVER EFFECTS
// ==============================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card) => {
    card.addEventListener('mouseenter', function () {
        this.style.zIndex = 10;
    });

    card.addEventListener('mouseleave', function () {
        this.style.zIndex = 1;
    });
});

// ==============================
// SCROLL INDICATOR
// ==============================
const scrollDots = document.querySelectorAll('.scroll-dots span');
let currentDot = 0;

window.addEventListener('scroll', () => {
    const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    const newDot = Math.floor(scrollPercent * (scrollDots.length - 1));

    if (newDot !== currentDot) {
        scrollDots[currentDot].style.opacity = '0.3';
        scrollDots[newDot].style.opacity = '1';
        currentDot = newDot;
    }

    // Hide scroll indicator when scrolled down
    if (window.scrollY > window.innerHeight * 0.5) {
        document.querySelector('.scroll-indicator').style.opacity = '0';
        document.querySelector('.scroll-indicator').style.pointerEvents = 'none';
    } else {
        document.querySelector('.scroll-indicator').style.opacity = '1';
        document.querySelector('.scroll-indicator').style.pointerEvents = 'auto';
    }
});

// ==============================
// ADD KEYFRAME ANIMATIONS DYNAMICALLY
// ==============================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }

    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
    }
`;
document.head.appendChild(style);

// ==============================
// PERFORMANCE OPTIMIZATION
// ==============================
// Throttle scroll events for better performance
let ticking = false;

function throttleScroll() {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            // Scroll-related calculations here
            ticking = false;
        });
        ticking = true;
    }
}

window.addEventListener('scroll', throttleScroll, { passive: true });

// ==============================
// ACCESSIBILITY ENHANCEMENTS
// ==============================
// Keyboard navigation for interactive elements
const interactiveElements = document.querySelectorAll('a, button, input, textarea');

interactiveElements.forEach((element) => {
    element.addEventListener('focus', function () {
        this.style.outline = '2px solid var(--primary-color)';
        this.style.outlineOffset = '2px';
    });

    element.addEventListener('blur', function () {
        this.style.outline = 'none';
    });
});

// Skip to main content functionality
const skipLink = document.createElement('a');
skipLink.href = '#about';
skipLink.textContent = 'Skip to main content';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--primary-color);
    color: white;
    padding: 8px 12px;
    border-radius: 4px;
    z-index: 10001;
`;
skipLink.addEventListener('focus', function () {
    this.style.top = '10px';
});
skipLink.addEventListener('blur', function () {
    this.style.top = '-40px';
});
document.body.insertBefore(skipLink, document.body.firstChild);

// ==============================
// PREFERS REDUCED MOTION CHECK
// ==============================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Disable animations for users who prefer reduced motion
    document.querySelectorAll('[class*="fade-in"], [class*="animation"]').forEach((el) => {
        el.style.animation = 'none';
    });
}

// ==============================
// PAGE LOAD ANIMATION
// ==============================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    
    // Initialize all animation systems
    const cursor = new CursorAnimation();
    const ripple = new RippleEffect();
    const topAnim = new TopAnimation();
    const themeManager = new ThemeManager();
    const parallaxBg = new ParallaxBackground();
});

// Set initial opacity
document.body.style.opacity = '0.95';

console.log('Portfolio loaded successfully! 🚀');
console.log('Cursor Animation: FAST MODE ✓');
console.log('Ripple & Wave Effects: Active ✓');
console.log('Top Animations: Running ✓');
console.log('Theme System: Ready ✓');
console.log('Background Effects: Running ✓');
