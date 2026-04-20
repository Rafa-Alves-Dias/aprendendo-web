let inputCelsius = document.getElementById("temp");
let buttonF = document.getElementById("btnF");
let buttonK = document.getElementById("btnK");
let pResultado = document.getElementById("resultado");

function verifica_num(){
    let celsius = parseFloat(inputCelsius.value);
    if(isNaN(celsius)){
        pResultado.textContent = "⚠️ O texto digitado não é um número. Por favor, digite um número."
        return true;
    }
    if(celsius < -273.15){
        pResultado.textContent = "⚠️ O número digitado ultrapassa o zero absoluto (-273.15 °C). Por favor, digite um número maior."
        return true;
    }
    return false;
}

function fahrenheit_conversor(){
    let error = verifica_num();
    if(error){
        return;
    }
    let celsius = parseFloat(inputCelsius.value);
    let tempF = (celsius * 9/5) + 32;
    pResultado.textContent = tempF + "°F";
}
function kelvin_conversor(){
    let error = verifica_num();
    if(error){
        return;
    }
    let celsius = parseFloat(inputCelsius.value);
    let tempK = celsius + 273.15;
    pResultado.textContent = tempK + "K"
}

buttonF.addEventListener("click", fahrenheit_conversor);
buttonK.addEventListener("click", kelvin_conversor);