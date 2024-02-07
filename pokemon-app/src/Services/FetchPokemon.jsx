import axios from 'axios';

const FetchPokemon = async (pokemon) => {
    const URL_POKEMON = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    const response = await axios.get(URL_POKEMON);
    const pokemonData = response.data;
    
    return pokemonData;
};

export default FetchPokemon;