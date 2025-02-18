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
