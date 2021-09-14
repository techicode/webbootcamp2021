const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// with filter we can create another array from an existent array
// but with only elements that pass a conditional function
// example, only pass elements that are even numbers

const pairNumbers = numbers.filter((n) => {
    return n % 2 === 0 // only return when this is true
})

console.log(pairNumbers); // [2,  4,  6, 8, 10, 12, 14]

// example with objects

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand by me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

const moviesOver90 = movies.filter(m => m.score > 90);

console.log(moviesOver90); // [ { title: 'Amadeus', score: 99 }, { title: 'Parasite', score: 95 } ]

