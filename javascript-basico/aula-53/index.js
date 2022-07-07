function retornaFuncao(nome) {
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao("Gilson");
const funcao2 = retornaFuncao("Passsos");
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());
