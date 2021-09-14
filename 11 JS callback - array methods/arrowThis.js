// here an simple example of an function using this
const person = {
    name: 'pepe',
    age: 15,
    fullData: function () {
        return `${this.name} and age is ${this.age}`
    }
}

console.log(person.fullData()); // pepe and age is 15
// will work right

// but if whe used the arrow function instead
const maria = {
    name: 'Maria',
    age: 20,
    fullData: () => `${this.name} and her age is ${this.age}`
}

console.log(maria.fullData()); // undefined and her age is undefined
// the this. keyword will be refered to the arrow function , not the the object, thats why it returns undefined