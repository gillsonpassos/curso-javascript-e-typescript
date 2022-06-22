// let a = "A";
// let b = a; // cópia (Aqui eu estou copiando o valor de a, para b)
// console.log(a, b);

a = "Outra Coisa";
console.log(a, b);
let a = [1, 2, 3];
let b = [...a];
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

console.log(c);

a.push("GILSON");
console.log(c);
