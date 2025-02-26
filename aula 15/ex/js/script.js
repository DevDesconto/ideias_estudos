const numero = Number(prompt("Digite um numero decimal: "));

const numeroTitulo = document.getElementById("número - titulo");
const texto1 = document.getElementById("1");

numeroTitulo.innerHTML = numero;

texto1.innerHTML = "";
texto1.innerHTML += `<p>Raiz quadrada <strong>${numero ** 0.5}</strong>.</p>`;
texto1.innerHTML += `<p><strong>${numero}</strong> é inteiro? ${Number.isInteger()}.</p>`;
texto1.innerHTML += `<p>È NAN? <strong>${Number.isNaN(numero)}</strong>.</p>`;
texto1.innerHTML += `<p>Aredondado para baixo: <strong>${Math.floor(numero)}</strong>.</p>`;
texto1.innerHTML += `<p>Aredondado para cima: <strong>${Math.ceil(numero)}</strong>.</p>`;
texto1.innerHTML += `<p>Com duas casas decimais <strong>${numero.toFixed(2)}</strong>.</p>`;