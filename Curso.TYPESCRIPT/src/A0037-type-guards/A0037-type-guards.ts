export function add(a: unknown, b: unknown): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(add(1, 5));
console.log(add('a', 'b'));

type Pessoa = { nome: string };
type animal = { cor: string };
type PessoaOuAnimal = Pessoa | animal;

export class Aluno implements Pessoa {
  constructor(public nome: string) {}
}

function mostraNome(obj: PessoaOuAnimal): void {
  if ('nome' in obj) console.log(obj.nome);
}

mostraNome(new Aluno('sirigueijo'));
