const buildingTeam = [
    { name: "ThunderX", role: "Mc-Builder", image: "Images/Thunderx.jpg" }
];

document.addEventListener("DOMContentLoaded", () => {
    const buildingContainer = document.getElementById("building-team-members");

    if (!buildingContainer) {
        console.error("Error: Element with ID 'building-team-members' not found.");
        return;
    }

    buildingTeam.forEach(member => {
        const div = document.createElement("div");
        div.classList.add("team-box");
        div.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.role}</p>
        `;
        buildingContainer.appendChild(div);
    });
});
