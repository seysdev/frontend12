/*
OPERADORES MATEMATICOS
 */
console.log("");
console.log("////////////////////////////////");
console.log("OPERADORES MATEMATICOS");
console.log("////////////////////////////////");
console.log(2 + 2); // suma
console.log(2 - 2); // resta
console.log(2 * 2); // Multiplicación
console.log(10 / 2); // División
console.log(11 % 3); // Resto
console.log(9 ** 2); // Exponenciación

/*
OPERADORES DE ASIGNACION
*/
let numero = 1000;

/*
OPERADOR DE INCREMENTO Y DECREMENTO
*/
console.log("");
console.log("////////////////////////////////");
console.log("OPERADOR DE INCREMENTO Y DECREMENTO");
console.log("////////////////////////////////");

console.log(numero);

numero++;
console.log(numero);

numero--;
console.log(numero);

/*
OPERADORES DE COMPARACION
*/
console.log("");
console.log("////////////////////////////////");
console.log("OPERADORES DE COMPARACION");
console.log("////////////////////////////////");
let numeroUno = 10;
let numeroDos = 20;
let numeroTres = "10";

console.log(numeroUno > numeroDos); // numeroUno es mayor a numeroDos -> false
console.log(numeroUno < numeroDos); // numeroUno es menor a numeroDos -> true
console.log(numeroUno >= numeroDos); // numeroUno es mayor o igual a numeroDos -> false
console.log(numeroUno <= numeroDos); // numeroUno es menor o igual a numeroDos -> true
console.log(numeroUno != numeroDos); // numeroUno es diferente a numeroDos -> true
console.log(numeroUno == numeroTres); // numeroUno es igual a numero tres -> true
console.log(numeroUno === numeroTres); // numeroUno es igual a numero tres en tipo -> false
console.log(numeroUno !== numeroTres); // numeroUno es diferente a numero tres en tipo -> true

/*
OPERADORES LOGICOS
*/
console.log("");
console.log("////////////////////////////////");
console.log("OPERADORES LOGICOS");
console.log("////////////////////////////////");

let numeroUnoLogico = 10;
let numeroDosLogico = 20;
let numeroTresLogico = "10";
let nombreLogico = "Sebastian";
let hija = "valentina";

console.log(numeroUnoLogico > 5 && nombreLogico == "Sebastian"); // true
console.log(
  numeroUnoLogico > 5 && nombreLogico == "Sebastian" && hija == "johana"
); // false
console.log(
  (numeroUnoLogico > 5 && nombreLogico == "Sebastian") || hija == "johana"
); // true
console.log(!(hija == "valentina"));

console.log(
  "KATYA".length > 4 && "KATYA" == "KATYA" && "KATYA".charAt(0) == "K"
); // true
