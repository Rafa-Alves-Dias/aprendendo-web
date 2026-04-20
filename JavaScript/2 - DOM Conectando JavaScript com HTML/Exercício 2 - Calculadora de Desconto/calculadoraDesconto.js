let inputReal = document.getElementById("valorReais");
let inputDesconto = document.getElementById("valorDesconto");
let buttonCalcular = document.getElementById("btnCalcular");
let pValorDesconto = document.getElementById("descontoFinal");
let pPrecoFinal = document.getElementById("precoFinal");

function calcular_desconto(){
    limpar_campos();
    let valorReal = parseFloat(inputReal.value);
    let descontoPorCent = parseFloat(inputDesconto.value);
    let error = false;
    if(isNaN(valorReal)){
        pPrecoFinal.textContent = "⚠️ O preço digitado não é um número. Por favor, digite um número."
        error = true;
    }
    if(isNaN(descontoPorCent)){
        pValorDesconto.textContent = "⚠️ O desconto digitado não é um número. Por favor, digite um número." 
        error = true;
    }
    if(valorReal<0){
        pPrecoFinal.textContent = "⚠️ o preço informado é negativo. Por favor informe um valor positivo."
        error = true;
    }
    if(descontoPorCent<0){
        pValorDesconto.textContent = "⚠️ o desconto informado é negativo. Por favor informe um valor positivo."
        error = true;
    }
    if(!error){
        let precoResult = valorReal * (1 -  descontoPorCent / 100);
        /*console.log("preço Result:", precoResult);
        console.log("Preco:", valorReal);
        console.log("desconto:", descontoPorCent);*/
        let descFinal = valorReal - precoResult;
        pPrecoFinal.textContent = "Preço final: " + precoResult.toFixed(2);
        pValorDesconto.textContent = "Valor do desconto: " + descFinal.toFixed(2);
    }
}
function limpar_campos(){
    pValorDesconto.textContent = "";
    pPrecoFinal.textContent = "";
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