/*
crear una funcion que reciba 2 argumentos , el primero sera el nombre y el segundo un apellido.
Se desea que estos tenga el primer caracter en mayuscula y concatener los 2 argumentos
function makeFullName(argOne, argTwo)


makeFullName("sebastian", "yabiku") // Sebastian Yabiku
makeFullName("JOSE", "MONZON") // Jose Monzon

// Uppercase
// lowercase
// concat 
// substring
// charAt
*/

function makeFullName(ArgOne, ArgTwo) {
  let ArgOneString = ArgOne.toString();
  let ArgTwoString = ArgTwo.toString();
  const ArgOneEnd =
    ArgOneString.charAt(0).toUpperCase() + ArgOneString.slice(1).toLowerCase();
  const ArgTwoEnd =
    ArgTwoString.charAt(0).toUpperCase() + ArgTwoString.slice(1).toLowerCase();
  let fullname = `${ArgOneEnd} ${ArgTwoEnd}`;

  return fullname;
}

console.log(makeFullName("SEBASTIAN", "YABIKU"));
console.log(makeFullName("jose", "yabiku"));
console.log(makeFullName("MARIA", "yabiku"));
console.log(makeFullName("maria", "albina"));

function makeFullName1(firstname, lastname) {
  return `${firstname.charAt(0).toUpperCase()}${firstname
    .substring(1)
    .toLowerCase()} ${lastname.charAt(0).toUpperCase()}${lastname
    .substring(1)
    .toLowerCase()}`;
}

console.log("makeFullName1", makeFullName1("pedro", "espinoza"));

/*
 Determinar cuantas veces se repite un caracter en un string

 function countRepeatLetter(argOne, argTwo) 

 countRepeatLetter("sebastian", "a")  // 2
 countRepeatLetter("jose", "e")  // 1
*/
function countRepeatLetter(stringCharacter, letterFind) {
  let totalLetra = 0;

  for (let index = 0; index < stringCharacter.length; index++) {
    if (stringCharacter[index] === letterFind) {
      totalLetra++;
    }
  }

  return totalLetra;
}

console.log(countRepeatLetter("anastacia", "a"));
console.log(countRepeatLetter("juansaul", "s"));

// TENIENDO LA SIGUIENTE COLECCION
let numeros = [0, 1, 2, 3, 4, 5, 6];

// usando el metodo map crear un programa que reciba un numero
// y lo multiplique por cada elemento del array
// function multiploN(col, num)
// multiploN([0,1,2,3,4], 3) // [0,3,6,9, 12]
// multiploN([0,1,2,3,4], 4) // [0,4,8,12, 16]
// utilizar el metodo map

function multiploN(col, num) {
  return col.map((numEl) => {
    return numEl * num;
  });
}

console.log("multiploN", multiploN(numeros, 3));
console.log("multiploN", multiploN([10, 20, 30], 3));
console.log("multiploN", multiploN([20, 30, 40], 2));
// TENIENDO LA SIGUIENTE coleccion
let mascotas = [
  {
    name: "aronis",
    edad: 12,
    sexo: "m",
  },
  {
    name: "terry",
    edad: 4,
    sexo: "m",
  },
  {
    name: "juda",
    edad: 3,
    sexo: "h",
  },
  {
    name: "aronis 2",
    edad: 8,
    sexo: "h",
  },
];

// filtrar mascotas por edad mayores de 4 y menores de 4
// filtrar por sexo macho o hembra
// los datos filtrados guardarlo en una constante e imprimir valores filtrados
// utilizar el metodo filter
const mayor4Anios = mascotas.filter((mascota) => {
  return mascota.edad > 4;
});
const menor4Anios = mascotas.filter((mascota) => {
  return mascota.edad < 4;
});

const machos = mascotas.filter((mascota) => {
  return mascota.sexo == "m";
});

const hembras = mascotas.filter((mascota) => {
  return mascota.sexo == "h";
});

console.log("mayor4Anios", mayor4Anios);
console.log("menor4Anios", menor4Anios);
console.log("machos", mayor4Anios);
console.log("hembras", menor4Anios);
