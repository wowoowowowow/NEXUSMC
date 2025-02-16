interface TeamMember {
    name: string;
    role: string;
    image: string;
}

const team: TeamMember[] = [
    { name: "Flash", role: "Owner", image: "flash.png" },
    { name: "Snitch", role: "Head-developer/Site Owner", image: "Snitch.jpg" }
];

document.addEventListener("DOMContentLoaded", () => {
    const teamContainer = document.getElementById("team-members") as HTMLElement;

    team.forEach(member => {
        const div = document.createElement("div");
        div.classList.add("team-member");
        div.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.role}</p>
        `;
        teamContainer.appendChild(div);
    });
});
