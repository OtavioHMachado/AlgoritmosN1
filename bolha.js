function calcular(number) {
  if (number === 0) return 0;

  let teste = 1;
  for (let i = number; i > 0; i--) {
    for (let j = i; j > 0; j--) {
      teste = teste * j;
    }
  }

  console.log("teste", teste);
}

const numDeTeste = 4;

console.time("tempo");
calcular(numDeTeste);
console.timeEnd("tempo");

// a execução se alterou durante 4.5ms e 5ms