let leia = require('prompt-sync')();

numero = parseInt(leia("Digite o numero: "));

function quadrado (numero) {
     quadrado = numero * numero;

}

quadrado(numero)

console.log("O quadrado do valor digitado é: " + quadrado)