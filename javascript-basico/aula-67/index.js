// Some todos os números (reduce)
// Retorne um Array com os pares (Filter)
// Retorne um Array com o dobro dos valores (Map)
//               0  1   2   3  4  5 ........
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function (acumulador, valor) {
  if (valor % 2 !== 0) {
    acumulador += valor;
  }

  return acumulador;
}, 0);
// console.log(total);

//if (valor % 2 === 0) acumulador.push(valor);
//   acumulador.push(valor * 2);
//   return acumulador;
// }, []);

// Retorne a pessoa mais velha
const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 10 },
  { nome: "Rosana", idade: 64 },
  { nome: "Wallace", idade: 69 },
];
const maisVelha = pessoas.reduce(function (acumulador, valor) {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor;
});
console.log(maisVelha);
