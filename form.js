// form.js

document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simple validation example
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    if (fullName && email && password) {
        alert('Form submitted successfully!');
    } else {
        alert('Please fill in all fields!');
    }
});
