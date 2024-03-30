// script.js
const form = document.getElementById('contact-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate form (you can add more validation logic here)

    // Example: Check if email is valid
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Process form data (you can send it to a server or perform other actions)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Clear form fields
    form.reset();
});

function isValidEmail(email) {
    // Basic email validation (you can use a library or regex for more robust validation)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Connect to your database and save form data (backend logic)
// Example: Use fetch() or Axios to send data to a server endpoint
// You'll need a backend (Node.js, PHP, etc.) to handle database connections
