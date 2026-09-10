console.logh("Olá,Luiz!seja bem vindo");
console.logh("Olá,Nick!seja bem vindo");
console.logh("Olá,Cerlan!seja bem vindo");

function darBoasVindas(nome) {
    console.log('Olá,${nome}! Seja bem-vindo!');
}

darBoasVindas("Luiz");
darBoasVindas("Nick");
darBoasVindas("Cerlan");

function apresenta(nome, idade) {
    console.log('meu nome é${nome} e tenho${idade} anos.');
}


apresentar("Gaby",24)

function verificarEstudo(nome) {
  console.log(nome + " está estudando!");
}

verificarEstudo("Isadora");

function somar(a,b){
    return a + b;
    
}


somar(5,3)


let resultado = somar(5,3);

console.log(resultado);


function verificarMedia(nota1, nota2) {
    let media = (nota1 + nota2) / 2;

    if (media > 6) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}

verificarMedia(8, 7);