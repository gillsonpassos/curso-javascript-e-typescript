type veiculo = {
  marca: string;
  ano: number;
};

type Car = {
  brand: veiculo['marca'];
  year: veiculo['ano'];
  name: string;
};

const carro: Car = {
  brand: 'Ford',
  year: 2020,
  name: 'nome',
};

console.log(carro);
