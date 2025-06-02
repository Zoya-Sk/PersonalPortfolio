// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle Navigation for Mobile (Optional)
const navBrand = document.querySelector('.nav-brand');
const navLinks = document.querySelector('.nav-links');

navBrand.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Animate Skill Bars
const skillLevels = document.querySelectorAll('.skill-level');

window.addEventListener('load', () => {
    skillLevels.forEach(skill => {
        const width = skill.style.width;
        skill.style.width = '0';
        setTimeout(() => {
            skill.style.width = width;
        }, 500);
    });
});
