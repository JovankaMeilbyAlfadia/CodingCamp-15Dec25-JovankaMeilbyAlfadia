const userName = prompt("Enter your name:");
document.getElementById("welcome-text").innerText = "Hi " + userName;

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("messageText").value;

  if (!name || !email || !phone || !message) {
    alert("All fields are required!");
    return;
  }

  document.getElementById("result-name").innerText = "Name: " + name;
  document.getElementById("result-email").innerText = "Email: " + email;
  document.getElementById("result-phone").innerText = "Phone: " + phone;
  document.getElementById("result-message").innerText = "Message: " + message;
});
