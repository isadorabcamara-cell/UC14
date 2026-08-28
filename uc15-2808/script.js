// QUESTÃO 1 - Operações matemáticas

let numero1 = 10;
let numero2 = 5;

console.log("Soma:", numero1 + numero2);
console.log("Subtração:", numero1 - numero2);
console.log("Multiplicação:", numero1 * numero2);
console.log("Divisão:", numero1 / numero2);


// QUESTÃO 2 - Dobro e triplo

let numero = 8;

console.log("Dobro:", numero * 2);
console.log("Triplo:", numero * 3);


// QUESTÃO 3 - Nome e idade do usuário

let nome = prompt("Digite seu nome:");
let idade = prompt("Digite sua idade:");

console.log("Olá, " + nome + "! Seja bem-vindo! Você tem " + idade + " anos.");


// QUESTÃO 4 - Média de três notas

let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));
let nota3 = Number(prompt("Digite a terceira nota:"));

let media = (nota1 + nota2 + nota3) / 3;

console.log("Média:", media);


// QUESTÃO 5 - Sistema de login

let usuarioCorreto = "admin";
let senhaCorreta = "1234";

let usuario = prompt("Digite o usuário:");
let senha = prompt("Digite a senha:");

if (usuario === usuarioCorreto && senha === senhaCorreta) {
    console.log("Login realizado com sucesso!");
} else if (usuario !== usuarioCorreto) {
    console.log("Usuário incorreto.");
} else if (senha !== senhaCorreta) {
    console.log("Senha incorreta.");
}


// QUESTÃO 6 - Número maior

let primeiroNumero = Number(prompt("Digite o primeiro número:"));
let segundoNumero = Number(prompt("Digite o segundo número:"));

if (primeiroNumero > segundoNumero) {
    console.log("O maior número é " + primeiroNumero);
} else if (segundoNumero > primeiroNumero) {
    console.log("O maior número é " + segundoNumero);
} else {
    console.log("Os dois números são iguais.");
}