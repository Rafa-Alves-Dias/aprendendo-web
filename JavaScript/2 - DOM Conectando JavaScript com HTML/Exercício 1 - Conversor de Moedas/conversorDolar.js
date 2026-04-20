let inputReal = document.getElementById("valorReais");
let buttonConverter = document.getElementById("btnConverter");
let pResultado = document.getElementById("resultado");

const COTACAO = 5.00;

function converter_pra_dolar(){
    limpar_campos();
    let valorReal = parseFloat(inputReal.value);
    if(isNaN(valorReal)){
        pResultado.textContent = "⚠️ O texto digitado não é um número. Por favor, digite um número.";
        return
    }
    if(valorReal<0){
        pResultado.textContent = "⚠️ o valor informado é negativo. Por favor informe um valor positivo."
        return;
    }
    let valorDolar = valorReal / COTACAO;
    pResultado.textContent = "R$ " + valorReal.toFixed(2) + " --> " + "$ " + valorDolar.toFixed(2);
}
function limpar_campos(){
    pResultado.textContent = "";
}
buttonConverter.addEventListener("click", converter_pra_dolar)

inputReal.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        converter_pra_dolar();
    }
})