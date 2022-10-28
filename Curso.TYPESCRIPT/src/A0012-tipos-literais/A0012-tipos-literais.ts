//let x = 10;
//x = 0b1010;
//const y = 10;
//const a = 100;

const pessoa = {
  // eslint-disable-next-line prettier/prettier
  nome: 'Gilson' as const,
  sobrenome: 'Passos',
};
console.log(pessoa);

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}
console.log(escolhaCor('Vermelho'));

// Module mode
export default 1;
