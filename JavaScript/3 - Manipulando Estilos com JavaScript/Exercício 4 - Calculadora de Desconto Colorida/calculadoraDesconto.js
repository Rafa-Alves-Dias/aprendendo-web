let inputReal = document.getElementById("valorReais");
let inputDesconto = document.getElementById("valorDesconto");
let buttonCalcular = document.getElementById("btnCalcular");
let pValorDesconto = document.getElementById("descontoFinal");
let pPrecoFinal = document.getElementById("precoFinal");
let divFundo = document.getElementById("fundo");

function verifica_validade(){
    let valorReal = parseFloat(inputReal.value);
    let descontoPorCent = parseFloat(inputDesconto.value);
    if(isNaN(valorReal)){
        pPrecoFinal.textContent = "⚠️ O preço digitado não é um número. Por favor, digite um número."
        return true;
    }
    if(isNaN(descontoPorCent)){
        pValorDesconto.textContent = "⚠️ O desconto digitado não é um número. Por favor, digite um número." 
        return true;
    }
    if(valorReal<0){
        pPrecoFinal.textContent = "⚠️ o preço informado é negativo. Por favor informe um valor positivo."
        return true;
    }
    if(descontoPorCent<0){
        pValorDesconto.textContent = "⚠️ o desconto informado é negativo. Por favor informe um valor positivo."
        return true;
    }
    return false;
}
function calcular_desconto(){
    limpar_campos();
    let valorReal = parseFloat(inputReal.value);
    let descontoPorCent = parseFloat(inputDesconto.value);
    let error = verifica_validade();
    if(error){
        return;
    }
    let precoResult = valorReal * (1 -  descontoPorCent / 100);
    let descFinal = valorReal - precoResult;
    pPrecoFinal.textContent = "Preço final: " + precoResult.toFixed(2);
    pValorDesconto.textContent = "Valor do desconto: " + descFinal.toFixed(2);
    estilo_texto();
}
function estilo_texto(){
    let descPCent = parseFloat(inputDesconto.value);
    console.log("Desconto: ", descPCent);
    switch (true) {
        case (descPCent <= 10):
            pValorDesconto.classList.add("vermelho");
            pPrecoFinal.classList.add("vermelho");
            divFundo.classList.add("vermelho");
            break;
        case (descPCent > 10 && descPCent <= 20):
            pValorDesconto.classList.add("amarelo");
            pPrecoFinal.classList.add("amarelo");
            divFundo.classList.add("amarelo");
            break;
        case (descPCent > 20):
            pValorDesconto.classList.add("verde");
            pPrecoFinal.classList.add("verde");
            divFundo.classList.add("verde");
            break;
        default:
            pValorDesconto.textContent += "\n⚠️ erro na estilização."
            break;
    }
}
function limpar_campos(){
    pValorDesconto.textContent = "";
    pPrecoFinal.textContent = "";
    pValorDesconto.classList.remove("vermelho");
    pValorDesconto.classList.remove("amarelo");
    pValorDesconto.classList.remove("verde");
    pPrecoFinal.classList.remove("vermelho");
    pPrecoFinal.classList.remove("amarelo");
    pPrecoFinal.classList.remove("verde");
    divFundo.classList.remove("vermelho");
    divFundo.classList.remove("amarelo");
    divFundo.classList.remove("verde");
}
inputReal.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        calcular_desconto();
    }
})
inputDesconto.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        calcular_desconto();
    }
})
buttonCalcular.addEventListener("click", calcular_desconto)