export function funcao(this: Date, nome: string, age: number): void {
  console.log(this);
  console.log(nome, age);
}

funcao.call(new Date(), 'Gilson', 50);
funcao.apply(new Date(), ['Gilson', 50]);
