// ========================================
// LISTA DE COMPRAS COM BOTÃO REMOVER
// ========================================

// 1. BUSCAR ELEMENTOS
let inputItem = document.getElementById("inputItem");
let btnAdicionar = document.getElementById("btnAdicionar");
let listaCompras = document.getElementById("listaCompras");

let pContador = document.createElement("p");


// 2. FUNÇÃO PARA ADICIONAR ITEM
function adicionarItem() {
    // 2.1 Pegar o texto digitado
    let texto = inputItem.value.trim();

    // 2.2 Validar se não está vazio
    if (texto === "") {
        alert("⚠️ Digite um item antes de adicionar!");
        return;
    }

    // 2.3 CRIAR o <li>
    let novoItem = document.createElement("li");

    // 2.4 CRIAR um <span> para o texto
    let spanTexto = document.createElement("span");
    spanTexto.className = "item-texto";
    spanTexto.textContent = texto;

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

    // 2.7 MONTAR a estrutura: <li> contém <span> + <button>
    novoItem.appendChild(spanTexto);
    novoItem.appendChild(btnRemover);

    // 2.8 ADICIONAR o <li> na <ul>
    listaCompras.appendChild(novoItem);

    // 2.9 Limpar o input
    inputItem.value = "";
    inputItem.focus();
    atualizarContador();
}

// 3. CONECTAR EVENTO AO BOTÃO
btnAdicionar.addEventListener("click", adicionarItem);

// 4. PERMITIR ADICIONAR COM ENTER
inputItem.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        adicionarItem();
    }
});

// 5. Inicializar contador (0 itens)
atualizarContador();

pContador.id = "contador";
pContador.className = "display";

document.querySelector(".container").appendChild(pContador);

// 6. FUNÇÃO PARA ATUALIZAR CONTADOR
function atualizarContador(){
    let quantItens = listaCompras.children.length;
    pContador.textContent = `Contém ${quantItens} item(s).`;
}
