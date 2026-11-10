/* ==========================================
   FOOTBALL ANALYTICS
   Temporada 2026/27
========================================== */


/* 1. COMPETIÇÕES */

const competicoes = [
    {
        id: "premierLeague",
        nome: "Premier League",
        pais: "Inglaterra"
    },
    {
        id: "laLiga",
        nome: "La Liga",
        pais: "Espanha"
    },
    {
        id: "bundesliga",
        nome: "Bundesliga",
        pais: "Alemanha"
    },
    {
        id: "serieA",
        nome: "Serie A",
        pais: "Itália"
    },
    {
        id: "ligue1",
        nome: "Ligue 1",
        pais: "França"
    },
    {
        id: "championsLeague",
        nome: "Champions League",
        pais: "Europa"
    },
    {
        id: "brasileirao",
        nome: "Brasileirão",
        pais: "Brasil"
    }
];


/* 2. BASE DE DADOS */

/* ==========================================
   2. BANCO DE DADOS
   Atualização: 04/11/2026
========================================== */

const jogadores = [

    // PREMIER LEAGUE
    {
        nome: "Erling Haaland",
        clube: "Manchester City",
        estatisticas: {
            premierLeague: { jogos: 9, gols: 9, assistencias: 0 },
            championsLeague: { jogos: 2, gols: 4, assistencias: 0 }
        }
    },
    {
        nome: "Alexander Isak",
        clube: "Liverpool",
        estatisticas: {
            premierLeague: { jogos: 8, gols: 6, assistencias: 0 }
        }
    },
    {
        nome: "João Pedro",
        clube: "Chelsea",
        estatisticas: {
            premierLeague: { jogos: 6, gols: 5, assistencias: 3 }
        }
    },
    {
        nome: "Declan Rice",
        clube: "Arsenal",
        estatisticas: {
            premierLeague: { jogos: null, gols: null, assistencias: 5 }
        }
    },
    {
        nome: "Evanilson",
        clube: "Bournemouth",
        estatisticas: {
            premierLeague: { jogos: null, gols: 4, assistencias: 4 }
        }
    },


    // LA LIGA
    {
        nome: "Raphinha",
        clube: "Barcelona",
        estatisticas: {
            laLiga: { jogos: 10, gols: 15, assistencias: 3 },
            championsLeague: { jogos: 3, gols: 4, assistencias: 0 }
        }
    },
    {
        nome: "Kylian Mbappé",
        clube: "Real Madrid",
        estatisticas: {
            laLiga: { jogos: 11, gols: 12, assistencias: 2 },
            championsLeague: { jogos: 3, gols: 3, assistencias: 1 }
        }
    },
    {
        nome: "Lamine Yamal",
        clube: "Barcelona",
        estatisticas: {
            laLiga: { jogos: 11, gols: 10, assistencias: 7 },
            championsLeague: { jogos: 4, gols: 3, assistencias: 4 }
        }
    },
    {
        nome: "Javier Hernández",
        clube: "Espanyol",
        estatisticas: {
            laLiga: { jogos: null, gols: null, assistencias: 6 }
        }
    },


    // BUNDESLIGA
    {
        nome: "Niclas Füllkrug",
        clube: "Werder Bremen",
        estatisticas: {
            bundesliga: { jogos: 8, gols: 9, assistencias: 0 }
        }
    },
    {
        nome: "Patrik Schick",
        clube: "Bayer Leverkusen",
        estatisticas: {
            bundesliga: { jogos: 8, gols: 7, assistencias: 2 }
        }
    },
    {
        nome: "Michael Olise",
        clube: "Bayern München",
        estatisticas: {
            bundesliga: { jogos: 8, gols: 6, assistencias: 4 }
        }
    },
    {
        nome: "Antonio Nusa",
        clube: "RB Leipzig",
        estatisticas: {
            bundesliga: { jogos: 8, gols: 4, assistencias: 6 }
        }
    },
    {
        nome: "Harry Kane",
        clube: "Bayern München",
        estatisticas: {
            bundesliga: { jogos: 8, gols: 4, assistencias: 6 },
            championsLeague: { jogos: 4, gols: 4, assistencias: 3 }
        }
    },


    // SERIE A
    {
        nome: "Gustavo Varela",
        clube: "Monza",
        estatisticas: {
            serieA: { jogos: 9, gols: 9, assistencias: 1 }
        }
    },
    {
        nome: "Donyell Malen",
        clube: "Roma",
        estatisticas: {
            serieA: { jogos: 9, gols: 8, assistencias: 1 },
            championsLeague: { jogos: 4, gols: 4, assistencias: 2 }
        }
    },
    {
        nome: "Anastasios Raimondo",
        clube: "Frosinone",
        estatisticas: {
            serieA: { jogos: 10, gols: 8, assistencias: 0 }
        }
    },
    {
        nome: "Mattia Zaccagni",
        clube: "Lazio",
        estatisticas: {
            serieA: { jogos: 10, gols: null, assistencias: 5 }
        }
    },


    // LIGUE 1
    {
        nome: "Lassine Sinayoko",
        clube: "Paris FC",
        estatisticas: {
            ligue1: { jogos: 9, gols: 8, assistencias: 5 }
        }
    },
    {
        nome: "Estéban Lepaul",
        clube: "Rennes",
        estatisticas: {
            ligue1: { jogos: 7, gols: 7, assistencias: 0 }
        }
    },
    {
        nome: "Amine Gouiri",
        clube: "Marseille",
        estatisticas: {
            ligue1: { jogos: 9, gols: 6, assistencias: 3 }
        }
    },
    {
        nome: "Florian Thauvin",
        clube: "Lens",
        estatisticas: {
            ligue1: { jogos: 9, gols: 4, assistencias: 7 }
        }
    },


    // CHAMPIONS LEAGUE
    {
        nome: "Fabián Ruiz",
        clube: "Paris Saint-Germain",
        estatisticas: {
            championsLeague: { jogos: 4, gols: 4, assistencias: 1 }
        }
    },
    {
        nome: "Aleksey Batrakov",
        clube: "Galatasaray",
        estatisticas: {
            championsLeague: { jogos: 4, gols: 4, assistencias: 0 }
        }
    },


    // BRASILEIRÃO
    {
        nome: "Kevin Viveros",
        clube: "Athletico-PR",
        estatisticas: {
            brasileirao: { jogos: 31, gols: 21, assistencias: 3 }
        }
    },
    {
        nome: "Pedro",
        clube: "Flamengo",
        estatisticas: {
            brasileirao: { jogos: 33, gols: 18, assistencias: 6 }
        }
    },
    {
        nome: "Gabriel Barbosa",
        clube: "Santos",
        estatisticas: {
            brasileirao: { jogos: 25, gols: 15, assistencias: 3 }
        }
    },
    {
        nome: "Kaio Jorge",
        clube: "Cruzeiro",
        estatisticas: {
            brasileirao: { jogos: 26, gols: 12, assistencias: 2 }
        }
    },
    {
        nome: "Josué",
        clube: "Coritiba",
        estatisticas: {
            brasileirao: { jogos: 30, gols: null, assistencias: 11 }
        }
    },
    {
        nome: "Andreas Pereira",
        clube: "Palmeiras",
        estatisticas: {
            brasileirao: { jogos: 31, gols: null, assistencias: 10 }
        }
    },
    {
        nome: "Samuel Lino",
        clube: "Flamengo",
        estatisticas: {
            brasileirao: { jogos: 32, gols: 11, assistencias: 9 }
        }
    }

];


/* CLUBES GERADOS AUTOMATICAMENTE */

const clubes = [
    ...new Set(jogadores.map(jogador => jogador.clube))
].map(nome => ({ nome }));


/* PARTIDAS */

const partidas = [];


/*
MODELO DE CADASTRO DE JOGADOR:

{
    nome: "Nome do jogador",
    clube: "Nome do clube",
    posicao: "ATA",
    notaMedia: 8.5,

    estatisticas: {
        premierLeague: {
            jogos: 10,
            gols: 5,
            assistencias: 3
        }
    }
}

Posições:
GOL = Goleiro
LAT = Lateral
ZAG = Zagueiro
MEI = Meio-campista
ATA = Atacante

Os valores acima são apenas um exemplo
de estrutura, não estatísticas reais.
*/


/* 3. CALCULAR ESTATÍSTICAS */

function obterEstatisticasJogador(jogador) {

    const totais = {
        jogos: 0,
        gols: 0,
        assistencias: 0
    };

    for (const estatistica of Object.values(jogador.estatisticas)) {

        totais.jogos += estatistica.jogos ?? 0;
        totais.gols += estatistica.gols ?? 0;
        totais.assistencias += estatistica.assistencias ?? 0;

    }

    return totais;
}


/* 4. GERAR RANKINGS */

function obterRanking(competicaoId, criterio) {

    return jogadores
        .filter(jogador => jogador.estatisticas[competicaoId])
        .sort((a, b) => {

            return b.estatisticas[competicaoId][criterio] -
                   a.estatisticas[competicaoId][criterio];

        });
}

/* ==========================================
   EXIBIR RANKINGS
========================================== */

function exibirRankings() {

    const competicaoId = document.getElementById(
        "seletorCompeticao"
    ).value;

    const areaGols = document.getElementById("rankingGols");

    const areaAssistencias = document.getElementById(
        "rankingAssistencias"
    );


    // RANKING DE GOLS

    const artilheiros = obterRanking(
        competicaoId,
        "gols"
    );

    areaGols.innerHTML = "";

    artilheiros
        .filter(jogador =>
            jogador.estatisticas[competicaoId].gols !== null
        )
        .slice(0, 10)
        .forEach((jogador, indice) => {

            const dados = jogador.estatisticas[competicaoId];

            const item = document.createElement("p");

            item.textContent =
                `${indice + 1}º ${jogador.nome} - ${dados.gols} gols`;

            areaGols.appendChild(item);

        });


    // RANKING DE ASSISTÊNCIAS

    const assistentes = obterRanking(
        competicaoId,
        "assistencias"
    );

    areaAssistencias.innerHTML = "";

    assistentes
        .filter(jogador =>
            jogador.estatisticas[competicaoId].assistencias !== null
        )
        .slice(0, 10)
        .forEach((jogador, indice) => {

            const dados = jogador.estatisticas[competicaoId];

            const item = document.createElement("p");

            item.textContent =
                `${indice + 1}º ${jogador.nome} - ${dados.assistencias} assistências`;

            areaAssistencias.appendChild(item);

        });


    // MENSAGENS QUANDO NÃO EXISTIREM DADOS

    if (areaGols.children.length === 0) {
        areaGols.textContent =
            "Nenhum dado de gols disponível.";
    }

    if (areaAssistencias.children.length === 0) {
        areaAssistencias.textContent =
            "Nenhum dado de assistências disponível.";
    }

}


/* ==========================================
   DESTAQUES DAS COMPETIÇÕES
========================================== */

function exibirDestaques() {

    const area = document.getElementById(
        "destaquesCompeticoes"
    );

    area.innerHTML = "";

    competicoes.forEach(competicao => {

        const artilheiros = obterRanking(
            competicao.id,
            "gols"
        ).filter(jogador =>
            jogador.estatisticas[competicao.id].gols !== null
        );

        const assistentes = obterRanking(
            competicao.id,
            "assistencias"
        ).filter(jogador =>
            jogador.estatisticas[competicao.id].assistencias !== null
        );

        const artilheiro = artilheiros[0];
        const assistente = assistentes[0];

        const gols = artilheiro
            ? artilheiro.estatisticas[competicao.id].gols
            : "Sem dados";

        const assistencias = assistente
            ? assistente.estatisticas[competicao.id].assistencias
            : "Sem dados";

        const card = document.createElement("div");

        card.className = "card-destaque";

        card.innerHTML = `
            <h3>${competicao.nome}</h3>

            <p class="destaque-label">🏆 Artilheiro</p>
            <p class="destaque-jogador">
                ${artilheiro ? artilheiro.nome : "Não disponível"}
            </p>
            <p class="destaque-numero">
                ${gols} ${artilheiro ? "gols" : ""}
            </p>

            <hr>

            <p class="destaque-label">🎯 Líder de assistências</p>
            <p class="destaque-jogador">
                ${assistente ? assistente.nome : "Não disponível"}
            </p>
            <p class="destaque-numero">
                ${assistencias} ${assistente ? "assistências" : ""}
            </p>
        `;

        area.appendChild(card);

    });

}


/* 5. SELEÇÃO DA TEMPORADA - 4-3-3 */

function obterSelecao433() {

    const posicoes = {
        GOL: 1,
        LAT: 2,
        ZAG: 2,
        MEI: 3,
        ATA: 3
    };

    const selecao = {};

    for (const posicao in posicoes) {

        selecao[posicao] = jogadores
            .filter(jogador => jogador.posicao === posicao)
            .sort((a, b) => b.notaMedia - a.notaMedia)
            .slice(0, posicoes[posicao]);

    }

    return selecao;
}


/* 6. EXIBIR ESTATÍSTICAS NO DASHBOARD */

function atualizarDashboard() {

    const totalGols = jogadores.reduce((total, jogador) => {

        return total + obterEstatisticasJogador(jogador).gols;

    }, 0);

    document.getElementById("totalClubes").textContent =
        clubes.length;

    document.getElementById("totalJogadores").textContent =
        jogadores.length;

    document.getElementById("totalGols").textContent =
        totalGols;

    document.getElementById("totalPartidas").textContent =
        partidas.length;

}


/* 7. EXIBIR JOGADORES */

function exibirJogadores() {

    const area = document.getElementById("listaJogadores");

    if (jogadores.length === 0) {

        area.textContent =
            "Aguardando cadastro dos jogadores da temporada 2026/27.";

        return;
    }

    area.innerHTML = "";

    jogadores.forEach(jogador => {

        const dados = obterEstatisticasJogador(jogador);

        const card = document.createElement("div");

        card.className = "card-jogador";

        card.innerHTML = `
            <h3>${jogador.nome}</h3>
            <p>${jogador.clube}</p>
            <p>Jogos: ${dados.jogos}</p>
            <p>Gols: ${dados.gols}</p>
            <p>Assistências: ${dados.assistencias}</p>
        `;

        area.appendChild(card);

    });

}


/* 8. EXIBIR CLUBES */

function exibirClubes() {

    const area = document.getElementById("listaClubes");

    if (clubes.length === 0) {

        area.textContent =
            "Aguardando cadastro dos clubes participantes.";

        return;
    }

    area.innerHTML = "";

    clubes.forEach(clube => {

        const item = document.createElement("p");

        item.textContent = clube.nome;

        area.appendChild(item);

    });

}


/* 9. INICIALIZAÇÃO DO SISTEMA */

function iniciarSistema() {

    atualizarDashboard();

    exibirJogadores();

    exibirClubes();
    document.getElementById("seletorCompeticao")
    .addEventListener("change", exibirRankings);

    exibirRankings();
    
    exibirDestaques();

    console.log("Football Analytics iniciado!");

    console.log("Temporada: 2026/27");

    console.log("Competições cadastradas:", competicoes);

}

iniciarSistema();