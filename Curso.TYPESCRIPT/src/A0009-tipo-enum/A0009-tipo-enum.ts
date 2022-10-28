enum Cores {
  VERMELHO = 10, // 10
  AZUL = 100, // 100
  AMARELO = 200, // 200
  // eslint-disable-next-line prettier/prettier
}

enum Cores {
  Roxo = 'Roxo',
  Verde = 201,
  Rosa,
}


export function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(123456789);


//console.log(Cores);
//console.log(Cores.VERMELHO);
//console.log(Cores[10]);
//console.log(Cores.Roxo);
