// Toggle between Login and Sign-Up forms
const toggleLogin = document.getElementById("toggle-login");
const toggleSignup = document.getElementById("toggle-signup");
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

toggleLogin.addEventListener("click", () => {
  toggleLogin.classList.add("active");
  toggleSignup.classList.remove("active");
  loginForm.classList.add("active");
  signupForm.classList.remove("active");
});

toggleSignup.addEventListener("click", () => {
  toggleSignup.classList.add("active");
  toggleLogin.classList.remove("active");
  signupForm.classList.add("active");
  loginForm.classList.remove("active");
});
