/*getElementById*/
console.log(document.getElementById("h2"));

/*getElementByTagName*/
const h2s = document.getElementsByTagName("h2");
console.log(document.getElementsByTagName("h2"));
console.log(h2s[0]);
console.log(h2s[1]);
console.log(h2s[2]);

/*querySelector*/
console.log("queryselector por etiqueta", document.querySelector("h2"));
console.log("queryselector por id", document.querySelector("#h2"));
console.log("queryselector por clase", document.querySelector(".h2"));
console.log(
  "queryselector por atributo",
  document.querySelector("[class='h2']")
);

/*querySelectorAll */
console.log("querySelectorAll por etiqueta", document.querySelectorAll("h2"));
console.log("querySelectorAll por clase", document.querySelectorAll(".h2"));
console.log(
  "querySelectorAll por atributo",
  document.querySelectorAll("[class='h2']")
);

/*
ATRAPANDO NODOS
Crear una funcion que reciba 
el nodo,
el color, 
el tamanio de fuente 
el color de fondo y 
el font family 
  function modifiNode(nodo, {
      color: 'red',
      fontSize: '20px',
      backgroundColor: 'blue',
      fontFamily: '30px'
  })

  modifiNode(h2,{
      color: 'red',
      fontSize: '20px',
      backgroundColor: 'blue',
      fontFamily: '30px'
  } )

  modifiNode(h3,{
      color: 'red',
      fontSize: '20px',
      backgroundColor: 'blue',
      fontFamily: '30px'
  } )

  modifiNode(h2,{
      color: 'red',
      fontSize: '20px',
      backgroundColor: 'blue',
      fontFamily: '30px'
  } )

  aplicar a elementos desde el h1 al h6 en el html
*/
// const tituloH2 = document.querySelector("h2");
// tituloH2.style.color = "white";
// tituloH2.style.fontSize = "40px";
// tituloH2.style.backgroundColor = "red";
// tituloH2.style.fontFamily = "arial";

function modifyNode(node, properties) {
  node.style.color = properties.color;
  node.style.fontSize = properties.fontSize;
  node.style.backgroundColor = properties.backgroundColor;
  node.style.fontFamily = properties.fontFamily;
}

modifyNode(document.querySelector("h1"), {
  color: "red",
  fontSize: "34px",
  backgroundColor: "blue",
  fontFamily: "arial",
});

modifyNode(document.querySelector("h2"), {
  color: "red",
  fontSize: "24px",
  backgroundColor: "blue",
  fontFamily: "arial",
});

modifyNode(document.querySelector("h3"), {
  color: "red",
  fontSize: "24px",
  backgroundColor: "blue",
  fontFamily: "arial",
});

modifyNode(document.querySelector("h4"), {
  color: "red",
  fontSize: "24px",
  backgroundColor: "blue",
  fontFamily: "arial",
});

modifyNode(document.querySelector("h5"), {
  color: "red",
  fontSize: "24px",
  backgroundColor: "blue",
  fontFamily: "arial",
});

modifyNode(document.querySelector("h6"), {
  color: "red",
  fontSize: "24px",
  backgroundColor: "blue",
  fontFamily: "arial",
});


const parrafos = document.querySelectorAll("p")
console.log("parrafos", parrafos)