function calcular(number) {
  let teste = fatorialPro(number, number);
  console.log("teste", teste);
}

function fatorialPro(fatorial, megafatorial) {
  if (megafatorial === 1) {
    return 1;
  }

  if (fatorial === 1) {
    return fatorial(megafatorial - 1, megafatorial - 1);
  }

  return fatorial * fatorial(fatorial - 1, megafatorial);
}

const numDeTeste = 4;

console.time("tempo");
calcular(numDeTeste);
console.timeEnd("tempo");

// a execução se alterou durante 4.4ms e 6ms
