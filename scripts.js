// scripts.js

// Scroll to the Menu section
function scrollToMenu() {
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}

// Handle form submission (basic example, replace with actual handling logic as needed)
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for your message!");
  });
