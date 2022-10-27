let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function creatPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string,
  lastName?: string,
} {
  return {
    firstName,
    lastName,
  };
}

export function squereOf(x: unknown) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squereOfTwoNumber = squereOf(2);
const squereOfTwoString = squereOf('2');

if (squereOfTwoNumber === null) {
  console.log('conta invalida');
} else {
  console.log(squereOfTwoNumber * 100);
}
