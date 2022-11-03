//Declaration marging
interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: string[];
}

interface Pessoa {
  idade?: number;
}

export const pessoa: Pessoa = {
  nome: 'Marcos',
  sobrenome: 'Molusco',
  enderecos: ['Fenda dos Biquines'],
  idade: 50,
};

console.log(pessoa);
