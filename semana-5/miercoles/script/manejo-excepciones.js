/*
ejemploUno  - throw
*/
function ejemploUno() {
  function suma(a, b) {
    if (arguments.length > 2) {
      throw console.error("La funcion no soporta mas de 2 argumentos");
    }

    return a + b;
  }

  console.log(suma(2, 3));
  console.log(suma(3, 3));
  console.log(suma(2, 3, 4, 5, 2, 5, 5, 6));
  console.log("continuacion!!");
}

// ejemploUno();
// console.log("hoaoahaoa");

/*
ejemploDos - try catch
*/
function ejemploDos() {
  let message = "";
  const nombre = prompt("Ingresa tu nombre"); // pidiendo el dato

  try {
    if (nombre.length < 6) {
      // evaluo si el dato es menor que 6
      throw "SHORT";
    } else if (nombre.length > 10) {
      // evaluo si el nombre es mayor que 10
      throw "LONG";
    }

    message = "El nombre " + nombre + " es correcto";
  } catch (error) {
    if (error == "SHORT") {
      message = "El nombre " + nombre + " es muy corto";
    }

    if (error == "LONG") {
      message = "El nombre " + nombre + " es muy largo";
    }
  } finally {
    console.log(message);
  }
}
ejemploDos();
