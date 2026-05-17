/*Script para alternar entre as telas de login e registro*/
//ELEENTOS
let container = document.querySelector(".container");

//FUNÇÕES
function mudarEstiloA() {
    container.classList.add("active");
}

function mudarEstiloB() {
    container.classList.remove("active");
}

/*VALIDAÇÃO DE SENHA*/ 
//ELEMENTOS
let senhaRegister = document.getElementById("register_senha");
let confirmarRegister = document.getElementById("confirmar_senha");
let mensagemErroRegister = document.getElementById("mensagem_erro");

//FUNÇÕES
function verificarSenha() {
        if (senhaRegister.value !== confirmarRegister.value) {
        mensagemErroRegister.innerText = "As senhas não coincidem.";
        mensagemErroRegister.style.color = "red";
        document.getElementById("confirmar_senha").value = "";
        return false;
    }

    mensagemErroRegister.innerText = "Senha Válida";
    mensagemErroRegister.style.color = "green";
    return true;
}

/**VALIDAÇÃO VISUAL DE SENHA */
//ELEMENTOS
let senhaRegisterVisual = document.getElementById("register_senha");
let confirmarRegisterVisual = document.getElementById("confirmar_senha");

// FUNÇÕES
function validarSenhaVisual() {
    if (confirmarRegisterVisual.value === "") {
        confirmarRegisterVisual.classList.remove("erro", "sucesso");
        return;
    }

    if (senhaRegisterVisual.value !== confirmarRegisterVisual.value) {
        confirmarRegisterVisual.classList.add("erro");
        senhaRegisterVisual.classList.add("erro");
        confirmarRegisterVisual.classList.remove("sucesso");
        senhaRegisterVisual.classList.remove("sucesso");
    } else {
        confirmarRegisterVisual.classList.add("sucesso");
        senhaRegisterVisual.classList.add("sucesso");
        confirmarRegisterVisual.classList.remove("erro");
        confirmarRegisterVisual.classList.remove("erro");
    }
}
senhaRegisterVisual.addEventListener("input", validarSenhaVisual);
confirmarRegisterVisual.addEventListener("input", validarSenhaVisual);

/**ALTERAR VISIBILIDADE DA SENHA */
//FUNÇÃO
function toggleSenha(inputId, iconId) {
    let input = document.getElementById(inputId);
    let icon = document.getElementById(iconId);

    icon.addEventListener("click", () => {
        if (input.type === "password") {
            input.type = "text";
            icon.classList.replace("fa-eye", "fa-eye-slash");
        } else {
            input.type = "password";
            icon.classList.replace("fa-eye-slash", "fa-eye");
        }
    });
}

//CHAMADA DA FUNÇÃO
toggleSenha("login_senha", "toggle_login");
toggleSenha("register_senha", "toggle_register");
toggleSenha("confirmar_senha", "toggle_confirmar");
