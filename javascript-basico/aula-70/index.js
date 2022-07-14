// Factory function /  Constructor functios / Classes

// function criaPessoa(nome, sobrenome) { -> Factory function.
//   return {
//     nome,
//     sobrenome,
//     nomeCompleto() {
//       return `${this.nome} ${this.sobrenome}`;
//     },
//   };
// }

// const p1 = criaPessoa("Gilson", "Passos");
// console.log(p1.nomeCompleto());

function Pessoa(nome, sobrenome) {
  // -> constructor function
  this.nome = nome;
  this.sobrenome = sobrenome;
}
// {} <- this -> this
const p1 = new Pessoa("Gilson", "Oliveira");
const p2 = new Pessoa("Arly", "Oliveira");
console.log(p1);
console.log(p2);
