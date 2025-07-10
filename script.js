// script.js
document.addEventListener('DOMContentLoaded', function() {
    // ======================
    // Loading Animation
    // ======================
    function initLoader() {
        const loader = document.querySelector('.loader');
        if (!loader) return;

        window.addEventListener('load', function() {
            setTimeout(function() {
                loader.style.opacity = '0';
                setTimeout(function() {
                    loader.style.display = 'none';
                }, 500);
            }, 1000);
        });
    }

    // ======================
    // Navigation Functions
    // ======================
    function initNavigation() {
        const navToggle = document.querySelector('.nav-toggle');
        const nav = document.querySelector('nav');
        const header = document.querySelector('header');
        
        if (!navToggle || !nav) return;

        // Toggle navigation
        navToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            navToggle.classList.toggle('active');
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        });

        // Close nav when clicking on a link
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Header scroll effect
        function handleScroll() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
        
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initialize on load
    }

    // ======================
    // Interactive Elements
    // ======================
    function initInteractiveElements() {
        // Notification Bell
        const notificationBell = document.querySelector('.notification-bell');
        if (notificationBell) {
            notificationBell.addEventListener('click', function() {
                alert("You have 1 new message!");
            });
        }

        // Chat Widget
        const chatWidget = document.querySelector('.chat-widget');
        if (chatWidget) {
            chatWidget.addEventListener('click', function() {
                alert("Chat feature coming soon!");
            });
        }

        // Hover effect for profile image
        const profileImg = document.querySelector('.home-img img');
        if (profileImg) {
            profileImg.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05) rotate(5deg)';
            });
            
            profileImg.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1) rotate(0)';
            });
        }
    }

    // ======================
    // Animation Functions
    // ======================
    function initAnimations() {
        // Animate elements when they come into view
        function animateOnScroll() {
            const elements = document.querySelectorAll('.home-content h1, .home-content h3, .home-content p, .social-icons, .cta-buttons');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (elementPosition < screenPosition) {
                    element.style.animationPlayState = 'running';
                }
            });
        }

        window.addEventListener('scroll', animateOnScroll);
        animateOnScroll(); // Run once on load

        // Typewriter effect for paragraph
        const animatedText = document.querySelector('.animated-text');
        if (animatedText) {
            const text = animatedText.textContent.trim();
            animatedText.textContent = '';
            
            let i = 0;
            const typing = setInterval(function() {
                if (i < text.length) {
                    animatedText.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typing);
                }
            }, 35);
        }
    }

    // ======================
    // Initialize All Functions
    // ======================
    function init() {
        initLoader();
        initNavigation();
        initInteractiveElements();
        initAnimations();
    }

    init();
});