/*
EjemploUno - Arrays
*/
function ejemploUno() {
  // DEFINICION DE ARRAYS
  let nombre = "sebastian";
  let nombres = ["sebastian", "joseluis", "martha", "melisa"];
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let anidados = [
    "edificio uno",
    ["departamento", "departamento uno", [0, 1, 2]],
  ];
  let mezclados = [1, "sebastian", true];

  // ACCESO A INDICES DE ARRAYS
  console.log("nombre", nombre);
  console.log("nombres", nombres);
  console.log("numeros", numeros);
  console.log("anidados", anidados);
  console.log("mezclados", mezclados);

  console.log("nombres[0]", nombres[0]); // sebastian
  console.log("nombres[1]", nombres[1]); // joseluis
  console.log("nombres[2]", nombres[2]); // martha
  console.log("nombres[3]", nombres[3]); // melisa

  console.log("numeros", numeros[2]);
  console.log("anidados", anidados[1][0]); //departamento
  console.log("anidados", anidados[1][2][0]); //0

  // MODIFICACION DE ARRAYS
  nombres[0] = "sebastian modificado";
  console.log(nombres[0]);

  anidados[1][0] = "departamento modificado";
  console.log(anidados[1][0]);
}

// ejemploUno();

/*EjemploDos - OBJETOS*/
function ejemploDos() {
  /*Definicion de objetos */
  let alumno = {
    grado: 5,
    edad: 20,
    sexo: "femenino",
    nombre: "Gabriela",
    apellido: "Salazar",
    nacionalidad: "Peruana",
    nombreHermanos: ["jose", "melisa", "hector"],
  };

  let computadora = {
    marca: "acer",
    anio: "2020",
    etiqueta: "f0f0f0",
    procesador: "pentiun",
  };

  let celular = {
    marca: "iphone",
    tamanio: "xl",
    pulgadas: 20,
    nuevo: false,
  };

  /*ACCEDER A VALORES DE OBJETOS*/
  console.log(alumno); // {...}
  console.log(alumno.grado); // 5
  console.log(alumno.edad); // 20
  console.log(alumno.nombreHermanos[0]); // jose
  console.log(alumno.nombreHermanos[1]); // melisa

  console.log(computadora.marca); // acer

  console.log(celular.marca); // iphone

  const celulares = [
    {
      marca: "iphone",
      tamanio: "xl",
      pulgadas: 20,
      nuevo: false,
    },
    {
      marca: "android",
      tamanio: "xl",
      pulgadas: 20,
      nuevo: false,
    },
    {
      marca: "huawey",
      tamanio: "xl",
      pulgadas: 20,
      nuevo: false,
    },
  ];

  console.log(celulares[0]);
  console.log(celulares[1]);
  console.log(celulares[2]);

  /*MODIFICAR UN OBJETO*/
  alumno.grado = "5 modificado";
  console.log("alumno.grado", alumno.grado);

  celulares[0].marca = "iphone modificado";
  console.log("celulares[0].marca", celulares[0].marca);
}
ejemploDos();

const mezcla = [{ hermanos: [{ nombre: "sebastian" }] }];
console.log(mezcla[0].hermanos[0].nombre);
