// GET
fetch("https://61ef3d0cd593d20017dbb393.mockapi.io/computers")
  .then(function (respuesta) {
    return respuesta.json();
  })
  .then(function (computers) {
    console.log("computers", computers);
    computers.forEach(function (computer) {
      console.log("computer", computer);
    });
  });

console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

/*
GET
Usando el metodo get 
realizar una peticion al endpoint creado con mockapi y pintar los datos en el navegador
*/
