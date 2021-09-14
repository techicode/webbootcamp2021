const nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

nums.forEach(function (n) { // n is the name of the element of the array
    console.log(`${n} es un numero`);
});

// you can use any name , example here is called numerito
nums.forEach(function (numerito) {
    console.log(numerito * 5);
});


// it can be used in array of objects

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

movies.forEach(function (m) {
    console.log(`${m.title} - ${m.score}/100`);
});

