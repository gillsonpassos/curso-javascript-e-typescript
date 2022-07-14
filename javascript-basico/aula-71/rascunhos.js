// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
  //   this.nome = nome;
  //   this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    value: estoque, // valor da chave
    writable: true, // pode alterar o valor
    configurable: true, // configuravel
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true, // mostra a chave
      value: nome, // valor da chave
      writable: true, // pode alterar o valor
      configurable: true, // configuravel
    },
    preco: {
      enumerable: true, // mostra a chave
      value: preco, // valor da chave
      writable: true, // pode alterar o valor
      configurable: true, // configuravel
    },
  });

  //   Object.defineProperty(this, "estoque", {
  //     enumerable: true, // mostra a chave
  //     value: estoque, // valor da chave
  //     writable: true, // pode alterar o valor
  //     configurable: false, // configuravel
  //   });
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(p1);

for (let chave in p1) {
  console.log(chave);
}
