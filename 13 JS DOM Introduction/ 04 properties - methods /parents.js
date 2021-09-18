// parent elements
const bold = document.querySelector('b');

bold.parentElement.innerText; // this way we access to the parent element of <b>, in this case <p>
bold.parentElement.parentElement // this way we access to the parent of the parent, this case <b> <- <p> <- <section>


// child element
bold.children // this way we access to the childen of <b> in this case <small>
// if had many children will return an array like, that can be access using []
// example bold.children[2] to access the third children

// sibling element
const paragraph = document.querySelector('p'); // first <p> inside <article>
paragraph.nextElementSibling.textContent = 'brother!';  // this way we access to the brother element
// in this case inside of <section> we have 2 <p>, so the brother is the second <p>



// create an element in the dom
const newP = document.createElement('p'); // inside the () we specified the tag, in this case a paragraph
newP.innerText = 'Soy un nuevo elemento creado desde js';

// append the element in the page
document.querySelector('section').appendChild(newP); // this will insert the new paragraph created
// inside <section> and the position will be the last


// append and prepend
// another method is called append, one of many function it has is that you can add multiple elements
const para = document.createElement('p');
const para2 = document.createElement('p');
const prePara = document.createElement('p');

para.innerText = 'Nuevo paragraph creado para ser usado en append'
para2.innerText = 'Nuevo paragraph creado para ser usado en append 2222222'
prePara.innerText = 'Nuevo paragraph creado para ser usado en prepend, es decir, ser el primer child'

document.querySelector('section').append(para, para2);
document.querySelector('section').prepend(prePara);

// insert adjacent element
// this will insert an element, not inside another element nor as a parent
// will be more like a sibbling, based on the origin element selected
const h2 = document.createElement('h2');
h2.innerText = 'Soy un titulo h2';
document.querySelector('h1').insertAdjacentElement("afterend", h2); // after h1, insert the h2


// other methods that work exactly the same, but to delete
document.getElementById('to-delete').removeChild(document.getElementById('small-delete'));

// delete directly, without the child thing
const toDelete = document.getElementById('last-element');
toDelete.remove();