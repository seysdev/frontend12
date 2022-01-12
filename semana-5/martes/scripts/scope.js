// FUNCION DECLARATIVA
function nombreFuncion(parametroA, parametroB, parametroC) {
  console.log(parametroA, parametroB, parametroC);
}

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function main() {
  nombreFuncion(10, 20, 30);
  nombreFuncion(1, 2, 20);
  console.log("la suma es" + sumar(2, 3));
  console.log("la suma es modificada" + sumar(2, 3));
  alert(sumar(3, 4));
  console.log(sumar(11, 3));
  console.log(restar(11, 3));
  console.log(restar(4, 3));
}

// main();
const a = 5;
const b = 10;

function fn() {
  console.log(a);
}

function functionEjemploUno() {
  let a = 10;
  let b = 30;
  console.log("a functionEjemploUno", a);
  console.log("b functionEjemploUno", b);

  function functionEjemploUnoDentro() {
    console.log("functionEjemploUnoDentro");
  }

  functionEjemploUnoDentro();
  funcionEjemploDos()
}

function funcionEjemploDos() {
  let a = 20;
  console.log("a funcionEjemploDos", a);
}

functionEjemploUno();
funcionEjemploDos();
console.log(a);
console.log(b);
fn();


