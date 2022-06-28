// For classico - Geralmente com interaveis (array-ou-strings)
// For in - Retorna o indice ou chave (string-array-ou- objetos)
// For of - Retorna o valor-em si (interaveis-array-estrings)

const nome = ["Gilson Passos"];

for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);
}
console.log("#####");

for (let i in nome) {
  console.log(nome[i]);
}
console.log("####");

for (let valor of nome) {
  console.log(valor);
}

console.log("####");

// nome.forEach(function (valor, indice, array) {
//   console.log(valor, indice, array);
// });
