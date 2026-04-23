let buttonAviso = document.getElementById("btnAviso");
let h1Aviso = document.getElementById("aviso");

function muda_tela(){
    if(document.body.classList.contains("tela-padrao")){
        document.body.classList.remove("tela-padrao");
        document.body.classList.add("tela-vermelha");
        h1Aviso.textContent = "⚠️ ATENÇÃO!";
        h1Aviso.classList.add("fonte");
    }else{
        document.body.classList.remove("tela-vermelha");
        document.body.classList.add("tela-padrao");
        h1Aviso.textContent = "";
        h1Aviso.classList.remove("fonte");
    }
    buttonAviso.classList.toggle("ativo");
}

buttonAviso.addEventListener("click", muda_tela);