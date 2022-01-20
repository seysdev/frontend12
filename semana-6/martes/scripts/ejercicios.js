/*
DOM - ejercicio uno
Dado 3 parrafos y dentro un enlace por cada uno

atrapar cada uno de los parrafos 
y cambiarle el color,
cambiarle el tamaño de fuente 
cambiarle el font family

atrapar el enlace en relacion al parrafo 
y cambiarle el atributo href y su texto 

Lo optimo seria crear una funcion que reciba un elemento tipo nodo,
y tambien las propiedades a manipular
*/

function ejercicioUno() {
  const parrafos = document.querySelectorAll("p");

  function modifyParagraph(parrafo, options) {
    const a = parrafo.querySelector("a");

    parrafo.style.color = options.color;
    parrafo.style.fontSize = options.fontSize;
    parrafo.style.fontFamily = options.fontFamily;

    a.href = options.href;
    a.textContent = options.text;
  }

  modifyParagraph(parrafos[0], {
    color: "blue",
    fontSize: "30px",
    fontFamily: "arial",
    href: "https://google.com",
    text: "Google",
  });

  modifyParagraph(parrafos[1], {
    color: "red",
    fontSize: "30px",
    fontFamily: "arial",
    href: "https://google.com",
    text: "Google",
  });

  modifyParagraph(parrafos[2], {
    color: "yellow",
    fontSize: "30px",
    fontFamily: "arial",
    href: "https://google.com",
    text: "Google",
  });
}
ejercicioUno();
/*
DOM - EJERCICIO DOS
Dado una estructura de ul

Capturar cada uno de los li y agregarle los siguients estilos
fontSize
color
backgroundColor

tambien modificar su contenido y agregarle la palabra hola mundo

para este ejercicio utilizar querySelectorAll
*/

/*
DOM EJERCICIO TRES
Dado una estructura de divs

Atrapar el primer elemento y modificar sus estilos
backgroundColor
fontSize
color
fontFamily

Atrapar el ultimo elemento y modificar sus estilos
backgroundColor
fontSize
color
fontFamily

Atrapar el segundo elemento y modificar sus estilos
backgroundColor
fontSize
color
fontFamily

utilizar nextElementSibling, prevElementSibling, firstElement, lastElement
*/
