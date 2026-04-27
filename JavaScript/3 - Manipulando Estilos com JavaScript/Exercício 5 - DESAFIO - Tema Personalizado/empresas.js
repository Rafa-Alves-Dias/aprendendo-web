/* FALTOU CONSEGUIR MUDAR A COR DOS BOTOES E EU ACHO MELHOR COLOCAR DEGRADE SO NO DA UBISOFT*/ 

let h1Titulo = document.getElementById("titulo");
let h1Catalogo = document.getElementById("jogos");

let capaHome = document.querySelector("#capaEmpresas .capa-padrao");
let capaCapcom = document.querySelector("#capaEmpresas .capa-capcom");
let capaSega = document.querySelector("#capaEmpresas .capa-sega");
let capaUbisoft = document.querySelector("#capaEmpresas .capa-ubisoft");

let buttonHome = document.getElementById("btnHome");
let buttonCapcom = document.getElementById("btnCapcom");
let buttonSega = document.getElementById("btnSega");
let buttonUbisoft = document.getElementById("btnUbisoft");


let catalogoHome = document.querySelector("#imgJogos .empresas-banner");
let catalogoCapcom = document.querySelector("#imgJogos .jogos-capcom");
let catalogoSega = document.querySelector("#imgJogos .jogos-sega");
let catalogoUbisoft = document.querySelector("#imgJogos .jogos-ubisoft");

function reseta(){
    document.body.classList.remove("tema-padrao", "tema-capcom", "tema-sega", "tema-ubisoft");
    
    h1Titulo.classList.remove("padrao", "capcom", "sega", "ubisoft");
    h1Catalogo.classList.remove("padrao", "capcom", "sega", "ubisoft");
    h1Catalogo.textContent = "";

    [buttonHome, buttonCapcom, buttonSega, buttonUbisoft].forEach(btn => {
        btn.style.display = "none";
    });
    
    [capaHome, capaCapcom, capaSega, capaUbisoft].forEach(capa => {
        capa.style.display = "none";
    });
    
    [catalogoHome, catalogoCapcom, catalogoSega, catalogoUbisoft].forEach(catalogo => {
        catalogo.style.display = "none";
    });
}
function padrao(){
    reseta();
    
    document.body.classList.add("tema-padrao");
    
    h1Catalogo.textContent = "Plataformas"
    h1Titulo.classList.add("padrao");
    h1Catalogo.classList.add("padrao");
    
    capaHome.style.display = "flex";

    [buttonCapcom, buttonSega,buttonUbisoft].forEach(btn => { 
        btn.style.display = "flex";
    });

    catalogoHome.style.display = "flex";
}
function capcom(){
    reseta();
    
    document.body.classList.add("tema-capcom");
    
    h1Catalogo.textContent = "Últimos lançamentos"
    h1Titulo.classList.add("capcom");
    h1Catalogo.classList.add("capcom");
    
    capaCapcom.style.display = "flex";

    [buttonHome, buttonSega,buttonUbisoft].forEach(btn => { 
        btn.style.display = "flex";
    });
    
    catalogoCapcom.style.display = "flex";
}
function sega(){
    reseta();
    
    document.body.classList.add("tema-sega");
    
    h1Catalogo.textContent = "Últimos lançamentos"
    h1Titulo.classList.add("sega");
    h1Catalogo.classList.add("sega");
    
    capaSega.style.display = "flex";

    [buttonHome, buttonCapcom,buttonUbisoft].forEach(btn => { 
        btn.style.display = "flex";
    });
    
    catalogoSega.style.display = "flex";
}
function ubisoft(){
    reseta();
    
    document.body.classList.add("tema-ubisoft");
    
    h1Catalogo.textContent = "Últimos lançamentos"
    h1Titulo.classList.add("ubisoft");
    h1Catalogo.classList.add("ubisoft");
    
    capaUbisoft.style.display = "flex";

    [buttonHome, buttonCapcom,buttonSega].forEach(btn => { 
        btn.style.display = "flex";
    });
    
    catalogoUbisoft.style.display = "flex";
}


buttonHome.addEventListener("click", padrao);
buttonCapcom.addEventListener("click", capcom);
buttonSega.addEventListener("click", sega);
buttonUbisoft.addEventListener("click", ubisoft);