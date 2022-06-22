/*
Dados Primitivos (imutáveis)- string, number, boolean, underfined,
 null (bigint, symbol) - valores copiados

 Dados de Referencia (mutável) - arrays, object, function - passados por referência
*/
const a = {
  nome: "GILSON",
  sobrenome: "Passos",
};
const b = { ...a };

a.nome = "JOÃO";
console.log(a);
console.log(b);
