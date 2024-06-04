const form = document.querySelector("#form"); // Corrected selector to select the form
const submitButton = document.querySelector("#submit"); // Corrected selector to select the submit button

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission behavior first
  submitButton.disabled = true; // Disable the submit button after preventing default behavior
  window.location.href = "success.html"; // Redirect to the success.html page
});
