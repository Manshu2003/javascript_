// let a = document.querySelector("h1");
// a.innerHTML = "Wow This World is Awsome";
// a.style.backgroundColor = "red";
// a.style.color = "black";

// let p = document.querySelector("p");
// p.innerHTML = " World toh bhot acha hai but kya yeh aise hi rehega";

// p.addEventListener("click", () => {
//   p.style.backgroundColor = "yellow";
// });

// let box = document.querySelector("p");

// let buttion = document.querySelector("button");
// let offbutton = document.querySelector(".offbutton");
// buttion.addEventListener("click", () => {
//   box.style.scale = "1";
// });
// offbutton.addEventListener("click", () => {
//   box.style.scale = "0.5";
// });

// =========================================
// inserting elements

// let div = document.querySelector("div");
// let p = document.createElement("p");
// p.innerHTML = "New Paragraph";
// // div.append(p);  

// div.insertAdjacentElement('beforeend',p)


//Q1. create a paragraph with text "mai tumse pyar karta hun" and add bgcolor to black and font color to green using js.

let p = document.createElement('p');
p.innerText= "mai tumse pyar karta hun";
// p.style.backgroundColor="black"
// p.style.color="green"
// p.style.fontSize="30px"

p.setAttribute('style','background-color: black; Color: green')
let body = document.querySelector('body');
body.append(p);

// Q2.

let button = document.createElement('button');
button.innerText= "click me";
p.prepend(button)


//Q3.


