const prices = [5500, 2550, 4990, 5520, 990, 490, 12990];

const promedioPrecio = prices.reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue;
})

console.log(promedioPrecio);

const minPrecio = prices.reduce((min, currentValue) => {
    //console.log(`min: ${min} ~~ current: ${currentValue}`);
    if (currentValue < min) {
        return currentValue; // is not a normal return, instead save currentvalue in min (the accumulator var)
    }
    return min;  // always is going to return min, because always return the accumulator
    // this will be repeated until only 1 value is left, and that will be really returned
})

console.log(minPrecio);

// ejemplo con objetos

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

const bestMovie = movies.reduce((best, current) => {
    if (current.score > best.score) {
        return current;
    }
    return best;
})

const worstMovie = movies.reduce((worst, current) => {
    if (current.score < worst.score) {
        return current;
    }
    return worst;
})

console.log(bestMovie);
console.log(worstMovie);
