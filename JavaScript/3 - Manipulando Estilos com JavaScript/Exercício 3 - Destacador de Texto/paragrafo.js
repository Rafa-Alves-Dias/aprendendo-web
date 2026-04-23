let inputTexto = document.getElementById("inpTexto");
let buttonConfirmar = document.getElementById("btnConfirmar");
let pTexto = document.getElementById("texto");

function adicionar_texto(){
    document.body.classList.remove("tema-claro");
    document.body.classList.add("tema-escuro");
    buttonConfirmar.classList.add("ativo");
    inputTexto.classList.add("ativo");
    pTexto.textContent = inputTexto.value;
}

inputTexto.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        adicionar_texto();
    }
})
buttonConfirmar.addEventListener("click", adicionar_texto);