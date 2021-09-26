const jokes = require("one-liner-joke");
const color = require("colors");
const cowsay = require("cowsay");



console.log(jokes.getRandomJoke().body.rainbow);
const jojo = jokes.getRandomJoke().toString();
console.log(typeof  jojo);

console.log(cowsay.say({
    text : `${jojo}`,
    e : "oO",
    T : "U "
}));