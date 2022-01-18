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
