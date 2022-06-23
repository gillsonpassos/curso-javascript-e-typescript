const numero = 10;

// Se (numero >= 0 && numero <= 5) ocorrer, faça isso {código}
// Se não; faça isso {o código}

if (1 === 1) {
  // verdadeiro
  console.log("LITERAL");
}

if (numero >= 0 && numero <= 5) {
  console.log("O numero está entre 0 e 5.");
} else if (numero >= 6 && numero <= 8) {
  console.log("O numero está entre 6 e 8.");
} else if (numero >= 9 && numero <= 11) {
  // verdadeiro
  console.log("O numero está entre 9 e 11.");
} else {
  console.log("O numero não está entre 0 e 11. ");
}

console.log("...Aqui vai o resto do codigo.");
