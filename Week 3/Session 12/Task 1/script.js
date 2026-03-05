const signInBtn = document.getElementById("showSignIn");
const signUpBtn = document.getElementById("showSignUp");
const signInForm = document.getElementById("signinForm");
const signUpForm = document.getElementById("signupForm");

// Toggle forms
signInBtn.addEventListener("click", () => {
    signInForm.classList.add("active");
    signUpForm.classList.remove("active");
});

signUpBtn.addEventListener("click", () => {
    signUpForm.classList.add("active");
    signInForm.classList.remove("active");
});

// Basic password confirmation validation
signUpForm.addEventListener("submit", function(e) {
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        e.preventDefault();
    }
});
