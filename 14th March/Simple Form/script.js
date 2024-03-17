document.getElementById("accoutnForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    if (email.indexOf("@") === -1) {
        alert("Email must contain @");
        return;
    }
    
    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return;
    }
    
    if (password.indexOf("@") === -1) {
        alert("Password must contain @");
        return;
    }
    
    if (password.includes(" ")) {
        alert("Password cannot contain spaces");
        return;
    }
    
    // If all checks pass, you can submit the form or perform further actions
    alert("Form submitted successfully!");
    // document.getElementById("accoutnForm").submit(); // Uncomment this line to submit the form
});