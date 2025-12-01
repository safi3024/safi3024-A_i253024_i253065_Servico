// File: contact.js

// 1. Handle "BOOK NOW" button click
function handleBooking() {
    alert('Thank you for your interest! A booking request has been sent for this worker.');
    // In a real application, this would open a modal or redirect to a form.
}

const bookBtn = document.querySelector('.book-btn');
if (bookBtn) {
    bookBtn.addEventListener('click', handleBooking);
}

// 2. Handle simple chat message sending
function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    if (!chatInput) {
        console.error("Missing chat input with ID 'chatInput'.");
        return;
    }
    
    const message = chatInput.value.trim();

    if (message !== '') {
        alert(`Message to Shakir khan: "${message}"`);
        // Clear the input after 'sending'
        chatInput.value = '';
        console.log('Message sent:', message);
    }
}

// Listen for 'Enter' key press on the chat input
const chatInput = document.getElementById('chatInput');
if (chatInput) {
    chatInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
            event.preventDefault(); // Stop newline in input
        }
    });
}

// Also handle a click on the mic-icon (acting as a 'Send' button)
const sendButton = document.querySelector('.chat-bar .mic-icon'); 
if (sendButton) {
    sendButton.style.cursor = 'pointer'; 
    sendButton.addEventListener('click', sendMessage);
}