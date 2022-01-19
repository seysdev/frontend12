const p = document.querySelectorAll("p");
console.log(p);
console.log("%O", p[0]);

p[0].innerHTML = "<b>hola mundo desde js</b>"; // para insertar html
p[1].textContent = "<b>hola mundo desde js</b>"; // para insertar texto
p[2].style.backgroundColor = "red"; // style para agregar estilos
p[2].style.color = "white"; // style para agregar estilos

p[3].setAttribute("style", "color:red; background-color:orange");
p[3].setAttribute("class", "clase-agregada");
p[3].setAttribute("id", "id-agregado");

setTimeout(() => {
  p[3].removeAttribute("style");
  p[3].removeAttribute("class");
  p[3].removeAttribute("id");
}, 2000);

console.log(p[3].clientWidth);
console.log(p[3].clientHeight);
