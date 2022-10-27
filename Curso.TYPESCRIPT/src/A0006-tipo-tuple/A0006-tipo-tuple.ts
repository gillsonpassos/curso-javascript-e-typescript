// Tuple
// eslint-disable-next-line prettier/prettier
const dadosCliente1: readonly [number, string] = [1, 'Gilson'];
const dadosCliente2: [number, string, string] = [1, 'Gilson', 'Oliveira'];
const dadosCliente3: [number, string, string ?] = [1, 'Gilson'];
const dadosCliente4: [number, string, ...string []] = [1, 'Gilson'];

//dadosCliente1[0] = 100;
//dadosCliente1[1] = 'Alice';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

//readonly array
const array1: readonly string[] = ['Gilson'];
const array2: ReadonlyArray<string> = ['Gilson'];

console.log(array1);
console.log(array2);
