// Toggle the navigation menu on smaller screens
const hamburgerIcon = document.getElementById('hamburger-icon');
const navLinks = document.querySelector('.nav-links');

hamburgerIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
