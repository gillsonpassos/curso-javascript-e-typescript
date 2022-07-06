// argumentos que sustenta todos os argumentos enviados
// function funcao(a, b, c, d, e, f) {
//   console.log(a, b, c, d, e, f);
// }
// funcao(1, 2, 3);
function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    acumulador += numero;
  }
  console.log(acumulador);
}
conta("+", 0, 20, 30, 40, 50);
