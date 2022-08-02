// const nome = "Luiz";
// const sobrenome = "Miranda";

// const falaNomme = () => nome + " " + sobrenome;

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNomme = falaNomme;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNomme = falaNomme;

// console.log(exports);

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

module.exports.nome = "Luiz";
exports.Pessoa = Pessoa;
this.sobrenome = "Qualquer coisa";
