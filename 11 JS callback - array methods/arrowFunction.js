// normal function no args
function saySomething() {
    console.log('Something!');
}
// arraw function no args
const screamSomething = () => console.log('SOMETHING!');

// normal function with args
function greetName(name) {
    console.log(`Hello ${name} !!`);
}
// arrow function with args
const greetSurname = (surname) => console.log(`Hello ${surname}`);

// if the function only use 1 arg, parentheses can be omitted
const square = num => console.log(num * num);

// normal return use { } and return keyword
const returnThing = thing => {
    return thing;
}

// implicity return dont use {} nor return, instead use ()
const returnNum = num => (
    num
)

// abreviate return
const returnName = name => name.toUpperCase();
const sum = (num1, num2) => num1 + num2;


// using arrow with the map
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

const movieScores = movies.map((movie) => (
    `${movie.title} - Score: ${movie.score / 10}`
    ))

console.log(movieScores);
// ["Amadeus - Score: 9.9", "Stand by me - Score: 8.5", "Parasite - Score: 9.5", "Alien - Score: 9"]