// SERVICES USANDO FETCH
fetch("https://61ef3d0cd593d20017dbb393.mockapi.io/users") // hago peticion al endpoint
  .then((respuesta) => {
    return respuesta.json(); // interpreto como formato jjson
  })
  .then((respuesta) => {
    // recibi dato de la promesa
    console.log("aca obtuve la respuesta del servidor", respuesta);
  })
  .catch((error) => {
    console.log("error", error);
  });

// console.log("1")
// console.log("2")
// console.log("3")
