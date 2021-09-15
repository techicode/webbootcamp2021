document.querySelector(".parag").innerText =
  "Soy un paragraph usando una clase llamada parag";

document.querySelector(".title").textContent = "Manipulando html con JS";

// the main difference between innerText and textContent is textcontent will show all things
// even if some parte of the paragraph are hidden

// if we want to change not only the text, but also some html tags we use innerHTML
document.querySelector(".id-p").innerHTML =
  "Soy un <b>paragraph</b> con una id";

// sum text to an existent element
document.querySelector("h2").innerText += " modificandolas en el DOM";
