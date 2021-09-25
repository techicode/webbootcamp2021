const body = document.querySelector('body');



for (let i = 1; i <= 151; i++) {
    const divCard = document.createElement('div');
    divCard.className = 'card text-white';
    // divCard.textContent = await userAction(i).then(value => value.name);
    const imgPoke = document.createElement('img');
    imgPoke.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    divCard.appendChild(imgPoke);
    body.appendChild(divCard);
}


