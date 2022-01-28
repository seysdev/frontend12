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
    console.log("computadora", computadora);
    const nodo = document.createElement("article");
    nodo.innerHTML = `
      <article class="card mb-4">
          <div class="card-body">
              <h5  class="card-title">Marca: ${computadora.marca}</h5>
              <p class="card-text">Memoria: ${computadora.memoria}</p>
              <p class="card-text">Color: ${computadora.color}</p>
              <img style="width:100%" class="img-full" src=${computadora.photo}>
              <button class="js_delete">ELIMINAR</button>
              <button  data-bs-toggle="modal" data-bs-target="#exampleModal"  class="js_edit">EDITAR</button>
          </div>
        </article>
    `;

    nodo.classList.add("col-sm-4");

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
      console.log("computadora", computadora);
      const inputMarca = document.querySelector(".js_form_edit .js_marca");
      const inputMemoria = document.querySelector(".js_form_edit .js_memoria");
      const inputColor = document.querySelector(".js_form_edit .js_color");
      const inputPhoto = document.querySelector(".js_form_edit .js_photo");
      const inputId = document.querySelector(".js_form_edit .js_id");
      // const refFormulario = obtenerReferenciasFormulario(
      //   document.querySelector(".js_form_edit")
      // );

      inputMarca.value = computadora.marca;
      inputMemoria.value = computadora.memoria;
      inputColor.value = computadora.color;
      inputPhoto.value = computadora.photo;
      inputId.value = computadora.id;
      // refFormulario.marca.value = computadora.marca
      // refFormulario.memoria.value = computadora.memoria
      // refFormulario.color.value = computadora.color
      // refFormulario.photo.value = computadora.photo
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
function obtenerValores(form) {
  return {
    marca: form.querySelector(`.js_marca`).value,
    memoria: form.querySelector(`.js_memoria`).value,
    color: form.querySelector(`.js_color`).value,
    photo: form.querySelector(`.js_photo`).value,
  };
}

function obtenerReferenciasFormulario(form) {
  return {
    marca: form.querySelector(`.js_marca`),
    memoria: form.querySelector(`.js_memoria`),
    color: form.querySelector(`.js_color`),
    photo: form.querySelector(`.js_photo`),
  };
}
/*POST */
function registrarEventoFormulario() {
  const form = document.querySelector(".js_form_create");

  // function obtenerValores() {
  //   return {
  //     marca: document.querySelector(".js_marca").value,
  //     memoria: document.querySelector(".js_memoria").value,
  //     color: document.querySelector(".js_color").value,
  //     photo: document.querySelector(".js_photo").value,
  //   };
  // }

  form.onsubmit = function (event) {
    event.preventDefault();

    fetch("https://61ef3d0cd593d20017dbb393.mockapi.io/computers", {
      method: "POST",
      body: JSON.stringify(obtenerValores(form)),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((respuesta) => respuesta.json())
      .then((respuesta) => {
        console.log("respuesta", respuesta);
        obtenerComputadoras();
        form.reset();
      })
      .catch((error) => console.log("error", error));
    //   .then((respuesta) => console.log(respuesta));
    // .then(function(respuesta) {
    //     return respuesta.json()
    // })
  };
}

// PUT
function registrarEventoFormularioEdit() {
  const form = document.querySelector(".js_form_edit");
  const botonClose = form.querySelector(".js_close");

  form.onsubmit = function (event) {
    event.preventDefault();
    const idValue = form.querySelector(".js_id").value;
    console.log(form.querySelector(".js_id").value);
    console.log(obtenerValores(form));
    fetch(`https://61ef3d0cd593d20017dbb393.mockapi.io/computers/${idValue}`, {
      method: "PUT",
      body: JSON.stringify(obtenerValores(form)),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((respuesta) => respuesta.json())
      .then((respuesta) => {
        console.log("respuesta", respuesta);
        obtenerComputadoras();
        botonClose.click();
      })
      .catch(() =>
        alert(`No se pudo actualizar el id ${idValue} intentelo mas tarde`)
      );
  };
}

obtenerComputadoras();
registrarEventoFormulario();
registrarEventoFormularioEdit();

/*DELETE
Agregar el verbo delete al hacer click en el boton eliminar de la tarjeta
*/
