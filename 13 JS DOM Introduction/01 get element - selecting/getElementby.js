let header = document.getElementById("header");

// this will be a collection of elements p
let paragraphs = document.getElementsByTagName("p");

// for (let paragraph of paragraphs) {
//   setTimeout(() => {
//     paragraph.innerText = "Testing things";
//   }, 1500);
// }

let mainBody = document.getElementsByClassName("main-thing");

// but the best one to select many things using only one method is using document.querySelector()
// query selector get only 1 element (the first one), if we want all we use document.querySelectorAll()

// for classes
let main = document.querySelector(".main-thing");
// for all elements of that class
let mains = document.querySelectorAll(".main-thing"); // collection of elements with that class

// for elements
let p = document.querySelector("p");
// for all ements with that tag
let ps = document.querySelectorAll("p"); // collection of elements with that class

// for id
let head = document.querySelector("#header");
// id must be unique, so is not necessary collecct "all ids"
