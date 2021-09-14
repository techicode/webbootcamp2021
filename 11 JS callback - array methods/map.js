// define a simple array
const texts = ['rofl', 'lol', 'omg', 'lmao'];

// with the map , we can transform (apply a function to each element) the texts array and store in another array
const caps = texts.map(function (t){
    return t.toUpperCase();
})

console.log(texts); // [ 'rofl', 'lol', 'omg', 'lmao' ]

console.log(caps); // [ 'ROFL', 'LOL', 'OMG', 'LMAO' ]


// it can be used to other things, like extract an element from an array of objects
// example, we want to store only the title of the array of objects called movie
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

const titles = movies.map(function (m) {
    return m.title;
})

console.log(titles); // [ 'Amadeus', 'Stand by me', 'Parasite', 'Alien' ]
