const body = document.querySelector('body');

const userAction = async (pokeID) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeID}/`);
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    // console.log(myJson.name);
    // console.log(myJson);
    return await myJson;
}

for (let i = 1; i <= 151; i++) {
    const divCard = document.createElement('div');
    divCard.className = 'card text-white';
    // divCard.textContent = await userAction(i).then(value => value.name);
    const imgPoke = document.createElement('img');
    imgPoke.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    divCard.appendChild(imgPoke);
    body.appendChild(divCard);
}


