// Classe para Habilidades
class Habilidade {
    constructor(nome, nivel) {
        this.nome = nome;
        this.nivel = nivel;
    }

    evoluir() {
        this.nivel++;
        return `${this.nome} evoluiu para o nível ${this.nivel}!`;
    }
}

// Classe para Missões
class Missao {
    constructor(nome, descricao, recompensa) {
        this.nome = nome;
        this.descricao = descricao;
        this.completada = false;
        this.recompensa = recompensa;
    }

    completar() {
        this.completada = true;
        return `Missão "${this.nome}" completada! Recompensa: ${this.recompensa}`;
    }

    descrever() {
        return `${this.nome}: ${this.descricao} - ${this.completada ? "Completada" : "Não completada"}`;
    }
}

// Definindo habilidades do jogador
let habilidades = [
    new Habilidade("Manipulação de Fogo", 1),
    new Habilidade("Manipulação de Água", 1),
    new Habilidade("Necromancia", 1),
    new Habilidade("Telecinese", 1),
    new Habilidade("Cura", 1)
];

// Definindo missões
let missoes = [
    new Missao("Coletar Ervas", "Cole 5 ervas medicinais na floresta.", 50),
    new Missao("Derrotar o Monstro", "Derrote o monstro da caverna.", 100),
];

// Variáveis do jogador
let jogador = {
    nome: "Herói",
    vida: 100,
    habilidades: habilidades,
    missoes: missoes
};

// Função para atualizar o status do jogador na tela
function atualizarJogadorInfo() {
    document.getElementById("nome-jogador").innerText = jogador.nome;
    document.getElementById("vida-jogador").innerText = jogador.vida;
    
    let habilidadesTexto = jogador.habilidades.map(hab => `${hab.nome} (Nível ${hab.nivel})`).join(", ");
    document.getElementById("habilidades-jogador").innerText = habilidadesTexto;

    let missoesTexto = jogador.missoes.map(missao => missao.descrever()).join("<br>");
    document.getElementById("missoes-jogador").innerHTML = missoesTexto;
}

// Função para executar ações no jogo
function executarAcao() {
    let acaoSelecionada = document.getElementById("acao-selecao").value;

    switch (acaoSelecionada) {
        case "combater":
            combater();
            break;
        case "explorar":
            explorar();
            break;
        case "missao":
            mostrarMissoes();
            break;
        case "habilidade":
            usarHabilidade();
            break;
    }
}

// Função de combate
function combater() {
    let dano = Math.floor(Math.random() * 10) + 1;
    jogador.vida -= dano;
    if (jogador.vida <= 0) {
        jogador.vida = 0;
        document.getElementById("resultado").innerText = "Você foi derrotado!";
    } else {
        document.getElementById("resultado").innerText = `Você recebeu ${dano} de dano! Vida restante: ${jogador.vida}`;
    }
    atualizarJogadorInfo();
}

// Função para explorar o mundo
function explorar() {
    let encontrado = Math.random() < 0.5 ? "nada" : "um item misterioso!";
    document.getElementById("resultado").innerText = `Você explorou e encontrou ${encontrado}`;
}

// Função para mostrar missões
function mostrarMissoes() {
    let missoesTexto = jogador.missoes.map(missao => missao.descrever()).join("<br>");
    document.getElementById("resultado").innerHTML = missoesTexto;
}

// Função para usar habilidades
function usarHabilidade() {
    let habilidade = jogador.habilidades[0];
    let resultado = habilidade.evoluir();
    document.getElementById("resultado").innerText = resultado;
    atualizarJogadorInfo();
}

// Inicializa as informações do jogador na tela ao carregar a página
atualizarJogadorInfo();
