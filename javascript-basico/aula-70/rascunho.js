const pessoa1 = new Object();
pessoa1.nome = "Gilson";
pessoa1.sobrenome = "Passos";
pessoa1.idade = 56;
pessoa1.falarNome = function () {
  return `${this.nome} está falando seu nome.`;
};
pessoa1.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

for (let chave in pessoa1) {
  console.log(pessoa1[chave]);
}

//console.log(pessoa1.getDataNascimento());

// delete pessoa1.nome;
// console.log(pessoa1);

// const pessoa2 = {
//   nome: "Gilson",
//   sobrenome: "Passos",
// };

// console.log(pessoa1, pessoa2);
//console.log(pessoa1.sobrenome);

// const pessoa = {
//   nome: "Gilson",
//   sobrenome: "Passos",
// };

// const chave = "nome";
// console.log(pessoa[chave]);
// console.log(pessoa['nome']);
// //console.log(pessoa['sobrenome']);
