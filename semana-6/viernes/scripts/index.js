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
ejemploDos();
