// // new Object -> Objeto prototype
// const objA = {
//   chaveA: "A",
//   //___proto___: Object.prototype
// };

// const objB = {
//   chaveA: "B",
//   //___proto___: Object.prototype
// };

// const objC = new Object();
// objC.chaveC = "C";

// Object.setPrototypeOf(objB, objA);
// Object.setPrototypeOf(objC, objA);
// console.log(objC.chaveA);
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100);
};
Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

const p1 = new Produto("Camiseta", 50);
// p1.desconto(100);
// p1.aumento(100);
const p2 = {
  nome: "Caneca",
  preco: 15,
};

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);

console.log(p1);
console.log(p2);
