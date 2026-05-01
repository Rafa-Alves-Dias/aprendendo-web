// ========================================
// GALERIA DE FILMES - PROJETO FINAL
// ========================================

// 1. ARRAY DE OBJETOS - BASE DE DADOS DOS FILMES
let filmes = [
{ titulo: "Matrix", genero: "Ficção Científica", ano: 1999, nota: 5, poster: "https://placehold.co/220x300/667eea/ffffff?text=Matrix" },
{ titulo: "Titanic", genero: "Romance", ano: 1997, nota: 4, poster: "https://placehold.co/220x300/e91e63/ffffff?text=Titanic" },
{ titulo: "Coringa", genero: "Drama", ano: 2019, nota: 5, poster: "https://placehold.co/220x300/ff9800/ffffff?text=Coringa" },
{ titulo: "Vingadores: Ultimato", genero: "Ação", ano: 2019, nota: 5, poster: "https://placehold.co/220x300/9c27b0/ffffff?text=Vingadores" },
{ titulo: "Parasita", genero: "Drama", ano: 2019, nota: 5, poster: "https://placehold.co/220x300/4caf50/ffffff?text=Parasita" },
{ titulo: "Interestelar", genero: "Ficção Científica", ano: 2014, nota: 5, poster: "https://placehold.co/220x300/2196f3/ffffff?text=Interestelar" },
{ titulo: "O Poderoso Chefão", genero: "Drama", ano: 1972, nota: 5, poster: "https://placehold.co/220x300/795548/ffffff?text=Chefao" },
{ titulo: "Pulp Fiction", genero: "Drama", ano: 1994, nota: 5, poster: "https://placehold.co/220x300/f44336/ffffff?text=Pulp+Fiction" },
{ titulo: "Forrest Gump", genero: "Drama", ano: 1994, nota: 5, poster: "https://placehold.co/220x300/009688/ffffff?text=Forrest+Gump" },
{ titulo: "A Origem", genero: "Ficção Científica", ano: 2010, nota: 5, poster: "https://placehold.co/220x300/607d8b/ffffff?text=A+Origem" },
{ titulo: "Se7en", genero: "Terror", ano: 1995, nota: 4, poster: "https://placehold.co/220x300/212121/ffffff?text=Se7en" },
{ titulo: "A Vida é Bela", genero: "Drama", ano: 1997, nota: 5, poster: "https://placehold.co/220x300/ffc107/ffffff?text=Vida+Bela" },
{ titulo: "O Silêncio dos Inocentes", genero: "Terror", ano: 1991, nota: 5, poster: "https://placehold.co/220x300/8bc34a/ffffff?text=Silencio" },
{ titulo: "Gladiador", genero: "Ação", ano: 2000, nota: 4, poster: "https://placehold.co/220x300/ff5722/ffffff?text=Gladiador" },
{ titulo: "De Volta para o Futuro", genero: "Ficção Científica", ano: 1985, nota: 5, poster: "https://placehold.co/220x300/cddc39/ffffff?text=Futuro" },
{ titulo: "As Branquelas", genero: "Comédia", ano: 2004, nota: 3, poster: "https://placehold.co/220x300/ffeb3b/ffffff?text=Branquelas" },
{ titulo: "Se Beber, Não Case", genero: "Comédia", ano: 2009, nota: 4, poster: "https://placehold.co/220x300/03a9f4/ffffff?text=Beber" },
{ titulo: "Todo Mundo em Pânico", genero: "Comédia", ano: 2000, nota: 3, poster: "https://placehold.co/220x300/e91e63/ffffff?text=Panico" }
];

// 2. BUSCAR ELEMENTOS HTML
let inputBusca = document.getElementById("busca");
let selectGenero = document.getElementById("genero");
let inputNotaMinima = document.getElementById("notaMinima");
let valorNota = document.getElementById("valorNota");
let selectOrdenar = document.getElementById("ordenar");
let btnLimpar = document.getElementById("btnLimpar");

let listaFilmes = document.getElementById("listaFilmes");
let qtdExibida = document.getElementById("qtdExibida");
let qtdTotal = document.getElementById("qtdTotal");

// 3. VARIÁVEL GLOBAL PARA ARMAZENAR FILMES FILTRADOS
let filmesExibidos = [...filmes]; // Cópia do array original

// ========================================
// 4. FUNÇÃO PRINCIPAL: EXIBIR FILMES
// ========================================
function exibirFilmes(arrayFilmes) {
    // 4.1 Limpar a lista atual
    listaFilmes.innerHTML = "";

    // 4.2 Verificar se há filmes para exibir
    if (arrayFilmes.length === 0) {
        listaFilmes.innerHTML = `
            <div class="mensagem-vazio">
                <p>😔 Nenhum filme encontrado com esses filtros.</p>
            </div>
        `;
        qtdExibida.textContent = 0;
        return;
    }

    // 4.3 Loop para criar os cards
    for (let i = 0; i < arrayFilmes.length; i++) {
        let filme = arrayFilmes[i];

        // CRIAR o card
        let card = document.createElement("div");
        card.className = "card-filme";

        // CRIAR o poster
        let poster = document.createElement("img");
        poster.className = "filme-poster";
        poster.src = filme.poster;
        poster.alt = filme.titulo;

        // CRIAR a área de informações
        let info = document.createElement("div");
        info.className = "filme-info";

        // CRIAR o título
        let titulo = document.createElement("div");
        titulo.className = "filme-titulo";
        titulo.textContent = filme.titulo;

        // CRIAR área de detalhes (ano + nota)
        let detalhes = document.createElement("div");
        detalhes.className = "filme-detalhes";

        let ano = document.createElement("span");
        ano.className = "filme-ano";
        ano.textContent = filme.ano;

        let nota = document.createElement("span");
        nota.className = "filme-nota";
        nota.textContent = "⭐ " + filme.nota + "/5";

        detalhes.appendChild(ano);
        detalhes.appendChild(nota);

        // CRIAR o gênero
        let genero = document.createElement("span");
        genero.className = "filme-genero";
        genero.textContent = filme.genero;

        // MONTAR a estrutura
        info.appendChild(titulo);
        info.appendChild(detalhes);
        info.appendChild(genero);

        card.appendChild(poster);
        card.appendChild(info);

        // ADICIONAR na página
        listaFilmes.appendChild(card);
    }

    // 4.4 Atualizar contador
    qtdExibida.textContent = arrayFilmes.length;
}

// ========================================
// 5. FUNÇÃO: FILTRAR FILMES
// ========================================
function filtrarFilmes() {
    // 5.1 Pegar valores dos filtros
    let textoBusca = inputBusca.value.toLowerCase().trim();
    let generoSelecionado = selectGenero.value;
    let notaSelecionada = parseInt(inputNotaMinima.value);

    // 5.2 Começar com todos os filmes
    let resultado = filmes;

    // 5.3 Filtrar por busca (nome)
    if (textoBusca !== "") {
        resultado = resultado.filter(function(filme) {
            return filme.titulo.toLowerCase().includes(textoBusca);
        });
    }

    // 5.4 Filtrar por gênero
    if (generoSelecionado !== "todos") {
        resultado = resultado.filter(function(filme) {
            return filme.genero === generoSelecionado;
        });
    }

    // 5.5 Filtrar por nota mínima
    resultado = resultado.filter(function(filme) {
        return filme.nota >= notaSelecionada;
    });

    // 5.6 Aplicar ordenação
    let criterio = selectOrdenar.value;

    if (criterio === "titulo") {
        resultado.sort(function(a, b) {
            return a.titulo.localeCompare(b.titulo);
        });
    } else if (criterio === "ano") {
        resultado.sort(function(a, b) {
            return b.ano - a.ano; // Mais recente primeiro
        });
    } else if (criterio === "nota") {
        resultado.sort(function(a, b) {
            return b.nota - a.nota; // Maior nota primeiro
        });
    }

    // 5.7 Atualizar array global e exibir
    filmesExibidos = resultado;
    exibirFilmes(filmesExibidos);
}

// ========================================
// 6. FUNÇÃO: LIMPAR FILTROS
// ========================================
function limparFiltros() {
    // 6.1 Resetar valores dos inputs
    inputBusca.value = "";
    selectGenero.value = "todos";
    inputNotaMinima.value = 0;
    valorNota.textContent = 0;
    selectOrdenar.value = "padrao";

    // 6.2 Exibir todos os filmes
    filmesExibidos = [...filmes];
    exibirFilmes(filmesExibidos);
}

// ========================================
// 7. EVENTOS
// ========================================

// Busca em tempo real
inputBusca.addEventListener("input", filtrarFilmes);

// Filtro de gênero
selectGenero.addEventListener("change", filtrarFilmes);

// Filtro de nota (atualizar valor exibido)
inputNotaMinima.addEventListener("input", function() {
    valorNota.textContent = inputNotaMinima.value;
    filtrarFilmes();
});

// Ordenação
selectOrdenar.addEventListener("change", filtrarFilmes);

// Botão limpar
btnLimpar.addEventListener("click", limparFiltros);

// ========================================
// 8. INICIALIZAÇÃO
// ========================================

// Atualizar total de filmes
qtdTotal.textContent = filmes.length;

// Exibir todos os filmes ao carregar
exibirFilmes(filmesExibidos);
