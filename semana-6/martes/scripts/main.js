/*ATRAPAR ELEMENTOS DESDE EL H1 AL H6 E IMPRIMIRLOS con %O */
const h1 = document.querySelector(".h1");
console.log("%O", h1);
h1.style.color = "red";
h1.innerHTML = "hola mundo dsde js";

const h2 = document.querySelector("h2");
console.log("%O", h2);

const h3 = document.querySelector("h3");
console.log("%O", h3);

const h4 = document.querySelector("h4");
console.log("%O", h4);

const h5 = document.querySelector("h5");
console.log("%O", h5);

const h6 = document.querySelector("h6");
console.log("%O", h6);

/*ATRAPAR TODOS LOS ELEMENTOS P e imprimirlos (querySelectorAll)*/
const parrafos = document.querySelectorAll("p");
console.log("%O", parrafos);
for (let i = 0; i < parrafos.length; i++) {
  console.log(parrafos[i]);
}
parrafos.forEach((parrafo) => {
  console.log("parrafo", parrafo);
});

Array.from(parrafos).map((parrafo) => {
  console.log("map", parrafo);
  return parrafo;
});

// ELEMENTOS DE FORMULARIO
const input = document.querySelector("input");
console.log("input", input.value);
const select = document.querySelector("select");
console.log("select", select.value);

//ELEMENT LINK
const a = document.querySelector("a");
console.log(a);
console.log("%O", a);
a.href = "https://google.com";
a.id = "idAgregado";
a.innerHTML = "TEXTO LINK MODIFICADO";
a.style.textDecoration = "none";
a.style.color = "orange";
