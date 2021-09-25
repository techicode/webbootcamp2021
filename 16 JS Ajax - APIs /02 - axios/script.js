axios.get('https://pokeapi.co/api/v2/pokemon/1/')
    .then(res => {
        console.log(res.data.name);
    })
    .catch(err => {
        console.log('ERROR! ', err);
    })

// async way
const fetchAsync = async (pokeID) => {
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeID}/`);
        console.log(res.data.name);
    } catch (e) {
        console.log('Error!', e);
    }
}

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');



const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLi = document.createElement('li');
    newLi.append(jokeText);
    jokes.append(newLi);
}



const getDadJoke = async () => {
    const config = { headers: {Accept: 'application/json'}}; // change header to get the json version
    const res = await axios.get('https://icanhazdadjoke.com/', config); // add the config as a parameter
    return res.data.joke;
}

button.addEventListener('click', addNewJoke);
