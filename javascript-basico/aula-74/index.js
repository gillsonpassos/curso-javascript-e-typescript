// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
  this.nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => this.nome + " " + this.sobrenome;
}

// intância
const pessoa1 = new Pessoa("Luiz", "O."); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa("Maria", "A."); // <- Pessoa = Função construtora

console.dir(pessoa1);
console.dir(pessoa2);
