

const botaoMenu = document.querySelector("#botao-menu");
const menu = document.querySelector("#menu");
const botaoTema = document.querySelector("#botao-tema");
const formulario = document.querySelector("#formulario-contato");

// Abre e fecha o menu em telas menores.
function alternarMenu() {
    const estaAberto = menu.classList.toggle("aberto");
    botaoMenu.setAttribute("aria-expanded", estaAberto);
    botaoMenu.setAttribute(
        "aria-label",
        estaAberto ? "Fechar menu de navegação" : "Abrir menu de navegação"
    );
}

function fecharMenu() {
    menu.classList.remove("aberto");
    botaoMenu.setAttribute("aria-expanded", "false");
    botaoMenu.setAttribute("aria-label", "Abrir menu de navegação");
}

if (botaoMenu && menu) {
    botaoMenu.addEventListener("click", alternarMenu);
    menu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", fecharMenu);
    });
}

// Mostra uma saudação de acordo com o horário.
function obterSaudacao(hora) {
    if (hora < 12) {
        return "Bom dia! Seja bem-vindo(a)!";
    } else if (hora < 18) {
        return "Boa tarde! Seja bem-vindo(a)!";
    }
    return "Boa noite! Seja bem-vindo(a)!";
}

function mostrarSaudacao() {
    const elementoSaudacao = document.querySelector("#saudacao");
    const horaAtual = new Date().getHours();

    if (elementoSaudacao) {
        elementoSaudacao.textContent = obterSaudacao(horaAtual);
    }
}
mostrarSaudacao();

// Alterna entre o tema claro e o escuro.
function alternarTema() {
    const temaEscuroAtivo = document.body.classList.toggle("modo-escuro");

    if (temaEscuroAtivo) {
        botaoTema.textContent = "☀";
        botaoTema.setAttribute("aria-label", "Ativar tema claro");
    } else {
        botaoTema.textContent = "☾";
        botaoTema.setAttribute("aria-label", "Ativar tema escuro");
    }
}

if (botaoTema) {
    botaoTema.addEventListener("click", alternarTema);
}

// Mostra os erros ao lado dos campos do formulário.
function mostrarErro(idCampo, mensagem) {
    const campo = document.querySelector("#" + idCampo);
    const erro = document.querySelector("#erro-" + idCampo);

    if (erro) {
        erro.textContent = mensagem;
    }
    if (campo && campo.type !== "checkbox") {
        campo.classList.toggle("invalido", mensagem !== "");
        if (mensagem) {
            campo.setAttribute("aria-invalid", "true");
        } else {
            campo.removeAttribute("aria-invalid");
        }
    }
}

function validarFormulario() {
    const nome = document.querySelector("#nome").value.trim();
    const email = document.querySelector("#email").value.trim();
    const mensagem = document.querySelector("#mensagem").value.trim();
    const consentimento = document.querySelector("#consentimento").checked;
    const mensagemSucesso = document.querySelector("#mensagem-sucesso");

    let formularioValido = true;
    mensagemSucesso.textContent = "";

    mostrarErro("nome", "");
    mostrarErro("email", "");
    mostrarErro("mensagem", "");
    mostrarErro("consentimento", "");

    if (nome === "") {
        mostrarErro("nome", "Digite seu nome.");
        formularioValido = false;
    }

    if (email === "") {
        mostrarErro("email", "Digite seu e-mail.");
        formularioValido = false;
    } else if (!email.includes("@") || !email.includes(".") || email.indexOf("@") > email.lastIndexOf(".")) {
        mostrarErro("email", "Digite um e-mail válido.");
        formularioValido = false;
    }

    if (mensagem === "") {
        mostrarErro("mensagem", "Digite uma mensagem.");
        formularioValido = false;
    } else if (mensagem.length < 20) {
        mostrarErro("mensagem", "A mensagem precisa ter pelo menos 20 caracteres.");
        formularioValido = false;
    }

    if (!consentimento) {
        mostrarErro("consentimento", "Marque a opção de consentimento.");
        formularioValido = false;
    }

    return formularioValido;
}

function enviarFormulario(evento) {
    evento.preventDefault();

    if (validarFormulario()) {
        document.querySelector("#mensagem-sucesso").textContent =
            "Formulário preenchido corretamente! (Demonstração: nenhuma mensagem foi enviada.)";
        formulario.reset();

        document.querySelectorAll(".erro").forEach(function (elemento) {
            elemento.textContent = "";
        });
        document.querySelectorAll(".invalido").forEach(function (elemento) {
            elemento.classList.remove("invalido");
            elemento.removeAttribute("aria-invalid");
        });
    }
}

if (formulario) {
    formulario.addEventListener("submit", enviarFormulario);
}

// Atualiza automaticamente o ano no rodapé.
function mostrarAno() {
    const ano = document.querySelector("#ano-atual");
    if (ano) {
        ano.textContent = new Date().getFullYear();
    }
}
mostrarAno();
