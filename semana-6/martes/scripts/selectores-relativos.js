const ul = document.querySelector("ul");

console.log("ul", ul);

/*firstElementChild */
console.log("ul", ul.firstElementChild); // li

/*lastElementChild */
console.log("ul", ul.lastElementChild); // li

/*children */
console.log("ul", ul.children); // [li, li, li ,li]
console.log("ul", ul.children[0]);
console.log("ul", ul.children[1]);
Array.from(ul.children); // se transformo a un array JS

/*sibbling previous*/
console.log(ul.previousElementSibling.previousElementSibling);

/*sibbling next*/
console.log(ul.nextElementSibling);

/*parent */
console.log(ul.parentElement); // body
console.log(ul.parentElement.querySelector("h1")); // h1

/*closest */
console.log(document.querySelector("li").closest("html"));
console.log(document.querySelector("li").closest("html").querySelector("h1"));
