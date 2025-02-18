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

// Toggle Light/Dark theme
function toggleTheme() {
    const body = document.body;
    const btn = document.querySelector('.theme-toggle-btn');

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        btn.textContent = 'Switch to Dark Mode';
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        btn.textContent = 'Switch to Light Mode';
    }
}

// Toggle Hamburger menu
function toggleMenu() {
    const menu = document.querySelector('.hamburger-menu');
    menu.classList.toggle('open');
}
