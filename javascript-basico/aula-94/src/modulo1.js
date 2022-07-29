export const nome = "Gilson";
export const sobrenome = "Passos";
export const idade = 50;

export function soma(x, y) {
  return x + y;
}

export default class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}
