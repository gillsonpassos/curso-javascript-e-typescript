export class Empresa {
  // eslint-disable-next-line prettier/prettier
  public readonly nome: string; // public não necessario
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;


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

export class GUTCH extends Empresa {
 constructor() {
  super('GUTCh', '11.111.111/0001-11');
 }

 popColaborador(): Colaborador | null {
  const colaborador = this.colaboradores.pop();
  if (colaborador) return colaborador;
  return null;
 }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
    ) {}
}

const empresa1 = new GUTCH();
const Colaborador1 = new Colaborador('Gilson', 'Passos');
const Colaborador2 = new Colaborador('Carlos', 'Alberto');
const Colaborador3 = new Colaborador('Célio', 'Oliveira');
empresa1.adicionaColaborador(Colaborador1);
empresa1.adicionaColaborador(Colaborador2);
empresa1.adicionaColaborador(Colaborador3);
const colaboradorRemovido = empresa1.popColaborador();
console.log(colaboradorRemovido);
console.log(empresa1);
