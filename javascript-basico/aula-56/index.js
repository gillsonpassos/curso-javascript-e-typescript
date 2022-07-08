// Factory function (Função Fabrica)
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,

    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    // setter
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },

    fala: function (assunto = "falando sobre NADA.") {
      return `${this.nome} está ${assunto}.`;
    },
    altura: a,
    peso: p,
    // getter
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa("Luiz", "Otavio.", 1.7, 80);
const p2 = criaPessoa("João", "Otavio.", 1.8, 80);
const p3 = criaPessoa("Junior", "Otavio.", 1.6, 110);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);
// console.log(p1.nome + " " + p1.sobrenome);
// p1.nomeCompleto = "Arly Gonçalves de Oliveira";
// console.log(p1.nome);
// console.log(p1.sobrenome);
// console.log(p1.fala());
