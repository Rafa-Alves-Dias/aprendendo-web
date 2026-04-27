// ========================================
// CATÁLOGO DE PRODUTOS
// ========================================

// 1. ARRAY DE OBJETOS (NOSSOS DADOS!)
let produtos = [
    { nome: "Notebook Gamer", marca: "Dell", preco: 4500.00, estoque: 12, categoria: "Eletrônicos" },
    { nome: "Mouse Óptico", marca: "Razer", preco: 45.00, estoque: 150, categoria: "Periféricos" },
    { nome: "Teclado Mecânico", marca: "Redragon", preco: 320.00, estoque: 35, categoria: "Periféricos" },
    { nome: "Monitor 24 polegadas", marca: "LG", preco: 890.00, estoque: 20, categoria: "Eletrônicos" },
    { nome: "Webcam Full HD", marca: "Microsoft", preco: 250.00, estoque: 45, categoria: "Periféricos" },
    { nome: "Headset Gamer", marca: "HyperX", preco: 180.00, estoque: 60, categoria: "Periféricos" }
];

// 2. BUSCAR O CONTAINER ONDE VAMOS ADICIONAR OS CARDS
let listaProdutos = document.getElementById("listaProdutos");

// 3. FUNÇÃO PARA EXIBIR TODOS OS PRODUTOS
function exibirProdutos() {
    // Loop para percorrer TODOS os produtos
    for (let i = 0; i < produtos.length; i++) {
        // 3.1 Pegar o produto atual
        let produto = produtos[i];

        // 3.2 CRIAR o card (div)
        let card = document.createElement("div");
        card.className = "card-produto";

        // 3.3 CRIAR elemento para o nome
        let nome = document.createElement("div");
        nome.className = "produto-nome";
        nome.textContent = produto.nome;

        // 5. CRIAR elemento para a marca
        let marca = document.createElement("div");
        marca.className = "card-marca";
        marca.textContent = produto.marca;

        // 3.4 CRIAR elemento para o preço
        let preco = document.createElement("div");
        preco.className = "produto-preco";
        preco.textContent = "R$ " + produto.preco.toFixed(2);

        // 3.5 CRIAR elemento para o estoque
        let estoque = document.createElement("div");
        estoque.className = "produto-estoque";
        estoque.textContent = "Estoque: " + produto.estoque + " unidades";

        // 3.6 CRIAR elemento para a categoria
        let categoria = document.createElement("span");
        categoria.className = "produto-categoria";
        categoria.textContent = produto.categoria;

        // 3.7 MONTAR o card: adicionar tudo dentro dele
        card.appendChild(nome);
        card.appendChild(marca);
        card.appendChild(preco);
        card.appendChild(estoque);
        card.appendChild(categoria);

        // 3.8 ADICIONAR o card na página
        listaProdutos.appendChild(card);
    }
}

// 4. CHAMAR A FUNÇÃO PARA EXIBIR OS PRODUTOS
exibirProdutos();
