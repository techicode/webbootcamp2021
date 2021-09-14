try {
    pepe.print(); // forced error
} catch { // catch any error
    console.log(`There's an error.`)
}

try {
    asd().toUpperCase();
} catch (e) { // the variable e is the error we get
    console.log(`The error was: ${e}`)
}
