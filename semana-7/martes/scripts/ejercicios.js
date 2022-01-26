// GET
fetch("https://61ef3d0cd593d20017dbb393.mockapi.io/computers")
  .then(function (respuesta) {
    return respuesta.json();
  })
  .then(function (computers) {
    console.log("computers", computers);
    computers.forEach(function (computer) {
      agregarNodoEnHtml(crearNodo(computer));
    });
  });

function crearNodo(computer) {
  console.log("makeComputer", computer);
  const element = document.createElement("article");
  element.innerHTML = `
    ${computer.marca}
  `;

  return element;
}

function agregarNodoEnHtml(dom) {
  const app = document.getElementById("app");

  app.appendChild(dom);
}

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
let datos = [];
function obtenerDatos(callback) {
  fetch("https://61ef3d0cd593d20017dbb393.mockapi.io/computers")
    .then((response) => {
      return response.json();
    })
    .then((respuesta) => {
      callback(respuesta);
      datos = respuesta;
    });
}

obtenerDatos(function (respuesta) {
  console.log("respuesta", respuesta);
});
console.log("datos", datos);

obtenerDatos(function (respuesta) {
  console.log("respuesta", respuesta);
});
