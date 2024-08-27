// Animation des barres de compétences
const skills = document.querySelectorAll('.skill');

skills.forEach(skill => {
    const skillLevel = skill.dataset.skillLevel;
    const skillLevelElement = skill.querySelector('.skill-level');
    skillLevelElement.style.width = skillLevel + '%';
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Merci, votre message a été envoyé ! 😊');
    this.reset(); // Réinitialiser le formulaire après l'envoi
});
