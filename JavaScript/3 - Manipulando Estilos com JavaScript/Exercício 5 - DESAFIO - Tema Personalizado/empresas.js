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

function padrao(){
    reseta();
    
    document.body.classList.add("tema-padrao");
    
    h1Catalogo.textContent = "Plataformas"
    h1Titulo.classList.add("padrao");
    h1Catalogo.classList.add("padrao");
    
    capaHome.style.display = "flex";

    [buttonCapcom, buttonSega,buttonUbisoft].forEach(btn => { 
        btn.classList.add("ativo");
    });

    catalogoHome.classList.add("ativo");
}
function capcom(){
    reseta();
    
    document.body.classList.add("tema-capcom");
    
    h1Catalogo.textContent = "Últimos lançamentos"
    h1Titulo.classList.add("capcom");
    h1Catalogo.classList.add("capcom");
    
    capaCapcom.style.display = "flex";

    [buttonHome, buttonSega,buttonUbisoft].forEach(btn => { 
        btn.classList.add("ativo");
    });
    
    catalogoCapcom.classList.add("ativo");
}
function sega(){
    reseta();
    
    document.body.classList.add("tema-sega");
    
    h1Catalogo.textContent = "Últimos lançamentos"
    h1Titulo.classList.add("sega");
    h1Catalogo.classList.add("sega");
    
    capaSega.style.display = "flex";

    [buttonHome, buttonCapcom,buttonUbisoft].forEach(btn => { 
        btn.classList.add("ativo");
    });
    
    catalogoSega.classList.add("ativo");
}
function ubisoft(){
    reseta();
    
    document.body.classList.add("tema-ubisoft");
    
    h1Catalogo.textContent = "Últimos lançamentos"
    h1Titulo.classList.add("ubisoft");
    h1Catalogo.classList.add("ubisoft");
    
    capaUbisoft.style.display = "flex";

    [buttonHome, buttonCapcom,buttonSega].forEach(btn => { 
        btn.classList.add("ativo");
    });
    
    catalogoUbisoft.classList.add("ativo");
}
function reseta(){
    document.body.classList.remove("tema-padrao");
    document.body.classList.remove("tema-capcom");
    document.body.classList.remove("tema-sega");
    document.body.classList.remove("tema-ubisoft");

    h1Titulo.classList.remove("padrao");
    h1Catalogo.classList.remove("padrao");
    h1Titulo.classList.remove("capcom");
    h1Catalogo.classList.remove("capcom");
    h1Titulo.classList.remove("sega");
    h1Catalogo.classList.remove("sega");
    h1Titulo.classList.remove("ubisoft");
    h1Catalogo.classList.remove("ubisoft");

    [btnHome, btnCapcom, btnSega, btnUbisoft].forEach(btn => btn.classList.remove("ativo"));

    catalogoHome.style.display = "none";
    catalogoCapcom.style.display = "none";
    catalogoSega.style.display = "none";
    catalogoUbisoft.style.display = "none";
}

buttonHome.addEventListener("click", padrao)
buttonCapcom.addEventListener("click", capcom)
buttonSega.addEventListener("click", sega)
buttonUbisoft.addEventListener("click", ubisoft)