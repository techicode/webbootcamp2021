const fruits = ['Kiwi', 'Grape', 'Watermelon', 'Apple', 'orange', 'Pineapple'];

// now we can save the values of the array in many variables at the time
const [firstFruit, secondFruit, thirdFruit, ...theRest] = fruits;

console.log(firstFruit); // kiwi
console.log(secondFruit); // Grape
console.log(thirdFruit); // Watermelon

console.log(theRest); // [ 'Apple', 'orange', 'Pineapple' ]
