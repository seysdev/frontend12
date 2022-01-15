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
