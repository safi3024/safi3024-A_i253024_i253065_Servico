// File: login.js

function validateLogin(event) {
    // Prevent the default form submission
    event.preventDefault(); 

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    // Simple check to make sure elements exist
    if (!usernameInput || !passwordInput) {
        alert("Error: Missing form elements in HTML.");
        return;
    }

    const user = usernameInput.value.trim();
    const pass = passwordInput.value.trim();

    // 1. Check if fields are empty
    if (user === '' || pass === '') {
        alert('Please enter both username and password.');
        return false;
    }

    // 2. Basic hardcoded login check (FOR DEMO ONLY - NEVER DO THIS IN PRODUCTION)
    const validUsername = 'testuser';
    const validPassword = 'password123';

    if (user === validUsername && pass === validPassword) {
        alert('Login successful! Welcome to Servico.');
        // Redirect to home page (uncomment to enable)
        // window.location.href = 'home.html'; 
    } else {
        alert('Invalid username or password. Try ' + validUsername + ' / ' + validPassword);
    }
}

// Attach the validation function to the form's submit event
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', validateLogin);
}