document.addEventListener("DOMContentLoaded", () => {
    // Hamburger Menu Toggle
    const hamburger = document.querySelector(".hamburger-menu");
    const navMenu = document.getElementById("nav-menu");
    const closeMenu = document.getElementById("close-menu");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("show-menu");

        // Toggle Hamburger Icon to "X"
        hamburger.classList.toggle("active");
    });

    closeMenu.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
        hamburger.classList.remove("active");
    });

    // Theme Toggle Button
    const themeToggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
        updateThemeButton(savedTheme);
    }

    themeToggleBtn.addEventListener("click", () => {
        body.classList.toggle("light-mode");

        // Save preference to localStorage
        if (body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light-mode");
            updateThemeButton("light-mode");
        } else {
            localStorage.setItem("theme", "dark-mode");
            updateThemeButton("dark-mode");
        }
    });

    function updateThemeButton(mode) {
        if (mode === "light-mode") {
            body.style.backgroundColor = "#ffffff";
            body.style.color = "#000000";
            themeToggleBtn.textContent = "Dark Mode";
        } else {
            body.style.backgroundColor = "#121212";
            body.style.color = "#ffffff";
            themeToggleBtn.textContent = "Light Mode";
        }
    }
});
