const person1 = {
    name: 'Juana',
    lastName: 'La cubana',
    age: '25'
}

const person2 = {
    name: 'Esteban',
    lastName: 'Dido',
    bornDate: '05/05/1952'
}

const getFullName = ({name, lastName}) => {
    return `${name} ${lastName} !!`
}

console.log(getFullName(person1)); // Juana La cubana !!

console.log(getFullName(person2)); // Esteban Dido !!
