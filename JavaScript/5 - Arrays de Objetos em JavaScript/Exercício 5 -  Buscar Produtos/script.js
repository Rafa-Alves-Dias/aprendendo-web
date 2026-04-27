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
    
    // 9. botao para ordenar por preco
    let btnOrdenaPreco = document.createElement("button");
    btnOrdenaPreco.className = "btn-preco";
    btnOrdenaPreco.textContent = "Ordenar por preço";
    
    btnOrdenaPreco.addEventListener("click", ordena_por_preco);
    
    // 11. div pra busca
    let divBusca = document.createElement("div");
    divBusca.className = "div-pesquisa";

    // 12. input para pesquisa
    let inpPesquisa = document.createElement("input");
    inpPesquisa.className = "caixa-pesquisa";
    inpPesquisa.placeholder = "Pesquisar produto";

    // 13. botão de pesquisar
    let btnPesquisar = document.createElement("button");
    btnPesquisar.className = "btn-pesquisa";
    btnPesquisar.textContent = "Pesquisar";

    // 16.1 ação do botao de busca
    btnPesquisar.addEventListener("click", () => pesquisar(inpPesquisa.value)); 
    // 16.2 pesquisa usando enter
    inpPesquisa.addEventListener("keypress", function(e){
        if(e.key === "Enter"){
            pesquisar(inpPesquisa.value);
        }
    } )
    
    // 14. adiciona na tela o cabecalho
    divBusca.appendChild(inpPesquisa);
    divBusca.appendChild(btnPesquisar);
    divCabecalho.appendChild(textoTotalProdutos);
    divCabecalho.appendChild(divBusca);
    divCabecalho.appendChild(btnOrdenaPreco);
}

// 17. Variável global para guardar o array atual (filtrado ou não)
let arrayAtual = produtos;

// 10. ordena a array
function ordena_por_preco(){
    // aceita o filtro da pesquisa
    arrayAtual.sort((a, b)=> b.preco - a.preco);
    exibirProdutos();
}

// 3. FUNÇÃO PARA EXIBIR TODOS OS PRODUTOS
function exibirProdutos(array = arrayAtual){
    // Limpar container antes de adicionar (evita duplicação)
    listaProdutos.innerHTML ='';

    // Loop para percorrer TODOS os produtos
    for (let i = 0; i < array.length; i++) {
        // 3.1 Pegar o produto atual
        let produto = array[i];

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
// 15. função pesquisar
function pesquisar(inputValue){
    let texto = inputValue.toLowerCase(); // Para busca case insensitive (Remove espaços e converte para minúsculo)

    if(texto === ""){
        // Se o campo estiver vazio, mostra todos os produtos
        aarrayAtual = [...produtos]; // Copia o array original
    }else{
        // Filtra produtos que contêm o texto no nome (case insensitive)
        arrayAtual = produtos.filter(produto => produto.nome.toLowerCase().includes(texto));
    }
    exibirProdutos(arrayAtual);
    /*exibirProdutos() sempre limpa e recria o conteúdo

    A checagem if só funciona DEPOIS que a exibição aconteceu

    Se fizer ao contrário, a mensagem é apagada pela exibirProdutos(): listaProdutos.innerHTML =''; [linha 80]*/
    if (arrayAtual.length === 0 && texto !== "") {
        listaProdutos.innerHTML = `<p style="color: white; text-align: center; grid-column: 1/-1;">
            Nenhum produto encontrado para "${inputValue}"
        </p>`;
    }
}
/*function pesquisar(inputValue){
    let texto = inputValue;
    console.log(texto);
    let arrayPesquisado = produtos.filter(produto => produto.nome === texto);
 }*/

configurar_cabecalho();
// 4. CHAMAR A FUNÇÃO PARA EXIBIR OS PRODUTOS
exibirProdutos();
