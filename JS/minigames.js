const minigames = [
    { name: "BedWars", image: "Images/bedwars.jpeg" },
    { name: "LifeSteal", image: "Images/LifeSteal.jpeg" },
    { name: "Battle royal", image: "Images/battle.jpeg" },
    { name: "Among us", image: "Images/amongus.jpeg" }
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
