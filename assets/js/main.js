// JavaScript for Hamburger Menu
const hamMenu = document.getElementById("ham");
const sidebar = document.getElementById("sidebar");
const checkbox = document.getElementById("checkbox1");

hamMenu.addEventListener("click", () => {
   sidebar.classList.toggle("active");
   checkbox.checked = !checkbox.checked;
});

// Slide the sidebar when the checkbox is checked
checkbox.addEventListener("change", () => {
   if (checkbox.checked) {
      sidebar.style.transform = "translateX(0)";
      sidebar.style.transition = "0.2s ease-in-out";
   } else {
      sidebar.style.transform = "translateX(100%)";
      sidebar.style.transition = "0.2s ease-in-out";
   }
});

// Close the sidebar when a link is clicked
const navLinks = document.querySelectorAll(".nav-links li a");

navLinks.forEach((link) => {
   link.addEventListener("click", () => {
      sidebar.classList.remove("active");
      checkbox.checked = true;
   });
});
