// fetch('https://pokeapi.co/api/v2/pokemon/1/')
//     .then(res => {
//         console.log('RESPONSE ->> ', res);
//         return res.json()
//     })
//     .then (data => {
//         console.log('Data parsed..', data);
//         console.log(data.name);
//     })
//     .catch(error => {
//         console.log('ERROR!! ->> ', error);
//     })

const fetchAsyncPoke = async (numPoke) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${numPoke}/`);
        const data = await res.json();
        console.log(data.name);
    } catch (e) {
        console.log('Error, pokemon no encontrado', e);
    }
}