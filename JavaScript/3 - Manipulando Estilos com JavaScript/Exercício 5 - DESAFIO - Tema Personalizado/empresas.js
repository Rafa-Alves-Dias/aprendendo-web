let h1Titulo = document.getElementById("titulo");
let h1Catalogo = document.getElementById("jogos");
let h1Textos = document.getElementById("texto");

let imageCapa = document.getElementById("capaEmpresas");

let buttonCapcom = document.getElementById("btnCapcom");
let buttonSega = document.getElementById("btnSega");
let buttonUbisoft = document.getElementById("btnUbisoft");
let buttonHome = document.getElementById("btnHome");


let imageCatalogo = document.getElementById("imgJogos");

function padrao(){
    remove();
    buttonHome.classList.add("remove");
    
    document.body.classList.add("tema-padrao");

    h1Catalogo.textContent = "Plataformas"
    h1Textos.classList.add("padrao");

    imageCapa.classList.add("capa-padrao");
    imageCatalogo.classList.add("empresas-banner");
    
    document.button.classList.add("padrao");
}
function capcom(){
remove();
    buttonCapcom.classList.add("remove");
    
    document.body.classList.add("tema-capcom");

    h1Catalogo.textContent = "Últimos lançamentos"
    h1Textos.classList.add("capcom");

    imageCapa.classList.add("capa-capcom");
    imageCatalogo.classList.add("jogos-capcom");
    
    document.button.classList.add("capcom");
}
function sega(){
remove();
    buttonSega.classList.add("remove");
    
    document.body.classList.add("tema-sega");

    h1Catalogo.textContent = "Últimos lançamentos"
    h1Textos.classList.add("sega");

    imageCapa.classList.add("capa-sega");
    imageCatalogo.classList.add("jogos-sega");
    
    document.button.classList.add("sega");
}
function ubisoft(){
remove();
    buttonUbisoft.classList.add("remove");
    
    document.body.classList.add("tema-ubisoft");

    h1Catalogo.textContent = "Últimos lançamentos"
    h1Textos.classList.add("ubisoft");

    imageCapa.classList.add("capa-ubisoft");
    imageCatalogo.classList.add("jogos-ubisoft");
    
    document.button.classList.add("ubisoft");
}
function remove(){
    document.body.classList.remove("tema-padrao");
    document.body.classList.remove("tema-capcom");
    document.body.classList.remove("tema-sega");
    document.body.classList.remove("tema-ubisoft");

    h1Textos.classList.remove("padrao");
    h1Textos.classList.remove("capcom");
    h1Textos.classList.remove("sega");
    h1Textos.classList.remove("ubisoft");

    imageCatalogo.classList.remove("padrao");
    imageCatalogo.classList.remove("capcom");
    imageCatalogo.classList.remove("sega");
    imageCatalogo.classList.remove("ubisoft");

    document.button.classList.remove("padrao");
    document.button.classList.remove("capcom");
    document.button.classList.remove("sega");
    document.button.classList.remove("ubisoft");
}

buttonCapcom.addEventListener("click", capcom)
buttonSega.addEventListener("click", sega)
buttonUbisoft.addEventListener("click", ubisoft)
buttonHome.addEventListener("click", padrao)