let nomeCliente = "Maria";
let valorCompra = 650.00;
let clienteVip = false;

let desconto = 0;
let valorDesconto;
let valorFinal;

// Verifica o desconto
if (clienteVip) {
    desconto = 20;
} else if (valorCompra >= 500) {
    desconto = 15;
} else if (valorCompra >= 200) {
    desconto = 10;
} else {
    desconto = 0;
}

// Calcula os valores
valorDesconto = valorCompra * desconto / 100;
valorFinal = valorCompra - valorDesconto;

// Exibe as informações
console.log("Nome: " + nomeCliente);
console.log("Valor da compra: R$ " + valorCompra.toFixed(2));
console.log("Desconto: " + desconto + "%");
console.log("Valor do desconto: R$ " + valorDesconto.toFixed(2));
console.log("Valor final: R$ " + valorFinal.toFixed(2));

// Desafio do frete grátis
if (valorFinal > 1000) {
    console.log("Parabéns! Você ganhou frete grátis.");
} else {
    console.log("Frete será cobrado normalmente.");
}