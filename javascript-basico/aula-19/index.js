const pessoa1 = {
  nome: "Gilson",
  sobrenome: "Passos",
  idade: 55,

  //   fala() {
  //     console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
  //   },

  fala() {
    console.log(`A minha idade atual é ${this.idade}.`);
  },

  incrementaIdade() {
    this.idade++;
  },
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
