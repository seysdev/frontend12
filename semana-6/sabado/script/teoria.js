// REPLACE CHILD
function replacechild() {
  const h2 = document.createElement("h2"); // he creado el elemento que remplazara
  const h1 = document.querySelector("#replace h1"); // el elemento que sera remplazado
  const container = document.querySelector("#replace"); // el padre contenedor

  h2.textContent = "HOLA MUNDO H2 REMPLAZADO"; // agregando un valor al elemento h2

  container.replaceChild(h2, h1); // remplazando h2 por h1
}

// replacechild();

function clonenode() {
  const h1 = document.querySelector("#replace h1"); // atrapando el elemento a clonar
  const container = document.querySelector("#replace"); // el padre contenedor

  let clone = h1.cloneNode(true);

  container.appendChild(clone);
}

// clonenode();

function insertbefore() {
  const container = document.querySelector("#replace"); // el padre contenedor
  const h1 = document.querySelector("#replace h1"); // elemento de referencia
  const h2 = document.createElement("h2"); // creando elemento
  h2.textContent = "Texto de h2";

  container.insertBefore(h2, h1);
}

insertbefore();

function insertafter() {
  const h1 = document.querySelector("#replace h1"); // elemento de referencia
  const h2 = document.createElement("h2"); // creando elemento
  h2.textContent = "Texto de h2";
 
  h1.parentNode.insertBefore(h2, h1.nextSibling);
}
insertafter()
