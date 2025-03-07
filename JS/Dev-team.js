const devTeam = [
    { name: "Snitchboss", role: "Web-developer", image: "Images/29021800b106eb19e07510a529367226.jpg" },
    { name: "Trainereco", role: "Mc-Developer", image: "Images/trainereco.jpg" },
    { name: "TheWolfBoy", role: "Mc-Plugin-Developer", image: "Images/Wolf.jpg" }
];

document.addEventListener("DOMContentLoaded", () => {
    const devContainer = document.getElementById("dev-team-members");

    devTeam.forEach(member => {
        const div = document.createElement("div");
        div.classList.add("team-box");
        div.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.role}</p>
        `;
        devContainer.appendChild(div);
    });
});
