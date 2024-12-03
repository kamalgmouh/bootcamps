function validatePasswords(event) {
    event.preventDefault(); // Prevent the form from submitting

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirm-password');

    if (password === "kamal2002" && password === confirmPassword && password !== '') {
        // Password is correct and matches
        passwordField.classList.remove('border-red-500');
        passwordField.classList.add('border-green');
        confirmPasswordField.classList.remove('border-red-500');
        confirmPasswordField.classList.add('border-green');
        alert("Passwords match and are correct!"); // You can replace this with your form submission logic
    } else {
        // Password is incorrect or does not match
        passwordField.classList.remove('border-green');
        passwordField.classList.add('border-red-500');
        confirmPasswordField.classList.remove('border-green');
        confirmPasswordField.classList.add('border-red-500');
        alert("Passwords do not match or are incorrect!");
    }
}