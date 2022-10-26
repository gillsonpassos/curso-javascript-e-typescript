const objetoA: {
 // eslint-disable-next-line prettier/prettier
 readonly chaveA: string;
  chaveB: string;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveB = 'Outro Valor';
console.log(objetoA);
