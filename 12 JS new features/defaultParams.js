// if the params is called without a value, default numside will be 6
const rollDice = function (numSide = 6) {
    return Math.floor(Math.random() * numSide) + 1;
}

console.log(rollDice()); // default numside 6
console.log(rollDice()); // default numside 6
console.log(rollDice(20)); // the default is not neccesary, because an argument is passed
console.log(rollDice(20)); // the default is not neccesary, because an argument is passed


// the same but as a arrow function
const sum = (a, b = 5) => a + b;

console.log(sum(4, 5));
console.log(sum(4));

// when there's 2 or more args, the default one must be the last