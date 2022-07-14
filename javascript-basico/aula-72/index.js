// defineProperty -> Getter  e  Setters
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    //   value: estoque, // valor da chave
    //   writable: true, // pode alterar o valor
    configurable: true, // configuravel
    get: function () {
      return estoque;
    },
    set: function (valor) {
      console.log(valor);
    },
  });
}

// const p1 = new Produto("Camiseta", 20, 3);
// console.log(p1);
// p1.estoque = "O valor que eu quero";
// console.log(p1.estoque);
function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      valor = valor.replace("coisa.", "");
      nome = valor;
    },
  };
}

//   for (let chave in p1) {
//     console.log(chave);
//   }
const p2 = criaProduto("Camiseta");
p2.nome = "Qualquer coisa.";
console.log(p2.nome);
