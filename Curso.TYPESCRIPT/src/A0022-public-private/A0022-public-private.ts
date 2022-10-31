export class Empresa {
  // eslint-disable-next-line prettier/prettier
  public readonly nome: string; // public não necessario
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;


  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

    adicionaColaborador(colaborador: Colaborador): void {
      this.colaboradores.push(colaborador);
    }

    mostrarColaboradores(): void {
      for (const colaborador of this.colaboradores) {
        console.log(colaborador);
      }
    }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
    ) {}
}

const empresa1 = new Empresa('GUTCh', '11.111.111/0001-11');
const Colaborador1 = new Colaborador('Gilson', 'Passos');
const Colaborador2 = new Colaborador('Carlos', 'Alberto');
const Colaborador3 = new Colaborador('Célio', 'Oliveira');
empresa1.adicionaColaborador(Colaborador1);
empresa1.adicionaColaborador(Colaborador2);
empresa1.adicionaColaborador(Colaborador3);
console.log(empresa1, empresa1.nome);
