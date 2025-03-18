// script.js

// Function to handle form submission
document.getElementById("registrationForm")?.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const contact = document.getElementById("contact").value;
  const address = document.getElementById("address").value;

  // Create user object
  const user = { name, email, contact, address };

  // Save user to localStorage
  saveUser(user);

  // Reset form
  document.getElementById("registrationForm").reset();
  alert("User registered successfully!");
});

// Function to save user to localStorage
function saveUser(user) {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
}

// Function to display users in the table
function displayUsers() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const tableBody = document.getElementById("userTable");

  // Clear existing table rows
  tableBody.innerHTML = "";

  // Add users to the table
  users.forEach((user) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.contact}</td>
      <td>${user.address}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Call displayUsers on view.html page load
if (window.location.pathname.endsWith("view.html")) {
  displayUsers();
}
