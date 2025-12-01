// File: form_page.js

function validateServiceForm(event) {
    // Prevent the default form submission
    event.preventDefault(); 

    const fullName = document.getElementById('fullName');
    const phoneNumber = document.getElementById('phoneNumber');
    const workRequirement = document.getElementById('workRequirement');
    const terms = document.getElementById('terms');
    
    // 1. Basic check for required fields
    if (fullName.value.trim() === '' || phoneNumber.value.trim() === '' || workRequirement.value.trim() === '') {
        alert('Please fill in all the required fields.');
        return false;
    }

    // 2. Simple phone number length check
    if (phoneNumber.value.trim().length < 8) {
        alert('Please enter a valid phone number (at least 8 digits).');
        return false;
    }

    // 3. Check terms and conditions
    if (!terms.checked) {
        alert('You must accept the Terms and Conditions to proceed.');
        return false;
    }

    // If all checks pass
    alert('Service request submitted successfully! We will contact you shortly.');
    // In a real application, you would send the data to a server here.
}

// Attach the function to the form's submit event
const serviceForm = document.getElementById('serviceForm');
if (serviceForm) {
    serviceForm.addEventListener('submit', validateServiceForm);
}