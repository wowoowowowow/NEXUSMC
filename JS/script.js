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
