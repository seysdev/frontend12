function ejercicioDos() {
  let notas = [0, 0, 0, 0];
  notas[0] = Number(prompt("Ingresar primera nota"));
  notas[1] = Number(prompt("Ingresar segunda nota"));
  notas[2] = Number(prompt("Ingresar tercera nota"));
  notas[3] = Number(prompt("Ingresar cuarta nota"));

  let suma = notas[0] + notas[1] + notas[2] + notas[3];
  let promedio = suma / notas.length;

  console.log("El promedio de las notas es", promedio);
}
// ejercicioDos();

function ejercicioTres() {
  function areaRectangulo(base, altura) {
    return base * altura;
  }

  console.log(areaRectangulo(10, 20));
  console.log(areaRectangulo(20, 40));
}
// ejercicioTres();

function ejercicioCuatro() {
  function areaTriangulo(base, altura) {
    return (base * altura) / 2;
  }

  console.log(areaTriangulo(10, 20));
  console.log(areaTriangulo(20, 40));
}
// ejercicioCuatro();

function ejercicioCinco() {
  function circumferencia() {
    let radio = Number(prompt("Ingresar radio"));

    return Math.PI * Math.pow(radio, 2);
  }

  circumferencia();
}
// ejercicioCinco();

function ejercicioSeis() {
  const horasTrabajadas = prompt("Horas Trabajadas");
  const salario = prompt("Salario");

  console.log("Salario total =", horasTrabajadas * salario);
}

// ejercicioSeis();

function ejercicioTrece() {
  const alumnos = [
    {
      nombre: "sebastian",
      calificacion: 14,
    },
    {
      nombre: "melisa",
      calificacion: 12,
    },
    {
      nombre: "jose",
      calificacion: 13,
    },
    {
      nombre: "hector",
      calificacion: 08,
    },
    {
      nombre: "hector",
      calificacion: 08,
    },
  ];

  let estadoAlumnos = {
    aprobados: 0,
    desaprobados: 0,
  };

  for (let index = 0; index < alumnos.length; index++) {
    console.log(index);
    console.log(alumnos[index]);
    if (alumnos[index].calificacion > 11) {
      estadoAlumnos.aprobados = estadoAlumnos.aprobados + 1;
    } else {
      estadoAlumnos.desaprobados = estadoAlumnos.desaprobados + 1;
    }
  }

  console.log("estadoAlumnos", estadoAlumnos);
}

// ejercicioTrece();

function ejercicioCatorce() {
  let focos = [
    "verde",
    "blanco",
    "rojo",
    "verde",
    "blanco",
    "rojo",
    "verde",
    "blanco",
    "rojo",
    "verde",
    "blanco",
    "rojo",
    "verde",
    "blanco",
    "rojo",
    "verde",
    "blanco",
    "rojo",
    "verde",
    "blanco",
    "rojo",
    "verde",
    "blanco",
    "rojo",
    "rojo",
    "rojo",
    "rojo",
    "rojo",
  ];

  const totalFocos = {
    verde: 0,
    rojo: 0,
    blanco: 0,
  };

  for (let index = 0; index < focos.length; index++) {
    if (focos[index] == "verde") {
      totalFocos.verde = totalFocos.verde + 1;
    } else if (focos[index] == "rojo") {
      totalFocos.rojo = totalFocos.rojo + 1;
    } else {
      totalFocos.blanco = totalFocos.blanco + 1;
    }
  }

  console.log("totalFocos", totalFocos);
}

ejercicioCatorce();
