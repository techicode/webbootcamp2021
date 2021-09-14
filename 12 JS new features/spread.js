// some functions needs many args, but if we passed an array with many values, this will not work
// example using min with an array
const numbers = [1, 2, 3, 4, 10, 15, 20];
console.log(Math.min(numbers)); // NaN
// will not work because only accepts args, not an array

// instead we use the ... to separate the array in many args as neccessary
console.log(Math.min(...numbers)) //  1
// this way is like we convert the array [1, 2, 3, 4] to (1, 2, 3, 4)


//spread with array
const fruits = ['apple', 'orange', 'kiwi'];
const vegs = ['spinach', 'lettuce'];

// right way
const fruitsAndVegs = [...fruits, ...vegs];

// wrong way
const testing = fruits + vegs;

console.log(fruitsAndVegs); // [ 'apple', 'orange', 'kiwi', 'spinach', 'lettuce' ]

console.log(testing); // apple,orange,kiwispinach,lettuce

// spray with objects
const dog = {
    name: 'firulai',
    race: 'kiltro',
    color: 'black'
}

const anotherDog = {
    name: 'spike',
    race: 'kiltro',
    age: 6
}

// this way only add an non existent object value and conserve the repeated value of the last object passed
const kiltros = {...anotherDog, ...dog};
console.log(kiltros); // { name: 'firulai', race: 'kiltro', age: 6, color: 'black' }

// add more values to an existent object
const firulayFull = {...dog, age: 10};
console.log(firulayFull); // { name: 'firulai', race: 'kiltro', color: 'black', age: 10 }
