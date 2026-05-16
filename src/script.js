let container = document.querySelector(".container");

function mudarEstiloA() {
    container.classList.add("active");
}

function mudarEstiloB() {
    container.classList.remove("active");
}

let senha = document.getElementById("register_senha");
let confirmar= document.getElementById("confirmar_senha");
let mensagemErro = document.getElementById("mensagem_erro");


function verificarSenha() {
        if (senha.value !== confirmar.value) {
        mensagemErro.innerText = "As senhas não coincidem.";
        mensagemErro.style.color = "red";
        return false;
    }

    mensagemErro.innerText = "Senha Válida";
    mensagemErro.style.color = "green";
    return true;
}
