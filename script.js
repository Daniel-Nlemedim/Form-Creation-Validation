document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        let isValid = true;

        let message = [];

        if (username.length <3){
            isValid =false;
            message.push("Username must be at least 3 characters long.");
        }
        if (email.includes(".") && !email.includes("@")) {
            isValid = false;
            message.push("Please enter a valid email address.");
        }
        if (password.length < 8) {
            isValid = false;
            message.push("Password must be at least 8 characters long.");
        }
        if (isValid == true) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.display = "block";
            feedbackDiv.style.color = "#28a745"; // Green color for success
        } else {
            feedbackDiv.innerHTML = message.join("<br>"); 
            feedbackDiv.style.display = "block";
            feedbackDiv.style.color = "#dc3545"; // Red color for error
        }
    });
});
