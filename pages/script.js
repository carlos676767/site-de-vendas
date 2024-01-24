/*Construa uma função encaixa  ros positivos a e b ver      de aos últimos dígitos de a.


a      b     
 567890      890    => encaixa
1243    1243    => encaixa
2457    245     => não encaixa
457    2457    => não encaixa*/

const comparar = () => {
  let a = `567890`;
  const converterAEmAarray = a.split("");
  const filtrarUltimosTresNumerosArrays = converterAEmAarray.filter((element, index, arr) => arr.length - index <= 3);
  console.log(filtrarUltimosTresNumerosArrays);
  let b = `567890`
  

  for (let i = 0; i < filtrarUltimosTresNumerosArrays.length; i++) {
    if (filtrarUltimosTresNumerosArrays >= b) {
        
    }
  }
;
};

comparar()