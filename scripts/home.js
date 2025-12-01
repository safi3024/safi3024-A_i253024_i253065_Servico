// File: home.js

function handleProfileClick() {
    // Simple alert to confirm click
    alert('User Profile Icon Clicked! You would normally open a profile menu here.');

    // You could also toggle a simple hidden menu by using a class:
    // const menu = document.getElementById('profileMenu');
    // menu.classList.toggle('active'); 
}

// Get the user icon element
const userIcon = document.querySelector('.user-icon');

// Add a click listener
if (userIcon) {
    userIcon.style.cursor = 'pointer'; // Optional: changes cursor to indicate clickability
    userIcon.addEventListener('click', handleProfileClick);
}