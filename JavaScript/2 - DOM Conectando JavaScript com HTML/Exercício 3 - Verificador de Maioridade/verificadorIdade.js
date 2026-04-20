let inputIdade = document.getElementById("idade");
let buttonChecar = document.getElementById("btnChecar");
let pEhMaior = document.getElementById("ehMaior");
let pQuantoAte18 = document.getElementById("quantoAte18");
console.log("aparece pf: ", inputIdade.value);

function checar_idade(){
    limpar_campos();
    let idade = inputIdade.value;
    if(idade === ""){
        pEhMaior.textContent = "⚠️ A idade informada não é um número. Por favor, digite um número."
        return;
    }
    idade = Number(inputIdade.value);
    console.log("idade:", idade);
    if(!Number.isInteger(idade)){
        pEhMaior.textContent = "⚠️ A idade informada não é um número inteiro. Por favor, digite um número inteiro."
        return;
    }
    if(idade<0 || idade>125){
        pEhMaior.textContent = "⚠️ A idade informada não é válida. Por favor, digite um número entre 0 e 125."
    }else{
        if(idade<18){
            pEhMaior.textContent = "Menor de idade ❌";
            pQuantoAte18.textContent = "faltam " + (18-idade) + " anos até a maioriade."
        }else{
            pEhMaior.textContent = "Maior de idade ✅"
        }
    }
}
function limpar_campos(){
    pEhMaior.textContent = "";
    pQuantoAte18.textContent = "";
}
inputIdade.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        checar_idade();
    }
})
buttonChecar.addEventListener("click", checar_idade)