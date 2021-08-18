// iterate a normal array
const listaComidas = ['pizza', 'lasagna', 'papas fritas', 'pollo asado'];

for (let food of listaComidas) {
    console.log(food);
}

// iterate nested array
const listaComidasPais = [
    ['japon', 'italia', 'usa'],
    ['sushi', 'pizza', 'hamburguesa'],
    ['ramen', 'lasagna', 'hotdog']
]

for (let food of listaComidasPais) {
    for (let f of food) {
        console.log(f)
    }
}
