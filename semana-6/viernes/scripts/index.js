/*CCSOM */
const button = document.querySelector("button");
const body = document.querySelector("body");

button.onclick = function () {
  console.log("funcion!!!");
  //   body.style.backgroundColor = `yellow`;

  console.log(window.getComputedStyle(body).backgroundColor);
  console.log("body.style.backgroundColor", body.style.backgroundColor);
  console.log("body.style", body.style);

  if (body.style.backgroundColor == "yellow") {
    body.style.backgroundColor = "red";
  } else {
    body.style.backgroundColor = "yellow";
  }
};
