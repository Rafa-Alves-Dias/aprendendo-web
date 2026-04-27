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

let divCabecalho = document.getElementById("cabecalho");

// 8. cria uma função para rodar o cabecalho uma vez só
function configurar_cabecalho(){
     // 6. adição do texto da quantidade de produtos
    let textoTotalProdutos = document.createElement("p");
    textoTotalProdutos.className = "quant-produtos";
    textoTotalProdutos.textContent = `Total de produtos: ${produtos.length}`
    divCabecalho.appendChild(textoTotalProdutos);

    // 9. botao para ordenar por preco
    let btnOrdenaPreco = document.createElement("button");
    btnOrdenaPreco.className = "btn-preco";
    btnOrdenaPreco.textContent = "Ordenar por preço";
    divCabecalho.appendChild(btnOrdenaPreco);
    btnOrdenaPreco.addEventListener("click", ordena_por_preco);
}
// 10. ordena a array
function ordena_por_preco(){
    produtos.sort((a, b)=> b.preco - a.preco);
    exibirProdutos();
}
// 3. FUNÇÃO PARA EXIBIR TODOS OS PRODUTOS
function exibirProdutos() {
    // Limpar container antes de adicionar (evita duplicação)
    listaProdutos.innerHTML ='';

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
        // 7. Verifica se o estoque está baixo
        if(produto.estoque < 20){
            card.classList.add("estoque-baixo");
            estoque.classList.add("estoque-baixo");
            categoria.classList.add("estoque-baixo");
        }
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

configurar_cabecalho();
// 4. CHAMAR A FUNÇÃO PARA EXIBIR OS PRODUTOS
exibirProdutos();
