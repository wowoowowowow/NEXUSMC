document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("contact-form").addEventListener("submit", async function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        const response = await fetch("/send-message", {
            method: "POST",
            body: formData
        });

        if (response.ok) {
            alert("Message sent!");
        } else {
            alert("Failed to send message.");
        }
    });
});

// Toggle Hamburger Menu
        function toggleMenu() {
            const navMenu = document.getElementById('nav-menu');
            if (navMenu.style.display === 'flex') {
                navMenu.style.display = 'none';
            } else {
                navMenu.style.display = 'flex';
            }
        }

        // Theme Toggle
        function toggleTheme() {
            const body = document.body;
            const btn = document.querySelector('.theme-toggle-btn');

            if (body.classList.contains('dark-mode')) {
                body.classList.remove('dark-mode');
                body.classList.add('light-mode');
                body.style.backgroundColor = "#fff";
                body.style.color = "#000";
                btn.textContent = 'Switch to Dark Mode';
            } else {
                body.classList.remove('light-mode');
                body.classList.add('dark-mode');
                body.style.backgroundColor = "#121212";
                body.style.color = "#fff";
                btn.textContent = 'Switch to Light Mode';
            }
        }
