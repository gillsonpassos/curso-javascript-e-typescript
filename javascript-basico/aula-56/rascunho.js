// Factory function (Função Fabrica)
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,
    fala: function (assunto) {
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

const p1 = criaPessoa("Luiz", "Otavio.", 1.8, 80);
console.log(p1.imc());
const p2 = criaPessoa("Maria", "Joaquina.", 1.6, 42);
console.log(p2.fala("falando sobre JS"));
console.log(p2.imc());

// Factory function (Função Fabrica)
// Constructor function (Função construtora)
// function criaPessoa(nome, sobrenome, a, p) {
//     return {
//       nome,
//       sobrenome,
//       nomeCompleto() {
//        return `${nome} ${sobrenome}`;
//       },
//       fala: function (assunto) {
//         return `${this.nome} está ${assunto}.`;
//       },
//       altura: a,
//       peso: p,
//       // getter
//       get imc() {
//         const indice = this.peso / this.altura ** 2;
//         return indice.toFixed(2);
//       },
//     };
//   }

//   const p1 = criaPessoa("Luiz", "Otavio.", 1.8, 80);
//   console.log(p1.nome);
//   console.log(p1.sobrenome);
//   p1.imc = 29;
//   console.log(p1.imc);
