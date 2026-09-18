
function mostrarCidade() {
    let cidade = document.getElementById("cidade").value;
    let mensagem = document.getElementById("mensagem");

    mensagem.textContent = "Minha próxima viagem será para " + cidade + "!";
}

function destacarMensagem() {
    let mensagem = document.getElementById("mensagem");

    mensagem.style.color = "white";
    mensagem.style.backgroundColor = "blue";
    mensagem.style.fontSize = "25px";
}

let contador = 10;

function aumentar() {
    contador = contador + 1;

    document.getElementById("contador").textContent = contador;
}

function diminuir() {
    contador = contador - 1;

    document.getElementById("contador").textContent = contador;
}