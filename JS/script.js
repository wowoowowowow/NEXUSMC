document.addEventListener("DOMContentLoaded", () => {
    // Hamburger Menu Toggle
    const hamburger = document.querySelector(".hamburger-menu");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", () => {
        navMenu.style.display = (navMenu.style.display === "flex") ? "none" : "flex";

        // Toggle Hamburger Icon to "X"
        const lines = hamburger.querySelectorAll("div");
        if (navMenu.style.display === "flex") {
            lines[0].style.transform = "rotate(45deg) translate(5px, 5px)";
            lines[1].style.opacity = "0";
            lines[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
        } else {
            lines[0].style.transform = "";
            lines[1].style.opacity = "1";
            lines[2].style.transform = "";
        }
    });

    // Dark/Light Mode Toggle
    const themeToggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

    themeToggleBtn.addEventListener("click", () => {
        body.classList.toggle("light-mode");

        if (body.classList.contains("light-mode")) {
            body.style.backgroundColor = "#ffffff";
            body.style.color = "#000000";
            themeToggleBtn.textContent = "Dark Mode";
        } else {
            body.style.backgroundColor = "#121212";
            body.style.color = "#ffffff";
            themeToggleBtn.textContent = "Light Mode";
        }
    });
});
