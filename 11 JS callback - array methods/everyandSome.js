// every
const namesWithD = ['Diego', 'David', 'Daniela'];
// array.every(function)
// the function work as conditional, if every element of the array is true, the entire result is true
// but if even only is not true, the entire result is false
if (namesWithD.every(name => name.charAt(0) === 'D')) {
    console.log('Todos los nombres empiezan con D')
} else {
    console.log('No todos los nombres empiezan con D')
}

// some
// similar with every, but here even with only true result, the entire result will be true
if (namesWithD.some(name => name.length > 5)) {
    console.log('Uno o mas nombres tienen un largo mayor a 5 caracteres')
} else {
    console.log('Ningun nombre tiene un largo mayor a 5 caracteres')
}