// ===== MAIN JAVASCRIPT FILE =====

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// ===== MAIN INITIALIZATION =====
function initializeApp() {
    initSmoothScrolling();
    initCourseTracking();
    initHeaderScroll();
    initAnimations();
    initAccessibility();
    initPerformanceOptimizations();
    
    // Log initialization
    console.log('🚀 GERAR Jovem Aprendiz - Site inicializado com sucesso!');
}

// ===== SMOOTH SCROLLING =====
function initSmoothScrolling() {
    // Handle smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without jumping
                history.pushState(null, null, targetId);
            }
        });
    });
}

// ===== COURSE TRACKING =====
function initCourseTracking() {
    // Track course link clicks
    document.querySelectorAll('.curso-link').forEach(link => {
        link.addEventListener('click', function(e) {
            const courseName = this.closest('.curso-item').querySelector('.curso-name').textContent;
            const provider = this.closest('.curso-item').querySelector('.curso-provider').textContent;
            const trilha = this.closest('.trilha-card').dataset.trilha;
            
            // Track the click
            trackCourseClick(courseName, provider, trilha);
            
            // Add visual feedback
            addClickFeedback(this);
        });
    });
}

function trackCourseClick(courseName, provider, trilha) {
    // Analytics tracking (can be integrated with Google Analytics, etc.)
    const eventData = {
        event: 'course_click',
        course_name: courseName,
        provider: provider,
        trilha: trilha,
        timestamp: new Date().toISOString()
    };
    
    console.log('📊 Curso acessado:', eventData);
    
    // Store in localStorage for analytics
    const clicks = JSON.parse(localStorage.getItem('courseClicks') || '[]');
    clicks.push(eventData);
    localStorage.setItem('courseClicks', JSON.stringify(clicks));
    
    // Send to analytics service (placeholder)
    // gtag('event', 'course_click', eventData);
}

function addClickFeedback(element) {
    // Add temporary visual feedback
    element.style.opacity = '0.7';
    element.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        element.style.opacity = '';
        element.style.transform = '';
    }, 200);
}

// ===== HEADER SCROLL EFFECTS =====
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    function updateHeader() {
        const scrollY = window.scrollY;
        
        if (scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollY = scrollY;
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
    
    // Add CSS for scrolled state
    const style = document.createElement('style');
    style.textContent = `
        .header.scrolled {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }
    `;
    document.head.appendChild(style);
}

// ===== ANIMATIONS =====
function initAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.trilha-card, .plataforma-card, .stat-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .trilha-card,
        .plataforma-card,
        .stat-card {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .trilha-card.animate-in,
        .plataforma-card.animate-in,
        .stat-card.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .trilha-card:nth-child(2).animate-in {
            transition-delay: 0.1s;
        }
        
        .trilha-card:nth-child(3).animate-in {
            transition-delay: 0.2s;
        }
    `;
    document.head.appendChild(style);
}

// ===== ACCESSIBILITY =====
function initAccessibility() {
    // Add skip link
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Pular para o conteúdo principal';
    skipLink.className = 'skip-link';
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main landmark
    const main = document.querySelector('main');
    if (main) {
        main.id = 'main';
    }
    
    // Keyboard navigation for cards
    document.querySelectorAll('.trilha-card, .plataforma-card').forEach(card => {
        card.setAttribute('tabindex', '0');
        
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                const link = this.querySelector('a');
                if (link) {
                    link.click();
                }
            }
        });
    });
    
    // Add CSS for skip link
    const style = document.createElement('style');
    style.textContent = `
        .skip-link {
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--blue-700);
            color: white;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 1000;
            transition: top 0.3s;
        }
        
        .skip-link:focus {
            top: 6px;
        }
    `;
    document.head.appendChild(style);
}

// ===== PERFORMANCE OPTIMIZATIONS =====
function initPerformanceOptimizations() {
    // Lazy load images (if any are added later)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Preload critical resources
    preloadCriticalResources();
}

function preloadCriticalResources() {
    // Preload Google Fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap';
    fontLink.as = 'style';
    fontLink.onload = function() {
        this.onload = null;
        this.rel = 'stylesheet';
    };
    document.head.appendChild(fontLink);
}

// ===== UTILITY FUNCTIONS =====

// Debounce function for performance
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== ANALYTICS HELPERS =====
function getAnalyticsData() {
    const clicks = JSON.parse(localStorage.getItem('courseClicks') || '[]');
    const summary = {};
    
    clicks.forEach(click => {
        const key = `${click.trilha}_${click.course_name}`;
        summary[key] = (summary[key] || 0) + 1;
    });
    
    return {
        totalClicks: clicks.length,
        clicksByTrilha: clicks.reduce((acc, click) => {
            acc[click.trilha] = (acc[click.trilha] || 0) + 1;
            return acc;
        }, {}),
        clicksByCourse: summary,
        lastClick: clicks[clicks.length - 1]
    };
}

// Export analytics data (for debugging)
window.getAnalyticsData = getAnalyticsData;

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('🚨 Erro no site:', e.error);
    
    // Send error to analytics (placeholder)
    // gtag('event', 'exception', {
    //     description: e.error.toString(),
    //     fatal: false
    // });
});

// ===== SERVICE WORKER (for PWA capabilities) =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('✅ Service Worker registrado com sucesso:', registration.scope);
            })
            .catch(function(error) {
                console.log('❌ Falha ao registrar Service Worker:', error);
            });
    });
}

// ===== DARK MODE SUPPORT (future enhancement) =====
function initDarkMode() {
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Theme toggle functionality (can be added later)
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
}

// ===== EXPORT FOR TESTING =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        trackCourseClick,
        getAnalyticsData,
        debounce,
        throttle
    };
}

