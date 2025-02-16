const minigames = [
    { name: "BedWars", image: "Images/download (1).jpeg" },
    { name: "LifeSteal", image: "Images/download (2).jpeg" },
    { name: "Battle royal", image: "Images/download (3).jpeg" },
    { name: "Among us", image: "Images/download (4).jpeg" }
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
