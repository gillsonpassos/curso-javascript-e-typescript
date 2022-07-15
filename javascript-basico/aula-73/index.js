/*
Object.Values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop)
...(spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/
// const produto = { nome: "Produto", preco: 1.8 };
// const caneca = Object.assign({}, produto, { material: "porcelana" });

const produto = { nome: "Produto", preco: 1.8 };
Object.defineProperty(produto, "nome", {
  writable: false,
  configurable: false,
});
// console.log(Object.getOwnPropertyDescriptor(produto, "nome"));
produto.nome = "Outra coisa";
console.log(produto);

// const caneca = { nome: produto.nome, preco: produto.preco };
// console.log(Object.keys(produto));
// caneca.nome = "Outro nome";
// caneca.preco = 2.5;
// console.log(produto);
// console.log(caneca);
