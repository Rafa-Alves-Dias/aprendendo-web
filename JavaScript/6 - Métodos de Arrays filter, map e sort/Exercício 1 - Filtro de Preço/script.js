// ========================================
// CATÁLOGO COM FILTROS - USANDO MÉTODOS DE ARRAYS
// ========================================

// 1. ARRAY DE PRODUTOS
let produtos = [
    { nome: "Notebook Gamer", preco: 4500.00, estoque: 12, categoria: "Eletrônicos" },
    { nome: "Mouse Óptico", preco: 45.00, estoque: 150, categoria: "Periféricos" },
    { nome: "Teclado Mecânico", preco: 320.00, estoque: 35, categoria: "Periféricos" },
    { nome: "Monitor 24 polegadas", preco: 890.00, estoque: 20, categoria: "Eletrônicos" },
    { nome: "Webcam Full HD", preco: 250.00, estoque: 45, categoria: "Periféricos" },
    { nome: "Headset Gamer", preco: 180.00, estoque: 60, categoria: "Periféricos" },
    { nome: "SSD 1TB", preco: 450.00, estoque: 80, categoria: "Eletrônicos" },
    { nome: "Mousepad RGB", preco: 85.00, estoque: 120, categoria: "Periféricos" }
];

// 2. BUSCAR ELEMENTOS
let inputBusca = document.getElementById("busca");
let selectCategoria = document.getElementById("categoria");
let selectOrdenar = document.getElementById("ordenar");
let btnLimpar = document.getElementById("btnLimpar");
let listaProdutos = document.getElementById("listaProdutos");
let contador = document.getElementById("contador");

// 1.3 - cria o DOM do select de preço
let selectFaixaPreco = document.getElementById("faixaPreco");

// ========================================
// 3. FUNÇÃO: EXIBIR PRODUTOS
// ========================================
function exibirProdutos(arrayProdutos = produtos) {
    // Limpar lista
    listaProdutos.innerHTML = "";
    console.log(arrayProdutos.length === 0);
    // Verificar se há produtos
    if (arrayProdutos.length === 0) {
        listaProdutos.innerHTML = "<p style='color: white; text-align: center; grid-column: 1/-1;'>Nenhum produto encontrado 😔</p>";
        contador.innerHTML = "Exibindo <strong>0</strong> produtos";
        return;
    }

    // Criar cards
    arrayProdutos.forEach(function(produto) {
        let card = document.createElement("div");
        card.className = "card-produto";

        card.innerHTML = `
            <div class="produto-nome">${produto.nome}</div>
            <div class="produto-preco">R$ ${produto.preco.toFixed(2)}</div>
            <div class="produto-estoque">Estoque: ${produto.estoque} unidades</div>
            <span class="produto-categoria">${produto.categoria}</span>
        `;

        listaProdutos.appendChild(card);
    });

    // Atualizar contador
    contador.innerHTML = `Exibindo <strong>${arrayProdutos.length}</strong> produtos`;
}

// ========================================
// 4. FUNÇÃO: FILTRAR PRODUTOS (USANDO .filter()!)
// ========================================
function filtrarProdutos() {
    let textoBusca = inputBusca.value.toLowerCase().trim();
    let categoriaSelecionada = selectCategoria.value;
    let ordenacao = selectOrdenar.value;
    // 1.4 - variavel de filtro de preco
    let valorLimite =  selectFaixaPreco.value;

    // COMEÇAR COM TODOS OS PRODUTOS
    let resultado = produtos;

    // FILTRAR POR BUSCA (usando .filter()!)
    if (textoBusca !== "") {
        resultado = resultado.filter(function(produto) {
            return produto.nome.toLowerCase().includes(textoBusca);
        });
    }

    // FILTRAR POR CATEGORIA (usando .filter()!)
    if (categoriaSelecionada !== "todos") {
        resultado = resultado.filter(function(produto) {
            return produto.categoria === categoriaSelecionada;
        });
    }

    // ORDENAR (usando .sort()!)
    if (ordenacao === "nome") {
        resultado.sort(function(a, b) {
            return a.nome.localeCompare(b.nome);
        });
    } else if (ordenacao === "preco-asc") {
        resultado.sort(function(a, b) {
            return a.preco - b.preco;
        });
    } else if (ordenacao === "preco-desc") {
        resultado.sort(function(a, b) {
            return b.preco - a.preco;
        });
    }
    
    // 1.5 - filtro por preco
    if(valorLimite === "ate100"){
        resultado = resultado.filter(produto => produto.preco < 100);
    }else if(valorLimite === "entre100e500"){
        resultado = resultado.filter(produto => produto.preco >= 100 && produto.preco < 500);
    } else if(valorLimite === "acima500"){
        resultado = resultado.filter(produto => produto.preco >= 500);
    }
    else{
        alert("error: filtro de preço falhou");
    }

    // EXIBIR RESULTADO
    exibirProdutos(resultado);
}

// ========================================
// 5. FUNÇÃO: LIMPAR FILTROS
// ========================================
function limparFiltros() {
    inputBusca.value = "";
    selectCategoria.value = "todos";
    selectOrdenar.value = "padrao";
    selectFaixaPreco = "nenhum";
    exibirProdutos();
}

// ========================================
// 6. EVENTOS
// ========================================
inputBusca.addEventListener("input", filtrarProdutos);
selectCategoria.addEventListener("change", filtrarProdutos);
selectOrdenar.addEventListener("change", filtrarProdutos);
btnLimpar.addEventListener("click", limparFiltros);

// ========================================
// 7. INICIALIZAR
// ========================================
exibirProdutos();
