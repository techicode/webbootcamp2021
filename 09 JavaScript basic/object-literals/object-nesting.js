// array of objects
const wishList = [
    {
        product: 'Guitar',
        price: 1000,
        quantity: 1
    },
    {
        product: 'Mechanical Keyboard',
        price: 100,
        quantity: 4
    },
    {
        product: 'Pc Monitor',
        price: 500,
        quantity: 1
    }
]

// access to array of objects
console.log(wishList[1].product + " $"+ wishList[1].price + " usd"); // Mechanical Keyboard $100 usd

console.log(wishList[0].product + " $" + wishList[0].price + " usd"); // Guitar $1000 usd

// object with a nested object

const favoriteFood = {
    vegetal: 'tomato',
    fruit: 'orange',
    menu: {
        japanse: 'ramen',
        chinese: 'wonton'
    }
}

// access to nested objects
console.log(favoriteFood.menu.japanse); // ramen

console.log(favoriteFood.menu.chinese); // wonton

