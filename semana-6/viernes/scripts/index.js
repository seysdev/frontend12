/*CCSOM */
const button = document.querySelector("button");
const body = document.querySelector("body");

function ejemploUno() {
  button.onclick = function () {
    console.log("funcion!!!");
    //   body.style.backgroundColor = `yellow`;

    console.log(window.getComputedStyle(body).backgroundColor);
    console.log("body.style.backgroundColor", body.style.backgroundColor);
    console.log("body.style", body.style);

    if (body.style.backgroundColor == "yellow") {
      body.style.backgroundColor = "red";
    } else {
      body.style.backgroundColor = "yellow";
    }
  };
}
// ejemploUno()

/*
CLASSLIST
Interface para manejo de clases 
add = agrega una clase
remove = remueve clase
toggle = agrega o quita
contains = devuelve verdadero si la clase existe en el elemento
replace = remplaza una clase
*/

function ejemploDos() {
  button.onclick = function () {
    // body.classList.add("bgyellow"); // agrega clase
    // body.classList.add("bgred");
    // body.classList.toggle("bgyellow"); // agrega o quita
    // body.classList.remove("bgyellow"); // remueve la clase
    console.log(body.classList.contains("bgyellow"));

    // contains
    if (body.classList.contains("bgyellow")) {
      body.classList.add("bgred");
      body.classList.remove("bgyellow");
    } else {
      body.classList.add("bgyellow");
      body.classList.remove("bgred");
    }

    body.classList.replace("clase-a-remplazar", "bgblue"); // replace
  };
}
// ejemploDos();

function ejemploTres() {
  button.onclick = function () {
    const app = document.getElementById("app"); // referencial al padre conteneder
    const div = document.createElement("div"); // cree el elemento
    div.innerHTML = `
      <article class="card mb-4">
        <img src="https://picsum.photos/200/300" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">TITULO DEL ARTICULO</h5>
            <p class="card-text">Parrafo del articulo</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        <button>Eliminar</button>
      </article>
    `; // al elemento le asigno el valor que tendra dentro

    div.classList.add("col"); // al elemento creado le estoy agregando una clase
    div.querySelector("button").onclick = function () {
      //   app.removeChild(div);
      if (confirm("Estas seguro que deseas eliminar?")) {
        div.remove();
      }
    }; // le agrego el evento al boton capturandolo de manera relativa al div

    app.appendChild(div); // agregando el elemento en el body
  };
}

ejemploTres();
