let player = {
    name: 'Heroi',
    health: 100,
    level: 1,
    experience: 0,
    inventory: [],
    blessings: []
};

let enemy = {
    name: 'Inimigo',
    health: 50,
};

let missions = [
    { id: 1, description: "Derrote 1 inimigo.", completed: false },
    { id: 2, description: "Encontre um item.", completed: false }
];

function updateStatus() {
    const status = `
        <strong>Nome:</strong> ${player.name}<br>
        <strong>Vida:</strong> ${player.health}<br>
        <strong>Nível:</strong> ${player.level}<br>
        <strong>XP:</strong> ${player.experience}
    `;
    document.getElementById('status').innerHTML = status;
}

function levelUp() {
    if (player.experience >= player.level * 100) {
        player.level++;
        player.health += 20; // Aumenta a vida ao subir de nível
        alert(`Parabéns! Você subiu para o nível ${player.level}!`);
    }
}

function fight() {
    let damage = Math.floor(Math.random() * 20) + 5;
    enemy.health -= damage;
    player.health -= Math.floor(Math.random() * 10);

    if (enemy.health <= 0) {
        alert('Você derrotou o inimigo!');
        player.experience += 20;
        levelUp(); // Verifica se o jogador sobe de nível
        enemy.health = 50; // Resetando saúde do inimigo
    }
    if (player.health <= 0) {
        alert('Você foi derrotado!');
    }
    updateStatus();
}

function explore() {
    const foundItem = `Item ${Math.floor(Math.random() * 100)}`;
    player.inventory.push(foundItem);
    updateInventory();
    alert(`Você encontrou: ${foundItem}`);
}

function updateInventory() {
    document.getElementById('items').innerHTML = player.inventory.map(item => `<div class="item">${item}</div>`).join('');
}

function acceptMission() {
    let mission = missions.find(m => !m.completed);
    if (mission) {
        alert(`Missão aceita: ${mission.description}`);
        // Aqui você pode implementar a lógica para completar a missão
        mission.completed = true; // Marca a missão como concluída
        updateMissions();
    } else {
        alert("Todas as missões foram concluídas!");
    }
}

function updateMissions() {
    document.getElementById('missionList').innerHTML = missions.map(mission => 
        `<div class="mission">${mission.description} - ${mission.completed ? "Concluída" : "Pendente"}</div>`
    ).join('');
}

updateStatus();
updateMissions();
