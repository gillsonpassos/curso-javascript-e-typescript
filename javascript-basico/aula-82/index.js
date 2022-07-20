class DispositoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(this.nome + " já ligado");
      return;
    }

    this.ligado = true;
  }

  desligar() {
    if (this.ligado) {
      console.log(this.nome + " já desligado");
      return;
    }

    this.ligado = false;
  }
}
// const d1 = new DispositoEletronico("Smartphone");

class Smartphone extends DispositoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);

    this.cor = cor;
    this.modelo = modelo;
  }
}

class Tablet extends DispositoEletronico {
  constructor(nome, temWifi) {
    super(nome);
    this.temWifi = temWifi;
  }
  ligar() {
    console.log("Olha, você alterou o método ligar");
  }
}

const s1 = new Smartphone("Samsung", "Preto", "Galaxy S10");
console.log(s1);

const t1 = new Tablet("iPad", true);
t1.ligar();
t1.ligar();
