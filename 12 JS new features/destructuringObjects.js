// same as destructuring arrays but with objects

const persona = {
    name: 'pepe',
    lastName: 'Perez',
    age: 15,
    bloodType: 'b+',
    born: '01/02/1992'
}

const {name, lastName} = persona; // this will create a variable with the exact name of the objects propertie

console.log(name); // pepe
console.log(lastName); // Perez

// if we need it, we can change the variable name using objectvar : ourvariable
const { born: birthday } = persona;

console.log(birthday); // 01/02/1992

// if a variable doesnt exist in the object, we can use default value for that
const { age, bloodType, city = 'N/A'} = persona;
console.log(age); // 15
console.log(bloodType); // b+
console.log(city); // N/A 