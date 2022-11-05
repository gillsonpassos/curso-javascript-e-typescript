type ObterChaveFn = <O, k extends keyof O>(objeto: O, chave: k) => O[k];

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'Rosa',
  vacinas: ['vacina 1', 'vacina 2'],
  idade: 10,
};

const vacinas = obterChave(animal, 'vacinas');
const cor = obterChave(animal, 'cor');

console.log(vacinas, cor, obterChave(animal, 'idade'));
