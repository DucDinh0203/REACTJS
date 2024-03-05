import axios from 'axios';
import FetchPokemon from './FetchPokemon';

const FetchPokemonList = async (page) => {
    const offset = 9 * (page - 1);
    const URL_POKEMON_LIST = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=9`;

    const res = await axios.get(URL_POKEMON_LIST);
    const pokemonList = res.data.results;
    
    // Create an array of promises for fetching each Pokemon's details
    const promises = pokemonList.map(async (pokemon) => (await FetchPokemon(pokemon.name)));
    
    // Wait for all promises to resolve
    const pokemonData = await Promise.all(promises);
    // console.log(pokemonData);
    return pokemonData;
}

export default FetchPokemonList;

// const FetchingPokemonLists = async ({queryKey}) => {
//     const {offset} = queryKey[1];
//     const res = await axios.get(
//         `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=9`
//     );
//     return res.data;
// };

// export default FetchingPokemonLists;