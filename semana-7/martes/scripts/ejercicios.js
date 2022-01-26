// GET - Se hace la peticion
fetch("https://61ef3d0cd593d20017dbb393.mockapi.io/computers")
  .then(function (respuesta) {
    return respuesta.json();
  })
  .then(function (computers) {
    computers.forEach(function (computadora) { // se recorre coleccion
      agregarNodoEnHtml(crearNodo(computadora)); 
    });
  });

function crearNodo(computadora) {
  const nodo = document.createElement("article");
  nodo.innerHTML = `
    <article class="card mb-4">
        <div class="card-body">
            <h5 class="card-title">Marca: ${computadora.marca}</h5>
            <p class="card-text">Memoria: ${computadora.memoria}</p>
            <p class="card-text">Tamanio: ${computadora.tamanio}</p>
        </div>
      </article>
  `;

  return nodo;
}

function agregarNodoEnHtml(nodo) {
  const app = document.getElementById("app");
  app.appendChild(nodo);
}


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
