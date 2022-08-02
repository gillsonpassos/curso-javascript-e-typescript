const multiplicacao = require("./mod");

console.log(multiplicacao(2, 2));

// ./ =>  buscar pra frente => Pasta atual
// ../ => buscar pasta pra traz => Pasta anterior

// console.log(__filename); "arquivo atual"  variaveis que buscam caminho 'arquivo'.
// console.log(__dirname); = "Pasta atual"  busca caminho absoluto.

const path = require("path");
console.log(path.resolve(__dirname));
