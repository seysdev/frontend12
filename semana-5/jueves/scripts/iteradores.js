function forIterador() {
  //   for (let index = 0; index < 20; index++) {
  //     console.log(index);
  //   }

  //   for (let index = 20; index > 0; index--) {
  //     console.log("for 2", index);
  //   }

  //   let numeros = [10, 20, 30, 40];
  //   let totalNumeros = 0;

  //   for (let index = 0; index < numeros.length; index++) {
  //     totalNumeros = totalNumeros + numeros[index];
  //   }

  //   let total = numeros[0] + numeros[1] + numeros[2] + numeros[3];

  //   console.log(total);
  //   console.log('totalNumeros', totalNumeros)
  const numeros = [10, 20, 30];
  let resultado = 0;
  for (let index = 0; index < numeros.length; index++) {
    resultado = resultado + numeros[index];
  }

  let total = numeros[0] + numeros[1] + numeros[2];
  console.log("total", total);

  console.log("resultado", resultado);
}

// forIterador();

function whileIterador() {
  let n = 0;
  while (n < 10) {
    console.log("hola", n);
    n++;
  }
}
// whileIterador();

function doWhileIterador() {
  let n = 0;

  do {
    console.log("una veZ!!!", n);
    n++;
  } while (n < 10);
}
doWhileIterador();

const numeros = [0, 1, 2, 3];
for (let index = 1; index < array.length; index++) {
  const element = array[index];
}
