/* Luiz Otávio Miranda tem 30 anos, pesa 84 kg, tem 1,8 de altura seu imc é de  25.92592599259 data de nascimento 1980 */

// elaborando algorititimo: 

const nome = "Natan";
const sobrenome = "Mateus";
let anoNascimento = 1998
let idade = 26
let peso = 58
let altura = 1.85
let imc = peso / (altura * altura);
anoNascimento = anoNascimento - idade;

// template strings

console.log( `${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${altura}M de altura seu imc é de  ${imc} nasceu em ${anoNascimento}`)




