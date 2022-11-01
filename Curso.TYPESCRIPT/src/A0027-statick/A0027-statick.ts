export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';


  constructor(
    // eslint-disable-next-line prettier/prettier
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
    ) {}

    metodoNormal1(): void {
      console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
    }

    static criaPessoa(nome: string, sobrenome: string): Pessoa {
     return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
    }
}

const pessoa1 = new Pessoa('Gilson', 'Passos', 40, '123.456.789-00');
const pessoa2 = Pessoa.criaPessoa('Gisele', 'Nunes');
console.log(pessoa1);
console.log(pessoa2);
pessoa1.metodoNormal1();
