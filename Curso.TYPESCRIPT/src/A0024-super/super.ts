export class Pessoa {
  constructor(
    // eslint-disable-next-line prettier/prettier
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
    ) {}

    getIdade(): number {
      return this.idade;
    }

    getCpf(): string {
      return this.cpf;
    }

    getNomeCompleto(): string {
      return this.nome + ' ' + this.sobrenome;
    }
}

export class Aluno extends Pessoa {
  constructor(
  nome: string,
  sobrenome: string,
  idade: number,
  cpf: string,
   public sala: string,
 ) {
  super(nome, sobrenome, idade, cpf);
 }


  getNomeCompleto(): string {
    console.log('FAZENDO ALGO ANTES');
    const result = super.getNomeCompleto();
    return result + 'HYYYYYYYYYYYYY!!';
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'isso vem do cliente: ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Gilson', 'Passos', 40, '000.000.000-00');
const aluno = new Aluno('Gilson', 'Passos', 40, '000.000.000-00', '0001');
const cliente = new Cliente('Carlos', 'Alberto', 60, '000.000.000-00');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(aluno);
