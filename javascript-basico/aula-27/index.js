// (condição) ? 'valor para verdadeiro' : 'valor para falso'
const pontuacaoUSuario = 500;
const nivelUsuario =
  pontuacaoUSuario >= 1000 ? "Usuário VIP" : "Usuário normal";

const corUsuario = null;
const corPadrao = corUsuario || "Preta";

console.log(nivelUsuario, corPadrao);

// if (pontuacaoUSuario >= 1000) {
//   console.log("Usuario VIP");
// } else {
//   console.log("Usuario normal");
// }
