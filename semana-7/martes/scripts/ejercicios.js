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
              <img style="width:100%" class="img-full" src=${computadora.photo}>
              <button class="js_delete">ELIMINAR</button>
              <button class="js_edit">EDITAR</button>
          </div>
        </article>
    `;

    nodo.querySelector(".js_delete").onclick = function () {
      if (confirm("Estas seguro que quieres eliminar el elemento")) {
        fetch(
          `https://61ef3d0cd593d20017dbb393.mockapi.io/computers/${computadora.id}`,
          {
            method: "DELETE",
          }
        )
          .then((respuesta) => respuesta.json())
          .then((respuesta) => {
            console.log("respuesta", respuesta);
            nodo.remove();
            alert(`Se elimino correctamente el id ${computadora.id}`);
          })
          .catch((error) =>
            alert(
              `No se pudo eliminar el id ${computadora.id}, por favor intentelo despues`
            )
          );
      }
    };

    nodo.querySelector(".js_edit").onclick = function () {
      console.log("nodo", nodo);
    };

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
function registrarEventoFormulario() {
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
registrarEventoFormulario();

/*DELETE
Agregar el verbo delete al hacer click en el boton eliminar de la tarjeta
*/
