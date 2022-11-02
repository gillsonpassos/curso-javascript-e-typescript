interface TipoNome {
  nome: string,
};

interface TipoSobrenome  {
  sobrenome: string,
};

interface TipoNomeCompleto {
  nomeCompleto(): string,
};

//type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

export class Pessoa implements TipoPessoa2 {
  // eslint-disable-next-line prettier/prettier
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto():  string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoaObj: TipoPessoa2 = {
  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  },
  nome:'Gilson',
  sobrenome: 'Agora ta ok',
}

const pessoa = new Pessoa('Gilson', 'Oliveira');
console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto());
