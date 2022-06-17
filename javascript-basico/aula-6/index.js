/*
luiz otavio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu imc é de 25.925925925925924
*/
const nome = "Gilson Passos";
const sobrenome = "Oliveira";
const idade = 56;
const peso = 75;
const alturaEmCm = 1.7;
let imc; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmCm * alturaEmCm);
anoNascimento = 2022 - idade;

console.log(`${nome}  ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(
  `tem ${alturaEmCm} de altura e seu IMC é de ${indiceMassaCorporal}`
);
console.log(`${nome} nasceu em ${anoNascimento}.`);
