const partnerTeam = [
    { name: "Outcast event", role: "Owner: Trainereco", image: "Images/Thunderx.jpg" }
];

document.addEventListener("DOMContentLoaded", () => {
    const buildingContainer = document.getElementById("building-team-members");

    if (!buildingContainer) {
        console.error("Error: Element with ID 'partner-team-members' not found.");
        return;
    }

    partnerTeam.forEach(member => {
        const div = document.createElement("div");
        div.classList.add("team-box");
        div.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.role}</p>
        `;
        partnerContainer.appendChild(div);
    });
});
