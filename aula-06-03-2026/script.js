console.log("Testando a impressão");

//variáveis
var animal = 'gato'
var nomeCompleto = "Fulano da Silva";
animal = 'peixe';

console.log(animal);
console.log(nomeCompleto);

let nome = "Cicrano";
nome = "Beltrano";

const valor1 = 10;
//valor1 = 24;

//verificar os tipos
console.log(typeof nome);

//algoritmo: entrada + processamento + saída
var nome2 = window.prompt("Digite o seu nome: ");
console.log("Nome digitado: " + nome2 + " Aproveite.");

//template literal = utiliza-se a crase
console.log(`Nome: ${nome2}. Aproveite!`);

//operadores aritméticos: + - * / 

//operadores de comparação: < > >= <= == !=
// === !== 
console.log(5 == '5'); //igualdade - olha apenas os valores
console.log(5 === '5');

//Criar um algoritmo que realize a soma de dois números
//O usuário deve informar os números e o programa
// deve apresentar o resultado da operação.
var n1 = parseFloat(window.prompt("N1: "));
console.log(typeof n1);
var n2 = parseFloat(window.prompt("N2: "));
var resultado = n1 + n2;
console.log(resultado);

//estruturas condicionais
// if-else, switch-case
var idade = 10;
if (idade >=18){
    console.log("maior de idade");
} else {
    console.log("menor de idade");
}

var hora = 19;
if (hora < 12){
    console.log("bom dia");
} else if (hora < 18) {
    console.log("boa tarde");
} else {
    console.log("boa noite");
}

