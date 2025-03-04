const teamMembers = [
    { name: "Flash", role: "Founder", image: "Images/flash.jpg" },
    { name: "Dark", role: "Dc-founder", image: "Images/dark.jpg" },
    { name: "Mistery", role: "Co-founder", image: "Images/mistery_avatar.png" }
];

document.addEventListener("DOMContentLoaded", () => {
    const teamContainer = document.getElementById("team-members");

    teamMembers.forEach(member => {
        const div = document.createElement("div");
        div.classList.add("team-box");
        div.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.role}</p>
        `;
        teamContainer.appendChild(div);
    });
});
