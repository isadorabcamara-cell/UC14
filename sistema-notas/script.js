
const formulario = document.getElementById("formNotas");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = document.getElementById("nome").value.trim();

    const camposNotas = [
        document.getElementById("nota1"),
        document.getElementById("nota2"),
        document.getElementById("nota3")
    ];

    // Verifica se o nome foi preenchido.
    if (nome === "") {
        mostrarErro("Por favor, informe o nome do estudante.");
        document.getElementById("nome").focus();
        return;
    }

    // Verifica se todas as notas foram preenchidas.
    for (const campo of camposNotas) {
        if (campo.value.trim() === "") {
            mostrarErro("Preencha as três notas antes de continuar.");
            campo.focus();
            return;
        }
    }

    // Converte os valores para números.
    const notas = camposNotas.map(campo => Number(campo.value));

    // Verifica se as notas são válidas.
    const notasValidas = notas.every(
        nota => Number.isFinite(nota) && nota >= 0 && nota <= 10
    );

    if (!notasValidas) {
        mostrarErro("As notas devem ser números entre 0 e 10.");
        return;
    }

    // Calcula a média aritmética.
    const media = notas.reduce((soma, nota) => soma + nota, 0) / 3;

    // Define a situação acadêmica.
    let situacao;
    let classe;

    if (media >= 7) {
        situacao = "Aprovado(a)";
        classe = "aprovado";
    } else if (media >= 5) {
        situacao = "Em recuperação";
        classe = "recuperacao";
    } else {
        situacao = "Reprovado(a)";
        classe = "reprovado";
    }

    // Monta e apresenta o resultado.
    resultado.replaceChildren();

    const titulo = document.createElement("h2");
    titulo.textContent = "Resultado da consulta";

    const estudante = document.createElement("p");
    estudante.textContent = `Estudante: ${nome}`;

    const mediaElemento = document.createElement("p");
    mediaElemento.className = "media";
    mediaElemento.textContent = `Média: ${media.toFixed(2).replace(".", ",")}`;

    const situacaoElemento = document.createElement("p");
    situacaoElemento.textContent = `Situação: ${situacao}`;

    resultado.append(titulo, estudante, mediaElemento, situacaoElemento);

    resultado.className = `resultado ${classe}`;
    resultado.hidden = false;
});

// Apresenta mensagens de erro.
function mostrarErro(mensagem) {
    resultado.replaceChildren();

    const texto = document.createElement("p");
    texto.textContent = mensagem;

    resultado.appendChild(texto);
    resultado.className = "resultado erro";
    resultado.hidden = false;
}

// Limpa o resultado ao reiniciar o formulário.
formulario.addEventListener("reset", function () {
    resultado.hidden = true;
    resultado.replaceChildren();
    resultado.className = "resultado";
});
