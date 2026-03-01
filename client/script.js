// --- JavaScript for Form Validation and Interaction ---

// Get references to the form and other elements
const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const messageDiv = document.getElementById('message');

// Listen for the form submission event
loginForm.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior (which reloads the page)
    event.preventDefault();

    // Clear previous messages
    messageDiv.textContent = '';
    messageDiv.className = '';

    // Get the trimmed values from the input fields
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // --- Basic Validation ---
    if (email === '' || password === '') {
        displayMessage('Both email and password are required.🥱', 'error');
        return; // Stop the function
    }

    // A simple regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        displayMessage('Please enter a valid email address.😐', 'error');
        return; // Stop the function
    }

    if (password.length < 8) {
        displayMessage('Password must be at least 8 characters long.😐', 'error');
        return; // Stop the function
    }

    // --- If validation passes ---
    // In a real application, you would send this data to a server.
    // For this example, we'll just simulate a successful login.
    displayMessage('Login successful! Redirecting...😊', 'success');

    // Simulate redirecting after a short delay
    setTimeout(() => {
        // You can redirect to another page like this:
        // window.location.href = '/dashboard.html'; 
        console.log(`Simulating login for email: ${email}`);
    }, 1500);
});

// Helper function to display feedback messages
function displayMessage(message, type) {
    messageDiv.textContent = message;
    if (type === 'success') {
        messageDiv.className = 'message-success';
    } else if (type === 'error') {
        messageDiv.className = 'message-error';
    }
}
