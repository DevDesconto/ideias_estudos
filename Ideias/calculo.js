/*Crie um programa que peça dois números ao usuário e uma operação (soma, subtração, multiplicação ou divisão). O programa deve calcular o resultado da operação escolhida.*/
// Calculadora simples com readline
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o primeiro número: ", (num1) => {
    rl.question("Digite o segundo número: ", (num2) => {
        rl.question("Escolha a operação (+, -, *, /): ", (operacao) => {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            let resultado;

            if (operacao === '+') {
                resultado = num1 + num2;
            } else if (operacao === '-') {
                resultado = num1 - num2;
            } else if (operacao === '*') {
                resultado = num1 * num2;
            } else if (operacao === '/') {
                if (num2 !== 0) {
                    resultado = num1 / num2;
                } else {
                    resultado = "Erro: Divisão por zero!";
                }
            } else {
                resultado = "Operação inválida!";
            }

            console.log(`Resultado: ${resultado}`);
            rl.close();
        });
    });
});
