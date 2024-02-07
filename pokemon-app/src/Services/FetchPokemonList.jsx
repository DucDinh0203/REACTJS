import axios from 'axios';
import FetchPokemon from './FetchPokemon';

const FetchPokemonList = async (page) => {
    const offset = 9 * (page - 1);
    const URL_POKEMON_LIST = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=9`;

    const res = await axios.get(URL_POKEMON_LIST);
    const pokemonList = res.data.results;
    
    const promise = pokemonList.map (async (pokemon) => {
        const pokeData = await FetchPokemon(pokemon.name);
        console.log(pokeData);
    });
}

export default FetchPokemonList;