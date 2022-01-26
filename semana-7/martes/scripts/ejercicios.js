// GET - Se hace la peticion
function obtenerComputadoras() {
  fetch("https://61ef3d0cd593d20017dbb393.mockapi.io/computers")
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (computers) {
      document.getElementById("app").innerHTML = "";
      computers.forEach(function (computadora) {
        // se recorre coleccion
        agregarNodoEnHtml(crearNodo(computadora));
      });
    });

  function crearNodo(computadora) {
    const nodo = document.createElement("article");
    nodo.innerHTML = `
      <article class="card mb-4">
          <div class="card-body">
              <h5  class="card-title">Marca: ${computadora.marca}</h5>
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
}

/*
GET
Usando el metodo get 
realizar una peticion al endpoint creado con mockapi y pintar los datos en el navegador
*/
// obtenerComputadoras();

/*POST */
function guardarComputadora() {
  const form = document.querySelector("form");

  function obtenerValores() {
    return {
      marca: document.querySelector(".js_marca").value,
      memoria: document.querySelector(".js_memoria").value,
      color: document.querySelector(".js_color").value,
      photo: document.querySelector(".js_photo").value,
    };
  }

  form.onsubmit = function (event) {
    event.preventDefault();

    fetch("https://61ef3d0cd593d20017dbb393.mockapi.io/computers", {
      method: "POST",
      body: JSON.stringify(obtenerValores()),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((respuesta) => respuesta.json())
      .then((respuesta) => {
        console.log("respuesta", respuesta);
        obtenerComputadoras();
      })
      .catch((error) => console.log("error", error));
    //   .then((respuesta) => console.log(respuesta));
    // .then(function(respuesta) {
    //     return respuesta.json()
    // })
  };
}
obtenerComputadoras();
guardarComputadora();
