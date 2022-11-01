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

export class Aluno extends Pessoa {}
export class Cliente extends Pessoa {}

const pessoa = new Pessoa('Gilson', 'Passos', 40, '000.000.000-00');
const aluno = new Aluno('Gilson', 'Passos', 40, '000.000.000-00');
const cliente = new Cliente('Carlos', 'Alberto', 60, '000.000.000-00');
console.log(pessoa);
console.log(aluno);
console.log(cliente);
