// ========================================
// LISTA DE COMPRAS COM BOTÃO REMOVER
// ========================================

// 1. BUSCAR ELEMENTOS
let inputItem = document.getElementById("inputItem");
let btnAdicionar = document.getElementById("btnAdicionar");
let listaCompras = document.getElementById("listaCompras");

let pContador = document.createElement("p");
// [0.0] dividindo a função adicionarItem em funções especificas

// [0.1] nome do item
function createSpan(){
    // 2.1 Pegar o texto digitado
    let texto = inputItem.value.trim();

    // 2.2 Validar se não está vazio
    if (texto === "") {
        alert("⚠️ Digite um item antes de adicionar!");
        return;
    }

    // 2.4 CRIAR um <span> para o texto
    let spanTexto = document.createElement("span");
    spanTexto.className = "item-texto";
    spanTexto.textContent = texto;
    return spanTexto;
}

// [0.2] - botão remover
function createBtnRemover(novoItem){
    // 2.5 CRIAR o botão "Remover"
    let btnRemover = document.createElement("button");
    btnRemover.className = "btn-remover";
    btnRemover.textContent = "Remover";

    // 2.6 ADICIONAR evento ao botão remover
    btnRemover.addEventListener("click", function() {
        // Remove o <li> inteiro!
        novoItem.remove();
        atualizarContador();
    });
    return btnRemover;
}

// [0.3] - botão comprado
function createBtnComprado(novoItem, spanTexto){
    // 8. Botao comprado
    let btnComprado = document.createElement("button");
    btnComprado.className = "btn-comprado";
    btnComprado.textContent = "Comprado";
    // 9. acoes do botao comprado
    function itemComprado(){
        spanTexto.className = "item-texto comprado";
        novoItem.classList.add("comprado");
        btnComprado.disabled = true; // Opcional: desabilita o botão após comprar   
        btnComprado.textContent = "✓ Comprado"; // Opcional: muda o texto
    }
    btnComprado.addEventListener("click", itemComprado);
    return btnComprado;
}

// [0.4] - botão editar
function createBtnEditar(spanTexto){
    // 11. botao editar
    let btnEditar = document.createElement("button");
    btnEditar.className = "btn-editar";
    btnEditar.textContent = "Editar";
    function editarNome(){
        console.log(spanTexto.textContent);
        let textoAtual = spanTexto.textContent; 
        let textoNovo = prompt("Informe o novo nome:", textoAtual);
        /*if(textoNovo?.trim == "" || textoNovo === null){
            console.log("Edição cancelada, continua sendo", textoAtual);
            return;
        }
        spanTexto.textContent = textoNovo; */
        /* ou simplesmente: */
        spanTexto.textContent = textoNovo?.trim() || textoAtual;
    }
    btnEditar.addEventListener("click", editarNome);
    return btnEditar;
}

// [0.5] - quantidade itens
function createQuantItem(){
    // 12. quantidade de itens ( + num - ):
    let btnAddItem = document.createElement("button");
    let btnRmvItem = document.createElement("button");
    let txtQuantItens = document.createElement("span");
    btnAddItem.textContent = "+";
    btnAddItem.className = "btn-mais";
    btnRmvItem.textContent = "-";
    btnRmvItem.className = "btn-menos";
    txtQuantItens.className = "quant-itens";
    txtQuantItens.textContent = "0";
    function quant_itens_mais(){
        let quantItensAtual = parseInt(txtQuantItens.textContent);
        if(isNaN(quantItensAtual)){
            alert("error: a quantidade de itens não é um número válido!");
            return;
        }
        quantItensAtual++;
        txtQuantItens.textContent = `${quantItensAtual}`;
    }
    function quant_itens_menos(){
        let quantItensAtual = parseInt(txtQuantItens.textContent);
        if(isNaN(quantItensAtual)){
            alert("error: a quantidade de itens não é um número válido!");
            return;
        }
        if(quantItensAtual == 0){
            alert("error: qunatidade minima de itens atingida (0).");
            return;
        }
        quantItensAtual--;
        txtQuantItens.textContent = `${quantItensAtual}`;
    }   
    btnAddItem.addEventListener("click", quant_itens_mais);
    btnRmvItem.addEventListener("click", quant_itens_menos);
    return [btnAddItem, txtQuantItens, btnRmvItem];
}

// 2. FUNÇÃO PARA ADICIONAR ITEM
function adicionarItem() {
    let span = createSpan();
    if(span === null){
        return;
    }
    // 2.3 CRIAR o <li>
    let novoItem = document.createElement("li");

    let remove = createBtnRemover(novoItem);

    let comprado = createBtnComprado(novoItem, span);

    let edita = createBtnEditar(span);

    let arrayQuant = createQuantItem();

    // 10. MONTAR estrutura com espaçamento entre botões
    let divBotoesProduto = document.createElement("div");
    divBotoesProduto.className = "botoes-container";

    let divBotoesQuant = document.createElement("div");
    divBotoesQuant.className = "botoes-container btn-quant";
    
    let divTodosBotoes = document.createElement("div");
    divTodosBotoes.className = "div-botoes";

    // 2.7 MONTAR a estrutura: <li> contém <span> + <button>
    novoItem.appendChild(span);
    divBotoesProduto.appendChild(edita);
    divBotoesProduto.appendChild(comprado);
    divBotoesProduto.appendChild(remove);

    // 13. adicionando a div da quantidade de itens
    divBotoesQuant.appendChild(arrayQuant[0]); //btnAddItem
    divBotoesQuant.appendChild(arrayQuant[1]); //txtQuantItens
    divBotoesQuant.appendChild(arrayQuant[2]); //btnRmvItem

    divTodosBotoes.appendChild(divBotoesProduto);
    divTodosBotoes.appendChild(divBotoesQuant);
    novoItem.appendChild(divTodosBotoes);

    // 2.8 ADICIONAR o <li> na <ul>
    listaCompras.appendChild(novoItem);

    // 2.9 Limpar o input
    limparInput();
}

// [0.6] - limpar input
function limparInput(){
    inputItem.value = "";
    inputItem.focus();
    atualizarContador();
}


// 5. Inicializar contador (0 itens)
atualizarContador();

// [0.8.1] - settando o contador 
function setContador(){
    pContador.id = "contador";
    pContador.className = "display";
    
    document.querySelector(".container").appendChild(pContador);
}

// [0.8.2] - invoca a função para settar o contador
setContador()

// 6. FUNÇÃO PARA ATUALIZAR CONTADOR
function atualizarContador(){
    let quantItens = listaCompras.children.length;
    pContador.textContent = `Contém ${quantItens} item(s).`;
}

// 7. botao para limpar tudo
// [0.7.1] - cria botão deletar tudo
function deletarTudo(){
    let btnDeleteAll = document.createElement("button");
    btnDeleteAll.className = "btn-remover-tudo";
    btnDeleteAll.textContent = "Remover tudo";

    document.querySelector(".container").appendChild(btnDeleteAll);
    btnDeleteAll.addEventListener("click", deletarLista);
} 

function deletarLista(){
    listaCompras.innerHTML="";
    atualizarContador();
}

// [0.7.2] - invoca a função do botão deletar tudo
deletarTudo();
// 3. CONECTAR EVENTO AO BOTÃO
btnAdicionar.addEventListener("click", adicionarItem);

// 4. PERMITIR ADICIONAR COM ENTER
inputItem.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        adicionarItem();
    }
});





