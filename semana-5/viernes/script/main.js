/*
OBJETO - elemento donde podemos modelar informacion 
*/
let perro = {
  nombre: "sebastian",
  edad: 2,
  raza: "doberman",
  pais: "peru",
  sayInfo: function () {
    console.log(this);
    // return perro.nombre + " " + perro.edad;
    return this.nombre + " " + this.edad;
  },
};

console.log(perro.sayInfo());

let computadora = {
  marca: "acer",
  procesador: "intel",
  anio: 2020,
  getMarca: function () {
    console.log(this);
    return this.marca;
  },
  getAnio: function () {
    return this.anio;
  },
  getAllDetail: function () {
    return this.marca + this.procesador + this.anio;
  },
  setMarca: function (marca) {
    this.marca = marca;
  },
};

console.log(computadora.getMarca());
console.log(computadora.setMarca("ibm"));

// console.log("computadora", computadora);

let alumnos = {
  nombres: [],
  setAlumno: function (nombre) {
    this.nombres.push(nombre); // agrego elementos al array
  },
  getAlumno: function (nombre) {
    return this.nombres.find((el) => el.nombre == nombre); // buscando elemento en coleccion con find
  },
};

alumnos.setAlumno({
  nombre: "sebastian",
  apellido: "yabiku",
  edad: 32,
  pais: "peru",
});
alumnos.setAlumno({
  nombre: "jose",
  apellido: "maroma",
  edad: 34,
  pais: "peru",
});
alumnos.setAlumno({
  nombre: "melisa",
  apellido: "caicho",
  edad: 34,
  pais: "peru",
});

console.log("alumno jose", alumnos.getAlumno("jose"));
console.log("alumno melisa", alumnos.getAlumno("melisa"));
console.log("alumnos", alumnos);

/*
nombre 
detalle
precio
marca
numero de serie
anio
procedencia
*/

let iphone = {
  nombre: "iphone",
  modelo: 11,
  marca: "apple",
  numeroSerie: 1234,
  procendencia: "usa",
  getInfo: function () {
    return `El nombre del producto es ${this.nombre} el modelo es ${this.modelo} de la marca ${this.marca}`;
  },
};

let android = {
  nombre: "android",
  modelo: 12,
  marca: "huawey",
  numeroSerie: 1234,
  procendencia: "usa",
  getInfo: function () {
    return `El nombre del producto es ${this.nombre} el modelo es ${this.modelo} de la marca ${this.marca}`;
  },
};

let huawey = {
  nombre: "huawey",
  modelo: 12,
  marca: "abc",
  numeroSerie: 1234,
  procendencia: "usa",
  getInfo: function () {
    return `El nombre del producto es ${this.nombre} el modelo es ${this.modelo} de la marca ${this.marca}`;
  },
};

let firefox = new Object(); // {}
firefox.nombre = "firefox";
firefox.modelo = "firefox";
firefox.marca = "apple";
firefox.numeroSerie = 1234;
firefox.procendencia = "usa";
firefox.getInfo = function () {
  return `El nombre del producto es ${this.nombre} el modelo es ${this.modelo} de la marca ${this.marca}`;
};

/*CONSTRUCTOR DE OBJETOS */
function makeMobile(props) {
  this.nombre = props.nombre;
  this.modelo = props.modelo;
  this.marca = props.marca;
  this.numeroSerie = props.numeroSerie;
  this.procedencia = props.procedencia;
  this.getInfo = function () {
    return `El nombre del producto es ${this.nombre} el modelo es ${this.modelo} de la marca ${this.marca}`;
  };
}

let celularUno = new makeMobile({
  nombre: "celularUno",
  modelo: "modeloUno",
  marca: "marcaUno",
  numeroSerie: "unoserie",
  procedencia: "china",
});

console.log("celularUno", celularUno.getInfo());

let celuLarDos = new makeMobile({
  nombre: "celulardos",
  modelo: "modelodos",
  marca: "marcados",
  numeroSerie: "dosserie",
  procedencia: "china",
});

console.log("celuLarDos", celuLarDos.getInfo());


