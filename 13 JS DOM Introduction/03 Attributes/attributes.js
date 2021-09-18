// save into a var the element with the id #link
let link = document.querySelector('#link');

setTimeout(() => {
  // change the id of an element
  document.querySelector("h1").id = "danger";

  // change the text of an element
  document.querySelector("h1").innerText = "Peligro!!";

  // change the style of the link element
  link.style.backgroundColor = "#fab";
}, 2000);

