// include.js
document.addEventListener("DOMContentLoaded", () => {
  // Include Header
  fetch("../components/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
    })
    .catch((error) => console.error("Error loading header:", error));

  // Include Footer
  fetch("../components/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch((error) => console.error("Error loading footer:", error));
});
