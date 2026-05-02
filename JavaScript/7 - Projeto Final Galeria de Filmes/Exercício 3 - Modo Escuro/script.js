// ========================================
// GALERIA DE FILMES - PROJETO FINAL
// ========================================

// 1. ARRAY DE OBJETOS - BASE DE DADOS DOS FILMES
// [1] - adicionando filmes ao catálogo e capas reais
let filmes = [
// NOTAS 9.0+
{ titulo: "Um Sonho de Liberdade", genero: "Drama", ano: 1994, nota: 9.3, poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg" },
{ titulo: "O Poderoso Chefão", genero: "Drama", ano: 1972, nota: 9.2, poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg" },
{ titulo: "O Poderoso Chefão - Parte II", genero: "Drama", ano: 1974, nota: 9.0, poster: "https://br.web.img3.acsta.net/medias/nmedia/18/90/93/27/20120933.jpg" },

// [2.5] - NOVO FILME DA DÉCADA DE 70
{ titulo: "Taxi Driver", genero: "Drama", ano: 1976, nota: 8.8, poster: "https://upload.wikimedia.org/wikipedia/pt/3/33/Taxi_Driver_%281976_film_poster%29.jpg" },

// NOTAS 8.0 - 8.9
{ titulo: "Pulp Fiction", genero: "Drama", ano: 1994, nota: 8.9, poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg" },
{ titulo: "Clube da Luta", genero: "Drama", ano: 1999, nota: 8.8, poster: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg" },
{ titulo: "Forrest Gump", genero: "Drama", ano: 1994, nota: 8.8, poster: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg" },
{ titulo: "A Origem", genero: "Ficção Científica", ano: 2010, nota: 8.8, poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg" },
{ titulo: "Matrix", genero: "Ficção Científica", ano: 1999, nota: 8.7, poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg" },
{ titulo: "Interestelar", genero: "Ficção Científica", ano: 2014, nota: 8.7, poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg" },
{ titulo: "Os Bons Companheiros", genero: "Drama", ano: 1990, nota: 8.7, poster: "https://br.web.img2.acsta.net/medias/nmedia/18/93/46/41/20258439.jpg" },
{ titulo: "Cidade de Deus", genero: "Drama", ano: 2002, nota: 8.6, poster: "https://upload.wikimedia.org/wikipedia/pt/1/10/CidadedeDeus.jpg" },
{ titulo: "Se7en", genero: "Terror", ano: 1995, nota: 8.6, poster: "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg" },
{ titulo: "A Vida é Bela", genero: "Drama", ano: 1997, nota: 8.6, poster: "https://upload.wikimedia.org/wikipedia/pt/a/af/La_vita_%C3%A8_bella.jpg" },
{ titulo: "O Silêncio dos Inocentes", genero: "Terror", ano: 1991, nota: 8.6, poster: "https://m.media-amazon.com/images/I/51iUTsAbgbL._AC_UF1000,1000_QL80_.jpg" },
{ titulo: "Parasita", genero: "Drama", ano: 2019, nota: 8.5, poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg" },
{ titulo: "Gladiador", genero: "Ação", ano: 2000, nota: 8.5, poster: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg" },
{ titulo: "O Rei Leão", genero: "Animação", ano: 1994, nota: 8.5, poster: "https://img.elo7.com.br/product/zoom/26925F8/big-poster-filme-rei-leao-1994-lo04-tamanho-90x60-cm-rei-leao-disney.jpg" },
{ titulo: "De Volta para o Futuro", genero: "Ficção Científica", ano: 1985, nota: 8.5, poster: "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg" },
{ titulo: "Coringa", genero: "Drama", ano: 2019, nota: 8.4, poster: "https://img.elo7.com.br/product/zoom/2A1A4BF/big-poster-filme-joker-coringa-joaquin-phoenix-lo02-90x60-cm-poster.jpg" },
{ titulo: "Vingadores: Ultimato", genero: "Ação", ano: 2019, nota: 8.4, poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg" },

// NOTAS 7.0 - 7.9
{ titulo: "Titanic", genero: "Romance", ano: 1997, nota: 7.9, poster: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg" },
{ titulo: "O Lobo de Wall Street", genero: "Comédia", ano: 2013, nota: 7.9, poster: "https://br.web.img2.acsta.net/pictures/13/12/30/18/11/111145.jpg" },
{ titulo: "Harry Potter e as Relíquias da Morte - Parte 2", genero: "Fantasia", ano: 2011, nota: 7.8, poster: "https://upload.wikimedia.org/wikipedia/pt/thumb/3/3a/Harry_Potter_and_the_Deathly_Hallows_-_Part_2.jpg/250px-Harry_Potter_and_the_Deathly_Hallows_-_Part_2.jpg" },
{ titulo: "Se Beber, Não Case", genero: "Comédia", ano: 2009, nota: 7.7, poster: "https://br.web.img3.acsta.net/medias/nmedia/18/87/29/37/19874003.jpg" },

// NOTAS 6.0 - 6.9
{ titulo: "As Aventuras de Pi", genero: "Aventura", ano: 2012, nota: 6.8, poster: "https://m.media-amazon.com/images/M/MV5BNTg2OTY2ODg5OF5BMl5BanBnXkFtZTcwODM5MTYxOA@@._V1_FMjpg_UX1000_.jpg" },
{ titulo: "Velozes e Furiosos 7", genero: "Ação", ano: 2015, nota: 6.6, poster: "https://m.media-amazon.com/images/M/MV5BMTQxOTA2NDUzOV5BMl5BanBnXkFtZTgwNzY2MTMxMzE@._V1_FMjpg_UX1000_.jpg" },
{ titulo: "Todo Mundo em Pânico", genero: "Comédia", ano: 2000, nota: 6.2, poster: "https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/28/03/19873867.jpg" },

// NOTAS 5.0 - 5.9
{ titulo: "As Branquelas", genero: "Comédia", ano: 2004, nota: 5.7, poster: "https://upload.wikimedia.org/wikipedia/pt/d/de/White_chicks.jpeg" },
{ titulo: "Cinquenta Tons de Cinza", genero: "Romance", ano: 2015, nota: 5.3, poster: "https://m.media-amazon.com/images/I/61KNsq9npcL._AC_UF1000,1000_QL80_.jpg" },
{ titulo: "Emoji: O Filme", genero: "Animação", ano: 2017, nota: 5.2, poster: "https://upload.wikimedia.org/wikipedia/pt/3/3a/The_Emoji_Movie_p%C3%B4ster.jpg" },

// [2.5] - NOVO FILME DA DÉCADA DE 2020
{ titulo: "Morbius", genero: "Ação", ano: 2022, nota: 5.2, poster: "https://image.tmdb.org/t/p/w500/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg" },
// [2.5] - NOVO FILME DA DÉCADA DE 2020
{ titulo: "Matrix Resurrections", genero: "Ficção Científica", ano: 2021, nota: 5.7, poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7wwby7fL49Yf6bZqvQPbrheUkBg7UoJZjyw&s" },

// NOTAS 4.0 - 4.9
{ titulo: "Transformers: A Era da Extinção", genero: "Ação", ano: 2014, nota: 4.8, poster: "https://br.web.img3.acsta.net/pictures/14/06/20/23/27/478475.jpg" },
{ titulo: "Tartarugas Ninja", genero: "Ação", ano: 2014, nota: 4.6, poster: "https://br.web.img2.acsta.net/pictures/14/07/18/13/58/562226.jpg" },
{ titulo: "Anaconda 2: A Caçada", genero: "Terror", ano: 2004, nota: 4.2, poster: "https://m.media-amazon.com/images/M/MV5BZTUwZGY2NzktNzRkYS00MTBlLWExMDQtYWY4MDY3ZmExYzAwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },

// NOTAS 3.0 - 3.9
{ titulo: "Tom & Jerry: O Filme", genero: "Animação", ano: 1992, nota: 3.8, poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCuPOAlGVPK97ZMj6yOFtM6MluxWGM3fe-iw&s" },
{ titulo: "Norbit: Uma Comédia de Peso", genero: "Comédia", ano: 2007, nota: 3.6, poster: "https://upload.wikimedia.org/wikipedia/pt/3/34/Norbit.jpg" },
{ titulo: "Dragonball Evolution", genero: "Ação", ano: 2009, nota: 3.5, poster: "https://upload.wikimedia.org/wikipedia/pt/a/a6/DragonballEvolution.jpg" },

// NOTAS 2.0 - 2.9
{ titulo: "The Room", genero: "Drama", ano: 2003, nota: 2.7, poster: "https://media.fstatic.com/k_wbXQcPO9_lVYVQadiuJiuETs8=/350x525/smart/filters:format(webp)/media/movies/covers/2016/03/the-room_t23077.gif" },
{ titulo: "Birdemic: A Ameaça", genero: "Terror", ano: 2010, nota: 2.1, poster: "https://m.media-amazon.com/images/I/51IDKwzzMAL._AC_UF1000,1000_QL80_.jpg" },
{ titulo: "Megan is Missing", genero: "Terror", ano: 2011, nota: 2.0, poster: "https://m.media-amazon.com/images/I/81d2mjHfs9L._AC_UF894,1000_QL80_.jpg" },


// NOTAS 1.0 - 1.9
{ titulo: "O Último Mestre do Ar", genero: "Fantasia", ano: 2010, nota: 1.8, poster: "https://obarquinhocultural.com/wp-content/uploads/2010/07/abf64-ultimomestredoar_12.jpg" },
{ titulo: "Fading of the Cries", genero: "Terror", ano: 2011, nota: 1.7, poster: "https://m.media-amazon.com/images/M/MV5BNDVlZjdhNDAtNDRlOS00NDA2LWJjYTctY2ExN2RkYmY2ZWE1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
{ titulo: "Gesto", genero: "Drama", ano: 2011, nota: 1.6, poster: "https://m.media-amazon.com/images/M/MV5BMjI4NmQ5YmYtZDY5Yy00YWFhLThhZmQtNzYxZTFjZTY2OWQ4XkEyXkFqcGc@._V1_.jpg" },

// [2.5] - NOVO FILME DA DÉCADA DE 2020
{ titulo: "Madame Teia", genero: "Ação", ano: 2024, nota: 1.5, poster: "https://br.web.img3.acsta.net/pictures/23/12/12/15/59/2772653.jpg" },

// NOTAS 0.0 - 0.9
{ titulo: "Superman IV: Em Busca da Paz", genero: "Ação", ano: 1987, nota: 0.8, poster: "https://i.redd.it/n9q78yaa7b7a1.jpg" },
{ titulo: "Glitter", genero: "Musical", ano: 2001, nota: 0.6, poster: "https://m.media-amazon.com/images/M/MV5BNWI1ZDEzMDgtMGJmZC00MzE5LTkxODMtZThhMGU3NjlhYTMxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
{ titulo: "The Garbage Pail Kids Movie", genero: "Comédia", ano: 1987, nota: 0.5, poster: "https://m.media-amazon.com/images/I/81wBLkGlGgL._AC_UF1000,1000_QL80_.jpg" }
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

// [2.2] - variavel para o filtro de década
let selectFiltrarDec = document.getElementById("filtro-decada");

// [3.2] - varável do botão de tema
let btnTema = document.getElementById("btnTema");

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
        nota.textContent = "⭐ " + filme.nota + "/10";

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
    // [2.3] filtrando por década
    let decada = parseInt(selectFiltrarDec.value);
    if(!(isNaN(decada))){
        switch(true) {
            case(decada === 1970): // (71-80)
            resultado = resultado.filter(filme => filme.ano < 1981);
            break;
            case(decada === 1980): // (81-90)
            resultado = resultado.filter(filme => filme.ano >= 1981 && filme.ano < 1991);
            break;
            case(decada === 1990): // (91-2000)
            resultado = resultado.filter(filme => filme.ano >= 1991 && filme.ano < 2001);
            break;
            case(decada === 2000): // (2001- 2010)
            resultado = resultado.filter(filme => filme.ano >= 2001 && filme.ano < 2011);
            break;
            case(decada === 2010): // (2011 - 2020)
            resultado = resultado.filter(filme => filme.ano >= 2011 && filme.ano < 2021);
            break;
            case(decada === 2020): // (2021 - 2030)
            resultado = resultado.filter(filme => filme.ano >= 2021 && filme.ano < 2031);
            break;
            default:
                alert("erro no switch case de década");
        }
    }

    

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
    } 
    // [0.2] - ordenação de maior nota e menor nota
    else if (criterio === "maiorNota") {
        resultado.sort(function(a, b) {
            return b.nota - a.nota; // Maior nota primeiro
        });
    } else if (criterio === "menorNota") {
        resultado.sort(function(a, b) {
            return a.nota - b.nota; // Menor nota primeiro
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
    selectFiltrarDec.value = "padrao";

    // 6.2 Exibir todos os filmes
    filmesExibidos = [...filmes];
    exibirFilmes(filmesExibidos);
}

// [3.4] - função para trocar tema
function mudarTema(){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        btnTema.textContent = "☀️ Modo Claro";
    } else{
        btnTema.textContent = "🌙 Modo Escuro";
    }
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

// [2.4] - Event Listenner do select de década
selectFiltrarDec.addEventListener("change", filtrarFilmes);

// Ordenação
selectOrdenar.addEventListener("change", filtrarFilmes);

// Botão limpar
btnLimpar.addEventListener("click", limparFiltros);

// [3.3] - Event Listener do botão de tema
btnTema.addEventListener("click", mudarTema);

// ========================================
// 8. INICIALIZAÇÃO
// ========================================

// Atualizar total de filmes
qtdTotal.textContent = filmes.length;

// Exibir todos os filmes ao carregar
exibirFilmes(filmesExibidos);
