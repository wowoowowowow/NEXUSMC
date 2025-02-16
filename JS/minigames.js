const minigames = [
    { name: "BedWars", image: "Images/download (1).jpeg" },
    { name: "SkyBlock", image: "Images/skyblock.jpg" },
    { name: "Survival", image: "Images/survival.jpg" },
    { name: "PvP Arena", image: "Images/pvp.jpg" }
];

document.addEventListener("DOMContentLoaded", () => {
    const gameContainer = document.getElementById("game-list");

    minigames.forEach(game => {
        const div = document.createElement("div");
        div.classList.add("box");
        div.innerHTML = `
            <img src="${game.image}" alt="${game.name}">
            <h3>${game.name}</h3>
        `;
        gameContainer.appendChild(div);
    });
});
