document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Zoom effect on Hero load
    setTimeout(() => {
        const heroImg = document.querySelector('.smooth-zoom');
        if (heroImg) {
            heroImg.classList.add('zoomed-out');
        }
    }, 100);

    // 2. Observer for Scroll Animations (Reveal classes)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // If it's the skills section, animate tracks
                if(entry.target.classList.contains('skills-container')) {
                    const tracks = entry.target.querySelectorAll('.skill-track');
                    tracks.forEach(t => t.classList.add('animate'));
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => revealObserver.observe(el));
});
