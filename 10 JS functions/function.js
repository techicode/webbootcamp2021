// how to define a function
function saySomething() {
    console.log('Something!');
}
// call a function
saySomething();

// function with args
function greetName(name) {
    console.log(`Hello ${name} !!`);
}
greetName('Pepito');

// functions with multiple args
function fullNamePrint(firstName, secondName) {
    console.log(`Your full name is ${firstName} ${secondName}.`);
}
fullNamePrint('Pepe', 'Perez');

// function with return
function sum(x, y) {
    return x + y;
}
console.log(sum(2, 6));

// Function Expressions
const square = function (num) {
    return num * num;
}

// function as arguments
const hello = function () { console.log('hello!!')};
const bye = function () { console.log('bye!!')};

const sayHelloBye = (funcHello, funcBye) => {
    funcHello();
    funcBye();
}

sayHelloBye(hello, bye);