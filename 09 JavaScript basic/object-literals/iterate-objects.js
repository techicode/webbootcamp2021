const favCharacters = {
    anime: 'gon',
    peli: 'dr strange',
    serie: 'dr house',
    libro: 'harry'
}

// show only the keys
for (let favCharactersKey in favCharacters) {
    console.log(favCharactersKey);
}

// show the values of every key
for (const favCharactersKey in favCharacters) {
    console.log(favCharacters[favCharactersKey])
}

// using the function of Object
// using Object.values()
for (const favCharacter of Object.values(favCharacters)) {
    console.log(favCharacter)
}

