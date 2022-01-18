// ATRAPAR ELEMENTO
const h2 = document.querySelector("h2"); // h1
const h3 = document.querySelector("h3");
console.log("h2 %O", h2);

// APRENDER SOBRE LAS PROPIEDADES Y METODOS
h2.style.color = "blue";
h2.style.fontSize = "40px";
h2.innerHTML = "HOLA MUNDO DESDE JS";

h3.style.color = "blue";
h3.style.fontSize = "40px";
h3.innerHTML = "HOLA MUNDO DESDE JS";

function addSize() {
  this.style.fontSize =
    Number(this.style.fontSize.replace("px", "")) + 10 + "px";
}

function removeSive() {
  this.style.fontSize =
    Number(this.style.fontSize.replace("px", "")) - 10 + "px";
}

// APRENDER A REGISTRAR EVENTOS
h2.onmouseover = addSize;
h2.onmouseout = removeSive;
h2.onclick = addSize;

h3.onmouseover = addSize;
h3.onmouseout = removeSive;
h3.onclick = addSize;
