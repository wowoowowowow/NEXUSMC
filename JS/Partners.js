const partnerTeam = [
    { name: "Outcast Event", role: "Owner: Trainereco", image: "Images/Outcast.png" }
];

document.addEventListener("DOMContentLoaded", () => {
    const partnerContainer = document.getElementById("partner-team-members");

    if (!partnerContainer) {
        console.error("Error: Element with ID 'partner-team-members' not found.");
        return;
    }

    partnerTeam.forEach(member => {
        const div = document.createElement("div");
        div.classList.add("team-box");
        div.innerHTML = `
            <img src="${member.image}" alt="${member.name}" class="clickable-partner">
            <h3>${member.name}</h3>
            <p>${member.role}</p>
        `;
        partnerContainer.appendChild(div);
    });

    // Make Outcast.png Clickable (Redirect to Discord)
    document.querySelectorAll(".clickable-partner").forEach(img => {
        if (img.src.includes("Outcast.png")) {
            img.addEventListener("click", () => {
                window.location.href = "https://discord.gg/xfVYWBs5Zg"; // Replace with actual Discord link
            });
        }
    });
});
