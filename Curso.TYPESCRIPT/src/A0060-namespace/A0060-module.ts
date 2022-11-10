// eslint-disable-next-line @typescript-eslint/no-namespace
namespace MeuNamespace {
  export const nomeDoNamespace = 'pica-pau';

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoaDoNamespace = new PessoaDoNamespace('pica-pau');
  console.log(pessoaDoNamespace);

  // eslint-disable-next-line @typescript-eslint/no-namespace
  export namespace OutroNamespace {
    export const nomeDoNamespace = 'papa-leguas';
  }
}

const pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('pica-pau');
console.log(pessoaDoNamespace);
console.log(MeuNamespace.nomeDoNamespace);
console.log(MeuNamespace.OutroNamespace.nomeDoNamespace);
