// Função Construtora -> objetos
// Função Fabrica -> objetos
// Construtora -> Pessoa (new)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function () {
    console.log(this.nome + ": sou um método");
  };
}
const p1 = new Pessoa("Gilson", "Passos");
const p2 = new Pessoa("Arly", "Gonçalves");
p2.metodo();
