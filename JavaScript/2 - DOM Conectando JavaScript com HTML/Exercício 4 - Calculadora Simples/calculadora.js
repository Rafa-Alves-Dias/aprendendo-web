let inputNum1 = document.getElementById("num1");
let inputNum2 = document.getElementById("num2");

let buttonAdd = document.getElementById("btnAdd");
let buttonSub = document.getElementById("btnSub");
let buttonMult = document.getElementById("btnMult");
let buttonDiv = document.getElementById("btnDiv");

let pResultado = document.getElementById("resultado");

function verifica_num(){
    let num1 = parseFloat(inputNum1.value);
    let num2 = parseFloat(inputNum2.value);
    if(isNaN(num1) && isNaN(num2)){
        pResultado.textContent = "⚠️ Os textos digitados não são números. Por favor, digite só números."
        return true;
    }
    if(isNaN(num1)){
        pResultado.textContent = "⚠️ O primeiro texto digitado não é um número. Por favor, digite só números."
        return true;
    }
    if(isNaN(num2)){
        pResultado.textContent = "⚠️ O segundo texto digitado não é um número. Por favor, digite só números."
        return true;
    }
    return false;
}

function add_op(){
    let error = verifica_num();
    if(error){
        return;
    }
    let num1 = parseFloat(inputNum1.value);
    let num2 = parseFloat(inputNum2.value);

    pResultado.textContent = "Resultado: " + (num1 + num2);
}
function sub_op(){
    let error = verifica_num();
    if(error){
        return;
    }
    let num1 = parseFloat(inputNum1.value);
    let num2 = parseFloat(inputNum2.value);

    pResultado.textContent = "Resultado: " + (num1 - num2);
}
function mult_op(){
    let error = verifica_num();
    if(error){
        return;
    }
    let num1 = parseFloat(inputNum1.value);
    let num2 = parseFloat(inputNum2.value);

    pResultado.textContent = "Resultado: " + (num1 * num2);
}
function div_op(){
    let error = verifica_num();
    if(error){
        return;
    }
    let num1 = parseFloat(inputNum1.value);
    let num2 = parseFloat(inputNum2.value);
    if(num2 == 0){
        pResultado.textContent = "⚠️ Não é possivel dividir por 0."
        return;
    }
    pResultado.textContent = "Resultado: " + (num1 / num2);
}

buttonAdd.addEventListener("click", add_op)
buttonSub.addEventListener("click", sub_op)
buttonMult.addEventListener("click", mult_op)
buttonDiv.addEventListener("click", div_op)

