import axios from 'axios';


const FetchPokemon = async (pokemon) => {
    const URL_POKEMON = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    const response = await axios.get(URL_POKEMON);
    const pokemonData = response.data;
    // console.log('Pokemon data: ',pokemonData.name + ' ' + pokemonData.height + ' ' + pokemonData.types.length);
    return pokemonData;
};

export default FetchPokemon;

// const fetchingPokemon = async ({queryKey}) => {
//     const {pokemonName} = queryKey[1];

//     const res = await axios.get(
//         `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
//     );

//     if(!res.ok) {
//         throw new Error(`Couldn't find this Pokemon ${pokemonName}`);
//     }

//     return res.data;
// };

// export default fetchingPokemon;