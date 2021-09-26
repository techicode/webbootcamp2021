// import the module, the folder must be declared, here is in the same folder ./
const modMath = require('./module'); // the name of the const is how the functions of the module can be called


// using the module name given, call the functions
console.log(modMath.add(8, 10));
console.log(modMath.mult(10, 5));