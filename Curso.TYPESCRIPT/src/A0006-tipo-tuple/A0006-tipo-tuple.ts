const dadosCliente1: readonly [number, string] = [1, 'Gilson'];
const dadosCliente2: [number, string, string] = [1, 'Gilson', 'Oliveira'];
// eslint-disable-next-line prettier/prettier
const dadosCliente3: [number, string, string ?] = [1, 'Gilson'];
const dadosCliente4: [number, string, ...string []] = [1, 'Gilson'];

dadosCliente1[0] = 100;
dadosCliente1[1] = 'Alice';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);
