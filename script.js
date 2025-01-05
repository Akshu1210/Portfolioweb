// Add smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation to skill items
const skills = document.querySelectorAll('.skill');
skills.forEach(skill => {
    skill.addEventListener('mouseover', () => {
        skill.style.transform = 'scale(1.1)';
        skill.style.transition = 'transform 0.3s';
    });
    
    skill.addEventListener('mouseout', () => {
        skill.style.transform = 'scale(1)';
    });
}); 