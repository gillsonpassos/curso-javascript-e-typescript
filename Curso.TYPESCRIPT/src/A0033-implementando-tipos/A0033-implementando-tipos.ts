  type TipoPessoa = {
    nome: string;
    sobrenome: string;
    nomeCompleto(): string;
};

export class Pessoa implements TipoPessoa {
   // eslint-disable-next-line prettier/prettier
   constructor(public  nome: string, public  sobrenome: string) {

  }

    nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
   }

}


const pessoa = new Pessoa('Gilson', 'Oliveira');
console.log(pessoa.nomeCompleto());
