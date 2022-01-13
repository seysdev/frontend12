/*
Ejemplo uno
*/
function ejemploUno() {
  let edad = prompt("Ingresa tu edad");

  if (edad > 18) {
    alert("Bienvenido al club");
  } else {
    alert("No ERES BIENVENIDO!!");
  }
}
// ejemploUno()

/*
Ejemplo dos
*/
function ejemploDos() {
  let saborHelado = prompt("Ingresa tu sabor de helado"); // pido el dato

  if (saborHelado.toUpperCase() == "FRESA") {
    // evalua el dato
    alert("tu sabor es fresa");
  } else if (saborHelado.toUpperCase() == "MANGO") {
    // evalua el dato
    alert("tu sabor es mango");
  } else if (saborHelado.toUpperCase() == "CHOCOLATE") {
    // evalua el dato
    alert("tu sabor es chocolate");
  } else {
    // ejecuta el valor por defecto
    alert("No tenemos ese sabor");
  }

  console.log("se termino!!!");
}
// ejemploDos();

function printTypeVehicle(type) {
  return alert("Elegiste un " + type);
}
/*
Ejemplo tres
*/
function ejemploTres() {
  let vehiculo = prompt(
    "Por favor elige tu vehiculo(auto, moto, bicicleta, scooter)"
  );

  switch (vehiculo) {
    case "auto": {
      printTypeVehicle("auto");
      break;
    }

    case "moto": {
      printTypeVehicle("moto");
      break;
    }

    case "bicicleta": {
      printTypeVehicle("bicicleta");
      break;
    }

    case "scooter": {
      printTypeVehicle("scooter");
      break;
    }

    default: {
      alert("No hay vehiculo disponible");
    }
  }

  console.log("se termino ejemploTres");
}
// ejemploTres();

/*
Ejemplo Cuatro 
*/
function ejemploCuatro() {
  const sexo = prompt("Ingresa tu sexo");

  sexo == "m" ? alert("Eres masculino") : alert("Eres femenino");
}
ejemploCuatro();
