function semRetorno(...args: string[]): void {
  console.log(args.join('  '));
}

const pessoa = {
  nome: 'Gilson',
  sobrenome: 'Passos',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Gilson', 'Passos');
pessoa.exibirNome();

export { pessoa };
