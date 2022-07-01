// try {
//   console.log("Abri um Arquivo");
//   console.log("Manipulei o arquivo e gerou erro");
//   console.log("Fechei o Arquivo");
//   // é executada quando não há erros

//   try {
//     console.log(b);
//   } catch (e) {
//     console.log("deu erro");
//   }
// } catch (e) {
//   console.log("Tratando Erro.");
//   // É executada quando há erros
// } finally {
//   console.log("FINALLY: Eu sempre sou Executado");
//   // sempre
// }

function retonaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instância de Date.");
  }
  if (!data) {
    data = new Date();
  }
  return data.toLocaleTimeString("pt-BR", {});
}
const hora = retonaHora();
console.log(hora);
