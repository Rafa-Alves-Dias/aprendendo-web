let buttonVerde = document.getElementById("btnVerde");
let buttonAmarelo = document.getElementById("btnAmarelo");
let buttonVermelho = document.getElementById("btnVermelho");

let sinalVerde = document.getElementById("verde");
let sinalAmarelo = document.getElementById("amarelo");
let sinalVermelho = document.getElementById("vermelho");

function limpar(){
    buttonVerde.classList.remove("ativo");
    sinalVerde.classList.remove("ativo");
    buttonAmarelo.classList.remove("ativo");
    sinalAmarelo.classList.remove("ativo");
    buttonVermelho.classList.remove("ativo");
    sinalVermelho.classList.remove("ativo");
}

function luz_verde(){
    limpar();
    buttonVerde.classList.add("ativo");
    sinalVerde.classList.add("ativo");
}
function luz_amarelo(){
    limpar();
    buttonAmarelo.classList.add("ativo");
    sinalAmarelo.classList.add("ativo");
}
function luz_vermelho(){
    limpar();
    buttonVermelho.classList.add("ativo");
    sinalVermelho.classList.add("ativo");
}

buttonVerde.addEventListener("click", luz_verde);
buttonAmarelo.addEventListener("click", luz_amarelo);
buttonVermelho.addEventListener("click", luz_vermelho);
