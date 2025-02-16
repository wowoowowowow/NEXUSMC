document.addEventListener("DOMContentLoaded", () => {
    const minigames = [];
    const gameList = document.getElementById("game-list");

    minigames.forEach(game => {
        let li = document.createElement("li");
        li.textContent = game;
        gameList.appendChild(li);
    });

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
