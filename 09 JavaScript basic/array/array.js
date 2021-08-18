// array  string
let stringArrays = ['soy', 'un', 'array', 'de', 'strings'];

// array numeros
let numArrays = [1, 2, 3, 4, 5];
let anotherNums = [6, 7, 8, 9, 10];

// array mezclado
let randomArray = [1, null, 'string', true];

// push() add an element to the end of the array
stringArrays.push('uno mas');
console.log(stringArrays); // [ 'soy', 'un', 'array', 'de', 'strings', 'uno mas' ]

// pop() remove the last element of an array [also return it]
let deleteString = stringArrays.pop();
console.log(stringArrays); // [ 'soy', 'un', 'array', 'de', 'strings' ]
console.log(deleteString); // 'uno mas'

// shift() remove the first element of an array [also return it]
let deletedNum = numArrays.shift();
console.log(numArrays); // [ 2, 3, 4, 5 ]
console.log(deletedNum); // 1

// unshift() add an element to the start of the array
numArrays.unshift(0);
console.log(numArrays); // [ 0, 2, 3, 4, 5 ]

// concat() add to an array, another array
let concatArray = numArrays.concat(anotherNums);
console.log(concatArray); // [ 0, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// includes() return a boolean if the arg is found in the array
let boliBoleano = numArrays.includes(5); // true
let unboliBoleando = numArrays.includes(69); // false;

// indexOf() return the index of an element in an array, if is not found returns -1
let indexOfString = stringArrays.indexOf('un'); // 1
let indexNot = stringArrays.indexOf('caca'); // -1

// reverse() reverse an array
numArrays.reverse();
console.log(numArrays); // [ 5, 4, 3, 2, 0 ]

// slice() cut from an arg initial to a end
let sliced = concatArray.slice(4); // slice from index 4 to the end
console.log(sliced); // [ 5, 6, 7, 8, 9, 10 ]
let sliceStartEnd = concatArray.slice(1, 4); // slice from index 1 to before index 4
console.log(sliceStartEnd); // [ 2, 3, 4 ]


// splice() remove or replacing or add an element of an array
let months = ['jan', 'feb', 'april', 'mayonesa'];

// insert an element to index 2
months.splice(2, 0, 'march');
console.log(months); // [ 'jan', 'feb', 'march', 'april', 'mayonesa']

// replace an element at index 4
months.splice(4, 1, 'may');
console.log(months); // [ 'jan', 'feb', 'march', 'april', 'may' ]

// delete an element from index 2, 2 elements
months.splice(2, 2);
console.log(months); // [ 'jan', 'feb', 'may' ]
